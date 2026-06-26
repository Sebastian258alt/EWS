// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit2.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0b — Pronunciation & Sounds
// Part of UNITS_A0

const UNITS_A0_UNIT2 = [
  {
    id:'u0b', cefr:'A0', title:'Pronunciation Basics', titlePt:'Pronúncia Básica',
    desc:'Learn how English sounds — the key to speaking well! 🔊',
    descPt:'Aprende como o inglês soa — a chave para falar bem! 🔊',
    color:'#26c6da', icon:'🔊', premium:false,
    lessons:[

      {id:'l0k', title:'Vowel Sounds', titlePt:'Sons das Vogais', icon:'🔤', xp:15, learn:{
        explanation:{
          en:'English has 5 vowels: A, E, I, O, U. But each vowel can make more than one sound! In short words, A sounds like in "cat", E like in "bed", I like in "sit", O like in "hot", U like in "cup". Listen and repeat each one slowly.',
          pt:'O inglês tem 5 vogais: A, E, I, O, U. Mas cada vogal pode fazer mais de um som! Em palavras curtas, A soa como em "cat" (gato), E como em "bed" (cama), I como em "sit" (sentar), O como em "hot" (quente), U como em "cup" (chávena). Ouve e repete cada uma devagar.'
        },
        examples:[
          {en:'A — cat, man, bag', pt:'A — gato, homem, saco'},
          {en:'E — bed, ten, pet', pt:'E — cama, dez, animal de estimação'},
          {en:'I — sit, big, fish', pt:'I — sentar, grande, peixe'},
          {en:'O — hot, dog, box', pt:'O — quente, cão, caixa'},
          {en:'U — cup, bus, sun', pt:'U — chávena, autocarro, sol'},
        ],
        practice:[
          {q:'Which vowel sound is in the word "bed"?', opts:['A','E','I','O'], ans:1, exp:'"Bed" uses the short E sound — like in "ten" or "pet".'},
          {q:'Which word has the short U sound?', opts:['cake','bone','cup','feet'], ans:2, exp:'"Cup" has the short U sound — like "bus" or "sun".'},
        ],
      }, qs:[
        {q:'Which vowel is in "cat"?',opts:['A','E','I','U'],ans:0,exp:'"Cat" has the short A sound. A, E, I, O, U — A is the first vowel!'},
        {q:'Which word rhymes with "bed"?',opts:['bad','red','bid','mud'],ans:1,exp:'"Red" rhymes with "bed" — both have the short E sound!'},
        {q:'The word "sit" has which short vowel?',opts:['A','E','I','O'],ans:2,exp:'"Sit" has the short I sound — like "big" and "fish".'},
        {q:'"Dog" has the same vowel sound as:',opts:['bag','bed','box','bug'],ans:2,exp:'"Dog" and "box" both have the short O sound!'},
        {q:'Which word has the short U sound?',opts:['bone','bake','bus','beat'],ans:2,exp:'"Bus" has the short U sound — like "cup" and "sun".'},
        {q:'How many vowels does English have?',opts:['3','4','5','6'],ans:2,exp:'English has 5 vowels: A, E, I, O, U!'},
      ]},

      {id:'l0l', title:'Consonant Sounds', titlePt:'Sons das Consoantes', icon:'📣', xp:15, learn:{
        explanation:{
          en:'Consonants are all letters that are NOT vowels. English has 21 consonants. Some sound the same as in Portuguese (B, D, F, M, N), but others are different! For example: W sounds like in "water" — there is no W sound in Portuguese.',
          pt:'As consoantes são todas as letras que NÃO são vogais. O inglês tem 21 consoantes. Algumas soam igual ao português (B, D, F, M, N), mas outras são diferentes! Por exemplo: o W soa como em "water" — não existe este som no português.'
        },
        examples:[
          {en:'B — ball, book, bus', pt:'B — bola, livro, autocarro'},
          {en:'D — dog, door, day', pt:'D — cão, porta, dia'},
          {en:'W — water, window, work', pt:'W — água, janela, trabalho'},
          {en:'TH — this, that, the', pt:'TH — este, aquele, o/a (artigo)'},
          {en:'SH — shop, shoe, she', pt:'SH — loja, sapato, ela'},
        ],
        practice:[
          {q:'Which letter makes the "sh" sound?', opts:['S alone','SH together','CH','TH'], ans:1, exp:'SH together makes the "sh" sound — like in "shop" and "shoe".'},
          {q:'The word "this" starts with which sound?', opts:['S','T','TH','D'], ans:2, exp:'"This" starts with the TH sound — put your tongue between your teeth!'},
        ],
      }, qs:[
        {q:'Which TWO letters together make the sound in "shop"?',opts:['SS','ST','SH','SK'],ans:2,exp:'SH makes the sound in "shop", "shoe", "she"!'},
        {q:'"The" starts with which sound?',opts:['D','T','TH','S'],ans:2,exp:'"The" starts with TH — a unique English sound!'},
        {q:'Which letter makes a "w" sound?',opts:['V','U','W','WH'],ans:2,exp:'W makes the "w" sound in "water", "work", "window"!'},
        {q:'B, D, F, M, N — these are:',opts:['vowels','consonants','numbers','colours'],ans:1,exp:'These are consonants — all letters that are NOT A, E, I, O, U!'},
        {q:'How many consonants does English have?',opts:['5','15','21','26'],ans:2,exp:'English has 21 consonants and 5 vowels = 26 letters total!'},
        {q:'Which word contains the TH sound?',opts:['shop','chin','this','fish'],ans:2,exp:'"This" has the TH sound — tongue between teeth!'},
      ]},

      {id:'l0m', title:'Spelling Your Name', titlePt:'Soletrar o Teu Nome', icon:'✏️', xp:20, learn:{
        explanation:{
          en:'Spelling means saying each letter of a word one by one. In English, when someone asks "How do you spell that?", you say each letter. For example, the name "ANA" is spelled: A-N-A. At a hotel or airport, people always ask you to spell your name.',
          pt:'Soletrar significa dizer cada letra de uma palavra uma a uma. Em inglês, quando alguém pergunta "How do you spell that?", dizes cada letra. Por exemplo, o nome "ANA" é soletrado: A-N-A. Num hotel ou aeroporto, as pessoas pedem sempre que soletres o teu nome.'
        },
        examples:[
          {en:'A: How do you spell your name? B: S-E-B-A-S-T-I-A-N.', pt:'A: Como soletras o teu nome? B: S-E-B-A-S-T-I-A-N.'},
          {en:'Can you spell that for me, please?', pt:'Podes soletrar isso para mim, por favor?'},
          {en:'My surname is Moiane — M-O-I-A-N-E.', pt:'O meu apelido é Moiane — M-O-I-A-N-E.'},
        ],
        practice:[
          {q:'How do you spell "cat"?', opts:['K-A-T','C-A-T','S-A-T','C-E-T'], ans:1, exp:'"Cat" is spelled C-A-T.'},
          {q:'What does "How do you spell that?" mean?', opts:['How do you say that?','Say each letter please','What is your name?','Write it down'], ans:1, exp:'"How do you spell that?" = Please say each letter!'},
        ],
      }, qs:[
        {q:'"Dog" is spelled:',opts:['D-O-G','D-U-G','D-A-G','T-O-G'],ans:0,exp:'D-O-G spells "dog"!'},
        {q:'When do people ask you to spell your name?',opts:['At home eating dinner','At a hotel or airport','At the market','When playing football'],ans:1,exp:'At hotels, airports, offices — they ask you to spell your name!'},
        {q:'"Book" is spelled:',opts:['B-O-K','B-U-K','B-O-O-K','P-O-O-K'],ans:2,exp:'B-O-O-K spells "book"!'},
        {q:'How do you ask someone to spell a word?',opts:['How do you spell that?','What is that?','Who wrote that?','Where is that?'],ans:0,exp:'"How do you spell that?" — always helpful to ask!'},
        {q:'"Sun" is spelled:',opts:['S-O-N','S-U-N','S-A-N','C-U-N'],ans:1,exp:'S-U-N spells "sun"! ☀️'},
        {q:'Spelling means:',opts:['writing a story','saying each letter','reading fast','counting words'],ans:1,exp:'Spelling = saying each letter of a word one by one!'},
      ]},

      {id:'l0n', title:'Word Stress', titlePt:'Ênfase nas Palavras', icon:'🎵', xp:15, learn:{
        explanation:{
          en:'In English, one syllable in a word is always said LOUDER and LONGER than the others. This is called stress. For example: "HEL-lo" — the first part is stronger. "to-DAY" — the second part is stronger. Wrong stress can make it hard to understand you!',
          pt:'Em inglês, uma sílaba numa palavra é sempre dita MAIS ALTO e MAIS LONGO que as outras. Isso chama-se ênfase. Por exemplo: "HEL-lo" — a primeira parte é mais forte. "to-DAY" — a segunda parte é mais forte. A ênfase errada pode dificultar a compreensão!'
        },
        examples:[
          {en:'HEL-lo (stress on HEL)', pt:'HEL-lo (ênfase em HEL)'},
          {en:'to-DAY (stress on DAY)', pt:'to-DAY (ênfase em DAY)'},
          {en:'ENG-lish (stress on ENG)', pt:'ENG-lish (ênfase em ENG)'},
          {en:'stu-DENT (stress on STU... wait: STU-dent!)', pt:'STU-dent (ênfase em STU)'},
          {en:'a-GAIN (stress on GAIN)', pt:'a-GAIN (ênfase em GAIN)'},
        ],
        practice:[
          {q:'In "hello", which part is stressed?', opts:['HEL','lo','both equally','neither'], ans:0, exp:'"HEL-lo" — the first syllable HEL is stressed!'},
          {q:'In "today", which part is stressed?', opts:['TO','DAY','both','neither'], ans:1, exp:'"to-DAY" — the second syllable DAY is stressed!'},
        ],
      }, qs:[
        {q:'Word stress means:',opts:['speaking quietly','one syllable is louder','spelling correctly','writing neatly'],ans:1,exp:'Word stress = one syllable said LOUDER and LONGER!'},
        {q:'In "English", the stress is on:',opts:['ENG','lish','both','neither'],ans:0,exp:'"ENG-lish" — ENG is stressed!'},
        {q:'In "again", the stress is on:',opts:['A','GAIN','both','neither'],ans:1,exp:'"a-GAIN" — GAIN is stressed!'},
        {q:'Wrong word stress can make people:',opts:['understand you better','not understand you','laugh at you','enjoy your English'],ans:1,exp:'Wrong stress = hard to understand! Practice the right stress!'},
        {q:'In "water", the stress is on:',opts:['WA','ter','both','neither'],ans:0,exp:'"WA-ter" — WA is stressed! English words usually stress the first syllable.'},
        {q:'Which word has stress on the SECOND syllable?',opts:['English','water','today','morning'],ans:2,exp:'"to-DAY" has stress on the second syllable DAY!'},
      ]},

      {id:'l0o', title:'Common Pronunciation Mistakes', titlePt:'Erros Comuns de Pronúncia', icon:'⚠️', xp:20, learn:{
        explanation:{
          en:'Portuguese speakers often make the same mistakes in English pronunciation. The most common ones: (1) Adding "ee" sound before words starting with S+consonant — say "school" NOT "eschool". (2) The letter H is always pronounced — say "hello" NOT "ello". (3) The TH sound needs your tongue between your teeth!',
          pt:'Os falantes de português cometem frequentemente os mesmos erros na pronúncia inglesa. Os mais comuns: (1) Adicionar o som "i" antes de palavras com S+consoante — diz "school" NÃO "escola". (2) A letra H é sempre pronunciada — diz "hello" NÃO "elo". (3) O som TH precisa da tua língua entre os dentes!'
        },
        examples:[
          {en:'WRONG: "eschool" ✗   RIGHT: "school" ✓', pt:'ERRADO: "escola" ✗   CERTO: "school" ✓'},
          {en:'WRONG: "ello" ✗   RIGHT: "hello" ✓', pt:'ERRADO: "elo" ✗   CERTO: "hello" ✓'},
          {en:'WRONG: "dis" ✗   RIGHT: "this" ✓ (tongue between teeth!)', pt:'ERRADO: "dis" ✗   CERTO: "this" ✓ (língua entre os dentes!)'},
          {en:'WRONG: "tree" for "three" ✗   RIGHT: "three" ✓', pt:'ERRADO: "tree" for "three" ✗   CERTO: "three" ✓'},
          {en:'WRONG: "wery" ✗   RIGHT: "very" ✓', pt:'ERRADO: "wery" ✗   CERTO: "very" ✓'},
        ],
        practice:[
          {q:'How do Portuguese speakers often mispronounce "school"?', opts:['skool','eschool','skhool','chool'], ans:1, exp:'Adding "e" before S+consonant is a common mistake. Just say "school"!'},
          {q:'The H in "hello" is:', opts:['silent','pronounced','optional','written but not said'], ans:1, exp:'In English, H is always pronounced! Say "hello" with a clear H sound.'},
        ],
      }, qs:[
        {q:'How should you pronounce "hello"?',opts:['ello','jello','HELL-o','chello'],ans:2,exp:'Say the H clearly! "HELL-o" — H is never silent in common words!'},
        {q:'"School" — which is correct?',opts:['eschool','ischool','school','sschool'],ans:2,exp:'Just "school"! No extra vowel at the start!'},
        {q:'For the TH sound, your tongue goes:',opts:['to the roof of your mouth','between your teeth','behind your teeth','to the back of your throat'],ans:1,exp:'Tongue between teeth! TH is unique to English!'},
        {q:'"This" is often mispronounced as:',opts:['tis','dis','sis','zis'],ans:1,exp:'Portuguese speakers often say "dis" — remember the TH sound!'},
        {q:'"Very" is mispronounced as:',opts:['wery','bery','fery','dery'],ans:0,exp:'"Wery" is a common mistake — V and W sound different in English!'},
        {q:'The most important tip for English pronunciation is:',opts:['speak very fast','listen and repeat often','read silently','memorise rules'],ans:1,exp:'Listen and repeat! Your mouth needs practice — just like sport!'},
      ]},

    ]
  }
];
