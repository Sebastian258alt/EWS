// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit6.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0f — Verbs, Questions & Daily Actions
// Part of UNITS_A0

const UNITS_A0_UNIT6 = [
  {
    id:'u0f', cefr:'A0', title:'Verbs, Questions & Daily Life', titlePt:'Verbos, Perguntas e Vida Diária',
    desc:'Use action words and ask questions confidently! 💬',
    descPt:'Usa verbos de acção e faz perguntas com confiança! 💬',
    color:'#43a047', icon:'💬', premium:false,
    lessons:[

      {id:'l0ee', title:'Common Action Verbs', titlePt:'Verbos de Acção Comuns', icon:'🏃', xp:20, learn:{
        explanation:{
          en:'Action verbs describe what people do. The most common ones: go (ir), come (vir), eat (comer), drink (beber), sleep (dormir), work (trabalhar), study (estudar), play (jogar/brincar), buy (comprar), sell (vender), walk (andar), run (correr), talk (falar), listen (ouvir), read (ler), write (escrever).',
          pt:'Os verbos de acção descrevem o que as pessoas fazem. Os mais comuns: go (ir), come (vir), eat (comer), drink (beber), sleep (dormir), work (trabalhar), study (estudar), play (jogar/brincar), buy (comprar), sell (vender), walk (andar), run (correr), talk (falar), listen (ouvir), read (ler), write (escrever).'
        },
        examples:[
          {en:'I go to school every day.', pt:'Vou à escola todos os dias.'},
          {en:'She studies English at night.', pt:'Ela estuda inglês à noite.'},
          {en:'They play football on Saturdays.', pt:'Eles jogam futebol aos sábados.'},
          {en:'He works at the hospital.', pt:'Ele trabalha no hospital.'},
          {en:'We buy food at the market.', pt:'Compramos comida no mercado.'},
        ],
        practice:[
          {q:'"Estudar" in English is:', opts:['sleep','study','work','play'], ans:1, exp:'Study = estudar!'},
          {q:'"They ___ football on weekends."', opts:['plays','playing','play','to play'], ans:2, exp:'"They PLAY" — They/We/I/You use the base verb!'},
        ],
      }, qs:[
        {q:'"Dormir" in English is:',opts:['eat','drink','sleep','rest'],ans:2,exp:'Sleep = dormir! 😴'},
        {q:'"Trabalhar" in English is:',opts:['study','play','walk','work'],ans:3,exp:'Work = trabalhar!'},
        {q:'"She ___ at the market." (buying things)',opts:['buy','buys','buying','bought'],ans:1,exp:'"She BUYS" — she/he/it adds -s in Simple Present!'},
        {q:'"Correr" in English is:',opts:['walk','swim','run','jump'],ans:2,exp:'Run = correr! 🏃'},
        {q:'"I ___ English every day."',opts:['studies','studying','study','to study'],ans:2,exp:'"I STUDY English." — I always uses base verb!'},
        {q:'"Escrever" in English is:',opts:['read','write','speak','listen'],ans:1,exp:'Write = escrever! ✍️'},
        {q:'"He ___ to school by bus."',opts:['go','goes','going','gone'],ans:1,exp:'"He GOES" — he/she/it adds -es or -s!'},
      ]},

      {id:'l0ff', title:'Yes/No Questions', titlePt:'Perguntas de Sim/Não', icon:'❓', xp:20, learn:{
        explanation:{
          en:'Yes/No questions in English use DO or DOES at the start. Use DO with I/you/we/they. Use DOES with he/she/it. The main verb stays in base form. "Do you speak English?" "Does she live here?" To answer: "Yes, I do." / "No, I don\'t." "Yes, she does." / "No, she doesn\'t."',
          pt:'As perguntas de Sim/Não em inglês usam DO ou DOES no início. Usa DO com I/you/we/they. Usa DOES com he/she/it. O verbo principal fica na forma base. "Do you speak English?" "Does she live here?" Para responder: "Yes, I do." / "No, I don\'t." "Yes, she does." / "No, she doesn\'t."'
        },
        examples:[
          {en:'Do you speak English? Yes, I do.', pt:'Falas inglês? Sim, falo.'},
          {en:'Does he live in Maputo? No, he doesn\'t.', pt:'Ele vive em Maputo? Não, não vive.'},
          {en:'Do they eat meat? No, they don\'t.', pt:'Eles comem carne? Não, não comem.'},
          {en:'Does she work here? Yes, she does.', pt:'Ela trabalha aqui? Sim, trabalha.'},
          {en:'Do you like coffee? Yes, I do!', pt:'Gostas de café? Sim, gosto!'},
        ],
        practice:[
          {q:'"___ you speak English?"', opts:['Is','Are','Do','Does'], ans:2, exp:'"Do you speak?" — use DO with I/you/we/they!'},
          {q:'"___ she like football?"', opts:['Do','Is','Are','Does'], ans:3, exp:'"Does she like?" — use DOES with he/she/it!'},
        ],
      }, qs:[
        {q:'"___ you live in Maputo?"',opts:['Is','Are','Do','Does'],ans:2,exp:'"Do you live?" — use DO with you!'},
        {q:'"___ he work here?"',opts:['Do','Is','Does','Are'],ans:2,exp:'"Does he work?" — use DOES with he!'},
        {q:'"Do you like fish?" — Answer YES:',opts:['Yes, I like.','Yes, I does.','Yes, I do.','Yes, do I.'],ans:2,exp:'"Yes, I DO." — short positive answer!'},
        {q:'"Does she speak French?" — Answer NO:',opts:['No, she don\'t.','No, she doesn\'t.','No, she not.','No, she isn\'t.'],ans:1,exp:'"No, she doesn\'t." — short negative answer!'},
        {q:'"Do they ___ English?" (understand)',opts:['understands','understanding','understand','to understand'],ans:2,exp:'After DO/DOES, use the base verb: understand!'},
        {q:'"Does ___ have a car?" (he)',opts:['he has','has he','he have','he'],ans:2,exp:'"Does he HAVE a car?" — base verb after does!'},
        {q:'The correct yes/no question form is:',opts:['You do speak English?','Speak you English?','Do you speak English?','You speak English?'],ans:2,exp:'"DO you SPEAK English?" — DO first, then subject, then verb!'},
      ]},

      {id:'l0gg', title:'Simple Commands (Imperatives)', titlePt:'Comandos Simples (Imperativos)', icon:'📢', xp:15, learn:{
        explanation:{
          en:'Commands (imperatives) use the base verb directly — no subject needed! Positive: "Open the window!" "Sit down!" "Please speak slowly." Negative commands use "Don\'t": "Don\'t run!" "Don\'t be late!" "Please don\'t close the door." We add "please" to be polite.',
          pt:'Os comandos (imperativos) usam o verbo base directamente — sem sujeito! Positivo: "Open the window!" "Sit down!" "Please speak slowly." Comandos negativos usam "Don\'t": "Don\'t run!" "Don\'t be late!" "Please don\'t close the door." Adicionamos "please" para ser educado.'
        },
        examples:[
          {en:'Open your books, please!', pt:'Abram os livros, por favor!'},
          {en:'Don\'t talk in class!', pt:'Não fales na aula!'},
          {en:'Sit down and listen.', pt:'Senta-te e ouve.'},
          {en:'Please speak slowly — I\'m learning!', pt:'Por favor fala devagar — estou a aprender!'},
          {en:'Don\'t be late for class!', pt:'Não chegues atrasado/a à aula!'},
        ],
        practice:[
          {q:'Commands use:', opts:['the base verb','verb + ing','verb + ed','subject + verb'], ans:0, exp:'Commands use the BASE verb directly! "Sit!", "Run!", "Open!"'},
          {q:'To make a negative command, use:', opts:['No + verb','Not + verb','Don\'t + verb','Doesn\'t + verb'], ans:2, exp:'"Don\'t run!" — Don\'t + base verb for negative commands!'},
        ],
      }, qs:[
        {q:'"Please ___ the door." (close it)',opts:['closes','closing','close','to close'],ans:2,exp:'"Please CLOSE the door." — base verb in commands!'},
        {q:'"___ talk in class!"',opts:['No','Not','Don\'t','Doesn\'t'],ans:2,exp:'"DON\'T talk in class!" — Don\'t + verb for negative commands!'},
        {q:'Which is a CORRECT command?',opts:['You sit down!','Sits down!','Sit down!','Sitting down!'],ans:2,exp:'"Sit down!" — just the base verb, no subject!'},
        {q:'"Please speak ___." (asking for slower speech)',opts:['fast','quickly','slowly','loudly'],ans:2,exp:'"Please speak SLOWLY." — slowly = devagar!'},
        {q:'"___ be late!" (warning)',opts:['No','Not','Don\'t','Doesn\'t'],ans:2,exp:'"DON\'T be late!" — a polite warning!'},
        {q:'To make a command polite, add:',opts:['sorry','excuse','please','thank'],ans:2,exp:'Add PLEASE to make commands polite: "Sit down, please!"'},
      ]},

      {id:'l0hh', title:'Daily Routine Vocabulary', titlePt:'Vocabulário de Rotina Diária', icon:'🌅', xp:20, learn:{
        explanation:{
          en:'Daily routine vocabulary describes what you do from morning to night. Key phrases: wake up (acordar), get up (levantar-se), have breakfast (tomar o pequeno-almoço), go to school/work (ir à escola/ao trabalho), have lunch (almoçar), come home (chegar a casa), have dinner (jantar), go to bed (ir dormir).',
          pt:'O vocabulário de rotina diária descreve o que fazes da manhã à noite. Frases-chave: wake up (acordar), get up (levantar-se), have breakfast (tomar o pequeno-almoço), go to school/work (ir à escola/ao trabalho), have lunch (almoçar), come home (chegar a casa), have dinner (jantar), go to bed (ir dormir).'
        },
        examples:[
          {en:'I wake up at 6 AM every day.', pt:'Acordo às 6 da manhã todos os dias.'},
          {en:'After breakfast, I go to school.', pt:'Depois do pequeno-almoço, vou à escola.'},
          {en:'We have lunch at 12:30.', pt:'Almoçamos às 12:30.'},
          {en:'I come home at 5 PM.', pt:'Chego a casa às 17h.'},
          {en:'I go to bed at 10 PM.', pt:'Vou dormir às 22h.'},
        ],
        practice:[
          {q:'"Wake up" means:', opts:['dormir','levantar-se da cama/acordar','jantar','ir trabalhar'], ans:1, exp:'Wake up = acordar/levantar-se!'},
          {q:'"Have dinner" means:', opts:['ter o pequeno-almoço','almoçar','jantar','comer um lanche'], ans:2, exp:'Have dinner = jantar! The evening meal.'},
        ],
      }, qs:[
        {q:'"Get up" means:',opts:['dormir','acordar e levantar-se','almoçar','ir para a cama'],ans:1,exp:'Get up = levantar-se da cama!'},
        {q:'"Have breakfast" means:',opts:['jantar','almoçar','tomar o pequeno-almoço','lanchar'],ans:2,exp:'Have breakfast = tomar o pequeno-almoço! The first meal of the day.'},
        {q:'"Go to bed" means:',opts:['ir ao trabalho','ir à escola','ir dormir','levantar-se'],ans:2,exp:'Go to bed = ir dormir! 🛏️'},
        {q:'"I ___ up at 7 every morning."',opts:['goes','wake','wakes','going'],ans:1,exp:'"I WAKE up" — wake up is the phrase!'},
        {q:'"Have lunch" in Portuguese is:',opts:['tomar o pequeno-almoço','lanchar','jantar','almoçar'],ans:3,exp:'Have lunch = almoçar!'},
        {q:'What do you do FIRST in the morning?',opts:['go to bed','have dinner','wake up','come home'],ans:2,exp:'First you wake up, then get up, then have breakfast!'},
        {q:'"Come home" means:',opts:['sair de casa','ir para a escola','chegar a casa','ir trabalhar'],ans:2,exp:'Come home = chegar a casa!'],
      ]},

      {id:'l0ii', title:'Weather & Nature Vocabulary', titlePt:'Vocabulário do Tempo e Natureza', icon:'🌤️', xp:15, learn:{
        explanation:{
          en:'Weather vocabulary helps you describe the day. Key words: sunny (ensolarado), cloudy (nublado), rainy (chuvoso), windy (ventoso), hot (quente), cold (frio), warm (morno/quente), cool (fresco), storm (tempestade), flood (inundação). In Mozambique: "It\'s hot and sunny in October." "It rains a lot in January."',
          pt:'O vocabulário do tempo ajuda-te a descrever o dia. Palavras-chave: sunny (ensolarado), cloudy (nublado), rainy (chuvoso), windy (ventoso), hot (quente), cold (frio), warm (morno/quente), cool (fresco), storm (tempestade), flood (inundação). Em Moçambique: "It\'s hot and sunny in October." "It rains a lot in January."'
        },
        examples:[
          {en:'It\'s hot and sunny today in Maputo.', pt:'Está quente e ensolarado hoje em Maputo.'},
          {en:'It rains a lot in January.', pt:'Chove muito em Janeiro.'},
          {en:'It\'s very windy — close the windows!', pt:'Está muito ventoso — fecha as janelas!'},
          {en:'Bring an umbrella — it\'s cloudy!', pt:'Traz um guarda-chuva — está nublado!'},
          {en:'There was a big storm last night.', pt:'Houve uma tempestade grande ontem à noite.'},
        ],
        practice:[
          {q:'"Ensolarado" in English is:', opts:['rainy','cloudy','sunny','windy'], ans:2, exp:'Sunny = ensolarado! ☀️'},
          {q:'What do you use when it rains?', opts:['sunglasses','jacket','umbrella','hat'], ans:2, exp:'An umbrella keeps you dry in the rain!'},
        ],
      }, qs:[
        {q:'"Chuvoso" in English is:',opts:['sunny','cloudy','rainy','windy'],ans:2,exp:'Rainy = chuvoso! 🌧️'},
        {q:'"It\'s ___ today." (the sun is shining)',opts:['rainy','cloudy','windy','sunny'],ans:3,exp:'"It\'s sunny today." ☀️'},
        {q:'"Frio" in English is:',opts:['hot','warm','cold','cool'],ans:2,exp:'Cold = frio! ❄️'},
        {q:'"Tempestade" in English is:',opts:['flood','storm','rain','wind'],ans:1,exp:'Storm = tempestade! ⛈️'},
        {q:'"Bring an umbrella — it\'s ___!"',opts:['hot','sunny','rainy','cool'],ans:2,exp:'"It\'s rainy!" — you need an umbrella for rain!'},
        {q:'"It\'s ___ in Maputo in October." (very warm)',opts:['cold','freezing','snowy','hot'],ans:3,exp:'"It\'s HOT in Maputo in October!" 🌡️'},
      ]},

    ]
  }
];
