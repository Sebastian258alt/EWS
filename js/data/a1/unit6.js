// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit6.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1b — Adverbs, Prepositions & Comparisons
// Part of UNITS_A1

const UNITS_A1_UNIT6 = [
  {
    id:'u1b', cefr:'A1', title:'Adverbs, Prepositions & Comparisons', titlePt:'Advérbios, Preposições e Comparações',
    desc:'Describe how often, where things are, and compare them! 📊',
    descPt:'Descreve com que frequência, onde as coisas estão e compara-as! 📊',
    color:'#00acc1', icon:'📊', premium:false,
    lessons:[

      {id:'l1b1', title:'Frequency Adverbs', titlePt:'Advérbios de Frequência', icon:'🔁', xp:20, learn:{
        explanation:{
          en:'Frequency adverbs tell us HOW OFTEN someone does something. Order from most to least: always (100%) → usually → often → sometimes → rarely → never (0%). These adverbs go BEFORE the main verb but AFTER the verb "to be". "I always eat breakfast." "She is never late."',
          pt:'Os advérbios de frequência dizem-nos COM QUE FREQUÊNCIA alguém faz algo. Ordem de mais para menos: always (100%) → usually → often → sometimes → rarely → never (0%). Estes advérbios vêm ANTES do verbo principal mas DEPOIS do verbo "to be". "I always eat breakfast." "She is never late."'
        },
        examples:[
          {en:'I always wake up early. (every day)', pt:'Acordo sempre cedo. (todos os dias)'},
          {en:'She usually takes the bus. (most days)', pt:'Ela normalmente apanha o autocarro. (a maioria dos dias)'},
          {en:'We sometimes go to the beach.', pt:'Nós às vezes vamos à praia.'},
          {en:'He rarely eats fast food.', pt:'Ele raramente come fast food.'},
          {en:'They are never late for class.', pt:'Eles nunca chegam atrasados à aula.'},
        ],
        practice:[
          {q:'"Always" means:', opts:['sometimes','never','100% of the time','rarely'], ans:2, exp:'"Always" = 100% of the time — every single time!'},
          {q:'Where does a frequency adverb go?', opts:['at the end','before the main verb','after the object','at the start only'], ans:1, exp:'Before the main verb: "I ALWAYS eat." But after "to be": "She IS never late."'},
        ],
      }, qs:[
        {q:'Which adverb means 0% of the time?',opts:['always','usually','sometimes','never'],ans:3,exp:'"Never" = 0% — not even once!'},
        {q:'"I ___ brush my teeth before bed."',opts:['always','never','sometimes','usually'],ans:0,exp:'You should ALWAYS brush your teeth! 😁'},
        {q:'Where does "always" go in: "She ___ is late"?',opts:['She always is late','She is always late','She is late always','Always she is late'],ans:1,exp:'"She IS ALWAYS late." — after "to be"!'},
        {q:'"Sometimes" means:',opts:['every day','never','now and then','always'],ans:2,exp:'"Sometimes" = occasionally, now and then — às vezes!'},
        {q:'"He ___ eats vegetables." (almost never)',opts:['always','usually','rarely','often'],ans:2,exp:'"He RARELY eats vegetables." = Ele raramente come legumes!'},
        {q:'Correct order:',opts:['I go usually to school early','I usually go to school early','Usually I go to school early','I go to usually school early'],ans:1,exp:'"I USUALLY GO to school early." — adverb before main verb!'},
        {q:'"Often" is closest in meaning to:',opts:['rarely','sometimes','usually','never'],ans:2,exp:'"Often" is close to "usually" — both mean frequently, but usually is a bit more!'},
      ]},

      {id:'l1b2', title:'Prepositions of Place', titlePt:'Preposições de Lugar', icon:'📍', xp:20, learn:{
        explanation:{
          en:'Prepositions of place describe WHERE something is. Key ones: in (dentro de), on (em cima de), under (debaixo de), next to (ao lado de), between (entre), in front of (em frente de), behind (atrás de), above (acima de), below (abaixo de). "The cat is ON the table." "My keys are IN the bag."',
          pt:'As preposições de lugar descrevem ONDE algo está. As principais: in (dentro de), on (em cima de), under (debaixo de), next to (ao lado de), between (entre), in front of (em frente de), behind (atrás de), above (acima de), below (abaixo de). "The cat is ON the table." "My keys are IN the bag."'
        },
        examples:[
          {en:'The book is on the table.', pt:'O livro está em cima da mesa.'},
          {en:'The cat is under the bed.', pt:'O gato está debaixo da cama.'},
          {en:'My house is next to the school.', pt:'A minha casa está ao lado da escola.'},
          {en:'The park is in front of the hotel.', pt:'O parque fica em frente do hotel.'},
          {en:'The keys are in the bag.', pt:'As chaves estão na mochila.'},
        ],
        practice:[
          {q:'"The cat is ___ the bed." (below it)', opts:['on','above','under','in front of'], ans:2, exp:'Under = below/debaixo! The cat is UNDER the bed.'},
          {q:'"Next to" means:', opts:['debaixo de','em cima de','ao lado de','em frente de'], ans:2, exp:'Next to = ao lado de! Beside something.'},
        ],
      }, qs:[
        {q:'"The keys are ___ the bag." (inside)',opts:['on','under','in','next to'],ans:2,exp:'"In the bag" = inside the bag!'},
        {q:'"The book is ___ the table." (on top)',opts:['under','in','behind','on'],ans:3,exp:'"ON the table" = em cima da mesa!'},
        {q:'"Between" means:',opts:['ao lado de','debaixo de','entre','em frente de'],ans:2,exp:'"Between" = entre! "The bank is between the school and the market."'},
        {q:'"The school is ___ my house." (directly in front)',opts:['behind','in front of','under','above'],ans:1,exp:'"In front of" = em frente de!'},
        {q:'"The cat is ___ the sofa." (behind it)',opts:['in front of','above','next to','behind'],ans:3,exp:'"Behind" = atrás de!'},
        {q:'"Above" means:',opts:['acima de','abaixo de','ao lado de','dentro de'],ans:0,exp:'"Above" = acima de! Higher than something.'},
        {q:'Which is correct?',opts:['The pen is in on the desk','The pen is on the desk','The pen is at on the desk','The pen on the desk is'],ans:1,exp:'"The pen IS ON the desk." — simple and correct!'},
      ]},

      {id:'l1b3', title:'Prepositions of Time', titlePt:'Preposições de Tempo', icon:'🕐', xp:20, learn:{
        explanation:{
          en:'Time prepositions tell us WHEN something happens. The three main ones: IN = months, years, seasons, parts of day ("in January", "in 2025", "in the morning"). ON = days and dates ("on Monday", "on 15th March"). AT = exact times and fixed expressions ("at 7 AM", "at night", "at Christmas").',
          pt:'As preposições de tempo dizem-nos QUANDO algo acontece. As três principais: IN = meses, anos, estações, partes do dia ("in January", "in 2025", "in the morning"). ON = dias e datas ("on Monday", "on 15th March"). AT = horas exactas e expressões fixas ("at 7 AM", "at night", "at Christmas").'
        },
        examples:[
          {en:'I was born in March. (month)', pt:'Nasci em Março. (mês)'},
          {en:'School starts on Monday. (day)', pt:'A escola começa na segunda-feira. (dia)'},
          {en:'The class is at 9 AM. (time)', pt:'A aula é às 9h. (hora)'},
          {en:'We rest in the afternoon. (part of day)', pt:'Descansamos de tarde. (parte do dia)'},
          {en:'I visit family at Christmas. (fixed expression)', pt:'Visito a família no Natal. (expressão fixa)'},
        ],
        practice:[
          {q:'"The party is ___ Saturday."', opts:['in','at','on','by'], ans:2, exp:'"ON Saturday" — use ON for days of the week!'},
          {q:'"She was born ___ 1999."', opts:['on','at','in','by'], ans:2, exp:'"IN 1999" — use IN for years!'},
        ],
      }, qs:[
        {q:'"The match is ___ 3 PM."',opts:['in','on','at','by'],ans:2,exp:'"AT 3 PM" — use AT for specific times!'},
        {q:'"My birthday is ___ April."',opts:['at','on','in','by'],ans:2,exp:'"IN April" — use IN for months!'},
        {q:'"The meeting is ___ Monday."',opts:['in','at','on','by'],ans:2,exp:'"ON Monday" — use ON for days!'},
        {q:'"She wakes up early ___ the morning."',opts:['at','on','in','by'],ans:2,exp:'"IN the morning" — use IN for parts of the day!'},
        {q:'"School finishes ___ June."',opts:['at','on','in','by'],ans:2,exp:'"IN June" — use IN for months!'},
        {q:'"I was born ___ 5th May."',opts:['in','at','on','by'],ans:2,exp:'"ON 5th May" — use ON for specific dates!'},
        {q:'Which is CORRECT?',opts:['at Monday','on Monday','in Monday','by Monday'],ans:1,exp:'"ON Monday" — days of the week always use ON!'},
      ]},

      {id:'l1b4', title:'Comparatives', titlePt:'Comparativos', icon:'⚖️', xp:25, learn:{
        explanation:{
          en:'We use comparatives to compare two things. For SHORT adjectives: add -er + than. "tall → taller than", "big → bigger than", "hot → hotter than". For LONG adjectives (3+ syllables): use more + adj + than. "beautiful → more beautiful than". Irregular: good → better, bad → worse, far → farther.',
          pt:'Usamos os comparativos para comparar duas coisas. Para adjectivos CURTOS: adiciona -er + than. "tall → taller than", "big → bigger than", "hot → hotter than". Para adjectivos LONGOS (3+ sílabas): usa more + adj + than. "beautiful → more beautiful than". Irregulares: good → better, bad → worse, far → farther.'
        },
        examples:[
          {en:'Maputo is bigger than Inhambane.', pt:'Maputo é maior do que Inhambane.'},
          {en:'English is easier than Chinese.', pt:'O inglês é mais fácil do que o chinês.'},
          {en:'This phone is more expensive than that one.', pt:'Este telemóvel é mais caro do que aquele.'},
          {en:'She is better at English than me.', pt:'Ela é melhor em inglês do que eu.'},
          {en:'Today is hotter than yesterday.', pt:'Hoje está mais quente do que ontem.'},
        ],
        practice:[
          {q:'Comparative of "tall":', opts:['tallest','more tall','taller','most tall'], ans:2, exp:'"Tall" is short → add -er: taller!'},
          {q:'Comparative of "beautiful":', opts:['beautifuler','more beautiful','beautifuller','most beautiful'], ans:1, exp:'"Beautiful" is long → use more: more beautiful!'},
        ],
      }, qs:[
        {q:'Comparative of "big":',opts:['biger','bigger','more big','most big'],ans:1,exp:'"Big" → BIGGER (double the G before -er)!'},
        {q:'Comparative of "expensive":',opts:['expensiver','more expensiver','more expensive','expensiveer'],ans:2,exp:'"Expensive" is long → MORE expensive!'},
        {q:'"Maputo is ___ than Xai-Xai." (bigger)',opts:['more big','biger','bigger','biggest'],ans:2,exp:'"Maputo is BIGGER than Xai-Xai."'},
        {q:'Comparative of "good":',opts:['gooder','more good','better','goodest'],ans:2,exp:'"Good" is irregular! good → BETTER!'},
        {q:'Comparative of "bad":',opts:['badder','more bad','worst','worse'],ans:3,exp:'"Bad" is irregular! bad → WORSE!'},
        {q:'"This road is ___ than the other one." (dangerous)',opts:['dangerouser','more dangerous','most dangerous','dangerousmore'],ans:1,exp:'"More dangerous" — long adjective uses MORE!'},
        {q:'"She runs ___ than me." (fast)',opts:['more fast','fastest','faster','fastly'],ans:2,exp:'"Faster than me" — short adjective + -er!'},
      ]},

      {id:'l1b5', title:'Superlatives', titlePt:'Superlativos', icon:'🏆', xp:25, learn:{
        explanation:{
          en:'Superlatives say something is the MOST or LEAST of all. For SHORT adjectives: the + adj + -est. "tall → the tallest". For LONG adjectives: the most + adj. "the most beautiful". Irregular: good → the best, bad → the worst, far → the farthest. We always use "the" before a superlative.',
          pt:'Os superlativos dizem que algo é o MAIS ou o MENOS de todos. Para adjectivos CURTOS: the + adj + -est. "tall → the tallest". Para adjectivos LONGOS: the most + adj. "the most beautiful". Irregulares: good → the best, bad → the worst, far → the farthest. Usamos sempre "the" antes de um superlativo.'
        },
        examples:[
          {en:'Mount Everest is the highest mountain.', pt:'O Monte Everest é a montanha mais alta.'},
          {en:'This is the most beautiful beach in Mozambique.', pt:'Esta é a praia mais bonita de Moçambique.'},
          {en:'He is the best player on the team.', pt:'Ele é o melhor jogador da equipa.'},
          {en:'This is the worst film I have ever seen.', pt:'Este é o pior filme que já vi.'},
          {en:'She is the most intelligent student.', pt:'Ela é a estudante mais inteligente.'},
        ],
        practice:[
          {q:'Superlative of "tall":', opts:['most tall','tallest','the tallest','taller'], ans:2, exp:'"The tallest" — always use "the" with superlatives!'},
          {q:'Superlative of "good":', opts:['the goodest','the most good','the better','the best'], ans:3, exp:'"Good" is irregular → THE BEST!'},
        ],
      }, qs:[
        {q:'Superlative of "big":',opts:['the most big','the biger','the biggest','biggest'],ans:2,exp:'"Big" → THE BIGGEST!'},
        {q:'Superlative of "bad":',opts:['the baddest','the most bad','the worse','the worst'],ans:3,exp:'"Bad" is irregular → THE WORST!'},
        {q:'"Maputo is ___ city in Mozambique." (big)',opts:['bigger','more big','the biggest','most big'],ans:2,exp:'"Maputo is THE BIGGEST city in Mozambique."'},
        {q:'Which is CORRECT?',opts:['She is most intelligent.','She is the most intelligent.','She is the intelligentst.','She is more intelligent.'],ans:1,exp:'"She is THE MOST intelligent." — always use THE!'},
        {q:'Superlative of "fast":',opts:['fastest','the faster','the fastest','most fastest'],ans:2,exp:'"The fastest"! Short adjective → the + -est!'},
        {q:'"This is ___ day of my life!" (happy)',opts:['the happiest','the most happiest','more happy','happiest'],ans:0,exp:'"The happiest day of my life!" 😊'},
        {q:'"The ___ is the best food." (your favourite!)',opts:['Depends on you!','same as comparative','always long adjective','always short adjective'],ans:0,exp:'Superlative describes the BEST/WORST of all — choose your favourite!'},
      ]},

    ]
  }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT6);
