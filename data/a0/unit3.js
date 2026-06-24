// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a0/unit3.js
// ═══════════════════════════════════════════════════════
// Unit ID: u0c — Numbers, Time & Calendar
// Part of UNITS_A0

const UNITS_A0_UNIT3 = [
  {
    id:'u0c', cefr:'A0', title:'Numbers, Time & Calendar', titlePt:'Números, Tempo e Calendário',
    desc:'Count, tell the time and talk about dates! 📅',
    descPt:'Conta, diz as horas e fala sobre datas! 📅',
    color:'#7e57c2', icon:'🔢', premium:false,
    lessons:[

      {id:'l0p', title:'Numbers 21-100', titlePt:'Números 21-100', icon:'💯', xp:20, learn:{
        explanation:{
          en:'After twenty (20), English numbers are built by combining tens and units: twenty-one (21), twenty-two (22)... thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), one hundred (100). Notice: forty has NO "u" — not "fourty"!',
          pt:'Depois de twenty (20), os números ingleses são construídos combinando dezenas e unidades: twenty-one (21), twenty-two (22)... thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), one hundred (100). Atenção: forty não tem "u" — não é "fourty"!'
        },
        examples:[
          {en:'21 — twenty-one', pt:'21 — vinte e um'},
          {en:'35 — thirty-five', pt:'35 — trinta e cinco'},
          {en:'50 — fifty', pt:'50 — cinquenta'},
          {en:'77 — seventy-seven', pt:'77 — setenta e sete'},
          {en:'100 — one hundred', pt:'100 — cem'},
        ],
        practice:[
          {q:'How do you write 42 in English?', opts:['fourty-two','forty-two','forty two','fourtytwo'], ans:1, exp:'42 = forty-two. Remember: no "u" in forty!'},
          {q:'What number is "sixty-eight"?', opts:['58','68','78','86'], ans:1, exp:'sixty = 60, eight = 8. So sixty-eight = 68!'},
        ],
      }, qs:[
        {q:'How do you say 30 in English?',opts:['thirthy','thirty','therty','thirsy'],ans:1,exp:'30 = thirty! Not "thirthy" — no extra H!'},
        {q:'"Forty" is which number?',opts:['14','24','40','44'],ans:2,exp:'forty = 40. Remember: no "u" — not "fourty"!'},
        {q:'How do you say 55?',opts:['fifty-five','fiftyfive','fifteen-five','fifty five'],ans:0,exp:'55 = fifty-five. Use a hyphen for two-digit numbers!'},
        {q:'What number is "ninety-nine"?',opts:['90','99','91','89'],ans:1,exp:'ninety = 90, nine = 9. So ninety-nine = 99!'},
        {q:'One hundred = ',opts:['10','100','1000','110'],ans:1,exp:'one hundred = 100! 💯'},
        {q:'Which is WRONG?',opts:['twenty-one','thirty-five','fourty','sixty'],ans:2,exp:'"Fourty" is wrong! The correct spelling is FORTY — no "u"!'},
        {q:'How do you say 73?',opts:['seventy-three','sixty-three','seventy-thirteen','seven-three'],ans:0,exp:'73 = seventy-three!'},
      ]},

      {id:'l0q', title:'Ordinal Numbers', titlePt:'Números Ordinais', icon:'🥇', xp:15, learn:{
        explanation:{
          en:'Ordinal numbers show position or order: 1st (first), 2nd (second), 3rd (third), 4th (fourth)... Most ordinals add -th to the number. But the first three are irregular: first, second, third. We use them for dates: "My birthday is on the 15th of June."',
          pt:'Os números ordinais mostram posição ou ordem: 1st (first), 2nd (second), 3rd (third), 4th (fourth)... A maioria dos ordinais adiciona -th ao número. Mas os três primeiros são irregulares: first, second, third. Usamo-los para datas: "O meu aniversário é no dia 15 de junho."'
        },
        examples:[
          {en:'1st — first (primeiro)', pt:'1st — first (primeiro)'},
          {en:'2nd — second (segundo)', pt:'2nd — second (segundo)'},
          {en:'3rd — third (terceiro)', pt:'3rd — third (terceiro)'},
          {en:'4th — fourth (quarto)', pt:'4th — fourth (quarto)'},
          {en:'Today is the 1st of January.', pt:'Hoje é o dia 1 de Janeiro.'},
        ],
        practice:[
          {q:'What is the ordinal of 1?', opts:['oneth','firstly','first','oned'], ans:2, exp:'1st = first. It\'s irregular — not "oneth"!'},
          {q:'What is the ordinal of 5?', opts:['fiveth','fifth','fived','five'], ans:1, exp:'5th = fifth. Some ordinals change spelling slightly!'},
        ],
      }, qs:[
        {q:'1st in English is:',opts:['onest','first','firstone','premier'],ans:1,exp:'1st = first! Irregular ordinal.'},
        {q:'"Second" is which number?',opts:['1st','2nd','3rd','4th'],ans:1,exp:'second = 2nd!'},
        {q:'What is the ordinal for 3?',opts:['threeth','thirteenth','third','threest'],ans:2,exp:'3rd = third! Another irregular ordinal.'},
        {q:'"The 4th of July" — what does 4th mean?',opts:['four','fourth','forty','fourteen'],ans:1,exp:'4th = fourth. Most ordinals from 4 onwards add -th!'},
        {q:'Which is CORRECT?',opts:['the onest day','the firstth day','the first day','the day first'],ans:2,exp:'"The first day" — ordinals go BEFORE the noun!'},
        {q:'"My birthday is on the ___ of March." (10)',opts:['tenth','ten','tenth','tenith'],ans:0,exp:'10th = tenth!'},
      ]},

      {id:'l0r', title:'Telling the Time — Advanced', titlePt:'Dizer as Horas — Avançado', icon:'⏰', xp:20, learn:{
        explanation:{
          en:'You already know "o\'clock", "half past" and "quarter past/to". Now let\'s add more! For exact minutes, say the hour then the minutes: "It\'s 7:20 — seven twenty." For AM/PM: AM is morning (before noon), PM is afternoon/evening (after noon).',
          pt:'Já conheces "o\'clock", "half past" e "quarter past/to". Agora vamos adicionar mais! Para minutos exactos, diz a hora e depois os minutos: "É 7:20 — seven twenty." Para AM/PM: AM é de manhã (antes do meio-dia), PM é de tarde/noite (depois do meio-dia).'
        },
        examples:[
          {en:'7:20 — It\'s seven twenty.', pt:'7:20 — São sete e vinte.'},
          {en:'3:45 — It\'s three forty-five.', pt:'3:45 — São três e quarenta e cinco.'},
          {en:'8:00 AM — eight o\'clock in the morning', pt:'8:00 AM — oito horas da manhã'},
          {en:'6:00 PM — six o\'clock in the evening', pt:'6:00 PM — seis horas da tarde'},
          {en:'My class starts at 9 AM.', pt:'A minha aula começa às 9 da manhã.'},
        ],
        practice:[
          {q:'"It\'s 4:30" — How do you say this?', opts:['four thirty','half three','four and half','thirty four'], ans:0, exp:'4:30 = "four thirty" OR "half past four". Both are correct!'},
          {q:'AM means:', opts:['afternoon/evening','any moment','morning','after midnight only'], ans:2, exp:'AM = morning (from midnight to noon). PM = afternoon/evening.'},
        ],
      }, qs:[
        {q:'"It\'s 9:15" — How do you say this?',opts:['nine fifteen','quarter nine','nine quarter','fifteen nine'],ans:0,exp:'9:15 = nine fifteen OR quarter past nine!'},
        {q:'"It\'s 2:50" — How do you say this?',opts:['two fifty','fifty two','two and fifty','ten to three'],ans:0,exp:'2:50 = two fifty. (You can also say "ten to three"!)'},
        {q:'What does PM stand for?',opts:['past midnight','post morning','afternoon/evening hours','prior morning'],ans:2,exp:'PM = afternoon and evening (noon to midnight)!'},
        {q:'"My work starts at 8 AM." This means:',opts:['8 in the evening','8 at night','8 in the morning','8 at noon'],ans:2,exp:'AM = morning! Work starts at 8 in the morning.'},
        {q:'"It\'s 12:00 PM." This is:',opts:['midnight','midday/noon','morning','evening'],ans:1,exp:'12:00 PM = midday/noon = meio-dia!'},
        {q:'How do you say 11:45?',opts:['eleven forty-five','eleven and three-quarter','forty-five eleven','quarter eleven'],ans:0,exp:'11:45 = eleven forty-five!'},
      ]},

      {id:'l0s', title:'Days of the Week', titlePt:'Dias da Semana', icon:'📆', xp:15, learn:{
        explanation:{
          en:'The seven days of the week in English are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Monday to Friday are "weekdays" (dias de semana). Saturday and Sunday are the "weekend" (fim de semana). In English, days are always written with a CAPITAL letter.',
          pt:'Os sete dias da semana em inglês são: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Monday a Friday são "weekdays" (dias de semana). Saturday e Sunday são o "weekend" (fim de semana). Em inglês, os dias são sempre escritos com LETRA MAIÚSCULA.'
        },
        examples:[
          {en:'Monday — segunda-feira', pt:'Monday — segunda-feira'},
          {en:'Wednesday — quarta-feira', pt:'Wednesday — quarta-feira'},
          {en:'Friday — sexta-feira', pt:'Friday — sexta-feira'},
          {en:'I go to school Monday to Friday.', pt:'Vou à escola de segunda a sexta.'},
          {en:'The weekend is Saturday and Sunday.', pt:'O fim de semana é sábado e domingo.'},
        ],
        practice:[
          {q:'What comes after Wednesday?', opts:['Tuesday','Thursday','Friday','Monday'], ans:1, exp:'Mon, Tue, WED, THU — Thursday comes after Wednesday!'},
          {q:'"Weekdays" are:', opts:['only Saturday and Sunday','Monday to Friday','Wednesday only','all 7 days'], ans:1, exp:'Weekdays = Monday to Friday — the working/school days!'},
        ],
      }, qs:[
        {q:'"Segunda-feira" in English is:',opts:['Sunday','Monday','Tuesday','Saturday'],ans:1,exp:'Monday = Segunda-feira! Start of the week!'},
        {q:'Which day comes after Tuesday?',opts:['Monday','Thursday','Wednesday','Friday'],ans:2,exp:'Mon, Tue, WED — Wednesday comes after Tuesday!'},
        {q:'"Sexta-feira" in English is:',opts:['Thursday','Saturday','Sunday','Friday'],ans:3,exp:'Friday = Sexta-feira! End of the school week!'},
        {q:'Saturday and Sunday are called:',opts:['weekdays','workdays','weekend','midweek'],ans:2,exp:'Saturday + Sunday = the weekend!'},
        {q:'Days of the week are written with:',opts:['all lowercase','a capital letter','all uppercase','no specific rule'],ans:1,exp:'In English, days ALWAYS start with a capital letter: Monday, Tuesday...'},
        {q:'How many weekdays are there?',opts:['2','5','7','10'],ans:1,exp:'5 weekdays: Monday, Tuesday, Wednesday, Thursday, Friday!'},
        {q:'"Domingo" in English is:',opts:['Saturday','Monday','Sunday','Friday'],ans:2,exp:'Sunday = Domingo! The last day of the week!'},
      ]},

      {id:'l0t', title:'Months & Seasons', titlePt:'Meses e Estações', icon:'🌸', xp:20, learn:{
        explanation:{
          en:'The 12 months of the year: January, February, March, April, May, June, July, August, September, October, November, December. The 4 seasons are: spring (primavera), summer (verão), autumn/fall (outono), winter (inverno). In Mozambique, we have a rainy season (época das chuvas) and a dry season (época seca)!',
          pt:'Os 12 meses do ano: January, February, March, April, May, June, July, August, September, October, November, December. As 4 estações são: spring (primavera), summer (verão), autumn/fall (outono), winter (inverno). Em Moçambique, temos a época das chuvas e a época seca!'
        },
        examples:[
          {en:'January is the first month.', pt:'Janeiro é o primeiro mês.'},
          {en:'My birthday is in March.', pt:'O meu aniversário é em Março.'},
          {en:'Summer is hot. Winter is cold.', pt:'O verão é quente. O inverno é frio.'},
          {en:'The rainy season in Mozambique is from November to April.', pt:'A época das chuvas em Moçambique é de Novembro a Abril.'},
          {en:'December is the last month of the year.', pt:'Dezembro é o último mês do ano.'},
        ],
        practice:[
          {q:'Which month comes after March?', opts:['February','May','April','June'], ans:2, exp:'January, February, March, APRIL — April comes after March!'},
          {q:'How many months are in a year?', opts:['10','11','12','13'], ans:2, exp:'There are 12 months in a year!'},
        ],
      }, qs:[
        {q:'"Agosto" in English is:',opts:['June','July','August','September'],ans:2,exp:'August = Agosto! ☀️'},
        {q:'Which month comes after October?',opts:['September','December','November','August'],ans:2,exp:'...October, NOVEMBER, December — November comes after October!'},
        {q:'"Janeiro" in English is:',opts:['June','January','July','February'],ans:1,exp:'January = Janeiro! The first month of the year!'},
        {q:'How many seasons are there?',opts:['2','3','4','12'],ans:2,exp:'4 seasons: spring, summer, autumn, winter!'},
        {q:'"Summer" in Portuguese is:',opts:['inverno','primavera','outono','verão'],ans:3,exp:'Summer = Verão! The hottest season!'},
        {q:'Which is the last month of the year?',opts:['November','October','December','January'],ans:2,exp:'December is the 12th and last month! 🎄'},
        {q:'"February" in Portuguese is:',opts:['Janeiro','Fevereiro','Março','Abril'],ans:1,exp:'February = Fevereiro! The shortest month.'},
      ]},

    ]
  }
];
