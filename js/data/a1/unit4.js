// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit4.js
// ═══════════════════════════════════════════════════════
// Unit ID: u4
// Part of UNITS_A1

const UNITS_A1_UNIT4 = [
  {
      id:'u4', cefr:'A1', title:'Vocabulary Builder', titlePt:'Construtor de Vocabulário',
      desc:'Expand your word power! 💡',
      descPt:'Expande o teu vocabulário! 💡',
      color:'#00e676', icon:'📚', premium:false,
      lessons:[
        {id:'l10', title:'Common Adjectives', titlePt:'Adjectivos Comuns', icon:'🎨', xp:20, learn:{
          explanation:{
            en:'Adjectives describe nouns — people, places, or things. They usually go before the noun ("a big house") or after "to be" ("The house is big"). Learning opposites (big/small, hot/cold) helps you remember faster.',
            pt:'Os adjectivos descrevem substantivos — pessoas, lugares ou coisas. Normalmente vêm antes do substantivo ("a big house") ou depois de "to be" ("The house is big"). Aprender opostos (big/small, hot/cold) ajuda-te a memorizar mais depressa.'
          },
          examples:[
            {en:'This is a huge elephant.', pt:'Este é um elefante enorme.'},
            {en:'My sister is very kind.', pt:'A minha irmã é muito gentil.'},
            {en:'That phone is expensive.', pt:'Aquele telemóvel é caro.'},
          ],
          practice:[
            {q:'Opposite of "cheap":', opts:['small','expensive','kind','tiny'], ans:1, exp:'cheap ↔ expensive.'},
            {q:'"The food is ___." (very tasty)', opts:['bland','disgusting','delicious','salty'], ans:2, exp:'delicious = very tasty.'},
          ],
        }, qs:[
          {q:'Which word means "very big"?',opts:['tiny','huge','narrow','shallow'],ans:1,exp:'"Huge" = extremely large. Opposite: "tiny".'},
          {q:'"The weather is very ___. I need a jacket."',opts:['hot','warm','cold','boiling'],ans:2,exp:'If you need a jacket, it\'s "cold"!'},
          {q:'"She is a ___ girl. She always helps others."',opts:['selfish','kind','rude','lazy'],ans:1,exp:'Someone who helps others is "kind".'},
          {q:'What does "expensive" mean?',opts:['Cheap','Costing a lot','Free','Beautiful'],ans:1,exp:'"Expensive" = high price. Opposite: "cheap".'},
          {q:'"The soup tastes ___." (very good)',opts:['disgusting','delicious','bland','salty'],ans:1,exp:'"Delicious" = very tasty. 😋'},
        ]},
        {id:'l11', title:'Everyday Actions', titlePt:'Acções do Dia-a-dia', icon:'🏃', xp:20, learn:{
          explanation:{
            en:'Action verbs describe what we do every day: eat, drink, read, sleep, watch, open, close. Pairing the right verb with the right noun (watch TV, read a book) sounds natural in English.',
            pt:'Os verbos de acção descrevem o que fazemos todos os dias: eat, drink, read, sleep, watch, open, close. Juntar o verbo certo ao substantivo certo (watch TV, read a book) soa natural em inglês.'
          },
          examples:[
            {en:'I read a book before bed.', pt:'Eu leio um livro antes de dormir.'},
            {en:'We watch TV in the evening.', pt:'Nós vemos TV à noite.'},
            {en:'She opens the window every morning.', pt:'Ela abre a janela todas as manhãs.'},
          ],
          practice:[
            {q:'Which verb goes with "a shower"?', opts:['eat','take','read','watch'], ans:1, exp:'We TAKE a shower.'},
            {q:'"I always ___ my teeth at night."', opts:['brush','watch','read','open'], ans:0, exp:'We BRUSH our teeth.'},
          ],
        }, qs:[
          {q:'What do you do with a book?',opts:['eat','read','drive','cook'],ans:1,exp:'You "read" a book. 📖'},
          {q:'"I ___ breakfast every morning."',opts:['do','make','eat','drink'],ans:2,exp:'We "eat" breakfast.'},
          {q:'Where do you sleep?',opts:['In the kitchen','In the bathroom','In the garden','In the bedroom'],ans:3,exp:'You sleep in the bedroom!'},
          {q:'"Can you ___ the door, please? It\'s hot."',opts:['close','open','lock','break'],ans:1,exp:'If it\'s hot, you want to "open" the door!'},
          {q:'Which verb goes with "TV"?',opts:['watch','see','look','hear'],ans:0,exp:'We "watch" TV. 📺'},
        ]},
        {id:'l12', title:'Food & Cooking', titlePt:'Comida e Culinária', icon:'🍳', xp:25, learn:{
          explanation:{
            en:'Cooking vocabulary helps you talk about meals and recipes: boil, fry, bake, grill, wash, cut. Words like "raw", "spicy", and "delicious" describe how food tastes or looks.',
            pt:'O vocabulário de culinária ajuda-te a falar sobre refeições e receitas: boil, fry, bake, grill, wash, cut. Palavras como "raw", "spicy" e "delicious" descrevem o sabor ou aspecto da comida.'
          },
          examples:[
            {en:'I like to fry onions first.', pt:'Eu gosto de fritar cebola primeiro.'},
            {en:'This soup is too spicy for me.', pt:'Esta sopa é demasiado picante para mim.'},
            {en:'Can you cut the tomatoes, please?', pt:'Podes cortar os tomates, por favor?'},
          ],
          practice:[
            {q:'Which method uses an oven?', opts:['boil','bake','fry','wash'], ans:1, exp:'BAKE = cook in an oven.'},
            {q:'"Raw" food is:', opts:['well-cooked','not cooked','very sweet','very salty'], ans:1, exp:'Raw = not cooked yet.'},
          ],
        }, qs:[
          {q:'What is the main ingredient in bread?',opts:['rice','flour','sugar','salt'],ans:1,exp:'Bread is made from "flour".'},
          {q:'"I need to ___ the vegetables before cooking."',opts:['wash','read','wear','build'],ans:0,exp:'You "wash" vegetables to clean them.'},
          {q:'Which cooking method uses water?',opts:['fry','bake','boil','grill'],ans:2,exp:'"Boil" = cooking in hot water.'},
          {q:'"This steak is too ___. I ordered it well-done."',opts:['cooked','raw','sweet','salty'],ans:1,exp:'"Raw" = not cooked.'},
          {q:'What does "spicy" mean?',opts:['Sweet taste','Hot burning taste','No taste','Sour taste'],ans:1,exp:'"Spicy" = hot flavour from chili/pepper.'},
        ]},
        {id:'l13', title:'Body Parts', titlePt:'Partes do Corpo', icon:'🦴', xp:20, learn:{
          explanation:{
            en:'Body part vocabulary is essential for describing health, pain, and appearance: head, hand, eyes, ears, leg, arm. We say "My ___ hurts" to describe pain.',
            pt:'O vocabulário das partes do corpo é essencial para descrever saúde, dor e aparência: head, hand, eyes, ears, leg, arm. Dizemos "My ___ hurts" para descrever dor.'
          },
          examples:[
            {en:'My head hurts.', pt:'Dói-me a cabeça.'},
            {en:'She has beautiful eyes.', pt:'Ela tem olhos bonitos.'},
            {en:'He broke his arm.', pt:'Ele partiu o braço.'},
          ],
          practice:[
            {q:'"Hurts" means:', opts:['feels good','causes pain','looks nice','smells bad'], ans:1, exp:'Hurts = causes pain.'},
            {q:'Which body part do you use to SMELL?', opts:['ears','eyes','nose','mouth'], ans:2, exp:'You smell with your NOSE.'},
          ],
        }, qs:[
          {q:'"Head" means:',opts:['mão','pé','cabeça','nariz'],ans:2,exp:'head = cabeça. "Use your head!" means think!'},
          {q:'What is "hand" in Portuguese?',opts:['pé','mão','braço','dedo'],ans:1,exp:'hand = mão. "Give me your hand."'},
          {q:'Which body part do you use to SEE?',opts:['ears','nose','eyes','mouth'],ans:2,exp:'You see with your EYES! 👀'},
          {q:'Which body part do you use to HEAR?',opts:['eyes','ears','nose','tongue'],ans:1,exp:'You hear with your EARS! 👂'},
          {q:'"My ___ hurts." (pointing to leg)',opts:['arm','head','leg','finger'],ans:2,exp:'leg = perna. "My leg hurts."'},
        ]},
        {id:'l14', title:'Animals & Nature', titlePt:'Animais e Natureza', icon:'🦁', xp:20, learn:{
          explanation:{
            en:'Nature vocabulary covers animals, plants, and the environment. Each animal makes a different sound and lives in a different habitat — knowing these words helps with storytelling and descriptions.',
            pt:'O vocabulário da natureza cobre animais, plantas e o ambiente. Cada animal faz um som diferente e vive num habitat diferente — saber estas palavras ajuda a contar histórias e a descrever.'
          },
          examples:[
            {en:'The lion is the king of the jungle.', pt:'O leão é o rei da selva.'},
            {en:'Fish live in water.', pt:'Os peixes vivem na água.'},
            {en:'Trees give us oxygen.', pt:'As árvores dão-nos oxigénio.'},
          ],
          practice:[
            {q:'Which animal says "moo"?', opts:['dog','cow','cat','lion'], ans:1, exp:'Cows say "moo"!'},
            {q:'Where do birds usually live?', opts:['underground','in water','in trees','in caves'], ans:2, exp:'Birds usually live in trees / nests.'},
          ],
        }, qs:[
          {q:'What sound does a dog make?',opts:['meow','woof','moo','roar'],ans:1,exp:'Dogs go "woof"! 🐕 Cats go "meow".'},
          {q:'"Lion" in Portuguese is:',opts:['elefante','leão','girafa','crocodilo'],ans:1,exp:'lion = leão. Lions are symbols of Africa! 🦁'},
          {q:'Where do fish live?',opts:['in trees','in water','underground','in the sky'],ans:1,exp:'Fish live in water — rivers, lakes, oceans!'},
          {q:'Which animal is the biggest?',opts:['cat','dog','elephant','bird'],ans:2,exp:'The elephant is the biggest land animal on Earth!'},
          {q:'"Tree" means:',opts:['flor','erva','árvore','pedra'],ans:2,exp:'tree = árvore. Trees give us oxygen!'},
        ]},
        {id:'l4a', title:'Weather & Seasons', titlePt:'Tempo e Estações', icon:'⛅', xp:20, learn:{
          explanation:{
            en:'We talk about weather using "It is...": "It is sunny", "It is raining". The four seasons are spring, summer, autumn (fall), and winter. Each season has typical weather and activities.',
            pt:'Falamos sobre o tempo usando "It is...": "It is sunny", "It is raining". As quatro estações são spring, summer, autumn (fall) e winter. Cada estação tem um clima e actividades típicas.'
          },
          examples:[
            {en:'It is sunny today.', pt:'Hoje está sol.'},
            {en:'It rains a lot in winter.', pt:'Chove muito no inverno.'},
            {en:'I love summer because it\'s hot.', pt:'Eu adoro o verão porque é quente.'},
          ],
          practice:[
            {q:'"It is raining" describes the:', opts:['season','weather','time','colour'], ans:1, exp:'It describes WEATHER.'},
            {q:'Which season comes after spring?', opts:['winter','autumn','summer','none'], ans:2, exp:'Spring → Summer → Autumn → Winter.'},
          ],
        }, qs:[
          {q:'"It is ___ today. Bring an umbrella!"',opts:['sunny','raining','cold','hot'],ans:1,exp:'You need an umbrella when it\'s RAINING.'},
          {q:'How many seasons are there?',opts:['2','3','4','5'],ans:2,exp:'There are 4 seasons: spring, summer, autumn, winter.'},
          {q:'"Hot" is the opposite of:',opts:['warm','cold','sunny','windy'],ans:1,exp:'hot ↔ cold.'},
          {q:'Which season is the coldest?',opts:['summer','spring','winter','autumn'],ans:2,exp:'Winter is the coldest season.'},
          {q:'"It\'s very windy today" means:',opts:['It is raining a lot','There is a lot of wind','It is very hot','It is snowing'],ans:1,exp:'Windy = lots of wind blowing.'},
        ]},
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT4);
