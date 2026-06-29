// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a1/unit13.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1i
// Part of UNITS_A1 — Technology & Everyday Life

const UNITS_A1_UNIT13 = [
  {
    id:'u1i', cefr:'A1', title:'Technology & Everyday Life', titlePt:'Tecnologia e Vida Quotidiana',
    desc:'English for smartphones, internet & everyday tech 📱',
    descPt:'Inglês para smartphones, internet e tecnologia do dia-a-dia 📱',
    color:'#00bcd4', icon:'📱', premium:false,
    lessons:[

      {id:'l1i1', title:'Smartphone Vocabulary', titlePt:'Vocabulário do Smartphone', icon:'📱', xp:20, learn:{
        explanation:{
          en:'Essential smartphone words: screen (ecrã), battery (bateria), charger (carregador), app (aplicação), download (descarregar), upload (carregar), Wi-Fi, data (dados móveis), camera (câmara), storage (armazenamento). We \"turn on/off\" a phone, \"charge\" the battery, and \"unlock\" the screen.',
          pt:'Palavras essenciais de smartphone: screen (ecrã), battery (bateria), charger (carregador), app (aplicação), download (descarregar), upload (carregar), Wi-Fi, data (dados móveis), camera (câmara), storage (armazenamento). Ligamos/desligamos (turn on/off) o telemóvel, carregamos (charge) a bateria e desbloqueamos (unlock) o ecrã.'
        },
        examples:[
          {en:'My battery is dead. Can I borrow your charger?', pt:'A minha bateria morreu. Posso pedir emprestado o teu carregador?'},
          {en:'Download the EnglishFlow app for free.', pt:'Descarrega a aplicação EnglishFlow de graça.'},
          {en:'I have no Wi-Fi — I\'ll use mobile data.', pt:'Não tenho Wi-Fi — vou usar dados móveis.'},
        ],
        practice:[
          {q:'\"Charger\" means:', opts:['carregador','ecrã','câmara','aplicação'], ans:0, exp:'charger = carregador. You use it to charge the battery.'},
          {q:'\"Download\" means:', opts:['tirar uma foto','desligar o telemóvel','descarregar um ficheiro','ligar ao Wi-Fi'], ans:2, exp:'Download = descarregar. Getting data FROM the internet TO your device.'},
        ],
      }, qs:[
        {q:'\"My battery is dead\" means:',opts:['My phone is broken','The phone has no power left','The phone was stolen','The screen is cracked'],ans:1,exp:'\"Battery is dead\" = bateria morreu / descarregou. No power!'},
        {q:'Which word means \"ecrã\"?',opts:['battery','screen','charger','app'],ans:1,exp:'screen = ecrã. The display you look at on your phone.'},
        {q:'\"I need to ___ my phone. The battery is at 2%.\"',opts:['upgrade','unlock','charge','download'],ans:2,exp:'Charge = carregar. You charge the battery using a charger.'},
        {q:'\"Upload\" is the opposite of:',opts:['turn on','connect','download','save'],ans:2,exp:'Download = from internet to device. Upload = from device to internet.'},
        {q:'\"I have no signal\" means:',opts:['My phone is off','I cannot make calls or use data','My screen is broken','My battery is full'],ans:1,exp:'No signal = sem sinal. You cannot call, text, or use the internet.'},
      ]},

      {id:'l1i2', title:'Social Media & Messaging', titlePt:'Redes Sociais e Mensagens', icon:'💬', xp:20, learn:{
        explanation:{
          en:'Social media vocabulary: post (publicação), share (partilhar), like (gostar/curtir), comment (comentário), follow (seguir), profile (perfil), feed (feed), story (história), message (mensagem), group (grupo). We "send" messages, "upload" photos, and "scroll" through the feed.',
          pt:'Vocabulário das redes sociais: post (publicação), share (partilhar), like (gostar/curtir), comment (comentário), follow (seguir), profile (perfil), feed (feed), story (história), message (mensagem), group (grupo). "Enviamos" mensagens, "carregamos" fotos e "fazemos scroll" pelo feed.'
        },
        examples:[
          {en:'She posted a photo and got 200 likes.', pt:'Ela publicou uma foto e recebeu 200 gostos.'},
          {en:'Can you send me the file on WhatsApp?', pt:'Podes enviar-me o ficheiro no WhatsApp?'},
          {en:'I follow 500 people on Instagram.', pt:'Eu sigo 500 pessoas no Instagram.'},
        ],
        practice:[
          {q:'\"Like\" on a social media post means:', opts:['to dislike a post','to show you approve of something','to delete the post','to share the post'], ans:1, exp:'Like = curtir/gostar. Show approval with a tap or click.'},
          {q:'\"Follow\" someone on social media means:', opts:['to copy their posts','to subscribe to see their content','to block them','to send them money'], ans:1, exp:'Follow = seguir. Their posts appear in your feed.'},
        ],
      }, qs:[
        {q:'\"She ___ a selfie and posted it online.\"',opts:['wrote','took','made','drew'],ans:1,exp:'\"Took a selfie\" — we always TAKE a photo/selfie.'},
        {q:'\"Go viral\" means:',opts:['get a virus on your phone','become very popular and shared widely','delete your account','lose all your followers'],ans:1,exp:'Go viral = tornar-se viral. Shared by millions — very popular very fast!'},
        {q:'What does \"unfollow\" mean?',opts:['Start following someone new','Stop seeing someone\'s posts in your feed','Report someone','Block someone permanently'],ans:1,exp:'Unfollow = deixar de seguir. Their posts will no longer appear in your feed.'},
        {q:'\"DM\" stands for:',opts:['Daily Message','Direct Message','Digital Media','Data Megabytes'],ans:1,exp:'DM = Direct Message. A private message to someone, not public.'},
        {q:'\"I saw your ___ — it was so funny!\"',opts:['signal','battery','story','charger'],ans:2,exp:'Story = a short post visible for 24 hours. Common on WhatsApp, Instagram.'},
      ]},

      {id:'l1i3', title:'Using a Computer', titlePt:'Usar um Computador', icon:'💻', xp:20, learn:{
        explanation:{
          en:'Computer vocabulary: keyboard (teclado), mouse (rato), screen/monitor (ecrã/monitor), file (ficheiro), folder (pasta), save (guardar), copy (copiar), paste (colar), print (imprimir), delete (eliminar), password (senha). Common actions: "open a file", "save a document", "print a page".',
          pt:'Vocabulário de computador: keyboard (teclado), mouse (rato), screen/monitor (ecrã/monitor), file (ficheiro), folder (pasta), save (guardar), copy (copiar), paste (colar), print (imprimir), delete (eliminar), password (senha). Acções comuns: "open a file" (abrir um ficheiro), "save a document" (guardar um documento), "print a page" (imprimir uma página).'
        },
        examples:[
          {en:'Save the document before you close it.', pt:'Guarda o documento antes de o fechar.'},
          {en:'I need to print this form for the bank.', pt:'Preciso de imprimir este formulário para o banco.'},
          {en:'Copy the text and paste it into the email.', pt:'Copia o texto e cola-o no e-mail.'},
        ],
        practice:[
          {q:'\"Save\" a document means:', opts:['Print it','Delete it','Store it so you don\'t lose your work','Share it online'], ans:2, exp:'Save = guardar. Never lose your work!'},
          {q:'\"Keyboard\" is:', opts:['the screen','the device you type on','the mouse','the printer'], ans:1, exp:'keyboard = teclado. You type letters and numbers on it.'},
        ],
      }, qs:[
        {q:'\"Delete\" a file means:',opts:['Copy it','Open it','Remove/erase it','Rename it'],ans:2,exp:'Delete = eliminar/apagar. Permanently remove a file.'},
        {q:'Which word means \"pasta\" (in a computer)?',opts:['file','folder','screen','keyboard'],ans:1,exp:'folder = pasta. A folder contains files and keeps them organised.'},
        {q:'\"I forgot my ___ and cannot log in.\"',opts:['keyboard','password','folder','file'],ans:1,exp:'password = senha. You need it to access your account.'},
        {q:'\"Copy and paste\" is used to:',opts:['print a document','duplicate and move text or files','delete files','turn off the computer'],ans:1,exp:'Copy (Ctrl+C) + Paste (Ctrl+V) = duplicate text or files quickly!'},
        {q:'\"Print\" a document means:',opts:['Save it online','Make a paper copy of it','Send it by email','Delete it'],ans:1,exp:'Print = imprimir. Creating a physical paper version of a digital document.'},
      ]},

      {id:'l1i4', title:'Online Safety', titlePt:'Segurança Online', icon:'🔒', xp:25, learn:{
        explanation:{
          en:'Online safety vocabulary: scam (burla), virus (vírus), spam (lixo electrónico), hack (pirataria), phishing (phishing — trying to steal your data), privacy (privacidade), report (denunciar), block (bloquear). Never share personal details — phone number, address, PIN — with strangers online.',
          pt:'Vocabulário de segurança online: scam (burla), virus (vírus), spam (lixo electrónico), hack (pirataria), phishing (phishing — tentar roubar os teus dados), privacy (privacidade), report (denunciar), block (bloquear). Nunca partilhes dados pessoais — número de telemóvel, morada, PIN — com desconhecidos online.'
        },
        examples:[
          {en:'That email looks like a scam — don\'t click the link!', pt:'Esse e-mail parece uma burla — não cliques no link!'},
          {en:'Block and report anyone who harasses you online.', pt:'Bloqueia e denuncia qualquer pessoa que te assedia online.'},
          {en:'Never share your password with anyone.', pt:'Nunca partilhes a tua senha com ninguém.'},
        ],
        practice:[
          {q:'\"Spam\" is:', opts:['a type of virus','unwanted junk email or messages','a social media app','a type of password'], ans:1, exp:'Spam = lixo electrónico. Unwanted/unsolicited messages.'},
          {q:'\"Block\" someone online means:', opts:['send them a message','stop them from contacting you','report them to police','share their profile'], ans:1, exp:'Block = bloquear. They can no longer contact you.'},
        ],
      }, qs:[
        {q:'\"Phishing\" is:',opts:['a type of social media','a way to strengthen your password','an attempt to steal personal data by pretending to be trustworthy','a free app for learning'],ans:2,exp:'Phishing = phishing. Criminals pretend to be a bank or company to steal your info.'},
        {q:'\"Your account has been hacked\" means:',opts:['you forgot your password','someone else illegally accessed your account','your account was deleted','you created a new account'],ans:1,exp:'Hacked = pirateado. Someone broke into your account illegally.'},
        {q:'Which personal information should you NEVER share online with strangers?',opts:['Your country','Your language','Your PIN and bank details','Your favourite colour'],ans:2,exp:'NEVER share PIN, passwords, bank details, address, or phone number with strangers online.'},
        {q:'What should you do if someone sends you suspicious messages?',opts:['Reply immediately','Click all the links','Block and report them','Share their messages with friends'],ans:2,exp:'Block and report! This protects you and helps the platform remove dangerous accounts.'},
        {q:'A \"strong\" password should be:',opts:['your birthday','your name','a short common word','long with letters, numbers and symbols'],ans:3,exp:'Strong password = long, mixed (letters + numbers + symbols). Hard to guess!'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT13);
