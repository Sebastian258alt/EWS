// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit6.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2f
// Part of UNITS_A2 — Prepositions of Time & Place

const UNITS_A2_UNIT6 = [
  {
    id:'u2f', cefr:'A2', title:'Prepositions', titlePt:'Preposições',
    desc:'Master in, on, at and more — the small words that matter 🧭',
    descPt:'Domina in, on, at e mais — as pequenas palavras que fazem a diferença 🧭',
    color:'#3d5afe', icon:'🧭', premium:false,
    lessons:[

      {id:'l2f1', title:'In, On, At (Time)', titlePt:'In, On, At (Tempo)', icon:'🕐', xp:20, learn:{
        explanation:{
          en:'Use "in" for months, years, and long periods: "in July", "in 2024", "in the morning". Use "on" for days and dates: "on Monday", "on my birthday". Use "at" for exact clock times and a few fixed expressions: "at 7pm", "at night", "at Christmas".',
          pt:'Usa "in" para meses, anos e períodos longos: "in July", "in 2024", "in the morning". Usa "on" para dias e datas: "on Monday", "on my birthday". Usa "at" para horas exactas e algumas expressões fixas: "at 7pm", "at night", "at Christmas".'
        },
        examples:[
          {en:'I was born in 2005.', pt:'Nasci em 2005.'},
          {en:'We have class on Tuesdays.', pt:'Temos aula às terças-feiras.'},
          {en:'The bus leaves at 6am.', pt:'O autocarro sai às 6 da manhã.'},
        ],
        practice:[
          {q:'"I go to church ___ Sundays."', opts:['in','on','at','for'], ans:1, exp:'Days of the week use "on": on Sundays.'},
          {q:'"The shop opens ___ 8am."', opts:['in','on','at','since'], ans:2, exp:'Exact clock times use "at": at 8am.'},
        ],
      }, qs:[
        {q:'"She was born ___ March."',opts:['in','on','at','since'],ans:0,exp:'Months use "in": in March.'},
        {q:'"The meeting is ___ Friday."',opts:['in','on','at','for'],ans:1,exp:'Days use "on": on Friday.'},
        {q:'"I always feel sleepy ___ night."',opts:['in','on','at','since'],ans:2,exp:'"At night" is a fixed expression with "at".'},
        {q:'"We celebrate Christmas ___ December."',opts:['in','on','at','for'],ans:0,exp:'Months use "in": in December.'},
        {q:'"The train arrives ___ 9:15."',opts:['in','on','at','during'],ans:2,exp:'Exact clock time uses "at": at 9:15.'},
      ]},

      {id:'l2f2', title:'In, On, At (Place)', titlePt:'In, On, At (Lugar)', icon:'📍', xp:20, learn:{
        explanation:{
          en:'Use "in" for enclosed spaces (rooms, cities, countries): "in Maputo", "in the classroom". Use "on" for surfaces: "on the table", "on the wall". Use "at" for specific points or addresses: "at the bus stop", "at 25 Avenida Julius Nyerere".',
          pt:'Usa "in" para espaços fechados (salas, cidades, países): "in Maputo", "in the classroom". Usa "on" para superfícies: "on the table", "on the wall". Usa "at" para pontos específicos ou moradas: "at the bus stop", "at 25 Avenida Julius Nyerere".'
        },
        examples:[
          {en:'My cousin lives in Beira.', pt:'A minha prima mora na Beira.'},
          {en:'The keys are on the table.', pt:'As chaves estão na mesa.'},
          {en:'I\'ll meet you at the market.', pt:'Encontro-te no mercado.'},
        ],
        practice:[
          {q:'"The picture is ___ the wall."', opts:['in','on','at','to'], ans:1, exp:'Surfaces use "on": on the wall.'},
          {q:'"I live ___ Matola."', opts:['in','on','at','for'], ans:0, exp:'Cities/enclosed areas use "in": in Matola.'},
        ],
      }, qs:[
        {q:'"She is waiting ___ the bus stop."',opts:['in','on','at','to'],ans:2,exp:'Specific point → "at": at the bus stop.'},
        {q:'"There is a book ___ the desk."',opts:['in','on','at','for'],ans:1,exp:'Surface → "on": on the desk.'},
        {q:'"He studies ___ Universidade Eduardo Mondlane."',opts:['in','on','at','to'],ans:2,exp:'Named institution/specific place → "at": at UEM.'},
        {q:'"They live ___ Mozambique."',opts:['in','on','at','to'],ans:0,exp:'Country → "in": in Mozambique.'},
        {q:'"Write your name ___ the top of the page."',opts:['in','on','at','for'],ans:1,exp:'Surface/position on a page → "on": on the top.'},
      ]},

      {id:'l2f3', title:'Prepositions of Movement', titlePt:'Preposições de Movimento', icon:'🚶', xp:20, learn:{
        explanation:{
          en:'Prepositions of movement show direction: "to" (destination) — "I\'m going to school." "into" (entering a space) — "She walked into the room." "onto" (moving onto a surface) — "The cat jumped onto the table." "through" (passing inside something) — "We walked through the market."',
          pt:'As preposições de movimento mostram direção: "to" (destino) — "I\'m going to school." "into" (entrar num espaço) — "She walked into the room." "onto" (mover para uma superfície) — "The cat jumped onto the table." "through" (passar por dentro de algo) — "We walked through the market."'
        },
        examples:[
          {en:'We drove to Xai-Xai for the weekend.', pt:'Fomos de carro a Xai-Xai no fim de semana.'},
          {en:'He ran into the house when it started raining.', pt:'Ele correu para dentro de casa quando começou a chover.'},
          {en:'The children walked through the park.', pt:'As crianças caminharam pelo parque.'},
        ],
        practice:[
          {q:'"She jumped ___ the swimming pool."', opts:['to','into','onto','through'], ans:1, exp:'Entering a space (going inside) = "into": jumped into the pool.'},
          {q:'"We walked ___ the tunnel."', opts:['to','into','onto','through'], ans:3, exp:'Passing inside/across = "through": walked through the tunnel.'},
        ],
      }, qs:[
        {q:'"He climbed ___ the roof to fix it."',opts:['to','into','onto','through'],ans:2,exp:'Moving onto a surface = "onto": climbed onto the roof.'},
        {q:'"I\'m driving ___ Chimoio tomorrow."',opts:['to','into','onto','through'],ans:0,exp:'Destination = "to": driving to Chimoio.'},
        {q:'"The thief ran ___ the crowd and disappeared."',opts:['to','into','onto','through'],ans:3,exp:'Passing through a group/space = "through": ran through the crowd.'},
        {q:'"She walked ___ the classroom and sat down."',opts:['to','into','onto','through'],ans:1,exp:'Entering an enclosed space = "into": walked into the classroom.'},
        {q:'"Put the bag ___ the shelf, please."',opts:['to','into','onto','through'],ans:2,exp:'Placing something on a surface = "onto": put it onto the shelf.'},
      ]},

      {id:'l2f4', title:'Common Preposition Mistakes', titlePt:'Erros Comuns com Preposições', icon:'⚠️', xp:25, learn:{
        explanation:{
          en:'Common mistakes: say "married TO someone" (not "married with"). Say "good AT something" (not "good in"). Say "depend ON something" (not "depend of"). Say "interested IN something" (not "interested on"). These fixed combinations must be memorised individually.',
          pt:'Erros comuns: diz-se "married TO someone" (não "married with"). Diz-se "good AT something" (não "good in"). Diz-se "depend ON something" (não "depend of"). Diz-se "interested IN something" (não "interested on"). Estas combinações fixas têm de ser memorizadas uma a uma.'
        },
        examples:[
          {en:'She is married to a doctor.', pt:'Ela é casada com um médico.'},
          {en:'I\'m good at football, but bad at maths.', pt:'Sou bom a futebol, mas mau a matemática.'},
          {en:'It depends on the weather.', pt:'Depende do tempo.'},
        ],
        practice:[
          {q:'"He is very good ___ chess."', opts:['in','at','of','with'], ans:1, exp:'Good AT something — fixed preposition.'},
          {q:'"I am interested ___ learning Chinese."', opts:['on','of','in','for'], ans:2, exp:'Interested IN something — fixed preposition.'},
        ],
      }, qs:[
        {q:'"She is married ___ my brother."',opts:['with','to','of','for'],ans:1,exp:'Married TO someone — a common fixed expression.'},
        {q:'"It depends ___ how much money we have."',opts:['of','on','in','for'],ans:1,exp:'Depend ON something.'},
        {q:'"I\'m not very good ___ cooking."',opts:['in','on','at','for'],ans:2,exp:'Good AT (a skill).'},
        {q:'"Are you interested ___ music?"',opts:['on','of','for','in'],ans:3,exp:'Interested IN something.'},
        {q:'"He is afraid ___ spiders."',opts:['from','of','with','at'],ans:1,exp:'Afraid OF something — fixed preposition.'},
      ]},

      {id:'l2f5', title:'Prepositions Review', titlePt:'Revisão das Preposições', icon:'🧠', xp:25, learn:{
        explanation:{
          en:'Quick review: Time → "in" (months/years), "on" (days/dates), "at" (clock times). Place → "in" (enclosed spaces), "on" (surfaces), "at" (specific points). Movement → "to" (destination), "into"/"onto" (entering), "through" (passing inside). Some verbs/adjectives always take one fixed preposition: married TO, good AT, afraid OF.',
          pt:'Revisão rápida: Tempo → "in" (meses/anos), "on" (dias/datas), "at" (horas). Lugar → "in" (espaços fechados), "on" (superfícies), "at" (pontos específicos). Movimento → "to" (destino), "into"/"onto" (entrar), "through" (passar por dentro). Alguns verbos/adjectivos têm sempre uma preposição fixa: married TO, good AT, afraid OF.'
        },
        examples:[
          {en:'We arrived at the hotel at 3pm on Saturday.', pt:'Chegámos ao hotel às 15h de sábado.'},
          {en:'She walked into the office and sat at her desk.', pt:'Ela entrou no escritório e sentou-se na sua secretária.'},
          {en:'He is good at English and interested in history.', pt:'Ele é bom a inglês e interessado em história.'},
        ],
        practice:[
          {q:'"I\'ll see you ___ 5pm ___ Friday."', opts:['at / on','in / at','on / in','at / in'], ans:0, exp:'Exact time → at 5pm. Day → on Friday.'},
          {q:'"The cat jumped ___ the sofa and fell asleep ___ it."', opts:['onto / on','into / at','to / in','through / on'], ans:0, exp:'Movement onto surface → onto. Position on surface → on.'},
        ],
      }, qs:[
        {q:'"The concert starts ___ 8pm ___ Saturday night."',opts:['at / on','in / at','on / in','at / in'],ans:0,exp:'Clock time → at 8pm. Day → on Saturday.'},
        {q:'"She lives ___ Pemba ___ Avenida Marginal."',opts:['at / in','in / at','on / to','in / on'],ans:1,exp:'City → in Pemba. Specific address point → at Avenida Marginal.'},
        {q:'"He walked ___ the shop to buy bread."',opts:['into','onto','at','on'],ans:0,exp:'Entering an enclosed space → into the shop.'},
        {q:'"I am very interested ___ African history."',opts:['on','at','in','for'],ans:2,exp:'Interested IN — fixed preposition.'},
        {q:'"Put your bag ___ the chair, not ___ the floor."',opts:['onto / on','into / at','to / in','on / onto'],ans:0,exp:'Movement onto a surface → onto the chair. Static surface → on the floor.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT6);
