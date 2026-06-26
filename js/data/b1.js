// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1.js
// ═══════════════════════════════════════════════════════
// B1 / B2 — Advanced Grammar
// u10 is tagged B2 but included here to preserve curriculum order.
// Edit this file to update B1 and B2 lesson content.

const UNITS_B1 = [
  {
      id:'u6', cefr:'B1', title:'Phrasal Verbs', titlePt:'Verbos Frasais',
      desc:'Sound like a native speaker 🤯',
      descPt:'Soa como um falante nativo 🤯',
      color:'#bc8cff', icon:'💬', premium:true,
      lessons:[
        {id:'l19', title:'Common Phrasal Verbs', titlePt:'Verbos Frasais Comuns', icon:'💬', xp:30, learn:{
          explanation:{
            en:'Phrasal verbs combine a verb with a preposition or particle to create a new meaning, often totally different from the original verb. "Give up" (verb: give) means to quit! Native speakers use them constantly.',
            pt:'Os phrasal verbs combinam um verbo com uma preposição ou partícula para criar um novo significado, muitas vezes totalmente diferente do verbo original. "Give up" (verbo: give) significa desistir! Os falantes nativos usam-nos constantemente.'
          },
          examples:[
            {en:'Don\'t give up on your dreams.', pt:'Não desistas dos teus sonhos.'},
            {en:'I ran into an old friend yesterday.', pt:'Encontrei um velho amigo ontem, por acaso.'},
            {en:'Can you look after my dog?', pt:'Podes cuidar do meu cão?'},
          ],
          practice:[
            {q:'"Give up" means:', opts:['to donate','to quit','to grow','to wake up'], ans:1, exp:'Give up = quit/stop trying.'},
            {q:'"Look after" means:', opts:['to search for','to take care of','to admire','to ignore'], ans:1, exp:'Look after = take care of.'},
          ],
        }, qs:[
          {q:'"Give up" means:',opts:['to donate','to stop trying','to increase effort','to hand over'],ans:1,exp:'"Give up" = quit/desistir. "Don\'t give up!" 💪'},
          {q:'"She ran ___ her ex at the mall."',opts:['over','into','away','out'],ans:1,exp:'"Run into" = to meet unexpectedly. Awkward! 😬'},
          {q:'"Turn ___ the TV — I\'m sleeping!"',opts:['on','up','off','down'],ans:2,exp:'"Turn off" = stop a device.'},
          {q:'"He needs to ___ up with a good idea."',opts:['come','give','bring','look'],ans:0,exp:'"Come up with" = to think of/invent.'},
          {q:'"Can you ___ after my dog this weekend?"',opts:['look','watch','take','see'],ans:0,exp:'"Look after" = to take care of.'},
        ]},
      ]
    },
  {
      id:'u7', cefr:'B1', title:'Idioms', titlePt:'Expressões Idiomáticas',
      desc:'Speak naturally & sound cool 😎',
      descPt:'Fala naturalmente e com estilo 😎',
      color:'#ff4081', icon:'🗣️', premium:true,
      lessons:[
        {id:'l20', title:'Common Idioms', titlePt:'Expressões Comuns', icon:'🗣️', xp:35, learn:{
          explanation:{
            en:'Idioms are fixed expressions whose meaning isn\'t literal — you can\'t guess it just from the individual words. "It\'s raining cats and dogs" doesn\'t involve animals; it means it\'s raining very heavily! Learning idioms helps you sound natural.',
            pt:'Os idiomas são expressões fixas cujo significado não é literal — não se consegue adivinhar apenas pelas palavras individuais. "It\'s raining cats and dogs" não tem animais; significa que está a chover muito! Aprender idiomas ajuda-te a soar natural.'
          },
          examples:[
            {en:'That exam was a piece of cake!', pt:'Aquele exame foi canja (muito fácil)!'},
            {en:'Break a leg in your interview!', pt:'Boa sorte na tua entrevista!'},
            {en:'He\'s on the fence about the job offer.', pt:'Ele está indeciso sobre a proposta de trabalho.'},
          ],
          practice:[
            {q:'"A piece of cake" means:', opts:['delicious food','very easy','very hard','a dessert'], ans:1, exp:'A piece of cake = very easy.'},
            {q:'"On the fence" means:', opts:['sitting outside','undecided','very confident','angry'], ans:1, exp:'On the fence = undecided.'},
          ],
        }, qs:[
          {q:'"It\'s raining cats and dogs." This means:',opts:['Animals are falling','It\'s raining heavily','The weather is strange','Pets are outside'],ans:1,exp:'"Raining cats and dogs" = raining VERY heavily.'},
          {q:'"Break a leg!" means:',opts:['Be careful!','Good luck!','Hurry up!','Don\'t be nervous!'],ans:1,exp:'"Break a leg" = good luck! Used in theatre.'},
          {q:'"He\'s on the fence about the decision." This means he is:',opts:['sitting down','undecided','very sure','wrong'],ans:1,exp:'"On the fence" = undecided/indeciso.'},
          {q:'"That exam was a piece of cake." This means:',opts:['It was delicious','It was very hard','It was very easy','It was boring'],ans:2,exp:'"A piece of cake" = very easy. 🎂'},
          {q:'"Hit the nail on the head" = to be:',opts:['violent','confused','exactly right','careless'],ans:2,exp:'"Hit the nail on the head" = exactly right/acertar em cheio.'},
        ]},
      ]
    },
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
    },
  {
      id: 'u9',
      cefr: 'B1',
      title: 'Future Perfect & Future Continuous',
      titlePt: 'Future Perfect e Future Continuous',
      desc: 'Talk about what will be happening or finished 🔮',
      descPt: 'Fala sobre o que estará a acontecer ou já estará terminado 🔮',
      color: '#7c4dff',
      icon: '🔮',
      premium: false,
      lessons: [
        {
          id: 'l9a',
          title: 'Future Continuous: Actions in Progress',
          titlePt: 'Future Continuous: Acções em Progresso',
          icon: '🔄',
          xp: 20,
          learn: {
            explanation: {
              en: 'Future Continuous (will be + verb-ing) describes an action that will be in progress at a specific moment in the future. "This time tomorrow, I will be sleeping." It\'s like a snapshot of the future.',
              pt: 'O Future Continuous (will be + verbo-ing) descreve uma acção que estará em curso num momento específico do futuro. "This time tomorrow, I will be sleeping." É como uma fotografia do futuro.'
            },
            examples: [
              { en: 'This time next week, I will be flying to London.', pt: 'A esta hora na semana que vem, estarei a voar para Londres.' },
              { en: 'At 9pm, she will be watching the game.', pt: 'Às 21h, ela estará a ver o jogo.' },
              { en: 'Will you be using your car tomorrow?', pt: 'Vais estar a usar o teu carro amanhã?' }
            ],
            practice: [
              { q: 'Future Continuous formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + verb-ed', 'am/is/are + verb-ing'], ans: 1, exp: 'will + be + verb-ing.' },
              { q: '"At midnight I ___ (sleep)."', opts: ['will sleep', 'will be sleeping', 'will have slept', 'sleep'], ans: 1, exp: 'Future Continuous: will be sleeping.' }
            ]
          },
          qs: [
            { q: '"This time tomorrow, I ___ on the beach."', opts: ['will lie', 'will be lying', 'am lying', 'will have lain'], ans: 1, exp: '"will be lying" = action in progress at a specific future time.' },
            { q: 'Future Continuous = will + ___ + verb-ing', opts: ['be', 'have', 'do', 'being'], ans: 0, exp: 'Future Continuous = WILL + BE + verb-ing.' },
            { q: '"At 10am tomorrow, we ___ a meeting."', opts: ['will have', 'will be having', 'are having', 'had'], ans: 1, exp: '"will be having" = ongoing action at a specific future time.' },
            { q: 'Which is correct?', opts: ['I will be study at 8pm.', 'I will be studying at 8pm.', 'I am studying at 8pm.', 'I will studying at 8pm.'], ans: 1, exp: '"will be studying" — correct form: will + be + -ing.' }
          ]
        },
        {
          id: 'l9b',
          title: 'Future Perfect: Completed Actions',
          titlePt: 'Future Perfect: Acções Completadas',
          icon: '✅',
          xp: 20,
          learn: {
            explanation: {
              en: 'Future Perfect (will have + past participle) shows an action that will be completed before a specific point in the future. "By Friday, I will have finished the report." Think of it as looking back from a future moment.',
              pt: 'O Future Perfect (will have + particípio passado) mostra uma acção que estará concluída antes de um ponto específico no futuro. "By Friday, I will have finished the report." Imagina que olhas para trás a partir de um momento futuro.'
            },
            examples: [
              { en: 'By 2030, she will have graduated.', pt: 'Em 2030, ela já terá se formado.' },
              { en: 'I will have cooked dinner by the time you arrive.', pt: 'Eu já terei cozinhado o jantar quando chegares.' },
              { en: 'Will you have finished by 6pm?', pt: 'Já terás terminado até às 18h?' }
            ],
            practice: [
              { q: 'Future Perfect formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + past participle', 'have + past participle'], ans: 2, exp: 'will + have + past participle.' },
              { q: '"By next year, I ___ this course."', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: '"By" + future point = Future Perfect: will have finished.' }
            ]
          },
          qs: [
            { q: '"By 2025, I ___ graduated."', opts: ['will have', 'have', 'will', 'am going to'], ans: 0, exp: '"will have graduated" = will + have + past participle. The action will be complete by then.' },
            { q: 'Future Perfect = will + ___ + past participle', opts: ['be', 'have', 'has', 'had'], ans: 1, exp: 'Future Perfect = WILL + HAVE + past participle.' },
            { q: '"___ you have finished by 6pm?"', opts: ['Will', 'Are', 'Do', 'Have'], ans: 0, exp: '"Will you have finished?" = question using Future Perfect.' },
            { q: 'Which sentence is correct?', opts: ['By next year, I will finish my degree.', 'By next year, I will have finished my degree.', 'By next year, I have finished my degree.', 'By next year, I finished my degree.'], ans: 1, exp: '"By next year, I will have finished" = Future Perfect to show completion by a future time.' },
            { q: '"They ___ already ___ the report by Friday."', opts: ['will, finish', 'will have, finished', 'have, finished', 'will be, finishing'], ans: 1, exp: '"They will have already finished by Friday" — Future Perfect.' }
          ]
        },
        {
          id: 'l9c',
          title: 'Using "By the time" with Future Perfect',
          titlePt: 'Usando "By the time" com Future Perfect',
          icon: '⌛',
          xp: 20,
          learn: {
            explanation: {
              en: '"By the time" introduces the future point by which something will be done. It always pairs with Future Perfect in the main clause: "By the time he arrives, we will have eaten." The time clause uses Present Simple.',
              pt: '"By the time" introduz o ponto futuro pelo qual algo estará feito. Junta-se sempre ao Future Perfect na oração principal: "By the time he arrives, we will have eaten." A oração temporal usa o Presente Simples.'
            },
            examples: [
              { en: 'By the time she calls, I will have left.', pt: 'Quando ela ligar, eu já terei saído.' },
              { en: 'By the time the film ends, it will have been 3 hours.', pt: 'Quando o filme acabar, já terão passado 3 horas.' },
              { en: 'I will have eaten by the time you arrive.', pt: 'Eu já terei comido quando chegares.' }
            ],
            practice: [
              { q: 'After "by the time", use:', opts: ['will + base verb', 'Present Simple', 'Past Simple', 'Future Perfect'], ans: 1, exp: 'Time clause = Present Simple (not will).' },
              { q: '"By the time I arrive, she ___ (leave)."', opts: ['will leave', 'will have left', 'left', 'leaves'], ans: 1, exp: 'Future Perfect: will have left.' }
            ]
          },
          qs: [
            { q: '"By the time you arrive, we ___ already ___ dinner."', opts: ['will, have', 'will have, had', 'have, had', 'will be, having'], ans: 1, exp: '"By the time you arrive, we WILL HAVE ALREADY HAD dinner."' },
            { q: '"By the time he gets here, I ___ for an hour."', opts: ['will wait', 'will have waited', 'am waiting', 'waited'], ans: 1, exp: '"will have waited" — Future Perfect to show duration before a future point.' },
            { q: 'Which time expression is used with Future Perfect?', opts: ['now', 'by the time', 'currently', 'for the moment'], ans: 1, exp: '"By the time" is commonly used to introduce the future point before which the action is completed.' },
            { q: '"She ___ her homework by 8pm."', opts: ['will finish', 'will have finished', 'is finishing', 'finishes'], ans: 1, exp: '"will have finished" = she will be finished by 8pm.' },
            { q: 'What is the difference between Future Continuous and Future Perfect?', opts: ['Future Continuous is for completed actions, Future Perfect for ongoing', 'Future Continuous is for ongoing actions, Future Perfect for completed', 'Both are for ongoing actions', 'Both are for completed actions'], ans: 1, exp: 'Future Continuous = ongoing at a future time. Future Perfect = completed by a future time.' }
          ]
        },
        {
          id: 'l9d',
          title: 'Future Perfect Continuous',
          titlePt: 'Future Perfect Continuous',
          icon: '⏳',
          xp: 25,
          learn: {
            explanation: {
              en: 'Future Perfect Continuous (will have been + verb-ing) emphasises how long an action will have been going on by a future point. "By 2030, I will have been studying English for 10 years."',
              pt: 'O Future Perfect Continuous (will have been + verbo-ing) enfatiza há quanto tempo uma acção terá durado até um ponto futuro. "By 2030, I will have been studying English for 10 years."'
            },
            examples: [
              { en: 'By next June, I will have been working here for 5 years.', pt: 'No próximo Junho, já trabalharei aqui há 5 anos.' },
              { en: 'She will have been waiting for two hours by then.', pt: 'Ela já estará à espera há duas horas nessa altura.' },
              { en: 'They will have been building the house for a year.', pt: 'Eles já estarão a construir a casa há um ano.' }
            ],
            practice: [
              { q: 'Future Perfect Continuous formula:', opts: ['will + be + verb-ing', 'will + have + past participle', 'will + have + been + verb-ing', 'will + verb'], ans: 2, exp: 'will + have + been + verb-ing.' },
              { q: 'It emphasises:', opts: ['a single completed action', 'duration of an ongoing action up to a future point', 'a future plan', 'a present habit'], ans: 1, exp: 'Duration in progress up to a future point.' }
            ]
          },
          qs: [
            { q: '"By 2026, I ___ English for 10 years."', opts: ['will be learning', 'will have learned', 'will have been learning', 'am learning'], ans: 2, exp: '"will have been learning" = Future Perfect Continuous: emphasising duration up to a future point.' },
            { q: 'Future Perfect Continuous = will + have + been + ___', opts: ['-ing', 'past participle', 'infinitive', 'base form'], ans: 0, exp: 'Future Perfect Continuous = WILL + HAVE + BEEN + verb-ing.' },
            { q: '"They ___ here for 20 years by 2030."', opts: ['will live', 'will have lived', 'will have been living', 'are living'], ans: 2, exp: '"will have been living" emphasises the duration of the action.' },
            { q: 'Which sentence shows duration up to a future point?', opts: ['I will study tomorrow.', 'I will have studied for three hours by then.', 'I will be studying at 5pm.', 'I will study today.'], ans: 1, exp: '"will have studied for three hours" — Future Perfect (not Continuous) for duration before a future point.' }
          ]
        },
        {
          id: 'l9e',
          title: 'Future Time Clauses',
          titlePt: 'Orações Temporais Futuras',
          icon: '⏰',
          xp: 20,
          learn: {
            explanation: {
              en: 'After time conjunctions (when, as soon as, until, before, after), we use Present Simple — NOT "will" — even when talking about the future. The "will" goes in the other part of the sentence only.',
              pt: 'Depois de conjunções de tempo (when, as soon as, until, before, after), usamos o Presente Simples — NÃO "will" — mesmo quando falamos do futuro. O "will" vai apenas na outra parte da frase.'
            },
            examples: [
              { en: 'I will call you when I arrive. (NOT: when I will arrive)', pt: 'Vou ligar-te quando chegar. (NÃO: when I will arrive)' },
              { en: 'As soon as she wakes up, she will eat.', pt: 'Assim que ela acordar, ela vai comer.' },
              { en: 'Wait until the rain stops.', pt: 'Espera até a chuva parar.' }
            ],
            practice: [
              { q: '"I will call you when I ___ home."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Time clause = Present Simple: get (not will get).' },
              { q: '"As soon as she ___, we\'ll leave."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: 'As soon as + Present Simple.' }
            ]
          },
          qs: [
            { q: '"When I ___ home, I will call you."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Use Present Simple in time clauses (when, as soon as, until) after "will" in the main clause.' },
            { q: '"As soon as she ___ here, we will start."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: '"As soon as she arrives" — Present Simple in the time clause.' },
            { q: 'Which sentence uses the time clause correctly?', opts: ['I will wait until you will come.', 'I will wait until you come.', 'I will wait until you are coming.', 'I wait until you will come.'], ans: 1, exp: '"until you come" — Present Simple after until in a future time clause.' },
            { q: '"___ the time I finish, I will have completed 10 lessons."', opts: ['When', 'After', 'Before', 'By'], ans: 3, exp: '"BY the time I finish" — Future Perfect expresses the action completed by that future point.' },
            { q: 'What is the rule for future time clauses?', opts: ['Use will + infinitive', 'Use present tense (not will)', 'Use past tense', 'Use future continuous'], ans: 1, exp: 'In future time clauses (after when, as soon as, until, before, after, by the time), we use the present tense, not will.' }
          ]
        },
        {
          id: 'l9f',
          title: 'Predictions with Future Forms',
          titlePt: 'Previsões com Formas do Futuro',
          icon: '🔮',
          xp: 20,
          learn: {
            explanation: {
              en: 'Use "will" for opinions and strong predictions ("I think it will snow"). Use "going to" for predictions with visible evidence ("Look at those clouds — it\'s going to rain!"). "Might/could" express lower certainty.',
              pt: 'Usa "will" para opiniões e previsões fortes ("I think it will snow"). Usa "going to" para previsões com evidência visível ("Look at those clouds — it\'s going to rain!"). "Might/could" expressam menor certeza.'
            },
            examples: [
              { en: 'I think she will win the competition.', pt: 'Eu acho que ela vai ganhar a competição.' },
              { en: 'Look at the sky — it\'s going to storm!', pt: 'Olha para o céu — vai haver tempestade!' },
              { en: 'He might be late today.', pt: 'Ele pode chegar atrasado hoje.' }
            ],
            practice: [
              { q: 'Which shows the STRONGEST certainty?', opts: ['might rain', 'could rain', 'will rain', 'may rain'], ans: 2, exp: '"Will" = strongest certainty.' },
              { q: '"Look out! You ___ fall!" (visible evidence)', opts: ['will', 'are going to', 'might', 'may'], ans: 1, exp: 'Visible evidence → "going to".' }
            ]
          },
          qs: [
            { q: '"I think she ___ the exam." (opinion)', opts: ['will pass', 'is passing', 'passes', 'is going to pass'], ans: 0, exp: '"will pass" — predictions based on opinion or belief use "will".' },
            { q: '"Look at those clouds! It ___ rain." (evidence)', opts: ['will', 'is going to', 'may', 'might'], ans: 1, exp: '"is going to" — predictions based on visible evidence.' },
            { q: '"In 2050, people ___ live on Mars." (certain prediction)', opts: ['will', 'are going to', 'may', 'might'], ans: 0, exp: '"will" — strong prediction about the future.' },
            { q: '"I ___ be a millionaire one day!" (ambition)', opts: ['will', 'am going to', 'might', 'may'], ans: 0, exp: '"will" — expressing ambition or hope about the future.' },
            { q: 'Which is the most certain prediction?', opts: ['It will rain.', 'It might rain.', 'It could rain.', 'It may rain.'], ans: 0, exp: '"will" expresses the highest certainty; "might/could/may" express possibility.' }
          ]
        },
        {
          id: 'l9g',
          title: 'Review: Future Tenses',
          titlePt: 'Revisão: Tempos Futuros',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Quick recap: Will = spontaneous decisions, promises, opinions. Going to = plans and visible evidence. Future Continuous = action in progress at a future moment. Future Perfect = action completed before a future point.',
              pt: 'Revisão rápida: Will = decisões espontâneas, promessas, opiniões. Going to = planos e evidência visível. Future Continuous = acção em curso num momento futuro. Future Perfect = acção concluída antes de um ponto futuro.'
            },
            examples: [
              { en: 'This time next year, I will be living in London.', pt: 'A esta hora no próximo ano, estarei a viver em Londres.' },
              { en: 'By December, I will have passed my English exam.', pt: 'Em Dezembro, já terei passado no meu exame de inglês.' },
              { en: 'I\'m going to start a new job next Monday.', pt: 'Vou começar um novo emprego na próxima segunda-feira.' }
            ],
            practice: [
              { q: '"By next month, I ___ 30 lessons." (completed)', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: 'Completed by future point = Future Perfect.' },
              { q: '"At 5pm tomorrow, I ___ in a meeting." (in progress)', opts: ['will have met', 'will be meeting', 'meet', 'will meet'], ans: 1, exp: 'In progress at a future moment = Future Continuous.' }
            ]
          },
          qs: [
            { q: '"This time next week, I ___ in a hotel." (ongoing)', opts: ['will stay', 'will be staying', 'will have stayed', 'am staying'], ans: 1, exp: '"will be staying" = action in progress at a specific future time.' },
            { q: '"By next month, I ___ all the lessons." (completed)', opts: ['will finish', 'will have finished', 'am finishing', 'finish'], ans: 1, exp: '"will have finished" = Future Perfect for completion by a future point.' },
            { q: '"For 5 years by 2026, she ___ as a teacher." (duration)', opts: ['will work', 'will have been working', 'will be working', 'works'], ans: 1, exp: '"will have been working" — Future Perfect Continuous to emphasise duration.' },
            { q: '"When you arrive, I ___ for you at the station."', opts: ['will wait', 'will be waiting', 'will have waited', 'am waiting'], ans: 1, exp: '"will be waiting" = I will already be waiting at the time you arrive.' },
            { q: '"By the time we get there, the film ___ started."', opts: ['will have', 'will', 'is going to', 'has'], ans: 0, exp: '"will have started" — Future Perfect: completed before a future point.' }
          ]
        }
      ]
    },
  {
      id: 'u10',
      cefr: 'B2',
      title: 'Advanced Conditionals',
      titlePt: 'Condicionais Avançados',
      desc: 'Master if-clauses for all situations 🤔',
      descPt: 'Domina as orações condicionais para todas as situações 🤔',
      color: '#ff6f00',
      icon: '🤔',
      premium: false,
      lessons: [
        {
          id: 'l10a',
          title: 'Third Conditional',
          titlePt: 'Terceiro Condicional',
          icon: '🔀',
          xp: 25,
          learn: {
            explanation: {
              en: 'Third Conditional (If + Past Perfect, would have + past participle) describes UNREAL past situations. It expresses what would have happened if the past had been different. It\'s often used for regret.',
              pt: 'O Terceiro Condicional (If + Past Perfect, would have + particípio passado) descreve situações passadas IRREAIS. Expressa o que teria acontecido se o passado tivesse sido diferente. Usado para exprimir arrependimento.'
            },
            examples: [
            { en: 'If I had studied harder, I would have passed.', pt: 'Se eu tivesse estudado mais, teria passado.' },
            { en: 'She would have called if she had known.', pt: 'Ela teria ligado se tivesse sabido.' },
            { en: 'We wouldn\'t have been late if we had left earlier.', pt: 'Não teríamos chegado atrasados se tivéssemos saído mais cedo.' }
            ],
            practice: [
            { q: 'Third Conditional formula:', opts: ['If+Past Simple,would+verb', 'If+Past Perfect,would have+PP', 'If+Present,will+verb', 'If+were,would+verb'], ans: 1, exp: 'If + Past Perfect, would have + past participle.' },
            { q: 'Complete: \'If I had known, I ___ helped you.\'', opts: ['will have', 'would have', 'had', 'should'], ans: 1, exp: 'would have + past participle.' }
            ]
          },
          qs: [
            { q: '"If I had studied harder, I ___ the exam."', opts: ['would pass', 'would have passed', 'will pass', 'passed'], ans: 1, exp: '"would have passed" — Third Conditional: If + Past Perfect, Would have + PP. Unreal past condition.' },
            { q: 'Third Conditional = If + ___ + Would have + ___', opts: ['Past Simple, Past Participle', 'Past Perfect, Past Participle', 'Present Simple, Infinitive', 'Past Continuous, Infinitive'], ans: 1, exp: 'Third Conditional: If + PAST PERFECT, Would have + PAST PARTICIPLE.' },
            { q: '"If she ___ to the party, she would have met him."', opts: ['went', 'had gone', 'goes', 'was going'], ans: 1, exp: '"If she HAD GONE" — Third Conditional for unreal past situations.' },
            { q: '"I would have bought it if I ___ enough money."', opts: ['have', 'had', 'had had', 'would have'], ans: 2, exp: '"if I HAD HAD enough money" — Past Perfect of "have".' },
            { q: 'Which sentence expresses regret about the past?', opts: ['If I am rich, I will travel.', 'If I were rich, I would travel.', 'If I had been rich, I would have traveled.', 'If I have been rich, I travel.'], ans: 2, exp: 'Third Conditional expresses regret or wishes about the past.' }
          ]
        },
        {
          id: 'l10b',
          title: 'Mixed Conditionals',
          titlePt: 'Condicionais Mistas',
          icon: '🔄',
          xp: 25,
          learn: {
            explanation: {
              en: 'Mixed Conditionals combine two different conditional types. Past condition + present result: \'If I had studied medicine, I would be a doctor now.\' Present condition + past result: \'If I were richer, I would have bought it.\'',
              pt: 'Os Condicionais Mistos combinam dois tipos diferentes. Condição passada + resultado presente: \'If I had studied medicine, I would be a doctor now.\' Condição presente + resultado passado: \'If I were richer, I would have bought it.\''
            },
            examples: [
            { en: 'If I had taken that job, I would be in Paris now.', pt: 'Se eu tivesse aceite esse emprego, estaria em Paris agora.' },
            { en: 'If she were more careful, she wouldn\'t have broken it.', pt: 'Se ela fosse mais cuidadosa, não o teria partido.' },
            { en: 'He would be healthier now if he had exercised more.', pt: 'Ele estaria mais saudável agora se tivesse feito mais exercício.' }
            ],
            practice: [
            { q: 'Past condition + present result uses:', opts: ['If+Past Perfect,would have+PP', 'If+Past Perfect,would+verb', 'If+Present,will+verb', 'If+Past,would+verb'], ans: 1, exp: 'If + Past Perfect → would + infinitive (present result).' },
            { q: '\'If I were richer, I ___ bought that house.\'', opts: ['would buy', 'will buy', 'would have bought', 'had bought'], ans: 2, exp: 'Present condition + past result = would have bought.' }
            ]
          },
          qs: [
            { q: '"If I had studied medicine, I ___ a doctor now." (past condition, present result)', opts: ['would be', 'would have been', 'am', 'was'], ans: 0, exp: 'Mixed Conditional: If + Past Perfect, Would + infinitive. Past condition → Present result.' },
            { q: '"If I were a millionaire, I ___ bought that house." (present condition, past result)', opts: ['would have', 'would', 'will have', 'had'], ans: 0, exp: 'Mixed Conditional: If + Past Simple, Would have + PP. Present condition → Past result.' },
            { q: '"If she had taken the job, she ___ in London now."', opts: ['would be', 'would have been', 'is', 'was'], ans: 0, exp: 'If + Past Perfect (past condition), Would + infinitive (present result).' },
            { q: '"If I ___ English, I wouldn\'t have gotten this job." (present ability, past consequence)', opts: ['hadn\'t studied', 'don\'t study', 'didn\'t study', 'wouldn\'t study'], ans: 2, exp: '"If I DIDN\'T study English" (present condition) → "wouldn\'t have gotten" (past result).' },
            { q: 'Which is an example of a mixed conditional?', opts: ['If it rains, I will stay home.', 'If I studied, I would pass.', 'If I had studied, I would be a doctor now.', 'If I had studied, I would have passed.'], ans: 2, exp: '"If I had studied" (past condition) → "I would be a doctor now" (present result) is mixed.' }
          ]
        },
        {
          id: 'l10c',
          title: 'Unreal Past with "Wish"',
          titlePt: 'Passado Irreal com "Wish"',
          icon: '✨',
          xp: 20,
          learn: {
            explanation: {
              en: 'Wish expresses unreal desires. Wish + Past Simple = unreal present desire: \'I wish I had more time.\' Wish + Past Perfect = past regret: \'I wish I had studied harder.\' Never use will directly after wish.',
              pt: 'Wish expressa desejos irreais. Wish + Past Simple = desejo irreal presente: \'I wish I had more time.\' Wish + Past Perfect = arrependimento passado: \'I wish I had studied harder.\' Nunca uses will directamente depois de wish.'
            },
            examples: [
            { en: 'I wish I had saved more money.', pt: 'Eu queria ter poupado mais dinheiro.' },
            { en: 'She wishes she could speak French.', pt: 'Ela queria poder falar francês.' },
            { en: 'I wish I hadn\'t eaten so much!', pt: 'Eu queria não ter comido tanto!' }
            ],
            practice: [
            { q: '\'I wish I ___ to the party.\' (past regret)', opts: ['went', 'go', 'had gone', 'would go'], ans: 2, exp: 'Past regret = wish + Past Perfect: had gone.' },
            { q: '\'I wish I ___ more time now.\' (present wish)', opts: ['have', 'had', 'had had', 'will have'], ans: 1, exp: 'Present wish = wish + Past Simple: had.' }
            ]
          },
          qs: [
            { q: '"I wish I ___ you yesterday." (regret)', opts: ['see', 'saw', 'had seen', 'have seen'], ans: 2, exp: '"I wish I HAD SEEN you" — wish + Past Perfect expresses regret about the past.' },
            { q: '"I wish I ___ more time to travel." (present wish)', opts: ['have', 'had', 'had had', 'would have'], ans: 1, exp: '"I wish I HAD more time" — wish + Past Simple for present unreal wishes.' },
            { q: '"She wishes she ___ to the party." (past)', opts: ['went', 'goes', 'had gone', 'would go'], ans: 2, exp: '"She wishes she HAD GONE" — regret about the past.' },
            { q: '"I wish ___ studying earlier." (regret)', opts: ['I start', 'I started', 'I had started', 'I would start'], ans: 2, exp: '"I wish I HAD STARTED" — regret about a past action.' },
            { q: 'Which expresses a present wish?', opts: ['I wish I had been there.', 'I wish I were there now.', 'I wish I went there yesterday.', 'I wish I am there.'], ans: 1, exp: '"I wish I WERE there now" — present unreal wish (were for all subjects).' }
          ]
        },
        {
          id: 'l10d',
          title: 'Inverted Conditionals',
          titlePt: 'Condicionais Invertidos',
          icon: '↕️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Inverted conditionals are formal: drop \'if\' and swap subject and auxiliary. \'If I had known\' becomes \'Had I known\'. \'If I were you\' becomes \'Were I you\'. \'If you should need help\' becomes \'Should you need help\'.',
              pt: 'Os condicionais invertidos são formais: elimina \'if\' e troca sujeito e auxiliar. \'If I had known\' torna-se \'Had I known\'. \'If I were you\' torna-se \'Were I you\'. \'If you should need help\' torna-se \'Should you need help\'.'
            },
            examples: [
            { en: 'Had I known you were coming, I would have cooked.', pt: 'Se eu soubesse que estavas a vir, teria cozinhado.' },
            { en: 'Were I you, I would accept the offer.', pt: 'Se eu fosse tu, aceitaria a oferta.' },
            { en: 'Should you need help, please call me.', pt: 'Se precisares de ajuda, liga-me.' }
            ],
            practice: [
            { q: '\'Had I known\' is the inversion of:', opts: ['If I know', 'If I had known', 'If I would know', 'If I knew'], ans: 1, exp: 'Had I known = If I had known.' },
            { q: '\'Were I you\' is the inversion of:', opts: ['If I was you', 'If I had been you', 'If I were you', 'If I am you'], ans: 2, exp: 'Were I you = If I were you.' }
            ]
          },
          qs: [
            { q: '"Had I known, I ___ you." = "If I had known, I would have told you."', opts: ['would tell', 'would have told', 'will tell', 'tell'], ans: 1, exp: '"Had I known" = "If I had known". Inversion in Third Conditional.' },
            { q: '"Were I you, I ___ that job." = "If I were you, I would accept that job."', opts: ['would accept', 'would have accepted', 'accept', 'accepted'], ans: 0, exp: '"Were I you" = "If I were you". Inversion in Second Conditional.' },
            { q: '"Should you need help, ___ me." = "If you should need help, contact me."', opts: ['contact', 'would contact', 'will contact', 'contacts'], ans: 0, exp: '"Should you need help" = "If you should need help". Inversion with should.' },
            { q: '"___ she known, she would have come." = "If she had known, she would have come."', opts: ['Did', 'Has', 'Had', 'Would'], ans: 2, exp: '"Had she known" — inversion removes "if" and moves "had" to the front.' },
            { q: 'What is the inversion for "If I were you"?', opts: ['Were I you', 'Was I you', 'If were I you', 'I were you'], ans: 0, exp: '"Were I you" is the correct inversion.' }
          ]
        },
        {
          id: 'l10e',
          title: 'Conditionals with "Unless", "Even if"',
          titlePt: 'Condicionais com "Unless" e "Even if"',
          icon: '🚫',
          xp: 20,
          learn: {
            explanation: {
              en: 'Unless means \'if not\': \'I won\'t go unless you come\' = \'I won\'t go if you don\'t come.\' Even if means the result happens regardless of the condition: \'I\'ll go even if it rains.\' As long as means on the condition that.',
              pt: 'Unless significa \'se não\': \'I won\'t go unless you come\' = \'I won\'t go if you don\'t come.\' Even if significa que o resultado acontece independentemente: \'I\'ll go even if it rains.\' As long as significa desde que.'
            },
            examples: [
            { en: 'I won\'t leave unless you come with me.', pt: 'Eu não vou sair a menos que venhas comigo.' },
            { en: 'She\'ll pass even if she doesn\'t study much.', pt: 'Ela vai passar mesmo que não estude muito.' },
            { en: 'You can stay as long as you are quiet.', pt: 'Podes ficar desde que estejas sossegado.' }
            ],
            practice: [
            { q: '\'Unless\' means:', opts: ['if also', 'if not', 'even if', 'as long as'], ans: 1, exp: 'Unless = if not.' },
            { q: '\'Even if it rains, I will go.\' This means:', opts: ['I only go if it does not rain', 'The rain will not stop me', 'I might go', 'I will not go'], ans: 1, exp: 'Even if = regardless of the condition.' }
            ]
          },
          qs: [
            { q: '"I won\'t go ___ you invite me." = "I won\'t go if you don\'t invite me."', opts: ['if', 'unless', 'even if', 'as long as'], ans: 1, exp: '"Unless" means "if not". "I won\'t go unless you invite me."' },
            { q: '"She will come ___ she is tired." = "She will come even if she is tired."', opts: ['unless', 'even if', 'as long as', 'provided that'], ans: 1, exp: '"Even if" expresses that the result will happen regardless of the condition.' },
            { q: '"You can go ___ you finish your homework." = "You can go if you finish your homework."', opts: ['unless', 'even if', 'as long as', 'if not'], ans: 2, exp: '"As long as" means "on the condition that".' },
            { q: '"I will help you ___ you need me." = "I will help you if you need me."', opts: ['unless', 'provided that', 'even if', 'although'], ans: 1, exp: '"Provided that" means "if" or "on the condition that".' },
            { q: 'Which sentence uses "unless" correctly?', opts: ['Unless you study, you will pass.', 'Unless you study, you won\'t pass.', 'Unless you will study, you won\'t pass.', 'Unless you studied, you won\'t pass.'], ans: 1, exp: '"Unless you study, you won\'t pass." = If you don\'t study, you won\'t pass.' }
          ]
        },
        {
          id: 'l10f',
          title: 'Review: All Conditionals',
          titlePt: 'Revisão: Todos os Condicionais',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Summary: Zero Conditional = If+Present, Present (universal truth). First = If+Present, will+verb (real future). Second = If+Past Simple, would+verb (unreal present). Third = If+Past Perfect, would have+PP (unreal past).',
              pt: 'Resumo: Zero = If+Present, Present (verdade universal). First = If+Present, will+verb (futuro real). Second = If+Past Simple, would+verb (irreal presente). Third = If+Past Perfect, would have+PP (irreal passado).'
            },
            examples: [
            { en: 'If water reaches 100C, it boils. (Zero)', pt: 'Se a água atingir 100C, ferve. (Zero)' },
            { en: 'If it rains, I will stay home. (First)', pt: 'Se chover, ficarei em casa. (First)' },
            { en: 'If I had wings, I would fly. (Second)', pt: 'Se eu tivesse asas, voaria. (Second)' }
            ],
            practice: [
            { q: 'Which conditional is for REAL future possibilities?', opts: ['Zero', 'First', 'Second', 'Third'], ans: 1, exp: 'First Conditional = real future.' },
            { q: 'Which conditional expresses PAST regret?', opts: ['Zero', 'First', 'Second', 'Third'], ans: 3, exp: 'Third Conditional = unreal past regret.' }
            ]
          },
          qs: [
            { q: 'Zero Conditional: If + Present, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 1, exp: 'Zero Conditional = If + Present, Present (universal truths).' },
            { q: 'First Conditional: If + Present, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 0, exp: 'First Conditional = If + Present, Will + Infinitive (real future possibility).' },
            { q: 'Second Conditional: If + Past, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 2, exp: 'Second Conditional = If + Past, Would + Infinitive (unreal present).' },
            { q: 'Third Conditional: If + Past Perfect, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 3, exp: 'Third Conditional = If + Past Perfect, Would have + PP (unreal past).' },
            { q: '"If I ___ you, I would have gone." (mixed)', opts: ['am', 'were', 'had been', 'would be'], ans: 1, exp: '"If I WERE you" (present condition) → "would have gone" (past result). Mixed conditional.' }
          ]
        },
        {
          id: 'l10g',
          title: 'Conditionals in Real Life',
          titlePt: 'Condicionais na Vida Real',
          icon: '💡',
          xp: 20,
          learn: {
            explanation: {
              en: 'Conditionals appear in everyday life. Zero for facts and advice. First for real future plans. Second for dreams and hypotheticals. Third for regrets. Inverted forms (Had I, Were I) for formal writing.',
              pt: 'Os condicionais aparecem no dia-a-dia. Zero para factos e conselhos. First para planos futuros reais. Second para sonhos e hipotéticos. Third para arrependimentos. Formas invertidas (Had I, Were I) para escrita formal.'
            },
            examples: [
            { en: 'If you are tired, you should rest. (advice)', pt: 'Se estás cansado, deves descansar. (conselho)' },
            { en: 'If I win the lottery, I\'ll buy a house. (First - real)', pt: 'Se eu ganhar na lotaria, comprarei uma casa. (First - real)' },
            { en: 'If I were president, I would change things. (Second - dream)', pt: 'Se eu fosse presidente, mudaria as coisas. (Second - sonho)' }
            ],
            practice: [
            { q: '\'Should you need anything, call me.\' This is:', opts: ['First Conditional', 'Second Conditional', 'Inverted Conditional', 'Zero Conditional'], ans: 2, exp: 'Should you need = formal inversion of First Conditional.' },
            { q: '\'If I had left earlier, I wouldn\'t be late.\' Which type?', opts: ['First', 'Second', 'Mixed/Third', 'Zero'], ans: 2, exp: 'Past condition + present result = Mixed Conditional.' }
            ]
          },
          qs: [
            { q: '"If it rains tomorrow, we ___ the picnic." (real future)', opts: ['cancel', 'will cancel', 'would cancel', 'would have cancelled'], ans: 1, exp: 'First Conditional: real possibility about the future.' },
            { q: '"If I ___ more money, I would travel." (unreal present)', opts: ['have', 'had', 'had had', 'will have'], ans: 1, exp: 'Second Conditional: unreal present situation.' },
            { q: '"If I had known, I ___ differently." (unreal past)', opts: ['act', 'would act', 'would have acted', 'will act'], ans: 2, exp: 'Third Conditional: expressing regret or different past outcome.' },
            { q: '"___ you need assistance, don\'t hesitate to ask." (polite)', opts: ['If', 'Unless', 'Should', 'Were'], ans: 2, exp: '"Should you need assistance" = formal inversion of First Conditional.' },
            { q: 'Which conditional expresses a general truth?', opts: ['If it snows, the roads are dangerous.', 'If it snows, I will stay home.', 'If it snowed, I would stay home.', 'If it had snowed, I would have stayed home.'], ans: 0, exp: 'Zero Conditional = general truth: "If it snows, the roads are dangerous."' }
          ]
        },
        {
          id: 'l10h',
          title: 'Advanced Conditional Practice',
          titlePt: 'Prática Avançada de Condicionais',
          icon: '✍️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Advanced practice: choose the right conditional by reading the full context. Is it real or unreal? Past, present, or future? Formal or informal? Keywords like \'had\', \'were\', \'should\' signal formal inversions.',
              pt: 'Prática avançada: escolhe o condicional correcto lendo o contexto completo. É real ou irreal? Passado, presente ou futuro? Formal ou informal? Palavras-chave como \'had\', \'were\', \'should\' sinalizam inversões formais.'
            },
            examples: [
            { en: 'Had she arrived earlier, she would have gotten a seat.', pt: 'Se ela tivesse chegado mais cedo, teria conseguido lugar.' },
            { en: 'Unless you apologise, I won\'t forgive you.', pt: 'A menos que peças desculpa, não te perdoarei.' },
            { en: 'Were it not for your help, I would have failed.', pt: 'Se não fosse a tua ajuda, eu teria falhado.' }
            ],
            practice: [
            { q: '\'Had we known the truth, we ___ differently.\'', opts: ['would act', 'will act', 'would have acted', 'had acted'], ans: 2, exp: 'Third Conditional inversion: would have acted.' },
            { q: '\'___ I you, I would think twice before accepting.\'', opts: ['If', 'Had', 'Were', 'Should'], ans: 2, exp: 'Were I you = If I were you.' }
            ]
          },
          qs: [
            { q: '"Had I known you were coming, I ___ dinner."', opts: ['would prepare', 'would have prepared', 'will prepare', 'prepared'], ans: 1, exp: '"Had I known" (Third Conditional) → "would have prepared".' },
            { q: '"Were she here, she ___ help us."', opts: ['would have', 'would have had', 'would', 'will'], ans: 2, exp: '"Were she here" (Second Conditional inversion) → "would help".' },
            { q: '"If I ___ you, I wouldn\'t have done that."', opts: ['were', 'had been', 'am', 'would be'], ans: 0, exp: 'Mixed conditional: present condition "If I were you" + past result "wouldn\'t have done".' },
            { q: '"You won\'t pass the exam ___ you study."', opts: ['unless', 'if', 'as long as', 'provided that'], ans: 0, exp: '"Unless you study" = if you don\'t study.' },
            { q: '"___ I were you, I would accept the offer."', opts: ['If', 'Unless', 'Were', 'Had'], ans: 2, exp: '"Were I you" = inversion of "If I were you".' }
          ]
        }
      ]
    },
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
    },
  {
      id: 'u12',
      cefr: 'B1',
      title: 'Relative Clauses',
      titlePt: 'Orações Relativas',
      desc: 'Add information to your sentences seamlessly 🔗',
      descPt: 'Adiciona informação às tuas frases de forma fluida 🔗',
      color: '#1565c0',
      icon: '🔗',
      premium: false,
      lessons: [
        {
          id: 'l12a',
          title: 'Defining Relative Clauses',
          titlePt: 'Orações Relativas Definidoras',
          icon: '🔍',
          xp: 20,
          learn: {
            explanation: {
              en: 'Defining relative clauses identify WHICH person or thing we mean. Without them, the sentence is incomplete. We use: WHO for people, WHICH for things, THAT for people or things (informal), WHERE for places.',
              pt: 'As orações relativas definidoras identificam QUAL pessoa ou coisa pretendemos dizer. Sem elas, a frase fica incompleta. Usamos: WHO para pessoas, WHICH para coisas, THAT para pessoas ou coisas (informal), WHERE para lugares.'
            },
            examples: [
              { en: 'The man who called is my uncle.', pt: 'O homem que ligou é o meu tio.' },
              { en: 'The book that I read was amazing.', pt: 'O livro que li foi incrível.' },
              { en: 'The city where I grew up is small.', pt: 'A cidade onde cresci é pequena.' }
            ],
            practice: [
              { q: 'Which pronoun is used for PEOPLE?', opts: ['which', 'where', 'who', 'whose'], ans: 2, exp: 'WHO for people.' },
              { q: '"The car ___ I bought is red."', opts: ['who', 'which', 'where', 'whose'], ans: 1, exp: 'WHICH for things.' }
            ]
          },
          qs: [
            { q: '"The man ___ lives next door is a doctor." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — relative pronoun for people in subject position.' },
            { q: '"This is the book ___ I bought yesterday." (object)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in object position.' },
            { q: '"The woman ___ car was stolen called the police."', opts: ['who', 'whom', 'which', 'whose'], ans: 3, exp: '"whose" — relative pronoun showing possession for people.' },
            { q: '"The house ___ is red belongs to my uncle."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in subject position.' },
            { q: 'Which relative pronoun is used for people?', opts: ['which', 'who', 'that', 'both who and that'], ans: 3, exp: '"who" and "that" can both be used for people.' }
          ]
        },
        {
          id: 'l12b',
          title: 'Non-Defining Relative Clauses',
          titlePt: 'Orações Relativas Não-Definidoras',
          icon: '📝',
          xp: 20,
          learn: {
            explanation: {
              en: 'Non-defining clauses add EXTRA information — remove them and the sentence still makes complete sense. They always use commas and CANNOT use "that". Example: "My brother, WHO lives in London, is a doctor."',
              pt: 'As orações não-definidoras adicionam informação EXTRA — se as removermos, a frase ainda faz sentido completo. Usam sempre vírgulas e NÃO podem usar "that". Exemplo: "My brother, WHO lives in London, is a doctor."'
            },
            examples: [
              { en: 'My mother, who is a nurse, works nights.', pt: 'A minha mãe, que é enfermeira, trabalha de noite.' },
              { en: 'Paris, which I visited last year, is beautiful.', pt: 'Paris, que visitei no ano passado, é bonita.' },
              { en: 'The Eiffel Tower, which was built in 1889, is iconic.', pt: 'A Torre Eiffel, que foi construída em 1889, é icónica.' }
            ],
            practice: [
              { q: 'Non-defining clauses are separated by:', opts: ['full stops', 'commas', 'dashes', 'semicolons'], ans: 1, exp: 'Commas before and after the non-defining clause.' },
              { q: 'Can "that" be used in a non-defining clause?', opts: ['Yes, always', 'Yes, sometimes', 'No, never', 'Only in questions'], ans: 2, exp: 'No — non-defining clauses cannot use "that".' }
            ]
          },
          qs: [
            { q: '"My brother, ___ lives in London, is a chef." (extra info)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas, gives extra information about the subject.' },
            { q: '"Paris, ___ is the capital of France, is beautiful."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause for things.' },
            { q: '"My car, ___ is blue, is very fast."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause with commas.' },
            { q: 'What punctuation is used with non-defining relative clauses?', opts: ['No punctuation', 'Commas', 'Semicolons', 'Colons'], ans: 1, exp: 'Non-defining clauses are separated by commas.' },
            { q: 'Which is a non-defining relative clause?', opts: ['The man who lives here is my uncle.', 'My uncle, who lives here, is a doctor.', 'The woman that I saw was happy.', 'The house which I bought is big.'], ans: 1, exp: '"My uncle, who lives here, is a doctor" — extra information with commas.' }
          ]
        },
        {
          id: 'l12c',
          title: 'Relative Pronouns: Who, Whom, Whose',
          titlePt: 'Pronomes Relativos: Who, Whom, Whose',
          icon: '📖',
          xp: 20,
          learn: {
            explanation: {
              en: 'WHO is subject form for people: "The man WHO called." WHOM is object form (formal): "The man WHOM I met." WHOSE shows possession: "The student WHOSE phone was stolen." WHICH is for things.',
              pt: 'WHO é a forma de sujeito para pessoas: "The man WHO called." WHOM é a forma de objecto (formal): "The man WHOM I met." WHOSE mostra posse: "The student WHOSE phone was stolen." WHICH é para coisas.'
            },
            examples: [
              { en: 'The woman who called is my aunt.', pt: 'A mulher que ligou é a minha tia.' },
              { en: 'The student whose phone was stolen was upset.', pt: 'O estudante cujo telemóvel foi roubado ficou chateado.' },
              { en: 'To whom should I address the letter?', pt: 'A quem devo dirigir a carta?' }
            ],
            practice: [
              { q: '"The man ___ car is broken is my boss." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: 'WHOSE = possession.' },
              { q: 'WHOM is used as:', opts: ['subject form', 'object form (formal)', 'possessive', 'for things'], ans: 1, exp: 'WHOM = formal object pronoun for people.' }
            ]
          },
          qs: [
            { q: '"The woman ___ you met is my sister." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 0, exp: '"who" can be used as an object pronoun, though "whom" is more formal.' },
            { q: '"To ___ should I address the letter?" (object of preposition)', opts: ['who', 'whom', 'whose', 'which'], ans: 1, exp: '"whom" — formal object pronoun used after prepositions.' },
            { q: '"The student ___ phone was stolen reported it." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: '"whose" — relative pronoun showing possession.' },
            { q: '"The company ___ you work for is expanding." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 3, exp: '"which" — relative pronoun for things as objects.' },
            { q: 'When do we use "whom"?', opts: ['As a subject', 'As an object (formal)', 'To show possession', 'For things'], ans: 1, exp: '"whom" is the formal object form for people.' }
          ]
        },
        {
          id: 'l12d',
          title: 'Omitting the Relative Pronoun',
          titlePt: 'Omitindo o Pronome Relativo',
          icon: '✂️',
          xp: 20,
          learn: {
            explanation: {
              en: 'We can omit (drop) the relative pronoun only when it is the OBJECT of the clause, not the subject. "The book (that) I read was great." — "that" is the object, so we can drop it. "The man WHO called" — WHO is the subject, cannot be dropped.',
              pt: 'Podemos omitir o pronome relativo apenas quando é o OBJECTO da oração, não o sujeito. "The book (that) I read was great." — "that" é o objecto, podemos omiti-lo. "The man WHO called" — WHO é o sujeito, não pode ser omitido.'
            },
            examples: [
              { en: 'The film (that) I watched was boring.', pt: 'O filme (que) vi era aborrecido.' },
              { en: 'The man who lives next door is a doctor. (cannot omit)', pt: 'O homem que vive ao lado é médico. (não se pode omitir)' },
              { en: 'This is the book (which) I told you about.', pt: 'Este é o livro (do qual) te falei.' }
            ],
            practice: [
              { q: 'When can you omit the relative pronoun?', opts: ['Always', 'Never', 'When it is the object', 'When it is the subject'], ans: 2, exp: 'Only when it is the OBJECT.' },
              { q: 'In "The girl who won", can you omit "who"?', opts: ['Yes', 'No', 'Sometimes', 'Only in writing'], ans: 1, exp: 'No — "who" is the subject here.' }
            ]
          },
          qs: [
            { q: '"The film ___ I watched was boring." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The relative pronoun can be omitted when it is the object of the clause: "The film I watched..."' },
            { q: '"The man ___ lives next door is a doctor." (subject, cannot omit)', opts: ['who', 'whom', 'which', 'that'], ans: 0, exp: 'The relative pronoun cannot be omitted when it is the subject of the clause.' },
            { q: '"This is the book ___ I told you about." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The object pronoun can be omitted: "This is the book I told you about."' },
            { q: 'Which relative pronoun can be omitted?', opts: ['Subject pronoun', 'Object pronoun', 'Possessive pronoun', 'All pronouns'], ans: 1, exp: 'Only object relative pronouns can be omitted.' },
            { q: 'Which sentence has an omitted relative pronoun?', opts: ['The man who called you is here.', 'The book you gave me is great.', 'The woman whose car was stolen is upset.', 'The house which I bought is old.'], ans: 1, exp: '"The book (that) you gave me" — "that" is omitted.' }
          ]
        },
        {
          id: 'l12e',
          title: 'Reduced Relative Clauses',
          titlePt: 'Orações Relativas Reduzidas',
          icon: '📉',
          xp: 25,
          learn: {
            explanation: {
              en: 'Reduced relative clauses drop the pronoun and auxiliary verb, leaving just the verb. Active = verb-ing: "The man STANDING by the door" (= who is standing). Passive = past participle: "The house BUILT in 1990" (= which was built).',
              pt: 'As orações relativas reduzidas eliminam o pronome e o auxiliar, deixando apenas o verbo. Activa = verbo-ing: "The man STANDING by the door" (= who is standing). Passiva = particípio passado: "The house BUILT in 1990" (= which was built).'
            },
            examples: [
              { en: 'The man standing at the door is my uncle.', pt: 'O homem que está à porta é o meu tio.' },
              { en: 'The book lying on the table is mine.', pt: 'O livro que está na mesa é meu.' },
              { en: 'The house built in 1990 is beautiful.', pt: 'A casa construída em 1990 é bonita.' }
            ],
            practice: [
              { q: 'Active reduced clause uses:', opts: ['past participle', 'verb-ing', 'to + verb', 'base verb'], ans: 1, exp: 'Active reduced = verb-ing: the girl singing.' },
              { q: 'Passive reduced clause uses:', opts: ['verb-ing', 'to + verb', 'past participle', 'will + verb'], ans: 2, exp: 'Passive reduced = past participle: the house built.' }
            ]
          },
          qs: [
            { q: '"The man ___ at the door is my uncle." (reduced from "who is standing")', opts: ['standing', 'stands', 'stand', 'to stand'], ans: 0, exp: 'Reduced relative clause: "The man standing at the door..." = "who is standing".' },
            { q: '"The book ___ on the table is mine." (reduced from "which is lying")', opts: ['lying', 'lies', 'lay', 'to lie'], ans: 0, exp: '"The book lying on the table" = "which is lying".' },
            { q: '"The house ___ in 1990 is beautiful." (passive, reduced from "which was built")', opts: ['built', 'building', 'to build', 'builds'], ans: 0, exp: '"The house built in 1990" = "which was built".' },
            { q: 'How do you reduce a relative clause?', opts: ['Remove the pronoun and change the verb to -ing or PP', 'Add more words', 'Keep the pronoun', 'Change to future tense'], ans: 0, exp: 'Reduce by dropping the relative pronoun and changing the verb to -ing (active) or past participle (passive).' },
            { q: 'Which is a reduced relative clause?', opts: ['The girl who sings well.', 'The girl singing well.', 'The girl sings well.', 'The girl, singing well, left.'], ans: 1, exp: '"The girl singing well" is reduced from "who sings well".' }
          ]
        },
        {
          id: 'l12f',
          title: 'Review: Relative Clauses',
          titlePt: 'Revisão: Orações Relativas',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Defining clauses = essential, no commas, "that" OK. Non-defining = extra info, commas, no "that". WHO = people. WHICH = things. WHOSE = possession. WHERE = places. WHEN = times. Pronoun can be omitted if object.',
              pt: 'Definidoras = essenciais, sem vírgulas, "that" permitido. Não-definidoras = informação extra, vírgulas, sem "that". WHO = pessoas. WHICH = coisas. WHOSE = posse. WHERE = lugares. WHEN = momentos. Pronome pode ser omitido se for objecto.'
            },
            examples: [
              { en: "That's the school where I studied.", pt: 'Essa é a escola onde estudei.' },
              { en: 'My car, which is red, needs a service.', pt: 'O meu carro, que é vermelho, precisa de revisão.' },
              { en: 'The woman whose dog barked all night is my neighbour.', pt: 'A mulher cujo cão ladrou a noite toda é minha vizinha.' }
            ],
            practice: [
              { q: 'Commas are used in ___ relative clauses.', opts: ['defining', 'non-defining', 'both', 'neither'], ans: 1, exp: 'Non-defining clauses use commas.' },
              { q: '"The film ___ won the Oscar is brilliant."', opts: ['who', 'whose', 'which', 'where'], ans: 2, exp: 'WHICH for things.' }
            ]
          },
          qs: [
            { q: '"The woman ___ we met is famous." (object, can omit)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" as object — can be omitted in informal English.' },
            { q: '"This is the house ___ has a red door." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things as subject.' },
            { q: '"My teacher, ___ is from England, speaks very clearly." (non-defining)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas for people.' },
            { q: '"The car ___ I bought is red." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: '"which" as object — can be omitted in informal speech.' },
            { q: 'Which sentence has a reduced relative clause?', opts: ['The woman who lives here is kind.', 'The woman living here is kind.', 'The woman, who lives here, is kind.', 'The woman that lives here is kind.'], ans: 1, exp: '"The woman living here" is reduced from "who lives here".' }
          ]
        },
        {
          id: 'l12g',
          title: 'Relative Clauses Practice',
          titlePt: 'Prática de Orações Relativas',
          icon: '✍️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Relative adverbs add location, time, and reason nuance: WHERE for places, WHEN for times, WHY for reasons. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."',
              pt: 'Os advérbios relativos adicionam nuances de localização, tempo e razão: WHERE para lugares, WHEN para momentos, WHY para razões. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."'
            },
            examples: [
              { en: 'That is the town where I grew up.', pt: 'Essa é a cidade onde cresci.' },
              { en: 'I remember the year when we met.', pt: 'Lembro-me do ano em que nos conhecemos.' },
              { en: 'Tell me the reason why you were late.', pt: 'Diz-me a razão pela qual chegaste atrasado.' }
            ],
            practice: [
              { q: '"The city ___ I was born is in the north." (place)', opts: ['when', 'which', 'where', 'whose'], ans: 2, exp: 'WHERE for places.' },
              { q: '"The reason ___ she left is unknown." (reason)', opts: ['where', 'when', 'why', 'whose'], ans: 2, exp: 'WHY for reasons.' }
            ]
          },
          qs: [
            { q: '"The restaurant ___ we ate is expensive." (object, can omit)', opts: ['where', 'which', 'who', 'whose'], ans: 1, exp: '"which" — object relative pronoun for things.' },
            { q: '"This is the city ___ I was born." (place)', opts: ['where', 'which', 'who', 'whose'], ans: 0, exp: '"where" — relative adverb for places.' },
            { q: '"The reason ___ I called is urgent." (reason)', opts: ['where', 'which', 'why', 'whose'], ans: 2, exp: '"why" — relative adverb for reasons.' },
            { q: '"That was the day ___ we met." (time)', opts: ['where', 'which', 'why', 'when'], ans: 3, exp: '"when" — relative adverb for time.' },
            { q: 'Which is correct?', opts: ['The house where I bought is big.', 'The house which I bought is big.', 'The house who I bought is big.', 'The house when I bought is big.'], ans: 1, exp: '"which" is the correct relative pronoun for things.' }
          ]
        }
      ]
    },
  {
      id: 'u13',
      cefr: 'B1',
      title: 'Gerunds & Infinitives',
      titlePt: 'Gerúndios e Infinitivos',
      desc: 'Master the two verb forms that confuse everyone 📚',
      descPt: 'Domina as duas formas verbais que confundem toda a gente 📚',
      color: '#00897b',
      icon: '📚',
      premium: false,
      lessons: [
        {
          id: 'l13a',
          title: 'Gerund: Verb + -ing',
          titlePt: 'Gerúndio: Verbo + -ing',
          icon: '🔵',
          xp: 20,
          learn: {
            explanation: {
              en: 'A gerund is a verb used as a noun by adding -ing: Swimming is fun. Gerunds can be the subject, the object of a verb, or the object of a preposition.',
              pt: 'Um gerúndio é um verbo usado como substantivo ao adicionar -ing: Swimming is fun. Os gerúndios podem ser o sujeito, o objecto de um verbo ou o objecto de uma preposição.'
            },
            examples: [
              { en: 'Swimming every day keeps you healthy.', pt: 'Nadar todos os dias mantém-te saudável.' },
              { en: 'I love cooking Italian food.', pt: 'Eu adoro cozinhar comida italiana.' },
              { en: 'She is good at playing the guitar.', pt: 'Ela é boa a tocar guitarra.' }
            ],
            practice: [
              { q: '\'___ is my favourite hobby.\' (gerund as subject)', opts: ['Swim', 'To swim', 'Swimming', 'Swims'], ans: 2, exp: 'Gerund as subject: Swimming.' },
              { q: 'Which verb takes a gerund?', opts: ['want', 'decide', 'enjoy', 'agree'], ans: 2, exp: 'enjoy + gerund: enjoy doing.' }
            ]
          },
          qs: [
            { q: 'Gerund = verb + ___', opts: ['-ed', '-ing', '-s', '-en'], ans: 1, exp: 'Gerund: verb + -ing, used as a noun.' },
            { q: '"___ is a great hobby." (gerund as subject)', opts: ['Read', 'Reading', 'To read', 'Reads'], ans: 1, exp: '"Reading" is a gerund acting as the subject of the sentence.' },
            { q: '"I enjoy ___ movies." (gerund after verb)', opts: ['watch', 'watching', 'to watch', 'watched'], ans: 1, exp: '"enjoy" takes a gerund: "enjoy watching".' },
            { q: '"She is good at ___." (gerund after preposition)', opts: ['sing', 'singing', 'to sing', 'sings'], ans: 1, exp: 'After prepositions (at, for, about) we use the gerund: "at singing".' },
            { q: 'Which is a gerund?', opts: ['to run', 'running', 'ran', 'runs'], ans: 1, exp: '"running" is the gerund form of the verb "run".' }
          ]
        },
        {
          id: 'l13b',
          title: 'Infinitive: To + Verb',
          titlePt: 'Infinitivo: To + Verbo',
          icon: '🟢',
          xp: 20,
          learn: {
            explanation: {
              en: 'The infinitive (to + base verb) is used after many verbs (want to, need to, decide to), after adjectives (happy to, easy to), and to express purpose (\'I went to the shop to buy milk\').',
              pt: 'O infinitivo (to + verbo base) é usado depois de muitos verbos (want to, need to, decide to), depois de adjectivos (happy to, easy to), e para expressar propósito (\'I went to the shop to buy milk\').'
            },
            examples: [
              { en: 'I want to learn English well.', pt: 'Eu quero aprender inglês bem.' },
              { en: 'She was happy to help me.', pt: 'Ela ficou feliz em me ajudar.' },
              { en: 'He went to the gym to exercise.', pt: 'Ele foi ao ginásio para fazer exercício.' }
            ],
            practice: [
              { q: '\'I decided ___ the job.\' (infinitive after verb)', opts: ['accept', 'accepting', 'to accept', 'accepted'], ans: 2, exp: 'decide + to + infinitive.' },
              { q: '\'She is easy ___ with.\' (infinitive after adjective)', opts: ['work', 'working', 'to work', 'worked'], ans: 2, exp: 'adjective + to + infinitive: easy to work with.' }
            ]
          },
          qs: [
            { q: 'Infinitive = ___ + verb', opts: ['to', 'for', 'with', 'by'], ans: 0, exp: 'Infinitive: to + base verb, e.g., "to study".' },
            { q: '"I want ___ English." (infinitive after verb)', opts: ['study', 'studying', 'to study', 'studied'], ans: 2, exp: '"want" takes the infinitive: "want to study".' },
            { q: '"I went to the store ___ milk." (infinitive of purpose)', opts: ['buy', 'buying', 'to buy', 'bought'], ans: 2, exp: 'Infinitive of purpose: "to buy" explains why I went to the store.' },
            { q: '"She is happy ___ you." (infinitive after adjective)', opts: ['see', 'seeing', 'to see', 'saw'], ans: 2, exp: '"happy to see" — infinitive after adjectives describing emotions.' },
            { q: 'Which is an infinitive?', opts: ['running', 'to run', 'runs', 'ran'], ans: 1, exp: '"to run" is the infinitive form.' }
          ]
        },
        {
          id: 'l13c',
          title: 'Verbs + Gerund vs Infinitive (Part 1)',
          titlePt: 'Verbos + Gerúndio vs Infinitivo (Parte 1)',
          icon: '⚖️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Some verbs ALWAYS take a gerund: enjoy, avoid, finish, mind, suggest, keep. Others ALWAYS take an infinitive: want, need, decide, hope, promise, plan. You simply have to learn which is which!',
              pt: 'Alguns verbos SEMPRE levam gerúndio: enjoy, avoid, finish, mind, suggest, keep. Outros SEMPRE levam infinitivo: want, need, decide, hope, promise, plan. Simplesmente tens de aprender quais são quais!'
            },
            examples: [
              { en: 'She finished reading the book.', pt: 'Ela acabou de ler o livro.' },
              { en: 'I need to go home now.', pt: 'Eu preciso de ir para casa agora.' },
              { en: 'He keeps making the same mistake.', pt: 'Ele continua a cometer o mesmo erro.' }
            ],
            practice: [
              { q: 'Which verb takes a GERUND?', opts: ['want', 'need', 'avoid', 'promise'], ans: 2, exp: 'avoid + gerund: avoid doing.' },
              { q: 'Which verb takes an INFINITIVE?', opts: ['enjoy', 'finish', 'plan', 'keep'], ans: 2, exp: 'plan + infinitive: plan to do.' }
            ]
          },
          qs: [
            { q: 'Which verb takes a gerund?', opts: ['want', 'enjoy', 'need', 'decide'], ans: 1, exp: '"enjoy" takes a gerund: "enjoy doing".' },
            { q: 'Which verb takes an infinitive?', opts: ['enjoy', 'avoid', 'want', 'finish'], ans: 2, exp: '"want" takes an infinitive: "want to do".' },
            { q: '"I hope ___ you soon."', opts: ['see', 'to see', 'seeing', 'seen'], ans: 1, exp: '"hope" takes the infinitive: "hope to see".' },
            { q: '"She avoids ___ in the rain."', opts: ['walk', 'to walk', 'walking', 'walked'], ans: 2, exp: '"avoids" takes a gerund: "avoids walking".' },
            { q: '"He agreed ___ me."', opts: ['help', 'to help', 'helping', 'helped'], ans: 1, exp: '"agreed" takes an infinitive: "agreed to help".' }
          ]
        },
        {
          id: 'l13d',
          title: 'Verbs + Gerund vs Infinitive (Part 2)',
          titlePt: 'Verbos + Gerúndio vs Infinitivo (Parte 2)',
          icon: '⚖️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Some verbs change meaning with gerund vs infinitive! STOP + gerund = end a habit (\'I stopped smoking\'). STOP + infinitive = pause to do something (\'I stopped to smoke\'). Same with REMEMBER and TRY.',
              pt: 'Alguns verbos mudam de significado com gerúndio vs infinitivo! STOP + gerúndio = terminar um hábito (\'I stopped smoking\'). STOP + infinitivo = pausar para fazer algo (\'I stopped to smoke\'). O mesmo com REMEMBER e TRY.'
            },
            examples: [
              { en: 'I stopped eating meat. (I no longer eat it)', pt: 'Eu parei de comer carne. (já não como)' },
              { en: 'I stopped to eat. (I paused to eat)', pt: 'Eu parei para comer. (parei para isso)' },
              { en: 'Remember to lock the door. (don\'t forget)', pt: 'Lembra-te de fechar a porta. (não esqueças)' }
            ],
            practice: [
              { q: '\'I stopped ___ (smoking = quit habit)\'', opts: ['to smoke', 'smoke', 'smoking', 'smoked'], ans: 2, exp: 'stop + gerund = end the habit.' },
              { q: '\'I stopped ___ (in order to rest)\'', opts: ['resting', 'rest', 'to rest', 'rested'], ans: 2, exp: 'stop + infinitive = pause to do something else.' }
            ]
          },
          qs: [
            { q: '"I love ___ English." (both gerund and infinitive possible)', opts: ['studying', 'to study', 'both are correct', 'neither'], ans: 2, exp: '"love" can take both: "love studying" and "love to study" have similar meanings.' },
            { q: '"I stopped ___ coffee." (habit)', opts: ['drink', 'to drink', 'drinking', 'drank'], ans: 2, exp: '"stopped drinking" = I quit drinking coffee. Stop + gerund = end an action.' },
            { q: '"I stopped ___ coffee." (to do something else)', opts: ['drink', 'to drink', 'drinking', 'drank'], ans: 1, exp: '"stopped to drink" = I stopped (something else) in order to drink. Stop + infinitive = purpose.' },
            { q: '"I remember ___ the door." (past memory)', opts: ['lock', 'to lock', 'locking', 'locked'], ans: 2, exp: '"remember locking" = I have a memory of locking it. Remember + gerund = past memory.' },
            { q: '"I remembered ___ the door." (required action)', opts: ['lock', 'to lock', 'locking', 'locked'], ans: 1, exp: '"remembered to lock" = I didn\'t forget to do it. Remember + infinitive = a task to do.' }
          ]
        },
        {
          id: 'l13e',
          title: 'Gerund vs Infinitive with "Try"',
          titlePt: 'Gerúndio vs Infinitivo com "Try"',
          icon: '💪',
          xp: 20,
          learn: {
            explanation: {
              en: '"Try + infinitive" = make an effort to do something difficult: "I tried to lift the box." "Try + gerund" = experiment with something as a solution: "Try adding more salt." The difference is subtle but important!',
              pt: '"Try + infinitivo" = fazer um esforço para fazer algo difícil: "I tried to lift the box." "Try + gerúndio" = experimentar algo como solução: "Try adding more salt." A diferença é subtil mas importante!'
            },
            examples: [
              { en: 'I tried to open the jar, but it was stuck.', pt: 'Tentei abrir o frasco, mas estava preso.' },
              { en: 'Try using a different password.', pt: 'Experimenta usar uma senha diferente.' },
              { en: 'She tried to explain, but nobody listened.', pt: 'Ela tentou explicar, mas ninguém ouviu.' }
            ],
            practice: [
              { q: '"Try ___ a different route." (experiment as solution)', opts: ['to take', 'take', 'taking', 'taken'], ans: 2, exp: 'try + gerund = experiment with.' },
              { q: '"I tried ___ the window, but it was locked." (attempt)', opts: ['open', 'opening', 'to open', 'opened'], ans: 2, exp: 'try + infinitive = attempt (might not succeed).' }
            ]
          },
          qs: [
            { q: '"I tried ___ the box, but it was too heavy." (attempt)', opts: ['lift', 'to lift', 'lifting', 'lifted'], ans: 1, exp: '"try to lift" = attempt to do something (maybe impossible).' },
            { q: '"I tried ___ the door to get in." (experiment)', opts: ['open', 'to open', 'opening', 'opened'], ans: 2, exp: '"try opening" = experiment to see if it works.' },
            { q: '"Try ___ your password again." (suggestion)', opts: ['enter', 'to enter', 'entering', 'entered'], ans: 1, exp: '"try to enter" = attempt to do something (usually as a suggestion).' },
            { q: '"I tried ___ the key, but it didn\'t work." (experiment)', opts: ['use', 'to use', 'using', 'used'], ans: 2, exp: '"try using" = experiment with the key as a solution.' },
            { q: 'What is the difference between "try to do" and "try doing"?', opts: ['No difference', 'Try to do = attempt; Try doing = experiment', 'Try to do = experiment; Try doing = attempt', 'Try to do = past; Try doing = present'], ans: 1, exp: '"try to do" = make an effort; "try doing" = experiment with an action.' }
          ]
        },
        {
          id: 'l13f',
          title: 'Gerund vs Infinitive with "Go"',
          titlePt: 'Gerúndio vs Infinitivo com "Go"',
          icon: '🏃',
          xp: 20,
          learn: {
            explanation: {
              en: '"Go + gerund" is used for recreational activities: "go swimming", "go shopping", "go hiking". "Go + infinitive" is used for purpose or destination: "I went to the doctor", "I went to buy bread."',
              pt: '"Go + gerúndio" é usado para actividades recreativas: "go swimming", "go shopping", "go hiking". "Go + infinitivo" é usado para propósito ou destino: "I went to the doctor", "I went to buy bread."'
            },
            examples: [
              { en: "Let's go swimming this afternoon!", pt: 'Vamos nadar esta tarde!' },
              { en: 'I went to the market to buy fruit.', pt: 'Fui ao mercado comprar fruta.' },
              { en: 'She goes jogging every morning.', pt: 'Ela vai correr todas as manhãs.' }
            ],
            practice: [
              { q: '"Let\'s go ___ at the weekend." (activity)', opts: ['shop', 'to shop', 'shopping', 'shopped'], ans: 2, exp: 'go + gerund for recreational activities: go shopping.' },
              { q: '"I went ___ my sister." (purpose)', opts: ['see', 'seeing', 'to see', 'seen'], ans: 2, exp: 'go + infinitive for purpose: to see.' }
            ]
          },
          qs: [
            { q: '"Let\'s go ___ this weekend." (activity)', opts: ['shop', 'to shop', 'shopping', 'shopped'], ans: 2, exp: '"go shopping" — go + gerund for activities (usually recreational).' },
            { q: '"I need to go ___ some milk." (purpose)', opts: ['buy', 'to buy', 'buying', 'bought'], ans: 1, exp: '"to buy" — go + infinitive for purpose.' },
            { q: '"She goes ___ every morning." (activity)', opts: ['run', 'to run', 'running', 'ran'], ans: 2, exp: '"go running" — go + gerund for activities.' },
            { q: '"I went ___ the doctor." (purpose)', opts: ['see', 'to see', 'seeing', 'saw'], ans: 1, exp: '"to see" — go + infinitive for purpose.' },
            { q: 'Which is correct for an activity?', opts: ['go to swim', 'go swimming', 'go for swim', 'go swim'], ans: 1, exp: '"go swimming" is correct for the activity. "go to swim" is for purpose.' }
          ]
        },
        {
          id: 'l13g',
          title: 'Review: Gerunds & Infinitives',
          titlePt: 'Revisão: Gerúndios e Infinitivos',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Final review: Gerund (-ing) = subject, after prepositions, after certain verbs (enjoy, avoid, finish). Infinitive (to+verb) = after other verbs (want, need, decide), after adjectives, for purpose. Some verbs change meaning (stop, try, remember).',
              pt: 'Revisão final: Gerúndio (-ing) = sujeito, depois de preposições, depois de certos verbos (enjoy, avoid, finish). Infinitivo (to+verbo) = depois de outros verbos (want, need, decide), depois de adjectivos, para propósito. Alguns verbos mudam de significado (stop, try, remember).'
            },
            examples: [
              { en: 'Reading every day improves your English.', pt: 'Ler todos os dias melhora o teu inglês.' },
              { en: 'She decided to quit her job.', pt: 'Ela decidiu abandonar o emprego.' },
              { en: 'I\'m interested in learning new things.', pt: 'Estou interessado em aprender coisas novas.' }
            ],
            practice: [
              { q: '\'I can\'t stand ___ in traffic.\' (hate)', opts: ['wait', 'to wait', 'waiting', 'waited'], ans: 2, exp: 'can\'t stand + gerund.' },
              { q: '\'She decided ___ abroad.\' (infinitive)', opts: ['study', 'studying', 'to study', 'studied'], ans: 2, exp: 'decide + infinitive: to study.' }
            ]
          },
          qs: [
            { q: '"___ is a good way to learn English." (subject)', opts: ['Read', 'Reading', 'To read', 'Both B and C are correct'], ans: 3, exp: 'Both "reading" (gerund) and "to read" (infinitive) can be subjects.' },
            { q: '"I can\'t stand ___ in traffic." (gerund)', opts: ['wait', 'to wait', 'waiting', 'waited'], ans: 2, exp: '"stand" takes a gerund: "can\'t stand waiting".' },
            { q: '"She decided ___ the job offer." (infinitive)', opts: ['accept', 'to accept', 'accepting', 'accepted'], ans: 1, exp: '"decided" takes an infinitive: "decided to accept".' },
            { q: '"I stopped ___ to the gym." (habit)', opts: ['go', 'to go', 'going', 'went'], ans: 2, exp: '"stopped going" = I no longer go to the gym.' },
            { q: '"I stopped ___ to the gym." (purpose)', opts: ['go', 'to go', 'going', 'went'], ans: 1, exp: '"stopped to go" = I stopped (doing something else) to go to the gym.' }
          ]
        }
      ]
    }
];
