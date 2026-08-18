// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/a1/unit12.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1h  |  CEFR: A2
// Reported Speech & Storytelling

const UNITS_A1_UNIT12 = [
  {
    id:'u1h', cefr:'A2', title:'Reported Speech & Storytelling', titlePt:'Discurso Indirecto e Contar Histórias',
    desc:'Tell what others said & narrate events 🗣️',
    descPt:'Relata o que outros disseram e narra eventos 🗣️',
    color:'#7c4dff', icon:'🗣️', premium:false,
    lessons:[
      {id:'l1h1', title:'Reported Speech — Statements', titlePt:'Discurso Indirecto — Afirmações', icon:'💬', xp:30, learn:{
        explanation:{
          en:'Reported speech tells what someone said WITHOUT using their exact words. The verb usually goes one tense back: "I am tired" → She said she WAS tired. "I work here" → He said he WORKED there. Pronouns and time expressions also change.',
          pt:'O discurso indirecto relata o que alguém disse SEM usar as palavras exactas. O verbo normalmente recua um tempo verbal: "I am tired" → She said she WAS tired. "I work here" → He said he WORKED there. Os pronomes e as expressões de tempo também mudam.'
        },
        examples:[
          {en:'"I am hungry." → She said she was hungry.', pt:'"Estou com fome." → Ela disse que estava com fome.'},
          {en:'"I live in Beira." → He said he lived in Beira.', pt:'"Vivo em Beira." → Ele disse que vivia em Beira.'},
          {en:'"We will come tomorrow." → They said they would come the next day.', pt:'"Vamos vir amanhã." → Eles disseram que viriam no dia seguinte.'},
        ],
        practice:[
          {q:'"I am happy." → She said she ___ happy.', opts:['is','was','will be','be'], ans:1, exp:'am/is/are → was/were in reported speech.'},
          {q:'"I work in a hospital." → He said he ___ in a hospital.', opts:['works','worked','is working','will work'], ans:1, exp:'work (present) → worked (past) in reported speech.'},
        ],
      }, qs:[
        {q:'"I love football." → He said he ___ football.',opts:['loves','love','loved','is loving'],ans:2,exp:'"Love" (present simple) → "loved" (past simple) in reported speech.'},
        {q:'"She is cooking." → He said she ___ cooking.',opts:['is','was','has been','will be'],ans:1,exp:'"is cooking" → "was cooking". Present continuous → past continuous.'},
        {q:'"I have finished." → She said she ___ finished.',opts:['has','have','had','is'],ans:2,exp:'"have finished" → "had finished". Present perfect → past perfect.'},
        {q:'"We will help you." → They said they ___ help me.',opts:['will','would','should','can'],ans:1,exp:'"will" → "would" in reported speech.'},
        {q:'In reported speech, "today" usually becomes:',opts:['tomorrow','yesterday','that day','this day'],ans:2,exp:'"Today" → "that day". Time expressions shift: today→that day, tomorrow→the next day.'},
      ]},
      {id:'l1h2', title:'Reported Questions', titlePt:'Perguntas no Discurso Indirecto', icon:'❓', xp:30, learn:{
        explanation:{
          en:'To report YES/NO questions, use "asked if/whether": "Are you tired?" → She asked if I was tired. For WH- questions, use "asked where/what/why...": "Where do you live?" → He asked where I lived. NO question mark in reported questions!',
          pt:'Para reportar perguntas de SIM/NÃO, usa "asked if/whether": "Are you tired?" → She asked if I was tired. Para perguntas WH-, usa "asked where/what/why...": "Where do you live?" → He asked where I lived. SEM ponto de interrogação nas perguntas reportadas!'
        },
        examples:[
          {en:'"Are you okay?" → She asked if I was okay.', pt:'"Estás bem?" → Ela perguntou se eu estava bem.'},
          {en:'"What is your name?" → He asked what my name was.', pt:'"Qual é o teu nome?" → Ele perguntou qual era o meu nome.'},
          {en:'"Where do you work?" → She asked where I worked.', pt:'"Onde trabalhas?" → Ela perguntou onde eu trabalhava.'},
        ],
        practice:[
          {q:'Reported YES/NO questions use:', opts:['"asked that"','"asked if/whether"','"asked what"','"said if"'], ans:1, exp:'"Asked if/whether" introduces reported yes/no questions.'},
          {q:'"Do you speak English?" → She asked ___ I spoke English.', opts:['that','what','if','where'], ans:2, exp:'Yes/No question → "asked IF I spoke English."'},
        ],
      }, qs:[
        {q:'"Are you a teacher?" → He asked ___ I was a teacher.',opts:['what','where','if','that'],ans:2,exp:'Yes/No question → "asked IF..." No question mark!'},
        {q:'"Where do you live?" → She asked where I ___.',opts:['live','lives','lived','living'],ans:2,exp:'"lived" — verb goes back a tense. "Where do you live?" → asked where I LIVED.'},
        {q:'"What time is it?" → He asked what time ___.',opts:['is it','it was','was it','it is'],ans:1,exp:'Reported question uses statement word order: "what time IT WAS" not "was it".'},
        {q:'In reported questions:',opts:['Use a question mark','Keep question word order','Use statement word order','Use "said"'],ans:2,exp:'Reported questions use STATEMENT word order and NO question mark.'},
        {q:'"Why did you leave?" → She asked why I ___ left.',opts:['have','has','had','did'],ans:2,exp:'"had left" — past simple question → past perfect in reported speech.'},
      ]},
      {id:'l1h3', title:'Reported Commands & Requests', titlePt:'Ordens e Pedidos no Discurso Indirecto', icon:'📢', xp:25, learn:{
        explanation:{
          en:'To report commands and requests, use TELL or ASK + object + TO + infinitive. "Close the door!" → He told me to close the door. "Please help me." → She asked me to help her. Negative: "Don\'t run!" → He told me NOT to run.',
          pt:'Para reportar ordens e pedidos, usa TELL ou ASK + objecto + TO + infinitivo. "Close the door!" → He told me to close the door. "Please help me." → She asked me to help her. Negativo: "Don\'t run!" → He told me NOT to run.'
        },
        examples:[
          {en:'"Sit down!" → The teacher told us to sit down.', pt:'"Sentai-vos!" → O professor disse-nos para nos sentarmos.'},
          {en:'"Please open the window." → She asked me to open the window.', pt:'"Por favor abre a janela." → Ela pediu-me para abrir a janela.'},
          {en:'"Don\'t be late!" → He told her not to be late.', pt:'"Não chegues tarde!" → Ele disse-lhe para não chegar tarde.'},
        ],
        practice:[
          {q:'Commands use "told" + object + ___:', opts:['that','if','to + verb','verb-ing'], ans:2, exp:'"Told + object + TO + infinitive": He told me TO go.'},
          {q:'"Don\'t speak!" → She told him ___ speak.', opts:['not to','to not','don\'t','not'], ans:0, exp:'Negative command: "told him NOT TO speak."'},
        ],
      }, qs:[
        {q:'"Sit down!" → The teacher told us ___ down.',opts:['sit','sitting','to sit','that sit'],ans:2,exp:'"Told + object + TO + infinitive". told us TO SIT down.'},
        {q:'"Please help me." → She asked me ___ her.',opts:['help','helping','to help','that help'],ans:2,exp:'"Asked + object + TO + infinitive". asked me TO HELP her.'},
        {q:'"Don\'t touch that!" → He told me ___ that.',opts:['not touch','to not touch','not to touch','don\'t touch'],ans:2,exp:'Negative: "told me NOT TO touch". NOT TO + infinitive.'},
        {q:'Which word is used for POLITE reported requests?',opts:['told','said','asked','ordered'],ans:2,exp:'"Asked" for polite requests. "Told" for direct commands.'},
        {q:'"Be quiet!" → She told them ___ quiet.',opts:['being','be','to be','is'],ans:2,exp:'"Told them TO BE quiet." — to + base verb.'},
      ]},
      {id:'l1h4', title:'Telling Stories — Narrative Tenses', titlePt:'Contar Histórias — Tempos Narrativos', icon:'📚', xp:30, learn:{
        explanation:{
          en:'Good storytelling uses a mix of tenses: Past Simple for the main sequence of events ("I arrived, I saw, I decided..."), Past Continuous for background actions ("It was raining..."), and Past Perfect for events that happened before ("I had already eaten...").',
          pt:'Uma boa narrativa usa uma mistura de tempos verbais: Passado Simples para a sequência principal ("I arrived, I saw..."), Passado Contínuo para acções de fundo ("It was raining..."), e Passado Perfeito para eventos anteriores ("I had already eaten...").'
        },
        examples:[
          {en:'I was walking home when I heard a noise.', pt:'Eu estava a andar para casa quando ouvi um barulho.'},
          {en:'She had already left when I arrived.', pt:'Ela já tinha ido embora quando eu cheguei.'},
          {en:'It was a dark night and the streets were empty.', pt:'Era uma noite escura e as ruas estavam vazias.'},
        ],
        practice:[
          {q:'The background of a story uses:', opts:['Past Simple','Past Continuous','Present Simple','Future Simple'], ans:1, exp:'Past Continuous sets the SCENE/background: "It was raining, people were walking..."'},
          {q:'"She had already left." This means:', opts:['She left at the same time','She left before','She will leave','She is leaving'], ans:1, exp:'Past Perfect = action that happened BEFORE another past event.'},
        ],
      }, qs:[
        {q:'"I ___ to music when the phone rang." (listen)',opts:['listen','was listening','listened','am listening'],ans:1,exp:'Background action interrupted = Past Continuous: "was listening".'},
        {q:'Past Perfect is used for:',opts:['actions happening now','the main events of a story','actions before another past event','future plans'],ans:2,exp:'Past Perfect (had + pp) = an event that happened BEFORE the main past story.'},
        {q:'"She was tired because she ___ all day." (work)',opts:['worked','has worked','had worked','works'],ans:2,exp:'"Had worked" — Past Perfect. The working happened before she became tired.'},
        {q:'Which sequence is correct for storytelling?',opts:['Future→Present→Past','Past Simple for events, Past Continuous for background','Only Past Simple','Present Tense for all'],ans:1,exp:'Best storytelling: Past Simple (events) + Past Continuous (background) + Past Perfect (earlier events).'},
        {q:'"While Ana ___, Pedro arrived." (cook)',opts:['cooked','was cooking','had cooked','is cooking'],ans:1,exp:'"Was cooking" — background/ongoing action at the time of arrival.'},
      ]},
      {id:'l1h5', title:'Linking Words — Connectors', titlePt:'Palavras de Ligação — Conectores', icon:'🔗', xp:25, learn:{
        explanation:{
          en:'Connectors make your speech and writing flow naturally. Time: first, then, after that, finally, meanwhile, suddenly. Cause & Effect: because, so, as a result, therefore. Contrast: but, however, although, despite. Addition: also, in addition, moreover, besides.',
          pt:'Os conectores tornam o teu discurso e escrita mais fluentes. Tempo: first, then, after that, finally, meanwhile, suddenly. Causa e Efeito: because, so, as a result, therefore. Contraste: but, however, although, despite. Adição: also, in addition, moreover.'
        },
        examples:[
          {en:'First I studied, then I went out.', pt:'Primeiro estudei, depois saí.'},
          {en:'Although it was late, she kept working.', pt:'Apesar de ser tarde, ela continuou a trabalhar.'},
          {en:'I was tired. However, I finished the task.', pt:'Estava cansado. No entanto, terminei a tarefa.'},
        ],
        practice:[
          {q:'"However" expresses:', opts:['addition','time','contrast','cause'], ans:2, exp:'"However" = no entanto. It introduces a CONTRAST or unexpected idea.'},
          {q:'Which word introduces a result?', opts:['although','therefore','meanwhile','first'], ans:1, exp:'"Therefore" = portanto — introduces a result or conclusion.'},
        ],
      }, qs:[
        {q:'"___ it was raining, we went out."',opts:['Because','So','Although','Therefore'],ans:2,exp:'"Although" = apesar de. Introduces a contrasting fact.'},
        {q:'"I studied hard, ___ I passed the exam."',opts:['although','so','despite','meanwhile'],ans:1,exp:'"So" = portanto, então. It introduces a RESULT.'},
        {q:'Which word shows a sequence in time?',opts:['however','therefore','meanwhile','also'],ans:2,exp:'"Meanwhile" = entretanto. Something happening at the same time.'},
        {q:'"___, let me explain the problem." (to begin)',opts:['Finally','Therefore','First of all','Meanwhile'],ans:2,exp:'"First of all" = em primeiro lugar. Used to start an explanation.'},
        {q:'"She worked hard. ___, she was promoted."',opts:['Although','However','As a result','Despite'],ans:2,exp:'"As a result" = como resultado. Shows cause and effect.'},
      ]},
      {id:'l1h6', title:'Reporting Verbs', titlePt:'Verbos de Relato', icon:'📝', xp:25, learn:{
        explanation:{
          en:'Instead of always saying "said", use reporting verbs for more precise meaning: claim (afirmar), admit (admitir), deny (negar), promise (prometer), suggest (sugerir), warn (avisar), explain (explicar), complain (queixar-se), announce (anunciar).',
          pt:'Em vez de usar sempre "said", usa verbos de relato para maior precisão: claim (afirmar), admit (admitir), deny (negar), promise (prometer), suggest (sugerir), warn (avisar), explain (explicar), complain (queixar-se), announce (anunciar).'
        },
        examples:[
          {en:'She admitted she had made a mistake.', pt:'Ela admitiu que tinha cometido um erro.'},
          {en:'He promised to help me the next day.', pt:'Ele prometeu ajudar-me no dia seguinte.'},
          {en:'They warned us not to go there at night.', pt:'Eles avisaram-nos para não irmos lá à noite.'},
        ],
        practice:[
          {q:'"Deny" means:', opts:['agree with something','say something is NOT true','ask a question','complain'], ans:1, exp:'"Deny" = negar. To say that something is not true.'},
          {q:'"He promised to help." This means:', opts:['He said he might help','He refused to help','He gave his word he would help','He suggested helping'], ans:2, exp:'"Promise" = prometer. A commitment to do something.'},
        ],
      }, qs:[
        {q:'"She ___ that she hadn\'t taken the money." (said it wasn\'t true)',opts:['admitted','denied','promised','warned'],ans:1,exp:'"Denied" = negou. To say something is NOT true.'},
        {q:'"He ___ making a mistake." (accepted it was true)',opts:['denied','warned','admitted','suggested'],ans:2,exp:'"Admitted" = admitiu. To accept that something is true.'},
        {q:'"They ___ us not to swim in the river." (told us of danger)',opts:['suggested','promised','claimed','warned'],ans:3,exp:'"Warned" = avisou. To tell someone about a danger.'},
        {q:'"She ___ going to the beach." (gave the idea)',opts:['denied','suggested','warned','complained'],ans:1,exp:'"Suggested" = sugeriu. To put forward an idea.'},
        {q:'"He ___ to call me later." (gave his word)',opts:['warned','suggested','denied','promised'],ans:3,exp:'"Promised" = prometeu. To give your word you will do something.'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT12);
