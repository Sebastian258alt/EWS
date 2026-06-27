// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit13.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0m — Places in Town
// Part of UNITS_A0

const UNITS_A0_UNIT13 = [
  {
    id:'u0m', cefr:'A0', title:'Places in Town', titlePt:'Lugares na Cidade',
    desc:'Buildings, shops, directions, and asking for places 🏙️',
    descPt:'Edifícios, lojas, direções e como perguntar por lugares 🏙️',
    color:'#00695c', icon:'🏛️', premium:false,
    lessons:[

      {id:'l104', title:'Buildings and Shops', titlePt:'Edifícios e Lojas', icon:'🏢', xp:20, learn:{
        explanation:{
          en:'Common places in town: school (escola), hospital (hospital), bank (banco), supermarket (supermercado), post office (correios), police station (esquadra), fire station (bombeiros), church (igreja), mosque (mesquita), market (mercado), pharmacy (farmácia). We say "I go to school." or "I work at the hospital."',
          pt:'Lugares comuns na cidade: school (escola), hospital (hospital), bank (banco), supermarket (supermercado), post office (correios), police station (esquadra), fire station (bombeiros), church (igreja), mosque (mesquita), market (mercado), pharmacy (farmácia). Dizemos "I go to school." ou "I work at the hospital."'
        },
        examples:[
          {en:'I go to school every day.', pt:'Eu vou à escola todos os dias.'},
          {en:'The hospital is near the bank.', pt:'O hospital fica perto do banco.'},
          {en:'We buy food at the supermarket.', pt:'Nós compramos comida no supermercado.'},
          {en:'She works at the post office.', pt:'Ela trabalha nos correios.'},
          {en:'The market is crowded on Saturdays.', pt:'O mercado está cheio aos sábados.'},
        ],
        practice:[
          {q:'Where do you buy food?', opts:['bank','supermarket','hospital','school'], ans:1, exp:'Supermarket is where you buy food! 🛒'},
          {q:'Complete: "I work ___ the hospital."', opts:['on','at','in','by'], ans:1, exp:'"At the hospital" – use "at" for location.'},
        ],
      }, qs:[
        {q:'A place where you send letters is:',opts:['bank','post office','market','hospital'],ans:1,exp:'Post office = correios. ✉️'},
        {q:'"School" is a place for:',opts:['shopping','working','studying','eating'],ans:2,exp:'School is for studying! 📚'},
        {q:'Where do you go when you are sick?',opts:['school','bank','hospital','market'],ans:2,exp:'Hospital (or clinic) when sick. 🏥'},
        {q:'"Pharmacy" is a place to buy:',opts:['food','medicine','clothes','books'],ans:1,exp:'Pharmacy = farmácia, for medicine. 💊'},
        {q:'The police work at the:',opts:['fire station','police station','post office','bank'],ans:1,exp:'Police station = esquadra da polícia. 👮'},
        {q:'"Market" in Portuguese is:',opts:['mercado','supermercado','loja','farmácia'],ans:0,exp:'Market = mercado.'},
        {q:'A place of worship for Christians is a:',opts:['mosque','church','temple','synagogue'],ans:1,exp:'Church = igreja. ⛪'},
      ]},

      {id:'l105', title:'Directions — Near, Far, Next to', titlePt:'Direções — Perto, Longe, Ao Lado', icon:'🧭', xp:20, learn:{
        explanation:{
          en:'We use prepositions of place: near (perto de), far from (longe de), next to (ao lado de), opposite (em frente de), between (entre), behind (atrás de), in front of (à frente de). Example: "The bank is near the school." "The hospital is opposite the market."',
          pt:'Usamos preposições de lugar: near (perto de), far from (longe de), next to (ao lado de), opposite (em frente de), between (entre), behind (atrás de), in front of (à frente de). Exemplo: "The bank is near the school." "The hospital is opposite the market."'
        },
        examples:[
          {en:'My house is near the school.', pt:'A minha casa fica perto da escola.'},
          {en:'The supermarket is far from here.', pt:'O supermercado fica longe daqui.'},
          {en:'The bank is next to the post office.', pt:'O banco fica ao lado dos correios.'},
          {en:'The market is opposite the hospital.', pt:'O mercado fica em frente do hospital.'},
          {en:'The church is between the bank and the school.', pt:'A igreja fica entre o banco e a escola.'},
        ],
        practice:[
          {q:'"Next to" means:', opts:['near','far','beside','opposite'], ans:2, exp:'Next to = beside = ao lado.'},
          {q:'Complete: "The hospital is ___ the market." (in front of)', opts:['behind','next to','far from','opposite'], ans:3, exp:'Opposite = em frente de.'},
        ],
      }, qs:[
        {q:'"Far from" is opposite of:',opts:['near','next to','opposite','behind'],ans:0,exp:'Far from = longe de; opposite is near (perto).'},
        {q:'If A is next to B, they are:',opts:['far apart','beside each other','opposite each other','far away'],ans:1,exp:'Next to = beside = lado a lado.'},
        {q:'"Behind" in Portuguese is:',opts:['à frente de','atrás de','ao lado de','em frente de'],ans:1,exp:'Behind = atrás de.'},
        {q:'The bank is opposite the supermarket. This means:',opts:['they are far','they are side by side','they are in front of each other','one is behind the other'],ans:2,exp:'Opposite = facing each other (em frente).'},
        {q:'Complete: "My house is ___ the school." (between)',opts:['near','far','next to','between'],ans:3,exp:'Between two places.'},
        {q:'Which preposition means "atrás de"?',opts:['behind','in front of','next to','opposite'],ans:0,exp:'Behind = atrás de.'},
        {q:'"The library is near the park." – "near" means:',opts:['longe','perto','ao lado','em frente'],ans:1,exp:'Near = perto.'},
      ]},

      {id:'l106', title:'Asking for Directions', titlePt:'Pedir Direções', icon:'🗺️', xp:20, learn:{
        explanation:{
          en:'To ask for directions, use: "Excuse me, where is the...?" (Com licença, onde fica...?) "How do I get to...?" (Como chego a...?) "Is there a... near here?" (Há um... aqui perto?) Responses: "It\'s near the bank." "Go straight ahead." (Vá em frente.) "Turn left/right." (Vire à esquerda/direita.)',
          pt:'Para pedir direções, usa: "Excuse me, where is the...?" (Com licença, onde fica...?) "How do I get to...?" (Como chego a...?) "Is there a... near here?" (Há um... aqui perto?) Respostas: "It\'s near the bank." "Go straight ahead." (Vá em frente.) "Turn left/right." (Vire à esquerda/direita.)'
        },
        examples:[
          {en:'Excuse me, where is the supermarket?', pt:'Com licença, onde fica o supermercado?'},
          {en:'How do I get to the hospital?', pt:'Como chego ao hospital?'},
          {en:'Turn left at the traffic lights.', pt:'Vire à esquerda nos semáforos.'},
          {en:'Go straight ahead for 200 metres.', pt:'Vá em frente por 200 metros.'},
          {en:'The bank is on your right.', pt:'O banco fica à sua direita.'},
        ],
        practice:[
          {q:'How do you ask where the post office is?', opts:['Where is the post office?','How much is the post office?','What is the post office?','Who is the post office?'], ans:0, exp:'"Where is...?" is correct.'},
          {q:'Complete: "Turn ___ at the corner." (left)', opts:['right','left','straight','behind'], ans:1, exp:'Turn left = vire à esquerda.'},
        ],
      }, qs:[
        {q:'"Excuse me" is used to:',opts:['apologize','get attention','say hello','say goodbye'],ans:1,exp:'"Excuse me" gets someone\'s attention (com licença).'},
        {q:'"Go straight" means:',opts:['turn','go forward','turn left','turn right'],ans:1,exp:'Go straight = go forward (vá em frente).'},
        {q:'"Turn right" – right is:',opts:['esquerda','direita','frente','trás'],ans:1,exp:'Right = direita.'},
        {q:'"How do I get to the bank?" is asking for:',opts:['directions','price','time','name'],ans:0,exp:'Asking for directions (direções).'},
        {q:'"The bank is on your left." – left is:',opts:['direita','esquerda','frente','trás'],ans:1,exp:'Left = esquerda.'},
        {q:'A response to directions: "It\'s next to the post office." – this gives:',opts:['a distance','a landmark','a time','a price'],ans:1,exp:'It gives a landmark (point of reference).'},
        {q:'Complete: "___ me, where is the hospital?"',opts:['Sorry','Excuse','Hello','Pardon'],ans:1,exp:'"Excuse me" (with "Excuse" – actually "Excuse me" is two words, but option is "Excuse").'},
      ]},

      {id:'l107', title:'Places and Activities', titlePt:'Lugares e Atividades', icon:'🎯', xp:20, learn:{
        explanation:{
          en:'Different places are for different activities. At school we study. At the hospital we get treatment. At the supermarket we shop. At the park we play. At the cinema we watch films. At the restaurant we eat. At the gym we exercise. Use "at" for location: "I am at school."',
          pt:'Diferentes lugares são para diferentes atividades. Na escola estudamos. No hospital recebemos tratamento. No supermercado fazemos compras. No parque brincamos. No cinema vemos filmes. No restaurante comemos. No ginásio fazemos exercício. Usa "at" para local: "I am at school."'
        },
        examples:[
          {en:'I study at school.', pt:'Eu estudo na escola.'},
          {en:'We watch films at the cinema.', pt:'Nós vemos filmes no cinema.'},
          {en:'He plays basketball at the park.', pt:'Ele joga basquetebol no parque.'},
          {en:'They eat dinner at the restaurant.', pt:'Eles jantam no restaurante.'},
          {en:'She exercises at the gym.', pt:'Ela faz exercício no ginásio.'},
        ],
        practice:[
          {q:'Where do you watch a movie?', opts:['at school','at the cinema','at the park','at the supermarket'], ans:1, exp:'Cinema is for watching movies! 🎬'},
          {q:'Complete: "We eat at the ___."', opts:['school','hospital','restaurant','bank'], ans:2, exp:'Restaurant is for eating! 🍽️'},
        ],
      }, qs:[
        {q:'"Gym" is a place for:',opts:['studying','eating','exercising','shopping'],ans:2,exp:'Gym = ginásio for exercise. 💪'},
        {q:'Where do you go to buy clothes?',opts:['supermarket','clothes shop','bank','post office'],ans:1,exp:'Clothes shop = loja de roupa.'},
        {q:'"Library" is a place for:',opts:['reading','eating','shopping','exercising'],ans:0,exp:'Library is for reading/studying. 📖'},
        {q:'At the park, you can:',opts:['play','sleep','study','work'],ans:0,exp:'At the park, you play! 🌳'},
        {q:'Complete: "She works ___ the hospital."',opts:['in','at','on','by'],ans:1,exp:'At the hospital (or "in" is also common, but "at" is fine).'},
        {q:'"We have lunch at school" – school is a:',opts:['activity','place','person','time'],ans:1,exp:'School is a place.'},
        {q:'What place has books?',opts:['supermarket','library','cinema','hospital'],ans:1,exp:'Library has books! 📚'},
      ]},

    ]
  }
];

// Auto-register into global registry
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT13);
