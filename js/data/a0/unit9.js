// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit9.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0i — Daily Routines
// Part of UNITS_A0

const UNITS_A0_UNIT9 = [
  {
    id:'u0i', cefr:'A0', title:'Daily Routines', titlePt:'Rotina Diária',
    desc:'Morning routine, daily activities, telling time, and weekends 🕒',
    descPt:'Rotina matinal, atividades diárias, horas e fins de semana 🕒',
    color:'#1565c0', icon:'⏰', premium:false,
    lessons:[

      {id:'l0zk', title:'Morning Routine', titlePt:'Rotina Matinal', icon:'🌅', xp:20, learn:{
        explanation:{
          en:'In the morning, we do many things: wake up, get up, wash my face, brush my teeth, have breakfast, get dressed, and go to school/work. We use the present simple for routines: "I wake up at 6 am."',
          pt:'De manhã, fazemos muitas coisas: wake up (acordar), get up (levantar), wash my face (lavar a cara), brush my teeth (escovar os dentes), have breakfast (tomar o pequeno-almoço), get dressed (vestir) e go to school/work (ir para a escola/trabalho). Usamos o present simple para rotinas: "I wake up at 6 am."'
        },
        examples:[
          {en:'I wake up at 6 am every day.', pt:'Eu acordo às 6 da manhã todos os dias.'},
          {en:'She brushes her teeth after breakfast.', pt:'Ela escova os dentes depois do pequeno-almoço.'},
          {en:'We get dressed and go to school.', pt:'Nós vestimo-nos e vamos para a escola.'},
          {en:'He washes his face with cold water.', pt:'Ele lava a cara com água fria.'},
          {en:'I have breakfast at 7 am.', pt:'Eu tomo o pequeno-almoço às 7 da manhã.'},
        ],
        practice:[
          {q:'What do you do first in the morning?', opts:['have breakfast','brush teeth','wake up','go to school'], ans:2, exp:'Wake up (acordar) is usually the first thing!'},
          {q:'Complete: "She ___ her teeth."', opts:['brush','brushes','brushing','to brush'], ans:1, exp:'She brushes (third person -s) her teeth.'},
        ],
      }, qs:[
        {q:'"I get up" means:',opts:['I wake up','I stand up','I go to bed','I sleep'],ans:1,exp:'"Get up" = levantar-se (after waking up).'},
        {q:'What do you do after breakfast?',opts:['go to bed','brush teeth','go to school','sleep'],ans:2,exp:'After breakfast, you usually go to school or work! 🏫'},
        {q:'"Brush my teeth" – we do this to:',opts:['eat','clean our teeth','wash our face','comb hair'],ans:1,exp:'Brush teeth = escovar os dentes! 🪥'},
        {q:'Which is NOT a morning activity?',opts:['wake up','go to sleep','have breakfast','get dressed'],ans:1,exp:'Go to sleep (dormir) is for night, not morning!'},
        {q:'Complete: "I ___ dressed."',opts:['am','get','have','do'],ans:1,exp:'"I get dressed" = visto-me.'},
        {q:'"She washes her face" – "washes" is:',opts:['present simple','past','future','continuous'],ans:0,exp:'Present simple for routine.'},
        {q:'What time do you usually wake up? (choose the most common)',opts:['12 pm','6 am','10 pm','3 am'],ans:1,exp:'Most people wake up in the morning, around 6-7 am.'},
      ]},

      {id:'l0zl', title:'Daily Activities', titlePt:'Atividades Diárias', icon:'🏃', xp:20, learn:{
        explanation:{
          en:'During the day we do many activities: go to school/work, study, have lessons, eat lunch, do homework, play sports, watch TV, read books, listen to music, meet friends. In English, we say "I go to school" or "I study English."',
          pt:'Durante o dia fazemos muitas atividades: go to school/work (ir para a escola/trabalho), study (estudar), have lessons (ter aulas), eat lunch (almoçar), do homework (fazer os trabalhos de casa), play sports (praticar desporto), watch TV (ver televisão), read books (ler livros), listen to music (ouvir música), meet friends (encontrar amigos). Em inglês, dizemos "I go to school" ou "I study English."'
        },
        examples:[
          {en:'I study English every day.', pt:'Eu estudo inglês todos os dias.'},
          {en:'We have lessons from 8 to 12.', pt:'Nós temos aulas das 8 às 12.'},
          {en:'He plays football after school.', pt:'Ele joga futebol depois da escola.'},
          {en:'She watches TV in the evening.', pt:'Ela vê televisão ao fim da tarde.'},
          {en:'I do my homework at night.', pt:'Eu faço os meus trabalhos de casa à noite.'},
        ],
        practice:[
          {q:'What do you do at school?', opts:['play sports','study','watch TV','sleep'], ans:1, exp:'At school, you study! 📚'},
          {q:'Complete: "I ___ my homework."', opts:['make','do','have','play'], ans:1, exp:'"Do homework" = fazer os trabalhos de casa.'},
        ],
      }, qs:[
        {q:'"I go to school" – what is the opposite?',opts:['I go to work','I go home','I study','I play'],ans:1,exp:'The opposite is "go home" (ir para casa).'},
        {q:'Which activity do you do after school?',opts:['wake up','have breakfast','play sports','go to bed'],ans:2,exp:'After school, you can play sports! ⚽'},
        {q:'"She listens to music." – "listens" is:',opts:['present simple','past','future','continuous'],ans:0,exp:'Present simple for a regular activity.'},
        {q:'What is "watch TV" in Portuguese?',opts:['ver televisão','ouvir música','jogar futebol','estudar'],ans:0,exp:'Watch TV = ver televisão! 📺'},
        {q:'Complete: "We ___ lunch at 12."',opts:['have','do','make','play'],ans:0,exp:'"Have lunch" = almoçar.'},
        {q:'"Read books" – the verb is:',opts:['read','reads','reading','to read'],ans:0,exp:'The base verb is "read" (ler).'},
        {q:'Which is a school activity?',opts:['watch TV','play football','have lessons','sleep'],ans:2,exp:'Have lessons = ter aulas! 🏫'},
      ]},

      {id:'l0zm', title:'Telling Time', titlePt:'Dizer as Horas', icon:'🕰️', xp:20, learn:{
        explanation:{
          en:'In English, we tell time using "o\'clock" for exact hours, "half past" for :30, "quarter past" for :15, and "quarter to" for :45. Examples: 7:00 = seven o\'clock, 7:30 = half past seven, 7:15 = quarter past seven, 7:45 = quarter to eight. Also we can say "7:45" as "seven forty-five".',
          pt:'Em inglês, dizemos as horas com "o\'clock" para horas exatas, "half past" para :30, "quarter past" para :15, e "quarter to" para :45. Exemplos: 7:00 = seven o\'clock, 7:30 = half past seven, 7:15 = quarter past seven, 7:45 = quarter to eight. Também podemos dizer "7:45" como "seven forty-five".'
        },
        examples:[
          {en:'I wake up at 6 o\'clock.', pt:'Eu acordo às 6 horas.'},
          {en:'We have lunch at half past twelve.', pt:'Nós almoçamos às 12 e meia.'},
          {en:'School starts at quarter past eight.', pt:'A escola começa às 8 e 15.'},
          {en:'I go to bed at quarter to ten.', pt:'Eu vou para a cama às 10 menos um quarto.'},
          {en:'The movie is at 7:45 pm.', pt:'O filme é às 19:45 (7:45 da noite).'},
        ],
        practice:[
          {q:'What time is "half past six"?', opts:['6:00','6:30','6:15','6:45'], ans:1, exp:'Half past six = 6:30!'},
          {q:'Complete: "Quarter to nine" means:', opts:['8:45','9:15','9:00','8:30'], ans:0, exp:'Quarter to nine = 8:45 (faltam 15 min para as 9).'},
        ],
      }, qs:[
        {q:'"7 o\'clock" means:',opts:['7:00','7:30','7:15','7:45'],ans:0,exp:'7 o\'clock = 7:00 exatas!'},
        {q:'What is "half past two"?',opts:['2:00','2:30','2:15','2:45'],ans:1,exp:'Half past two = 2:30!'},
        {q:'"Quarter past five" is:',opts:['5:00','5:15','5:30','5:45'],ans:1,exp:'Quarter past five = 5:15!'},
        {q:'"Quarter to six" is:',opts:['6:15','5:45','6:45','5:15'],ans:1,exp:'Quarter to six = 5:45 (15 min to 6)!'},
        {q:'What time is "eight forty-five"?',opts:['8:45','9:45','8:15','7:45'],ans:0,exp:'Eight forty-five = 8:45!'},
        {q:'Complete: "I go to school at ___ past seven." (7:15)',opts:['half','quarter','o\'clock','ten'],ans:1,exp:'Quarter past seven = 7:15.'},
        {q:'"12 o\'clock" in the day is:',opts:['noon','midnight','evening','morning'],ans:0,exp:'12 o\'clock in the day is noon (meio-dia)! 🌞'},
      ]},

      {id:'l0zn', title:'Times of Day', titlePt:'Partes do Dia', icon:'🌞', xp:20, learn:{
        explanation:{
          en:'The day is divided into: morning (manhã), afternoon (tarde), evening (fim da tarde), night (noite). We use "in the morning", "in the afternoon", "in the evening", and "at night". Examples: "I study in the morning." "I sleep at night."',
          pt:'O dia está dividido em: morning (manhã), afternoon (tarde), evening (fim da tarde), night (noite). Usamos "in the morning", "in the afternoon", "in the evening" e "at night". Exemplos: "I study in the morning." "I sleep at night."'
        },
        examples:[
          {en:'I have breakfast in the morning.', pt:'Eu tomo o pequeno-almoço de manhã.'},
          {en:'We play sports in the afternoon.', pt:'Nós praticamos desporto à tarde.'},
          {en:'They watch TV in the evening.', pt:'Eles veem televisão ao fim da tarde.'},
          {en:'I sleep at night.', pt:'Eu durmo à noite.'},
          {en:'She works in the morning and afternoon.', pt:'Ela trabalha de manhã e à tarde.'},
        ],
        practice:[
          {q:'What time is "afternoon"?', opts:['6 am','12 pm','6 pm','10 pm'], ans:1, exp:'Afternoon is from around 12 pm to 6 pm.'},
          {q:'Complete: "I go to bed ___ night."', opts:['in','on','at','by'], ans:2, exp:'"At night" – we use "at" for night.'},
        ],
      }, qs:[
        {q:'"Morning" in Portuguese is:',opts:['tarde','manhã','noite','meio-dia'],ans:1,exp:'Morning = manhã!'},
        {q:'What do you do in the evening?',opts:['wake up','have breakfast','watch TV','go to school'],ans:2,exp:'In the evening, you often watch TV or relax. 📺'},
        {q:'Which preposition do we use with "night"?',opts:['in','on','at','by'],ans:2,exp:'We say "at night".'},
        {q:'"Afternoon" is between:',opts:['morning and evening','evening and night','night and morning','morning and night'],ans:0,exp:'Afternoon is after morning, before evening.'},
        {q:'Complete: "We have lunch ___ the afternoon."',opts:['in','on','at','by'],ans:0,exp:'"In the afternoon" – use "in" for parts of the day (except night).'},
        {q:'"Night" is the opposite of:',opts:['morning','day','evening','afternoon'],ans:1,exp:'Night is opposite of day (daytime).'},
        {q:'What time is "evening"?',opts:['6 am','12 pm','6 pm','12 am'],ans:2,exp:'Evening is around 6 pm to bedtime. 🌆'},
      ]},

      {id:'l0zo', title:'Weekend Routine', titlePt:'Rotina de Fim de Semana', icon:'🎉', xp:20, learn:{
        explanation:{
          en:'The weekend is Saturday and Sunday. On weekends, we often relax, sleep late, meet friends, go out, do hobbies, or visit family. Use "on weekends" or "at the weekend" (British). Example: "I sleep late on Saturdays."',
          pt:'O fim de semana é sábado e domingo. Ao fim de semana, costumamos relaxar, dormir até tarde, encontrar amigos, sair, fazer hobbies ou visitar a família. Usa "on weekends" ou "at the weekend" (inglês britânico). Exemplo: "I sleep late on Saturdays."'
        },
        examples:[
          {en:'I sleep late on weekends.', pt:'Eu durmo até tarde ao fim de semana.'},
          {en:'We visit our grandparents on Saturday.', pt:'Nós visitamos os nossos avós no sábado.'},
          {en:'She goes to the beach on Sundays.', pt:'Ela vai à praia aos domingos.'},
          {en:'They watch movies at the weekend.', pt:'Eles veem filmes ao fim de semana.'},
          {en:'I do my homework on Sunday evening.', pt:'Eu faço os trabalhos de casa no domingo à noite.'},
        ],
        practice:[
          {q:'What are the days of the weekend?', opts:['Monday and Tuesday','Saturday and Sunday','Friday and Saturday','Sunday and Monday'], ans:1, exp:'Weekend = Saturday and Sunday!'},
          {q:'Complete: "I relax ___ weekends."', opts:['in','on','at','by'], ans:1, exp:'"On weekends" (American) or "at weekends" (British) – both are common.'},
        ],
      }, qs:[
        {q:'On Saturdays, I ___ late.',opts:['sleep','get up','wake','go'],ans:0,exp:'"Sleep late" = dormir até tarde (not "get up" which is similar, but "sleep late" is common).'},
        {q:'Which is a weekend activity?',opts:['go to school','go to the beach','work in an office','study at school'],ans:1,exp:'Going to the beach is a common weekend activity! 🏖️'},
        {q:'"At the weekend" is British. In American English, we say:',opts:['in the weekend','on the weekend','at weekend','for weekend'],ans:1,exp:'American: "on the weekend".'},
        {q:'What do many people do on Sunday evening?',opts:['go to work','prepare for the week','go to school','wake up'],ans:1,exp:'On Sunday evening, people often prepare for the week ahead.'},
        {q:'Complete: "She ___ her grandparents on Sundays."',opts:['visit','visits','visiting','to visit'],ans:1,exp:'She visits (third person -s) her grandparents.'},
        {q:'"Weekend" is:',opts:['a day','two days','five days','seven days'],ans:1,exp:'Weekend is two days (Saturday and Sunday).'},
        {q:'Which is NOT a weekend activity?',opts:['relax','sleep late','go to school','meet friends'],ans:2,exp:'Go to school is for weekdays, not weekends! 🏫'},
      ]},

    ]
  }
];

// Auto-register into global registry
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A0_UNIT9);
