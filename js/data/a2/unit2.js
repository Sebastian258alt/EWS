// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit2.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2b
// Part of UNITS_A2 — Comparatives & Superlatives

const UNITS_A2_UNIT2 = [
  {
    id:'u2b', cefr:'A2', title:'Comparatives & Superlatives', titlePt:'Comparativos e Superlativos',
    desc:'Compare people, places and things like a native speaker 🏆',
    descPt:'Compara pessoas, lugares e coisas como um falante nativo 🏆',
    color:'#ff6f00', icon:'🏆', premium:false,
    lessons:[

      {id:'l2b1', title:'Comparative Adjectives', titlePt:'Adjectivos Comparativos', icon:'⚖️', xp:25, learn:{
        explanation:{
          en:'Comparatives compare two things. Rules: short adjectives (1 syllable): add -er + than → "tall → taller than". Adjectives ending in -y: change to -ier → "happy → happier than". Long adjectives (2+ syllables): use "more + adj + than" → "expensive → more expensive than". Never use both -er AND more!',
          pt:'Os comparativos comparam duas coisas. Regras: adjectivos curtos (1 sílaba): adiciona -er + than → "tall → taller than". Adjectivos terminados em -y: muda para -ier → "happy → happier than". Adjectivos longos (2+ sílabas): usa "more + adj + than" → "expensive → more expensive than". Nunca uses -er E more ao mesmo tempo!'
        },
        examples:[
          {en:'Maputo is bigger than Beira.', pt:'Maputo é maior do que Beira.'},
          {en:'English is more useful than I thought.', pt:'O inglês é mais útil do que eu pensava.'},
          {en:'This road is more dangerous than the other one.', pt:'Esta estrada é mais perigosa do que a outra.'},
        ],
        practice:[
          {q:'Comparative of \"tall\":', opts:['more tall','taller than','tallest','tall than'], ans:1, exp:'Short adjective (1 syllable): tall → taller than.'},
          {q:'Comparative of \"beautiful\":', opts:['beautifuller','more beautiful than','beautifuler','beautiful than'], ans:1, exp:'Long adjective (3 syllables): more beautiful than.'},
        ],
      }, qs:[
        {q:'\"This car is ___ than mine.\" (expensive)',opts:['more expensive','expensiver','expensivest','most expensive'],ans:0,exp:'Long adjective: MORE expensive than. Never \"expensiver\"!'},
        {q:'\"She is ___ than her sister.\" (tall)',opts:['more tall','tall than','taller than','tallest'],ans:2,exp:'Short adjective: taller than. Add -er + than.'},
        {q:'\"Today is ___ than yesterday.\" (hot)',opts:['more hot','hot than','hotter than','hottest'],ans:2,exp:'Short adjective ending in consonant-vowel-consonant: double the last consonant → hotter.'},
        {q:'\"English is ___ than Mandarin for me.\" (easy)',opts:['more easy','easyer','easier','easy than'],ans:2,exp:'Adjective ending in -y: change -y to -ier. easy → easier.'},
        {q:'Which sentence is WRONG?',opts:['She is more intelligent than him.','He is taller than me.','This is more better than that.','Maputo is bigger than Nampula.'],ans:2,exp:'\"More better\" is WRONG. \"Better\" is already comparative — never add \"more\"!'},
      ]},

      {id:'l2b2', title:'Superlative Adjectives', titlePt:'Adjectivos Superlativos', icon:'🥇', xp:25, learn:{
        explanation:{
          en:'Superlatives compare one thing against ALL others in a group. Rules: short adjectives: the + adj + -est → "the tallest". Adjectives ending in -y: the + adj + -iest → "the happiest". Long adjectives: the most + adj → "the most expensive". Always use "the" before a superlative!',
          pt:'Os superlativos comparam uma coisa com TODAS as outras de um grupo. Regras: adjectivos curtos: the + adj + -est → "the tallest". Adjectivos terminados em -y: the + adj + -iest → "the happiest". Adjectivos longos: the most + adj → "the most expensive". Usa sempre "the" antes do superlativo!'
        },
        examples:[
          {en:'The Nile is the longest river in the world.', pt:'O Nilo é o rio mais comprido do mundo.'},
          {en:'English is the most spoken language globally.', pt:'O inglês é a língua mais falada a nível mundial.'},
          {en:'July is the coldest month in Mozambique.', pt:'Julho é o mês mais frio em Moçambique.'},
        ],
        practice:[
          {q:'Superlative of \"fast\":', opts:['the fastest','the most fast','the faster','more fastest'], ans:0, exp:'Short adjective: the fast-EST.'},
          {q:'Superlative of \"intelligent\":', opts:['the intelligentst','the most intelligent','the intelligenter','most intelligentst'], ans:1, exp:'Long adjective: the MOST intelligent.'},
        ],
      }, qs:[
        {q:'\"She is ___ student in the class.\" (good)',opts:['the best','the most good','the goodest','the better'],ans:0,exp:'Good → BEST (irregular superlative). \"The best student.\"'},
        {q:'\"Mount Everest is ___ mountain in the world.\" (high)',opts:['higher than','the highest','the most high','most highest'],ans:1,exp:'Short adjective: the high-EST. Always with \"the\".'},
        {q:'\"This is ___ film I have ever seen.\" (interesting)',opts:['the interestingest','most interesting','the most interesting','the more interesting'],ans:2,exp:'Long adjective: the MOST interesting. Don\'t forget \"the\"!'},
        {q:'\"___ month in Mozambique is June.\" (cold)',opts:['The most cold','The colder','The coldest','Most cold'],ans:2,exp:'Short adjective: THE coldest month. Always \"the\" before superlative.'},
        {q:'Which uses the superlative CORRECTLY?',opts:['She is most tall girl.','He is the tallest in the group.','This is more expensive the others.','That is the most fastest car.'],ans:1,exp:'\"He is THE tallest in the group.\" ✓ Short adj + -est + THE.'},
      ]},

      {id:'l2b3', title:'Irregular Comparisons', titlePt:'Comparações Irregulares', icon:'⭐', xp:20, learn:{
        explanation:{
          en:'Some adjectives are completely irregular — they don\'t follow the -er/-est or more/most rules. The most important are: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest; little → less → the least; many/much → more → the most. You must memorise these!',
          pt:'Alguns adjectivos são completamente irregulares — não seguem as regras de -er/-est ou more/most. Os mais importantes são: good → better → the best; bad → worse → the worst; far → farther/further → the farthest/furthest; little → less → the least; many/much → more → the most. Tens de os memorizar!'
        },
        examples:[
          {en:'My English is getting better every day.', pt:'O meu inglês está a ficar melhor todos os dias.'},
          {en:'This exam was the worst I have ever taken.', pt:'Este exame foi o pior que já fiz.'},
          {en:'He lives the furthest from school.', pt:'Ele vive mais longe da escola.'},
        ],
        practice:[
          {q:'Comparative of \"good\":', opts:['gooder','more good','better','goodest'], ans:2, exp:'good → better → the best. Irregular!'},
          {q:'Superlative of \"bad\":', opts:['the baddest','the most bad','the worst','the badder'], ans:2, exp:'bad → worse → the worst. Irregular!'},
        ],
      }, qs:[
        {q:'\"This coffee is ___ than the one yesterday.\" (good)',opts:['gooder','more good','better','best'],ans:2,exp:'good → BETTER (comparative). Never \"gooder\" or \"more good\"!'},
        {q:'\"That was ___ meal I\'ve ever had.\" (bad)',opts:['the baddest','the most bad','the worse','the worst'],ans:3,exp:'bad → worse → THE WORST. Irregular superlative!'},
        {q:'\"I have ___ time than before.\" (little)',opts:['littler','litter','less','lesser'],ans:2,exp:'little → LESS (comparative). Not \"littler\"! The opposite is \"more\".'},
        {q:'\"She has ___ friends than me.\" (many)',opts:['manyer','more','most','much'],ans:1,exp:'many/much → MORE (comparative). Irregular! \"She has MORE friends than me.\"'},
        {q:'Fill in: \"This is ___ road in the city.\" (bad)',opts:['the worst','the baddest','worse','the most bad'],ans:0,exp:'bad → THE WORST. Always irregular — never \"the most bad\"!'},
      ]},

      {id:'l2b4', title:'As...As (Equality)', titlePt:'As...As (Igualdade)', icon:'⚖️', xp:20, learn:{
        explanation:{
          en:'We use "as + adjective + as" to say two things are equal or the same: "She is as tall as her brother." The negative "not as...as" shows that two things are NOT equal: "This phone is not as expensive as the new one." This structure uses the base adjective — never -er or more!',
          pt:'Usamos "as + adjectivo + as" para dizer que duas coisas são iguais: "She is as tall as her brother." O negativo "not as...as" mostra que duas coisas NÃO são iguais: "This phone is not as expensive as the new one." Esta estrutura usa o adjectivo base — nunca -er ou more!'
        },
        examples:[
          {en:'My brother is as tall as my father.', pt:'O meu irmão é tão alto quanto o meu pai.'},
          {en:'This exam is not as difficult as the last one.', pt:'Este exame não é tão difícil como o último.'},
          {en:'She speaks English as well as a native speaker.', pt:'Ela fala inglês tão bem quanto um falante nativo.'},
        ],
        practice:[
          {q:'\"As tall as\" means they are:', opts:['the same height','different heights','one is taller','one is shorter'], ans:0, exp:'As...as = equal. The same height!'},
          {q:'\"Not as fast as\" means:', opts:['the same speed','one is faster','one is slower','impossible to compare'], ans:2, exp:'Not as fast as = slower. B is not as fast as A → A is faster.'},
        ],
      }, qs:[
        {q:'\"My car is as ___ as yours.\"',opts:['more fast','fastest','fast','faster'],ans:2,exp:'As + BASE ADJECTIVE + as. Never -er or more in this structure!'},
        {q:'\"This coffee is not as ___ as the other one.\" (hot)',opts:['hotter','more hot','hottest','hot'],ans:3,exp:'Not as HOT as = the other coffee is hotter. Base adjective only!'},
        {q:'\"She is as clever ___ her sister.\"',opts:['than','that','as','like'],ans:2,exp:'as...AS: She is as clever AS her sister. Both words must be \"as\".'},
        {q:'\"His bag is not as heavy as mine\" means:',opts:['His bag is heavier','His bag weighs the same','My bag is heavier','Both bags are light'],ans:2,exp:'Not as heavy as = lighter. MY bag is heavier → his is NOT AS heavy.'},
        {q:'Which is CORRECT?',opts:['She is as taller as me.','She is as tall as me.','She is as more tall as me.','She is as tallest as me.'],ans:1,exp:'As TALL as — base adjective, nothing else. \"As taller as\" is wrong!'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT2);
