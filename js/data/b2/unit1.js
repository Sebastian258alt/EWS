// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit1.js
// ═══════════════════════════════════════════════════════
// Unit ID: u14
// Part of UNITS_B2 — Reported Speech

const UNITS_B2_UNIT1 = [
  {
    id:'u14', cefr:'B2', title:'Reported Speech', titlePt:'Discurso Indirecto',
    desc:'Retell what people said without quoting them directly 🗨️',
    descPt:'Conta o que as pessoas disseram sem as citar directamente 🗨️',
    color:'#5c6bc0', icon:'🗨️', premium:false,
    lessons:[

      {id:'l14a', title:'Reporting Statements', titlePt:'Relatar Afirmações', icon:'💬', xp:25, learn:{
        explanation:{
          en:'When we report what someone said, the verb usually moves one step back in time ("backshift"): present simple → past simple, present perfect → past perfect, will → would. Direct: "I am tired," she said. Reported: She said (that) she was tired. We also change pronouns to match the new speaker\'s perspective.',
          pt:'Quando relatamos o que alguém disse, o verbo normalmente recua um tempo ("backshift"): presente simples → passado simples, presente perfeito → passado perfeito, will → would. Directo: "I am tired," she said. Indirecto: She said (that) she was tired. Também mudamos os pronomes para a nova perspectiva.'
        },
        examples:[
          {en:'"I live in Maputo," he said. → He said (that) he lived in Maputo.', pt:'"Vivo em Maputo," disse ele. → Ele disse que vivia em Maputo.'},
          {en:'"I will call you," she said. → She said (that) she would call me.', pt:'"Vou ligar-te," disse ela. → Ela disse que me ia ligar.'},
          {en:'"We have finished," they said. → They said (that) they had finished.', pt:'"Terminámos," disseram eles. → Disseram que tinham terminado.'},
        ],
        practice:[
          {q:'"I am hungry," he said. → He said (that) he ___ hungry.', opts:['is','was','has been','be'], ans:1, exp:'Present simple backshifts to past simple: am → was.'},
          {q:'"I will help you," she said. → She said she ___ help me.', opts:['will','would','helps','helped'], ans:1, exp:'Will backshifts to would in reported speech.'},
        ],
      }, qs:[
        {q:'"I work in Beira," she said. → She said she ___ in Beira.',opts:['works','worked','has worked','working'],ans:1,exp:'Present simple → past simple: works → worked.'},
        {q:'"We are studying," they said. → They said they ___ studying.',opts:['are','were','have been','be'],ans:1,exp:'Present continuous → past continuous: are → were.'},
        {q:'"I have seen that film," he said. → He said he ___ seen that film.',opts:['has','have','had','was'],ans:2,exp:'Present perfect → past perfect: has seen → had seen.'},
        {q:'"I can swim," she said. → She said she ___ swim.',opts:['can','could','cans','will can'],ans:1,exp:'Can backshifts to could in reported speech.'},
        {q:'Reported speech generally moves the verb tense:',opts:['one step forward','one step back','into the future perfect','it never changes'],ans:1,exp:'Backshift: the tense moves one step back into the past.'},
      ]},

      {id:'l14b', title:'Reporting Questions', titlePt:'Relatar Perguntas', icon:'❓', xp:25, learn:{
        explanation:{
          en:'Reported questions do NOT use question word order or a question mark. For yes/no questions, add "if" or "whether": "Do you like tea?" → He asked if I liked tea. For wh-questions, keep the question word: "Where do you live?" → She asked where I lived.',
          pt:'As perguntas relatadas NÃO usam a ordem de perguntas nem ponto de interrogação. Para perguntas de sim/não, acrescenta "if" ou "whether": "Do you like tea?" → He asked if I liked tea. Para perguntas com wh-, mantém a palavra interrogativa: "Where do you live?" → She asked where I lived.'
        },
        examples:[
          {en:'"Are you coming?" she asked. → She asked if I was coming.', pt:'"Vens?" perguntou ela. → Ela perguntou se eu vinha.'},
          {en:'"What is your name?" he asked. → He asked what my name was.', pt:'"Qual é o teu nome?" perguntou ele. → Ele perguntou qual era o meu nome.'},
          {en:'"Where do you work?" she asked. → She asked where I worked.', pt:'"Onde trabalhas?" perguntou ela. → Ela perguntou onde eu trabalhava.'},
        ],
        practice:[
          {q:'"Do you speak English?" he asked. → He asked ___ I spoke English.', opts:['that','if','what','when'], ans:1, exp:'Yes/no question → add "if" (or "whether").'},
          {q:'"Where is the station?" she asked. → She asked where the station ___.', opts:['is','was','be','has been'], ans:1, exp:'Wh-question keeps the question word, verb backshifts: is → was.'},
        ],
      }, qs:[
        {q:'"Are you tired?" she asked. → She asked ___ I was tired.',opts:['that','if','what','why'],ans:1,exp:'Yes/no question → "if": She asked if I was tired.'},
        {q:'"What time is it?" he asked. → He asked ___ time it was.',opts:['that','if','what','when'],ans:2,exp:'Wh-question keeps the wh-word: He asked WHAT time it was.'},
        {q:'"Why are you late?" she asked. → She asked ___ I was late.',opts:['if','that','why','what'],ans:2,exp:'Wh-question keeps "why": She asked why I was late.'},
        {q:'Reported questions use:',opts:['question word order and a question mark','normal statement word order, no question mark','only "that"','the imperative form'],ans:1,exp:'Reported questions look like statements: subject before verb, no question mark.'},
        {q:'"Have you finished?" he asked. → He asked ___ I had finished.',opts:['what','if','why','when'],ans:1,exp:'Yes/no question → "if": He asked if I had finished.'},
      ]},

      {id:'l14c', title:'Reporting Commands & Requests', titlePt:'Relatar Ordens e Pedidos', icon:'📢', xp:25, learn:{
        explanation:{
          en:'To report commands or requests, use "tell/ask + object + (not) + to + base verb" — no backshift needed since it\'s already an infinitive. "Sit down!" she said. → She told me to sit down. "Please don\'t smoke," he said. → He asked me not to smoke.',
          pt:'Para relatar ordens ou pedidos, usa "tell/ask + objecto + (not) + to + verbo base" — sem backshift porque já é um infinitivo. "Sit down!" she said. → She told me to sit down. "Please don\'t smoke," he said. → He asked me not to smoke.'
        },
        examples:[
          {en:'"Close the door," he said. → He told me to close the door.', pt:'"Fecha a porta," disse ele. → Ele disse-me para fechar a porta.'},
          {en:'"Please help me," she said. → She asked me to help her.', pt:'"Por favor ajuda-me," disse ela. → Ela pediu-me para a ajudar.'},
          {en:'"Don\'t touch that," he said. → He told me not to touch that.', pt:'"Não toques nisso," disse ele. → Ele disse-me para não tocar nisso.'},
        ],
        practice:[
          {q:'"Open the window," she said. → She told me ___ the window.', opts:['open','to open','opening','opened'], ans:1, exp:'Commands → tell + object + TO + base verb: to open.'},
          {q:'"Don\'t be late," he said. → He told me ___ late.', opts:['to not be','not to be','don\'t be','not be'], ans:1, exp:'Negative command → NOT TO + base verb: not to be late.'},
        ],
      }, qs:[
        {q:'"Sit down!" the teacher said. → The teacher told the students ___ down.',opts:['sit','sitting','to sit','sat'],ans:2,exp:'Command → tell + object + to + base verb: to sit down.'},
        {q:'"Please wait here," she said. → She asked me ___ there.',opts:['wait','to wait','waiting','waited'],ans:1,exp:'Request → ask + object + to + base verb: to wait.'},
        {q:'"Don\'t run in the corridor," the teacher said. → The teacher told us ___ in the corridor.',opts:['to not run','not to run','don\'t run','not run'],ans:1,exp:'Negative command: NOT TO + base verb: not to run.'},
        {q:'Which reporting verb usually reports a polite request?',opts:['tell','order','ask','shout'],ans:2,exp:'"Ask" is typically used for polite requests, "tell" for direct commands.'},
        {q:'"Bring your ID card," the officer said. → The officer told them ___ their ID cards.',opts:['bring','to bring','bringing','brought'],ans:1,exp:'Command → to + base verb: to bring.'},
      ]},

      {id:'l14d', title:'Time & Place Changes', titlePt:'Mudanças de Tempo e Lugar', icon:'🕰️', xp:25, learn:{
        explanation:{
          en:'When reporting speech, time and place words often change to match the new context: "now" → "then", "today" → "that day", "tomorrow" → "the next day", "here" → "there", "this" → "that". "I\'ll see you tomorrow," she said. → She said she would see me the next day.',
          pt:'Ao relatar discurso, as palavras de tempo e lugar costumam mudar para o novo contexto: "now" → "then", "today" → "that day", "tomorrow" → "the next day", "here" → "there", "this" → "that". "I\'ll see you tomorrow," she said. → She said she would see me the next day.'
        },
        examples:[
          {en:'"I\'m busy today," he said. → He said he was busy that day.', pt:'"Estou ocupado hoje," disse ele. → Ele disse que estava ocupado naquele dia.'},
          {en:'"I saw her yesterday," she said. → She said she had seen her the day before.', pt:'"Vi-a ontem," disse ela. → Ela disse que a tinha visto no dia anterior.'},
          {en:'"Come here," he said. → He told me to go there.', pt:'"Vem aqui," disse ele. → Ele disse-me para ir lá.'},
        ],
        practice:[
          {q:'"I\'ll finish it tomorrow," she said. → She said she would finish it ___.', opts:['tomorrow','the next day','today','yesterday'], ans:1, exp:'Tomorrow → the next day when reporting.'},
          {q:'"I moved here last year," he said. → He said he had moved ___ the year before.', opts:['here','there','now','today'], ans:1, exp:'Here → there when reporting (change of place perspective).'},
        ],
      }, qs:[
        {q:'"I\'ll see you tomorrow," she said. → She said she would see me ___.',opts:['tomorrow','the next day','today','yesterday'],ans:1,exp:'Tomorrow → the next day.'},
        {q:'"I bought this yesterday," he said. → He said he had bought ___ the day before.',opts:['this','that','it here','now'],ans:1,exp:'This → that; yesterday → the day before.'},
        {q:'"I live here," she said. → She said she lived ___.',opts:['here','there','this place','now'],ans:1,exp:'Here → there when the reporter is not in the same location.'},
        {q:'"We arrived yesterday," they said. → They said they had arrived ___.',opts:['yesterday','the day before','today','tomorrow'],ans:1,exp:'Yesterday → the day before.'},
        {q:'"I need it now," he said. → He said he needed it ___.',opts:['now','then','today','tomorrow'],ans:1,exp:'Now → then when reporting.'},
      ]},

      {id:'l14e', title:'Reported Speech Review', titlePt:'Revisão do Discurso Indirecto', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: Statements → backshift the tense ("I am" → she said she was). Questions → statement word order + if/whether or the wh-word, no question mark. Commands/requests → tell/ask + object + (not) to + base verb. Time and place words shift too (tomorrow → the next day, here → there).',
          pt:'Revisão rápida: Afirmações → recua o tempo verbal ("I am" → she said she was). Perguntas → ordem de afirmação + if/whether ou a palavra wh-, sem ponto de interrogação. Ordens/pedidos → tell/ask + objecto + (not) to + verbo base. Palavras de tempo e lugar também mudam (tomorrow → the next day, here → there).'
        },
        examples:[
          {en:'"I\'m leaving now," he said. → He said he was leaving then.', pt:'"Estou a sair agora," disse ele. → Ele disse que estava a sair naquele momento.'},
          {en:'"Can you help me?" she asked. → She asked if I could help her.', pt:'"Podes ajudar-me?" perguntou ela. → Ela perguntou se eu podia ajudá-la.'},
          {en:'"Don\'t be late," he said. → He told me not to be late.', pt:'"Não te atrases," disse ele. → Ele disse-me para não me atrasar.'},
        ],
        practice:[
          {q:'"I am cooking," she said. → She said she ___ cooking.', opts:['is','was','has been','be'], ans:1, exp:'Statement backshift: am → was.'},
          {q:'"Can you drive?" he asked. → He asked ___ I could drive.', opts:['that','if','what','when'], ans:1, exp:'Yes/no question → if.'},
        ],
      }, qs:[
        {q:'"I am watching TV," he said. → He said he ___ watching TV.',opts:['is','was','has been','be'],ans:1,exp:'Backshift: am → was.'},
        {q:'"Where do you live?" she asked. → She asked where I ___.',opts:['live','lived','living','had lived'],ans:1,exp:'Wh-question, backshift verb: live → lived.'},
        {q:'"Turn off the lights," he said. → He told me ___ off the lights.',opts:['turn','to turn','turning','turned'],ans:1,exp:'Command → to + base verb.'},
        {q:'"I saw him yesterday," she said. → She said she had seen him ___.',opts:['yesterday','the day before','today','now'],ans:1,exp:'Yesterday → the day before.'},
        {q:'"Are you free tomorrow?" he asked. → He asked ___ I was free ___.',opts:['if / the next day','that / tomorrow','what / today','why / then'],ans:0,exp:'Yes/no question → if; tomorrow → the next day.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT1);
