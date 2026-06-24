// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0.js
// ═══════════════════════════════════════════════════════
// A0 — Beginner Zero
// Edit this file to update A0 lesson content.

const UNITS_A0 = [
  {
      id:'u0', cefr:'A0', title:'Beginner Zero', titlePt:'Nível Zero',
      desc:'Start here if you know ZERO English 🌱',
      descPt:'Começa aqui se não sabes nada de inglês 🌱',
      color:'#00bfa5', icon:'🌱', premium:false,
      lessons:[
        {id:'l0a', title:'What is English?', titlePt:'O que é o Inglês?', icon:'🌍', xp:10, learn:{
          explanation:{
            en:'English is a language — a way that people use words to talk, write, and understand each other. It is spoken as a first or second language in more than 50 countries, including the USA, the UK, Australia and South Africa. Learning English helps you travel, study, work, and connect with people all over the world.',
            pt:'O inglês é uma língua — uma forma que as pessoas usam para falar, escrever e se entenderem. É falado como primeira ou segunda língua em mais de 50 países, incluindo os EUA, o Reino Unido, a Austrália e a África do Sul. Aprender inglês ajuda-te a viajar, estudar, trabalhar e comunicar com pessoas de todo o mundo.'
          },
          examples:[
            {en:'English is a global language.', pt:'O inglês é uma língua global.'},
            {en:'Many people speak English as a second language.', pt:'Muitas pessoas falam inglês como segunda língua.'},
            {en:'I want to learn English.', pt:'Eu quero aprender inglês.'},
          ],
          practice:[
            {q:'How many countries speak English?', opts:['Only 2','Over 50','Exactly 10','None'], ans:1, exp:'English is spoken in over 50 countries around the world.'},
            {q:'Choose the TRUE sentence.', opts:['English is a colour.','English is a language.','English is a food.','English is an animal.'], ans:1, exp:'"English is a language" — a way of communicating.'},
          ],
        }, qs:[
          {q:'English is a ___.',opts:['language','animal','colour','food'],ans:0,exp:'"English" is a language — a way of communicating!'},
          {q:'English is spoken in how many countries?',opts:['2','10','50','over 50'],ans:3,exp:'English is spoken in over 50 countries! It is truly a global language.'},
          {q:'Which country speaks English as its official language?',opts:['Brazil','Portugal','USA','Mozambique'],ans:2,exp:'The USA (United States of America) has English as its main language.'},
          {q:'Why learn English?',opts:['To forget Portuguese','To travel, work and communicate globally','It\'s easy','To watch TV only'],ans:1,exp:'English opens doors: travel, jobs, university, internet and more!'},
          {q:'The English alphabet has ___ letters.',opts:['20','24','26','30'],ans:2,exp:'The English alphabet has 26 letters: A to Z!'},
        ]},
        {id:'l0b', title:'The Alphabet A-Z', titlePt:'O Alfabeto A-Z', icon:'🔤', xp:15, learn:{
          explanation:{
            en:'The English alphabet has 26 letters, from A to Z. Five of them are vowels: A, E, I, O, U. The rest are consonants. Knowing the alphabet helps you spell words, read, and use a dictionary.',
            pt:'O alfabeto inglês tem 26 letras, de A a Z. Cinco delas são vogais: A, E, I, O, U. As restantes são consoantes. Conhecer o alfabeto ajuda-te a soletrar palavras, ler e usar um dicionário.'
          },
          examples:[
            {en:'A, B, C, D, E... Z.', pt:'A, B, C, D, E... Z.'},
            {en:'My name starts with the letter S.', pt:'O meu nome começa com a letra S.'},
            {en:'Can you spell your name, please?', pt:'Podes soletrar o teu nome, por favor?'},
          ],
          practice:[
            {q:'Which letters are vowels?', opts:['B, C, D, F','A, E, I, O, U','X, Y, Z','M, N, P'], ans:1, exp:'The 5 vowels are A, E, I, O, U.'},
            {q:'What comes right after the letter J?', opts:['I','K','H','L'], ans:1, exp:'...I, J, K, L... K comes after J!'},
          ],
        }, qs:[
          {q:'Which comes FIRST in the alphabet?',opts:['B','A','C','D'],ans:1,exp:'A is the first letter: A, B, C, D, E, F, G...'},
          {q:'How many vowels does English have?',opts:['3','5','7','10'],ans:1,exp:'English has 5 vowels: A, E, I, O, U'},
          {q:'Which letter is a VOWEL?',opts:['B','C','E','T'],ans:2,exp:'E is a vowel. Vowels are: A, E, I, O, U'},
          {q:'What comes after M in the alphabet?',opts:['L','K','N','P'],ans:2,exp:'...K, L, M, N, O, P... N comes after M!'},
          {q:'Which word starts with the letter "H"?',opts:['Apple','Elephant','Hello','Dog'],ans:2,exp:'"Hello" starts with H. Hello! 👋'},
        ]},
        {id:'l0c', title:'Greetings & Goodbyes', titlePt:'Saudações e Despedidas', icon:'👋', xp:15, learn:{
          explanation:{
            en:'Greetings are words we use to say hello and goodbye politely. "Hello" and "Hi" greet someone. "Good morning", "Good afternoon" and "Good evening" depend on the time of day. "Goodbye" or "Bye" are used when leaving.',
            pt:'As saudações são palavras que usamos para cumprimentar e despedir-nos educadamente. "Hello" e "Hi" cumprimentam alguém. "Good morning", "Good afternoon" e "Good evening" dependem da hora do dia. "Goodbye" ou "Bye" são usados ao sair.'
          },
          examples:[
            {en:'Hello! How are you?', pt:'Olá! Como estás?'},
            {en:'Good morning, teacher!', pt:'Bom dia, professor(a)!'},
            {en:'Goodbye, see you tomorrow!', pt:'Adeus, até amanhã!'},
          ],
          practice:[
            {q:'What do you say when you meet someone in the morning?', opts:['Good night','Good morning','Goodbye','Good food'], ans:1, exp:'"Good morning" is used in the morning.'},
            {q:'Which word means "Adeus"?', opts:['Hello','Please','Goodbye','Thanks'], ans:2, exp:'"Goodbye" = Adeus.'},
          ],
        }, qs:[
          {q:'How do you say "Olá" in English?',opts:['Goodbye','Thank you','Hello','Please'],ans:2,exp:'"Hello" = Olá. You can also say "Hi!" (informal)'},
          {q:'"Good morning" is used:',opts:['At night','In the morning','At lunchtime','Any time'],ans:1,exp:'"Good morning" = Bom dia. Used in the morning!'},
          {q:'How do you say "Até logo" in English?',opts:['Hello','How are you?','Goodbye','Please'],ans:2,exp:'"Goodbye" = Até logo / Adeus. Also "Bye!" (informal)'},
          {q:'"How are you?" is a ___.',opts:['command','greeting','number','colour'],ans:1,exp:'"How are you?" = Como estás? It\'s a greeting!'},
          {q:'The correct response to "How are you?" is:',opts:['My name is Ana','I am fine, thank you','Goodbye','Yes, please'],ans:1,exp:'"I am fine, thank you" = Estou bem, obrigado/a. The perfect reply!'},
        ]},
        {id:'l0d', title:'Introducing Yourself', titlePt:'Apresentar-se', icon:'🙋', xp:20, learn:{
          explanation:{
            en:'To introduce yourself in English, use "My name is..." for your name, "I am from..." for your country, and "I am ___ years old" for your age. Always use "am" after "I".',
            pt:'Para te apresentares em inglês, usa "My name is..." para o teu nome, "I am from..." para o teu país, e "I am ___ years old" para a tua idade. Usa sempre "am" depois de "I".'
          },
          examples:[
            {en:'My name is Sebastian.', pt:'O meu nome é Sebastian.'},
            {en:'I am from Mozambique.', pt:'Eu sou de Moçambique.'},
            {en:'I am 20 years old.', pt:'Eu tenho 20 anos.'},
            {en:'Nice to meet you!', pt:'Muito prazer!'},
          ],
          practice:[
            {q:'Complete: "I ___ from Maputo."', opts:['is','am','are','be'], ans:1, exp:'Use "am" with "I".'},
            {q:'Which sentence says your age correctly?', opts:['I am Ana.','I am 18 years old.','I from Mozambique.','I name is Ana.'], ans:1, exp:'Age: "I am ___ years old."'},
          ],
        }, qs:[
          {q:'"My name is ___." This sentence introduces:',opts:['your age','your name','your job','your city'],ans:1,exp:'"My name is..." = O meu nome é... Use it to introduce yourself!'},
          {q:'Complete: "I ___ from Mozambique."',opts:['is','am','are','be'],ans:1,exp:'"I am from..." Use "am" with "I". I am from Mozambique!'},
          {q:'"I am 25 years ___."',opts:['old','age','young','year'],ans:0,exp:'"I am 25 years old." = Tenho 25 anos. Always use "old"!'},
          {q:'Which sentence correctly introduces someone?',opts:['My name are Ana.','My name am Ana.','My name is Ana.','Me name is Ana.'],ans:2,exp:'"My name IS Ana." — use "is" for names!'},
          {q:'"Nice to meet you!" means:',opts:['Goodbye!','I don\'t know you.','Happy to meet you!','See you later!'],ans:2,exp:'"Nice to meet you!" = Muito prazer! Say this when meeting someone new.'},
        ]},
        {id:'l0e', title:'Numbers 1-20', titlePt:'Números 1-20', icon:'🔢', xp:15, learn:{
          explanation:{
            en:'Numbers in English go from one (1) to twenty (20) and beyond. Numbers 13-19 usually end in "-teen" (thirteen, fourteen...). Round tens like twenty and thirty end in "-ty".',
            pt:'Os números em inglês vão de one (1) a twenty (20) e além. Os números de 13 a 19 normalmente terminam em "-teen" (thirteen, fourteen...). As dezenas como twenty, thirty terminam em "-ty".'
          },
          examples:[
            {en:'One, two, three, four, five.', pt:'Um, dois, três, quatro, cinco.'},
            {en:'I have ten fingers.', pt:'Eu tenho dez dedos.'},
            {en:'She is fifteen years old.', pt:'Ela tem quinze anos.'},
          ],
          practice:[
            {q:'What number is "twenty"?', opts:['12','20','2','22'], ans:1, exp:'twenty = 20.'},
            {q:'Which is the correct counting order?', opts:['one, three, two','one, two, three','three, two, one','two, three, one'], ans:1, exp:'one, two, three — counting order!'},
          ],
        }, qs:[
          {q:'What is "five" in numbers?',opts:['3','4','5','6'],ans:2,exp:'five = 5. One, two, three, four, five!'},
          {q:'How do you write 10 in words?',opts:['twelve','eight','ten','eleven'],ans:2,exp:'10 = ten. Count: one, two, three... ten!'},
          {q:'"Fifteen" is:',opts:['13','14','15','16'],ans:2,exp:'fifteen = 15. Five + Ten = Fifteen!'},
          {q:'What comes after "nineteen"?',opts:['eighteen','twenty','seventeen','thirteen'],ans:1,exp:'After nineteen (19) comes twenty (20)!'},
          {q:'Which number is "twelve"?',opts:['10','11','12','13'],ans:2,exp:'twelve = 12. A dozen = twelve!'},
        ]},
        {id:'l0f', title:'Colours', titlePt:'Cores', icon:'🎨', xp:15, learn:{
          explanation:{
            en:'Colours describe how things look. The main colours are red, blue, yellow, green, orange, purple, black, white, and brown. We use "is/are" with colours: "The sky IS blue."',
            pt:'As cores descrevem como as coisas parecem. As principais cores são red, blue, yellow, green, orange, purple, black, white e brown. Usamos "is/are" com as cores: "The sky IS blue."'
          },
          examples:[
            {en:'The sky is blue.', pt:'O céu é azul.'},
            {en:'My favourite colour is green.', pt:'A minha cor favorita é verde.'},
            {en:'The flag has red, yellow, and black.', pt:'A bandeira tem vermelho, amarelo e preto.'},
          ],
          practice:[
            {q:'What colour is a banana?', opts:['blue','yellow','purple','black'], ans:1, exp:'Bananas are yellow.'},
            {q:'"Vermelho" in English is:', opts:['blue','green','red','white'], ans:2, exp:'red = vermelho.'},
          ],
        }, qs:[
          {q:'What colour is the sky?',opts:['green','red','blue','yellow'],ans:2,exp:'The sky is BLUE! 🔵 "The sky is blue."'},
          {q:'"Red" in Portuguese is:',opts:['Azul','Verde','Vermelho','Amarelo'],ans:2,exp:'red = vermelho. "The rose is red." 🌹'},
          {q:'What colour is grass?',opts:['blue','green','orange','purple'],ans:1,exp:'Grass is GREEN! 🌿 "The grass is green."'},
          {q:'"Yellow" is the colour of:',opts:['the sea','the sun','the night','the soil'],ans:1,exp:'The sun is YELLOW! ☀️ "The sun is yellow."'},
          {q:'Which colour is NOT in the rainbow?',opts:['red','brown','blue','green'],ans:1,exp:'Brown is NOT in the rainbow. Rainbow = red, orange, yellow, green, blue, indigo, violet.'},
        ]},
        {id:'l0g', title:'Family Members', titlePt:'Membros da Família', icon:'👨‍👩‍👧‍👦', xp:20, learn:{
          explanation:{
            en:'Family words describe the people in your family. "Mother" and "father" are your parents. "Brother" and "sister" are your siblings. "Grandmother" and "grandfather" are your grandparents.',
            pt:'As palavras de família descrevem as pessoas da tua família. "Mother" e "father" são os teus pais. "Brother" e "sister" são os teus irmãos. "Grandmother" e "grandfather" são os teus avós.'
          },
          examples:[
            {en:'This is my mother.', pt:'Esta é a minha mãe.'},
            {en:'I have one brother and one sister.', pt:'Eu tenho um irmão e uma irmã.'},
            {en:'My grandfather is very kind.', pt:'O meu avô é muito gentil.'},
          ],
          practice:[
            {q:"Your father's mother is your:", opts:['aunt','grandmother','sister','cousin'], ans:1, exp:"Father's mother = grandmother."},
            {q:'"Irmã" in English is:', opts:['brother','mother','sister','daughter'], ans:2, exp:'sister = irmã.'},
          ],
        }, qs:[
          {q:'"Mother" means:',opts:['irmã','mãe','avó','tia'],ans:1,exp:'mother = mãe. "My mother is kind."'},
          {q:'What is "father" in Portuguese?',opts:['irmão','tio','pai','avô'],ans:2,exp:'father = pai. "My father is strong."'},
          {q:'"Brother" and "sister" are your:',opts:['parents','grandparents','siblings','children'],ans:2,exp:'Brother and sister = siblings (irmãos). Part of your immediate family!'},
          {q:'What do you call your mother\'s mother?',opts:['aunt','sister','grandmother','cousin'],ans:2,exp:'Your mother\'s mother = grandmother (avó)!'},
          {q:'"I have two ___." (brother + sister)',opts:['parents','siblings','cousins','grandparents'],ans:1,exp:'Brother + sister = siblings. "I have two siblings."'},
        ]},
        {id:'l0h', title:'My First Conversation', titlePt:'A Minha Primeira Conversa', icon:'💬', xp:25, learn:{
          explanation:{
            en:'Now let\'s put it all together! A simple conversation starts with a greeting, asks a question or two, and ends politely. For example: "Hello! What is your name? Where are you from? Nice to meet you! Goodbye!"',
            pt:'Agora vamos juntar tudo! Uma conversa simples começa com uma saudação, faz uma ou duas perguntas e termina educadamente. Por exemplo: "Hello! What is your name? Where are you from? Nice to meet you! Goodbye!"'
          },
          examples:[
            {en:'A: Hello! B: Hi! How are you?', pt:'A: Olá! B: Oi! Como estás?'},
            {en:'A: What is your name? B: My name is Ana.', pt:'A: Qual é o teu nome? B: O meu nome é Ana.'},
            {en:'A: Where are you from? B: I am from Mozambique.', pt:'A: De onde és? B: Eu sou de Moçambique.'},
          ],
          practice:[
            {q:'What is a polite way to end a conversation?', opts:['What?','Goodbye! Have a nice day!','Nothing','My name is...'], ans:1, exp:'Always end politely: "Goodbye! Have a nice day!"'},
            {q:'Put these in the right conversation order:', opts:['Goodbye → Hello → Name?','Hello → Name? → Goodbye','Name? → Goodbye → Hello','Goodbye → Name? → Hello'], ans:1, exp:'Start with Hello, ask questions, then say Goodbye.'},
          ],
        }, qs:[
          {q:'Put in order: "___ am I. Sebastian name My."',opts:['My name I am Sebastian.','My name is Sebastian.','I Sebastian name am.','Sebastian my name.'],ans:1,exp:'"My name is Sebastian." — Subject + Verb + Object!'},
          {q:'A: "Hello!" B: "___"',opts:['Goodbye!','Hello! How are you?','My name is Ana.','I am fine.'],ans:1,exp:'"Hello! How are you?" — Reply to a greeting with a greeting!'},
          {q:'A: "Where are you from?" B: "___"',opts:['I am 20 years old.','I am fine.','I am from Mozambique.','My name is Tom.'],ans:2,exp:'"I am from Mozambique." — Answer "Where from?" with "I am from..."'},
          {q:'How do you say "thank you" in English?',opts:['Please','Sorry','Thank you','Excuse me'],ans:2,exp:'"Thank you" = Obrigado/a. Always be polite!'},
          {q:'To end a conversation politely you say:',opts:['Hello!','How are you?','Nice to meet you!','Goodbye! Have a nice day!'],ans:3,exp:'"Goodbye! Have a nice day!" = Até logo! Tenha um bom dia! 👋'},
        ]},
        {id:'l0i', title:'Plural Nouns', titlePt:'Substantivos no Plural', icon:'➕', xp:15, learn:{
          explanation:{
            en:'Most English nouns become plural by adding -s: book → books. Nouns ending in -s, -x, -ch, -sh add -es: box → boxes. A few are irregular: man → men, child → children.',
            pt:'A maioria dos substantivos ingleses fica no plural ao adicionar -s: book → books. Substantivos terminados em -s, -x, -ch, -sh adicionam -es: box → boxes. Alguns são irregulares: man → men, child → children.'
          },
          examples:[
            {en:'I have two dogs.', pt:'Eu tenho dois cães.'},
            {en:'She bought three boxes.', pt:'Ela comprou três caixas.'},
            {en:'There are many children in the park.', pt:'Há muitas crianças no parque.'},
          ],
          practice:[
            {q:'Plural of "book":', opts:['bookes','books','bookies','book'], ans:1, exp:'Just add -s: book → books.'},
            {q:'Plural of "box":', opts:['boxs','boxes','boxies','box'], ans:1, exp:'Words ending in -x add -es: box → boxes.'},
          ],
        }, qs:[
          {q:'Plural of "cat":',opts:['cates','cats','catses','cat'],ans:1,exp:'Add -s: cat → cats.'},
          {q:'Plural of "watch":',opts:['watchs','watches','watchies','watch'],ans:1,exp:'Words ending in -ch add -es: watch → watches.'},
          {q:'Irregular plural of "child":',opts:['childs','childes','children','childen'],ans:2,exp:'"Child" is irregular: child → children.'},
          {q:'"I have ___ sisters." (2)',opts:['a','two','one','no'],ans:1,exp:'"Two sisters" — plural noun needs a number bigger than one!'},
          {q:'Which is the correct plural of "man"?',opts:['mans','men','mens','manes'],ans:1,exp:'"Man" is irregular: man → men.'},
        ]},
        {id:'l0j', title:'Question Words', titlePt:'Palavras Interrogativas', icon:'❓', xp:20, learn:{
          explanation:{
            en:'Question words start most English questions: What (thing), Where (place), Who (person), When (time), Why (reason), and How (manner). They go at the beginning of the sentence.',
            pt:'As palavras interrogativas começam a maioria das perguntas em inglês: What (coisa), Where (lugar), Who (pessoa), When (tempo), Why (razão), e How (modo). Vêm no início da frase.'
          },
          examples:[
            {en:'What is your name?', pt:'Qual é o teu nome?'},
            {en:'Where do you live?', pt:'Onde vives?'},
            {en:'Why are you happy?', pt:'Porque estás feliz?'},
          ],
          practice:[
            {q:'Which question word asks about a PLACE?', opts:['What','Where','Who','Why'], ans:1, exp:'"Where" asks about a place.'},
            {q:'Which question word asks about a PERSON?', opts:['What','When','Who','How'], ans:2, exp:'"Who" asks about a person.'},
          ],
        }, qs:[
          {q:'"___ is your favourite colour?"',opts:['Who','What','Where','When'],ans:1,exp:'"What" asks about a thing — like a colour.'},
          {q:'"___ is your birthday?" (asking about time)',opts:['Where','What','When','Who'],ans:2,exp:'"When" asks about time.'},
          {q:'"___ are you sad?" (asking for a reason)',opts:['Why','How','What','Where'],ans:0,exp:'"Why" asks for a reason.'},
          {q:'"___ do you spell your name?" (asking about manner)',opts:['What','How','Who','Why'],ans:1,exp:'"How" asks about manner or method.'},
          {q:'"___ is your teacher?" (asking about a person)',opts:['What','Where','Who','When'],ans:2,exp:'"Who" asks about a person.'},
        ]},
      ]
    }
];
