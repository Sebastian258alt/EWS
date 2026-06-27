// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit8.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0h — Food & Drink
// Part of UNITS_A0

const UNITS_A0_UNIT8 = [
  {
    id:'u0h', cefr:'A0', title:'Food & Drink', titlePt:'Comida e Bebida',
    desc:'Fruits, vegetables, meals, drinks, and how to order food 🍎',
    descPt:'Frutas, legumes, refeições, bebidas e como pedir comida 🍎',
    color:'#2e7d32', icon:'🍽️', premium:false,
    lessons:[

      {id:'l0zf', title:'Fruits & Vegetables', titlePt:'Frutas e Legumes', icon:'🍌', xp:20, learn:{
        explanation:{
          en:'Fruits and vegetables are healthy foods. Common fruits: apple, banana, orange, mango, pineapple. Common vegetables: tomato, potato, onion, carrot, lettuce. In English, we say "I eat an apple" or "I like carrots." Remember to use a/an before singular nouns: an apple, a banana.',
          pt:'As frutas e os legumes são alimentos saudáveis. Frutas comuns: apple (maçã), banana, orange (laranja), mango (manga), pineapple (ananás). Legumes comuns: tomato (tomate), potato (batata), onion (cebola), carrot (cenoura), lettuce (alface). Em inglês, dizemos "I eat an apple" ou "I like carrots." Lembra-te de usar a/an antes de nomes singulares: an apple, a banana.'
        },
        examples:[
          {en:'I eat an apple every day.', pt:'Eu como uma maçã todos os dias.'},
          {en:'She likes bananas and oranges.', pt:'Ela gosta de bananas e laranjas.'},
          {en:'Tomatoes are red or yellow.', pt:'Os tomates são vermelhos ou amarelos.'},
          {en:'We have mangoes in our garden.', pt:'Nós temos mangas no nosso jardim.'},
          {en:'Carrots are good for your eyes.', pt:'As cenouras são boas para os olhos.'},
        ],
        practice:[
          {q:'Which is a fruit?', opts:['potato','carrot','banana','onion'], ans:2, exp:'Banana is a fruit! 🍌 The others are vegetables.'},
          {q:'Complete: "I eat ___ orange."', opts:['a','an','the','any'], ans:1, exp:'"An orange" — because orange starts with a vowel sound.'},
        ],
      }, qs:[
        {q:'Which is a vegetable?',opts:['apple','mango','lettuce','banana'],ans:2,exp:'Lettuce (alface) is a vegetable! The others are fruits.'},
        {q:'"I like ___." (plural of apple)',opts:['apple','apples','an apple','the apple'],ans:1,exp:'"I like apples" — use plural for general likes.'},
        {q:'A pineapple is a:',opts:['vegetable','fruit','drink','meat'],ans:1,exp:'Pineapple (ananás) is a fruit! 🍍'},
        {q:'What colour is a tomato?',opts:['blue','green','red','yellow'],ans:2,exp:'Tomatoes are usually red! 🍅'},
        {q:'"Potato" in Portuguese is:',opts:['batata','cenoura','cebola','alface'],ans:0,exp:'Potato = batata! Very common in Mozambique.'},
        {q:'Complete: "She eats ___ onion."',opts:['a','an','the','any'],ans:0,exp:'"An onion" — but "a onion" is wrong; "an" before vowel sound. Actually "onion" starts with vowel sound, so "an onion". Correct answer is "an".'},
        {q:'Which is NOT a fruit?',opts:['mango','carrot','pineapple','banana'],ans:1,exp:'Carrot (cenoura) is a vegetable, not a fruit!'},
      ]},

      {id:'l0zg', title:'Meals — Breakfast, Lunch, Dinner', titlePt:'Refeições — Pequeno-almoço, Almoço, Jantar', icon:'🥣', xp:20, learn:{
        explanation:{
          en:'We eat three main meals a day: breakfast in the morning, lunch around midday, and dinner in the evening. In English, we say "I have breakfast at 7 o\'clock." For lunch and dinner, we also use "have" or "eat". Some people have a snack between meals.',
          pt:'Fazemos três refeições principais por dia: breakfast (pequeno-almoço) de manhã, lunch (almoço) por volta do meio-dia, e dinner (jantar) ao fim da tarde/noite. Em inglês, dizemos "I have breakfast at 7 o\'clock." Para almoço e jantar, também usamos "have" ou "eat". Algumas pessoas fazem um lanche entre as refeições.'
        },
        examples:[
          {en:'I have breakfast at 7 am.', pt:'Eu tomo o pequeno-almoço às 7 da manhã.'},
          {en:'We eat lunch at school.', pt:'Nós almoçamos na escola.'},
          {en:'Dinner is usually at 8 pm.', pt:'O jantar é normalmente às 8 da noite.'},
          {en:'For breakfast, I eat bread and fruit.', pt:'Ao pequeno-almoço, como pão e fruta.'},
          {en:'Do you like fish for dinner?', pt:'Gostas de peixe ao jantar?'},
        ],
        practice:[
          {q:'What meal do you eat in the morning?', opts:['lunch','dinner','breakfast','snack'], ans:2, exp:'Breakfast = pequeno-almoço, in the morning!'},
          {q:'Complete: "I have ___ at 12 pm."', opts:['breakfast','lunch','dinner','snack'], ans:1, exp:'Lunch is around midday (12 pm)!'},
        ],
      }, qs:[
        {q:'What meal do you eat in the evening?',opts:['breakfast','lunch','dinner','snack'],ans:2,exp:'Dinner = jantar, in the evening! 🌙'},
        {q:'"I have breakfast at 7 ___."',opts:['am','pm','night','noon'],ans:0,exp:'7 am = 7 da manhã! Breakfast is in the morning.'},
        {q:'Lunch is usually eaten:',opts:['in the morning','at midday','in the evening','at night'],ans:1,exp:'Lunch = almoço, at midday (meio-dia)!'},
        {q:'Which meal is the evening meal?',opts:['breakfast','lunch','dinner','snack'],ans:2,exp:'Dinner is the evening meal! 🍽️'},
        {q:'"I eat ___ at school." (lunch)',opts:['breakfast','lunch','dinner','snack'],ans:1,exp:'"I eat lunch at school." — almoço na escola.'},
        {q:'For breakfast, I eat:',opts:['fish','rice','bread','soup'],ans:2,exp:'Bread (pão) is common for breakfast! 🥖'},
        {q:'Complete: "We have ___ at 8 pm."',opts:['breakfast','lunch','dinner','snack'],ans:2,exp:'8 pm is evening — dinner time! 🌃'},
      ]},

      {id:'l0zh', title:'Drinks — Water, Juice, Tea, Coffee', titlePt:'Bebidas — Água, Sumo, Chá, Café', icon:'🥤', xp:20, learn:{
        explanation:{
          en:'Common drinks are water (água), juice (sumo), tea (chá), coffee (café), milk (leite), and soda (refrigerante). We say "I drink water" or "Would you like some juice?" Use "some" for uncountable drinks (water, juice) and "a glass of" or "a cup of" for quantities.',
          pt:'Bebidas comuns são water (água), juice (sumo), tea (chá), coffee (café), milk (leite) e soda (refrigerante). Dizemos "I drink water" ou "Would you like some juice?" Usa "some" para bebidas incontáveis (water, juice) e "a glass of" ou "a cup of" para quantidades.'
        },
        examples:[
          {en:'I drink water every day.', pt:'Eu bebo água todos os dias.'},
          {en:'Would you like some tea?', pt:'Queres um pouco de chá?'},
          {en:'She drinks coffee in the morning.', pt:'Ela bebe café de manhã.'},
          {en:'Milk is good for children.', pt:'O leite é bom para as crianças.'},
          {en:'I prefer juice to soda.', pt:'Eu prefiro sumo a refrigerante.'},
        ],
        practice:[
          {q:'Which is a drink?', opts:['bread','water','rice','apple'], ans:1, exp:'Water is a drink! 💧 The others are food.'},
          {q:'Complete: "I drink ___ glass of milk."', opts:['a','an','some','any'], ans:0, exp:'"A glass of milk" — glass is singular countable, so "a".'},
        ],
      }, qs:[
        {q:'What do you drink in the morning?',opts:['water','coffee','juice','all of these'],ans:3,exp:'All of these are common morning drinks! ☕🥤💧'},
        {q:'"Tea" in Portuguese is:',opts:['café','chá','leite','sumo'],ans:1,exp:'Tea = chá! 🍵'},
        {q:'Which drink is made from fruit?',opts:['coffee','tea','juice','milk'],ans:2,exp:'Juice (sumo) is made from fruit! 🍊'},
        {q:'"I drink milk." Milk is:',opts:['a solid','a drink','a fruit','a vegetable'],ans:1,exp:'Milk is a drink (bebida)! 🥛'},
        {q:'Complete: "Would you like ___ water?"',opts:['a','an','some','any'],ans:2,exp:'"Some water" — for uncountable drinks.'},
        {q:'Coffee is a popular drink in:',opts:['the morning','the evening','the afternoon','night'],ans:0,exp:'Coffee is often drunk in the morning! ☕'},
        {q:'"Soda" in Portuguese is:',opts:['sumo','refrigerante','chá','café'],ans:1,exp:'Soda = refrigerante (refrigerante)! 🥤'},
      ]},

      {id:'l0zi', title:'Ordering Food', titlePt:'Pedir Comida', icon:'🍕', xp:20, learn:{
        explanation:{
          en:'When you are in a restaurant or café, you need to order. Common phrases: "I would like..." (Eu gostaria de...), "Can I have...?" (Posso ter...?), "How much is...?" (Quanto custa...?). The waiter may ask: "What would you like?" or "Are you ready to order?"',
          pt:'Quando estás num restaurante ou café, precisas de pedir. Frases comuns: "I would like..." (Eu gostaria de...), "Can I have...?" (Posso ter...?), "How much is...?" (Quanto custa...?). O empregado pode perguntar: "What would you like?" ou "Are you ready to order?"'
        },
        examples:[
          {en:'I would like a pizza, please.', pt:'Eu gostaria de uma pizza, por favor.'},
          {en:'Can I have a glass of water?', pt:'Posso ter um copo de água?'},
          {en:'How much is the fish?', pt:'Quanto custa o peixe?'},
          {en:'Waiter: "Are you ready to order?" — Customer: "Yes, I am."', pt:'Empregado: "Está pronto para pedir?" — Cliente: "Sim, estou."'},
          {en:'I would like the chicken with rice.', pt:'Eu gostaria do frango com arroz.'},
        ],
        practice:[
          {q:'How do you politely ask for something?', opts:['I want...','I would like...','Give me...','I take...'], ans:1, exp:'"I would like..." is polite (Eu gostaria de...).'},
          {q:'Complete: "___ much is the salad?"', opts:['How','What','Which','Who'], ans:0, exp:'"How much is...?" asks about price.'},
        ],
      }, qs:[
        {q:'"I would like a coffee." means:',opts:['I am drinking coffee','I want a coffee','I don\'t like coffee','I have coffee'],ans:1,exp:'"I would like" = I want (politely) – Eu quero/gostaria de.'},
        {q:'What does "How much?" ask about?',opts:['price','time','place','person'],ans:0,exp:'"How much?" asks about price (quanto custa?).'},
        {q:'Complete: "Can I have ___ water?"',opts:['a','an','some','any'],ans:2,exp:'"Some water" – asking for an amount.'},
        {q:'The person who serves food in a restaurant is a:',opts:['cook','waiter','chef','cashier'],ans:1,exp:'Waiter = empregado de mesa (garçom).'},
        {q:'"Are you ready to order?" is a question from:',opts:['the customer','the waiter','the cook','the manager'],ans:1,exp:'The waiter asks if you are ready to order.'},
        {q:'How do you ask for the bill?',opts:['How much is?','Can I have the bill?','I would like to eat.','What is this?'],ans:1,exp:'"Can I have the bill?" = Posso ter a conta? (common in restaurants)'},
        {q:'"I would like ___ pizza."',opts:['a','an','some','any'],ans:0,exp:'"A pizza" – pizza is singular countable.'},
      ]},

      {id:'l0zj', title:'Likes and Dislikes', titlePt:'Gostos e Não Gostos', icon:'😋', xp:20, learn:{
        explanation:{
          en:'To say you like something: "I like..." or "I love..." (stronger). To say you don\'t like: "I don\'t like..." or "I hate..." (stronger). In questions: "Do you like...?" For food, we often use plural nouns: "I like bananas." (in general).',
          pt:'Para dizer que gostas de algo: "I like..." ou "I love..." (mais forte). Para dizer que não gostas: "I don\'t like..." ou "I hate..." (mais forte). Em perguntas: "Do you like...?" Para comida, usamos frequentemente nomes no plural: "I like bananas." (em geral).'
        },
        examples:[
          {en:'I like pizza. It is delicious!', pt:'Eu gosto de pizza. É deliciosa!'},
          {en:'I don\'t like onions.', pt:'Eu não gosto de cebolas.'},
          {en:'She loves chocolate.', pt:'Ela adora chocolate.'},
          {en:'Do you like fish? — Yes, I do. / No, I don\'t.', pt:'Gostas de peixe? — Sim, gosto. / Não, não gosto.'},
          {en:'We hate cold soup.', pt:'Nós odiamos sopa fria.'},
        ],
        practice:[
          {q:'How do you say you don\'t like something?', opts:['I like','I love','I don\'t like','I want'], ans:2, exp:'"I don\'t like" = não gosto.'},
          {q:'Complete: "___ you like carrots?"', opts:['Do','Are','Is','Does'], ans:0, exp:'"Do you like...?" – question with "do".'},
        ],
      }, qs:[
        {q:'"I love ice cream" means:',opts:['I like it a little','I like it very much','I don\'t like it','I hate it'],ans:1,exp:'"Love" is stronger than "like" – adoro (gosto muito).'},
        {q:'What is the negative of "I like"?',opts:['I not like','I don\'t like','I no like','I am not like'],ans:1,exp:'"I don\'t like" – the correct negative.'},
        {q:'Question: "Do you like apples?" – Answer: "Yes, I ___."',opts:['like','do','am','have'],ans:1,exp:'Short answer: "Yes, I do."'},
        {q:'"I hate broccoli" means:',opts:['I like broccoli','I don\'t like broccoli','I love broccoli','I eat broccoli'],ans:1,exp:'"Hate" = odiar – very strong dislike.'},
        {q:'For general likes of food, we often use the:',opts:['singular','plural','gerund','infinitive'],ans:1,exp:'We use plural: "I like apples." (general)'},
        {q:'Complete: "She ___ like coffee."',opts:['don\'t','doesn\'t','not','isn\'t'],ans:1,exp:'"She doesn\'t like" – third person singular.'},
        {q:'"Do you like oranges?" is asking about:',opts:['your job','your preference','your name','your age'],ans:1,exp:'It\'s asking about your preference (gosto).'},
      ]},

    ]
  }
];

// Auto-register into global registry
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT8);
