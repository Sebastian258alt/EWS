// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit14.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0n — Hobbies & Free Time
// Part of UNITS_A0

const UNITS_A0_UNIT14 = [
  {
    id:'u0n', cefr:'A0', title:'Hobbies & Free Time', titlePt:'Hobbies e Tempo Livre',
    desc:'Activities you enjoy, sports, music, and how to talk about hobbies 🎵',
    descPt:'Atividades que gostas, desportos, música e como falar sobre hobbies 🎵',
    color:'#e65100', icon:'🎸', premium:false,
    lessons:[

      {id:'l108', title:'Hobbies — What I Like to Do', titlePt:'Hobbies — O que Gosto de Fazer', icon:'🎨', xp:20, learn:{
        explanation:{
          en:'Hobbies are activities you do for fun. Common hobbies: reading (ler), writing (escrever), drawing (desenhar), painting (pintar), cooking (cozinhar), gardening (jardinagem), photography (fotografia), singing (cantar), dancing (dançar), playing an instrument (tocar um instrumento). To talk about hobbies, say "I like..." or "I enjoy..." + -ing verb.',
          pt:'Hobbies são atividades que fazes por diversão. Hobbies comuns: reading (ler), writing (escrever), drawing (desenhar), painting (pintar), cooking (cozinhar), gardening (jardinagem), photography (fotografia), singing (cantar), dancing (dançar), playing an instrument (tocar um instrumento). Para falar de hobbies, diz "I like..." ou "I enjoy..." + verbo com -ing.'
        },
        examples:[
          {en:'I like reading books.', pt:'Eu gosto de ler livros.'},
          {en:'She enjoys painting landscapes.', pt:'Ela gosta de pintar paisagens.'},
          {en:'He likes playing the guitar.', pt:'Ele gosta de tocar guitarra.'},
          {en:'We enjoy cooking together.', pt:'Nós gostamos de cozinhar juntos.'},
          {en:'My hobby is photography.', pt:'O meu hobby é fotografia.'},
        ],
        practice:[
          {q:'What is a hobby?', opts:['something you do for fun','a type of food','a job','a place'], ans:0, exp:'A hobby is a fun activity (passatempo).'},
          {q:'Complete: "I like ___ books."', opts:['read','reading','to read','reads'], ans:1, exp:'After "like", use -ing: "reading".'},
        ],
      }, qs:[
        {q:'Which is a hobby?',opts:['sleeping','eating','drawing','working'],ans:2,exp:'Drawing is a hobby (desenhar).'},
        {q:'"She enjoys singing." – "enjoys" is followed by:',opts:['infinitive','gerund (-ing)','base verb','past'],ans:1,exp:'Enjoy + -ing: "enjoys singing".'},
        {q:'What hobby involves taking pictures?',opts:['painting','photography','drawing','singing'],ans:1,exp:'Photography = fotografia. 📸'},
        {q:'"Gardening" is about:',opts:['cooking','plants','animals','music'],ans:1,exp:'Gardening = jardinagem (plants). 🌱'},
        {q:'Complete: "He likes ___ football." (play)',opts:['play','playing','to play','played'],ans:1,exp:'Like + -ing: "playing".'},
        {q:'A person who paints is a:',opts:['singer','dancer','painter','cook'],ans:2,exp:'Painter = pintor(a).'},
        {q:'"I like cooking" – cooking is a:',opts:['job','hobby','sport','subject'],ans:1,exp:'Cooking can be a hobby (cozinhar).'},
      ]},

      {id:'l109', title:'Sports', titlePt:'Desportos', icon:'⚽', xp:20, learn:{
        explanation:{
          en:'Sports are physical activities. Common sports: football (futebol), basketball (basquetebol), volleyball (voleibol), tennis (ténis), swimming (natação), running (corrida), cycling (ciclismo), athletics (atletismo). We use "play" for ball sports (play football), "go" for activities ending in -ing (go swimming), "do" for other sports (do athletics).',
          pt:'Desportos são atividades físicas. Desportos comuns: football (futebol), basketball (basquetebol), volleyball (voleibol), tennis (ténis), swimming (natação), running (corrida), cycling (ciclismo), athletics (atletismo). Usamos "play" para desportos com bola (play football), "go" para atividades com -ing (go swimming), "do" para outros (do athletics).'
        },
        examples:[
          {en:'I play football every Saturday.', pt:'Eu jogo futebol todos os sábados.'},
          {en:'She goes swimming in the morning.', pt:'Ela vai nadar de manhã.'},
          {en:'He does athletics at school.', pt:'Ele faz atletismo na escola.'},
          {en:'We play tennis on Sundays.', pt:'Nós jogamos ténis aos domingos.'},
          {en:'I like running in the park.', pt:'Eu gosto de correr no parque.'},
        ],
        practice:[
          {q:'Which verb do we use with "football"?', opts:['go','do','play','make'], ans:2, exp:'Use "play" for ball sports: "play football".'},
          {q:'Complete: "She ___ swimming."', opts:['plays','does','goes','makes'], ans:2, exp:'"Goes swimming" – use "go" for -ing activities.'},
        ],
      }, qs:[
        {q:'"Swimming" – we use the verb:',opts:['play','do','go','make'],ans:2,exp:'"Go swimming" – use "go".'},
        {q:'Which sport is played with a ball?',opts:['swimming','running','basketball','cycling'],ans:2,exp:'Basketball uses a ball! 🏀'},
        {q:'"Athletics" – we use the verb:',opts:['play','go','do','make'],ans:2,exp:'"Do athletics" – use "do".'},
        {q:'What sport is very popular in Mozambique?',opts:['football','ice hockey','skiing','cricket'],ans:0,exp:'Football is very popular! ⚽'},
        {q:'Complete: "I ___ tennis at the club."',opts:['play','go','do','make'],ans:0,exp:'"Play tennis" – ball sport.'},
        {q:'"Running" is a form of:',opts:['athletics','football','swimming','cycling'],ans:0,exp:'Running is part of athletics (atletismo).'},
        {q:'Which is NOT a sport?',opts:['football','reading','swimming','tennis'],ans:1,exp:'Reading is not a sport; it\'s a hobby.'},
      ]},

      {id:'l10a', title:'Music and Instruments', titlePt:'Música e Instrumentos', icon:'🎵', xp:20, learn:{
        explanation:{
          en:'Music is a popular hobby. Instruments: guitar (guitarra), piano, violin, drums (bateria), flute (flauta), trumpet (trompete). We say "play the guitar" or "play the piano". Also styles: pop, rock, jazz, classical. "I like listening to music."',
          pt:'A música é um hobby popular. Instrumentos: guitar (guitarra), piano, violin (violino), drums (bateria), flute (flauta), trumpet (trompete). Dizemos "play the guitar" ou "play the piano". Também estilos: pop, rock, jazz, classical. "I like listening to music."'
        },
        examples:[
          {en:'I play the guitar in my free time.', pt:'Eu toco guitarra no meu tempo livre.'},
          {en:'She likes listening to pop music.', pt:'Ela gosta de ouvir música pop.'},
          {en:'He plays the drums very well.', pt:'Ele toca bateria muito bem.'},
          {en:'My sister plays the piano.', pt:'A minha irmã toca piano.'},
          {en:'We enjoy jazz and classical music.', pt:'Nós gostamos de jazz e música clássica.'},
        ],
        practice:[
          {q:'What instrument has strings and you strum?', opts:['drums','piano','guitar','flute'], ans:2, exp:'Guitar has strings! 🎸'},
          {q:'Complete: "I play ___ piano."', opts:['a','the','an','any'], ans:1, exp:'"Play the piano" – use "the" for instruments.'},
        ],
      }, qs:[
        {q:'"Drums" in Portuguese is:',opts:['bateria','guitarra','piano','flauta'],ans:0,exp:'Drums = bateria. 🥁'},
        {q:'Which music style is usually loud and has electric guitar?',opts:['classical','jazz','rock','folk'],ans:2,exp:'Rock music is loud with electric guitars! 🎸'},
        {q:'"She sings very well" – singing is a:',opts:['sport','hobby','instrument','job'],ans:1,exp:'Singing can be a hobby (or profession).'},
        {q:'Complete: "I like ___ music." (listen)',opts:['listen','listening','to listen','listened'],ans:1,exp:'"I like listening to music." (after "like" use -ing).'},
        {q:'What instrument do you blow into?',opts:['guitar','piano','flute','drums'],ans:2,exp:'Flute is a wind instrument (flauta).'},
        {q:'"Classical music" is often played with:',opts:['electric guitars','synthesisers','orchestra','drums'],ans:2,exp:'Classical music is played by an orchestra. 🎻'},
        {q:'"Jazz" is a type of:',opts:['sport','music','food','animal'],ans:1,exp:'Jazz is a music genre. 🎷'},
      ]},

      {id:'l10b', title:'Free Time Activities', titlePt:'Atividades de Tempo Livre', icon:'📱', xp:20, learn:{
        explanation:{
          en:'In your free time, you can do many things: watch TV, play video games, surf the internet, meet friends, go for a walk, go to the cinema, read a book, or listen to music. Use "I like to..." or "I enjoy..." plus -ing. Example: "I enjoy watching TV in the evening."',
          pt:'No teu tempo livre, podes fazer muitas coisas: watch TV (ver televisão), play video games (jogar videojogos), surf the internet (navegar na internet), meet friends (encontrar amigos), go for a walk (dar um passeio), go to the cinema (ir ao cinema), read a book (ler um livro), ou listen to music (ouvir música). Usa "I like to..." ou "I enjoy..." + -ing. Exemplo: "I enjoy watching TV in the evening."'
        },
        examples:[
          {en:'I enjoy watching films in my free time.', pt:'Eu gosto de ver filmes no meu tempo livre.'},
          {en:'We often meet friends at the weekend.', pt:'Nós encontramos amigos ao fim de semana.'},
          {en:'She likes going for a walk in the park.', pt:'Ela gosta de dar um passeio no parque.'},
          {en:'He plays video games after school.', pt:'Ele joga videojogos depois da escola.'},
          {en:'I read books every night before bed.', pt:'Eu leio livros todas as noites antes de dormir.'},
        ],
        practice:[
          {q:'"Surf the internet" – what is "surf"?', opts:['a sport','an activity','a place','a person'], ans:1, exp:'Surf the internet is an activity (navegar).'},
          {q:'Complete: "I enjoy ___ TV."', opts:['watch','watching','to watch','watched'], ans:1, exp:'Enjoy + -ing: "watching".'},
        ],
      }, qs:[
        {q:'"Go for a walk" means:',opts:['run fast','walk for pleasure','drive a car','swim'],ans:1,exp:'Go for a walk = dar um passeio a pé. 🚶'},
        {q:'Which is a free time activity?',opts:['go to work','meet friends','study for a test','clean the house'],ans:1,exp:'Meeting friends is a leisure activity (free time).'},
        {q:'"Video games" – you ___ them.',opts:['play','do','make','go'],ans:0,exp:'Play video games! 🎮'},
        {q:'Complete: "She ___ a book every day."',opts:['read','reads','reading','to read'],ans:1,exp:'She reads (third person -s).'},
        {q:'What do you do at the cinema?',opts:['listen to music','watch a film','read a book','play a sport'],ans:1,exp:'At the cinema, you watch a film! 🎥'},
        {q:'"Listen to music" – "listen" is followed by:',opts:['to','for','at','on'],ans:0,exp:'"Listen to music" – use "to".'},
        {q:'Which is NOT a free time activity?',opts:['watch TV','do homework','play video games','go for a walk'],ans:1,exp:'Do homework is obligatory, not free time (usually).'},
      ]},

      {id:'l10c', title:'Talking About Hobbies', titlePt:'Falar sobre Hobbies', icon:'💬', xp:20, learn:{
        explanation:{
          en:'When talking about hobbies, you can ask: "What do you do in your free time?" (O que fazes no teu tempo livre?) "What are your hobbies?" (Quais são os teus hobbies?) "Do you like...?" You can answer: "I like reading." "I play football." "I enjoy listening to music."',
          pt:'Quando falas sobre hobbies, podes perguntar: "What do you do in your free time?" (O que fazes no teu tempo livre?) "What are your hobbies?" (Quais são os teus hobbies?) "Do you like...?" Podes responder: "I like reading." "I play football." "I enjoy listening to music."'
        },
        examples:[
          {en:'What do you do in your free time? — I play football.', pt:'O que fazes no teu tempo livre? — Eu jogo futebol.'},
          {en:'What are your hobbies? — I like cooking and painting.', pt:'Quais são os teus hobbies? — Eu gosto de cozinhar e pintar.'},
          {en:'Do you like reading? — Yes, I love reading.', pt:'Gostas de ler? — Sim, adoro ler.'},
          {en:'I spend my free time with my friends.', pt:'Eu passo o meu tempo livre com os meus amigos.'},
          {en:'She enjoys hiking in the mountains.', pt:'Ela gosta de caminhar nas montanhas.'},
        ],
        practice:[
          {q:'How do you ask about someone\'s hobbies?', opts:['What are your hobbies?','How are you?','Where are you from?','How old are you?'], ans:0, exp:'"What are your hobbies?" is correct.'},
          {q:'Complete: "I spend my free time ___ reading."', opts:['to','for','on','-'], ans:3, exp:'"Spend time reading" – no preposition before -ing.'},
        ],
      }, qs:[
        {q:'"What do you do in your free time?" asks about:',opts:['your job','your hobbies','your family','your age'],ans:1,exp:'It asks about hobbies/leisure activities.'},
        {q:'A response to "What are your hobbies?" could be:',opts:['I am a teacher.','I like swimming.','I am 25.','I live in Maputo.'],ans:1,exp:'"I like swimming" is about hobbies.'},
        {q:'"Do you like dancing?" – short answer:',opts:['Yes, I do.','Yes, I like.','Yes, I am.','Yes, I have.'],ans:0,exp:'"Yes, I do." is the correct short answer.'},
        {q:'"I love reading books." – "reading" is a:',opts:['noun','verb','gerund','infinitive'],ans:2,exp:'"Reading" is a gerund (verb + -ing).'},
        {q:'Complete: "She ___ her free time with friends."',opts:['spends','spend','spending','to spend'],ans:0,exp:'She spends (third person -s).'},
        {q:'Which question is about hobbies?',opts:['What is your name?','What do you like doing?','Where do you live?','How many siblings?'],ans:1,exp:'"What do you like doing?" is about hobbies.'},
        {q:'"I like to swim" and "I like swimming" have:',opts:['different meanings','same meaning','different tenses','different subjects'],ans:1,exp:'Both mean the same (like + infinitive or gerund).'},
      ]},

    ]
  }
];

// Auto-register into global registry
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT14);
