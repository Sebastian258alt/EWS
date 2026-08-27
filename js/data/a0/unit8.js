// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/a0/unit8.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0h
// Part of UNITS_A0 — Family & Relationships

const UNITS_A0_UNIT8 = [
  {
    id:'u0h', cefr:'A0', title:'Family & Relationships', titlePt:'Família e Relações',
    desc:'Learn to talk about the people you love 👨‍👩‍👧‍👦',
    descPt:'Aprende a falar sobre as pessoas que amas 👨‍👩‍👧‍👦',
    color:'#e91e8c', icon:'👨‍👩‍👧', premium:false,
    lessons:[
      {id:'l0h1', title:'Family Members', titlePt:'Membros da Família', icon:'👨‍👩‍👧‍👦', xp:15, learn:{
        explanation:{
          en:'Family vocabulary is essential in English. Core words: mother/mum, father/dad, brother, sister, son, daughter, grandfather/grandpa, grandmother/grandma, uncle, aunt, cousin, nephew, niece.',
          pt:'O vocabulário da família é essencial em inglês. Palavras-chave: mother/mum (mãe), father/dad (pai), brother (irmão), sister (irmã), son (filho), daughter (filha), grandfather/grandpa (avô), grandmother/grandma (avó), uncle (tio), aunt (tia), cousin (primo/a).'
        },
        examples:[
          {en:'My mother is a nurse.', pt:'A minha mãe é enfermeira.'},
          {en:'I have two brothers and one sister.', pt:'Eu tenho dois irmãos e uma irmã.'},
          {en:'My grandmother lives in Inhambane.', pt:'A minha avó vive em Inhambane.'},
        ],
        practice:[
          {q:'What does "daughter" mean?', opts:['filho','filha','irmã','prima'], ans:1, exp:'"Daughter" = filha. "Son" = filho.'},
          {q:'What is "avó" in English?', opts:['aunt','mother','grandmother','sister'], ans:2, exp:'"Grandmother" or "grandma" = avó.'},
        ],
      }, qs:[
        {q:'What does "brother" mean?',opts:['irmã','primo','irmão','pai'],ans:2,exp:'"Brother" = irmão. "Sister" = irmã.'},
        {q:'"Mum" is an informal word for:',opts:['sister','aunt','grandmother','mother'],ans:3,exp:'"Mum" (British) / "Mom" (American) = mother = mãe.'},
        {q:'What is "tio" in English?',opts:['cousin','nephew','uncle','brother'],ans:2,exp:'"Uncle" = tio. "Aunt" = tia.'},
        {q:'"I have one ___ and she is older than me."',opts:['son','brother','sister','uncle'],ans:2,exp:'"Sister" = irmã. She = female.'},
        {q:'What is "neto/neta" in English?',opts:['nephew','grandchild','cousin','son'],ans:1,exp:'"Grandchild" = neto/neta. Plural: grandchildren.'},
      ]},
      {id:'l0h2', title:'Describing Your Family', titlePt:'Descrever a Tua Família', icon:'🏠', xp:15, learn:{
        explanation:{
          en:'To describe your family, use "have got" or "have": "I have three brothers." Use "My [family member] is/are..." for descriptions. Ask "Do you have any brothers or sisters?" to learn about someone\'s family.',
          pt:'Para descrever a tua família, usa "have got" ou "have": "I have three brothers." Usa "My [membro da família] is/are..." para descrições. Pergunta "Do you have any brothers or sisters?" para saber sobre a família de alguém.'
        },
        examples:[
          {en:'I have a big family.', pt:'Eu tenho uma família grande.'},
          {en:'My father is tall and kind.', pt:'O meu pai é alto e gentil.'},
          {en:'Do you have any siblings?', pt:'Tens irmãos ou irmãs?'},
        ],
        practice:[
          {q:'"Siblings" means:', opts:['parents','brothers and/or sisters','cousins','grandparents'], ans:1, exp:'"Siblings" = brothers and sisters collectively.'},
          {q:'How do you ask about someone\'s family?', opts:['Who is your family?','Do you have any siblings?','Are you a family?','What family?'], ans:1, exp:'"Do you have any siblings?" is the natural question.'},
        ],
      }, qs:[
        {q:'"I ___ two sisters and one brother."',opts:['am','have','do','be'],ans:1,exp:'"I HAVE two sisters." — Use "have" for family members.'},
        {q:'"My parents ___ both teachers."',opts:['is','am','are','be'],ans:2,exp:'"My parents ARE both teachers." — plural → are.'},
        {q:'What does "only child" mean?',opts:['The youngest child','Having no brothers or sisters','The oldest child','Having one sibling'],ans:1,exp:'"Only child" = filho/a único/a — no brothers or sisters.'},
        {q:'"Do you ___ any brothers?"',opts:['are','have','be','do'],ans:1,exp:'"Do you HAVE any brothers?" — standard family question.'},
        {q:'"My ___ is 65 years old and retired."',opts:['nephew','cousin','grandfather','sibling'],ans:2,exp:'"Grandfather" = avô. 65 years old, retired → likely a grandparent.'},
      ]},
      {id:'l0h3', title:'Describing People\'s Appearance', titlePt:'Descrever a Aparência das Pessoas', icon:'👀', xp:20, learn:{
        explanation:{
          en:'Describe appearance using "She/He is..." + adjective, or "She/He has..." + noun. Hair: long, short, curly, straight, dark, blonde. Eyes: brown, green, blue. Height: tall, short, medium height. Build: slim, heavy, muscular.',
          pt:'Descreve a aparência usando "She/He is..." + adjectivo, ou "She/He has..." + substantivo. Cabelo: long (comprido), short (curto), curly (encaracolado), straight (liso), dark (escuro), blonde (loiro). Olhos: brown, green, blue. Altura: tall, short, medium.'
        },
        examples:[
          {en:'She has long dark hair and brown eyes.', pt:'Ela tem cabelo comprido e escuro e olhos castanhos.'},
          {en:'My father is tall and has a beard.', pt:'O meu pai é alto e tem barba.'},
          {en:'He is medium height with curly hair.', pt:'Ele é de altura média com cabelo encaracolado.'},
        ],
        practice:[
          {q:'"Tall" is used to describe:', opts:['hair colour','a person\'s height','eye colour','weight'], ans:1, exp:'"Tall" = alto. Describes HEIGHT.'},
          {q:'"She has curly hair" describes:', opts:['eye colour','height','hair type','personality'], ans:2, exp:'"Curly" = encaracolado. Describes hair type.'},
        ],
      }, qs:[
        {q:'"He ___ blue eyes."',opts:['is','are','has','have'],ans:2,exp:'"He HAS blue eyes." — Use "has/have" for features (eyes, hair, nose).'},
        {q:'"She ___ very tall."',opts:['has','have','is','are'],ans:2,exp:'"She IS very tall." — Use "is/are" for adjectives (tall, short, slim).'},
        {q:'What does "curly" describe?',opts:['height','eyes','hair','weight'],ans:2,exp:'"Curly hair" = cabelo encaracolado. It describes hair type.'},
        {q:'Opposite of "tall":',opts:['slim','heavy','short','young'],ans:2,exp:'"Short" = baixo/a. tall ↔ short.'},
        {q:'"She has a ___ build." (very thin)',opts:['heavy','slim','tall','curly'],ans:1,exp:'"Slim" = magro/a. Describes body type.'},
      ]},
      {id:'l0h4', title:'Personality & Character', titlePt:'Personalidade e Carácter', icon:'😊', xp:20, learn:{
        explanation:{
          en:'Personality adjectives describe HOW someone behaves. Positive: kind, friendly, funny, patient, generous, hardworking, honest. Negative: lazy, rude, selfish, impatient, shy. Use "She is very..." or "He seems..."',
          pt:'Os adjectivos de personalidade descrevem COMO alguém se comporta. Positivos: kind (gentil), friendly (simpático), funny (engraçado), patient (paciente), generous (generoso), hardworking (trabalhador), honest (honesto). Negativos: lazy (preguiçoso), rude (grosseiro), shy (tímido).'
        },
        examples:[
          {en:'My sister is very kind and generous.', pt:'A minha irmã é muito gentil e generosa.'},
          {en:'He is hardworking but a little shy.', pt:'Ele é trabalhador mas um pouco tímido.'},
          {en:'She seems friendly but I don\'t know her well.', pt:'Ela parece simpática mas não a conheço bem.'},
        ],
        practice:[
          {q:'"Shy" means:', opts:['loud','nervous around people','very friendly','hardworking'], ans:1, exp:'"Shy" = tímido — uncomfortable or nervous around people.'},
          {q:'Opposite of "lazy":', opts:['rude','friendly','hardworking','selfish'], ans:2, exp:'"Hardworking" is the opposite of "lazy".'},
        ],
      }, qs:[
        {q:'"Kind" means:',opts:['rude','generous and caring','lazy','impatient'],ans:1,exp:'"Kind" = gentil e atencioso. She\'s always kind to everyone.'},
        {q:'Which is a POSITIVE personality trait?',opts:['selfish','rude','lazy','generous'],ans:3,exp:'"Generous" = generoso. A positive quality! The others are negative.'},
        {q:'"He never shares anything." He is:',opts:['generous','kind','selfish','patient'],ans:2,exp:'"Selfish" = egoísta — someone who never shares or thinks only of themselves.'},
        {q:'"She always tells the truth." She is:',opts:['rude','honest','shy','lazy'],ans:1,exp:'"Honest" = honesto — always tells the truth.'},
        {q:'"Funny" means:',opts:['serious','sad','makes people laugh','shy'],ans:2,exp:'"Funny" = engraçado — someone who makes you laugh.'},
      ]},
      {id:'l0h5', title:'Relationships & Social Life', titlePt:'Relações e Vida Social', icon:'🤝', xp:20, learn:{
        explanation:{
          en:'Relationship vocabulary: friend, best friend, classmate, colleague, neighbour, partner, boyfriend/girlfriend. Use "We have been friends for..." to describe duration. "We met at school/work/church."',
          pt:'Vocabulário de relações: friend (amigo), best friend (melhor amigo), classmate (colega de turma), colleague (colega de trabalho), neighbour (vizinho), partner (parceiro), boyfriend/girlfriend (namorado/a). Usa "We have been friends for..." para descrever duração.'
        },
        examples:[
          {en:'She is my best friend. We met at school.', pt:'Ela é a minha melhor amiga. Conhecemo-nos na escola.'},
          {en:'My neighbour is very friendly.', pt:'O meu vizinho é muito simpático.'},
          {en:'We have been colleagues for two years.', pt:'Somos colegas há dois anos.'},
        ],
        practice:[
          {q:'"Neighbour" means:', opts:['classmate','person who lives nearby','best friend','colleague'], ans:1, exp:'"Neighbour" = vizinho — person who lives near you.'},
          {q:'Where do you meet "classmates"?', opts:['at work','at church','at school','at the gym'], ans:2, exp:'"Classmates" = colegas de turma — people in your class at school.'},
        ],
      }, qs:[
        {q:'"Colleague" means:',opts:['neighbour','best friend','someone you work with','family member'],ans:2,exp:'"Colleague" = colega de trabalho — someone you work with.'},
        {q:'"We met at university." We are probably:',opts:['neighbours','classmates','colleagues','cousins'],ans:1,exp:'"Classmates" or course-mates — people who study together at the same institution.'},
        {q:'What is "namorada" in English?',opts:['friend','colleague','girlfriend','neighbour'],ans:2,exp:'"Girlfriend" = namorada. "Boyfriend" = namorado.'},
        {q:'"We have been ___ for 10 years." (great friends)',opts:['classmates','best friends','neighbours','colleagues'],ans:1,exp:'"Best friends" = melhores amigos. A very close, long friendship.'},
        {q:'"She lives next door." She is my:',opts:['colleague','classmate','neighbour','cousin'],ans:2,exp:'"Neighbour" = vizinho. "Next door" = ao lado.'},
      ]},
      {id:'l0h6', title:'My Family Story', titlePt:'A Minha História de Família', icon:'📖', xp:25, learn:{
        explanation:{
          en:'Putting it together: describe your family using all the vocabulary you have learned. Use "My [person] is..." for descriptions, "We live in..." for location, and "We always..." for habits. Practice talking about your own family!',
          pt:'Juntar tudo: descreve a tua família usando todo o vocabulário que aprendeste. Usa "My [person] is..." para descrições, "We live in..." para localização, e "We always..." para hábitos. Pratica falar sobre a tua própria família!'
        },
        examples:[
          {en:'I come from a family of five.', pt:'Venho de uma família de cinco pessoas.'},
          {en:'We live in Maputo but my grandparents are from Gaza.', pt:'Vivemos em Maputo mas os meus avós são de Gaza.'},
          {en:'My family always eats together on Sundays.', pt:'A minha família come sempre junta aos domingos.'},
        ],
        practice:[
          {q:'"I come from a family of five" means:', opts:['I have 5 brothers','There are 5 people in my family','I am the 5th child','I have 5 cousins'], ans:1, exp:'"A family of five" = uma família de cinco membros.'},
          {q:'"My grandparents are from Gaza" means:', opts:['They live in Gaza now','They were born in Gaza','They work in Gaza','They visited Gaza'], ans:1, exp:'"From" = natural de, originally from that place.'},
        ],
      }, qs:[
        {q:'"I come from a ___ family." (many people)',opts:['small','only','large','single'],ans:2,exp:'"Large family" = família grande. Many members.'},
        {q:'"We always ___ together on Sundays." (have a meal)',opts:['play','eat','work','study'],ans:1,exp:'"We always EAT together on Sundays." — eat = comer.'},
        {q:'How do you say "Somos de Nampula"?',opts:['We are from Nampula.','We live to Nampula.','We go in Nampula.','We at Nampula.'],ans:0,exp:'"We are FROM Nampula." — use "from" for origin.'},
        {q:'"My mother is a ___ woman." (very caring)',opts:['funny','kind','shy','rude'],ans:1,exp:'"Kind" = gentil. A caring person is kind.'},
        {q:'To describe your family in English, you use:',opts:['only "is"','only "has"','both "is" and "has"','only "are"'],ans:2,exp:'Use "is/are" for adjectives (She is tall), "has/have" for features (She has long hair).'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT8);
