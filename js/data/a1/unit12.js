// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a1/unit12.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1h
// Part of UNITS_A1 — Health & the Doctor

const UNITS_A1_UNIT12 = [
  {
    id:'u1h', cefr:'A1', title:'Health & the Doctor', titlePt:'Saúde e o Médico',
    desc:'Talk about health and get help when you need it 🏥',
    descPt:'Fala sobre saúde e pede ajuda quando precisas 🏥',
    color:'#e91e63', icon:'🏥', premium:false,
    lessons:[

      {id:'l1h1', title:'Illnesses & Symptoms', titlePt:'Doenças e Sintomas', icon:'🤒', xp:20, learn:{
        explanation:{
          en:'To describe how you feel when you are sick, say "I have a + illness": "I have a headache", "I have a cold". For symptoms use "I feel + adjective": "I feel dizzy". Key words: fever, cough, pain, tired, nausea.',
          pt:'Para descrever como te sentes quando estás doente, diz "I have a + doença": "I have a headache" (dói-me a cabeça), "I have a cold" (tenho uma constipação). Para sintomas usa "I feel + adjectivo": "I feel dizzy" (sinto-me tonto). Palavras-chave: fever (febre), cough (tosse), pain (dor), tired (cansado), nausea (náusea).'
        },
        examples:[
          {en:'I have a headache and a fever.', pt:'Dói-me a cabeça e tenho febre.'},
          {en:'She feels very tired and dizzy.', pt:'Ela sente-se muito cansada e tonta.'},
          {en:'He has a bad cough and a sore throat.', pt:'Ele tem uma tosse má e dores de garganta.'},
        ],
        practice:[
          {q:'To describe pain, say:', opts:['I am a headache','I have a headache','I do a headache','I feel a headache'], ans:1, exp:'\"I have a + illness\" — I have a headache / cold / fever.'},
          {q:'\"Fever\" in Portuguese is:', opts:['tosse','dor','febre','cansaço'], ans:2, exp:'fever = febre. A fever = temperatura alta.'},
        ],
      }, qs:[
        {q:'\"I ___ a sore throat and a cough.\"',opts:['feel','am','have','do'],ans:2,exp:'\"I HAVE a sore throat.\" — For illnesses use HAVE + a + illness.'},
        {q:'\"Dizzy\" means:',opts:['Sad','Hungry','Feeling like everything spins','Very tired'],ans:2,exp:'Dizzy = tonto. You feel dizzy when you might faint.'},
        {q:'Which word means \"febre\" in English?',opts:['cough','pain','fever','cold'],ans:2,exp:'fever = febre. \"I have a high fever\" = Tenho febre alta.'},
        {q:'\"I feel ___ today. I cannot get out of bed.\"',opts:['hungry','terrible','happy','sleepy'],ans:1,exp:'\"I feel terrible\" = Sinto-me muito mal. Perfect for being very sick.'},
        {q:'What does \"sore throat\" mean?',opts:['Dor de cabeça','Dor de barriga','Dor de garganta','Dor de dentes'],ans:2,exp:'sore throat = dor de garganta. \"My throat hurts when I swallow.\"'},
      ]},

      {id:'l1h2', title:'At the Doctor', titlePt:'No Médico', icon:'👨‍⚕️', xp:25, learn:{
        explanation:{
          en:'At a clinic or hospital, the doctor will ask: "What is the problem?", "Where does it hurt?", "How long have you had this?" You answer with: "I have had this for 3 days.", "It hurts here.", "I also have a temperature." Learning these phrases helps you get proper treatment.',
          pt:'Numa clínica ou hospital, o médico vai perguntar: "What is the problem?", "Where does it hurt?", "How long have you had this?" Respondes com: "I have had this for 3 days.", "It hurts here.", "I also have a temperature." Aprender estas frases ajuda-te a receber o tratamento certo.'
        },
        examples:[
          {en:'Doctor: What seems to be the problem?', pt:'Médico: Qual parece ser o problema?'},
          {en:'Patient: I have had a fever for two days.', pt:'Doente: Tenho febre há dois dias.'},
          {en:'Doctor: I will prescribe some medicine.', pt:'Médico: Vou receitar alguma medicação.'},
        ],
        practice:[
          {q:'The doctor asks \"Where does it hurt?\" You answer:', opts:['It hurts here, in my stomach.','I am fine, thank you.','Yes, I do.','My name is Pedro.'], ans:0, exp:'Point and say where: \"It hurts here, in my stomach.\"'},
          {q:'\"Prescribe\" means:', opts:['to diagnose','to write a medicine order','to operate','to pay the bill'], ans:1, exp:'To prescribe = to write a prescription for medicine.'},
        ],
      }, qs:[
        {q:'How do you tell the doctor you have had a cough for 3 days?',opts:['I cough 3 days.','I have had a cough for 3 days.','I had a cough 3 days.','I am coughing since 3 days.'],ans:1,exp:'\"I have had this for X days/weeks\" = Present Perfect for duration up to now.'},
        {q:'\"Where does it hurt?\" is asking about:',opts:['your name','your age','the location of your pain','your temperature'],ans:2,exp:'\"Where does it hurt?\" = Onde dói? The doctor wants to know the location.'},
        {q:'\"The doctor will prescribe medicine\" means the doctor will:',opts:['perform surgery','write a medicine order','take an X-ray','admit you to hospital'],ans:1,exp:'Prescribe = receitar. The doctor writes what medicines you need.'},
        {q:'\"I have had a fever ___ two days.\"',opts:['since','for','ago','during'],ans:1,exp:'\"For\" + duration: I have had this FOR two days. \"Since\" + specific time: since Monday.'},
        {q:'What do you say when you arrive at the clinic?',opts:['I want to see the manager.','Good morning, I need to see a doctor.','I am looking for the pharmacy.','Can I have the menu, please?'],ans:1,exp:'\"Good morning, I need to see a doctor.\" = Bom dia, preciso de ver um médico.'},
      ]},

      {id:'l1h3', title:'Medicine & Treatment', titlePt:'Medicamentos e Tratamento', icon:'💊', xp:20, learn:{
        explanation:{
          en:'Key medical vocabulary: tablet / pill (comprimido), syrup (xarope), injection (injecção), ointment (pomada), dose (dose), prescription (receita). To say when to take medicine: "Take two tablets three times a day", "Take it with food", "Take it before bed".',
          pt:'Vocabulário médico essencial: tablet/pill (comprimido), syrup (xarope), injection (injecção), ointment (pomada), dose (dose), prescription (receita). Para dizer quando tomar medicamentos: "Take two tablets three times a day", "Take it with food", "Take it before bed".'
        },
        examples:[
          {en:'Take one tablet twice a day after meals.', pt:'Toma um comprimido duas vezes por dia depois das refeições.'},
          {en:'Apply the ointment to the affected area.', pt:'Aplica a pomada na área afectada.'},
          {en:'You need an injection of antibiotics.', pt:'Precisas de uma injecção de antibióticos.'},
        ],
        practice:[
          {q:'\"Tablet\" means:', opts:['xarope','pomada','comprimido','receita'], ans:2, exp:'tablet / pill = comprimido.'},
          {q:'\"Three times a day\" means:', opts:['every 3 days','3 times in 24 hours','at 3pm','once every 3 hours'], ans:1, exp:'Three times a day = de manhã, à tarde e à noite.'},
        ],
      }, qs:[
        {q:'\"Take two tablets ___ a day\" (3 times)',opts:['once','twice','three times','four times'],ans:2,exp:'Three times a day = take it in the morning, afternoon, and evening.'},
        {q:'What is a \"prescription\"?',opts:['A type of medicine','A medical certificate','A doctor\'s written order for medicine','A bill from the hospital'],ans:2,exp:'Prescription = receita médica. The paper the doctor gives you to get medicine at the pharmacy.'},
        {q:'\"Apply the ointment\" means:',opts:['Swallow the cream','Put the cream on the skin','Inject the medicine','Mix with water'],ans:1,exp:'Apply = aplicar. Ointment = pomada. You apply it to the skin.'},
        {q:'\"Take it with food\" means:',opts:['Mix the medicine with food','Take the medicine during or after a meal','Only take it before eating','Eat the medicine'],ans:1,exp:'\"Take with food\" = toma com a refeição. This protects the stomach.'},
        {q:'Which word means \"xarope\"?',opts:['tablet','injection','ointment','syrup'],ans:3,exp:'syrup = xarope. Liquid medicine you drink, often for coughs.'},
      ]},

      {id:'l1h4', title:'Healthy Habits', titlePt:'Hábitos Saudáveis', icon:'💪', xp:20, learn:{
        explanation:{
          en:'Talking about health and habits uses the Simple Present: "I exercise three times a week", "She drinks 8 glasses of water a day". Advice uses "should/shouldn\'t": "You should sleep 8 hours", "You shouldn\'t eat too much sugar".',
          pt:'Falar sobre saúde e hábitos usa o Presente Simples: "I exercise three times a week", "She drinks 8 glasses of water a day". Conselhos usam "should/shouldn\'t": "You should sleep 8 hours" (deves dormir 8 horas), "You shouldn\'t eat too much sugar" (não deves comer demasiado açúcar).'
        },
        examples:[
          {en:'You should drink at least 2 litres of water a day.', pt:'Deves beber pelo menos 2 litros de água por dia.'},
          {en:'I try to exercise for 30 minutes every day.', pt:'Tento fazer exercício durante 30 minutos todos os dias.'},
          {en:'You shouldn\'t smoke — it\'s very bad for your lungs.', pt:'Não deves fumar — é muito mau para os teus pulmões.'},
        ],
        practice:[
          {q:'Which is good advice for health?', opts:['You should eat fast food every day.','You should exercise regularly.','You shouldn\'t drink water.','You should sleep 3 hours.'], ans:1, exp:'Regular exercise = good health habit.'},
          {q:'\"Lungs\" are used for:', opts:['digesting food','pumping blood','breathing air','thinking'], ans:2, exp:'Lungs (pulmões) = the organs for breathing.'},
        ],
      }, qs:[
        {q:'\"You ___ exercise more. It\'s good for you.\"',opts:['shouldn\'t','mustn\'t','should','can\'t'],ans:2,exp:'SHOULD = positive advice. \"You should exercise\" = É recomendável que faças exercício.'},
        {q:'Which of these is a HEALTHY habit?',opts:['Sleeping 3 hours a night','Eating vegetables every day','Drinking too much soda','Skipping breakfast every day'],ans:1,exp:'Eating vegetables daily is a healthy habit! 🥦'},
        {q:'\"You shouldn\'t eat too much salt\" gives:',opts:['a command','advice against something','permission','a fact'],ans:1,exp:'Shouldn\'t = advice NOT to do something. \'You shouldn\'t\' = não deves.'},
        {q:'Complete: \"She ___ 8 glasses of water every day.\"',opts:['drink','drank','drinks','drinking'],ans:2,exp:'She + drinks (3rd person singular, Simple Present for habits).'},
        {q:'\"Balanced diet\" means:',opts:['Only eating fruit','Eating all types of food in correct amounts','Eating only protein','Skipping dinner'],ans:1,exp:'A balanced diet = dieta equilibrada — all food groups in the right amounts.'},
      ]},

      {id:'l1h5', title:'Emergency Phrases', titlePt:'Frases de Emergência', icon:'🚨', xp:25, learn:{
        explanation:{
          en:'In an emergency, you need to be clear and quick. Key phrases: "Call an ambulance!", "I need help!", "It\'s an emergency!", "Someone has fainted!", "There has been an accident!". Always state what happened and where you are.',
          pt:'Numa emergência, precisas de ser claro e rápido. Frases-chave: "Call an ambulance!" (Chama uma ambulância!), "I need help!" (Preciso de ajuda!), "It\'s an emergency!" (É uma emergência!), "Someone has fainted!" (Alguém desmaiou!), "There has been an accident!" (Houve um acidente!).'
        },
        examples:[
          {en:'Call an ambulance! My father has collapsed.', pt:'Chama uma ambulância! O meu pai caiu.'},
          {en:'Help! There has been an accident on the road.', pt:'Ajuda! Houve um acidente na estrada.'},
          {en:'I need a doctor immediately — she is unconscious.', pt:'Preciso de um médico imediatamente — ela está inconsciente.'},
        ],
        practice:[
          {q:'In an emergency you should first:', opts:['Check your phone','Call for help','Take a photo','Run away'], ans:1, exp:'Always call for help first — police, ambulance, etc.'},
          {q:'\"Fainted\" means:', opts:['ran away','fell asleep','lost consciousness briefly','broke a bone'], ans:2, exp:'Fainted = desmaiou — temporarily lost consciousness.'},
        ],
      }, qs:[
        {q:'\"Call an ambulance!\" is used when:',opts:['you are lost','someone is seriously injured or ill','you cannot find a taxi','the shop is closed'],ans:1,exp:'\"Call an ambulance!\" = Chama uma ambulância! For medical emergencies.'},
        {q:'\"Someone has fainted\" means:',opts:['someone fell asleep on purpose','someone lost consciousness briefly','someone is running away','someone is laughing'],ans:1,exp:'Fainted = desmaiou. Lost consciousness, usually briefly.'},
        {q:'What should you tell emergency services first?',opts:['Your school name','What happened and where you are','What you had for lunch','Your passport number'],ans:1,exp:'Always say WHAT happened and WHERE you are so help can find you.'},
        {q:'\"Unconscious\" means:',opts:['very angry','sleeping normally','not able to respond or wake up','very hungry'],ans:2,exp:'Unconscious = sem consciência. Not awake, not responding — serious!'},
        {q:'\"There has been an accident!\" uses which tense?',opts:['Simple Present','Simple Past','Present Perfect','Future'],ans:2,exp:'\"Has been\" = Present Perfect. Recent event with present relevance — perfect for emergencies.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT12);
