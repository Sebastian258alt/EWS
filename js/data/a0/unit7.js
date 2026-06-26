// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit7.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0g — World, Work & Home
// Part of UNITS_A0

const UNITS_A0_UNIT7 = [
  {
    id:'u0g', cefr:'A0', title:'World, Work & Home', titlePt:'Mundo, Trabalho e Casa',
    desc:'Countries, jobs, transport, your home and the animal world 🌍',
    descPt:'Países, profissões, transportes, a tua casa e o mundo animal 🌍',
    color:'#ef6c00', icon:'🌍', premium:false,
    lessons:[

      {id:'l0za', title:'Countries & Nationalities', titlePt:'Países e Nacionalidades', icon:'🌍', xp:20, learn:{
        explanation:{
          en:'Every country has a name and a nationality. In English, both the country name and the nationality start with a CAPITAL letter. To say where you are from: "I am from Mozambique. I am Mozambican." Some nationalities add -an, -ian, -ish, or -ese to the country name.',
          pt:'Cada país tem um nome e uma nacionalidade. Em inglês, tanto o nome do país como a nacionalidade começam com letra MAIÚSCULA. Para dizer de onde és: "I am from Mozambique. I am Mozambican." Algumas nacionalidades adicionam -an, -ian, -ish ou -ese ao nome do país.'
        },
        examples:[
          {en:'I am from Mozambique. I am Mozambican.', pt:'Eu sou de Moçambique. Eu sou moçambicano/a.'},
          {en:'She is from Portugal. She is Portuguese.', pt:'Ela é de Portugal. Ela é portuguesa.'},
          {en:'He is from Brazil. He is Brazilian.', pt:'Ele é do Brasil. Ele é brasileiro.'},
          {en:'They are from South Africa. They are South African.', pt:'Eles são da África do Sul. Eles são sul-africanos.'},
          {en:'Where are you from? — I am from Tanzania.', pt:'De onde és? — Eu sou da Tanzânia.'},
        ],
        practice:[
          {q:'A person from Brazil is called:', opts:['Brazilish','Brazilese','Brazilian','Brazilan'], ans:2, exp:'Brazil → Brazilian. Most countries ending in a consonant add -ian.'},
          {q:'Complete: "She is ___ Portugal." (origin)', opts:['of','in','from','at'], ans:2, exp:'"From" tells us origin — where someone comes from.'},
        ],
      }, qs:[
        {q:'A person from Mozambique is called:',opts:['Mozambican','Mozambiquese','Mozambish','Mozambiquian'],ans:0,exp:'Mozambique → Mozambican! 🇲🇿'},
        {q:'"Where are you from?" asks about:',opts:['your age','your country','your job','your name'],ans:1,exp:'"Where are you from?" = De onde és? It asks about your country of origin!'},
        {q:'Country names in English start with:',opts:['a small letter','a capital letter','a number','any letter'],ans:1,exp:'ALL country names start with a CAPITAL letter in English! Portugal, Brazil, Mozambique...'},
        {q:'A person from Portugal is:',opts:['Portugu','Portugugese','Portuguese','Portugalian'],ans:2,exp:'Portugal → Portuguese! Notice the spelling change!'},
        {q:'"She is from Kenya." Kenya is:',opts:['a job','a city','a country','a language'],ans:2,exp:'Kenya is a country in East Africa! 🇰🇪'},
        {q:'Complete: "I am ___ Mozambique."',opts:['at','from','of','in'],ans:1,exp:'"I am FROM Mozambique." = Eu sou de Moçambique!'},
        {q:'A person from South Africa is:',opts:['South Africanish','South African','Southafrican','South Africanese'],ans:1,exp:'South Africa → South African! Two words, both capitalized!'},
      ]},

      {id:'l0zb', title:'Jobs & Professions', titlePt:'Trabalhos e Profissões', icon:'👩‍⚕️', xp:20, learn:{
        explanation:{
          en:'To talk about your job, say "I am a..." or "I work as a...". Jobs describe what a person does every day. In English, job titles usually do not change for men and women — a female doctor is still a "doctor", not a "doctora". Common exception: actor/actress.',
          pt:'Para falar do teu trabalho, diz "I am a..." ou "I work as a...". Os trabalhos descrevem o que uma pessoa faz todos os dias. Em inglês, os títulos de trabalho normalmente não mudam para homens e mulheres — uma médica é simplesmente "doctor", não "doctora". Excepção comum: actor/actress.'
        },
        examples:[
          {en:'I am a teacher. I teach English.', pt:'Eu sou professor/a. Eu ensino inglês.'},
          {en:'She is a nurse. She works in a hospital.', pt:'Ela é enfermeira. Ela trabalha num hospital.'},
          {en:'He is a driver. He drives a bus.', pt:'Ele é motorista. Ele conduz um autocarro.'},
          {en:'What do you do? — I am a student.', pt:'O que fazes? — Eu sou estudante.'},
          {en:'My mother is a market seller.', pt:'A minha mãe é vendedeira no mercado.'},
        ],
        practice:[
          {q:'How do you say your job? "I ___ a teacher."', opts:['have','do','am','work'], ans:2, exp:'"I AM a teacher." Use "am" for identity/job!'},
          {q:'"What do you do?" is asking about your:', opts:['age','nationality','job','family'], ans:2, exp:'"What do you do?" = Qual é a tua profissão? It asks about your job!'},
        ],
      }, qs:[
        {q:'To say your job you say: "I ___ a doctor."',opts:['have','am','do','work'],ans:1,exp:'"I AM a doctor." = Eu sou médico/a. Use "am" with "I"!'},
        {q:'"What do you do?" asks about:',opts:['your name','your job','your age','your country'],ans:1,exp:'"What do you do?" = Qual é a tua profissão? Asking about your job!'},
        {q:'A person who teaches is a:',opts:['driver','farmer','teacher','nurse'],ans:2,exp:'A TEACHER teaches! "I am a teacher. I teach English."'},
        {q:'A person who helps sick people in a hospital is a:',opts:['teacher','driver','farmer','nurse'],ans:3,exp:'A NURSE (or doctor) helps sick people in a hospital!'},
        {q:'"She is a nurse. She ___ in a hospital."',opts:['teaches','works','drives','sells'],ans:1,exp:'"She WORKS in a hospital." = Ela trabalha num hospital!'},
        {q:'A person who grows food on land is a:',opts:['nurse','teacher','farmer','pilot'],ans:2,exp:'A FARMER grows food! Very common in Mozambique! 🌱'},
        {q:'Which sentence is CORRECT?',opts:['I am teacher.','I am a teacher.','I is a teacher.','I am the teacher a.'],ans:1,exp:'"I am A teacher." — don\'t forget the article "a"!'},
      ]},

      {id:'l0zc', title:'Getting Around — Transport', titlePt:'Meios de Transporte', icon:'🚌', xp:20, learn:{
        explanation:{
          en:'Transport words tell us HOW we travel. Use "I go by..." or "I take the..." for most transport. For walking: "I go on foot" or "I walk." Common vehicles in Mozambique and the world: bus (chapa/autocarro), car, taxi, bicycle, motorcycle, train, plane, boat.',
          pt:'As palavras de transporte dizem-nos COMO viajamos. Usa "I go by..." ou "I take the..." para a maioria dos transportes. Para caminhar: "I go on foot" ou "I walk." Veículos comuns em Moçambique e no mundo: bus (chapa/autocarro), car, taxi, bicycle, motorcycle, train, plane, boat.'
        },
        examples:[
          {en:'I go to school by bus.', pt:'Eu vou para a escola de autocarro (chapa).'},
          {en:'She takes a taxi to work.', pt:'Ela apanha um táxi para o trabalho.'},
          {en:'He rides a bicycle every day.', pt:'Ele anda de bicicleta todos os dias.'},
          {en:'We travel to Beira by plane.', pt:'Nós viajamos para a Beira de avião.'},
          {en:'I walk to the market — it\'s not far.', pt:'Eu vou a pé ao mercado — não é longe.'},
        ],
        practice:[
          {q:'Complete: "I go to work ___ bus."', opts:['in','on','by','at'], ans:2, exp:'"BY bus/car/plane/train." — use BY for transport methods!'},
          {q:'A large vehicle that carries many passengers is a:', opts:['bicycle','taxi','bus','motorcycle'], ans:2, exp:'A BUS carries many passengers. In Maputo — the chapa!'},
        ],
      }, qs:[
        {q:'"I go to school ___ bus."',opts:['at','in','on','by'],ans:3,exp:'"By bus" = de autocarro. Always use BY with transport!'},
        {q:'What do you use to fly between cities?',opts:['bicycle','boat','plane','train'],ans:2,exp:'A PLANE (avião) flies between cities! 🛩️'},
        {q:'"I walk to school" means I go:',opts:['by car','on foot','by bus','by bicycle'],ans:1,exp:'"Walk" = go on foot = a pé! No vehicle!'},
        {q:'In Mozambique, a popular local transport is the:',opts:['subway','tram','chapa/bus','helicopter'],ans:2,exp:'The chapa (minibus/bus) is the most common transport in Mozambique! 🚌'},
        {q:'"She ___ a taxi to work."',opts:['rides','drives','takes','flies'],ans:2,exp:'"She TAKES a taxi." = Ela apanha um táxi!'},
        {q:'A two-wheeled vehicle you pedal is a:',opts:['car','motorcycle','bicycle','boat'],ans:2,exp:'A BICYCLE (bicicleta) has two wheels and you pedal it! 🚲'},
        {q:'"We travel to Beira ___ plane."',opts:['on','by','in','with'],ans:1,exp:'"By plane" = de avião. Use BY for all transport methods!'},
      ]},

      {id:'l0zd', title:'Your Home — Rooms & Furniture', titlePt:'A Tua Casa — Divisões e Móveis', icon:'🏠', xp:20, learn:{
        explanation:{
          en:'Every home has different rooms (divisões). The most important rooms are: bedroom (quarto), bathroom (casa de banho), kitchen (cozinha), living room (sala de estar), and dining room (sala de jantar). In each room you find different furniture (móveis) — the things inside the room.',
          pt:'Cada casa tem divisões diferentes. As divisões mais importantes são: bedroom (quarto), bathroom (casa de banho), kitchen (cozinha), living room (sala de estar) e dining room (sala de jantar). Em cada divisão encontras móveis diferentes — as coisas dentro da divisão.'
        },
        examples:[
          {en:'I sleep in the bedroom.', pt:'Eu durmo no quarto.'},
          {en:'We eat in the dining room.', pt:'Nós comemos na sala de jantar.'},
          {en:'The sofa is in the living room.', pt:'O sofá está na sala de estar.'},
          {en:'There is a fridge in the kitchen.', pt:'Há um frigorífico na cozinha.'},
          {en:'The toilet and the shower are in the bathroom.', pt:'A sanita e o chuveiro estão na casa de banho.'},
        ],
        practice:[
          {q:'Where do you sleep?', opts:['kitchen','bathroom','bedroom','living room'], ans:2, exp:'You sleep in the BEDROOM (quarto)!'},
          {q:'Where do you cook food?', opts:['bedroom','bathroom','living room','kitchen'], ans:3, exp:'You cook in the KITCHEN (cozinha)!'},
        ],
      }, qs:[
        {q:'Where do you sleep?',opts:['kitchen','living room','bedroom','bathroom'],ans:2,exp:'You sleep in the BEDROOM = quarto!'},
        {q:'Where do you wash yourself?',opts:['bedroom','bathroom','kitchen','dining room'],ans:1,exp:'You wash in the BATHROOM = casa de banho!'},
        {q:'"The sofa is in the ___."',opts:['kitchen','bathroom','bedroom','living room'],ans:3,exp:'The sofa is in the LIVING ROOM = sala de estar!'},
        {q:'Where do you cook food?',opts:['dining room','bedroom','bathroom','kitchen'],ans:3,exp:'You cook in the KITCHEN = cozinha!'},
        {q:'"Fridge" is found in the:',opts:['bedroom','bathroom','living room','kitchen'],ans:3,exp:'The FRIDGE (frigorífico) is in the kitchen!'},
        {q:'"We eat in the ___ room."',opts:['bed','living','dining','bath'],ans:2,exp:'"Dining room" = sala de jantar — where you eat meals!'},
        {q:'A "bed" is a piece of:',opts:['food','transport','furniture','clothing'],ans:2,exp:'A BED is furniture (móvel) — things you find in a room!'},
      ]},

      {id:'l0ze', title:'Animals — Pets & Wild', titlePt:'Animais — Domésticos e Selvagens', icon:'🦁', xp:20, learn:{
        explanation:{
          en:'Animals can be pets (animals that live with people) or wild animals (animals in nature). Common pets: dog (cão), cat (gato), bird (pássaro), fish (peixe). Famous African wild animals: lion (leão), elephant (elefante), zebra, giraffe (girafa), crocodile (crocodilo). Each animal makes a different sound.',
          pt:'Os animais podem ser domésticos (animais que vivem com pessoas) ou selvagens (animais na natureza). Animais domésticos comuns: dog (cão), cat (gato), bird (pássaro), fish (peixe). Famosos animais selvagens africanos: lion (leão), elephant (elefante), zebra, giraffe (girafa), crocodile (crocodilo). Cada animal faz um som diferente.'
        },
        examples:[
          {en:'My dog is called Rex. He is very friendly.', pt:'O meu cão chama-se Rex. Ele é muito amigável.'},
          {en:'Lions live in the savanna.', pt:'Os leões vivem na savana.'},
          {en:'Elephants are the biggest land animals.', pt:'Os elefantes são os maiores animais terrestres.'},
          {en:'A cat says "meow". A dog says "woof".', pt:'Um gato diz "miau". Um cão diz "au au".'},
          {en:'Mozambique has crocodiles in its rivers.', pt:'Moçambique tem crocodilos nos seus rios.'},
        ],
        practice:[
          {q:'Which animal is a common pet?', opts:['lion','elephant','dog','crocodile'], ans:2, exp:'Dogs are common pets! Lions and elephants are wild animals.'},
          {q:'"Lion" in Portuguese is:', opts:['elefante','girafa','leão','zebra'], ans:2, exp:'Lion = leão! The king of the African savanna! 🦁'},
        ],
      }, qs:[
        {q:'Which animal is a pet?',opts:['lion','crocodile','cat','elephant'],ans:2,exp:'A CAT (gato) is a common pet! The others are wild animals.'},
        {q:'"Elephant" in Portuguese is:',opts:['leão','girafa','crocodilo','elefante'],ans:3,exp:'Elephant = elefante! The biggest land animal on Earth! 🐘'},
        {q:'What sound does a cat make?',opts:['woof','moo','meow','roar'],ans:2,exp:'A cat says "meow"! (miau in Portuguese) 🐱'},
        {q:'Wild animals live:',opts:['in houses','with families','in nature','in classrooms'],ans:2,exp:'Wild animals live IN NATURE — forests, rivers, savanna!'},
        {q:'Which animal do you find in African rivers?',opts:['penguin','crocodile','polar bear','wolf'],ans:1,exp:'CROCODILES live in African rivers — including Mozambique\'s rivers! 🐊'},
        {q:'"Giraffe" in Portuguese is:',opts:['girafa','zebra','rinoceronte','hipopótamo'],ans:0,exp:'Giraffe = girafa! They have very long necks! 🦒'},
        {q:'Which is a WILD animal?',opts:['dog','cat','lion','fish'],ans:2,exp:'LION is a wild animal — it lives in the savanna, not in houses!'},
      ]},

    ]
  }
];
