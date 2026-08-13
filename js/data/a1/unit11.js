// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit11.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1g — Modern World
// Part of UNITS_A1

const UNITS_A1_UNIT11 = [
  {
    id:'u1g', cefr:'A1', title:'Modern World', titlePt:'Mundo Moderno',
    desc:'Technology, work and education in English! 💻',
    descPt:'Tecnologia, trabalho e educação em inglês! 💻',
    color:'#1565c0', icon:'💻', premium:false,
    lessons:[

      {id:'l1g1', title:'Using Technology', titlePt:'Usar Tecnologia', icon:'📱', xp:20, learn:{
        explanation:{
          en:'Technology vocabulary is essential for modern life! Key verbs with technology: turn on/off (ligar/desligar), charge (carregar), download (descarregar), upload (carregar), search (pesquisar), click (clicar), send (enviar), receive (receber), connect to wifi (conectar ao wifi). Devices: smartphone (telemóvel inteligente), laptop (computador portátil), tablet, headphones (auscultadores), charger (carregador).',
          pt:'O vocabulário de tecnologia é essencial para a vida moderna! Verbos-chave com tecnologia: turn on/off (ligar/desligar), charge (carregar), download (descarregar), upload (carregar), search (pesquisar), click (clicar), send (enviar), receive (receber), connect to wifi (conectar ao wifi). Dispositivos: smartphone (telemóvel inteligente), laptop (computador portátil), tablet, headphones (auscultadores), charger (carregador).'
        },
        examples:[
          {en:'Can you turn on the laptop, please?', pt:'Podes ligar o computador portátil, por favor?'},
          {en:'My phone battery is dead — I need to charge it.', pt:'A bateria do meu telemóvel está a zero — preciso de carregá-lo.'},
          {en:'I\'ll send you the file by email.', pt:'Vou enviar-te o ficheiro por email.'},
          {en:'Can you connect to the wifi here?', pt:'Consegues conectar-te ao wifi aqui?'},
          {en:'She downloaded the app on her phone.', pt:'Ela descarregou a aplicação no telemóvel.'},
        ],
        practice:[
          {q:'"Turn off" the phone means:', opts:['charge it','connect it','stop using it/shut it down','restart it'], ans:2, exp:'"Turn off" = desligar — stop the device. "Turn on" = ligar!'},
          {q:'If your phone battery is "dead" it means:', opts:['it\'s broken','it has no charge/power','it\'s turned off','it\'s on silent'], ans:1, exp:'"Dead" battery = has no power left. You need to charge it!'},
        ],
      }, qs:[
        {q:'"I need to ___ my phone — the battery is at 2%."',opts:['turn off','charge','download','search'],ans:1,exp:'"Charge my phone." = Carregar o telemóvel. The battery is almost empty!'},
        {q:'"___ the app from the Play Store."',opts:['Upload','Turn on','Download','Click'],ans:2,exp:'"Download the app." = Descarregar a aplicação from the internet to your device!'},
        {q:'"Can you ___ to the wifi?" (connect)',opts:['turn on','search','connect','click'],ans:2,exp:'"Connect to the wifi." = Conectar ao wifi!'},
        {q:'"Send me the ___." (a document via email)',opts:['app','wifi','file','battery'],ans:2,exp:'"Send me the FILE." = Envia-me o ficheiro. A file = a document on a computer!'},
        {q:'"Headphones" are used to:',opts:['charge your phone','connect to wifi','listen to audio privately','take photos'],ans:2,exp:'"Headphones" = auscultadores — you put them on your ears to listen privately!'},
        {q:'"The wifi is ___." (there is no internet signal)',opts:['connected','downloading','down/not working','charging'],ans:2,exp:'"The wifi is DOWN." = O wifi não está a funcionar — no internet connection!'},
        {q:'Which is a technology DEVICE?',opts:['charger','wifi','download','click'],ans:0,exp:'A CHARGER is a device (aparelho). Wifi, download, and click are not physical devices.'},
      ]},

      {id:'l1g2', title:'Social Media & Communication', titlePt:'Redes Sociais e Comunicação', icon:'📲', xp:20, learn:{
        explanation:{
          en:'Social media has its own vocabulary! Key actions: post (publicar), like (dar gosto), share (partilhar), comment (comentar), follow (seguir), unfollow (deixar de seguir), tag (marcar), message (enviar mensagem). "I posted a photo on Instagram." "She has a lot of followers." "Can you send me a message?" In professional context, use LinkedIn. In casual context — WhatsApp, Facebook, Instagram, TikTok.',
          pt:'As redes sociais têm o seu próprio vocabulário! Acções-chave: post (publicar), like (dar gosto), share (partilhar), comment (comentar), follow (seguir), unfollow (deixar de seguir), tag (marcar), message (enviar mensagem). "I posted a photo on Instagram." "She has a lot of followers." "Can you send me a message?" Em contexto profissional, usa o LinkedIn. Em contexto casual — WhatsApp, Facebook, Instagram, TikTok.'
        },
        examples:[
          {en:'I posted a photo on my Instagram story.', pt:'Eu publiquei uma foto no meu story do Instagram.'},
          {en:'Can you send me a message on WhatsApp?', pt:'Podes enviar-me uma mensagem no WhatsApp?'},
          {en:'She tagged me in a funny video.', pt:'Ela marcou-me num vídeo engraçado.'},
          {en:'This video has 5 million views!', pt:'Este vídeo tem 5 milhões de visualizações!'},
          {en:'I follow English With Sebastian on TikTok.', pt:'Eu sigo o English With Sebastian no TikTok.'},
        ],
        practice:[
          {q:'"Like" on social media means:', opts:['to dislike','to click the heart/thumbs up button','to comment','to share'], ans:1, exp:'"Like" = to press the heart/👍 button — showing you enjoy the content!'},
          {q:'"She has 10,000 followers." "Followers" are:', opts:['enemies','people who follow her account','her family only','her co-workers'], ans:1, exp:'"Followers" = people who subscribe to/follow your social media account!'},
        ],
      }, qs:[
        {q:'"I ___ a photo on Instagram." (published)',opts:['liked','shared','posted','commented'],ans:2,exp:'"I POSTED a photo." = Eu publiquei uma foto. Post = publish on social media!'},
        {q:'To "share" someone\'s post means to:',opts:['delete it','like it','repost it so others can see it','comment on it'],ans:2,exp:'"Share" = repost/partilhar — you spread the post to your followers!'},
        {q:'"Tag" someone in a post means to:',opts:['like their photo','mention/link their profile in the post','unfollow them','delete their comment'],ans:1,exp:'"Tag" = marcar — you link their name/profile so they get notified!'},
        {q:'"Follow" someone on social media means:',opts:['walk behind them','subscribe to their account to see their posts','send them a message','unfollow them'],ans:1,exp:'"Follow" = seguir — subscribe to see their posts in your feed!'},
        {q:'"This video has 2 million ___."',opts:['followers','likes','views','comments'],ans:2,exp:'"2 million VIEWS" = visualizações — 2 million people watched it!'},
        {q:'Which platform is best for PROFESSIONAL networking?',opts:['TikTok','Instagram','LinkedIn','Snapchat'],ans:2,exp:'LinkedIn is for PROFESSIONAL networking — jobs, CV, business contacts!'},
        {q:'"Can you ___ me on WhatsApp?" (send a text)',opts:['post','tag','message','follow'],ans:2,exp:'"Can you MESSAGE me on WhatsApp?" = Podes enviar-me uma mensagem no WhatsApp?'},
      ]},

      {id:'l1g3', title:'Applying for a Job', titlePt:'Candidatar-se a um Emprego', icon:'💼', xp:30, learn:{
        explanation:{
          en:'Looking for a job requires specific vocabulary. Key documents: CV/resume (currículo), cover letter (carta de apresentação). Key actions: apply for (candidatar-se a), interview (entrevista), hire (contratar), get the job (conseguir o emprego). At the interview: "Tell me about yourself." "Why do you want this job?" "What are your strengths?" Strengths: hardworking (trabalhador/a), organized (organizado/a), punctual (pontual), team player (bom/boa em equipa).',
          pt:'À procura de emprego requer vocabulário específico. Documentos-chave: CV/resume (currículo), cover letter (carta de apresentação). Acções-chave: apply for (candidatar-se a), interview (entrevista), hire (contratar), get the job (conseguir o emprego). Na entrevista: "Tell me about yourself." "Why do you want this job?" "What are your strengths?" Pontos fortes: hardworking (trabalhador/a), organized (organizado/a), punctual (pontual), team player (bom/boa em equipa).'
        },
        examples:[
          {en:'I\'d like to apply for the teacher position.', pt:'Gostaria de me candidatar ao posto de professor/a.'},
          {en:'I have three years of experience in this field.', pt:'Tenho três anos de experiência nesta área.'},
          {en:'I am hardworking, punctual and a good team player.', pt:'Sou trabalhador/a, pontual e bom/boa em equipa.'},
          {en:'When can you start?', pt:'Quando pode começar?'},
          {en:'Congratulations, you got the job!', pt:'Parabéns, conseguiste o emprego!'},
        ],
        practice:[
          {q:'"Apply for a job" means:', opts:['reject a job','look for a job','submit your CV and ask to be hired','quit a job'], ans:2, exp:'"Apply for" = candidatar-se. You send your CV and ask for the position!'},
          {q:'A "CV" is:', opts:['a cover letter','a document listing your education and experience','a job offer','an interview'], ans:1, exp:'A CV (currículo) lists your education, experience and skills!'},
        ],
      }, qs:[
        {q:'"I\'d like to ___ for the position." (submit application)',opts:['hire','apply','interview','get'],ans:1,exp:'"Apply for the position." = Candidatar-me ao posto/vaga!'},
        {q:'"Hardworking" means:',opts:['lazy','organized','always works hard/doesn\'t avoid work','punctual'],ans:2,exp:'"Hardworking" = trabalhador/a — someone who works hard and doesn\'t avoid work!'},
        {q:'"Tell me about yourself." is a typical ___ question.',opts:['exam','interview','shopping','travel'],ans:1,exp:'"Tell me about yourself." is a classic JOB INTERVIEW question!'},
        {q:'What do you need to apply for a job?',opts:['a ticket','a passport','a CV','a boarding pass'],ans:2,exp:'You need a CV (currículo) to apply for a job — it lists your education and experience!'},
        {q:'"Punctual" means:',opts:['always late','always on time','very organized','very creative'],ans:1,exp:'"Punctual" = pontual — always arriving on time! Very valued by employers.'},
        {q:'"Congratulations, you ___ the job!"',opts:['applied for','lost','got','rejected'],ans:2,exp:'"You GOT the job!" = Conseguiste o emprego! Great news! 🎉'},
        {q:'"I have three years of ___." (work history)',opts:['experience','interview','degree','application'],ans:0,exp:'"I have three years of EXPERIENCE." = Tenho três anos de experiência!'},
      ]},

      {id:'l1g4', title:'At School & University', titlePt:'Na Escola e Universidade', icon:'🎓', xp:20, learn:{
        explanation:{
          en:'Education vocabulary helps you talk about school life. Subjects: English, Maths, History, Science, Geography, Art, Physical Education. People: teacher, professor, student, classmate, headmaster/principal. Places: classroom, library, canteen, playground, office. Actions: study, revise, pass (an exam), fail (an exam), graduate, enrol. "I study at Eduardo Mondlane University." "I am in 10th grade."',
          pt:'O vocabulário de educação ajuda-te a falar sobre a vida escolar. Disciplinas: English, Maths, History, Science, Geography, Art, Physical Education. Pessoas: teacher, professor, student, classmate, headmaster/principal. Lugares: classroom, library, canteen, playground, office. Acções: study, revise, pass (an exam), fail (an exam), graduate, enrol. "I study at Eduardo Mondlane University." "I am in 10th grade."'
        },
        examples:[
          {en:'My favourite subject is English.', pt:'A minha disciplina favorita é o inglês.'},
          {en:'I study at Eduardo Mondlane University.', pt:'Estudo na Universidade Eduardo Mondlane.'},
          {en:'I need to revise for my exam tomorrow.', pt:'Preciso de estudar para o meu exame de amanhã.'},
          {en:'She passed her exam with very good marks.', pt:'Ela passou no exame com muito boas notas.'},
          {en:'We have a library with thousands of books.', pt:'Temos uma biblioteca com milhares de livros.'},
        ],
        practice:[
          {q:'"Revise" means:', opts:['to study something for the first time','to forget','to review/study again before an exam','to pass an exam'], ans:2, exp:'"Revise" = estudar/rever — reviewing material before an exam!'},
          {q:'"Pass an exam" means:', opts:['fail it','take it','do it successfully (get a good enough mark)','ignore it'], ans:2, exp:'"Pass" = get a good enough mark to succeed. Opposite: "fail".'},
        ],
      }, qs:[
        {q:'What do you do in a "library"?',opts:['eat lunch','play sport','study and read books','have classes'],ans:2,exp:'In a LIBRARY = biblioteca — you study, read books and do research!'},
        {q:'"I am in ___ grade." (Mozambique school system)',opts:['class','form','grade','year'],ans:2,exp:'In Mozambique and many countries, we say "in 10th GRADE" for year of study!'},
        {q:'"She failed the exam." means:',opts:['she passed successfully','she got a very good mark','she didn\'t get a good enough mark','she didn\'t take the exam'],ans:2,exp:'"Failed" = didn\'t pass — her mark wasn\'t good enough. Opposite: passed!'},
        {q:'"My favourite ___." (talking about a school subject)',opts:['subject','lesson only','teacher only','class only'],ans:0,exp:'"My favourite SUBJECT" = a minha disciplina favorita! English, Maths, etc.'},
        {q:'"Classmate" means:',opts:['a friend outside school','a teacher','a person who studies in the same class as you','the school director'],ans:2,exp:'"Classmate" = colega de turma — someone who studies in the SAME class as you!'},
        {q:'"Enrol" at a university means:',opts:['graduate','fail','register/sign up as a student','study all night'],ans:2,exp:'"Enrol" = matricular-se — register as a student officially!'},
        {q:'"I need to ___ for my exam." (study again)',opts:['enrol','graduate','revise','fail'],ans:2,exp:'"I need to REVISE for my exam." = Preciso de estudar/rever para o exame!'},
      ]},

      {id:'l1g5', title:'Making Phone Calls', titlePt:'Fazer Chamadas Telefónicas', icon:'📞', xp:20, learn:{
        explanation:{
          en:'Telephone conversations have their own vocabulary! Calling phrases: "Hello, can I speak to...?" "This is [name] speaking." "Hold on, please." "I\'ll put you through." "The line is busy." "Can you call back later?" Receiving phrases: "Who\'s calling?" "Just a moment." "I\'m sorry, he\'s not in." "Can I take a message?" "I\'ll let him/her know you called."',
          pt:'As conversas telefónicas têm o seu próprio vocabulário! Frases para ligar: "Hello, can I speak to...?" "This is [name] speaking." "Hold on, please." "I\'ll put you through." "The line is busy." "Can you call back later?" Frases para receber: "Who\'s calling?" "Just a moment." "I\'m sorry, he\'s not in." "Can I take a message?" "I\'ll let him/her know you called."'
        },
        examples:[
          {en:'Hello, can I speak to Mr. Nhamuneque, please?', pt:'Olá, posso falar com o Sr. Nhamuneque, por favor?'},
          {en:'This is Sebastian speaking.', pt:'É o Sebastian a falar.'},
          {en:'I\'m sorry, she\'s not available at the moment.', pt:'Lamento, ela não está disponível neste momento.'},
          {en:'Can I take a message?', pt:'Posso anotar um recado?'},
          {en:'Could you call back in an hour?', pt:'Poderia ligar novamente daqui a uma hora?'},
        ],
        practice:[
          {q:'"The line is busy." means:', opts:['no one is there','the phone is ringing','someone is already using the line','the phone is turned off'], ans:2, exp:'"The line is busy" = a linha está ocupada — someone is already on the phone!'},
          {q:'How do you identify yourself on the phone?', opts:['Hi!','It\'s me.','This is [name] speaking.','Hello there.'], ans:2, exp:'"This is [name] speaking." = Sou o/a [nome] a falar. The standard phone introduction!'},
        ],
      }, qs:[
        {q:'"Hello, can I ___ to Ana, please?"',opts:['talk','say','speak','tell'],ans:2,exp:'"Can I SPEAK to Ana?" = Posso falar com a Ana? Standard phone request!'},
        {q:'"Hold on" on the phone means:',opts:['hang up','wait a moment','speak louder','call back'],ans:1,exp:'"Hold on" = wait/espera — I\'ll be back in a moment!'},
        {q:'"Can I take a message?" means:',opts:['Can I write down what you want to say?','Can I speak to you?','Can you call back?','Can I help you?'],ans:0,exp:'"Can I take a message?" = Posso anotar um recado? You\'ll write down what the caller wants to say!'},
        {q:'"She\'s not in at the moment." means:',opts:['she\'s busy','she\'s not available/not here right now','she doesn\'t want to talk','her phone is off'],ans:1,exp:'"She\'s not in" = ela não está/não está disponível agora — she\'s not there right now!'},
        {q:'"This is Sebastian ___." (identifying yourself)',opts:['calling','speaking','talking','phoning'],ans:1,exp:'"This is Sebastian SPEAKING." = Sou o Sebastian a falar. The standard way!'},
        {q:'"Could you call ___ later?" (phone again)',opts:['again','back','here','up'],ans:1,exp:'"Could you call BACK later?" = Poderia ligar novamente mais tarde?'},
        {q:'What do you say when you pick up the phone?',opts:['Goodbye!','Speaking!','Hello?','Please hold.'],ans:2,exp:'"Hello?" is the standard greeting when you pick up a phone call!'},
      ]},

      {id:'l1g6', title:'Writing Emails & Messages', titlePt:'Escrever Emails e Mensagens', icon:'✉️', xp:25, learn:{
        explanation:{
          en:'Email and message writing has formal and informal styles. Formal email: "Dear Mr/Ms [name]," ... "Yours sincerely," / "Kind regards,". Informal email/message: "Hi [name]," ... "Best wishes," / "See you soon!" Key phrases: "I am writing to..." "Please find attached..." "I look forward to hearing from you." "Could you please...?" "Thank you for your reply." In WhatsApp/SMS: much more casual — abbreviations, emojis are fine.',
          pt:'Escrever emails e mensagens tem estilos formais e informais. Email formal: "Dear Mr/Ms [name]," ... "Yours sincerely," / "Kind regards,". Email/mensagem informal: "Hi [name]," ... "Best wishes," / "See you soon!" Frases-chave: "I am writing to..." "Please find attached..." "I look forward to hearing from you." "Could you please...?" "Thank you for your reply." No WhatsApp/SMS: muito mais casual — abreviações, emojis são aceitáveis.'
        },
        examples:[
          {en:'Dear Professor Silva, I am writing to ask about the exam.', pt:'Caro Professor Silva, Escrevo para perguntar sobre o exame.'},
          {en:'Please find attached my CV for your consideration.', pt:'Em anexo encontrará o meu CV para a sua apreciação.'},
          {en:'I look forward to hearing from you soon.', pt:'Aguardo com expectativa uma resposta sua em breve.'},
          {en:'Kind regards, Sebastian.', pt:'Com os melhores cumprimentos, Sebastian.'},
          {en:'Hi Ana! Are you coming to class tomorrow? 😊', pt:'Oi Ana! Vens à aula amanhã? 😊'},
        ],
        practice:[
          {q:'A formal email starts with:', opts:['Hey!','Hi there,','Dear Mr/Ms [name],','Hello everyone,'], ans:2, exp:'"Dear Mr/Ms [name]," — formal email opening!'},
          {q:'"I look forward to hearing from you." means:', opts:['I don\'t want your reply','I hope you will reply soon','This email is finished','Please don\'t reply'], ans:1, exp:'"I look forward to hearing from you." = Aguardo a sua resposta. Polite closing phrase!'},
        ],
      }, qs:[
        {q:'How do you start a FORMAL email?',opts:['Hey!','Yo!','Dear Mr/Ms Silva,','Hi there!'],ans:2,exp:'"Dear Mr/Ms [name]," is the formal way to start an email!'},
        {q:'How do you END a formal email?',opts:['Bye!','See you soon!','Kind regards, [name]','Talk later'],ans:2,exp:'"Kind regards," or "Yours sincerely," are formal email endings!'},
        {q:'"Please find ___." (there\'s a document attached)',opts:['enclosed','attached','inside','here'],ans:1,exp:'"Please find ATTACHED." = Em anexo encontrará... Standard phrase for attachments!'},
        {q:'"I am writing ___ ask about the exam."',opts:['to','for','of','in'],ans:0,exp:'"I am writing TO ask..." = the purpose of writing. "To" + infinitive!'},
        {q:'Which is appropriate for a WhatsApp message to a friend?',opts:['Dear Ana, I am writing to inquire...','Hi! Coming to class tomorrow? 😊','To whom it may concern','Yours sincerely'],ans:1,exp:'WhatsApp to a friend is casual — "Hi! Coming to class tomorrow? 😊" is perfect!'},
        {q:'"Kind regards" is used:',opts:['to start a formal email','to end a formal email','to start an informal message','to end an informal message'],ans:1,exp:'"Kind regards," ends a formal email — like "Com os melhores cumprimentos"!'},
        {q:'"Thank you for your ___." (responding to an email received)',opts:['write','reply','message only','attached'],ans:1,exp:'"Thank you for your REPLY." = Obrigado/a pela sua resposta. Acknowledging their email!'},
      ]},

    ]
  }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT11);
