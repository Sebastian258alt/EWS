// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit1.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2a
// Part of UNITS_A2 — Modal Verbs

const UNITS_A2_UNIT1 = [
  {
    id:'u2a', cefr:'A2', title:'Modal Verbs', titlePt:'Verbos Modais',
    desc:'Express obligation, advice & possibility like a pro 💡',
    descPt:'Expressa obrigação, conselho e possibilidade como um profissional 💡',
    color:'#7c4dff', icon:'💡', premium:false,
    lessons:[

      {id:'l2a1', title:'Should & Shouldn\'t', titlePt:'Should & Shouldn\'t (Conselho)', icon:'🤔', xp:20, learn:{
        explanation:{
          en:'"Should" gives advice or recommendations — it is softer than "must". Use "should + base verb" for all subjects (no -s!): "You should study more." The negative "shouldn\'t" advises against something: "You shouldn\'t eat too much salt." Common uses: health advice, suggestions, opinions.',
          pt:'"Should" dá conselhos ou recomendações — é mais suave do que "must". Usa "should + verbo base" para todos os sujeitos (sem -s!): "You should study more." O negativo "shouldn\'t" aconselha contra algo: "You shouldn\'t eat too much salt." Usos comuns: conselhos de saúde, sugestões, opiniões.'
        },
        examples:[
          {en:'You should drink more water every day.', pt:'Deves beber mais água todos os dias.'},
          {en:'She shouldn\'t go out — she has a fever.', pt:'Ela não deve sair — tem febre.'},
          {en:'Should I call the doctor?', pt:'Devo chamar o médico?'},
        ],
        practice:[
          {q:'\"Should\" expresses:', opts:['a command','advice or recommendation','a future plan','an action happening now'], ans:1, exp:'Should = conselho/recomendação. Softer than must.'},
          {q:'Complete: \"You ___ be more careful!\"', opts:['should','shoulds','shoulding','to should'], ans:0, exp:'Should never changes form: You SHOULD / He SHOULD / They SHOULD.'},
        ],
      }, qs:[
        {q:'\"You should rest\" is an example of:',opts:['a command','advice','a fact','a question'],ans:1,exp:'Should = devia / é recomendável. Advice, not a command.'},
        {q:'\"You ___ tell lies. It\'s wrong.\"',opts:['should','should not','will','are going to'],ans:1,exp:'Shouldn\'t = advice AGAINST. \"You shouldn\'t lie\" = Não deves mentir.'},
        {q:'\"Should\" is followed by:',opts:['to + verb','verb + ing','verb + ed','base verb'],ans:3,exp:'Should + base verb: should GO, should EAT. Never \"should to go\".'},
        {q:'\"___ I bring anything to the party?\"',opts:['Must','Should','Am','Do'],ans:1,exp:'\"Should I...?\" = Devo eu...? Asking for advice/suggestion.'},
        {q:'Which is the CORRECT sentence?',opts:['She should rests.','She should to rest.','She should rest.','She shoulds rest.'],ans:2,exp:'\"She SHOULD rest.\" — should + base verb. No -s, no \"to\".'},
      ]},

      {id:'l2a2', title:'Must & Mustn\'t', titlePt:'Must & Mustn\'t (Obrigação Forte)', icon:'⚠️', xp:20, learn:{
        explanation:{
          en:'"Must" expresses strong obligation or necessity — something very important or required. "You must wear a seatbelt." "Mustn\'t" expresses strong prohibition (something NOT allowed): "You mustn\'t smoke here." Key difference: "must" comes from the speaker\'s own authority, "have to" comes from external rules.',
          pt:'"Must" expressa obrigação forte ou necessidade — algo muito importante ou obrigatório. "You must wear a seatbelt." "Mustn\'t" expressa proibição forte (algo NÃO permitido): "You mustn\'t smoke here." Diferença importante: "must" vem da autoridade do próprio falante, "have to" vem de regras externas.'
        },
        examples:[
          {en:'You must stop at a red light.', pt:'Tens de parar num sinal vermelho.'},
          {en:'Students must not use phones during exams.', pt:'Os alunos não podem usar telemóveis durante os exames.'},
          {en:'I must finish this report today.', pt:'Tenho de terminar este relatório hoje.'},
        ],
        practice:[
          {q:'\"Must\" expresses:', opts:['a soft suggestion','strong obligation or necessity','a prediction','a past action'], ans:1, exp:'Must = obrigação forte / necessidade.'},
          {q:'\"Mustn\'t\" expresses:', opts:['advice','strong prohibition (not allowed)','ability','preference'], ans:1, exp:'Mustn\'t = proibição forte. \"You mustn\'t\" = não podes / não é permitido.'},
        ],
      }, qs:[
        {q:'\"You must carry your ID card\" means:',opts:['It\'s a good idea','It\'s optional','It\'s required/obligatory','It\'s possible'],ans:2,exp:'Must = is required. It\'s obligatory, not optional.'},
        {q:'\"You ___ enter — it\'s dangerous!\"',opts:['must','mustn\'t','should','can'],ans:1,exp:'Mustn\'t = it is NOT allowed / prohibited. \"You mustn\'t enter.\"'},
        {q:'\"Must\" is followed by:',opts:['to + verb','verb-ing','base verb','verb + ed'],ans:2,exp:'Must + base verb: must GO, must DO, must BE. Never \"must to go\".'},
        {q:'What is the difference between \"must\" and \"should\"?',opts:['They mean exactly the same','\"Should\" is stronger than \"must\"','\"Must\" is strong obligation; \"should\" is advice','\"Must\" is only for questions'],ans:2,exp:'Must = strong obligation (very important!). Should = advice (recommended but not required).'},
        {q:'\"I must study tonight\" means the speaker:',opts:['wants to study but can\'t','feels a strong personal need to study','is not sure about studying','studied yesterday'],ans:1,exp:'Must = the speaker feels it is very necessary/important — strong internal obligation.'},
      ]},

      {id:'l2a3', title:'Have To', titlePt:'Have To (Obrigação Externa)', icon:'📋', xp:20, learn:{
        explanation:{
          en:'"Have to" expresses external obligation — rules, laws, or requirements set by others. "I have to wear a uniform at work." With he/she/it, use "has to". Negative: "don\'t/doesn\'t have to" means it is NOT necessary (but it\'s still allowed). This is different from "mustn\'t"!',
          pt:'"Have to" expressa obrigação externa — regras, leis ou requisitos impostos por outros. "I have to wear a uniform at work." Com he/she/it, usa "has to". Negativo: "don\'t/doesn\'t have to" significa que NÃO é necessário (mas ainda é permitido). Isto é diferente de "mustn\'t"!'
        },
        examples:[
          {en:'I have to go to work at 7am every day.', pt:'Tenho de ir trabalhar às 7 da manhã todos os dias.'},
          {en:'She has to pass the exam to graduate.', pt:'Ela tem de passar no exame para se formar.'},
          {en:'You don\'t have to come — it\'s optional.', pt:'Não tens de vir — é opcional.'},
        ],
        practice:[
          {q:'\"Have to\" is used for:', opts:['personal internal obligation','external obligation (rules/laws)','ability','advice'], ans:1, exp:'Have to = external obligation — rules imposed by others.'},
          {q:'\"She ___ take medicine twice a day.\"', opts:['have to','has to','must to','should to'], ans:1, exp:'She + HAS TO (3rd person singular: has to, not have to).'},
        ],
      }, qs:[
        {q:'\"Don\'t have to\" means:',opts:['it\'s prohibited','it\'s not necessary (but allowed)','it\'s obligatory','it\'s impossible'],ans:1,exp:'Don\'t have to = não é necessário (mas podes se quiseres). NOT the same as mustn\'t!'},
        {q:'\"He ___ renew his passport every 10 years.\"',opts:['have to','has to','must to','should to'],ans:1,exp:'HAS TO for he/she/it: He has to, She has to, It has to.'},
        {q:'\"I have to wear a uniform\" tells us the uniform rule:',opts:['is the speaker\'s personal choice','comes from an external source (employer/school)','is optional','is a health recommendation'],ans:1,exp:'Have to = external rule. The company or school requires it.'},
        {q:'Which sentence is CORRECT?',opts:['She have to study.','She has to study.','She have study.','She has study to.'],ans:1,exp:'She HAS TO study. 3rd person singular = has to.'},
        {q:'\"You ___ bring food — it will be provided.\"',opts:['must','have to','don\'t have to','mustn\'t'],ans:2,exp:'Don\'t have to = not necessary. Food is free — you\'re not required to bring any.'},
      ]},

      {id:'l2a4', title:'Might & May', titlePt:'Might & May (Possibilidade)', icon:'🌥️', xp:20, learn:{
        explanation:{
          en:'"Might" and "may" both express possibility — something that is maybe true or will maybe happen. "It might rain tomorrow." "I may be late." "Might" is slightly more uncertain than "may". Both are followed by a base verb (no -s!). We can also use them to ask for or give permission (formal): "May I come in?"',
          pt:'"Might" e "may" expressam possibilidade — algo que talvez seja verdade ou aconteça. "It might rain tomorrow." "I may be late." "Might" é ligeiramente mais incerto do que "may". Ambos são seguidos de verbo base (sem -s!). Também os usamos para pedir ou dar permissão (formal): "May I come in?" (Posso entrar?)'
        },
        examples:[
          {en:'It might rain this afternoon — bring an umbrella.', pt:'Pode chover esta tarde — leva um guarda-chuva.'},
          {en:'She may not come to the meeting.', pt:'Ela pode não vir à reunião.'},
          {en:'May I ask you a question?', pt:'Posso fazer-te uma pergunta?'},
        ],
        practice:[
          {q:'\"It might rain\" means:', opts:['it will definitely rain','it is impossible to rain','it is possible that it will rain','it rained yesterday'], ans:2, exp:'Might = possibility — maybe it will, maybe it won\'t.'},
          {q:'\"May I come in?\" is asking for:', opts:['ability','advice','permission','obligation'], ans:2, exp:'May I...? = asking for permission (formal).'},
        ],
      }, qs:[
        {q:'\"She might be late\" means:',opts:['She is definitely late','She was late yesterday','It is possible that she will be late','She must be on time'],ans:2,exp:'Might = possibility. Maybe she\'ll be late, maybe not.'},
        {q:'\"Might\" is followed by:',opts:['to + verb','verb + ing','base verb','verb + ed'],ans:2,exp:'Might + base verb: might RAIN, might COME, might BE.'},
        {q:'\"May I use your phone?\" is:',opts:['a command','a request for permission','a statement of ability','an obligation'],ans:1,exp:'May I...? = Posso...? Formal request for permission.'},
        {q:'Which is MORE uncertain — might or may?',opts:['May is more uncertain','Might is more uncertain','They are exactly the same','Neither expresses uncertainty'],ans:1,exp:'Might = slightly more uncertain than may. Both express possibility but might is less certain.'},
        {q:'\"I ___ come to your party — I\'m not sure yet.\"',opts:['must','have to','might','should'],ans:2,exp:'Might = talvez. \"I might come\" = É possível que eu venha, mas não tenho a certeza.'},
      ]},

      {id:'l2a5', title:'Could (Past & Polite)', titlePt:'Could (Passado e Educação)', icon:'🤝', xp:20, learn:{
        explanation:{
          en:'"Could" has two main uses: (1) Past ability — the past form of "can": "When I was young, I could run very fast." (2) Polite requests — more formal than "can": "Could you help me, please?" We also use it for possibility in the past: "She could have been tired."',
          pt:'"Could" tem dois usos principais: (1) Capacidade passada — a forma passada de "can": "When I was young, I could run very fast." (2) Pedidos educados — mais formal do que "can": "Could you help me, please?" Também o usamos para possibilidade no passado: "She could have been tired."'
        },
        examples:[
          {en:'When I was a child, I could speak French.', pt:'Quando era criança, sabia falar francês.'},
          {en:'Could you please pass the salt?', pt:'Pode passar o sal, por favor?'},
          {en:'She couldn\'t swim until she was ten.', pt:'Ela não sabia nadar até ter dez anos.'},
        ],
        practice:[
          {q:'\"Could\" as past ability is the past of:', opts:['can','must','will','should'], ans:0, exp:'could = past of can. Can → Could.'},
          {q:'\"Could you help me?\" is:', opts:['a command','a past statement','a polite request','a negative'], ans:2, exp:'Could you...? = polite request. More formal than \"Can you?\"'},
        ],
      }, qs:[
        {q:'\"When I was 5, I could ___ to read.\"',opts:['know','knew','not','already knew how'],ans:2,exp:'\"I couldn\'t read\" or \"I could read\" — could = past ability at that time.'},
        {q:'\"Could you repeat that, please?\" is:',opts:['rude','a polite request','a command','a past statement'],ans:1,exp:'Could you...? = very polite way to ask for something. Better than \"Repeat it!\"'},
        {q:'\"She couldn\'t come to class\" means:',opts:['She chose not to come','She was not able to come','She must come','She should come'],ans:1,exp:'Couldn\'t = could not = was not able to. Past inability.'},
        {q:'Which sentence shows PAST ABILITY?',opts:['Could you open the window?','I could swim when I was 6.','It could rain tomorrow.','Could I borrow your pen?'],ans:1,exp:'\"I could swim when I was 6\" = past ability at a specific time.'},
        {q:'\"Could\" is MOST similar to \"can\" in meaning when:',opts:['expressing past ability','making polite requests','both expressing obligation','describing future plans'],ans:0,exp:'Could as past ability = the past version of can. \"I can swim\" → \"I could swim\" (when I was young).'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT1);
