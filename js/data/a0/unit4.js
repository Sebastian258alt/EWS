// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit4.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0d — People, School & Home
// Part of UNITS_A0

const UNITS_A0_UNIT4 = [
  {
    id:'u0d', cefr:'A0', title:'People, School & Home', titlePt:'Pessoas, Escola e Casa',
    desc:'Talk about the people and places in your daily life 🏠',
    descPt:'Fala sobre as pessoas e os lugares na tua vida diária 🏠',
    color:'#ef6c00', icon:'🏠', premium:false,
    lessons:[

      {id:'l0u', title:'Friends & People', titlePt:'Amigos e Pessoas', icon:'👫', xp:15, learn:{
        explanation:{
          en:'Beyond family, we talk about the people around us every day. A "friend" is someone you like and spend time with. A "classmate" is someone in your class. A "neighbour" is someone who lives near you. A "colleague" or "workmate" is someone you work with.',
          pt:'Para além da família, falamos das pessoas à nossa volta todos os dias. Um "friend" é alguém de quem gostas e com quem passas tempo. Um "classmate" é alguém da tua turma. Um "neighbour" é alguém que vive perto de ti. Um "colleague" ou "workmate" é alguém com quem trabalhas.'
        },
        examples:[
          {en:'This is my best friend, Carlos.', pt:'Este é o meu melhor amigo, Carlos.'},
          {en:'My classmate is very funny.', pt:'O meu colega de turma é muito engraçado.'},
          {en:'My neighbour helps me sometimes.', pt:'O meu vizinho ajuda-me às vezes.'},
          {en:'She is my colleague at work.', pt:'Ela é minha colega de trabalho.'},
          {en:'I have many friends at school.', pt:'Tenho muitos amigos na escola.'},
        ],
        practice:[
          {q:'A "classmate" is:', opts:['a friend from childhood','someone in your class','a family member','a neighbour'], ans:1, exp:'Classmate = someone in your class at school!'},
          {q:'A "neighbour" is:', opts:['someone at work','someone in your family','someone who lives near you','your best friend'], ans:2, exp:'Neighbour = someone who lives near you!'},
        ],
      }, qs:[
        {q:'"Friend" in Portuguese is:',opts:['vizinho','família','amigo','colega de trabalho'],ans:2,exp:'Friend = amigo/a!'},
        {q:'A "classmate" is someone who:',opts:['works with you','lives near you','is in your class','is in your family'],ans:2,exp:'Classmate = colega de turma!'},
        {q:'What do you call someone who lives next door to you?',opts:['classmate','colleague','friend','neighbour'],ans:3,exp:'Neighbour = vizinho/a!'},
        {q:'"Colleague" means:',opts:['a family member','a workmate','a classmate','a neighbour'],ans:1,exp:'Colleague = colega de trabalho!'},
        {q:'"My best friend" means:',opts:['my only friend','my most special friend','a new friend','a classmate'],ans:1,exp:'"Best friend" = melhor amigo — the most special one!'},
        {q:'How do you introduce a friend?',opts:['"This is my friend, Ana."','"Ana is my classmate."','"She neighbour me."','"Ana friend I."'],ans:0,exp:'"This is my friend, Ana." — the perfect introduction!'},
      ]},

      {id:'l0v', title:'School & Classroom Objects', titlePt:'Escola e Objectos da Sala de Aula', icon:'🏫', xp:20, learn:{
        explanation:{
          en:'School vocabulary helps you talk about your daily learning environment. Key objects: book (livro), pen (caneta), pencil (lápis), notebook (caderno), bag (mochila), board (quadro), desk (secretária), chair (cadeira), ruler (régua), rubber/eraser (borracha).',
          pt:'O vocabulário escolar ajuda-te a falar sobre o teu ambiente de aprendizagem diário. Objectos importantes: book (livro), pen (caneta), pencil (lápis), notebook (caderno), bag (mochila), board (quadro), desk (secretária), chair (cadeira), ruler (régua), rubber/eraser (borracha).'
        },
        examples:[
          {en:'Open your book on page 10.', pt:'Abre o teu livro na página 10.'},
          {en:'I need a pen and a notebook.', pt:'Preciso de uma caneta e um caderno.'},
          {en:'The board is very useful in class.', pt:'O quadro é muito útil na aula.'},
          {en:'Put your bag under your desk.', pt:'Põe a tua mochila debaixo da secretária.'},
          {en:'Can I borrow your eraser?', pt:'Posso pedir emprestada a tua borracha?'},
        ],
        practice:[
          {q:'What is a "pencil"?', opts:['caneta','lápis','régua','caderno'], ans:1, exp:'Pencil = lápis! A pen uses ink; a pencil uses graphite.'},
          {q:'What is a "notebook"?', opts:['livro','pasta','caderno','mochila'], ans:2, exp:'Notebook = caderno! Where you write your notes.'},
        ],
      }, qs:[
        {q:'"Mochila" in English is:',opts:['book','bag','box','board'],ans:1,exp:'Bag (or schoolbag/backpack) = mochila!'},
        {q:'What do you use to write on paper?',opts:['ruler','eraser','pen or pencil','board'],ans:2,exp:'Pen or pencil — you use these to write!'},
        {q:'"Quadro" in English is:',opts:['book','desk','board','chair'],ans:2,exp:'Board = quadro! Where the teacher writes.'},
        {q:'What is an "eraser"?',opts:['lápis','borracha','régua','caderno'],ans:1,exp:'Eraser (or rubber) = borracha! Used to erase pencil marks.'},
        {q:'"Ruler" in Portuguese is:',opts:['caneta','régua','borracha','lápis'],ans:1,exp:'Ruler = régua! Used to draw straight lines and measure.'},
        {q:'Where do you sit in class?',opts:['on the board','at the desk/chair','in the bag','on the ruler'],ans:1,exp:'You sit at a desk on a chair!'},
        {q:'"Can I borrow your ___?" (you need to write)',opts:['board','pen','desk','chair'],ans:1,exp:'"Can I borrow your pen?" — when you need to write!'},
      ]},

      {id:'l0w', title:'House & Rooms', titlePt:'Casa e Divisões', icon:'🏡', xp:20, learn:{
        explanation:{
          en:'A house has several rooms (divisões). The main ones are: bedroom (quarto), bathroom (casa de banho), kitchen (cozinha), living room (sala de estar), dining room (sala de jantar), and garden (jardim). We use "in the" to say where we are: "I am in the kitchen."',
          pt:'Uma casa tem várias divisões. As principais são: bedroom (quarto), bathroom (casa de banho), kitchen (cozinha), living room (sala de estar), dining room (sala de jantar) e garden (jardim). Usamos "in the" para dizer onde estamos: "I am in the kitchen."'
        },
        examples:[
          {en:'I sleep in the bedroom.', pt:'Durmo no quarto.'},
          {en:'We eat in the dining room.', pt:'Comemos na sala de jantar.'},
          {en:'The TV is in the living room.', pt:'A televisão está na sala de estar.'},
          {en:'She is cooking in the kitchen.', pt:'Ela está a cozinhar na cozinha.'},
          {en:'The children play in the garden.', pt:'As crianças brincam no jardim.'},
        ],
        practice:[
          {q:'Where do you sleep?', opts:['kitchen','living room','bedroom','bathroom'], ans:2, exp:'Bedroom = quarto! Where you sleep.'},
          {q:'"Cozinha" in English is:', opts:['bathroom','bedroom','kitchen','living room'], ans:2, exp:'Kitchen = cozinha! Where you cook.'},
        ],
      }, qs:[
        {q:'"Quarto" (where you sleep) in English is:',opts:['bathroom','kitchen','bedroom','living room'],ans:2,exp:'Bedroom = quarto! Where you sleep at night.'},
        {q:'Where do you cook food?',opts:['bedroom','kitchen','bathroom','garden'],ans:1,exp:'Kitchen = cozinha! Where you cook!'},
        {q:'"Living room" in Portuguese is:',opts:['quarto','cozinha','sala de estar','casa de banho'],ans:2,exp:'Living room = sala de estar!'},
        {q:'"I am in the ___." (you are washing your hands)',opts:['bedroom','kitchen','bathroom','garden'],ans:2,exp:'Bathroom = casa de banho! Where you wash and shower.'},
        {q:'Where does the family eat together?',opts:['bedroom','garden','bathroom','dining room'],ans:3,exp:'Dining room = sala de jantar!'},
        {q:'"The children play outside." Outside means:',opts:['in the bedroom','in the bathroom','in the garden/outside','in the kitchen'],ans:2,exp:'Outside = garden or any outdoor area!'},
        {q:'How do you say you are in a room?',opts:['I am at bedroom','I am in the bedroom','I am on the bedroom','I am of the bedroom'],ans:1,exp:'"I am IN THE bedroom." — use "in the" for rooms!'},
      ]},

      {id:'l0x', title:'Furniture & Home Objects', titlePt:'Mobília e Objectos da Casa', icon:'🛋️', xp:20, learn:{
        explanation:{
          en:'Inside each room, there is furniture and objects. Key words: bed (cama), sofa (sofá), table (mesa), chair (cadeira), wardrobe (guarda-roupa), fridge (frigorífico), TV (televisão), lamp (candeeiro), mirror (espelho), window (janela), door (porta).',
          pt:'Dentro de cada divisão, há mobília e objectos. Palavras-chave: bed (cama), sofa (sofá), table (mesa), chair (cadeira), wardrobe (guarda-roupa), fridge (frigorífico), TV (televisão), lamp (candeeiro), mirror (espelho), window (janela), door (porta).'
        },
        examples:[
          {en:'The bed is big and comfortable.', pt:'A cama é grande e confortável.'},
          {en:'We sit on the sofa to watch TV.', pt:'Sentamo-nos no sofá para ver televisão.'},
          {en:'Open the window — it\'s hot!', pt:'Abre a janela — está calor!'},
          {en:'The food is in the fridge.', pt:'A comida está no frigorífico.'},
          {en:'I hang my clothes in the wardrobe.', pt:'Penduro as minhas roupas no guarda-roupa.'},
        ],
        practice:[
          {q:'What is a "fridge"?', opts:['fogão','frigorífico','forno','mesa'], ans:1, exp:'Fridge = frigorífico! Keeps your food cold.'},
          {q:'"Cama" in English is:', opts:['sofa','chair','desk','bed'], ans:3, exp:'Bed = cama! Where you sleep.'},
        ],
      }, qs:[
        {q:'"Cama" in English is:',opts:['sofa','chair','table','bed'],ans:3,exp:'Bed = cama!'},
        {q:'Where do you keep your clothes?',opts:['fridge','wardrobe','lamp','sofa'],ans:1,exp:'Wardrobe (guarda-roupa) = where you keep clothes!'},
        {q:'"Mesa" in English is:',opts:['chair','table','lamp','door'],ans:1,exp:'Table = mesa!'},
        {q:'What gives light in a room?',opts:['mirror','fridge','lamp','window'],ans:2,exp:'Lamp = candeeiro! Gives light in a room.'},
        {q:'You look at yourself in a:',opts:['window','fridge','mirror','door'],ans:2,exp:'Mirror = espelho! You see your reflection!'},
        {q:'"The food is in the ___."',opts:['wardrobe','fridge','mirror','lamp'],ans:1,exp:'Food goes in the fridge to stay cold!'},
        {q:'"Porta" in English is:',opts:['window','wall','floor','door'],ans:3,exp:'Door = porta!'},
      ]},

      {id:'l0y', title:'Jobs & Occupations', titlePt:'Profissões e Ocupações', icon:'👷', xp:20, learn:{
        explanation:{
          en:'To talk about someone\'s job, use "He/She is a ___" or "I am a ___". Key jobs: teacher (professor/a), doctor (médico), nurse (enfermeiro/a), engineer (engenheiro/a), driver (motorista), farmer (agricultor), student (estudante), manager (gerente), police officer (polícia), chef (cozinheiro/a).',
          pt:'Para falar sobre o trabalho de alguém, usa "He/She is a ___" ou "I am a ___". Profissões importantes: teacher (professor/a), doctor (médico), nurse (enfermeiro/a), engineer (engenheiro/a), driver (motorista), farmer (agricultor), student (estudante), manager (gerente), police officer (polícia), chef (cozinheiro/a).'
        },
        examples:[
          {en:'My mother is a nurse.', pt:'A minha mãe é enfermeira.'},
          {en:'He is a doctor at the hospital.', pt:'Ele é médico no hospital.'},
          {en:'I am a student.', pt:'Eu sou estudante.'},
          {en:'My father is a driver.', pt:'O meu pai é motorista.'},
          {en:'She is a teacher at our school.', pt:'Ela é professora na nossa escola.'},
        ],
        practice:[
          {q:'How do you say "Eu sou estudante"?', opts:['I is student','I am student','I am a student','I be student'], ans:2, exp:'"I am a student." — Use "a" before job names!'},
          {q:'"Médico" in English is:', opts:['nurse','driver','doctor','engineer'], ans:2, exp:'Doctor = médico!'},
        ],
      }, qs:[
        {q:'"Teacher" in Portuguese is:',opts:['médico','engenheiro','professor/a','motorista'],ans:2,exp:'Teacher = professor/a!'},
        {q:'"My mother is a ___." (enfermeira)',opts:['driver','nurse','farmer','manager'],ans:1,exp:'Nurse = enfermeiro/a!'},
        {q:'How do you say "Ela é médica"?',opts:['She is doctor','She am a doctor','She is a doctor','She be doctor'],ans:2,exp:'"She IS A doctor." — is + a + job!'},
        {q:'"Agricultor" in English is:',opts:['driver','teacher','engineer','farmer'],ans:3,exp:'Farmer = agricultor!'},
        {q:'A "police officer" is a:',opts:['motorista','polícia','cozinheiro','engenheiro'],ans:1,exp:'Police officer = polícia!'},
        {q:'"Student" in Portuguese is:',opts:['professor','médico','estudante','gerente'],ans:2,exp:'Student = estudante!'},
        {q:'"He is ___ engineer." (fill in the blank)',opts:['a','an','the','is'],ans:1,exp:'"He is AN engineer." — use "an" before words starting with a vowel sound!'},
      ]},

    ]
  }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT4);
