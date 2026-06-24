// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit3.js
// ═══════════════════════════════════════════════════════
// Unit ID: u3
// Part of UNITS_A1

const UNITS_A1_UNIT3 = [
  {
      id:'u3', cefr:'A2', title:'Future', titlePt:'Futuro',
      desc:"Talk about what's coming! 🔮",
      descPt:'Fala sobre o que está a vir! 🔮',
      color:'#82b1ff', icon:'🚀', premium:false,
      lessons:[
        {id:'l8', title:'Future with Will', titlePt:'Futuro com Will', icon:'🔮', xp:25, learn:{
          explanation:{
            en:'"Will" + base verb expresses predictions, promises, and spontaneous decisions made at the moment of speaking. "I think it will rain." "I\'ll help you!"',
            pt:'"Will" + verbo base expressa previsões, promessas e decisões espontâneas tomadas no momento da fala. "I think it will rain." "I\'ll help you!"'
          },
          examples:[
            {en:'I will call you tomorrow.', pt:'Eu vou ligar-te amanhã.'},
            {en:'She won\'t be late.', pt:'Ela não vai chegar atrasada.'},
            {en:'Will you marry me?', pt:'Casas comigo?'},
          ],
          practice:[
            {q:'"Will" is followed by:', opts:['a base verb','verb+ing','verb+ed','to+verb'], ans:0, exp:'will + base verb: will go, will help.'},
            {q:'Negative of "will":', opts:["willn't","won't","not will","will not have"], ans:1, exp:'will + not = won\'t.'},
          ],
        }, qs:[
          {q:'"I think it ___ rain tomorrow."',opts:['is going to','will','rains','rained'],ans:1,exp:'"Will" for predictions based on opinion. "I think" = belief → will.'},
          {q:'"I\'m hungry." — "___ get you something to eat."',opts:['I go','I will','I going to','I am going'],ans:1,exp:'Spontaneous decision = "will". No prior plan!'},
          {q:'Negative of "She will come":',opts:['She won\'t come.','She will not comes.','She doesn\'t will come.','She will not coming.'],ans:0,exp:'"Won\'t" = will + not. She won\'t come.'},
          {q:'"Will you help me?" — The correct answer is:',opts:['Yes, I will.','Yes, I do.','Yes, I am.','Yes, I shall.'],ans:0,exp:'Will → will. "Yes, I WILL." ✓'},
          {q:'Which sentence uses "will" CORRECTLY?',opts:['They will goes.','She will is here.','We will arrive soon.','He will can help.'],ans:2,exp:'"Will + base verb". "arrive" is base form. ✓'},
        ]},
        {id:'l9', title:'Going To', titlePt:'Going To', icon:'📅', xp:25, learn:{
          explanation:{
            en:'"Be going to" + base verb expresses plans already made or predictions with visible evidence. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"',
            pt:'"Be going to" + verbo base expressa planos já feitos ou previsões com evidência visível. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"'
          },
          examples:[
            {en:'We are going to travel next year.', pt:'Nós vamos viajar no próximo ano.'},
            {en:'She is going to buy a car.', pt:'Ela vai comprar um carro.'},
            {en:'Is he going to call you?', pt:'Ele vai ligar-te?'},
          ],
          practice:[
            {q:'"Going to" is used for:', opts:['spontaneous decisions','plans already made','past habits','permanent facts'], ans:1, exp:'Going to = pre-planned future.'},
            {q:'"She ___ going to study."', opts:['am','is','are','be'], ans:1, exp:'She + IS going to.'},
          ],
        }, qs:[
          {q:'"Look at those clouds! It ___ rain."',opts:['will','is going to','rains','might'],ans:1,exp:'"Going to" for predictions with visible evidence.'},
          {q:'"We ___ visit grandma next weekend." (planned)',opts:['will','are going to','are going','going to'],ans:1,exp:'Pre-planned future = "be going to".'},
          {q:'Correct form: "She ___ study medicine."',opts:['is going to','are going to','is going','goes to'],ans:0,exp:'"She IS GOING TO study" — she + is + going to + base verb.'},
          {q:'What does "going to" express?',opts:['Spontaneous decisions','Prior plans and evidence','General facts','Habits'],ans:1,exp:'"Going to" = plans already made OR visible evidence of future event.'},
          {q:'"I ___ start exercising." (already decided)',opts:['am going to','will','should','might'],ans:0,exp:'"Going to" for plans already decided.'},
        ]},
      ]
    }
];
