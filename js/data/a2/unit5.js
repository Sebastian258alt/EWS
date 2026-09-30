// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit5.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2e
// Part of UNITS_A2 — Conditionals

const UNITS_A2_UNIT5 = [
  {
    id:'u2e', cefr:'A2', title:'Conditionals', titlePt:'Frases Condicionais',
    desc:'Talk about real possibilities and general truths 🌦️',
    descPt:'Fala sobre possibilidades reais e verdades gerais 🌦️',
    color:'#d500f9', icon:'🌦️', premium:false,
    lessons:[

      {id:'l2e1', title:'Zero Conditional', titlePt:'Condicional Zero', icon:'🔁', xp:20, learn:{
        explanation:{
          en:'The Zero Conditional describes general truths and facts that are always true: "If + present simple, present simple." "If you heat water, it boils." "If it rains, the streets get wet." We can also use "when" instead of "if" with the same meaning.',
          pt:'O Condicional Zero descreve verdades gerais e factos sempre verdadeiros: "If + presente simples, presente simples." "If you heat water, it boils." "If it rains, the streets get wet." Também podemos usar "when" em vez de "if" com o mesmo significado.'
        },
        examples:[
          {en:'If you mix blue and yellow, you get green.', pt:'Se misturares azul e amarelo, obténs verde.'},
          {en:'If people don\'t eat, they get hungry.', pt:'Se as pessoas não comem, ficam com fome.'},
          {en:'Water freezes if the temperature drops below 0°C.', pt:'A água congela se a temperatura descer abaixo de 0°C.'},
        ],
        practice:[
          {q:'The Zero Conditional describes:', opts:['a future possibility','a general truth or fact','an imaginary situation','a past regret'], ans:1, exp:'Zero Conditional = things that are always true (scientific facts, habits).'},
          {q:'Structure: "If + ___, ___."', opts:['present simple / present simple','past simple / would','present simple / will','past perfect / would have'], ans:0, exp:'Zero Conditional: If + present simple, present simple.'},
        ],
      }, qs:[
        {q:'"If you ___ ice, it melts."',opts:['heat','heated','will heat','would heat'],ans:0,exp:'Zero Conditional uses present simple in both parts: If you HEAT ice, it melts.'},
        {q:'"If people ___ too much sugar, they get sick."',opts:['ate','eat','will eat','would eat'],ans:1,exp:'Present simple + present simple = general truth: If people EAT too much sugar...'},
        {q:'Which is a Zero Conditional sentence?',opts:['If I win, I will celebrate.','If you heat metal, it expands.','If I had money, I would travel.','If I had known, I would have helped.'],ans:1,exp:'"If you heat metal, it expands" is a scientific fact — Zero Conditional.'},
        {q:'"When" can replace "if" in the Zero Conditional because:',opts:['they never have the same meaning','the result is always guaranteed to happen','when only works in the past','if is more formal'],ans:1,exp:'In Zero Conditional facts, "if" and "when" are interchangeable because the result always happens.'},
        {q:'"If the sun sets, it ___ dark."',opts:['gets','got','will get','would get'],ans:0,exp:'General truth → present simple: "it gets dark".'},
      ]},

      {id:'l2e2', title:'First Conditional', titlePt:'Primeiro Condicional', icon:'🔮', xp:20, learn:{
        explanation:{
          en:'The First Conditional talks about a REAL possibility in the future: "If + present simple, will + base verb." "If it rains tomorrow, I will stay home." "If you study hard, you will pass the exam." The "if" clause uses present simple even though it refers to the future.',
          pt:'O Primeiro Condicional fala de uma possibilidade REAL no futuro: "If + presente simples, will + verbo base." "If it rains tomorrow, I will stay home." "If you study hard, you will pass the exam." A oração com "if" usa o presente simples mesmo referindo-se ao futuro.'
        },
        examples:[
          {en:'If I have time, I will visit you this weekend.', pt:'Se eu tiver tempo, vou visitar-te este fim de semana.'},
          {en:'If you don\'t hurry, you will miss the chapa.', pt:'Se não te apressares, vais perder a chapa.'},
          {en:'She will call you if she needs help.', pt:'Ela vai ligar-te se precisar de ajuda.'},
        ],
        practice:[
          {q:'"If it rains, I ___ take an umbrella."', opts:['take','took','will take','would take'], ans:2, exp:'First Conditional: If + present simple, WILL + base verb.'},
          {q:'"If you ___ hard, you will succeed."', opts:['work','worked','will work','would work'], ans:0, exp:'The "if" clause uses present simple: If you WORK hard...'},
        ],
      }, qs:[
        {q:'"If she ___ the bus, she will be late."',opts:['miss','misses','will miss','missed'],ans:1,exp:'"If" clause + present simple (3rd person -s): If she MISSES the bus...'},
        {q:'"If I finish early, I ___ help you."',opts:['help','helped','will help','would help'],ans:2,exp:'Result clause uses WILL: I will help you.'},
        {q:'First Conditional is used for:',opts:['imaginary past events','impossible situations','real future possibilities','general scientific facts'],ans:2,exp:'First Conditional describes things that could realistically happen in the future.'},
        {q:'"If you don\'t water the plants, they ___."',opts:['die','died','will die','would die'],ans:2,exp:'Result clause with will: they WILL die.'},
        {q:'Which sentence is CORRECT?',opts:['If it will rain, I will stay home.','If it rains, I will stay home.','If it rains, I stay home would.','If it rain, I will stay home.'],ans:1,exp:'"If it RAINS, I WILL stay home" — present simple + will, never "will" in the if-clause.'},
      ]},

      {id:'l2e3', title:'If vs When', titlePt:'If vs When', icon:'🤷', xp:20, learn:{
        explanation:{
          en:'"If" introduces something UNCERTAIN — it may or may not happen: "If it rains, I\'ll bring an umbrella" (maybe it will rain, maybe not). "When" introduces something CERTAIN — it will definitely happen: "When it gets dark, we\'ll go home" (it will definitely get dark).',
          pt:'"If" introduz algo INCERTO — pode ou não acontecer: "If it rains, I\'ll bring an umbrella" (talvez chova, talvez não). "When" introduz algo CERTO — vai definitivamente acontecer: "When it gets dark, we\'ll go home" (vai definitivamente escurecer).'
        },
        examples:[
          {en:'If I pass the exam, I\'ll celebrate. (uncertain — maybe I pass, maybe not)', pt:'Se eu passar no exame, vou celebrar. (incerto)'},
          {en:'When I finish work, I\'ll call you. (certain — work will definitely finish)', pt:'Quando eu terminar o trabalho, ligo-te. (certo)'},
          {en:'If the bus comes, we\'ll get on it.', pt:'Se o autocarro vier, entramos.'},
        ],
        practice:[
          {q:'"___ I get home, I\'ll cook dinner." (it\'s certain I will get home)', opts:['If','When','Unless','Since'], ans:1, exp:'"When" = certain event. Getting home is guaranteed to happen.'},
          {q:'"___ it rains tomorrow, we will cancel the picnic." (uncertain)', opts:['When','If','Since','As'], ans:1, exp:'"If" = uncertain, maybe it rains maybe not.'},
        ],
      }, qs:[
        {q:'"___ the sun rises tomorrow, I\'ll go for a walk." (certain)',opts:['If','When','Unless','Since'],ans:1,exp:'The sun rising is 100% certain → use "when", not "if".'},
        {q:'"___ I win the lottery, I\'ll buy a house." (uncertain)',opts:['When','If','Since','As'],ans:1,exp:'Winning the lottery is uncertain → use "if".'},
        {q:'The main difference between if and when is:',opts:['if is for the past, when is for the future','if = uncertain, when = certain','they mean exactly the same','when is only used in questions'],ans:1,exp:'If = maybe it happens. When = it will definitely happen.'},
        {q:'"___ you see John, tell him to call me." (you know you will see him)',opts:['If','When','Unless','Would'],ans:1,exp:'Certain future event → "when".'},
        {q:'Which sentence expresses UNCERTAINTY?',opts:['When I arrive, I\'ll text you.','If I have enough money, I\'ll buy the phone.','When the movie ends, we\'ll leave.','When I wake up, I\'ll eat breakfast.'],ans:1,exp:'"If I have enough money" is uncertain — I might not have enough.'},
      ]},

      {id:'l2e4', title:'Unless', titlePt:'Unless (A Não Ser Que)', icon:'🚫', xp:20, learn:{
        explanation:{
          en:'"Unless" means "if...not" — it introduces a negative condition: "Unless you hurry, you will be late" = "If you don\'t hurry, you will be late." Unless is always followed by an affirmative verb, never a negative one.',
          pt:'"Unless" significa "se...não" — introduz uma condição negativa: "Unless you hurry, you will be late" = "If you don\'t hurry, you will be late." Unless é sempre seguido de um verbo afirmativo, nunca negativo.'
        },
        examples:[
          {en:'Unless you study, you won\'t pass.', pt:'A não ser que estudes, não vais passar.'},
          {en:'I won\'t go unless you come with me.', pt:'Não vou a não ser que venhas comigo.'},
          {en:'Unless it rains, we\'ll have the party outside.', pt:'A não ser que chova, vamos fazer a festa lá fora.'},
        ],
        practice:[
          {q:'"Unless you leave now, you ___ miss the flight."', opts:['will','won\'t',"don't", 'would not'], ans:0, exp:'Unless = if...not, so the result clause stays affirmative: you WILL miss it.'},
          {q:'"Unless you ___ hard, you will fail."', opts:["don't study",'study','will study','studied'], ans:1, exp:'Unless is followed by an affirmative verb: "unless you STUDY" (not "don\'t study").'},
        ],
      }, qs:[
        {q:'"Unless it rains, we ___ go to the beach."',opts:['will','won\'t','don\'t','wouldn\'t'],ans:0,exp:'"Unless it rains" = if it doesn\'t rain → we WILL go.'},
        {q:'"Unless you ___, you\'ll stay hungry." (correct form)',opts:["don't eat",'eat','ate','will eat'],ans:1,exp:'Unless + affirmative verb: "unless you EAT".'},
        {q:'"Unless" has the same meaning as:',opts:['if','if...not','when','since'],ans:1,exp:'Unless = if...not. "Unless you hurry" = "if you don\'t hurry".'},
        {q:'Which sentence is CORRECT?',opts:["Unless you don't study, you won't pass.",'Unless you study, you won\'t pass.','Unless you will study, you pass.','Unless studying, you won\'t pass.'],ans:1,exp:'Never use a double negative with unless: "Unless you study" (not "unless you don\'t study").'},
        {q:'"I won\'t lend you money unless you pay me back." means:',opts:['I will lend money no matter what','I will only lend money if you promise to pay it back','I will never lend money','I already lent you money'],ans:1,exp:'Unless = the only condition for lending money is a promise to repay.'},
      ]},

      {id:'l2e5', title:'Conditionals Review', titlePt:'Revisão dos Condicionais', icon:'🧠', xp:25, learn:{
        explanation:{
          en:'Quick review: Zero Conditional (general truths) → "If + present, present." First Conditional (real future possibility) → "If + present, will + base verb." Remember: "if" = uncertain, "when" = certain, "unless" = if...not.',
          pt:'Revisão rápida: Condicional Zero (verdades gerais) → "If + presente, presente." Primeiro Condicional (possibilidade futura real) → "If + presente, will + verbo base." Lembra-te: "if" = incerto, "when" = certo, "unless" = se...não.'
        },
        examples:[
          {en:'If you touch fire, you get burned. (Zero — always true)', pt:'Se tocares no fogo, queimas-te. (Zero — sempre verdade)'},
          {en:'If I save enough money, I will buy a motorbike. (First — real future)', pt:'Se poupar dinheiro suficiente, vou comprar uma mota. (Primeiro — futuro real)'},
          {en:'Unless you leave now, you\'ll be late. (Unless = if...not)', pt:'A não ser que saias agora, vais chegar atrasado. (Unless = se...não)'},
        ],
        practice:[
          {q:'"If water reaches 100°C, it ___." (fact)', opts:['boils','will boil','boiled','would boil'], ans:0, exp:'Scientific fact → Zero Conditional: it boils.'},
          {q:'"If I have free time this weekend, I ___ visit my grandmother."', opts:['visit','will visit','visited','would visit'], ans:1, exp:'Real future possibility → First Conditional: I will visit.'},
        ],
      }, qs:[
        {q:'"If you mix red and white, you ___ pink." (fact)',opts:['get','will get','got','would get'],ans:0,exp:'Zero Conditional (scientific fact): you GET pink.'},
        {q:'"If the weather is good tomorrow, we ___ go to the beach."',opts:['go','will go','went','would go'],ans:1,exp:'First Conditional (real future plan): we WILL go.'},
        {q:'"___ you finish your work, you can go home." (certain — you will finish)',opts:['If','When','Unless','Would'],ans:1,exp:'Certain future event → "when".'},
        {q:'"___ you apologise, she won\'t forgive you."',opts:['If','Unless','When','Since'],ans:1,exp:'Unless = if...not: "Unless you apologise" = "if you don\'t apologise".'},
        {q:'Which structure is the First Conditional?',opts:['If + present, present','If + present, will + verb','If + past, would + verb','If + past perfect, would have + verb'],ans:1,exp:'First Conditional: If + present simple, will + base verb.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT5);
