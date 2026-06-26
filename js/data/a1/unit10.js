// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit10.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1f — Out & About
// Part of UNITS_A1

const UNITS_A1_UNIT10 = [
  {
    id:'u1f', cefr:'A1', title:'Out & About', titlePt:'Fora de Casa',
    desc:'Travel, eat out, shop and explore the world in English! ✈️',
    descPt:'Viaja, come fora, faz compras e explora o mundo em inglês! ✈️',
    color:'#c62828', icon:'✈️', premium:false,
    lessons:[

      {id:'l1f1', title:'At the Airport', titlePt:'No Aeroporto', icon:'✈️', xp:25, learn:{
        explanation:{
          en:'At the airport, you need to check in, find your gate, and board your flight. Key vocabulary: passport (passaporte), ticket (bilhete), boarding pass (cartão de embarque), gate (porta de embarque), flight (voo), departure (partida), arrival (chegada), customs (alfândega), luggage/baggage (bagagem). Useful questions: "Where is gate 5?" "Is this the queue for check-in?" "What time does my flight board?"',
          pt:'No aeroporto, precisas de fazer check-in, encontrar o teu gate e embarcar no teu voo. Vocabulário-chave: passport (passaporte), ticket (bilhete), boarding pass (cartão de embarque), gate (porta de embarque), flight (voo), departure (partida), arrival (chegada), customs (alfândega), luggage/baggage (bagagem). Perguntas úteis: "Where is gate 5?" "Is this the queue for check-in?" "What time does my flight board?"'
        },
        examples:[
          {en:'Can I see your passport, please?', pt:'Posso ver o seu passaporte, por favor?'},
          {en:'Your flight departs from gate 12.', pt:'O seu voo parte do gate 12.'},
          {en:'Please have your boarding pass ready.', pt:'Por favor, tenha o seu cartão de embarque pronto.'},
          {en:'How many bags are you checking in?', pt:'Quantas malas está a despachar?'},
          {en:'The flight to Beira is delayed by 30 minutes.', pt:'O voo para Beira está atrasado 30 minutos.'},
        ],
        practice:[
          {q:'What document do you need to travel internationally?', opts:['ID card','driving licence','passport','boarding pass'], ans:2, exp:'A PASSPORT is required for international travel!'},
          {q:'"Departure" means:', opts:['chegada','espera','partida','atraso'], ans:2, exp:'"Departure" = partida — when you LEAVE somewhere. Opposite: arrival (chegada)!'},
        ],
      }, qs:[
        {q:'What do you show to board a plane?',opts:['ID card','library card','boarding pass','receipt'],ans:2,exp:'You show your BOARDING PASS (cartão de embarque) to board a plane!'},
        {q:'"Arrival" means:',opts:['partida','atraso','check-in','chegada'],ans:3,exp:'"Arrival" = chegada — when you ARRIVE somewhere. Opposite: departure!'},
        {q:'"The flight is delayed." means:',opts:['the flight is on time','the flight is early','the flight is late','the flight is cancelled'],ans:2,exp:'"Delayed" = late — the flight will leave later than planned!'},
        {q:'"Where is ___ 12?" (asking for the boarding area)',opts:['room','gate','floor','lane'],ans:1,exp:'"Where is GATE 12?" — a gate is a boarding area at the airport!'},
        {q:'"Can I see your ___?" said by airport staff',opts:['phone','ticket only','passport','money'],ans:2,exp:'"Can I see your PASSPORT?" = the document for international travel!'},
        {q:'"Your luggage" means:',opts:['your passport','your boarding pass','your bags/suitcases','your ticket'],ans:2,exp:'"Luggage" = your bags and suitcases that you travel with!'},
        {q:'"The flight departs at 8am." "Departs" means:',opts:['arrives','leaves','lands','boards'],ans:1,exp:'"Departs" = LEAVES. The plane leaves at 8am!'},
      ]},

      {id:'l1f2', title:'Hotel & Accommodation', titlePt:'Hotel e Alojamento', icon:'🏨', xp:25, learn:{
        explanation:{
          en:'When staying at a hotel, you check in at reception. Key phrases: "I have a reservation." (Tenho uma reserva.) "Do you have any rooms available?" "I\'d like a single/double room." "What time is check-out?" Key vocabulary: reception (recepção), reservation/booking (reserva), single room (quarto individual), double room (quarto duplo), key (chave), floor (andar), lift/elevator (elevador), room service (serviço de quarto).',
          pt:'Quando ficas num hotel, fazes check-in na recepção. Frases-chave: "I have a reservation." (Tenho uma reserva.) "Do you have any rooms available?" "I\'d like a single/double room." "What time is check-out?" Vocabulário-chave: reception (recepção), reservation/booking (reserva), single room (quarto individual), double room (quarto duplo), key (chave), floor (andar), lift/elevator (elevador), room service (serviço de quarto).'
        },
        examples:[
          {en:'Good evening. I have a reservation under "Sebastian".', pt:'Boa noite. Tenho uma reserva em nome de "Sebastian".'},
          {en:'I\'d like a double room for two nights, please.', pt:'Gostaria de um quarto duplo por duas noites, por favor.'},
          {en:'What time is check-out?', pt:'A que horas é o check-out?'},
          {en:'Can I have the key for room 304?', pt:'Posso ter a chave do quarto 304?'},
          {en:'Is breakfast included in the price?', pt:'O pequeno-almoço está incluído no preço?'},
        ],
        practice:[
          {q:'"I have a ___ under Smith." (pre-booked)', opts:['room','key','reservation','floor'], ans:2, exp:'"I have a RESERVATION." — a reservation means you booked in advance!'},
          {q:'A "double room" has:', opts:['one bed for one person','two beds or one large bed','a kitchen','a pool'], ans:1, exp:'A DOUBLE ROOM has two beds or one large bed, for two people!'},
        ],
      }, qs:[
        {q:'"I\'d like a ___ room." (for one person only)',opts:['double','triple','single','family'],ans:2,exp:'"Single room" = quarto individual — for ONE person!'},
        {q:'At what moment do you "check in" at a hotel?',opts:['when you leave','when you pay','when you arrive and get your key','when you eat breakfast'],ans:2,exp:'You CHECK IN when you ARRIVE at the hotel and receive your key!'},
        {q:'"Is breakfast included?" means:',opts:['How much is breakfast?','Is breakfast free with the room?','Is there a restaurant?','What time is breakfast?'],ans:1,exp:'"Included" = it\'s part of the price, you don\'t pay extra for it!'},
        {q:'"What floor is my room on?" "Floor" means:',opts:['price','andar','janela','serviço'],ans:1,exp:'"Floor" = andar. "Your room is on the 3rd floor" = no 3º andar!'},
        {q:'"Reservation" means:',opts:['recepção','elevador','reserva','chave'],ans:2,exp:'"Reservation" = reserva — you booked the room in advance!'},
        {q:'"What time is check-out?" means:',opts:['What time do I arrive?','What time must I leave the room?','What time is breakfast?','What time is dinner?'],ans:1,exp:'"Check-out" = when you must leave. You return the key and pay the bill!'},
        {q:'"Can I have an extra ___?" (needing another blanket)',opts:['key','blanket','reservation','floor'],ans:1,exp:'"Can I have an extra BLANKET?" — a blanket (cobertor) keeps you warm in bed!'},
      ]},

      {id:'l1f3', title:'At a Restaurant', titlePt:'Num Restaurante', icon:'🍽️', xp:25, learn:{
        explanation:{
          en:'At a restaurant, there are specific phrases for ordering food. The waiter asks: "Are you ready to order?" "What would you like?" You say: "I\'d like the..." "Can I have...?" "I\'ll have..." The menu has: starter/appetiser (entrada), main course (prato principal), dessert (sobremesa), drinks (bebidas). To get the bill: "Can I have the bill, please?" (Pode trazer a conta, por favor?)',
          pt:'Num restaurante, há frases específicas para pedir comida. O empregado pergunta: "Are you ready to order?" "What would you like?" Tu dizes: "I\'d like the..." "Can I have...?" "I\'ll have..." O menu tem: starter/appetiser (entrada), main course (prato principal), dessert (sobremesa), drinks (bebidas). Para pedir a conta: "Can I have the bill, please?" (Pode trazer a conta, por favor?)'
        },
        examples:[
          {en:'Waiter: Are you ready to order?', pt:'Empregado: Estão prontos para pedir?'},
          {en:'I\'d like the grilled chicken, please.', pt:'Gostaria do frango grelhado, por favor.'},
          {en:'Can I have a glass of water?', pt:'Posso ter um copo de água?'},
          {en:'What do you recommend?', pt:'O que é que recomenda?'},
          {en:'Can I have the bill, please?', pt:'Pode trazer a conta, por favor?'},
        ],
        practice:[
          {q:'"Are you ready to order?" is said by:', opts:['you to the waiter','the waiter to you','the chef','the manager'], ans:1, exp:'The WAITER asks "Are you ready to order?" — they want to take your order!'},
          {q:'How do you ask for the bill?', opts:['Give me the money.','Can I have the bill, please?','Pay now!','How much?'], ans:1, exp:'"Can I have the bill, please?" = Pode trazer a conta, por favor? Always be polite!'},
        ],
      }, qs:[
        {q:'"I\'d like the fish, please." "I\'d like" means:',opts:['I don\'t want','I would like / I want','I have','I need'],ans:1,exp:'"I\'d like" = I would like — a polite way to order in a restaurant!'},
        {q:'The "main course" is:',opts:['the dessert','the drink','the first small dish','the main dish of the meal'],ans:3,exp:'"Main course" = the principal/main dish — the biggest part of the meal!'},
        {q:'"Can I have the bill?" is said:',opts:['when you arrive','when you order','when you are ready to pay','when you want water'],ans:2,exp:'You ask for the bill (conta) when you are READY TO PAY and leave!'},
        {q:'"What do you recommend?" means:',opts:['What is the price?','What is the menu?','What is the best dish here?','Is the food fresh?'],ans:2,exp:'"What do you recommend?" = What dish do you suggest? What is best?'},
        {q:'"Dessert" comes:',opts:['before the main course','after the main course','instead of the main course','at the same time as the main course'],ans:1,exp:'"Dessert" (sobremesa) comes AFTER the main course — it\'s sweet!'},
        {q:'How do you politely order food?',opts:['Give me chicken!','Chicken, now!','I\'d like the chicken, please.','Bring chicken.'],ans:2,exp:'"I\'d like the chicken, please." — polite ordering with "I\'d like" and "please"!'},
        {q:'"Are you ready to ___?" (waiter asking)',opts:['pay','eat','leave','order'],ans:3,exp:'"Are you ready to ORDER?" — the waiter wants to take your food choices!'},
      ]},

      {id:'l1f4', title:'Shopping for Clothes', titlePt:'Comprar Roupa', icon:'👗', xp:25, learn:{
        explanation:{
          en:'When shopping for clothes, you need to know sizes, colours, and prices. Key phrases: "Can I try this on?" (Posso experimentar?) "Do you have this in a bigger/smaller size?" "How much is this?" "It\'s too expensive." "I\'ll take it." Sizes: small (S), medium (M), large (L), extra large (XL). Clothes vocabulary: shirt, trousers/pants, dress, skirt, jacket, shoes, socks, belt.',
          pt:'Quando compras roupa, precisas de saber tamanhos, cores e preços. Frases-chave: "Can I try this on?" (Posso experimentar?) "Do you have this in a bigger/smaller size?" "How much is this?" "It\'s too expensive." "I\'ll take it." Tamanhos: small (S), medium (M), large (L), extra large (XL). Vocabulário de roupa: shirt, trousers/pants, dress, skirt, jacket, shoes, socks, belt.'
        },
        examples:[
          {en:'Excuse me, can I try this dress on?', pt:'Com licença, posso experimentar este vestido?'},
          {en:'Do you have this in a medium?', pt:'Tem isto no tamanho M?'},
          {en:'It\'s a bit too tight. Do you have a larger size?', pt:'Está um pouco justo. Tem num tamanho maior?'},
          {en:'How much is this shirt?', pt:'Quanto custa esta camisa?'},
          {en:'It\'s on sale — 20% off!', pt:'Está em saldo — 20% de desconto!'},
        ],
        practice:[
          {q:'"Can I try this on?" means:', opts:['Can I buy this?','Can I wear this to test the fit?','Is this my size?','Can I see this?'], ans:1, exp:'"Try on" = experimentar — you put it on to see if it fits!'},
          {q:'"It\'s too tight." means:', opts:['it\'s too big','it\'s the right size','it\'s too small/narrow','it\'s too loose'], ans:2, exp:'"Too tight" = too small/narrow — the clothes squeeze you!'},
        ],
      }, qs:[
        {q:'"Can I try this ___ please?" (test if it fits)',opts:['on','off','in','out'],ans:0,exp:'"Can I try this ON?" — try on = experimentar clothes!'],
        {q:'"Do you have this in a ___ size?" (you need bigger)',opts:['smaller','larger','tighter','shorter'],ans:1,exp:'"Do you have this in a LARGER size?" = Tem num tamanho maior?'},
        {q:'If clothes are "on sale", it means:',opts:['they are very expensive','they are discounted/cheaper','they are sold out','they are new'],ans:1,exp:'"On sale" = em saldo/promoção — the price is reduced!'],
        {q:'"How much is this?" is asking for:',opts:['size','colour','price','material'],ans:2,exp:'"How much is this?" = Quanto custa? Asking the PRICE!'},
        {q:'"I\'ll take it." means:',opts:['I\'ll think about it','I don\'t want it','I want to buy it','I\'ll try it on'],ans:2,exp:'"I\'ll take it." = Vou levá-lo. You\'ve decided to buy it!'},
        {q:'What does "M" mean on a clothes label?',opts:['Massive','Mini','Medium','Modern'],ans:2,exp:'"M" = MEDIUM — the middle size between Small (S) and Large (L)!'},
        {q:'"These trousers are too ___." (they fall down)',opts:['tight','small','loose','short'],ans:2,exp:'"Too LOOSE" = too big, they don\'t fit tightly. They might fall down!'},
      ]},

      {id:'l1f5', title:'Getting Around a City', titlePt:'Deslocar-se numa Cidade', icon:'🗺️', xp:20, learn:{
        explanation:{
          en:'When you\'re in a city, you might need to ask for and give directions. Key phrases: "Excuse me, where is...?" "Turn left/right." "Go straight." "It\'s on your left/right." "It\'s about 5 minutes on foot." "Take the bus number 3." Landmarks: roundabout (rotunda), traffic lights (semáforos), crossroads (cruzamento), bridge (ponte), corner (esquina).',
          pt:'Quando estás numa cidade, podes precisar de pedir e dar direcções. Frases-chave: "Excuse me, where is...?" "Turn left/right." "Go straight." "It\'s on your left/right." "It\'s about 5 minutes on foot." "Take the bus number 3." Pontos de referência: roundabout (rotunda), traffic lights (semáforos), crossroads (cruzamento), bridge (ponte), corner (esquina).'
        },
        examples:[
          {en:'Excuse me, where is the nearest pharmacy?', pt:'Com licença, onde fica a farmácia mais próxima?'},
          {en:'Go straight for two blocks, then turn left.', pt:'Vai em frente dois quarteirões, depois vira à esquerda.'},
          {en:'It\'s on your right, next to the bank.', pt:'Está à tua direita, ao lado do banco.'},
          {en:'Take bus number 7 to the city centre.', pt:'Apanha o autocarro número 7 para o centro da cidade.'},
          {en:'It\'s about a 10-minute walk.', pt:'É cerca de 10 minutos a pé.'},
        ],
        practice:[
          {q:'How do you politely ask for directions?', opts:['Where is the bank?','Excuse me, where is the bank?','Tell me where the bank is.','Bank, where?'], ans:1, exp:'"Excuse me, where is the bank?" — always start with "Excuse me" to be polite!'},
          {q:'"Go straight" means:', opts:['turn right','turn left','don\'t turn, continue forward','stop here'], ans:2, exp:'"Go straight" = continue forward without turning!'},
        ],
      }, qs:[
        {q:'"Turn ___." (to go to the right)',opts:['left','right','around','back'],ans:1,exp:'"Turn RIGHT." = Vira à direita!'},
        {q:'"It\'s on your ___." (it\'s to the left)',opts:['right','left','top','back'],ans:1,exp:'"It\'s on your LEFT." = Está à tua esquerda!'],
        {q:'"Go ___ for two blocks."',opts:['back','around','straight','left'],ans:2,exp:'"Go STRAIGHT for two blocks." = Vai em frente dois quarteirões!'},
        {q:'"It\'s about a 10-minute ___." (walking)',opts:['ride','drive','walk','flight'],ans:2,exp:'"10-minute WALK" = 10 minutos a pé — you walk there!'},
        {q:'"Semáforos" in English are:',opts:['roundabout','bridge','traffic lights','crossroads'],ans:2,exp:'"Semáforos" = TRAFFIC LIGHTS — the red/yellow/green lights at junctions!'},
        {q:'"Excuse me" at the start of a question shows:',opts:['confusion','politeness','anger','certainty'],ans:1,exp:'"Excuse me" = "com licença" — it\'s polite to say this before asking a stranger!'},
        {q:'"The bank is at the corner of Av. 25 de Setembro and Rua da Missão." "Corner" means:',opts:['centro','ponte','esquina/cruzamento','rotunda'],ans:2,exp:'"Corner" = esquina — where two streets meet at an angle!'},
      ]},

      {id:'l1f6', title:'Talking About the Weather', titlePt:'Falar Sobre o Tempo', icon:'🌦️', xp:20, learn:{
        explanation:{
          en:'Talking about the weather is one of the most common topics in English conversation! In Mozambique, weather is very important — rainy season (época das chuvas) vs dry season (época seca). Weather vocabulary: sunny (com sol), cloudy (nublado), rainy (chuvoso), windy (com vento), hot (quente), humid (húmido), cool (fresco). "It is..." and "It\'s..." are used for weather: "It\'s hot today." "It\'s been raining all week."',
          pt:'Falar sobre o tempo é um dos temas mais comuns numa conversa em inglês! Em Moçambique, o tempo é muito importante — época das chuvas vs época seca. Vocabulário do tempo: sunny (com sol), cloudy (nublado), rainy (chuvoso), windy (com vento), hot (quente), humid (húmido), cool (fresco). Usa "It is..." e "It\'s..." para o tempo: "It\'s hot today." "It\'s been raining all week."'
        },
        examples:[
          {en:'It\'s so hot today! Must be 35 degrees.', pt:'Está tanto calor hoje! Devem ser 35 graus.'},
          {en:'Take an umbrella — it looks like it\'s going to rain.', pt:'Leva um chapéu-de-chuva — parece que vai chover.'},
          {en:'In Mozambique, the rainy season starts in November.', pt:'Em Moçambique, a época das chuvas começa em Novembro.'},
          {en:'It was cloudy all day but it didn\'t rain.', pt:'Esteve nublado o dia todo mas não choveu.'},
          {en:'What\'s the weather like in Maputo in July?', pt:'Como é o tempo em Maputo em Julho?'},
        ],
        practice:[
          {q:'"It\'s cloudy today." "Cloudy" means:', opts:['muito sol','nublado','chuvoso','quente'], ans:1, exp:'"Cloudy" = nublado — lots of clouds, no sun!'},
          {q:'How do you ask about the weather?', opts:['What is weather?','How is weather?','What\'s the weather like?','How much weather?'], ans:2, exp:'"What\'s the weather like?" = Como está o tempo? Standard weather question!'},
        ],
      }, qs:[
        {q:'"It\'s ___." (no clouds, lots of sun)',opts:['cloudy','rainy','sunny','windy'],ans:2,exp:'"It\'s SUNNY." = Está sol. ☀️'],
        {q:'"What\'s the weather ___ today?"',opts:['doing','being','having','like'],ans:3,exp:'"What\'s the weather LIKE?" = Como está o tempo? Standard question!'},
        {q:'"Humid" describes weather that is:',opts:['very cold','very windy','very dry','warm and wet/sticky'],ans:3,exp:'"Humid" = húmido — warm AND with a lot of moisture in the air. Common in Maputo!'},
        {q:'In Mozambique, the rainy season is approximately:',opts:['April to September','November to March','June to August','January to March only'],ans:1,exp:'In Mozambique, the rainy season (época das chuvas) is roughly November to March! 🌧️'},
        {q:'"Take an umbrella — it might ___."',opts:['snow','be sunny','rain','be cool'],ans:2,exp:'"It might RAIN." — take an umbrella when rain is possible! ☂️'],
        {q:'"It was ___ all day." (lots of clouds, no sun)',opts:['sunny','cloudy','clear','bright'],ans:1,exp:'"It was CLOUDY all day." = Esteve nublado o dia todo.'},
        {q:'"Cool" weather means it is:',opts:['very hot','very cold','pleasantly slightly cold','humid'],ans:2,exp:'"Cool" = pleasantly slightly cold — not too cold, not too hot. Nice weather! 😊'],
      ]},

    ]
  }
];
