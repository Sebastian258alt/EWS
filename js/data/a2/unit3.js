// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit3.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2c
// Part of UNITS_A2 — Articles & Quantifiers

const UNITS_A2_UNIT3 = [
  {
    id:'u2c', cefr:'A2', title:'Articles & Quantifiers', titlePt:'Artigos e Quantificadores',
    desc:'Master a/an/the and count what you have 🔢',
    descPt:'Domina o a/an/the e quantifica o que tens 🔢',
    color:'#43a047', icon:'🔢', premium:false,
    lessons:[

      {id:'l2c1', title:'A & An (Indefinite Article)', titlePt:'A & An (Artigo Indefinido)', icon:'🔡', xp:20, learn:{
        explanation:{
          en:'Use "a" before words that start with a consonant sound: "a book", "a university" (U sounds like \"you\"). Use "an" before words that start with a vowel sound: "an apple", "an hour" (H is silent). Use a/an for singular countable nouns mentioned for the first time or when the listener doesn\'t know which one.',
          pt:'Usa "a" antes de palavras que começam com som de consoante: "a book", "a university" (U soa como "you"). Usa "an" antes de palavras que começam com som de vogal: "an apple", "an hour" (H é mudo). Usa a/an para substantivos contáveis no singular mencionados pela primeira vez ou quando o ouvinte não sabe qual.'
        },
        examples:[
          {en:'I saw a dog and an elephant at the zoo.', pt:'Vi um cão e um elefante no jardim zoológico.'},
          {en:'She is an English teacher.', pt:'Ela é professora de inglês.'},
          {en:'I need a new phone — it\'s an urgent matter.', pt:'Preciso de um telemóvel novo — é um assunto urgente.'},
        ],
        practice:[
          {q:'\"___ umbrella\" — which article?', opts:['a','an','the','no article'], ans:1, exp:'\"An umbrella\" — umbrella starts with a vowel sound (U).'},
          {q:'\"___ university\" — which article?', opts:['a','an','the','no article'], ans:0, exp:'\"A university\" — university starts with a \"Y\" sound (consonant sound), so use \"a\".'},
        ],
      }, qs:[
        {q:'\"She has ___ idea for the project.\"',opts:['a','an','the','-'],ans:1,exp:'\"An idea\" — idea starts with a vowel sound (I). An + vowel sound.'},
        {q:'\"He is ___ honest man.\"',opts:['a','an','the','-'],ans:1,exp:'\"An honest man\" — H is silent in \"honest\", so it sounds like \"onest\" = vowel sound → AN.'},
        {q:'\"I want ___ orange juice.\"',opts:['a','an','the','-'],ans:1,exp:'\"An orange\" — orange starts with a vowel sound (O). An + vowel sound.'},
        {q:'\"She works as ___ nurse.\"',opts:['a','an','the','-'],ans:0,exp:'\"A nurse\" — nurse starts with N (consonant sound) → A.'},
        {q:'When do we use \"a\" or \"an\"?',opts:['For all nouns','For plural nouns only','For singular countable nouns (first mention)','For uncountable nouns'],ans:2,exp:'A/an is used with SINGULAR COUNTABLE nouns. Not plural, not uncountable.'},
      ]},

      {id:'l2c2', title:'The (Definite Article)', titlePt:'The (Artigo Definido)', icon:'📌', xp:25, learn:{
        explanation:{
          en:'Use "the" when both speaker and listener know which specific thing is being discussed. Use the: (1) for second mention: "I have a cat. The cat is black." (2) unique things: "the sun", "the internet", "the Zambezi River". (3) with superlatives: "the best". Do NOT use the with most proper nouns, countries (except The USA, The UK), or general ideas.',
          pt:'Usa "the" quando o falante e o ouvinte sabem de que coisa específica se fala. Usa the: (1) segunda menção: "I have a cat. The cat is black." (2) coisas únicas: "the sun", "the internet", "the Zambezi River". (3) com superlativos: "the best". NÃO uses the com a maioria dos nomes próprios, países (excepto The USA, The UK) ou ideias gerais.'
        },
        examples:[
          {en:'The Zambezi River is the longest river in Mozambique.', pt:'O rio Zambeze é o rio mais comprido de Moçambique.'},
          {en:'Can you turn off the lights, please?', pt:'Podes apagar as luzes, por favor?'},
          {en:'She is the best student in her class.', pt:'Ela é a melhor aluna da turma.'},
        ],
        practice:[
          {q:'\"___ moon is beautiful tonight.\"', opts:['A','An','The','No article'], ans:2, exp:'The moon = unique object. There is only one moon → THE.'},
          {q:'\"I love ___ music.\" (in general)', opts:['a','an','the','no article'], ans:3, exp:'General ideas need NO article: \"I love music\" (not \"the music\").'},
        ],
      }, qs:[
        {q:'\"She plays ___ piano very well.\"',opts:['a','an','the','-'],ans:2,exp:'Musical instruments: THE piano, THE guitar, THE drums. Always with THE.'},
        {q:'\"I go to ___ school every day.\" (general meaning)',opts:['a','an','the','-'],ans:3,exp:'Some expressions need no article: go to school, go to work, go home, go to bed.'},
        {q:'\"___ Pacific Ocean is the largest ocean.\"',opts:['A','An','The','-'],ans:2,exp:'Oceans, rivers, and seas take THE: the Pacific Ocean, the Zambezi River.'},
        {q:'\"I bought a shirt. ___ shirt is blue.\"',opts:['A','An','The','-'],ans:2,exp:'Second mention = THE. First time = a shirt. Second time = THE shirt (we both know which one).'},
        {q:'\"She is from ___ Mozambique.\"',opts:['a','an','the','-'],ans:3,exp:'Most countries have NO article: Mozambique, Brazil, France. Exceptions: the USA, the UK, the Philippines.'},
      ]},

      {id:'l2c3', title:'Much, Many & A Lot Of', titlePt:'Much, Many e A Lot Of', icon:'📦', xp:20, learn:{
        explanation:{
          en:'"Much" is used with uncountable nouns (things you can\'t count) in negatives and questions: "How much water?", "Not much sugar." "Many" is used with countable nouns (things you can count) in negatives and questions: "How many people?", "Not many books." "A lot of" / "lots of" works with both and is common in positive sentences.',
          pt:'"Much" usa-se com substantivos incontáveis (coisas que não se podem contar) em negativos e perguntas: "How much water?", "Not much sugar." "Many" usa-se com substantivos contáveis (que se podem contar) em negativos e perguntas: "How many people?", "Not many books." "A lot of" / "lots of" funciona com ambos e é comum em frases positivas.'
        },
        examples:[
          {en:'I don\'t have much time — the bus leaves soon.', pt:'Não tenho muito tempo — o autocarro parte em breve.'},
          {en:'How many students are in your class?', pt:'Quantos alunos há na tua turma?'},
          {en:'There are a lot of cars on the road today.', pt:'Há muitos carros na estrada hoje.'},
        ],
        practice:[
          {q:'\"How ___ water do you drink a day?\"', opts:['many','much','a lot of','some'], ans:1, exp:'Water is uncountable → MUCH. \"How much water?\"'},
          {q:'\"How ___ books did you read last month?\"', opts:['much','a lot','many','lots'], ans:2, exp:'Books are countable → MANY. \"How many books?\"'},
        ],
      }, qs:[
        {q:'\"There isn\'t ___ milk in the fridge.\"',opts:['many','much','a lot','some'],ans:1,exp:'Milk is uncountable → MUCH. \"Not much milk.\"'},
        {q:'\"She has ___ friends in Maputo.\"',opts:['much','many','a lot','few'],ans:1,exp:'Friends are countable → MANY friends (positive or negative).'},
        {q:'\"I ate ___ food at the party.\"',opts:['many','much','a lot of','few'],ans:2,exp:'\"A lot of\" works in positive sentences with both countable and uncountable nouns.'},
        {q:'\"How ___ money do you have?\"',opts:['many','much','a lot of','some'],ans:1,exp:'Money is uncountable → MUCH. \"How much money?\"'},
        {q:'Which sentence is CORRECT?',opts:['I don\'t have many time.','I don\'t have much time.','I have many time.','I have much times.'],ans:1,exp:'Time is uncountable → MUCH. \"I don\'t have MUCH time.\" Never \"many time\".'},
      ]},

      {id:'l2c4', title:'Some & Any', titlePt:'Some & Any', icon:'🔢', xp:20, learn:{
        explanation:{
          en:'"Some" is used in positive sentences with countable and uncountable nouns: "I have some money", "There are some books." "Any" is used in negatives and questions: "I don\'t have any money", "Do you have any questions?" Exception: we use "some" in offers and requests because we expect a \"yes\": "Would you like some tea?"',
          pt:'"Some" usa-se em frases positivas com substantivos contáveis e incontáveis: "I have some money", "There are some books." "Any" usa-se em negativos e perguntas: "I don\'t have any money", "Do you have any questions?" Excepção: usamos "some" em ofertas e pedidos porque esperamos um \"sim\": "Would you like some tea?"'
        },
        examples:[
          {en:'I have some questions about the lesson.', pt:'Tenho algumas perguntas sobre a lição.'},
          {en:'There isn\'t any bread left — I ate it all.', pt:'Não sobrou pão — comi tudo.'},
          {en:'Would you like some coffee?', pt:'Gostarias de um café?'},
        ],
        practice:[
          {q:'\"___ milk in the fridge\" (positive sentence)', opts:['any','some','much','little'], ans:1, exp:'Positive sentence → SOME. \"There is some milk.\"'},
          {q:'\"Is there ___ sugar?\" (question)', opts:['some','any','much','little'], ans:1, exp:'Question → ANY. \"Is there any sugar?\"'},
        ],
      }, qs:[
        {q:'\"I need ___ help with this exercise.\"',opts:['any','some','much','few'],ans:1,exp:'Positive sentence → SOME. \"I need some help.\"'},
        {q:'\"She doesn\'t have ___ money.\"',opts:['some','any','much','a lot'],ans:1,exp:'Negative sentence → ANY. \"She doesn\'t have any money.\"'},
        {q:'\"Would you like ___ tea?\"',opts:['any','some','much','many'],ans:1,exp:'Offer → SOME (we expect them to say yes). \"Would you like some tea?\"'},
        {q:'\"Do you have ___ questions?\"',opts:['some','any','much','many'],ans:1,exp:'Question → ANY. \"Do you have any questions?\"'},
        {q:'\"There are ___ apples on the table.\"',opts:['any','some','much','a lot'],ans:1,exp:'Positive sentence with countable noun → SOME. \"There are some apples.\"'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT3);
