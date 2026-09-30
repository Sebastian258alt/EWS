// ═══════════════════════════════════════════════════════════
//  🐥 flowy/data-tab-tips.js — Per-tab tips, bilingual (pure data)
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';

  // ── Tab tips (bilingual) ────────────────────────────────
  const TAB_TIPS = {
    en: {
      home: {
        entry: [
          'Welcome back! 🏠 Ready to level up today?',
          'Home sweet home! 🎉 Let\'s get some XP!',
          'You\'re here! Daily challenge is waiting 👀',
          'Hello there! Let\'s make today count 🌟',
        ],
        tips: [
          'Your streak won\'t protect itself 🔥 Do a lesson!',
          'Daily challenge = free XP 🎁 Don\'t be lazy!',
          'The leaderboard isn\'t going to top itself 🏆',
          'One lesson = happy Flowy. Zero lessons = sad Flowy 🥺',
          '50 XP a day keeps failure away 💪',
          'Click "Continue learning" — I dare you 😏',
          'Your XP bar is looking… hungry 🍽️',
          'Did you do today\'s challenge? NO?! 😤 GO!',
          'Streaks are like plants 🌱 water them daily!',
          'That "level up" feeling won\'t come alone 🚀',
          'Why not try a grammar lesson today? 📖',
          'The AI tutor is literally free. USE IT. 🤖',
        ],
      },
      grammar: {
        entry: [
          'Grammar time! 📖 My favourite! (not really 😅)',
          'Ooh grammar lab! Try not to cry 😬',
          'Grammar! The fun never ends… 📝 (it does, I promise)',
        ],
        tips: [
          '"I am" not "I is". Write that down. ✍️',
          'Past simple vs Present perfect? Ask me! 🤯',
          'Articles (a/an/the) — the eternal struggle 😩',
          'Pro tip: read your sentence out loud 🗣️',
          'If it sounds weird, it probably IS weird 👂',
          'Confused? Tap me! I explain things nicely 😇',
          '"Their", "there", "they\'re" — three different words! 😤',
          'Third-person "s": she walk❌ she walks✅ 🎯',
          'Conditionals are scary but I believe in you 💪',
          'You\'re doing grammar. That\'s already impressive 👏',
        ],
      },
      sounds: {
        entry: [
          'Sound Lab! 🔊 Your ears are about to get educated!',
          'Pronunciation time! Don\'t be scared 😬🎤',
          'Ooh sounds! This is where the REAL magic happens 🎙️',
        ],
        tips: [
          'The "TH" sound: tongue between teeth, not behind! 👅',
          '"Ship" vs "Sheep" — your teacher can hear the difference 😂',
          'Slow practice first, speed comes later 🐌→🐇',
          'Record yourself! It\'s awkward but it works 🎤',
          'The schwa (ə) is in EVERY English word. Sneaky! 🕵️',
          '"Comfortable" = COM-fter-bull. Yes really. 🤯',
          'Stress the RIGHT syllable or people look confused 😅',
          '"W" is NOT a "V"! "Wine" ≠ "Vine" 🍷',
        ],
      },
      ai: {
        entry: [
          'AI Tutor! 🤖 Ask me ANYTHING — no judgement!',
          'Oh hello! 👋 Ready to answer your questions!',
          'AI mode activated! 🚀 What\'s confusing you today?',
        ],
        tips: [
          'Ask me to explain any grammar rule! 📚',
          'Paste a sentence and ask me to fix it! ✏️',
          'I can quiz you! Just say "Quiz me on past tense" 🎯',
          'Try: "Translate this to formal English" 🎩',
          'Ask me to write an example sentence! 💡',
          'I can help with pronunciation too! 🎤',
          'Ask me anything in Portuguese, I\'ll answer! 🇲🇿',
          'I\'m smarter than autocorrect. Promise. 🧠',
        ],
      },
      profile: {
        entry: [
          'Profile time! 😎 Let\'s check those stats!',
          'Checking yourself out? I respect it 🪞',
          'Your stats are here! Brace yourself 📊',
        ],
        tips: [
          'Those XP points represent real effort! Be proud 💪',
          'Your streak is your commitment meter 🔥',
          'Achievements unlock with more lessons — keep going! 🏅',
          'That accuracy % tells the real story 🎯',
          'Low streak? It resets at midnight ⏰ quick, do a lesson!',
        ],
      },
      about: {
        entry: [
          'The About page! 🎓 Sebastian built this whole thing!',
          'Learning about the creator? Respect! 🙌',
        ],
        tips: [
          'Sebastian has 4+ years of teaching experience 🏆',
          'UEM student AND app creator? Overachiever! 😤',
          'This app was built with love ❤️ and probably no sleep 😴',
          'Mozambique\'s English is about to level up 🇲🇿🚀',
        ],
      },
      // NEW: lesson tab — active lesson view
      lesson: {
        entry: [
          'Lesson time! 📖 Let\'s do this!',
          'You opened a lesson! 🎯 Flowy is CHEERING for you!',
          'Learning activated! 🚀 I\'m watching closely 👁️',
        ],
        tips: [
          'Read the explanation before answering 📖',
          'Stuck on a word? Context clues are your friend 🔍',
          'Wrong answer? It\'s just data. Try again! 📊',
          'Speak the sentence out loud — muscle memory is real 🗣️',
          'Take your time. Speed comes with practice 🐌→🐇',
          'Each step you complete = XP earned 💰',
          'Lesson tip: the example sentence always holds a clue 💡',
          'You\'re building a skill right now. For real. 🏗️',
        ],
      },
      // Support/donation tab (EnglishFlow is 100% free — this is the
      // "Support the project" donation panel, not a paid unlock).
      support: {
        entry: [
          'Aww, thinking about supporting the project? 💛',
          'EnglishFlow is free forever — but every bit of support helps! 🇲🇿',
          'You found the Support page! 🙌',
        ],
        tips: [
          'No plans, no locked lessons — just an optional way to say thanks 💛',
          'M-Pesa / e-Mola accepted — quick and easy 📱',
          'Every donation helps keep EnglishFlow free for everyone 🇲🇿',
          'Whatever you give, no pressure — the app stays 100% free either way 🙏',
        ],
      },
      // NEW: placement test tab
      placement: {
        entry: [
          'Placement Test! 🧪 Let\'s find your real level!',
          'Oh exciting! Your level is about to be discovered 🎯',
          'The test begins! I believe in your score! 🌟',
        ],
        tips: [
          'Answer honestly — it helps you more than cheating! 😇',
          'Don\'t know one? Guess! There\'s no penalty 🎲',
          'Your result determines the perfect starting point 🎯',
          'Placement tests can\'t be failed. Only discovered! 🔍',
          'Take your time. This shapes your whole learning path 🗺️',
        ],
      },
    },

    pt: {
      home: {
        entry: [
          'Bem-vindo de volta! 🏠 Pronto para subir de nível hoje?',
          'Lar doce lar! 🎉 Vamos ganhar XP!',
          'Estás aqui! O desafio diário está à espera 👀',
          'Olá! Vamos fazer hoje valer a pena 🌟',
        ],
        tips: [
          'A tua sequência não se protege sozinha 🔥 Faz uma lição!',
          'Desafio diário = XP grátis 🎁 Não sejas preguiçoso!',
          'O leaderboard não vai para o topo sozinho 🏆',
          'Uma lição = Flowy feliz. Zero lições = Flowy triste 🥺',
          '50 XP por dia mantém o insucesso afastado 💪',
          'Clica em "Continuar a aprender" — CLICA! 😏',
          'A tua barra de XP está… com fome 🍽️',
          'Fizeste o desafio de hoje? NÃO?! 😤 VAI!',
          'As sequências são como plantas 🌱 rega-as diariamente!',
          'Aquela sensação de "subir de nível" não vem sozinha 🚀',
          'Que tal uma lição de gramática hoje? 📖',
          'O tutor IA é literalmente grátis. USA-O. 🤖',
        ],
      },
      grammar: {
        entry: [
          'Hora de gramática! 📖 O meu favorito! (não mesmo 😅)',
          'Oh laboratório de gramática! Tenta não chorar 😬',
          'Gramática! A diversão nunca acaba… 📝 (acaba, prometo)',
        ],
        tips: [
          '"I am" não "I is". Escreve isso. ✍️',
          'Passado simples vs Presente perfeito? Pergunta-me! 🤯',
          'Artigos (a/an/the) — a luta eterna 😩',
          'Dica de pro: lê a frase em voz alta 🗣️',
          'Se soa estranho, provavelmente É estranho 👂',
          'Confuso? Toca em mim! Explico com carinho 😇',
          '"Their", "there", "they\'re" — três palavras diferentes! 😤',
          'Terceira pessoa "s": she walk❌ she walks✅ 🎯',
          'Os condicionais são assustadores mas acredito em ti 💪',
          'Estás a fazer gramática. Isso já é impressionante 👏',
        ],
      },
      sounds: {
        entry: [
          'Laboratório de Sons! 🔊 Os teus ouvidos vão aprender muito!',
          'Hora de pronúncia! Não tenhas medo 😬🎤',
          'Sons! É aqui que acontece a VERDADEIRA magia 🎙️',
        ],
        tips: [
          'O som "TH": língua entre os dentes, não atrás! 👅',
          '"Ship" vs "Sheep" — o professor ouve a diferença 😂',
          'Pratica devagar primeiro, a velocidade vem depois 🐌→🐇',
          'Grava-te! É estranho mas funciona 🎤',
          'A schwa (ə) está em CADA palavra inglesa. Astuta! 🕵️',
          '"Comfortable" = COM-fter-bull. A sério. 🤯',
          'Acenta a sílaba CERTA senão as pessoas ficam confusas 😅',
          '"W" não é "V"! "Wine" ≠ "Vine" 🍷',
        ],
      },
      ai: {
        entry: [
          'Tutor IA! 🤖 Pergunta-me TUDO — sem julgamentos!',
          'Olá! 👋 Pronto para responder às tuas perguntas!',
          'Modo IA ativado! 🚀 O que te está a confundir hoje?',
        ],
        tips: [
          'Pede-me para explicar qualquer regra gramatical! 📚',
          'Cola uma frase e pede-me para corrigir! ✏️',
          'Posso testar-te! Só diz "Testa-me no passado simples" 🎯',
          'Tenta: "Traduz isto para inglês formal" 🎩',
          'Pergunta-me para escrever uma frase exemplo! 💡',
          'Posso ajudar com pronúncia também! 🎤',
          'Pergunta-me em português, respondo! 🇲🇿',
          'Sou mais inteligente que o autocorrect. Prometo. 🧠',
        ],
      },
      profile: {
        entry: [
          'Hora do perfil! 😎 Vamos ver as estatísticas!',
          'A ver-te a ti próprio? Respeito isso 🪞',
          'As tuas estatísticas estão aqui! Prepara-te 📊',
        ],
        tips: [
          'Esses pontos XP representam esforço real! Orgulha-te 💪',
          'A tua sequência é o teu medidor de comprometimento 🔥',
          'As conquistas desbloqueiam com mais lições — continua! 🏅',
          'Essa % de precisão conta a história real 🎯',
          'Sequência baixa? Reinicia à meia-noite ⏰ rápido, faz uma lição!',
        ],
      },
      about: {
        entry: [
          'A página Sobre! 🎓 O Sebastian construiu tudo isto!',
          'A conhecer o criador? Respeito! 🙌',
        ],
        tips: [
          'O Sebastian tem mais de 4 anos de experiência de ensino 🏆',
          'Estudante na UEM E criador de app? Super-realizador! 😤',
          'Esta app foi construída com amor ❤️ e provavelmente sem dormir 😴',
          'O inglês de Moçambique está prestes a subir de nível 🇲🇿🚀',
        ],
      },
      // NEW: lesson tab — active lesson view
      lesson: {
        entry: [
          'Hora da lição! 📖 Vamos a isto!',
          'Abriste uma lição! 🎯 O Flowy está a TORCER por ti!',
          'Aprendizagem ativada! 🚀 Estou a ver tudo de perto 👁️',
        ],
        tips: [
          'Lê a explicação antes de responder 📖',
          'Preso numa palavra? O contexto é teu amigo 🔍',
          'Resposta errada? São só dados. Tenta de novo! 📊',
          'Diz a frase em voz alta — a memória muscular é real 🗣️',
          'Toma o teu tempo. A velocidade vem com a prática 🐌→🐇',
          'Cada passo que completas = XP ganho 💰',
          'Dica de lição: a frase de exemplo esconde sempre uma pista 💡',
          'Estás a construir uma competência agora. A sério. 🏗️',
        ],
      },
      // Painel de apoio/doação (o EnglishFlow é 100% grátis — isto é o
      // painel "Apoiar o projeto", não um desbloqueio pago).
      support: {
        entry: [
          'A pensar em apoiar o projeto? 💛',
          'O EnglishFlow é grátis para sempre — mas qualquer apoio ajuda! 🇲🇿',
          'Encontraste a página de Apoio! 🙌',
        ],
        tips: [
          'Sem planos, sem lições trancadas — só uma forma opcional de agradecer 💛',
          'M-Pesa / e-Mola aceites — rápido e fácil 📱',
          'Cada doação ajuda a manter o EnglishFlow grátis para todos 🇲🇿',
          'O que deres, sem pressão — a app continua 100% grátis de qualquer forma 🙏',
        ],
      },
      // NEW: placement test tab
      placement: {
        entry: [
          'Teste de Colocação! 🧪 Vamos descobrir o teu nível real!',
          'Que emoção! O teu nível está prestes a ser descoberto 🎯',
          'O teste começa! Acredito na tua pontuação! 🌟',
        ],
        tips: [
          'Responde com honestidade — ajuda-te mais do que copiar! 😇',
          'Não sabes uma? Adivinha! Não há penalização 🎲',
          'O teu resultado determina o ponto de partida perfeito 🎯',
          'Testes de colocação não se reprovam. Só se descobrem! 🔍',
          'Toma o teu tempo. Isto molda todo o teu caminho de aprendizagem 🗺️',
        ],
      },
    },
  };
  Object.assign(K, { TAB_TIPS });
  K.loaded['data-tab-tips'] = true;
}(window.FlowyKit));
