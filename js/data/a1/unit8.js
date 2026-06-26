// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit8.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1d — Modal Verbs
// Part of UNITS_A1

const UNITS_A1_UNIT8 = [
  {
    id:'u1d', cefr:'A1', title:'Modal Verbs', titlePt:'Verbos Modais',
    desc:'Express ability, permission, obligation and advice! 💡',
    descPt:'Expressa capacidade, permissão, obrigação e conselho! 💡',
    color:'#6a1b9a', icon:'💡', premium:false,
    lessons:[

      {id:'l1d1', title:'Can & Can\'t — Ability', titlePt:'Can & Can\'t — Capacidade', icon:'💪', xp:20, learn:{
        explanation:{
          en:'"Can" expresses what you are ABLE to do right now. "Can\'t" (cannot) is the negative. Important rule: "can" NEVER changes — no -s, no -ed, no -ing. Always use the BASE verb after "can": "She can swim." (NOT "she cans swim" or "she can swims"). Questions: "Can you...?" Answers: "Yes, I can." / "No, I can\'t."',
          pt:'"Can" expressa o que és CAPAZ de fazer agora. "Can\'t" (cannot) é o negativo. Regra importante: "can" NUNCA muda — sem -s, sem -ed, sem -ing. Usa sempre o verbo BASE depois de "can": "She can swim." (NÃO "she cans swim" ou "she can swims"). Perguntas: "Can you...?" Respostas: "Yes, I can." / "No, I can\'t."'
        },
        examples:[
          {en:'I can speak English and Portuguese.', pt:'Eu sei falar inglês e português.'},
          {en:'She can\'t drive — she is only 15.', pt:'Ela não sabe conduzir — ela só tem 15 anos.'},
          {en:'Can you help me, please?', pt:'Podes ajudar-me, por favor?'},
          {en:'Yes, I can! / No, I can\'t.', pt:'Sim, posso! / Não, não posso.'},
          {en:'He can play football very well.', pt:'Ele joga futebol muito bem.'},
        ],
        practice:[
          {q:'"She ___ play the guitar." (she has this skill)', opts:['cans','can','is able','to can'], ans:1, exp:'"She CAN play the guitar." — can never adds -s!'},
          {q:'"Can you swim?" — Best answer:', opts:['Yes, I am.','Yes, I do.','Yes, I can.','Yes, I could.'], ans:2, exp:'"Yes, I CAN." — answer can with can!'},
        ],
      }, qs:[
        {q:'"He ___ ride a bicycle." (has the skill)',opts:['cans','can','is able to','to can'],ans:1,exp:'"He CAN ride a bicycle." — can NEVER adds -s!'},
        {q:'Negative of "I can dance":',opts:['I don\'t can dance.','I can\'t dance.','I not can dance.','I cannot to dance.'],ans:1,exp:'"I CAN\'T dance." = I cannot dance. Can + not = can\'t!'},
        {q:'Question form of "You can cook":',opts:['Do you can cook?','Are you can cook?','Can you cook?','You can cook?'],ans:2,exp:'"CAN you cook?" — move can to the front!'},
        {q:'"She can swims." — Is this correct?',opts:['Yes, correct','No, should be: she can swim','No, should be: she cans swim','No, should be: she is can swim'],ans:1,exp:'WRONG! After "can" always use BASE verb: "She can SWIM."'},
        {q:'"___ you speak French?" (asking ability)',opts:['Do','Are','Can','Have'],ans:2,exp:'"CAN you speak French?" — can for ability!'},
        {q:'"I can\'t see the board." means:',opts:['I don\'t want to see it','I am not able to see it','I am allowed to see it','I should see it'],ans:1,exp:'"Can\'t" = am not able to. I cannot see the board!'},
        {q:'Which is grammatically CORRECT?',opts:['She can to swim.','She can swims.','She cans swim.','She can swim.'],ans:3,exp:'"She CAN swim." — can + base verb, no to, no -s!'},
      ]},

      {id:'l1d2', title:'Could — Past Ability & Polite Requests', titlePt:'Could — Capacidade Passada e Pedidos Educados', icon:'🙏', xp:20, learn:{
        explanation:{
          en:'"Could" has two uses. (1) Past ability — what someone WAS able to do in the past: "When I was young, I could run fast." (2) Polite requests — more formal and polite than "can": "Could you help me, please?" is more polite than "Can you help me?" "Could I have a glass of water?" Both uses follow the same rule: could + base verb, never changes.',
          pt:'"Could" tem dois usos. (1) Capacidade passada — o que alguém ERA capaz de fazer no passado: "When I was young, I could run fast." (2) Pedidos educados — mais formal e educado do que "can": "Could you help me, please?" é mais educado do que "Can you help me?" "Could I have a glass of water?" Ambos os usos seguem a mesma regra: could + verbo base, nunca muda.'
        },
        examples:[
          {en:'When I was young, I could climb trees.', pt:'Quando eu era jovem, eu conseguia trepar às árvores.'},
          {en:'She couldn\'t walk until she was 18 months old.', pt:'Ela não conseguia andar até ter 18 meses.'},
          {en:'Could you repeat that, please? (polite)', pt:'Poderia repetir isso, por favor? (educado)'},
          {en:'Could I use your phone? (asking permission politely)', pt:'Poderia usar o teu telemóvel? (pedir permissão educadamente)'},
          {en:'He could speak three languages as a child.', pt:'Ele conseguia falar três línguas quando era criança.'},
        ],
        practice:[
          {q:'Which use of "could" is correct for past ability?', opts:['Could you open the door?','I could swim when I was five.','Could I leave early?','Could you pass the salt?'], ans:1, exp:'"I could swim when I was five." = past ability — I WAS ABLE TO swim then.'},
          {q:'"Could you pass the salt?" is:', opts:['past ability','future plan','polite request','obligation'], ans:2, exp:'Polite request! "Could you...?" sounds more formal and polite than "Can you...?"'},
        ],
      }, qs:[
        {q:'"When I was a child, I ___ speak Changana fluently."',opts:['can','could','should','must'],ans:1,exp:'"I COULD speak Changana." — past ability (I was able to then)!'},
        {q:'"___ you help me with this bag, please?" (polite request)',opts:['Can','Could','Should','Must'],ans:1,exp:'"COULD you help me?" — more polite/formal than "can"!'},
        {q:'"She couldn\'t walk until she was two." means:',opts:['She didn\'t want to walk','She wasn\'t able to walk','She wasn\'t allowed to walk','She didn\'t try to walk'],ans:1,exp:'"Couldn\'t" = was not able to. She was NOT ABLE to walk at that time!'},
        {q:'"Could I sit here?" is asking for:',opts:['ability','past action','polite permission','obligation'],ans:2,exp:'"Could I...?" = asking permission politely. "Is it okay if I sit here?"'},
        {q:'"___ you speak English when you were ten?" (past)',opts:['Can','Could','Do','Did'],ans:1,exp:'"COULD you speak English when you were ten?" = asking about past ability!'},
        {q:'Which is more polite?',opts:['"Can you help me?"','"Could you help me?"','Both are the same','Neither is polite'],ans:1,exp:'"COULD you help me?" is more polite and formal than "can"!'],
        {q:'"I could run very fast when I was young." This is about:',opts:['future plans','present ability','past ability','advice'],ans:2,exp:'Past ability — when I was young (past time), I WAS ABLE TO run fast!'},
      ]},

      {id:'l1d3', title:'Must & Have To — Obligation', titlePt:'Must & Have To — Obrigação', icon:'⚠️', xp:25, learn:{
        explanation:{
          en:'"Must" and "have to" both express obligation — something that is necessary or required. MUST = strong obligation, often from the speaker\'s own feeling: "I must study tonight." (I feel I need to). HAVE TO = obligation from external rules or circumstances: "I have to wear a uniform at school." (the school rule). Negative: "mustn\'t" = prohibition (you are NOT allowed). "Don\'t have to" = it\'s NOT necessary (but you can if you want).',
          pt:'"Must" e "have to" expressam ambos obrigação — algo que é necessário ou exigido. MUST = obrigação forte, muitas vezes do sentimento do próprio falante: "I must study tonight." (Sinto que preciso). HAVE TO = obrigação de regras externas ou circunstâncias: "I have to wear a uniform at school." (a regra da escola). Negativo: "mustn\'t" = proibição (NÃO tens permissão). "Don\'t have to" = NÃO é necessário (mas podes se quiseres).'
        },
        examples:[
          {en:'I must finish this report today. (personal obligation)', pt:'Eu devo terminar este relatório hoje. (obrigação pessoal)'},
          {en:'Students have to wear a uniform here. (rule)', pt:'Os alunos têm de usar farda aqui. (regra)'},
          {en:'You mustn\'t smoke in the hospital. (forbidden!)', pt:'Não podes fumar no hospital. (proibido!)'},
          {en:'You don\'t have to come — it\'s optional.', pt:'Não tens de vir — é opcional.'},
          {en:'She has to wake up at 5am for work.', pt:'Ela tem de acordar às 5h para o trabalho.'},
        ],
        practice:[
          {q:'"You ___ smoke here — it\'s forbidden!"', opts:['mustn\'t','don\'t have to','should','must'], ans:0, exp:'"Mustn\'t" = NOT allowed! Prohibition! You are FORBIDDEN to smoke here.'},
          {q:'"You ___ come to the meeting. It\'s optional."', opts:['must','mustn\'t','have to','don\'t have to'], ans:3, exp:'"Don\'t have to" = not necessary, but you can if you want. It\'s optional.'},
        ],
      }, qs:[
        {q:'"You ___ eat vegetables. They\'re good for you!" (strong advice/obligation)',opts:['don\'t have to','mustn\'t','must','could'],ans:2,exp:'"You MUST eat vegetables!" — strong personal obligation/advice!'],
        {q:'"She ___ wear a helmet on the motorcycle." (rule/law)',opts:['must','has to','should','could'],ans:1,exp:'"She HAS TO wear a helmet." — it\'s a rule/law, external obligation!'},
        {q:'"You ___ touch the fire! It\'s dangerous!" (forbidden)',opts:['must','have to','mustn\'t','don\'t have to'],ans:2,exp:'"You MUSTN\'T touch the fire!" — mustn\'t = prohibition, NOT allowed!'},
        {q:'"You ___ pay for the bus. I have money." (not necessary)',opts:['must','have to','mustn\'t','don\'t have to'],ans:3,exp:'"You DON\'T HAVE TO pay." = It\'s not necessary — I\'ll pay!'},
        {q:'"I ___ go to the doctor today. I feel terrible." (personal need)',opts:['don\'t have to','must','mustn\'t','could'],ans:1,exp:'"I MUST go to the doctor." — strong personal feeling of necessity!'},
        {q:'What is the difference between "mustn\'t" and "don\'t have to"?',opts:['They mean the same thing','Mustn\'t = forbidden; don\'t have to = not necessary','Don\'t have to = forbidden; mustn\'t = not necessary','There is no difference'],ans:1,exp:'"MUSTN\'T" = prohibited (not allowed). "DON\'T HAVE TO" = not necessary (but OK if you want).'},
        {q:'"Students have to arrive on time." This means:',opts:['Students can arrive late','It is optional','It is a rule they must follow','Students should try to arrive on time'],ans:2,exp:'"Have to" = it is an external rule/obligation they must follow!'},
      ]},

      {id:'l1d4', title:'Should & Shouldn\'t — Advice', titlePt:'Should & Shouldn\'t — Conselho', icon:'🎯', xp:20, learn:{
        explanation:{
          en:'"Should" is used to give advice or make recommendations — it is LESS strong than must. "Should" = I think this is a good idea. "Shouldn\'t" = I think this is a bad idea. "You should drink more water." = good advice. "You shouldn\'t eat so much sugar." = advice against something. Questions with "should" ask for advice: "Should I call the doctor?" "What should I do?"',
          pt:'"Should" é usado para dar conselhos ou fazer recomendações — é MENOS forte do que must. "Should" = acho que isto é uma boa ideia. "Shouldn\'t" = acho que isto é uma má ideia. "You should drink more water." = bom conselho. "You shouldn\'t eat so much sugar." = conselho contra algo. Perguntas com "should" pedem conselho: "Should I call the doctor?" "What should I do?"'
        },
        examples:[
          {en:'You should sleep early if you have an exam tomorrow.', pt:'Deves dormir cedo se tiveres exame amanhã.'},
          {en:'You shouldn\'t eat so much junk food.', pt:'Não deves comer tanta comida lixo.'},
          {en:'Should I take an umbrella? It looks cloudy.', pt:'Devo levar um chapéu-de-chuva? Parece nublado.'},
          {en:'You should see a doctor — you look pale.', pt:'Devias ver um médico — estás pálido/a.'},
          {en:'We shouldn\'t waste water.', pt:'Não devíamos desperdiçar água.'},
        ],
        practice:[
          {q:'My friend has a cold. What should I say?', opts:['You must drink water.','You should rest and drink fluids.','You have to see a doctor now.','You could not eat.'], ans:1, exp:'"You SHOULD rest and drink fluids." — should for advice, not forcing them.'},
          {q:'"You shouldn\'t be late." This means:', opts:['you must not come','it is a bad idea to be late','you are forbidden from being late','you don\'t need to come'], ans:1, exp:'"Shouldn\'t" = I think this is a bad idea / I advise against it.'},
        ],
      }, qs:[
        {q:'"You ___ study more — your exams are next week."',opts:['must','should','mustn\'t','don\'t have to'],ans:1,exp:'"You SHOULD study more." — advice, recommendation!'},
        {q:'"You ___ drive so fast in the rain."',opts:['should','mustn\'t','shouldn\'t','have to'],ans:2,exp:'"You SHOULDN\'T drive so fast." — advice against something dangerous!'},
        {q:'"___ I take a jacket? It might be cold."',opts:['Must','Have to','Should','Can'],ans:2,exp:'"SHOULD I take a jacket?" — asking for advice!'},
        {q:'"What ___ I do? I\'m lost!" (asking for advice)',opts:['must','can','should','have to'],ans:2,exp:'"What SHOULD I do?" — asking someone for their recommendation!'},
        {q:'"You should drink more water." This is:',opts:['a rule','a prohibition','advice','past ability'],ans:2,exp:'"Should" gives advice — a recommendation, not a strict rule!'},
        {q:'What is "should" used for?',opts:['past ability','polite requests','advice and recommendations','future plans'],ans:2,exp:'"Should" = advice and recommendations. Less strong than "must"!'},
        {q:'Which is correct advice for someone who is tired?',opts:['You should to sleep.','You should sleeps.','You should sleep.','You should sleeping.'],ans:2,exp:'"You should SLEEP." — should + base verb, no to, no -s, no -ing!'},
      ]},

      {id:'l1d5', title:'May & Might — Possibility', titlePt:'May & Might — Possibilidade', icon:'🎲', xp:20, learn:{
        explanation:{
          en:'"May" and "might" both express possibility — something that is possible but not certain. "It may rain tomorrow." = perhaps it will rain (50/50). "It might rain tomorrow." = similar, but might suggests a little LESS certainty. Both use the base verb. "May" is also used for formal permission: "May I come in?" = Can I come in? (polite). In everyday speech, "might" is very common for possibility.',
          pt:'"May" e "might" expressam ambos possibilidade — algo que é possível mas não certo. "It may rain tomorrow." = talvez chova (50/50). "It might rain tomorrow." = semelhante, mas might sugere um pouco MENOS de certeza. Ambos usam o verbo base. "May" também é usado para permissão formal: "May I come in?" = Can I come in? (educado). Na fala do dia-a-dia, "might" é muito comum para possibilidade.'
        },
        examples:[
          {en:'It may rain this afternoon — take an umbrella.', pt:'Pode chover esta tarde — leva um chapéu-de-chuva.'},
          {en:'I might go to the party, I\'m not sure.', pt:'Posso ir à festa, não tenho a certeza.'},
          {en:'She may be late — there\'s a lot of traffic.', pt:'Ela pode chegar atrasada — há muito trânsito.'},
          {en:'May I use the bathroom? (formal permission)', pt:'Posso usar a casa de banho? (permissão formal)'},
          {en:'He might not come — he said he was tired.', pt:'Ele talvez não venha — ele disse que estava cansado.'},
        ],
        practice:[
          {q:'"I\'m not sure, but I ___ go to Beira next week."', opts:['must','should','might','have to'], ans:2, exp:'"Might go" — possibility, not certain. I\'m not sure yet!'},
          {q:'"May I open the window?" is asking for:', opts:['advice','possibility','formal permission','past ability'], ans:2, exp:'"May I...?" = formal way to ask for permission. More polite than "Can I...?"'},
        ],
      }, qs:[
        {q:'"It ___ rain later. Those clouds look dark."',opts:['must','should','might','has to'],ans:2,exp:'"It MIGHT rain." — possible but not certain!'},
        {q:'"___ I ask you a question?" (formal)',opts:['Should','Must','May','Have to'],ans:2,exp:'"MAY I ask?" — formal/polite request for permission!'},
        {q:'"She ___ be at home — try calling her."',opts:['must','might','has to','should'],ans:1,exp:'"She MIGHT be at home." — she\'s possibly there, but we\'re not sure!'},
        {q:'"I might not come to class tomorrow." means:',opts:['I will definitely miss class','It\'s possible I won\'t come','I must miss class','I should miss class'],ans:1,exp:'"Might not" = it\'s possible I won\'t come — not certain either way!'},
        {q:'"May" for possibility is similar to:',opts:['must','have to','might','should'],ans:2,exp:'"May" and "might" are both used for possibility — something possible but not certain!'},
        {q:'Which sentence expresses possibility?',opts:['You must eat.','You should rest.','It might snow.','You have to leave.'],ans:2,exp:'"It MIGHT snow." — possible but not certain! 🌨️'],
        {q:'"May I sit here?" This is:',opts:['a possibility','asking permission politely','giving advice','expressing obligation'],ans:1,exp:'"May I...?" = asking permission in a polite/formal way!'},
      ]},

      {id:'l1d6', title:'Modal Verbs — Summary & Practice', titlePt:'Verbos Modais — Resumo e Prática', icon:'📋', xp:30, learn:{
        explanation:{
          en:'Let\'s review all modal verbs together! Can (ability now), Could (past ability / polite request), Must/Have to (obligation), Mustn\'t (prohibition), Don\'t have to (not necessary), Should (advice), May/Might (possibility). Key rule for ALL modals: always use the BASE verb after them — never add -s, -ed, or -ing. "She can speak." ✓ "She can speaks." ✗ "She can speaking." ✗',
          pt:'Vamos rever todos os verbos modais juntos! Can (capacidade agora), Could (capacidade passada / pedido educado), Must/Have to (obrigação), Mustn\'t (proibição), Don\'t have to (não necessário), Should (conselho), May/Might (possibilidade). Regra fundamental para TODOS os modais: usa sempre o verbo BASE depois deles — nunca adiciones -s, -ed, ou -ing. "She can speak." ✓ "She can speaks." ✗ "She can speaking." ✗'
        },
        examples:[
          {en:'I can swim. (ability)', pt:'Eu sei nadar. (capacidade)'},
          {en:'You should rest. (advice)', pt:'Devias descansar. (conselho)'},
          {en:'You must study. (strong obligation)', pt:'Deves estudar. (obrigação forte)'},
          {en:'It might rain. (possibility)', pt:'Pode chover. (possibilidade)'},
          {en:'You mustn\'t smoke here. (prohibition)', pt:'Não podes fumar aqui. (proibição)'},
        ],
        practice:[
          {q:'Which modal gives ADVICE?', opts:['must','can','should','might'], ans:2, exp:'"Should" = advice. "You should study more."'},
          {q:'Which modal expresses PROHIBITION?', opts:['don\'t have to','shouldn\'t','might not','mustn\'t'], ans:3, exp:'"Mustn\'t" = you are NOT ALLOWED to do it. Stronger than shouldn\'t!'},
        ],
      }, qs:[
        {q:'Which modal expresses ABILITY?',opts:['should','must','can','might'],ans:2,exp:'"Can" = ability. "I CAN speak English."'},
        {q:'Which modal expresses POSSIBILITY (not certain)?',opts:['can','must','should','might'],ans:3,exp:'"Might" = possibility. "It might rain." — not certain!'},
        {q:'"You ___ come if you don\'t want to." (not necessary)',opts:['must','have to','mustn\'t','don\'t have to'],ans:3,exp:'"DON\'T HAVE TO" = not necessary. You have a choice!'},
        {q:'Which is grammatically CORRECT?',opts:['She should rests.','She should to rest.','She should rest.','She should resting.'],ans:2,exp:'"She should REST." — modal + base verb. No -s, no to, no -ing!'},
        {q:'"You ___ drink and drive!" (it\'s illegal)',opts:['shouldn\'t','don\'t have to','mustn\'t','might not'],ans:2,exp:'"You MUSTN\'T drink and drive!" — it\'s forbidden by law!'},
        {q:'"Could you pass the sugar?" is:',opts:['past ability','a polite request','strong obligation','advice'],ans:1,exp:'"Could you...?" = a polite/formal request! More polite than "Can you...?"'},
        {q:'"I ___ be wrong — let me check." (uncertain)',opts:['must','should','might','have to'],ans:2,exp:'"I MIGHT be wrong." — expressing uncertainty, possible but not sure!'},
      ]},

    ]
  }
];
