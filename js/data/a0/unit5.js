// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit5.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0e — Food, Drinks, Clothes & Transport
// Part of UNITS_A0

const UNITS_A0_UNIT5 = [
  {
    id:'u0e', cefr:'A0', title:'Food, Drinks, Clothes & Transport', titlePt:'Comida, Bebidas, Roupas e Transporte',
    desc:'Essential vocabulary for everyday life 🍽️',
    descPt:'Vocabulário essencial para o dia-a-dia 🍽️',
    color:'#e53935', icon:'🍽️', premium:false,
    lessons:[

      {id:'l0z', title:'Food Vocabulary', titlePt:'Vocabulário de Comida', icon:'🍕', xp:20, learn:{
        explanation:{
          en:'Food is one of the most useful vocabulary topics! Key food words: rice (arroz), bread (pão), meat (carne), chicken (frango), fish (peixe), egg (ovo), vegetable (legume), fruit (fruta), soup (sopa), salad (salada). We say "I like ___" or "I don\'t like ___" to talk about food preferences.',
          pt:'A comida é um dos temas de vocabulário mais úteis! Palavras de comida importantes: rice (arroz), bread (pão), meat (carne), chicken (frango), fish (peixe), egg (ovo), vegetable (legume), fruit (fruta), soup (sopa), salad (salada). Dizemos "I like ___" ou "I don\'t like ___" para falar de preferências alimentares.'
        },
        examples:[
          {en:'I like rice and chicken.', pt:'Eu gosto de arroz e frango.'},
          {en:'She doesn\'t eat meat. She eats fish.', pt:'Ela não come carne. Come peixe.'},
          {en:'Fruits and vegetables are healthy.', pt:'As frutas e os legumes são saudáveis.'},
          {en:'Can I have some bread, please?', pt:'Posso ter um pouco de pão, por favor?'},
          {en:'This soup is delicious!', pt:'Esta sopa é deliciosa!'},
        ],
        practice:[
          {q:'"Frango" in English is:', opts:['fish','meat','chicken','egg'], ans:2, exp:'Chicken = frango!'},
          {q:'"I like ___" — what comes after?', opts:['a verb','a noun (food)','a question','a number'], ans:1, exp:'"I like rice." — "like" is followed by a noun!'},
        ],
      }, qs:[
        {q:'"Arroz" in English is:',opts:['bread','rice','meat','soup'],ans:1,exp:'Rice = arroz! 🍚'},
        {q:'"Peixe" in English is:',opts:['chicken','beef','fish','pork'],ans:2,exp:'Fish = peixe! 🐟'},
        {q:'"I ___ like vegetables." (negative)',opts:['no','not','don\'t','doesn\'t'],ans:2,exp:'"I don\'t like vegetables." — use don\'t for negative with I/you/we/they!'},
        {q:'"Pão" in English is:',opts:['cake','bread','rice','egg'],ans:1,exp:'Bread = pão! 🍞'},
        {q:'Which is a FRUIT?',opts:['carrot','onion','banana','potato'],ans:2,exp:'Banana is a fruit! 🍌'},
        {q:'"Ovo" in English is:',opts:['oil','egg','ear','ice'],ans:1,exp:'Egg = ovo! 🥚'},
        {q:'"This soup is ___!" (very good)',opts:['horrible','cold','delicious','raw'],ans:2,exp:'"This soup is delicious!" = Esta sopa é deliciosa!'},
      ]},

      {id:'l0aa', title:'Drinks & Beverages', titlePt:'Bebidas', icon:'🥤', xp:15, learn:{
        explanation:{
          en:'Key drink vocabulary: water (água), juice (sumo), milk (leite), tea (chá), coffee (café), soda/fizzy drink (refrigerante), beer (cerveja). To ask for a drink, say "Can I have a ___?" or "I would like a ___." To ask what someone wants: "What would you like to drink?"',
          pt:'Vocabulário de bebidas importantes: water (água), juice (sumo), milk (leite), tea (chá), coffee (café), soda/fizzy drink (refrigerante), beer (cerveja). Para pedir uma bebida, diz "Can I have a ___?" ou "I would like a ___." Para perguntar o que alguém quer: "What would you like to drink?"'
        },
        examples:[
          {en:'Can I have a glass of water, please?', pt:'Posso ter um copo de água, por favor?'},
          {en:'I drink coffee every morning.', pt:'Bebo café todas as manhãs.'},
          {en:'She prefers juice to soda.', pt:'Ela prefere sumo a refrigerante.'},
          {en:'What would you like to drink?', pt:'O que gostaria de beber?'},
          {en:'I\'d like a cold beer, please.', pt:'Queria uma cerveja fria, por favor.'},
        ],
        practice:[
          {q:'"Água" in English is:', opts:['juice','water','milk','beer'], ans:1, exp:'Water = água! The most important drink.'},
          {q:'How do you ask for a drink politely?', opts:['Give me water!','Water, now!','Can I have water, please?','I want water.'], ans:2, exp:'"Can I have water, please?" — polite and correct!'},
        ],
      }, qs:[
        {q:'"Leite" in English is:',opts:['water','tea','milk','juice'],ans:2,exp:'Milk = leite! 🥛'},
        {q:'"Café" in English is:',opts:['tea','coffee','juice','milk'],ans:1,exp:'Coffee = café! ☕'},
        {q:'How do you ask what someone wants to drink?',opts:['What do you drink?','What would you like to drink?','You want drink?','Drink what?'],ans:1,exp:'"What would you like to drink?" — polite question!'},
        {q:'"Refrigerante" in English is:',opts:['water','soda/fizzy drink','beer','tea'],ans:1,exp:'Soda or fizzy drink = refrigerante!'},
        {q:'"Can I have a glass of ___?" (asking for water)',opts:['beer','milk','water','juice'],ans:2,exp:'"Can I have a glass of water?" — classic polite request!'},
        {q:'"Sumo" in English is:',opts:['juice','water','milk','soda'],ans:0,exp:'Juice = sumo! 🍊'},
      ]},

      {id:'l0bb', title:'Clothes & Accessories', titlePt:'Roupas e Acessórios', icon:'👗', xp:20, learn:{
        explanation:{
          en:'Clothes vocabulary: shirt (camisa), t-shirt (t-shirt), trousers/pants (calças), dress (vestido), skirt (saia), shoes (sapatos), socks (meias), jacket (casaco), hat (chapéu), tie (gravata). To talk about clothes: "She is wearing a red dress." "I wear a uniform to school."',
          pt:'Vocabulário de roupas: shirt (camisa), t-shirt (t-shirt), trousers/pants (calças), dress (vestido), skirt (saia), shoes (sapatos), socks (meias), jacket (casaco), hat (chapéu), tie (gravata). Para falar de roupas: "She is wearing a red dress." "I wear a uniform to school."'
        },
        examples:[
          {en:'He is wearing a blue shirt.', pt:'Ele está a usar uma camisa azul.'},
          {en:'I need new shoes.', pt:'Preciso de sapatos novos.'},
          {en:'She is wearing a beautiful dress.', pt:'Ela está a usar um vestido bonito.'},
          {en:'Don\'t forget your jacket — it\'s cold!', pt:'Não te esqueças do casaco — está frio!'},
          {en:'I wear a school uniform every day.', pt:'Uso uniforme escolar todos os dias.'},
        ],
        practice:[
          {q:'"Calças" in English is:', opts:['dress','skirt','trousers','shirt'], ans:2, exp:'Trousers (or pants) = calças!'},
          {q:'What do you wear on your feet?', opts:['hat','tie','socks and shoes','jacket'], ans:2, exp:'Socks and shoes go on your feet!'},
        ],
      }, qs:[
        {q:'"Camisa" in English is:',opts:['skirt','dress','shirt','jacket'],ans:2,exp:'Shirt = camisa!'},
        {q:'"She is ___ a dress." (wearing now)',opts:['wear','wore','wearing','wears'],ans:2,exp:'"She IS WEARING a dress." — use is/am/are + wearing for now!'},
        {q:'"Sapatos" in English is:',opts:['socks','shoes','sandals','boots'],ans:1,exp:'Shoes = sapatos! 👟'},
        {q:'"Chapéu" in English is:',opts:['cap','tie','hat','scarf'],ans:2,exp:'Hat = chapéu! 🎩'},
        {q:'What do you wear when it\'s cold?',opts:['t-shirt','shorts','sandals','jacket'],ans:3,exp:'Jacket (casaco) keeps you warm when it\'s cold!'},
        {q:'"Meias" in English is:',opts:['shoes','socks','sandals','skirt'],ans:1,exp:'Socks = meias!'},
        {q:'"I ___ a uniform to school."',opts:['wears','is wearing','wear','wearing'],ans:2,exp:'"I wear a uniform" — simple habit uses Simple Present!'},
      ]},

      {id:'l0cc', title:'Transport & Getting Around', titlePt:'Transporte e Deslocação', icon:'🚌', xp:20, learn:{
        explanation:{
          en:'Transport vocabulary: bus (autocarro/machimbombo), car (carro), taxi (táxi), train (comboio), plane (avião), bicycle/bike (bicicleta), motorbike (moto), boat (barco), on foot (a pé). To say how you travel: "I go to school BY bus." "I travel BY plane." "I go BY foot / on foot."',
          pt:'Vocabulário de transporte: bus (autocarro/machimbombo), car (carro), taxi (táxi), train (comboio), plane (avião), bicycle/bike (bicicleta), motorbike (moto), boat (barco), on foot (a pé). Para dizer como viaja: "I go to school BY bus." "I travel BY plane." "I go BY foot / on foot."'
        },
        examples:[
          {en:'I go to school by bus.', pt:'Vou à escola de autocarro.'},
          {en:'She travels to Beira by plane.', pt:'Ela viaja para a Beira de avião.'},
          {en:'He goes to the market on foot.', pt:'Ele vai ao mercado a pé.'},
          {en:'Can I get a taxi to the airport?', pt:'Posso apanhar um táxi para o aeroporto?'},
          {en:'In Maputo, many people use chapas.', pt:'Em Maputo, muitas pessoas usam chapas.'},
        ],
        practice:[
          {q:'How do you say you travel by bus?', opts:['I go by bus','I go in bus','I travel bus','I use to bus'], ans:0, exp:'"I go BY bus." — always use BY + transport!'},
          {q:'"Avião" in English is:', opts:['boat','train','plane','bus'], ans:2, exp:'Plane = avião! ✈️'},
        ],
      }, qs:[
        {q:'"Carro" in English is:',opts:['bus','bike','car','taxi'],ans:2,exp:'Car = carro! 🚗'},
        {q:'"I go to work ___ bus."',opts:['in','at','by','on'],ans:2,exp:'"By bus" — always use BY with transport!'},
        {q:'"Bicicleta" in English is:',opts:['motorbike','bicycle/bike','boat','car'],ans:1,exp:'Bicycle (or bike) = bicicleta! 🚲'},
        {q:'"She walks to school." This means she goes:',opts:['by car','by bus','on foot','by bike'],ans:2,exp:'Walks = on foot = a pé!'},
        {q:'"Avião" in English is:',opts:['boat','train','plane','helicopter'],ans:2,exp:'Plane = avião! ✈️'},
        {q:'"Can I get a ___ to the airport?"',opts:['bus','taxi','car','walk'],ans:1,exp:'"Can I get a taxi?" — taxis take you directly!'},
        {q:'"Barco" in English is:',opts:['plane','train','boat','bus'],ans:2,exp:'Boat = barco! ⛵'},
      ]},

      {id:'l0dd', title:'Countries & Nationalities', titlePt:'Países e Nacionalidades', icon:'🌍', xp:20, learn:{
        explanation:{
          en:'To say where someone is from: "I am FROM Mozambique." The nationality (adjectivo): "I am Mozambican." Key countries and nationalities: Mozambique → Mozambican, Portugal → Portuguese, USA → American, UK → British, South Africa → South African, Brazil → Brazilian, China → Chinese, France → French.',
          pt:'Para dizer de onde alguém é: "I am FROM Mozambique." A nacionalidade (adjectivo): "I am Mozambican." Países e nacionalidades importantes: Mozambique → Mozambican, Portugal → Portuguese, USA → American, UK → British, South Africa → South African, Brazil → Brazilian, China → Chinese, France → French.'
        },
        examples:[
          {en:'I am from Mozambique. I am Mozambican.', pt:'Eu sou de Moçambique. Eu sou moçambicano/a.'},
          {en:'She is from Portugal. She is Portuguese.', pt:'Ela é de Portugal. Ela é portuguesa.'},
          {en:'He is from Brazil. He is Brazilian.', pt:'Ele é do Brasil. Ele é brasileiro.'},
          {en:'Where are you from?', pt:'De onde és?'},
          {en:'I am from the UK. I am British.', pt:'Sou do Reino Unido. Sou britânico/a.'},
        ],
        practice:[
          {q:'The nationality of someone from Brazil is:', opts:['Brazilish','Brazilor','Brazilian','Brazili'], ans:2, exp:'Brazil → Brazilian!'},
          {q:'How do you ask where someone is from?', opts:['Where is you from?','Where are you from?','Where you from?','From where you?'], ans:1, exp:'"Where ARE you from?" — correct question form!'},
        ],
      }, qs:[
        {q:'The nationality from Portugal is:',opts:['Portugali','Portugese','Portuguese','Portugu'],ans:2,exp:'Portugal → Portuguese!'},
        {q:'"I am FROM ___." — What comes next?',opts:['a verb','a country','a number','a colour'],ans:1,exp:'"I am from MOZAMBIQUE." — from + country name!'},
        {q:'Someone from the USA is:',opts:['American','USAian','Unitedstater','Americano'],ans:0,exp:'USA → American!'},
        {q:'"Where are you ___?"',opts:['of','at','from','by'],ans:2,exp:'"Where are you FROM?" — asking about someone\'s country!'},
        {q:'Someone from South Africa is:',opts:['African','Southie','South African','Afrikan'],ans:2,exp:'South Africa → South African!'},
        {q:'"He is from China." His nationality is:',opts:['Chineese','Chinese','Chinian','Chinish'],ans:1,exp:'China → Chinese!'},
        {q:'Someone from France is:',opts:['Francese','Frenchman','French','Francian'],ans:2,exp:'France → French!'},
      ]},

    ]
  }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT5);
