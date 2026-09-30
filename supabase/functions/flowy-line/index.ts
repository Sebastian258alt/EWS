// ═══════════════════════════════════════════════════════════
//  flowy-line — Supabase Edge Function
//  Generates ONE short, unpredictable mascot one-liner for
//  Flowy (the floating assistant), via Gemini. Deliberately
//  separate from gemini-chat: this is a tiny, cheap, low-
//  latency call (a bubble line, not a conversation), so it
//  gets its own function with a smaller prompt/output budget
//  and no auth/history requirement.
//
//  Deploy:
//    supabase functions deploy flowy-line
//  Reuses the SAME secret already set for gemini-chat:
//    GEMINI_API_KEY
//  (Dashboard → Edge Functions → flowy-line → Secrets, or
//  `supabase secrets set GEMINI_API_KEY=...` if not already
//  shared project-wide.)
// ═══════════════════════════════════════════════════════════

// deno-lint-ignore-file no-explicit-any
// @ts-ignore Deno remote import — resolved at deploy time by Supabase
import { serve } from 'https://deno.land/std@0.203.0/http/server.ts';

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Human-readable steer for each bubble "key" so the model knows the
// emotional register it needs to hit — kept short on purpose, the
// static MSGS bank in flowy.js is the real style reference and gets
// forwarded as `fallback` below so the model can riff on tone/length.
const KEY_HINTS: Record<string, string> = {
  idle: 'the mascot is bored, waiting for the user to do something',
  help: 'the mascot is offering a small, encouraging nudge to keep learning',
  happy: 'the mascot is delighted, reacting to something going well',
  sad: 'the mascot is a bit sad or disappointed, but gentle, never mean',
  roaming: 'the mascot is wandering around the screen, musing to itself',
  sleeping: 'the mascot is sleepy or about to nap',
  celebrating: 'the mascot is celebrating a win — hype, confetti energy',
  excited: 'the mascot is excited about something upcoming',
  love: 'the mascot is affectionate/fond of the user',
  surprised: 'the mascot is surprised or startled, comic timing',
  confused: 'the mascot is puzzled, tilting its head',
  yawn: 'the mascot is yawning, low energy, teasing the user to continue',
  tickle: 'the user poked/clicked the mascot repeatedly, it is ticklish and reacting',
  joke_i: 'the mascot is telling a short, silly, informal joke about English learning',
  jokes_informal: 'the mascot is telling a short, silly, informal joke about English learning',
  lesson: 'the mascot is hyping up starting a lesson',
  listening: 'the mascot is listening for voice input, alert and attentive',
  tab_tip: 'the mascot is giving a bite-sized tip relevant to the screen the user is on',
  tab_entry: 'the mascot is welcoming the user to this screen/tab',
  easter_dance: 'the mascot is dancing, playful and silly',
  easter_shades: 'the mascot just put on sunglasses, smug and cool',
};

function buildPrompt(key: string, lang: string, fallback: string, extra: Record<string, any>) {
  const langName = lang === 'pt' ? 'European/Brazilian-neutral Portuguese' : 'English';
  const hint = KEY_HINTS[key] || 'a short reaction from a friendly language-learning mascot';
  const extraBits = Object.keys(extra || {}).length
    ? `\nExtra context (use only if it naturally fits, ignore otherwise): ${JSON.stringify(extra)}`
    : '';

  return [
    `You are the voice of "Flowy", a tiny floating mascot inside an English-learning app called EnglishFlow.`,
    `Write ONE new short line for this moment: ${hint}.`,
    `Language: ${langName}.`,
    `An example of the style/length/tone to match (do NOT reuse it, write something fresh and different): "${fallback}"`,
    extraBits,
    ``,
    `Rules:`,
    `- Output ONLY the line itself. No quotes, no labels, no markdown, no explanation.`,
    `- Keep it under 90 characters.`,
    `- At most one emoji, only if it fits naturally.`,
    `- Playful, warm, a little unpredictable/surprising — never repetitive or generic.`,
    `- Never mention being an AI, a model, or a prompt.`,
    `- Keep it appropriate for all ages.`,
  ].join('\n');
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }

  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'AI not configured' }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const key = typeof body.key === 'string' ? body.key.slice(0, 40) : 'idle';
    const lang = body.lang === 'pt' ? 'pt' : 'en';
    const fallback = typeof body.fallback === 'string' ? body.fallback.slice(0, 200) : '';
    const extra = (body.extra && typeof body.extra === 'object') ? body.extra : {};

    const prompt = buildPrompt(key, lang, fallback, extra);

    const geminiRes = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 1.15,
          topP: 0.97,
          maxOutputTokens: 60,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
        ],
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => '');
      console.error('[flowy-line] Gemini error', geminiRes.status, errText);
      return new Response(JSON.stringify({ error: 'AI upstream error' }), {
        status: 502,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const data = await geminiRes.json();
    let line: string =
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text || '').join('') || '';

    line = line.trim().replace(/^["'“”]+|["'“”]+$/g, '');
    // Hard safety net on length — the prompt asks for <90 chars but never trust the model
    if (line.length > 140) line = line.slice(0, 137).trimEnd() + '…';

    if (!line) {
      return new Response(JSON.stringify({ line: null }), {
        status: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ line }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[flowy-line] error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  }
});
