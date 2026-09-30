// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit7.js
// ═══════════════════════════════════════════════════════
// Unit ID: u23
// Part of UNITS_A2 — Past Continuous vs Past Simple

const UNITS_A2_UNIT7 = [
  {
    id:'u23', cefr:'A2', title:'Past Continuous vs Past Simple', titlePt:'Passado Contínuo vs Passado Simples',
    desc:'Tell stories about what was happening 📖',
    descPt:'Conta histórias sobre o que estava a acontecer 📖',
    color:'#5c6bc0', icon:'📖', premium:false,
    lessons:[

      {id:'l23a', title:'Forming the Past Continuous', titlePt:'Formar o Passado Contínuo', icon:'🔨', xp:20, learn:{
        explanation:{
          en:'The Past Continuous is formed with WAS/WERE + verb-ING. Use WAS with I/he/she/it, and WERE with you/we/they. It describes an action that was IN PROGRESS at a specific moment in the past. Example: "At 8pm, I was cooking dinner."',
          pt:'O Passado Contínuo forma-se com WAS/WERE + verbo-ING. Usa WAS com I/he/she/it, e WERE com you/we/they. Descreve uma ação que estava EM CURSO num momento específico do passado. Exemplo: "At 8pm, I was cooking dinner."'
        },
        examples:[
          {en:'She was studying at 9pm last night.', pt:'Ela estava a estudar às 9h da noite passada.'},
          {en:'We were watching the football match.', pt:'Estávamos a ver o jogo de futebol.'},
          {en:'They were walking to the market.', pt:'Eles estavam a caminhar para o mercado.'},
        ],
        practice:[
          {q:'"I ___ sleeping when the phone rang."', opts:['was','were','am','is'], ans:0, exp:'"was" is used with "I" in the past continuous.'},
          {q:'"They ___ playing football at 5pm."', opts:['was','were','is','am'], ans:1, exp:'"were" is used with "they" in the past continuous.'},
        ],
      }, qs:[
        {q:'"She ___ cooking when I arrived."', opts:['was','were','is','am'], ans:0, exp:'"was" — singular subject in past continuous.'},
        {q:'"We ___ dancing at the party all night."', opts:['was','were','is','are'], ans:1, exp:'"were" — plural subject in past continuous.'},
        {q:'Which structure forms the past continuous?', opts:['was/were + base verb','was/were + verb-ing','did + verb-ing','has/have + verb-ing'], ans:1, exp:'Past continuous = WAS/WERE + verb-ING.'},
        {q:'"He ___ working when his boss called."', opts:['was','were','is','am'], ans:0, exp:'"was" — singular subject (he) in past continuous.'},
        {q:'"You ___ talking too loudly during the movie."', opts:['was','were','is','are'], ans:1, exp:'"were" is used with "you" in the past continuous.'},
      ]},

      {id:'l23b', title:'Forming the Past Simple', titlePt:'Formar o Passado Simples', icon:'✅', xp:20, learn:{
        explanation:{
          en:'The Past Simple describes a completed action at a specific time in the past. Regular verbs add -ED: "walk → walked". Many common verbs are irregular: "go → went", "eat → ate", "see → saw". Use Past Simple for finished actions, not actions in progress.',
          pt:'O Passado Simples descreve uma ação concluída num momento específico do passado. Os verbos regulares acrescentam -ED: "walk → walked". Muitos verbos comuns são irregulares: "go → went", "eat → ate", "see → saw". Usa o Passado Simples para ações terminadas, não ações em curso.'
        },
        examples:[
          {en:'I visited my grandmother last Sunday.', pt:'Visitei a minha avó no domingo passado.'},
          {en:'She went to the market yesterday.', pt:'Ela foi ao mercado ontem.'},
          {en:'They ate xima for dinner.', pt:'Eles comeram xima ao jantar.'},
        ],
        practice:[
          {q:'"Yesterday, I ___ (walk) to school."', opts:['walk','walked','walking','walks'], ans:1, exp:'"walked" — regular past simple, add -ED.'},
          {q:'"She ___ (go) to Beira last month."', opts:['go','goes','went','going'], ans:2, exp:'"went" — irregular past simple form of "go".'},
        ],
      }, qs:[
        {q:'"He ___ (buy) a new phone last week."', opts:['buy','buys','bought','buying'], ans:2, exp:'"bought" — irregular past simple of "buy".'},
        {q:'"We ___ (watch) a great movie on Saturday."', opts:['watch','watched','watches','watching'], ans:1, exp:'"watched" — regular past simple, add -ED.'},
        {q:'Which verb form is used for a completed past action?', opts:['past continuous','past simple','present perfect','present continuous'], ans:1, exp:'Past simple describes finished actions at a specific past time.'},
        {q:'"They ___ (see) an elephant at the reserve."', opts:['see','sees','saw','seeing'], ans:2, exp:'"saw" — irregular past simple of "see".'},
        {q:'"I ___ (finish) my homework before dinner."', opts:['finish','finishes','finished','finishing'], ans:2, exp:'"finished" — regular past simple, add -ED.'},
      ]},

      {id:'l23c', title:'Interrupted Actions', titlePt:'Ações Interrompidas', icon:'⚡', xp:25, learn:{
        explanation:{
          en:'We often combine both tenses: the Past Continuous describes a longer action in progress, and the Past Simple describes a shorter action that interrupted it. We usually connect them with WHEN or WHILE. Example: "I was sleeping when the phone rang."',
          pt:'Combinamos frequentemente os dois tempos: o Passado Contínuo descreve uma ação mais longa em curso, e o Passado Simples descreve uma ação mais curta que a interrompeu. Normalmente ligamo-los com WHEN ou WHILE. Exemplo: "I was sleeping when the phone rang."'
        },
        examples:[
          {en:'I was cooking when the lights went out.', pt:'Eu estava a cozinhar quando a luz se foi.'},
          {en:'While she was reading, her phone rang.', pt:'Enquanto ela estava a ler, o telefone dela tocou.'},
          {en:'We were driving when it started to rain.', pt:'Estávamos a conduzir quando começou a chover.'},
        ],
        practice:[
          {q:'"I ___ TV when she arrived." (longer action)', opts:['watch','watched','was watching','watches'], ans:2, exp:'"was watching" — longer action in progress, interrupted.'},
          {q:'"While he ___ , the phone rang." (in progress)', opts:['slept','was sleeping','sleeps','sleep'], ans:1, exp:'"was sleeping" — action in progress when interrupted.'},
        ],
      }, qs:[
        {q:'"She ___ dinner when the guests arrived." (longer action)', opts:['cooked','was cooking','cooks','cook'], ans:1, exp:'"was cooking" — past continuous for the longer action.'},
        {q:'"The phone rang while I ___ a shower."', opts:['took','was taking','take','takes'], ans:1, exp:'"was taking" — action interrupted by the phone ringing.'},
        {q:'Which word often connects an interrupted action?', opts:['because','when','so','but'], ans:1, exp:'"When" (or "while") is used to connect these two past actions.'},
        {q:'"We ___ football when it started to rain."', opts:['play','played','were playing','plays'], ans:2, exp:'"were playing" — longer action in progress, interrupted by rain.'},
        {q:'"I ___ when my sister called me." (shorter or longer action?)', opts:['was sleeping','sleep','sleeps','sleeping'], ans:0, exp:'"was sleeping" — the longer, ongoing action.'},
      ]},

      {id:'l23d', title:'Time Expressions & Signal Words', titlePt:'Expressões de Tempo e Palavras-Sinal', icon:'⏰', xp:25, learn:{
        explanation:{
          en:'Certain words signal which past tense to use. Past Simple often uses: yesterday, last week, in 2020, ago. Past Continuous often uses: at that moment, at 8pm, all day, while. Recognizing these words helps you choose the correct tense quickly.',
          pt:'Certas palavras indicam qual tempo passado usar. O Passado Simples usa frequentemente: yesterday, last week, in 2020, ago. O Passado Contínuo usa frequentemente: at that moment, at 8pm, all day, while. Reconhecer estas palavras ajuda a escolher o tempo correto rapidamente.'
        },
        examples:[
          {en:'At that moment, I was talking to my boss.', pt:'Naquele momento, eu estava a falar com o meu chefe.'},
          {en:'Two years ago, we moved to Matola.', pt:'Há dois anos, mudámo-nos para Matola.'},
          {en:'She was working all day yesterday.', pt:'Ela esteve a trabalhar o dia todo ontem.'},
        ],
        practice:[
          {q:'"___ , I visited my cousin in Nampula." (signal word for past simple)', opts:['At that moment','While','Last month','All day'], ans:2, exp:'"Last month" signals a completed past simple action.'},
          {q:'"___ , she was singing beautifully." (signal for past continuous)', opts:['Yesterday','At that moment','Two days ago','In 2019'], ans:1, exp:'"At that moment" signals an action in progress.'},
        ],
      }, qs:[
        {q:'"___ she called, I was cleaning the house." (connecting word)', opts:['Yesterday','When','Ago','Last'], ans:1, exp:'"When" connects the interrupting action to the ongoing one.'},
        {q:'Which phrase usually goes with the past SIMPLE?', opts:['at that moment','while','two days ago','all morning'], ans:2, exp:'"Two days ago" is a typical past simple time expression.'},
        {q:'Which phrase usually goes with the past CONTINUOUS?', opts:['yesterday','last year','ago','at 8pm'], ans:3, exp:'"At 8pm" describes a specific moment, typical of past continuous.'},
        {q:'"I ___ my homework three hours ago."', opts:['was finishing','finish','finished','finishes'], ans:2, exp:'"finished" — past simple with "ago", a completed action.'},
        {q:'"They ___ all day yesterday." (continuous over a period)', opts:['worked','were working','work','works'], ans:1, exp:'"were working" — past continuous over an extended period.'},
      ]},

      {id:'l23e', title:'Unit Review', titlePt:'Revisão da Unidade', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Review: Past Continuous (was/were + verb-ing) for actions in progress; Past Simple (regular -ed or irregular forms) for completed actions; combining them with when/while for interrupted actions; and recognizing time signal words for each tense.',
          pt:'Revisão: Passado Contínuo (was/were + verbo-ing) para ações em curso; Passado Simples (regular -ed ou formas irregulares) para ações concluídas; combiná-los com when/while para ações interrompidas; e reconhecer palavras-sinal de tempo para cada tempo verbal.'
        },
        examples:[
          {en:'I was reading a book when you called.', pt:'Eu estava a ler um livro quando ligaste.'},
          {en:'She visited Maputo last summer.', pt:'Ela visitou Maputo no verão passado.'},
          {en:'We were eating when the power went out.', pt:'Estávamos a comer quando a luz se foi.'},
        ],
        practice:[
          {q:'"He ___ (drive) to work when the accident happened."', opts:['drives','drove','was driving','drive'], ans:2, exp:'"was driving" — ongoing action interrupted by the accident.'},
          {q:'"I ___ (call) you yesterday, but you didn\'t answer."', opts:['call','called','was calling','calls'], ans:1, exp:'"called" — completed past simple action.'},
        ],
      }, qs:[
        {q:'"She ___ (sleep) when the earthquake happened."', opts:['sleeps','slept','was sleeping','sleep'], ans:2, exp:'"was sleeping" — ongoing action, interrupted by the event.'},
        {q:'"We ___ (visit) Inhambane two summers ago."', opts:['visit','visited','were visiting','visits'], ans:1, exp:'"visited" — completed past simple action.'},
        {q:'"At 7pm, they ___ (have) dinner."', opts:['have','had','were having','has'], ans:2, exp:'"were having" — action in progress at a specific time.'},
        {q:'"I ___ (lose) my keys yesterday."', opts:['lose','lost','was losing','loses'], ans:1, exp:'"lost" — irregular past simple of "lose".'},
        {q:'Which tense describes an action interrupted by another shorter one?', opts:['past simple only','past continuous (the longer action)','present perfect','future simple'], ans:1, exp:'Past continuous describes the longer, interrupted action.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT7);
