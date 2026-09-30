// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit6.js
// ═══════════════════════════════════════════════════════
// Unit ID: u11
// Part of UNITS_B1

const UNITS_B1_UNIT6 = [
  {
      id: 'u11',
      cefr: 'B1',
      title: 'Reported Speech',
      titlePt: 'Discurso Indireto',
      desc: 'Tell what others said without quoting directly 🗣️',
      descPt: 'Diz o que outros disseram sem citar diretamente 🗣️',
      color: '#e65100',
      icon: '🗣️',
      premium: false,
      lessons: [
        {
          id: 'l11a',
          title: 'Introduction to Reported Speech',
          titlePt: 'Introdução ao Discurso Indireto',
          icon: '📢',
          xp: 20,
          learn: {
            explanation: {
              en: 'Reported speech tells what someone said without using their exact words. The main rule: move the tense one step back into the past. \'I am happy\' becomes She said she WAS happy.',
              pt: 'O discurso indirecto diz o que alguém disse sem usar as suas palavras exactas. A regra principal: recua o tempo um passo para o passado. \'I am happy\' torna-se She said she WAS happy.'
            },
            examples: [
            { en: 'Direct: I love English. Reported: She said she loved English.', pt: 'Directo: I love English. Indirecto: Ela disse que adorava inglês.' },
            { en: 'Direct: I am tired. Reported: He said he was tired.', pt: 'Directo: I am tired. Indirecto: Ele disse que estava cansado.' },
            { en: 'Direct: I will call. Reported: She said she would call.', pt: 'Directo: I will call. Indirecto: Ela disse que ligaria.' }
            ],
            practice: [
            { q: 'In reported speech, Present Simple becomes:', opts: ['Present Simple', 'Past Simple', 'Past Perfect', 'Future'], ans: 1, exp: 'Present Simple becomes Past Simple.' },
            { q: '\'I am hungry.\' She said she ___ hungry.', opts: ['am', 'is', 'was', 'has been'], ans: 2, exp: 'am becomes was in reported speech.' }
            ]
          },
          qs: [
            { q: 'What is reported speech?', opts: ['Direct quotes', 'Telling what someone said without quoting exactly', 'Future predictions', 'Past actions'], ans: 1, exp: 'Reported speech is when you report what someone said without using their exact words.' },
            { q: '"I am happy." → She said she ___ happy.', opts: ['am', 'is', 'was', 'were'], ans: 2, exp: '"She said she WAS happy" — Present becomes Past in reported speech.' },
            { q: 'What happens to the tense in reported speech?', opts: ['Present becomes Past', 'Past becomes Present', 'No change', 'Future becomes Past'], ans: 0, exp: 'Present Simple → Past Simple, Present Continuous → Past Continuous, etc.' },
            { q: '"I study English." → He said he ___ English.', opts: ['studies', 'studied', 'study', 'is studying'], ans: 1, exp: '"He said he STUDIED English" — Present Simple → Past Simple.' },
            { q: 'Which is an example of reported speech?', opts: ['She said, "I am tired."', 'She said she was tired.', 'She said, "I tired."', 'She said she is tired.'], ans: 1, exp: '"She said she was tired" = reported speech without quotes.' }
          ]
        },
        {
          id: 'l11b',
          title: 'Tense Changes in Reported Speech',
          titlePt: 'Mudanças de Tempo no Discurso Indireto',
          icon: '🔄',
          xp: 25,
          learn: {
            explanation: {
              en: 'Each tense moves one step back: Present Simple to Past Simple. Present Continuous to Past Continuous. Present Perfect to Past Perfect. Past Simple to Past Perfect. Will to Would. Can to Could. Must to Had to.',
              pt: 'Cada tempo recua um passo: Present Simple para Past Simple. Present Continuous para Past Continuous. Present Perfect para Past Perfect. Past Simple para Past Perfect. Will para Would. Can para Could. Must para Had to.'
            },
            examples: [
            { en: '\'I am eating.\' He said he was eating.', pt: '\'I am eating.\' Ele disse que estava a comer.' },
            { en: '\'I have finished.\' She said she had finished.', pt: '\'I have finished.\' Ela disse que tinha terminado.' },
            { en: '\'I can help.\' He said he could help.', pt: '\'I can help.\' Ele disse que podia ajudar.' }
            ],
            practice: [
            { q: '\'I will come.\' She said she ___ come.', opts: ['will', 'would', 'can', 'could'], ans: 1, exp: 'Will becomes Would in reported speech.' },
            { q: '\'I have been waiting.\' He said he ___ been waiting.', opts: ['has', 'had', 'was', 'have'], ans: 1, exp: 'Present Perfect becomes Past Perfect: had been waiting.' }
            ]
          },
          qs: [
            { q: 'Present Simple → ___ in reported speech', opts: ['Present Perfect', 'Past Simple', 'Past Perfect', 'Future'], ans: 1, exp: 'Present Simple becomes Past Simple: "I eat" → "He said he ate."' },
            { q: 'Present Continuous → ___ in reported speech', opts: ['Past Continuous', 'Past Simple', 'Past Perfect Continuous', 'Present'], ans: 0, exp: 'Present Continuous → Past Continuous: "I am eating" → "He said he was eating."' },
            { q: 'Present Perfect → ___ in reported speech', opts: ['Past Perfect', 'Present Perfect', 'Past Simple', 'Past Continuous'], ans: 0, exp: 'Present Perfect → Past Perfect: "I have eaten" → "He said he had eaten."' },
            { q: '"I will call you." → He said he ___ me.', opts: ['will call', 'called', 'would call', 'has called'], ans: 2, exp: 'Future "will" → "would" in reported speech.' },
            { q: '"I have been waiting." → She said she ___ been waiting.', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: 'Present Perfect Continuous → Past Perfect Continuous: "I have been waiting" → "had been waiting".' }
          ]
        },
        {
          id: 'l11c',
          title: 'Reporting Questions',
          titlePt: 'Reportando Perguntas',
          icon: '❓',
          xp: 20,
          learn: {
            explanation: {
              en: 'Reported questions use statement word order (no inversion, no question mark). Yes/No questions use \'if\' or \'whether\'. Wh- questions keep the question word: \'Where do you live?\' becomes He asked where I lived.',
              pt: 'As perguntas reportadas usam a ordem de afirmação (sem inversão, sem ponto de interrogação). Perguntas Sim/Não usam \'if\' ou \'whether\'. Perguntas Wh- mantêm a palavra interrogativa: \'Where do you live?\' torna-se He asked where I lived.'
            },
            examples: [
            { en: '\'Are you coming?\' She asked if I was coming.', pt: '\'Are you coming?\' Ela perguntou se eu estava a vir.' },
            { en: '\'Where do you live?\' He asked me where I lived.', pt: '\'Where do you live?\' Ele perguntou-me onde eu vivia.' },
            { en: '\'Did you see it?\' She asked whether I had seen it.', pt: '\'Did you see it?\' Ela perguntou se eu o tinha visto.' }
            ],
            practice: [
            { q: 'Yes/No reported questions use:', opts: ['that', 'which', 'if or whether', 'what'], ans: 2, exp: 'Use if or whether for Yes/No reported questions.' },
            { q: '\'What time is it?\' He asked me what time ___.', opts: ['is it', 'it is', 'it was', 'was it'], ans: 2, exp: 'Statement order + tense backshift: it was.' }
            ]
          },
          qs: [
            { q: '"Where do you live?" → He asked me ___', opts: ['where do I live', 'where I live', 'where I lived', 'where did I live'], ans: 2, exp: 'Reported question: "where I lived" — no question word order and tense backshift.' },
            { q: '"Are you coming?" → She asked ___', opts: ['if I am coming', 'if I was coming', 'if was I coming', 'if I came'], ans: 1, exp: 'Yes/No question becomes "if/whether" + statement word order: "if I was coming".' },
            { q: '"What time is it?" → He asked me ___', opts: ['what time is it', 'what time it was', 'what time it is', 'what time was it'], ans: 1, exp: 'Reported question: "what time it was" — subject + verb order.' },
            { q: '"Did you go?" → She asked me ___ I went.', opts: ['did', 'that', 'if', 'whether'], ans: 2, exp: '"if" is used to report yes/no questions: "She asked me IF I went."' },
            { q: 'Which is correct?', opts: ['He asked me where I am going.', 'He asked me where I was going.', 'He asked me where was I going.', 'He asked me where I go.'], ans: 1, exp: '"where I was going" — correct reported question.' }
          ]
        },
        {
          id: 'l11d',
          title: 'Reporting Commands and Requests',
          titlePt: 'Reportando Ordens e Pedidos',
          icon: '📋',
          xp: 20,
          learn: {
            explanation: {
              en: 'Commands in reported speech use TELL + object + TO + infinitive. Requests use ASK + object + TO + infinitive. Negatives use NOT TO + infinitive. No tense backshift is needed for commands and requests.',
              pt: 'Ordens no discurso indirecto usam TELL + objecto + TO + infinitivo. Pedidos usam ASK + objecto + TO + infinitivo. Negativos usam NOT TO + infinitivo. Não é necessária mudança de tempo para ordens e pedidos.'
            },
            examples: [
            { en: '\'Sit down!\' He told me to sit down.', pt: '\'Sit down!\' Ele disse-me para me sentar.' },
            { en: '\'Please help me.\' She asked me to help her.', pt: '\'Please help me.\' Ela pediu-me para a ajudar.' },
            { en: '\'Don\'t be late!\' He warned me not to be late.', pt: '\'Don\'t be late!\' Ele avisou-me para não me atrasar.' }
            ],
            practice: [
            { q: '\'Open the window!\' She told me ___ the window.', opts: ['open', 'to open', 'opening', 'opened'], ans: 1, exp: 'Tell + object + TO + infinitive.' },
            { q: '\'Don\'t touch that!\' He warned me ___ that.', opts: ['to touch', 'not to touch', 'touching', 'not touching'], ans: 1, exp: 'Negative command: not to touch.' }
            ]
          },
          qs: [
            { q: '"Sit down!" → He told me ___', opts: ['to sit down', 'sit down', 'that I sit down', 'that I sat down'], ans: 0, exp: 'Commands use "tell + object + to + infinitive": "He told me to sit down."' },
            { q: '"Please help me." → She asked me ___ her.', opts: ['to help', 'help', 'that I help', 'if I help'], ans: 0, exp: 'Requests use "ask + to + infinitive": "She asked me to help her."' },
            { q: '"Don\'t be late!" → He warned me ___', opts: ['to be late', 'not to be late', 'don\'t be late', 'that I am not late'], ans: 1, exp: 'Negative commands become "not to": "not to be late".' },
            { q: '"Could you wait?" → She asked us ___', opts: ['wait', 'to wait', 'if we wait', 'that we wait'], ans: 1, exp: '"She asked us to wait" — reporting a polite request.' },
            { q: 'Which reports a command correctly?', opts: ['He told me to close the door.', 'He told me close the door.', 'He told me that close the door.', 'He told me to closed the door.'], ans: 0, exp: '"He told me to close the door" — tell + object + to + infinitive.' }
          ]
        },
        {
          id: 'l11e',
          title: 'Reporting Verbs',
          titlePt: 'Verbos de Reporte',
          icon: '📝',
          xp: 20,
          learn: {
            explanation: {
              en: 'Use specific reporting verbs instead of always \'said\': PROMISE for commitments, APOLOGISE for sorry, ADVISE for suggestions, WARN for danger, OFFER for voluntary help, EXPLAIN for reasons. They make reported speech more precise.',
              pt: 'Usa verbos de reporte específicos em vez de sempre \'said\': PROMISE para compromissos, APOLOGISE para desculpas, ADVISE para sugestões, WARN para perigo, OFFER para ajuda voluntária, EXPLAIN para razões. Tornam o discurso indirecto mais preciso.'
            },
            examples: [
            { en: '\'I am sorry I am late.\' She apologised for being late.', pt: '\'I am sorry I am late.\' Ela pediu desculpa por ter chegado atrasada.' },
            { en: '\'I will definitely be there.\' He promised to be there.', pt: '\'I will definitely be there.\' Ele prometeu estar lá.' },
            { en: '\'You should rest.\' The doctor advised me to rest.', pt: '\'You should rest.\' O médico aconselhou-me a descansar.' }
            ],
            practice: [
            { q: '\'I can help you.\' He ___ to help me.', opts: ['said', 'promised', 'offered', 'apologised'], ans: 2, exp: 'Offered = voluntary help.' },
            { q: '\'Be careful!\' She ___ me to be careful.', opts: ['asked', 'told', 'warned', 'advised'], ans: 2, exp: 'Warned = about danger.' }
            ]
          },
          qs: [
            { q: '"I\'m sorry I\'m late." → She ___ for being late.', opts: ['apologised', 'said', 'told', 'explained'], ans: 0, exp: '"apologised" is a reporting verb that shows the meaning of the original statement.' },
            { q: '"I can help you." → He ___ to help me.', opts: ['offered', 'said', 'told', 'apologised'], ans: 0, exp: '"offered" = reporting verb for a voluntary action.' },
            { q: '"I\'ll definitely be there." → She ___ to be there.', opts: ['said', 'told', 'promised', 'explained'], ans: 2, exp: '"promised" — reporting a commitment.' },
            { q: '"The train is delayed." → The announcement ___ that the train was delayed.', opts: ['said', 'told', 'offered', 'promised'], ans: 0, exp: '"said" — neutral reporting verb for information.' },
            { q: 'Which reporting verb is used for advice?', opts: ['said', 'told', 'advised', 'asked'], ans: 2, exp: '"advised" — "He advised me to study harder."' }
          ]
        },
        {
          id: 'l11f',
          title: 'Review: Reported Speech',
          titlePt: 'Revisão: Discurso Indireto',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Review: tenses shift one step back. Yes/No questions use if or whether. Wh- questions keep the question word with statement order. Commands use tell or ask + to + infinitive. Specific verbs like warn, promise, advise add meaning.',
              pt: 'Revisão: os tempos recuam um passo. Perguntas Sim/Não usam if ou whether. Perguntas Wh- mantêm a palavra interrogativa com ordem de afirmação. Ordens usam tell ou ask + to + infinitivo. Verbos específicos como warn, promise, advise adicionam significado.'
            },
            examples: [
            { en: '\'I have finished.\' She said she had finished.', pt: '\'I have finished.\' Ela disse que tinha terminado.' },
            { en: '\'Where are you going?\' He asked where I was going.', pt: '\'Where are you going?\' Ele perguntou para onde eu ia.' },
            { en: '\'Please don\'t leave.\' She asked me not to leave.', pt: '\'Please don\'t leave.\' Ela pediu-me para não sair.' }
            ],
            practice: [
            { q: '\'I went to the shop.\' He said he ___ to the shop.', opts: ['went', 'goes', 'had gone', 'has gone'], ans: 2, exp: 'Past Simple becomes Past Perfect: had gone.' },
            { q: '\'Will you help me?\' She asked if I ___ help her.', opts: ['will', 'would', 'can', 'could'], ans: 1, exp: 'Will becomes Would in reported questions.' }
            ]
          },
          qs: [
            { q: '"I am tired." → She said she ___ tired.', opts: ['is', 'was', 'has been', 'had been'], ans: 1, exp: 'Present Simple → Past Simple: "She said she was tired."' },
            { q: '"I went to the store." → He said he ___ to the store.', opts: ['goes', 'went', 'had gone', 'was going'], ans: 2, exp: 'Past Simple → Past Perfect: "He said he had gone."' },
            { q: '"Where is the station?" → He asked me where the station ___', opts: ['is', 'was', 'has been', 'had been'], ans: 1, exp: '"where the station was" — reported question with tense backshift.' },
            { q: '"Don\'t touch that!" → She warned me ___ that.', opts: ['to touch', 'not to touch', 'don\'t touch', 'that I don\'t touch'], ans: 1, exp: '"not to touch" — negative command in reported speech.' },
            { q: '"I\'ll help you tomorrow." → He promised ___ me the next day.', opts: ['he helps', 'to help', 'he helped', 'that he help'], ans: 1, exp: '"He promised TO HELP me" — reporting a promise with infinitive.' }
          ]
        }
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT6);
