// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit7.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1c — Nouns & Quantities
// Part of UNITS_A1

const UNITS_A1_UNIT7 = [
  {
    id:'u1c', cefr:'A1', title:'Nouns & Quantities', titlePt:'Substantivos e Quantidades',
    desc:'Count, measure and describe amounts in English! 🔢',
    descPt:'Conta, mede e descreve quantidades em inglês! 🔢',
    color:'#558b2f', icon:'🔢', premium:false,
    lessons:[

      {id:'l1c1', title:'Countable & Uncountable Nouns', titlePt:'Substantivos Contáveis e Incontáveis', icon:'🍎', xp:25, learn:{
        explanation:{
          en:'Countable nouns are things you can count one by one: one apple, two apples, three books. They can be singular or plural. Uncountable nouns cannot be counted individually — they are substances, liquids, or abstract things: water, rice, milk, music, advice. You CANNOT say "one water" or "two rices". Instead say "some water" or "a glass of water".',
          pt:'Os substantivos contáveis são coisas que podes contar uma a uma: one apple, two apples, three books. Podem ser singular ou plural. Os substantivos incontáveis não podem ser contados individualmente — são substâncias, líquidos ou coisas abstractas: water, rice, milk, music, advice. NÃO podes dizer "one water" ou "two rices". Em vez disso diz "some water" ou "a glass of water".'
        },
        examples:[
          {en:'I have two apples. (countable)', pt:'Eu tenho duas maçãs. (contável)'},
          {en:'I drink water every day. (uncountable)', pt:'Eu bebo água todos os dias. (incontável)'},
          {en:'She bought three books. (countable)', pt:'Ela comprou três livros. (contável)'},
          {en:'We need some milk. (uncountable)', pt:'Nós precisamos de algum leite. (incontável)'},
          {en:'Can I have a cup of tea? (uncountable)', pt:'Posso ter uma chávena de chá? (incontável)'},
        ],
        practice:[
          {q:'Which is an UNCOUNTABLE noun?', opts:['book','chair','water','dog'], ans:2, exp:'"Water" cannot be counted — you can\'t say "one water, two waters". It\'s uncountable!'},
          {q:'Which is a COUNTABLE noun?', opts:['milk','rice','apple','sugar'], ans:2, exp:'"Apple" can be counted: one apple, two apples. It\'s countable!'},
        ],
      }, qs:[
        {q:'Which noun is COUNTABLE?',opts:['water','milk','sugar','chair'],ans:3,exp:'"Chair" is countable — one chair, two chairs, three chairs!'},
        {q:'Which noun is UNCOUNTABLE?',opts:['book','pen','rice','apple'],ans:2,exp:'"Rice" is uncountable — you can\'t say "one rice, two rices"!'},
        {q:'"I need ___ water." (some amount)',opts:['a','two','some','many'],ans:2,exp:'"Some water" — uncountable nouns use "some", not "a" or a number!'},
        {q:'Can you say "two milks"?',opts:['Yes, always','No, milk is uncountable','Yes, if you want','Sometimes'],ans:1,exp:'NO! "Milk" is uncountable. Say "two glasses of milk" instead!'},
        {q:'"She bought ___ books." (3)',opts:['some','any','three','much'],ans:2,exp:'Countable nouns use numbers: "She bought THREE books"!'},
        {q:'Which CAN you count?',opts:['music','advice','coffee','student'],ans:3,exp:'"Student" is countable — one student, two students, many students!'},
        {q:'To measure uncountable nouns, we use:',opts:['numbers only','a/an','containers/measures','plurals'],ans:2,exp:'Use containers: "a cup of tea", "a glass of water", "a bag of rice"!'},
      ]},

      {id:'l1c2', title:'Some & Any', titlePt:'Some & Any (Algum/Nenhum)', icon:'🧂', xp:25, learn:{
        explanation:{
          en:'"Some" and "any" are used with uncountable nouns and plural countable nouns. Use SOME in positive sentences and offers: "I have some milk." "Would you like some tea?" Use ANY in negative sentences and questions: "I don\'t have any milk." "Do you have any brothers?" Exception: "Would you like some...?" is an offer so it uses SOME even though it\'s a question.',
          pt:'"Some" e "any" são usados com substantivos incontáveis e substantivos contáveis no plural. Usa SOME em frases positivas e ofertas: "I have some milk." "Would you like some tea?" Usa ANY em frases negativas e perguntas: "I don\'t have any milk." "Do you have any brothers?" Excepção: "Would you like some...?" é uma oferta por isso usa SOME mesmo sendo pergunta.'
        },
        examples:[
          {en:'I have some rice at home. (positive)', pt:'Eu tenho algum arroz em casa. (positivo)'},
          {en:'I don\'t have any bread. (negative)', pt:'Eu não tenho nenhum pão. (negativo)'},
          {en:'Do you have any questions? (question)', pt:'Tens alguma pergunta? (pergunta)'},
          {en:'Would you like some water? (offer)', pt:'Gostarias de um pouco de água? (oferta)'},
          {en:'She has some friends in Beira.', pt:'Ela tem alguns amigos em Beira.'},
        ],
        practice:[
          {q:'"I don\'t have ___ money."', opts:['some','any','a','the'], ans:1, exp:'"Any" in negative sentences — I don\'t have ANY money.'},
          {q:'"Would you like ___ coffee?"', opts:['any','the','some','a'], ans:2, exp:'"Some" in offers — Would you like SOME coffee? (offering, not questioning)'},
        ],
      }, qs:[
        {q:'"There is ___ water in the bottle." (positive)',opts:['any','no','some','the'],ans:2,exp:'"SOME water" — use some in positive sentences!'},
        {q:'"Do you have ___ sisters?" (question)',opts:['some','any','a','the'],ans:1,exp:'"ANY sisters?" — use any in questions!'},
        {q:'"She doesn\'t have ___ money." (negative)',opts:['some','any','a','much'],ans:1,exp:'"ANY money" — use any in negative sentences!'},
        {q:'"Would you like ___ tea?" (offer)',opts:['any','a','the','some'],ans:3,exp:'"SOME tea" — offers use some, even though it\'s a question!'},
        {q:'"I bought ___ apples at the market."',opts:['any','some','a','the'],ans:1,exp:'"SOME apples" — positive sentence, so use some!'},
        {q:'"Is there ___ milk left?" (question)',opts:['some','many','any','much'],ans:2,exp:'"ANY milk left?" — questions use any!'},
        {q:'Which is CORRECT?',opts:['I have some any friends.','I have any friends.','I don\'t have some friends.','I don\'t have any friends.'],ans:3,exp:'"I don\'t have ANY friends." — negative sentence uses any!'},
      ]},

      {id:'l1c3', title:'Much, Many & A Lot Of', titlePt:'Much, Many & A Lot Of (Muito/Muitos)', icon:'📦', xp:25, learn:{
        explanation:{
          en:'"Much", "many" and "a lot of" all mean a large quantity. The rule: MANY = countable nouns (many books, many people). MUCH = uncountable nouns (much water, much time). A LOT OF = both! In positive sentences, "a lot of" is more natural than much/many. "Much" and "many" are most common in negatives and questions.',
          pt:'"Much", "many" e "a lot of" significam todos uma grande quantidade. A regra: MANY = substantivos contáveis (many books, many people). MUCH = substantivos incontáveis (much water, much time). A LOT OF = ambos! Em frases positivas, "a lot of" é mais natural do que much/many. "Much" e "many" são mais comuns em negativos e perguntas.'
        },
        examples:[
          {en:'There are many students in my class.', pt:'Há muitos alunos na minha turma.'},
          {en:'I don\'t have much time today.', pt:'Eu não tenho muito tempo hoje.'},
          {en:'She drinks a lot of water.', pt:'Ela bebe muita água.'},
          {en:'How many brothers do you have?', pt:'Quantos irmãos tens?'},
          {en:'How much does this cost?', pt:'Quanto custa isto?'},
        ],
        practice:[
          {q:'"How ___ brothers do you have?" (counting people)', opts:['much','many','lot','some'], ans:1, exp:'"How MANY" — brothers are countable, use many!'},
          {q:'"How ___ water do you drink?" (liquid)', opts:['many','some','much','few'], ans:2, exp:'"How MUCH water" — water is uncountable, use much!'},
        ],
      }, qs:[
        {q:'"There are ___ people at the market."',opts:['much','a lot of','few','less'],ans:1,exp:'"A LOT OF people" — people is countable and positive sentence!'},
        {q:'"I don\'t have ___ money."',opts:['many','a lot of','much','few'],ans:2,exp:'"MUCH money" — money is uncountable!'},
        {q:'"How ___ apples do you want?"',opts:['much','a lot of','many','some'],ans:2,exp:'"How MANY apples?" — apples are countable!'},
        {q:'"How ___ rice did you cook?"',opts:['many','a lot of','much','some'],ans:2,exp:'"How MUCH rice?" — rice is uncountable!'},
        {q:'"She has ___ friends in Maputo."',opts:['much','a lot of','many much','less'],ans:1,exp:'"A LOT OF friends" — works with countable nouns in positive sentences!'},
        {q:'"There isn\'t ___ sugar left."',opts:['many','a lot of','much','some'],ans:2,exp:'"MUCH sugar" — sugar is uncountable, negative sentence!'},
        {q:'Which is CORRECT?',opts:['How much books?','How many books?','How many water?','How much people?'],ans:1,exp:'"How MANY books?" — books are countable!'},
      ]},

      {id:'l1c4', title:'A Few & A Little', titlePt:'A Few & A Little (Um Pouco)', icon:'🤏', xp:20, learn:{
        explanation:{
          en:'"A few" and "a little" both mean a small amount, and they are POSITIVE — they say there IS something. A FEW = small number + countable nouns: "I have a few friends." A LITTLE = small amount + uncountable nouns: "I have a little money." Compare with "few" (almost none, negative feeling) and "little" (almost none, negative feeling). In everyday speech, "a few" and "a little" are much more common.',
          pt:'"A few" e "a little" significam ambos uma pequena quantidade, e são POSITIVOS — dizem que HÁ algo. A FEW = número pequeno + substantivos contáveis: "I have a few friends." A LITTLE = quantidade pequena + substantivos incontáveis: "I have a little money." Compara com "few" (quase nenhum, sentido negativo) e "little" (quase nenhum, sentido negativo). No discurso do dia-a-dia, "a few" e "a little" são muito mais comuns.'
        },
        examples:[
          {en:'I have a few coins in my pocket. (small number)', pt:'Eu tenho algumas moedas no bolso. (número pequeno)'},
          {en:'Can I have a little sugar, please? (small amount)', pt:'Posso ter um pouco de açúcar, por favor? (quantidade pequena)'},
          {en:'She speaks a little English.', pt:'Ela fala um pouco de inglês.'},
          {en:'We have a few minutes before class.', pt:'Temos alguns minutos antes da aula.'},
          {en:'There is a little milk left in the bottle.', pt:'Há um pouco de leite que sobrou na garrafa.'},
        ],
        practice:[
          {q:'"I have ___ friends in this city." (small number, positive)', opts:['little','a little','a few','few'], ans:2, exp:'"A few friends" — countable noun (friends) + small positive number!'},
          {q:'"She speaks ___ English." (small amount, positive)', opts:['few','a few','little','a little'], ans:3, exp:'"A little English" — uncountable (a language) + small positive amount!'},
        ],
      }, qs:[
        {q:'"I have ___ money — enough for lunch." (small positive amount)',opts:['a few','few','a little','little'],ans:2,exp:'"A LITTLE money" — money is uncountable + positive (enough for lunch)!'},
        {q:'"She has ___ books to read." (small positive number)',opts:['a little','little','much','a few'],ans:3,exp:'"A FEW books" — books are countable + positive!'},
        {q:'"Can I have ___ water?" (a small amount)',opts:['a few','few','a little','many'],ans:2,exp:'"A LITTLE water" — water is uncountable!'},
        {q:'"We have ___ minutes before the bus." (small number)',opts:['a little','much','a few','little'],ans:2,exp:'"A FEW minutes" — minutes are countable!'},
        {q:'"A little" is used with:',opts:['countable nouns','uncountable nouns','plurals only','questions only'],ans:1,exp:'"A little" = uncountable nouns! "A little rice, a little water, a little time."'},
        {q:'"A few" is used with:',opts:['uncountable nouns','liquids','countable nouns','negative sentences'],ans:2,exp:'"A few" = countable nouns! "A few friends, a few books, a few coins."'},
        {q:'Which is CORRECT?',opts:['a few water','a little friends','a few apples','a little books'],ans:2,exp:'"A few APPLES" — apples are countable!'},
      ]},

      {id:'l1c5', title:'Articles — A, An & The', titlePt:'Artigos — A, An e The', icon:'📖', xp:25, learn:{
        explanation:{
          en:'English has three articles: A, AN, and THE. A and AN are "indefinite" — we use them when talking about something for the first time or in general. A = before consonant sounds (a book, a car). AN = before vowel sounds (an apple, an elephant, an hour). THE is "definite" — we use it when both the speaker and listener know which specific thing we mean. "I saw A dog. THE dog was black." — first mention: A, second mention: THE.',
          pt:'O inglês tem três artigos: A, AN e THE. A e AN são "indefinidos" — usamo-los quando falamos de algo pela primeira vez ou em geral. A = antes de sons de consoante (a book, a car). AN = antes de sons de vogal (an apple, an elephant, an hour). THE é "definido" — usamo-lo quando tanto o falante como o ouvinte sabem de que coisa específica estamos a falar. "I saw A dog. THE dog was black." — primeira menção: A, segunda menção: THE.'
        },
        examples:[
          {en:'I have a dog. The dog is brown.', pt:'Eu tenho um cão. O cão é castanho.'},
          {en:'She ate an apple and an orange.', pt:'Ela comeu uma maçã e uma laranja.'},
          {en:'The sun is very hot today.', pt:'O sol está muito quente hoje.'},
          {en:'Can you close the door, please?', pt:'Podes fechar a porta, por favor?'},
          {en:'He is a student at a university.', pt:'Ele é estudante numa universidade.'},
        ],
        practice:[
          {q:'"She is ___ teacher." (general)', opts:['the','an','a','—'], ans:2, exp:'"A teacher" — general job, consonant sound, use A!'},
          {q:'"I ate ___ orange for breakfast."', opts:['a','the','—','an'], ans:3, exp:'"AN orange" — orange starts with a vowel sound, use AN!'},
        ],
      }, qs:[
        {q:'"He has ___ umbrella."',opts:['a','an','the','—'],ans:1,exp:'"AN umbrella" — umbrella starts with a vowel sound (U)!'},
        {q:'"___ sun rises in the east."',opts:['A','An','The','—'],ans:2,exp:'"THE sun" — there is only one sun, both speaker and listener know which one!'},
        {q:'"She is ___ engineer."',opts:['an','a','the','—'],ans:0,exp:'"AN engineer" — engineer starts with a vowel sound (E)!'},
        {q:'"I saw ___ cat. ___ cat was orange."',opts:['a/A','a/The','the/A','an/The'],ans:1,exp:'"A cat" (first mention) → "The cat" (both know which cat now)!'},
        {q:'"Can you open ___ window, please?" (specific window)',opts:['a','an','the','—'],ans:2,exp:'"THE window" — the specific window in this room, both speakers know it!'},
        {q:'"I need ___ new pen." (any pen)',opts:['the','—','a','an'],ans:2,exp:'"A new pen" — any pen, first mention, consonant sound!'},
        {q:'"She is ___ honest person."',opts:['a','an','the','—'],ans:1,exp:'"AN honest person" — "honest" starts with a silent H, so the vowel sound O follows. Use AN!'},
      ]},

      {id:'l1c6', title:'Possessives — My, Your, His, Her', titlePt:'Possessivos — Meu, Teu, Seu', icon:'🏷️', xp:20, learn:{
        explanation:{
          en:'Possessive adjectives show who something belongs to. They always go BEFORE a noun. I → my, You → your, He → his, She → her, It → its, We → our, They → their. "This is MY book." "What is YOUR name?" "HER mother is a teacher." Do NOT confuse "his" (possessive) with "he\'s" (he is), or "their" with "they\'re" (they are) or "there".',
          pt:'Os adjectivos possessivos mostram a quem algo pertence. Vão sempre ANTES de um substantivo. I → my, You → your, He → his, She → her, It → its, We → our, They → their. "This is MY book." "What is YOUR name?" "HER mother is a teacher." NÃO confundas "his" (possessivo) com "he\'s" (he is), ou "their" com "they\'re" (they are) ou "there".'
        },
        examples:[
          {en:'My name is Sebastian. What is your name?', pt:'O meu nome é Sebastian. Qual é o teu nome?'},
          {en:'His car is blue. Her bag is red.', pt:'O carro dele é azul. A mala dela é vermelha.'},
          {en:'Our school is near the market.', pt:'A nossa escola fica perto do mercado.'},
          {en:'Their children are very polite.', pt:'Os filhos deles são muito educados.'},
          {en:'The dog hurt its leg.', pt:'O cão magoou a pata.'},
        ],
        practice:[
          {q:'"___ name is Maria." (talking about her)', opts:['My','Your','His','Her'], ans:3, exp:'"HER name is Maria." — she/her, so possessive = her!'},
          {q:'"This is ___ phone." (it belongs to me)', opts:['my','your','his','its'], ans:0, exp:'"MY phone" — belongs to me = my!'},
        ],
      }, qs:[
        {q:'"___ name is João." (he)',opts:['My','His','Her','Your'],ans:1,exp:'"HIS name is João." — he → his!'},
        {q:'"___ mother is a nurse." (she)',opts:['His','My','Her','Their'],ans:2,exp:'"HER mother is a nurse." — she → her!'},
        {q:'"We love ___ country." (belonging to us)',opts:['my','their','our','her'],ans:2,exp:'"We love OUR country." — we → our!'},
        {q:'"The dog wagged ___ tail." (belonging to it)',opts:['his','her','its','their'],ans:2,exp:'"The dog wagged ITS tail." — it → its!'},
        {q:'"___ parents live in Beira." (belonging to them)',opts:['their','our','his','your'],ans:0,exp:'"THEIR parents" — they → their!'},
        {q:'"What is ___ phone number?" (asking you)',opts:['my','his','her','your'],ans:3,exp:'"YOUR phone number" — talking to you = your!'},
        {q:'Which sentence uses a possessive correctly?',opts:['This is hers bag.','This is her bag.','This is she bag.','This is her\'s bag.'],ans:1,exp:'"This is HER bag." — possessive adjectives go directly before nouns, no apostrophe!'},
      ]},

    ]
  }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT7);
