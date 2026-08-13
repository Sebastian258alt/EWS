// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit3.js
// ═══════════════════════════════════════════════════════
// Unit ID: u16
// Part of UNITS_B2 — Second & Third Conditional

const UNITS_B2_UNIT3 = [
  {
    id:'u16', cefr:'B2', title:'Unreal Conditionals', titlePt:'Condicionais Irreais',
    desc:'Talk about imaginary situations, dreams and regrets 💭',
    descPt:'Fala sobre situações imaginárias, sonhos e arrependimentos 💭',
    color:'#ec407a', icon:'💭', premium:false,
    lessons:[

      {id:'l16a', title:'Second Conditional', titlePt:'Segundo Condicional', icon:'🌈', xp:25, learn:{
        explanation:{
          en:'The Second Conditional talks about an UNREAL or unlikely situation in the present/future: "If + past simple, would + base verb." "If I won the lottery, I would travel the world." (I probably won\'t win — it\'s imaginary/hypothetical, not real.)',
          pt:'O Segundo Condicional fala de uma situação IRREAL ou pouco provável no presente/futuro: "If + passado simples, would + verbo base." "If I won the lottery, I would travel the world." (provavelmente não vou ganhar — é imaginário/hipotético, não real.)'
        },
        examples:[
          {en:'If I had more time, I would learn French.', pt:'Se eu tivesse mais tempo, aprenderia francês.'},
          {en:'If she were the president, she would build more schools.', pt:'Se ela fosse presidente, construiria mais escolas.'},
          {en:'What would you do if you had a million dollars?', pt:'O que farias se tivesses um milhão de dólares?'},
        ],
        practice:[
          {q:'"If I ___ rich, I would buy a house." (imaginary)', opts:['am','was','were','be'], ans:2, exp:'Second Conditional: with "if I/he/she", formal English uses WERE (not was) for all subjects.'},
          {q:'"If it rained, I ___ stay home."', opts:['will','would','can','am'], ans:1, exp:'Result clause uses WOULD + base verb.'},
        ],
      }, qs:[
        {q:'"If I ___ you, I would apologise."',opts:['am','was','were','be'],ans:2,exp:'"If I were you" is the classic Second Conditional expression for giving advice.'},
        {q:'"If she had a car, she ___ drive to work."',opts:['will','would','can','does'],ans:1,exp:'Result clause: WOULD + base verb.'},
        {q:'The Second Conditional describes:',opts:['a real future possibility','a general scientific truth','an unreal/hypothetical present situation','a past regret'],ans:2,exp:'Second Conditional = imaginary or unlikely situations now or in the future.'},
        {q:'"If they ___ harder, they would win the match."',opts:['train','trained','will train','would train'],ans:1,exp:'"If" clause uses past simple: trained.'},
        {q:'"What would you do if you ___ a ghost?"',opts:['see','saw','will see','would see'],ans:1,exp:'"If" clause with past simple: if you SAW a ghost.'},
      ]},

      {id:'l16b', title:'Third Conditional', titlePt:'Terceiro Condicional', icon:'⏪', xp:25, learn:{
        explanation:{
          en:'The Third Conditional talks about an IMAGINARY situation in the PAST — something that did NOT happen, often expressing regret: "If + past perfect, would have + past participle." "If I had studied, I would have passed the exam." (I didn\'t study, so I didn\'t pass — it\'s too late to change it.)',
          pt:'O Terceiro Condicional fala de uma situação IMAGINÁRIA no PASSADO — algo que NÃO aconteceu, muitas vezes exprimindo arrependimento: "If + past perfect, would have + particípio passado." "If I had studied, I would have passed the exam." (não estudei, por isso não passei — já é tarde para mudar.)'
        },
        examples:[
          {en:'If I had known, I would have helped you.', pt:'Se eu tivesse sabido, ter-te-ia ajudado.'},
          {en:'She would have called if she had had your number.', pt:'Ela teria ligado se tivesse tido o teu número.'},
          {en:'If we had left earlier, we wouldn\'t have missed the bus.', pt:'Se tivéssemos saído mais cedo, não teríamos perdido o autocarro.'},
        ],
        practice:[
          {q:'"If I ___ earlier, I would have caught the train." (didn\'t leave)', opts:['left','had left','have left','would leave'], ans:1, exp:'"If" clause: past perfect — had left.'},
          {q:'"She would ___ passed if she had studied."', opts:['have','has','had','having'], ans:0, exp:'Result clause: would HAVE + past participle.'},
        ],
      }, qs:[
        {q:'"If he had run faster, he ___ won the race."',opts:['will have','would have','would','has'],ans:1,exp:'Result clause: WOULD HAVE + past participle.'},
        {q:'"If I ___ my umbrella, I wouldn\'t have got wet."',opts:['bring','brought','had brought','have brought'],ans:2,exp:'"If" clause: past perfect — had brought.'},
        {q:'The Third Conditional is used to talk about:',opts:['a real future plan','a general truth','an imaginary past that didn\'t happen','a present habit'],ans:2,exp:'Third Conditional = an unreal past situation, often with regret.'},
        {q:'"If she had told me, I ___ come to help."',opts:['will','would','would have','have'],ans:2,exp:'Result clause: would have come.'},
        {q:'"If they had saved money, they ___ have bought a house."',opts:['would','will','would have','had'],ans:2,exp:'Correct form: WOULD HAVE bought.'},
      ]},

      {id:'l16c', title:'Second vs Third Conditional', titlePt:'Segundo vs Terceiro Condicional', icon:'⚖️', xp:25, learn:{
        explanation:{
          en:'Second Conditional = unreal PRESENT/FUTURE ("If I had money now, I would buy a car"). Third Conditional = unreal PAST ("If I had had money then, I would have bought a car"). The key test: is the imaginary situation about NOW/the future, or about something that already happened?',
          pt:'Segundo Condicional = irreal PRESENTE/FUTURO ("If I had money now, I would buy a car"). Terceiro Condicional = irreal PASSADO ("If I had had money then, I would have bought a car"). O teste chave: a situação imaginária é sobre AGORA/o futuro, ou sobre algo que já aconteceu?'
        },
        examples:[
          {en:'If I had a car now, I would drive to work. (present — Second)', pt:'Se eu tivesse um carro agora, iria de carro para o trabalho. (presente — Segundo)'},
          {en:'If I had had a car then, I would have driven to work. (past — Third)', pt:'Se eu tivesse tido um carro na altura, teria ido de carro para o trabalho. (passado — Terceiro)'},
          {en:'If I were taller, I would play basketball. (Second — hypothetical trait)', pt:'Se eu fosse mais alto, jogaria basquetebol. (Segundo — característica hipotética)'},
        ],
        practice:[
          {q:'"If I had more free time now, I ___ travel more." (present)', opts:['would','would have','will','had'], ans:0, exp:'Present hypothesis → Second Conditional: would travel.'},
          {q:'"If I had studied medicine, I ___ a doctor now." (past decision, present result — mixed but still uses would have for the past action)', opts:['would be','would have been','will be','am'], ans:0, exp:'Mixed conditional: past condition + present result uses "would be" (a special case, but for now focus on: past action → had studied).'},
        ],
      }, qs:[
        {q:'"If I ___ rich, I would buy a yacht." (imaginary now)',opts:['am','was','were','had been'],ans:2,exp:'Present unreal → Second Conditional: were.'},
        {q:'"If I ___ harder at school, I would have gone to university." (past)',opts:['study','studied','had studied','would study'],ans:2,exp:'Past unreal → Third Conditional: had studied.'},
        {q:'Which conditional talks about regrets for things that already happened?',opts:['Zero','First','Second','Third'],ans:3,exp:'Third Conditional expresses regret about the unchangeable past.'},
        {q:'"If she ___ here, she would help us." (now)',opts:['is','was','were','had been'],ans:2,exp:'Second Conditional, present: were.'},
        {q:'"If we ___ the map, we wouldn\'t have got lost." (past)',opts:['have','had','had had','would have'],ans:2,exp:'Third Conditional, past perfect: had had (had + past participle of have).'},
      ]},

      {id:'l16d', title:'Wish & If Only', titlePt:'Wish & If Only', icon:'🌠', xp:25, learn:{
        explanation:{
          en:'"Wish" and "if only" express regret or a desire for something different. For present situations, use past simple: "I wish I had more money" (= I don\'t have enough now). For past regrets, use past perfect: "I wish I had studied harder" (= I didn\'t study, and I regret it now). "If only" is stronger/more emotional than "wish".',
          pt:'"Wish" e "if only" exprimem arrependimento ou desejo de algo diferente. Para situações presentes, usa passado simples: "I wish I had more money" (= não tenho dinheiro suficiente agora). Para arrependimentos passados, usa passado perfeito: "I wish I had studied harder" (= não estudei, e arrependo-me agora). "If only" é mais forte/emocional do que "wish".'
        },
        examples:[
          {en:'I wish I lived closer to the beach.', pt:'Quem me dera viver mais perto da praia.'},
          {en:'If only I had listened to my parents.', pt:'Quem me dera ter ouvido os meus pais.'},
          {en:'She wishes she could speak Chinese.', pt:'Ela gostava de saber falar chinês.'},
        ],
        practice:[
          {q:'"I wish I ___ more free time." (present situation)', opts:['have','had','have had','will have'], ans:1, exp:'Wish + past simple for present regrets: I wish I HAD more time.'},
          {q:'"If only I ___ harder for the exam." (past regret)', opts:['study','studied','had studied','would study'], ans:2, exp:'If only + past perfect for past regrets: had studied.'},
        ],
      }, qs:[
        {q:'"I wish I ___ taller." (present)',opts:['am','was','were','had been'],ans:2,exp:'Wish + past simple, formal uses WERE: I wish I were taller.'},
        {q:'"If only I ___ to the party last night." (past regret)',opts:['go','went','had gone','would go'],ans:2,exp:'If only + past perfect: had gone.'},
        {q:'"She wishes she ___ speak French." (present ability)',opts:['can','could','had could','will can'],ans:1,exp:'Wish + could (past form of can) for present ability: could speak.'},
        {q:'Which expresses a stronger emotion, wish or if only?',opts:['wish','if only','they are identical','neither expresses emotion'],ans:1,exp:'"If only" is typically more emotional/dramatic than "wish".'},
        {q:'"I wish I ___ eaten so much cake." (past regret)',opts:["didn't",'hadn\'t','don\'t','wouldn\'t'],ans:1,exp:'Wish + past perfect negative for past regrets: hadn\'t eaten.'},
      ]},

      {id:'l16e', title:'Unreal Conditionals Review', titlePt:'Revisão das Condicionais Irreais', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: Second Conditional (unreal present/future) → "If + past simple, would + base verb." Third Conditional (unreal past, regret) → "If + past perfect, would have + past participle." Wish/if only + past simple = present regret; wish/if only + past perfect = past regret.',
          pt:'Revisão rápida: Segundo Condicional (irreal presente/futuro) → "If + passado simples, would + verbo base." Terceiro Condicional (irreal passado, arrependimento) → "If + past perfect, would have + particípio passado." Wish/if only + passado simples = arrependimento presente; wish/if only + past perfect = arrependimento passado.'
        },
        examples:[
          {en:'If I spoke better English, I would get a better job. (Second — present)', pt:'Se falasse melhor inglês, arranjaria um emprego melhor. (Segundo — presente)'},
          {en:'If I had practised more, I would have won the match. (Third — past)', pt:'Se tivesse praticado mais, teria ganho o jogo. (Terceiro — passado)'},
          {en:'I wish I had more patience. (present regret)', pt:'Quem me dera ter mais paciência. (arrependimento presente)'},
        ],
        practice:[
          {q:'"If I ___ you, I would say sorry." (advice, present)', opts:['am','was','were','had been'], ans:2, exp:'Second Conditional: If I were you.'},
          {q:'"If she ___ earlier, she wouldn\'t have missed the flight." (past)', opts:['leave','left','had left','would leave'], ans:2, exp:'Third Conditional: If she had left.'},
        ],
      }, qs:[
        {q:'"If I ___ more money, I would buy a new phone." (now)',opts:['have','had','had had','would have'],ans:1,exp:'Second Conditional: If I HAD more money (now).'},
        {q:'"If he ___ the warning, the accident wouldn\'t have happened." (past)',opts:['sees','saw','had seen','would see'],ans:2,exp:'Third Conditional: If he HAD SEEN the warning.'},
        {q:'"I wish I ___ how to swim." (present ability)',opts:['know','knew','had known','would know'],ans:1,exp:'Wish + past simple for present: I wish I KNEW how to swim.'},
        {q:'"If only we ___ more careful last year." (past regret)',opts:['are','were','had been','would be'],ans:2,exp:'If only + past perfect for past regret: had been.'},
        {q:'Which conditional would you use for: "I didn\'t bring an umbrella and I got wet — I regret it"?',opts:['Zero Conditional','First Conditional','Second Conditional','Third Conditional'],ans:3,exp:'A regret about a specific past event → Third Conditional: "If I had brought an umbrella, I wouldn\'t have got wet."'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT3);
