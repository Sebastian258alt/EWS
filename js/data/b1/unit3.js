// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit3.js
// ═══════════════════════════════════════════════════════
// Unit ID: u8
// Part of UNITS_B1

const UNITS_B1_UNIT3 = [
  {
      id: 'u8',
      cefr: 'B1',
      title: 'Past Perfect & Narrative Tenses',
      titlePt: 'Past Perfect e Tempos Narrativos',
      desc: 'Master the art of storytelling in English 📖',
      descPt: 'Domina a arte de contar histórias em inglês 📖',
      color: '#6d4c41',
      icon: '📖',
      premium: false,
      lessons: [
        {
          id: 'l8a',
          title: 'The Past Perfect',
          titlePt: 'O Past Perfect',
          icon: '⏪',
          xp: 20,
          learn: {
            explanation: {
              en: 'Past Perfect (had + past participle) shows that one past action happened BEFORE another past action. It\'s the "past of the past". "When I arrived, she had already left" — leaving happened first.',
              pt: 'O Past Perfect (had + particípio passado) mostra que uma acção passada aconteceu ANTES de outra acção passada. É o "passado do passado". "When I arrived, she had already left" — sair aconteceu primeiro.'
            },
            examples: [
              { en: 'I had finished my homework before dinner.', pt: 'Eu já tinha terminado o trabalho de casa antes do jantar.' },
              { en: 'She had never seen snow before that trip.', pt: 'Ela nunca tinha visto neve antes daquela viagem.' },
              { en: 'By the time we arrived, the film had started.', pt: 'Quando chegámos, o filme já tinha começado.' }
            ],
            practice: [
              { q: 'Past Perfect formula:', opts: ['have + past participle', 'had + past participle', 'was + verb-ing', 'did + base verb'], ans: 1, exp: 'had + past participle.' },
              { q: 'Which action happened FIRST: "I had eaten before you called"?', opts: ['Calling', 'Eating', 'Both together', 'Unclear'], ans: 1, exp: 'Eating happened first (Past Perfect), then calling (Past Simple).' }
            ]
          },
          qs: [
            { q: '"She ___ already eaten when I arrived."', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: '"She HAD already eaten..." — Past Perfect = action completed before another past action.' },
            { q: 'Past Perfect = ___ + Past Participle', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: 'Had + Past Participle. Example: "I had finished my work before she came."' },
            { q: '"When I got home, my brother ___ already left."', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: '"had already left" — the leaving happened BEFORE I got home.' },
            { q: 'Which sentence uses Past Perfect correctly?', opts: ['I have seen the movie already.', 'I had seen the movie when you arrived.', 'I saw the movie before you arrived.', 'I have had seen the movie.'], ans: 1, exp: '"I had seen the movie when you arrived" = Past Perfect for the action that happened first.' },
            { q: '"She said she ___ never ___ to Europe."', opts: ['has, be', 'had, been', 'have, been', 'was, be'], ans: 1, exp: '"She said she HAD never BEEN to Europe." — Past Perfect in reported speech.' }
          ]
        },
        {
          id: 'l8b',
          title: 'Narrative Tenses Overview',
          titlePt: 'Visão Geral dos Tempos Narrativos',
          icon: '📝',
          xp: 20,
          learn: {
            explanation: {
              en: 'Narrative tenses (Past Simple, Past Continuous, and Past Perfect) work together to tell a clear story, showing what happened, what was already happening, and what had happened earlier.',
              pt: 'Os tempos narrativos (Past Simple, Past Continuous e Past Perfect) trabalham juntos para contar uma história clara, mostrando o que aconteceu, o que já estava a acontecer, e o que tinha acontecido antes.'
            },
            examples: [
              { en: 'I was walking home when it started to rain.', pt: 'Eu estava a caminhar para casa quando começou a chover.' },
              { en: 'She had already cooked dinner when he arrived.', pt: 'Ela já tinha cozinhado o jantar quando ele chegou.' },
              { en: 'We met, talked, and then said goodbye.', pt: 'Nós encontrámo-nos, conversámos, e depois despedimo-nos.' }
            ],
            practice: [
              { q: 'Which tense shows an ongoing background action?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Future'], ans: 1, exp: 'Past Continuous = background/ongoing action.' },
              { q: 'Which tense shows the EARLIEST event in a story?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Present'], ans: 2, exp: 'Past Perfect = the action before the rest of the story.' }
            ]
          },
          qs: [
            { q: 'Narrative tenses are used for:', opts: ['Describing routines', 'Telling stories', 'Making predictions', 'Giving orders'], ans: 1, exp: 'Narrative tenses are used to tell stories about past events.' },
            { q: 'Which tenses are considered narrative tenses?', opts: ['Present Simple only', 'Past Simple, Past Continuous, Past Perfect', 'Future only', 'All tenses'], ans: 1, exp: 'Past Simple, Past Continuous, and Past Perfect are the main narrative tenses.' },
            { q: '"I ___ dinner when the phone ___."', opts: ['was having, rang', 'had, rang', 'have, rings', 'was having, was ringing'], ans: 0, exp: '"I WAS HAVING dinner when the phone RANG" — Past Continuous (ongoing) + Past Simple (interruption).' },
            { q: '"After I ___ my homework, I watched TV."', opts: ['finish', 'finished', 'had finished', 'was finishing'], ans: 2, exp: '"After I HAD FINISHED my homework..." — Past Perfect for the action that happened first.' },
            { q: 'What is the correct narrative sequence?', opts: ['I arrived. I was eating. I had left.', 'I had arrived. I ate. I was leaving.', 'I arrived. I ate. I had already eaten.', 'I was arriving. I ate. I had left.'], ans: 2, exp: 'The correct sequence shows chronological order with Past Perfect for the earliest action.' }
          ]
        },
        {
          id: 'l8c',
          title: 'Narrative Story: The Unexpected Journey',
          titlePt: 'História Narrativa: A Viagem Inesperada',
          icon: '✈️',
          xp: 25,
          learn: {
            explanation: {
              en: 'In storytelling, Past Perfect signals "this happened even earlier". Watch for it in stories to understand the true order of events, not just the order they are mentioned in.',
              pt: 'Ao contar histórias, o Past Perfect assinala "isto aconteceu ainda mais cedo". Repara nele nas histórias para entenderes a verdadeira ordem dos eventos, não apenas a ordem em que são mencionados.'
            },
            examples: [
              { en: 'I had packed my bags before the taxi arrived.', pt: 'Eu já tinha feito as malas antes do táxi chegar.' },
              { en: 'She told me she had lost her passport.', pt: 'Ela disse-me que tinha perdido o passaporte.' },
              { en: 'By the time the sun rose, we had already left.', pt: 'Quando o sol nasceu, nós já tínhamos partido.' }
            ],
            practice: [
              { q: 'In "I had packed before the taxi arrived", what happened first?', opts: ['Taxi arriving', 'Packing', 'Both together', 'Unclear'], ans: 1, exp: 'Packing happened first (Past Perfect).' },
              { q: 'Past Perfect in stories usually signals:', opts: ['the next event', 'an earlier event', 'a future event', 'a repeated habit'], ans: 1, exp: 'It points back to something that happened even earlier.' }
            ]
          },
          qs: [
            { q: 'Read the story: "I was walking home when I saw a strange light in the sky. I had never seen anything like it before." The first action was:', opts: ['Walking', 'Seeing the light', 'The light appearing', 'Going home'], ans: 2, exp: 'The light appeared (implied), then the person saw it while walking. Past Perfect in the third sentence shows the light had appeared before seeing it.' },
            { q: 'In the story "I had already left the house when I remembered my keys", what happened first?', opts: ['Left the house', 'Remembered the keys', 'Went back', 'Forgot the keys'], ans: 0, exp: 'The person HAD LEFT (Past Perfect) before remembering (Past Simple).' },
            { q: 'Which sentence uses Past Perfect correctly in a narrative?', opts: ['I was tired because I was working all day.', 'I was tired because I worked all day.', 'I was tired because I had worked all day.', 'I was tired because I have worked all day.'], ans: 2, exp: '"I HAD WORKED all day" — cause (work) happened before effect (being tired).' },
            { q: '"She ___ the book for years before it ___ published."', opts: ['wrote, was', 'had written, was', 'has written, was', 'was writing, had been'], ans: 1, exp: '"She HAD WRITTEN the book for years before it WAS published."' }
          ]
        },
        {
          id: 'l8d',
          title: 'Sequence Words',
          titlePt: 'Palavras de Sequência',
          icon: '🔗',
          xp: 20,
          learn: {
            explanation: {
              en: 'Sequence words (first, then, after, before, finally) show the order of events in a story without needing complicated grammar. "Before" points to the earlier action; "after" and "then" point forward.',
              pt: 'As palavras de sequência (first, then, after, before, finally) mostram a ordem dos eventos numa história sem precisar de gramática complicada. "Before" aponta para a acção mais cedo; "after" e "then" apontam para a frente.'
            },
            examples: [
              { en: 'First, I woke up. Then, I had breakfast.', pt: 'Primeiro, acordei. Depois, tomei o pequeno-almoço.' },
              { en: 'Before leaving, I locked the door.', pt: 'Antes de sair, tranquei a porta.' },
              { en: 'Finally, we arrived home.', pt: 'Finalmente, chegámos a casa.' }
            ],
            practice: [
              { q: 'Which word points to the EARLIER action?', opts: ['after', 'before', 'then', 'finally'], ans: 1, exp: '"Before" = earlier.' },
              { q: '"I ate breakfast. ___ I left for work."', opts: ['Before', 'Then', 'While', 'Since'], ans: 1, exp: '"Then" shows the next step.' }
            ]
          },
          qs: [
            { q: '"First, ___ we went to the market, we bought vegetables."', opts: ['then', 'before', 'after', 'finally'], ans: 0, exp: '"First, THEN we went..." — sequence words order events.' },
            { q: 'Which word signals the EARLIEST action?', opts: ['after', 'before', 'then', 'finally'], ans: 1, exp: '"Before" indicates the action that happened earlier. "Before I ate, I washed my hands."' },
            { q: '"I finished my homework. ___ I went to bed."', opts: ['Before', 'After', 'Then', 'When'], ans: 2, exp: '"Then" shows the next action in sequence.' },
            { q: 'Which sequence is correct?', opts: ['I woke up, then I brushed my teeth, after I had breakfast.', 'I had breakfast, before I woke up, then I brushed my teeth.', 'I woke up, then I had breakfast, after I brushed my teeth.'], ans: 0, exp: 'Correct sequence: woke up → brushed teeth → had breakfast.' },
            { q: '"___ I left the house, I locked the door."', opts: ['After', 'Before', 'Then', 'Finally'], ans: 0, exp: '"AFTER I left the house, I locked the door." — First left, then locked.' }
          ]
        },
        {
          id: 'l8e',
          title: 'Using "Already", "Just" & "Never"',
          titlePt: 'Usando "Already", "Just" e "Never"',
          icon: '⌛',
          xp: 20,
          learn: {
            explanation: {
              en: 'With Past Perfect, "already" shows something was completed earlier than expected, "just" shows it happened a moment before, and "never" shows no prior experience. They usually go between had and the past participle.',
              pt: 'Com o Past Perfect, "already" mostra que algo foi concluído mais cedo do que o esperado, "just" mostra que aconteceu um instante antes, e "never" mostra ausência de experiência anterior. Normalmente ficam entre had e o particípio passado.'
            },
            examples: [
              { en: 'I had already left when you called.', pt: 'Eu já tinha saído quando me ligaste.' },
              { en: 'She had just arrived when the meeting started.', pt: 'Ela tinha acabado de chegar quando a reunião começou.' },
              { en: 'He had never tried sushi before that night.', pt: 'Ele nunca tinha experimentado sushi antes daquela noite.' }
            ],
            practice: [
              { q: '"I had ___ finished when she arrived." (a moment before)', opts: ['already', 'never', 'just', 'yet'], ans: 2, exp: '"Just" = a moment before.' },
              { q: 'Where does "already" usually go?', opts: ['before had', 'between had and participle', 'at the end only', 'before the subject'], ans: 1, exp: 'had + already + past participle.' }
            ]
          },
          qs: [
            { q: '"I had ___ arrived when she called." (a moment before)', opts: ['already', 'never', 'just', 'yet'], ans: 2, exp: '"I had JUST arrived" = a very short time before.' },
            { q: '"She ___ seen that movie, so we watched something else." (before)', opts: ['had just', 'had already', 'had never', 'has already'], ans: 1, exp: '"She had ALREADY seen it" — an action completed before another time.' },
            { q: '"I ___ been to Italy, so I was excited to go." (not before)', opts: ['had already', 'had just', 'had never', 'has never'], ans: 2, exp: '"I had NEVER been" — no prior experience.' },
            { q: '"We ___ finished eating ___ the waiter arrived."', opts: ['had already, when', 'already had, while', 'had just, before', 'just had, after'], ans: 0, exp: '"We HAD ALREADY finished eating WHEN the waiter arrived."' },
            { q: 'Which is correct?', opts: ['I had never saw that before.', 'I had never seen that before.', 'I have never saw that before.', 'I never seen that before.'], ans: 1, exp: '"I had never SEEN" — Past Perfect requires Past Participle (seen, not saw).' }
          ]
        },
        {
          id: 'l8f',
          title: 'Narrative Practice: Writing a Story',
          titlePt: 'Prática Narrativa: Escrevendo uma História',
          icon: '✍️',
          xp: 25,
          learn: {
            explanation: {
              en: 'To write a good story, start most actions in Past Simple, use Past Continuous for background scenes, and Past Perfect for anything that happened before the main story timeline.',
              pt: 'Para escrever uma boa história, começa a maioria das acções no Past Simple, usa o Past Continuous para cenários de fundo, e o Past Perfect para tudo o que aconteceu antes da linha temporal principal da história.'
            },
            examples: [
              { en: 'The sun was setting when she finally arrived.', pt: 'O sol estava a pôr-se quando ela finalmente chegou.' },
              { en: 'He had studied hard, so the exam felt easy.', pt: 'Ele tinha estudado muito, por isso o exame pareceu fácil.' },
              { en: 'I opened the door and walked inside.', pt: 'Eu abri a porta e entrei.' }
            ],
            practice: [
              { q: 'Which tense usually starts a story\'s main events?', opts: ['Past Perfect', 'Past Simple', 'Present Perfect', 'Future'], ans: 1, exp: 'Past Simple narrates the main sequence of events.' },
              { q: 'Which tense explains WHY something happened earlier?', opts: ['Past Continuous', 'Past Perfect', 'Present Simple', 'Future Perfect'], ans: 1, exp: 'Past Perfect gives the earlier cause/reason.' }
            ]
          },
          qs: [
            { q: 'What tense is best to start a story?', opts: ['Present Simple', 'Past Simple', 'Future', 'Present Perfect'], ans: 1, exp: 'Past Simple is the standard tense to start narrating a past event.' },
            { q: 'What tense describes an action that was ongoing when something else happened?', opts: ['Past Perfect', 'Past Continuous', 'Past Simple', 'Present Continuous'], ans: 1, exp: 'Past Continuous describes actions in progress at a specific past moment.' },
            { q: '"I was walking to the store when I ___ my friend."', opts: ['see', 'saw', 'was seeing', 'had seen'], ans: 1, exp: '"I WAS WALKING (ongoing) when I SAW (interruption) my friend."' },
            { q: '"She ___ in that office for five years before she got promoted."', opts: ['worked', 'was working', 'had worked', 'has worked'], ans: 2, exp: '"She HAD WORKED for five years" — duration before a later event (promotion).' },
            { q: 'Finish the story correctly: "I ___ the door and ___ inside."', opts: ['opened, walked', 'opened, was walking', 'was opening, walked', 'had opened, walked'], ans: 0, exp: 'Simple Past is used for consecutive actions in a story.' }
          ]
        },
        {
          id: 'l8g',
          title: 'Time Expressions with Past Perfect',
          titlePt: 'Expressões de Tempo com Past Perfect',
          icon: '🕰️',
          xp: 20,
          learn: {
            explanation: {
              en: '"By the time", "since", and "for" often pair with Past Perfect. "By the time" marks a deadline in the past. "Since" marks a starting point; "for" marks a duration.',
              pt: '"By the time", "since" e "for" juntam-se frequentemente ao Past Perfect. "By the time" marca um prazo no passado. "Since" marca um ponto de partida; "for" marca uma duração.'
            },
            examples: [
              { en: 'By the time he called, I had already gone to bed.', pt: 'Quando ele ligou, eu já tinha ido para a cama.' },
              { en: 'She had worked there for ten years before retiring.', pt: 'Ela tinha trabalhado lá durante dez anos antes de se reformar.' },
              { en: 'They had been friends since childhood.', pt: 'Eles eram amigos desde a infância.' }
            ],
            practice: [
              { q: '"For" is used with:', opts: ['a point in time', 'a duration', 'a place', 'a reason'], ans: 1, exp: '"For" + a period/duration: for 10 years.' },
              { q: '"Since" is used with:', opts: ['a duration', 'a starting point', 'a place', 'a reason'], ans: 1, exp: '"Since" + a specific starting point: since 2010.' }
            ]
          },
          qs: [
            { q: '"By the time I arrived, they ___ already ___."', opts: ['have, left', 'had, left', 'has, left', 'were, left'], ans: 1, exp: '"By the time" + Past Perfect: "they HAD already LEFT."' },
            { q: '"I had been there ___ 2010."', opts: ['for', 'since', 'from', 'ago'], ans: 1, exp: '"since 2010" — specific point in time. Past Perfect requires "since" or "for".' },
            { q: '"She had been a teacher ___ 15 years before she retired."', opts: ['for', 'since', 'during', 'from'], ans: 0, exp: '"for 15 years" — duration. "For" + period, "Since" + point.' },
            { q: '"___ the time I woke up, she had already left."', opts: ['After', 'By', 'Before', 'During'], ans: 1, exp: '"BY the time" indicates the deadline before which the action had already happened.' },
            { q: 'Which expression does NOT work with Past Perfect?', opts: ['by the time', 'before', 'after', 'tomorrow'], ans: 3, exp: '"tomorrow" is future — cannot be used with Past Perfect.' }
          ]
        },
        {
          id: 'l8h',
          title: 'Review: Narrative Tenses',
          titlePt: 'Revisão: Tempos Narrativos',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Let\'s review: Past Simple for the main events, Past Continuous for ongoing background actions, and Past Perfect for anything that happened even earlier. Mixing all three correctly makes your stories sound natural and clear.',
              pt: 'Vamos rever: Past Simple para os eventos principais, Past Continuous para acções de fundo em curso, e Past Perfect para tudo o que aconteceu ainda mais cedo. Combinar os três correctamente faz as tuas histórias soarem naturais e claras.'
            },
            examples: [
              { en: 'I was reading when the lights went out.', pt: 'Eu estava a ler quando as luzes se apagaram.' },
              { en: 'She had already left when I called.', pt: 'Ela já tinha saído quando eu liguei.' },
              { en: 'We arrived, unpacked, and went to sleep.', pt: 'Nós chegámos, desfizemos as malas, e fomos dormir.' }
            ],
            practice: [
              { q: 'Which combination shows an interrupted action?', opts: ['Past Simple + Past Simple', 'Past Continuous + Past Simple', 'Past Perfect + Past Perfect', 'Future + Past'], ans: 1, exp: 'Past Continuous (ongoing) + Past Simple (interruption).' },
              { q: 'Which tense always shows the EARLIEST event?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Present Perfect'], ans: 2, exp: 'Past Perfect = always the earliest action in the sequence.' }
            ]
          },
          qs: [
            { q: '"I was watching TV when the lights went out." The two tenses are:', opts: ['Past Continuous + Past Simple', 'Past Simple + Past Perfect', 'Past Perfect + Past Simple', 'Past Continuous + Past Perfect'], ans: 0, exp: 'Past Continuous (was watching) + Past Simple (went out).' },
            { q: '"I had finished my work before I went home." The first action is:', opts: ['Went home', 'Finished work', 'Started work', 'Both at the same time'], ans: 1, exp: 'Had finished (Past Perfect) happened before went home (Past Simple).' },
            { q: 'Which sentence correctly describes three past events in order?', opts: ['I ate, I had arrived, I was sleeping.', 'I arrived, I ate, I slept.', 'I was arriving, I ate, I had slept.', 'I had arrived, I was eating, I slept.'], ans: 1, exp: 'Arrived (Past Simple) → ate (Past Simple) → slept (Past Simple) shows clear sequence.' },
            { q: '"She ___ never ___ sushi before she ___ to Japan."', opts: ['had, eaten, went', 'has, ate, went', 'had, ate, went', 'has, eaten, was going'], ans: 0, exp: '"She HAD never EATEN sushi before she WENT to Japan."' },
            { q: 'Narrative tenses are essential for:', opts: ['Writing emails', 'Ordering food', 'Telling stories', 'Giving directions'], ans: 2, exp: 'Narrative tenses are primarily used for storytelling and describing past events.' }
          ]
        }
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT3);
