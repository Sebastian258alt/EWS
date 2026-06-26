// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit9.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1e — Daily Life & Health
// Part of UNITS_A1

const UNITS_A1_UNIT9 = [
  {
    id:'u1e', cefr:'A1', title:'Daily Life & Health', titlePt:'Vida Quotidiana e Saúde',
    desc:'Talk about your day, your body and how you feel! 🌅',
    descPt:'Fala sobre o teu dia, o teu corpo e como te sentes! 🌅',
    color:'#00796b', icon:'🌅', premium:false,
    lessons:[

      {id:'l1e1', title:'Morning & Evening Routines', titlePt:'Rotinas Matinais e Nocturnas', icon:'⏰', xp:20, learn:{
        explanation:{
          en:'A routine is something you do regularly, usually at the same time every day. We use the Simple Present tense to describe routines. Signal words: every day, in the morning, at night, usually, always, first, then, after that, finally. "First I wake up, then I brush my teeth, after that I have breakfast, and finally I go to school."',
          pt:'Uma rotina é algo que fazes regularmente, normalmente à mesma hora todos os dias. Usamos o Presente Simples para descrever rotinas. Palavras-sinal: every day, in the morning, at night, usually, always, first, then, after that, finally. "First I wake up, then I brush my teeth, after that I have breakfast, and finally I go to school."'
        },
        examples:[
          {en:'I wake up at 6am every day.', pt:'Acordo às 6h todos os dias.'},
          {en:'First, I brush my teeth. Then, I take a shower.', pt:'Primeiro, escovo os dentes. Depois, tomo duche.'},
          {en:'After that, I have breakfast.', pt:'A seguir, tomo o pequeno-almoço.'},
          {en:'I go to bed at 10pm.', pt:'Vou para a cama às 22h.'},
          {en:'She usually reads before sleeping.', pt:'Ela normalmente lê antes de dormir.'},
        ],
        practice:[
          {q:'Which signal word shows sequence (what comes next)?', opts:['yesterday','usually','then','always'], ans:2, exp:'"Then" shows sequence — first I do A, THEN I do B!'},
          {q:'"I wake up at 6am every day." Which tense?', opts:['Past Simple','Future','Present Continuous','Simple Present'], ans:3, exp:'Simple Present! "Wake up" — routine/habit!'},
        ],
      }, qs:[
        {q:'"First I brush my teeth, ___ I have breakfast."',opts:['before','although','then','after'],ans:2,exp:'"THEN I have breakfast." — then shows what comes next in a sequence!'},
        {q:'"I ___ up at 6am every day." (wake)',opts:['wake','wakes','waking','woke'],ans:0,exp:'"I WAKE up." — Simple Present, first person, no -s!'},
        {q:'"She ___ to bed at 10pm." (go)',opts:['go','going','goes','went'],ans:2,exp:'"She GOES to bed." — third person singular adds -s!'},
        {q:'Which word describes a daily routine?',opts:['yesterday','last week','every day','right now'],ans:2,exp:'"Every day" signals a routine/habit — use Simple Present!'},
        {q:'"After that, I ___ to school." (go)',opts:['am going','goes','went','go'],ans:3,exp:'"After that, I GO to school." — Simple Present for routines!'},
        {q:'"I wake up, ___ I brush my teeth, ___ I shower."',opts:['then/then','first/then','after/before','always/usually'],ans:1,exp:'"First I wake up, THEN I brush my teeth, THEN I shower." Sequence!'},
        {q:'What time do most Mozambican students wake up for school?',opts:['At midnight','At 2pm','Early morning around 5-6am','At 10am'],ans:2,exp:'Most students wake up early — around 5-6am — to get ready for school! 🌅'},
      ]},

      {id:'l1e2', title:'Describing Your Day', titlePt:'Descrever o Teu Dia', icon:'📅', xp:20, learn:{
        explanation:{
          en:'To describe your day, use time expressions: in the morning (de manhã), in the afternoon (de tarde), in the evening (à tarde/noite), at night (à noite), at noon (ao meio-dia). Use "at" with clock times: "at 7am". Use "in" with parts of the day. Use "on" with days: "on Monday". To connect events: first, then, next, after that, later, finally.',
          pt:'Para descrever o teu dia, usa expressões de tempo: in the morning (de manhã), in the afternoon (de tarde), in the evening (à tarde/noite), at night (à noite), at noon (ao meio-dia). Usa "at" com horas: "at 7am". Usa "in" com partes do dia. Usa "on" com dias: "on Monday". Para ligar eventos: first, then, next, after that, later, finally.'
        },
        examples:[
          {en:'In the morning, I go to school.', pt:'De manhã, eu vou para a escola.'},
          {en:'At noon, I eat lunch with my friends.', pt:'Ao meio-dia, almoço com os meus amigos.'},
          {en:'In the afternoon, I study or play football.', pt:'À tarde, estudo ou jogo futebol.'},
          {en:'In the evening, my family watches TV.', pt:'À noite cedo, a minha família vê televisão.'},
          {en:'At night, I read and go to sleep.', pt:'À noite, leio e vou dormir.'},
        ],
        practice:[
          {q:'"___ Monday I have English class."', opts:['In','At','On','By'], ans:2, exp:'"ON Monday" — use ON with specific days of the week!'},
          {q:'"I eat lunch ___ noon."', opts:['on','in','by','at'], ans:3, exp:'"AT noon" — use AT with clock times and "noon"!'},
        ],
      }, qs:[
        {q:'"___ the morning, I exercise."',opts:['At','On','In','By'],ans:2,exp:'"IN the morning" — parts of the day use IN!'],
        {q:'"My class starts ___ 8am."',opts:['in','on','at','by'],ans:2,exp:'"AT 8am" — clock times use AT!'},
        {q:'"___ Saturdays, I go to the market."',opts:['At','In','On','By'],ans:2,exp:'"ON Saturdays" — days of the week use ON!'},
        {q:'What do you do "at noon"?',opts:['sleep','eat breakfast','eat lunch','go to work'],ans:2,exp:'Noon = midday = 12pm. Most people eat LUNCH at noon! 🍽️'},
        {q:'"In the evening" usually means:',opts:['very early morning','around midday','late afternoon/early night','midnight'],ans:2,exp:'"In the evening" = late afternoon/early night, roughly 6-9pm!'},
        {q:'"I study ___ the afternoon." (part of day)',opts:['at','on','in','by'],ans:2,exp:'"IN the afternoon" — parts of the day use IN!'},
        {q:'Which sequence is CORRECT for a typical day?',opts:['Lunch → Breakfast → School → Dinner','Breakfast → School → Lunch → Dinner','Dinner → Lunch → Breakfast → School','School → Breakfast → Dinner → Lunch'],ans:1,exp:'Typical day: Breakfast → School → Lunch → Dinner. Morning first!'},
      ]},

      {id:'l1e3', title:'At the Doctor — Health Vocabulary', titlePt:'No Médico — Vocabulário de Saúde', icon:'🏥', xp:25, learn:{
        explanation:{
          en:'Health vocabulary helps you describe how you feel and communicate with a doctor or nurse. Common symptoms: headache (dor de cabeça), stomachache (dor de estômago), fever (febre), cough (tosse), sore throat (dor de garganta), cold (constipação). To say you have a symptom: "I have a headache." "I feel sick/dizzy/tired." "My stomach hurts." "I have a temperature."',
          pt:'O vocabulário de saúde ajuda-te a descrever como te sentes e a comunicar com um médico ou enfermeiro. Sintomas comuns: headache (dor de cabeça), stomachache (dor de estômago), fever (febre), cough (tosse), sore throat (dor de garganta), cold (constipação). Para dizer que tens um sintoma: "I have a headache." "I feel sick/dizzy/tired." "My stomach hurts." "I have a temperature."'
        },
        examples:[
          {en:'I have a terrible headache.', pt:'Eu tenho uma dor de cabeça terrível.'},
          {en:'Doctor, I feel sick and I have a fever.', pt:'Doutor, sinto-me mal e tenho febre.'},
          {en:'My throat is very sore.', pt:'A minha garganta dói muito.'},
          {en:'How long have you had this cough?', pt:'Há quanto tempo tens esta tosse?'},
          {en:'Take this medicine three times a day.', pt:'Tome este medicamento três vezes por dia.'},
        ],
        practice:[
          {q:'How do you say you have a headache?', opts:['My head hurts.','I am sick in my head.','I have a headache.','Both A and C.'], ans:3, exp:'Both "My head hurts" and "I have a headache" are correct!'},
          {q:'"Fever" means:', opts:['dor de cabeça','tosse','temperatura alta','dor de garganta'], ans:2, exp:'Fever = temperatura alta (febre). Your body temperature is above normal!'},
        ],
      }, qs:[
        {q:'How do you say you feel sick?',opts:['I am sick.','I feel sick.','I have sickness.','Both A and B.'],ans:3,exp:'Both "I AM sick" and "I FEEL sick" are correct ways to say this!'},
        {q:'"Sore throat" means:',opts:['dor de cabeça','dor de estômago','dor de garganta','tosse'],ans:2,exp:'"Sore throat" = dor de garganta. When your throat is painful!'},
        {q:'"I have a ___.": Which completes a symptom?',opts:['hungry','headache','thirsty','tired'],ans:1,exp:'"I have a HEADACHE." — headache is a noun/symptom. Hungry/thirsty/tired use "I am/feel".'},
        {q:'"Doctor, my stomach ___."',opts:['hurts','hurt','is hurting a lot','Both A and C'],ans:3,exp:'"My stomach HURTS" and "my stomach IS HURTING" are both correct!'},
        {q:'What do you take when you are sick?',opts:['exercise','medicine','food','coffee'],ans:1,exp:'You take MEDICINE (medicamento) when you are sick!'},
        {q:'"Take this medicine three times a day." means you take it:',opts:['once','twice','three times','every hour'],ans:2,exp:'"Three times a day" = três vezes por dia — morning, afternoon, night!'],
        {q:'"I have a fever." Fever means your body:',opts:['is cold','is very hot','is normal','is shaking'],ans:1,exp:'Fever = your body temperature is very HOT, above normal (above 37.5°C)!'},
      ]},

      {id:'l1e4', title:'Feelings & Emotions', titlePt:'Sentimentos e Emoções', icon:'😊', xp:20, learn:{
        explanation:{
          en:'Describing how you feel is essential for communication. Use "I feel..." or "I am..." with adjectives. Common emotions: happy (feliz), sad (triste), angry (zangado/a), scared/afraid (com medo), tired (cansado/a), excited (entusiasmado/a), bored (aborrecido/a), nervous (nervoso/a), surprised (surpreendido/a), proud (orgulhoso/a). To ask: "How do you feel?" "Are you okay?"',
          pt:'Descrever como te sentes é essencial para a comunicação. Usa "I feel..." ou "I am..." com adjectivos. Emoções comuns: happy (feliz), sad (triste), angry (zangado/a), scared/afraid (com medo), tired (cansado/a), excited (entusiasmado/a), bored (aborrecido/a), nervous (nervoso/a), surprised (surpreendido/a), proud (orgulhoso/a). Para perguntar: "How do you feel?" "Are you okay?"'
        },
        examples:[
          {en:'I feel very happy today!', pt:'Sinto-me muito feliz hoje!'},
          {en:'She looks sad. What happened?', pt:'Ela parece triste. O que aconteceu?'},
          {en:'I am nervous about the exam tomorrow.', pt:'Estou nervoso/a com o exame de amanhã.'},
          {en:'Are you okay? You look tired.', pt:'Estás bem? Pareces cansado/a.'},
          {en:'He was so excited before the football match.', pt:'Ele estava muito entusiasmado antes do jogo de futebol.'},
        ],
        practice:[
          {q:'"Feliz" in English is:', opts:['angry','tired','happy','sad'], ans:2, exp:'Feliz = HAPPY! "I feel happy today." 😊'},
          {q:'If you have an important exam, you might feel:', opts:['bored','happy','nervous','proud'], ans:2, exp:'Most people feel NERVOUS before an important exam!'},
        ],
      }, qs:[
        {q:'"Triste" in English is:',opts:['happy','angry','tired','sad'],ans:3,exp:'Triste = SAD. "I feel sad today." 😢'},
        {q:'"I am ___ about the exam." (feeling nervous)',opts:['scared','nervous','excited','tired'],ans:1,exp:'"I am NERVOUS about the exam." = Estou nervoso/a com o exame!'},
        {q:'"How do you ___?" (asking about feelings)',opts:['do','look','feel','are'],ans:2,exp:'"How do you FEEL?" = Como te sentes? The standard question!'},
        {q:'"She is ___ because she won the prize!" (very happy)',opts:['bored','sad','tired','excited'],ans:3,exp:'"She is EXCITED!" — very happy and enthusiastic about something great! 🎉'},
        {q:'"Are you okay? You ___ tired."',opts:['feel','look','am','have'],ans:1,exp:'"You LOOK tired." — look = to appear/seem. She appears tired visually!'},
        {q:'"Zangado" in English is:',opts:['tired','bored','happy','angry'],ans:3,exp:'Zangado = ANGRY. "He is angry because he missed the bus."'},
        {q:'Which sentence is CORRECT?',opts:['I am feeling happy.','I feeling happy.','I feels happy.','I happy feeling.'],ans:0,exp:'"I AM FEELING happy." = I feel happy. Both "I am happy" and "I am feeling happy" are correct!'},
      ]},

      {id:'l1e5', title:'At the Pharmacy', titlePt:'Na Farmácia', icon:'💊', xp:20, learn:{
        explanation:{
          en:'At a pharmacy (farmácia) in Mozambique or anywhere, you need to describe your symptoms and understand the pharmacist\'s advice. Key phrases: "I need something for..." (Preciso de algo para...). "Do you have anything for a headache?" Types of medicine: tablets/pills (comprimidos), syrup (xarope), cream (creme), drops (gotas). Instruction words: take (tomar), apply (aplicar), twice a day (duas vezes por dia).',
          pt:'Numa farmácia em Moçambique ou em qualquer lugar, precisas de descrever os teus sintomas e entender o conselho do farmacêutico. Frases-chave: "I need something for..." (Preciso de algo para...). "Do you have anything for a headache?" Tipos de medicamento: tablets/pills (comprimidos), syrup (xarope), cream (creme), drops (gotas). Palavras de instrução: take (tomar), apply (aplicar), twice a day (duas vezes por dia).'
        },
        examples:[
          {en:'I need something for a headache.', pt:'Preciso de algo para uma dor de cabeça.'},
          {en:'Do you have any cough syrup?', pt:'Tem algum xarope para a tosse?'},
          {en:'Take two tablets three times a day.', pt:'Tome dois comprimidos três vezes por dia.'},
          {en:'Apply this cream to the wound twice a day.', pt:'Aplique esta creme na ferida duas vezes por dia.'},
          {en:'Is this medicine available without a prescription?', pt:'Este medicamento está disponível sem receita?'},
        ],
        practice:[
          {q:'How do you ask for medicine at a pharmacy?', opts:['Give me medicine.','I need something for a headache.','Medicine please.','Buy me pills.'], ans:1, exp:'"I need something for a headache." — polite and clear!'},
          {q:'"Twice a day" means:', opts:['one time','two times','three times','every hour'], ans:1, exp:'"Twice a day" = two times per day — morning and night!'},
        ],
      }, qs:[
        {q:'"I need something ___ a cough."',opts:['about','with','for','from'],ans:2,exp:'"I need something FOR a cough." — "for" shows the purpose!'},
        {q:'"Twice a day" means taking medicine:',opts:['once','two times','three times','four times'],ans:1,exp:'"Twice a day" = TWO times a day! Twice = 2x.'},
        {q:'"Comprimidos" in English are:',opts:['syrup','tablets/pills','cream','drops'],ans:1,exp:'"Comprimidos" = tablets or pills — solid medicine you swallow!'},
        {q:'"Take three ___ per day." (solid medicine)',opts:['syrups','creams','drops','tablets'],ans:3,exp:'"Take three TABLETS per day." = Tome três comprimidos por dia!'},
        {q:'"Apply this cream to your skin." means:',opts:['eat the cream','put the cream on your skin','take the cream orally','drink the cream'],ans:1,exp:'"Apply" = put on/spread on. You apply cream TO the skin, don\'t eat it! 😄'},
        {q:'Where do you buy medicine without going to a hospital?',opts:['supermarket','pharmacy','school','market'],ans:1,exp:'You buy medicine at a PHARMACY (farmácia)!'},
        {q:'"Do you have ___ aspirin?" (asking if they sell it)',opts:['some','the','a','any'],ans:3,exp:'"Do you have ANY aspirin?" — questions about availability use "any"!'},
      ]},

      {id:'l1e6', title:'Healthy Habits & Advice', titlePt:'Hábitos Saudáveis e Conselhos', icon:'🥗', xp:25, learn:{
        explanation:{
          en:'Healthy habits help you live better. To give health advice, use should/shouldn\'t. "You should eat vegetables every day." "You shouldn\'t drink too much soda." Healthy activities: exercise regularly, sleep 8 hours, drink water, eat fruits and vegetables. Unhealthy habits: smoking, drinking too much alcohol, eating too much junk food, not sleeping enough. Use "too much" (demais) for negative excess.',
          pt:'Os hábitos saudáveis ajudam-te a viver melhor. Para dar conselhos de saúde, usa should/shouldn\'t. "You should eat vegetables every day." "You shouldn\'t drink too much soda." Actividades saudáveis: exercise regularly, sleep 8 hours, drink water, eat fruits and vegetables. Hábitos não saudáveis: smoking, drinking too much alcohol, eating too much junk food, not sleeping enough. Usa "too much" (demais) para excesso negativo.'
        },
        examples:[
          {en:'You should drink at least 2 litres of water a day.', pt:'Deves beber pelo menos 2 litros de água por dia.'},
          {en:'You shouldn\'t eat too much sugar.', pt:'Não deves comer demasiado açúcar.'},
          {en:'Exercise is important for a healthy body.', pt:'O exercício é importante para um corpo saudável.'},
          {en:'Try to sleep for 8 hours every night.', pt:'Tenta dormir 8 horas todas as noites.'},
          {en:'Eating fresh fruit and vegetables keeps you healthy.', pt:'Comer fruta e legumes frescos mantém-te saudável.'},
        ],
        practice:[
          {q:'"You ___ eat more vegetables." (advice)', opts:['must','should','mustn\'t','might'], ans:1, exp:'"You SHOULD eat more vegetables." — advice with should!'},
          {q:'"You ___ smoke — it\'s very bad for you." (strong advice against)', opts:['should','might','shouldn\'t','could'], ans:2, exp:'"You SHOULDN\'T smoke." — advice against something harmful!'},
        ],
      }, qs:[
        {q:'"You ___ exercise regularly." (it\'s a good idea)',opts:['must','should','mustn\'t','might'],ans:1,exp:'"You SHOULD exercise regularly." — giving health advice!'},
        {q:'"You ___ eat too much junk food." (bad advice)',opts:['should','might','shouldn\'t','could'],ans:2,exp:'"You SHOULDN\'T eat too much junk food." — advice against unhealthy habit!'],
        {q:'How many hours of sleep do doctors recommend per night?',opts:['4 hours','6 hours','8 hours','12 hours'],ans:2,exp:'Doctors recommend 8 HOURS of sleep per night for adults! 😴'},
        {q:'"Too much" before a noun means:',opts:['a good amount','a small amount','more than is good/healthy','the correct amount'],ans:2,exp:'"Too much" = MORE than is good. "You eat too much sugar" = you eat more than you should!'},
        {q:'Which is a HEALTHY habit?',opts:['smoking every day','drinking 2 litres of water daily','eating junk food often','sleeping 4 hours only'],ans:1,exp:'Drinking 2 litres of water daily is a HEALTHY habit! Stay hydrated! 💧'],
        {q:'"___ is important for a healthy body."',opts:['Smoking','Not sleeping','Exercise','Junk food'],ans:2,exp:'"EXERCISE is important for a healthy body." Stay active! 🏃'},
        {q:'"She should ___ more." (advice to sleep)',opts:['sleeps','sleeping','to sleep','sleep'],ans:3,exp:'"She should SLEEP more." — should + base verb!'},
      ]},

    ]
  }
];
