// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit10.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0j — Weather & Seasons
// Part of UNITS_A0

const UNITS_A0_UNIT10 = [
  {
    id:'u0j', cefr:'A0', title:'Weather & Seasons', titlePt:'Clima e Estações',
    desc:'Weather words, seasons, temperature, and activities by weather 🌤️',
    descPt:'Palavras do clima, estações, temperatura e atividades por clima 🌤️',
    color:'#ffb300', icon:'🌈', premium:false,
    lessons:[

      {id:'l0zp', title:'Weather Vocabulary', titlePt:'Vocabulário do Clima', icon:'☀️', xp:20, learn:{
        explanation:{
          en:'We use adjectives to describe the weather: sunny (sol), rainy (chuva), cloudy (nublado), windy (ventoso), hot (quente), cold (frio), warm (morno), cool (fresco). We say "It is sunny today." or "It is raining." (verb).',
          pt:'Usamos adjetivos para descrever o clima: sunny (sol), rainy (chuva), cloudy (nublado), windy (ventoso), hot (quente), cold (frio), warm (morno), cool (fresco). Dizemos "It is sunny today." ou "It is raining." (verbo).'
        },
        examples:[
          {en:'It is sunny and hot today.', pt:'Hoje está sol e calor.'},
          {en:'It is rainy in April.', pt:'Está chuvoso em abril.'},
          {en:'The weather is cloudy and windy.', pt:'O tempo está nublado e ventoso.'},
          {en:'I like warm weather.', pt:'Eu gosto de tempo quente.'},
          {en:'It is cold in the winter.', pt:'Está frio no inverno.'},
        ],
        practice:[
          {q:'What word describes when the sun is shining?', opts:['rainy','cloudy','sunny','windy'], ans:2, exp:'Sunny = sol ☀️!'},
          {q:'Complete: "It is ___ today." (raining)', opts:['sunny','rainy','cloudy','windy'], ans:1, exp:'Rainy = chuvoso! 🌧️'},
        ],
      }, qs:[
        {q:'"It is windy" means:',opts:['there is sun','there is rain','there is wind','there are clouds'],ans:2,exp:'Windy = ventoso! 🌬️'},
        {q:'Which is the opposite of "hot"?',opts:['warm','cool','cold','sunny'],ans:2,exp:'Cold (frio) is opposite of hot (quente).'},
        {q:'"Cloudy" in Portuguese is:',opts:['ensolarado','nublado','chuvoso','ventoso'],ans:1,exp:'Cloudy = nublado ☁️.'},
        {q:'What do you see when it is sunny?',opts:['rain','clouds','sun','snow'],ans:2,exp:'You see the sun! ☀️'},
        {q:'Complete: "It is ___ in the desert." (very hot)',opts:['cold','cool','warm','hot'],ans:3,exp:'In the desert, it is very hot! 🏜️'},
        {q:'"Rainy" is an adjective. The verb is:',opts:['rain','rains','raining','rained'],ans:0,exp:'The verb is "rain" – "It is raining."'},
        {q:'Which weather is good for a picnic?',opts:['rainy','windy','sunny','cloudy'],ans:2,exp:'Sunny weather is best for a picnic! 🧺'},
      ]},

      {id:'l0zq', title:'Seasons', titlePt:'Estações do Ano', icon:'🌸', xp:20, learn:{
        explanation:{
          en:'There are four seasons: spring (primavera), summer (verão), autumn/fall (outono), winter (inverno). In each season, the weather is different. Spring is warm and flowers bloom. Summer is hot. Autumn is cool and leaves fall. Winter is cold.',
          pt:'Há quatro estações: spring (primavera), summer (verão), autumn/fall (outono), winter (inverno). Em cada estação, o tempo é diferente. A primavera é quente e as flores desabrocham. O verão é quente. O outono é fresco e as folhas caem. O inverno é frio.'
        },
        examples:[
          {en:'Spring is my favourite season.', pt:'A primavera é a minha estação favorita.'},
          {en:'Summer is very hot in Mozambique.', pt:'O verão é muito quente em Moçambique.'},
          {en:'In autumn, the leaves turn yellow.', pt:'No outono, as folhas ficam amarelas.'},
          {en:'Winter is cold and rainy.', pt:'O inverno é frio e chuvoso.'},
          {en:'We go to the beach in summer.', pt:'Nós vamos à praia no verão.'},
        ],
        practice:[
          {q:'Which season comes after spring?', opts:['winter','autumn','summer','spring'], ans:2, exp:'After spring comes summer! 🌞'},
          {q:'Complete: "In ___ it is cold."', opts:['summer','spring','winter','autumn'], ans:2, exp:'Winter is cold! ❄️'},
        ],
      }, qs:[
        {q:'"Autumn" in American English is also called:',opts:['fall','spring','winter','summer'],ans:0,exp:'In American English, autumn is called "fall".'},
        {q:'Which season has the longest days?',opts:['spring','summer','autumn','winter'],ans:1,exp:'Summer has the longest days (in the Northern Hemisphere).'},
        {q:'What happens in spring?',opts:['leaves fall','flowers bloom','snow falls','days get shorter'],ans:1,exp:'Flowers bloom in spring! 🌸'},
        {q:'In winter, the weather is usually:',opts:['hot','cold','warm','sunny'],ans:1,exp:'Winter is cold! ❄️'},
        {q:'Complete: "We swim in the sea in ___."',opts:['winter','spring','summer','autumn'],ans:2,exp:'We swim in summer because it\'s hot! 🏊'},
        {q:'"Leaves fall" is a characteristic of:',opts:['spring','summer','autumn','winter'],ans:2,exp:'In autumn, leaves fall from trees. 🍂'},
        {q:'How many seasons are there?',opts:['2','3','4','5'],ans:2,exp:'There are 4 seasons! 🌍'},
      ]},

      {id:'l0zr', title:'Temperature — Hot, Cold, Warm, Cool', titlePt:'Temperatura — Quente, Frio, Morno, Fresco', icon:'🌡️', xp:20, learn:{
        explanation:{
          en:'We describe temperature with adjectives: hot (quente), cold (frio), warm (morno/agradável), cool (fresco). Hot is very high temperature, cold is very low, warm is pleasant, cool is slightly cold. We can say "It\'s hot today." or "The water is warm."',
          pt:'Descrevemos a temperatura com adjetivos: hot (quente), cold (frio), warm (morno/agradável), cool (fresco). Hot é temperatura muito alta, cold é muito baixa, warm é agradável, cool é ligeiramente frio. Podemos dizer "It\'s hot today." ou "The water is warm."'
        },
        examples:[
          {en:'It is very hot in Maputo in February.', pt:'Está muito quente em Maputo em fevereiro.'},
          {en:'I like warm weather, not too hot.', pt:'Eu gosto de tempo morno, não muito quente.'},
          {en:'The water is cool and refreshing.', pt:'A água é fresca e refrescante.'},
          {en:'It is cold in the mountains.', pt:'Está frio nas montanhas.'},
          {en:'The soup is warm — ready to eat.', pt:'A sopa está morna — pronta a comer.'},
        ],
        practice:[
          {q:'What is the opposite of "cold"?', opts:['warm','hot','cool','sunny'], ans:1, exp:'Hot is the extreme opposite of cold.'},
          {q:'Complete: "The weather is ___." (pleasant, not hot, not cold)', opts:['hot','cold','cool','warm'], ans:3, exp:'Warm is pleasant and comfortable.'},
        ],
      }, qs:[
        {q:'"It\'s cool" means the temperature is:',opts:['very hot','cold','slightly cold','very cold'],ans:2,exp:'Cool = fresco (slightly cold).'},
        {q:'Which word describes very high temperature?',opts:['warm','cool','hot','cold'],ans:2,exp:'Hot = temperatura muito alta! 🔥'},
        {q:'"The water is warm" – warm is:',opts:['between cool and hot','between hot and cold','very cold','very hot'],ans:0,exp:'Warm is between cool and hot — pleasant.'},
        {q:'What do you wear when it is cold?',opts:['shorts','T-shirt','coat','sandals'],ans:2,exp:'When it is cold, you wear a coat! 🧥'},
        {q:'Complete: "I prefer ___ drinks in summer." (cool)',opts:['hot','warm','cold','cool'],ans:3,exp:'Cool drinks are refreshing in summer! 🥤'},
        {q:'"Hot" and "cold" are:',opts:['synonyms','opposites','weather verbs','seasons'],ans:1,exp:'Hot and cold are opposites.'},
        {q:'In Mozambique, the weather is often:',opts:['cold','cool','warm','hot'],ans:3,exp:'Mozambique is generally hot, especially in the summer! ☀️'},
      ]},

      {id:'l0zs', title:'Weather in Your Country', titlePt:'Tempo no Teu País', icon:'🇲🇿', xp:20, learn:{
        explanation:{
          en:'You can describe the weather in your country using the vocabulary you learned. For example: "In Mozambique, the weather is hot and sunny most of the year. It rains a lot in the rainy season." You can compare: "In winter, it is cooler and dry."',
          pt:'Podes descrever o tempo no teu país usando o vocabulário que aprendeste. Por exemplo: "In Mozambique, the weather is hot and sunny most of the year. It rains a lot in the rainy season." (Em Moçambique, o tempo é quente e ensolarado a maior parte do ano. Chove muito na época das chuvas.) Podes comparar: "In winter, it is cooler and dry." (No inverno, é mais fresco e seco.)'
        },
        examples:[
          {en:'In Mozambique, it is hot and sunny in summer.', pt:'Em Moçambique, está quente e sol no verão.'},
          {en:'The rainy season is from November to March.', pt:'A época das chuvas é de novembro a março.'},
          {en:'In winter, the weather is cooler and dry.', pt:'No inverno, o tempo é mais fresco e seco.'},
          {en:'I like the weather in my country.', pt:'Eu gosto do tempo no meu país.'},
          {en:'It sometimes rains heavily in the afternoon.', pt:'Às vezes chove muito à tarde.'},
        ],
        practice:[
          {q:'What is the weather like in Mozambique? (common)', opts:['cold and rainy','hot and sunny','cool and windy','snowy'], ans:1, exp:'Mozambique is hot and sunny! ☀️'},
          {q:'Complete: "The rainy season is ___ November."', opts:['in','on','at','by'], ans:0, exp:'"In November" – use "in" for months.'},
        ],
      }, qs:[
        {q:'In Mozambique, the rainy season is usually:',opts:['May to August','November to March','June to September','October to December'],ans:1,exp:'The rainy season in Mozambique is typically November to March.'},
        {q:'Which is NOT a weather description for Mozambique?',opts:['hot','sunny','snowy','rainy'],ans:2,exp:'Snowy is not typical in Mozambique! ❄️'},
        {q:'"It rains" – the verb "rains" is in the:',opts:['present simple','present continuous','past','future'],ans:0,exp:'"It rains" is present simple for general truth.'},
        {q:'How do you ask about the weather?',opts:['What is the weather?','How is the weather?','What weather is it?','How weather?'],ans:1,exp:'"How is the weather?" is a common question.'},
        {q:'Complete: "The weather is ___ in the winter." (cool and dry)',opts:['hot and wet','cool and dry','cold and rainy','warm and humid'],ans:1,exp:'In Mozambique, winter is cooler and dry.'},
        {q:'In summer, the days are:',opts:['short','long','cold','cloudy'],ans:1,exp:'Summer days are long (and hot)!'},
        {q:'"I like the weather" – "weather" is:',opts:['countable','uncountable','plural','singular'],ans:1,exp:'Weather is uncountable (no plural).'},
      ]},

      {id:'l0zt', title:'Activities by Weather', titlePt:'Atividades por Clima', icon:'🏄', xp:20, learn:{
        explanation:{
          en:'The weather influences what we do. When it is sunny, we go to the beach, have a picnic, or play outside. When it is rainy, we stay inside, read books, or watch TV. When it is cold, we drink hot tea and wear warm clothes.',
          pt:'O tempo influencia o que fazemos. Quando está sol, vamos à praia, fazemos um piquenique ou brincamos ao ar livre. Quando está chuva, ficamos dentro de casa, lemos livros ou vemos televisão. Quando está frio, bebemos chá quente e vestimos roupas quentes.'
        },
        examples:[
          {en:'On sunny days, we go to the beach.', pt:'Nos dias de sol, vamos à praia.'},
          {en:'When it rains, I stay at home.', pt:'Quando chove, fico em casa.'},
          {en:'In cold weather, we drink hot chocolate.', pt:'No tempo frio, bebemos chocolate quente.'},
          {en:'I play football outside when it is warm.', pt:'Jogo futebol ao ar livre quando está quente.'},
          {en:'We watch movies on rainy afternoons.', pt:'Vemos filmes nas tardes chuvosas.'},
        ],
        practice:[
          {q:'What do you do on a sunny day?', opts:['stay inside','go to the beach','read a book','watch TV'], ans:1, exp:'On a sunny day, you go to the beach! 🏖️'},
          {q:'Complete: "When it rains, I ___ at home."', opts:['stay','stays','staying','to stay'], ans:0, exp:'"I stay" – present simple for habitual action.'},
        ],
      }, qs:[
        {q:'On a rainy day, you can:',opts:['play football','go swimming','watch a movie','go hiking'],ans:2,exp:'Watching a movie is a good indoor activity on rainy days! 🎬'},
        {q:'What do you wear when it is sunny?',opts:['coat','sunglasses','jacket','scarf'],ans:1,exp:'Sunglasses (óculos de sol) are for sunny weather! 🕶️'},
        {q:'"I drink hot tea in winter" – why?',opts:['because it is cold','because it is hot','because it is rainy','because it is sunny'],ans:0,exp:'Hot tea warms you up when it is cold! ☕'},
        {q:'Which activity is suitable for hot weather?',opts:['build a snowman','go swimming','drink hot soup','wear a coat'],ans:1,exp:'Swimming is great for hot weather! 🏊'},
        {q:'Complete: "I ___ outside when it is sunny."',opts:['play','plays','playing','to play'],ans:0,exp:'"I play" – present simple.'},
        {q:'"Stay inside" means:',opts:['go out','remain indoors','go to school','take a walk'],ans:1,exp:'Stay inside = ficar dentro de casa.'},
        {q:'On a cold day, I prefer:',opts:['ice cream','cold drink','hot soup','fruits'],ans:2,exp:'Hot soup is warming on a cold day! 🍲'},
      ]},

    ]
  }
];

// Auto-register into global registry
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT10);
