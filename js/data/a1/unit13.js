// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/a1/unit13.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1i  |  CEFR: A2
// Conditionals (Zero → Third + Wish)

const UNITS_A1_UNIT13 = [
  {
    id:'u1i', cefr:'A2', title:'Conditionals', titlePt:'Condicionais',
    desc:'Express real and imaginary situations with IF 🔀',
    descPt:'Expressa situações reais e imaginárias com IF 🔀',
    color:'#00bcd4', icon:'🔀', premium:false,
    lessons:[
      {id:'l1i1', title:'Zero Conditional — General Truths', titlePt:'Condicional Zero — Verdades Gerais', icon:'🌍', xp:20, learn:{
        explanation:{
          en:'Zero Conditional = IF + Present Simple + Present Simple. Used for facts, laws of nature, and things that are always true. "If you heat water to 100°C, it boils." Both parts use Present Simple. Can also use WHEN instead of IF.',
          pt:'Condicional Zero = IF + Presente Simples + Presente Simples. Usado para factos, leis da natureza e coisas que são sempre verdade. "If you heat water to 100°C, it boils." Ambas as partes usam Presente Simples. Podes também usar WHEN em vez de IF.'
        },
        examples:[
          {en:'If you mix blue and yellow, you get green.', pt:'Se misturares azul e amarelo, obténs verde.'},
          {en:'Water freezes if the temperature goes below 0°C.', pt:'A água congela se a temperatura baixar dos 0°C.'},
          {en:'If it rains, the streets get wet.', pt:'Se chover, as ruas ficam molhadas.'},
        ],
        practice:[
          {q:'Zero Conditional uses:', opts:['Past + Would','Present + Present','Present + Future','Past + Past'], ans:1, exp:'IF + Present Simple, Present Simple. Both sides are present tense.'},
          {q:'"If you don\'t sleep, you ___ tired." ', opts:['feel','felt','would feel','will feel'], ans:0, exp:'Zero Conditional: "feel" — present simple on both sides.'},
        ],
      }, qs:[
        {q:'Zero Conditional is for:',opts:['imaginary situations','past regrets','general truths and facts','future predictions'],ans:2,exp:'Zero Conditional = always true situations, facts, laws of nature.'},
        {q:'"If you ___ iron, it melts." (heat enough)',opts:['heated','heat','would heat','will heat'],ans:1,exp:'Zero Conditional: IF + Present Simple. "If you HEAT iron..."'},
        {q:'"Plants die if they ___ enough water."',opts:['don\'t get','didn\'t get','wouldn\'t get','won\'t get'],ans:0,exp:'"don\'t get" — present simple negative in Zero Conditional.'},
        {q:'Can you use WHEN instead of IF in Zero Conditional?',opts:['Never','Sometimes','Always','Only in questions'],ans:1,exp:'Yes! "When" is often used instead of "if" for general truths.'},
        {q:'"If you ___ in the sun too long, you get sunburned."',opts:['stayed','would stay','stay','will stay'],ans:2,exp:'"stay" — present simple. Zero Conditional: fact/truth.'},
      ]},
      {id:'l1i2', title:'First Conditional — Real Future', titlePt:'Primeiro Condicional — Futuro Real', icon:'🚀', xp:25, learn:{
        explanation:{
          en:'First Conditional = IF + Present Simple + WILL + base verb. Used for REAL and POSSIBLE future situations. "If it rains, I will stay home." The "if" clause uses present tense even though it refers to the future!',
          pt:'Primeiro Condicional = IF + Presente Simples + WILL + verbo base. Usado para situações futuras REAIS e POSSÍVEIS. "If it rains, I will stay home." A oração com "if" usa o presente mesmo que se refira ao futuro!'
        },
        examples:[
          {en:'If I study hard, I will pass the exam.', pt:'Se estudar muito, vou passar no exame.'},
          {en:'She will call you if she has time.', pt:'Ela vai ligar-te se tiver tempo.'},
          {en:'If you help me, I won\'t forget it.', pt:'Se me ajudares, não me esquecerei.'},
        ],
        practice:[
          {q:'First Conditional formula:', opts:['If + Past, would + verb','If + Present, will + verb','If + Past, will + verb','If + Present, would + verb'], ans:1, exp:'IF + Present Simple, WILL + base verb.'},
          {q:'"If she ___ late, the boss will be angry."', opts:['is','was','will be','would be'], ans:0, exp:'IF clause: present simple. "If she IS late..."'},
        ],
      }, qs:[
        {q:'"If it rains, we ___ the picnic."',opts:['cancel','will cancel','cancelled','would cancel'],ans:1,exp:'First Conditional: If + Present → WILL + verb. "will cancel."'},
        {q:'"If you ___ hard, you will succeed."',opts:['work','worked','will work','would work'],ans:0,exp:'IF clause = present simple: "If you WORK hard..."'},
        {q:'First Conditional expresses:',opts:['imaginary situations','impossible past regrets','real/possible future situations','general truths'],ans:2,exp:'First Conditional = real and possible future: it might actually happen!'},
        {q:'"We won\'t catch the bus if we ___."',opts:['don\'t hurry','didn\'t hurry','wouldn\'t hurry','not hurry'],ans:0,exp:'"don\'t hurry" — present simple negative in IF clause.'},
        {q:'Which sentence uses First Conditional correctly?',opts:['If I will study, I pass.','If I study, I will pass.','If I studied, I will pass.','If I study, I would pass.'],ans:1,exp:'"If I STUDY (present), I WILL pass (will + base)." ✓'},
      ]},
      {id:'l1i3', title:'Second Conditional — Hypothetical', titlePt:'Segundo Condicional — Hipotético', icon:'💭', xp:30, learn:{
        explanation:{
          en:'Second Conditional = IF + Past Simple + WOULD + base verb. Used for IMAGINARY or UNLIKELY present/future situations. "If I had a million dollars, I would travel the world." (I don\'t have a million dollars.) Note: use WERE instead of WAS with "if I/he/she/it".',
          pt:'Segundo Condicional = IF + Passado Simples + WOULD + verbo base. Usado para situações imaginárias ou improváveis. "If I had a million dollars, I would travel the world." (Não tenho um milhão de dólares.) Nota: usa WERE em vez de WAS com "if I/he/she/it".'
        },
        examples:[
          {en:'If I won the lottery, I would buy a house.', pt:'Se ganhasse na lotaria, compraria uma casa.'},
          {en:'She would be happier if she lived near the sea.', pt:'Ela seria mais feliz se vivesse perto do mar.'},
          {en:'If I were you, I would apologise.', pt:'Se eu fosse tu, pediria desculpa.'},
        ],
        practice:[
          {q:'Second Conditional expresses:', opts:['real future','general truths','imaginary/unlikely situations','past regrets'], ans:2, exp:'Second Conditional = HYPOTHETICAL — not real or unlikely to happen.'},
          {q:'"If I ___ a bird, I would fly home."', opts:['am','was','were','will be'], ans:2, exp:'Use WERE (not was) in Second Conditional: "If I WERE a bird..."'},
        ],
      }, qs:[
        {q:'"If I ___ more money, I would travel more."',opts:['have','had','would have','will have'],ans:1,exp:'Second Conditional IF clause: Past Simple. "If I HAD more money..."'},
        {q:'"She would learn faster if she ___ more."',opts:['practised','practises','will practise','has practised'],ans:0,exp:'"practised" — Past Simple in IF clause.'},
        {q:'"If I were the president, I ___ build more schools."',opts:['will','would','should','could'],ans:1,exp:'"WOULD build" — WOULD + base verb in the result clause.'},
        {q:'"If I were you" is used to:',opts:['describe a past event','give advice about a hypothetical situation','make a prediction','ask a question'],ans:1,exp:'"If I were you, I would..." is a classic way to give ADVICE.'},
        {q:'Second Conditional uses ___ in the IF clause.',opts:['present simple','past simple','will','past perfect'],ans:1,exp:'Second Conditional: IF + PAST SIMPLE, would + base verb.'},
      ]},
      {id:'l1i4', title:'Third Conditional — Past Regrets', titlePt:'Terceiro Condicional — Arrependimentos', icon:'😔', xp:30, learn:{
        explanation:{
          en:'Third Conditional = IF + Past Perfect + WOULD HAVE + past participle. Used for IMAGINARY situations in the PAST — things that didn\'t happen. "If I had studied harder, I would have passed." (But I didn\'t study hard and I didn\'t pass.)',
          pt:'Terceiro Condicional = IF + Passado Perfeito + WOULD HAVE + particípio passado. Usado para situações imaginárias NO PASSADO — coisas que não aconteceram. "If I had studied harder, I would have passed." (Mas não estudei muito e não passei.)'
        },
        examples:[
          {en:'If I had left earlier, I wouldn\'t have missed the bus.', pt:'Se tivesse saído mais cedo, não teria perdido o autocarro.'},
          {en:'She would have passed if she had studied.', pt:'Ela teria passado se tivesse estudado.'},
          {en:'If it hadn\'t rained, we would have had a picnic.', pt:'Se não tivesse chovido, teríamos feito um piquenique.'},
        ],
        practice:[
          {q:'Third Conditional is about:', opts:['real future','imaginary past','general truths','hypothetical present'], ans:1, exp:'Third Conditional = IMAGINARY PAST — things that didn\'t happen.'},
          {q:'"If I had known, I ___ have told you."', opts:['will','would','should','could'], ans:1, exp:'"WOULD have told" — result clause in Third Conditional.'},
        ],
      }, qs:[
        {q:'Third Conditional IF clause uses:',opts:['present simple','past simple','past perfect','would + verb'],ans:2,exp:'IF + Past Perfect (had + past participle).'},
        {q:'"If she had arrived on time, she ___ the beginning."',opts:['would see','would have seen','will see','sees'],ans:1,exp:'"WOULD HAVE SEEN" — result clause: would have + past participle.'},
        {q:'"If I ___ the map, I wouldn\'t have got lost."',opts:['checked','had checked','have checked','would check'],ans:1,exp:'"had checked" — Past Perfect in the IF clause.'},
        {q:'Third Conditional expresses:',opts:['general facts','possible future','unreal past situations','present habits'],ans:2,exp:'Third Conditional = something that DIDN\'T happen in the past, and imagining a different outcome.'},
        {q:'"If it hadn\'t been so cold, we ___ swimming."',opts:['would go','went','would have gone','will go'],ans:2,exp:'"would have gone" — result in Third Conditional.'},
      ]},
      {id:'l1i5', title:'Wish & If Only', titlePt:'Wish e If Only (Desejos)', icon:'⭐', xp:25, learn:{
        explanation:{
          en:'"Wish" and "If only" express regrets and desires. For present situations you want to be different, use "wish/if only" + Past Simple: "I wish I spoke Spanish." For past regrets, use "wish/if only" + Past Perfect: "I wish I had studied more."',
          pt:'"Wish" e "If only" expressam arrependimentos e desejos. Para situações presentes que queres que sejam diferentes, usa "wish/if only" + Passado Simples: "I wish I spoke Spanish." Para arrependimentos passados, usa "wish/if only" + Passado Perfeito: "I wish I had studied more."'
        },
        examples:[
          {en:'I wish I could fly. (impossible dream)', pt:'Queria poder voar. (sonho impossível)'},
          {en:'If only I had more time! (present desire)', pt:'Oxalá tivesse mais tempo! (desejo presente)'},
          {en:'I wish I had listened to my teacher. (past regret)', pt:'Queria ter ouvido o meu professor. (arrependimento passado)'},
        ],
        practice:[
          {q:'"I wish I ___ taller." (I am short)', opts:['am','was/were','had been','will be'], ans:1, exp:'"Wish" + past simple for present desires: "I wish I WERE taller."'},
          {q:'For PAST regrets with "wish", use:', opts:['past simple','past continuous','past perfect','present simple'], ans:2, exp:'"Wish" + past perfect for past regrets: "I wish I HAD studied."'},
        ],
      }, qs:[
        {q:'"I wish I ___ more money." (right now)',opts:['have','had','have had','will have'],ans:1,exp:'"Wish" + past simple for present wishes: "I wish I HAD more money."'},
        {q:'"If only I ___ so rude to her!" (past regret)',opts:['wasn\'t','hadn\'t been','am not','won\'t be'],ans:1,exp:'"hadn\'t been" — If only + past perfect for past regrets.'},
        {q:'"I wish I ___ how to cook." (present)',opts:['know','knew','had known','would know'],ans:1,exp:'"knew" — past simple with "wish" for present situations.'},
        {q:'Which expresses a PAST regret?',opts:['I wish I lived near the beach.','I wish I had called her.','I wish it stopped raining.','If only I were taller.'],ans:1,exp:'"I wish I HAD called her." — Past perfect = past regret.'},
        {q:'"If only I ___ harder at school!" (regret)',opts:['studied','had studied','study','would study'],ans:1,exp:'"had studied" — Past Perfect. Regret about something in the past.'},
      ]},
      {id:'l1i6', title:'Conditionals — Mixed Practice', titlePt:'Condicionais — Prática Mista', icon:'🎯', xp:35, learn:{
        explanation:{
          en:'Quick summary: Zero (If + Present, Present) = always true. First (If + Present, Will) = real future. Second (If + Past, Would) = imaginary present. Third (If + Past Perfect, Would Have) = imaginary past. Wish + Past = present desire. Wish + Past Perfect = past regret.',
          pt:'Resumo rápido: Zero (If + Presente, Presente) = sempre verdade. Primeiro (If + Presente, Will) = futuro real. Segundo (If + Passado, Would) = presente imaginário. Terceiro (If + Passado Perfeito, Would Have) = passado imaginário. Wish + Passado = desejo presente. Wish + Past Perfect = arrependimento passado.'
        },
        examples:[
          {en:'Zero: If water reaches 100°C, it boils.', pt:'Zero: Se a água atingir 100°C, ferve.'},
          {en:'Second: If I were rich, I would help everyone.', pt:'Segundo: Se eu fosse rico, ajudaria toda a gente.'},
          {en:'Third: If she had studied, she would have passed.', pt:'Terceiro: Se ela tivesse estudado, teria passado.'},
        ],
        practice:[
          {q:'Which conditional: "If I had money, I would travel"?', opts:['Zero','First','Second','Third'], ans:2, exp:'If + Past Simple + Would = Second Conditional. HYPOTHETICAL present.'},
          {q:'Which conditional: "If you heat ice, it melts"?', opts:['Zero','First','Second','Third'], ans:0, exp:'If + Present + Present = Zero Conditional. GENERAL TRUTH.'},
        ],
      }, qs:[
        {q:'Identify: "If it rains tomorrow, we will cancel."',opts:['Zero','First','Second','Third'],ans:1,exp:'If + Present Simple, WILL = First Conditional. Real possible future.'},
        {q:'Identify: "If I had studied, I would have passed."',opts:['Zero','First','Second','Third'],ans:3,exp:'If + Past Perfect, WOULD HAVE = Third Conditional. Imaginary past.'},
        {q:'Identify: "If I were you, I would apologise."',opts:['Zero','First','Second','Third'],ans:2,exp:'If + Past Simple (were), WOULD = Second Conditional. Hypothetical.'},
        {q:'"I wish I ___ the lottery." (imagining winning right now)',opts:['win','won','had won','would win'],ans:1,exp:'"won" — Wish + Past Simple for PRESENT desires.'},
        {q:'Complete: "If she ___ harder, she would have got the job."',opts:['tried','tries','had tried','would try'],ans:2,exp:'Third Conditional: IF + Past Perfect: "had tried."'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT13);
