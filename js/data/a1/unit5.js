// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit5.js
// ═══════════════════════════════════════════════════════
// Unit ID: u5
// Part of UNITS_A1

const UNITS_A1_UNIT5 = [
  {
      id:'u5', cefr:'A1', title:'Daily Life', titlePt:'Vida Quotidiana',
      desc:'English for everyday situations 🌍',
      descPt:'Inglês para situações do dia-a-dia 🌍',
      color:'#ffd740', icon:'🌅', premium:false,
      lessons:[
        {id:'l15', title:'Days & Months', titlePt:'Dias e Meses', icon:'📅', xp:20, learn:{
          explanation:{
            en:'The 7 days of the week and 12 months of the year are essential for making plans, telling stories, and talking about dates. In English, days and months always start with a capital letter.',
            pt:'Os 7 dias da semana e os 12 meses do ano são essenciais para fazer planos, contar histórias e falar sobre datas. Em inglês, os dias e meses começam sempre com letra maiúscula.'
          },
          examples:[
            {en:'Today is Monday.', pt:'Hoje é segunda-feira.'},
            {en:'My birthday is in July.', pt:'O meu aniversário é em Julho.'},
            {en:'We have classes from Monday to Friday.', pt:'Temos aulas de segunda a sexta-feira.'},
          ],
          practice:[
            {q:'Which day comes after Friday?', opts:['Sunday','Thursday','Saturday','Monday'], ans:2, exp:'Friday → Saturday.'},
            {q:'How many months are in a year?', opts:['10','11','12','13'], ans:2, exp:'There are 12 months in a year.'},
          ],
        }, qs:[
          {q:'What is the first day of the week in English?',opts:['Monday','Sunday','Saturday','Wednesday'],ans:1,exp:'In English-speaking countries, Sunday is traditionally the first day of the week.'},
          {q:'"Segunda-feira" in English is:',opts:['Sunday','Monday','Tuesday','Wednesday'],ans:1,exp:'Monday = Segunda-feira. The week starts with Monday for most people!'},
          {q:'Which month comes after March?',opts:['February','May','April','June'],ans:2,exp:'March → April → May → June. April comes after March!'},
          {q:'"December" is the ___ month of the year.',opts:['10th','11th','12th','9th'],ans:2,exp:'December is the 12th and last month of the year!'},
          {q:'"Agosto" in English is:',opts:['June','July','August','September'],ans:2,exp:'August = Agosto. Summer month in Europe!'},
        ]},
        {id:'l16', title:'Telling the Time', titlePt:'Dizer as Horas', icon:'🕐', xp:20, learn:{
          explanation:{
            en:'To tell the time, we use "o\'clock" for exact hours, "quarter past/to" for 15 minutes, and "half past" for 30 minutes. "What time is it?" is the standard question.',
            pt:'Para dizer as horas, usamos "o\'clock" para horas exactas, "quarter past/to" para 15 minutos, e "half past" para 30 minutos. "What time is it?" é a pergunta padrão.'
          },
          examples:[
            {en:'It\'s 7 o\'clock.', pt:'São 7 horas.'},
            {en:'It\'s half past three.', pt:'São três e meia.'},
            {en:'What time is it?', pt:'Que horas são?'},
          ],
          practice:[
            {q:'"Quarter to six" means:', opts:['6:15','5:45','6:45','5:15'], ans:1, exp:'Quarter TO = 15 minutes BEFORE: 5:45.'},
            {q:'How do you ask the time?', opts:['What hour is now?','What time is it?','Which time?','How time is it?'], ans:1, exp:'"What time is it?" is correct.'},
          ],
        }, qs:[
          {q:'"It is 3 o\'clock." This means:',opts:['3:15','3:00','3:30','2:45'],ans:1,exp:'"O\'clock" = exact hour. 3 o\'clock = 3:00.'},
          {q:'"Quarter past five" means:',opts:['5:05','5:10','5:15','5:45'],ans:2,exp:'"Quarter past" = 15 minutes after. Quarter past five = 5:15.'},
          {q:'"Half past eight" means:',opts:['8:00','8:15','8:30','8:45'],ans:2,exp:'"Half past" = 30 minutes. Half past eight = 8:30.'},
          {q:'How do you ask for the time?',opts:['Where is the time?','What is your time?','What time is it?','How much time?'],ans:2,exp:'"What time is it?" = Que horas são? The standard question!'},
          {q:'"It\'s midnight." This means:',opts:['12:00 PM','12:00 AM','6:00 AM','6:00 PM'],ans:1,exp:'"Midnight" = 12:00 AM = meia-noite. "Midday/noon" = 12:00 PM.'},
        ]},
        {id:'l17', title:'Shopping & Money', titlePt:'Compras e Dinheiro', icon:'🛍️', xp:25, learn:{
          explanation:{
            en:'Shopping vocabulary helps you buy things confidently: price, expensive, cheap, change, receipt. "How much does it cost?" asks the price; the cashier might say "Here\'s your change."',
            pt:'O vocabulário de compras ajuda-te a comprar com confiança: price, expensive, cheap, change, receipt. "How much does it cost?" pergunta o preço; o caixa pode dizer "Here\'s your change."'
          },
          examples:[
            {en:'How much does this cost?', pt:'Quanto custa isto?'},
            {en:'That\'s too expensive for me.', pt:'Isso é demasiado caro para mim.'},
            {en:'Here is your change.', pt:'Aqui está o seu troco.'},
          ],
          practice:[
            {q:'"Change" in a shop means:', opts:['a new product','money given back','a discount card','the shop owner'], ans:1, exp:'Change = money given back after paying.'},
            {q:'How do you ask the price?', opts:['How much does it cost?','How is it cost?','What price?','How many cost?'], ans:0, exp:'"How much does it cost?" is the standard question.'},
          ],
        }, qs:[
          {q:'"How much does it cost?" This question is about:',opts:['size','colour','price','quality'],ans:2,exp:'"How much does it cost?" = Quanto custa? Asking about the price!'},
          {q:'"It\'s too ___. I can\'t afford it."',opts:['cheap','expensive','free','small'],ans:1,exp:'"Expensive" = muito caro. "I can\'t afford it" = não consigo pagar.'},
          {q:'Where do you buy medicine?',opts:['supermarket','pharmacy','bakery','school'],ans:1,exp:'You buy medicine at a pharmacy (farmácia)!'},
          {q:'"Change" in a shop means:',opts:['a new item','the money you get back','a discount','the receipt'],ans:1,exp:'"Change" = the money the cashier gives you back after paying!'},
          {q:'"Can I help you?" is said by:',opts:['the customer','the security guard','the shop assistant','the manager'],ans:2,exp:'Shop assistants say "Can I help you?" when you enter a shop.'},
        ]},
        {id:'l18', title:'Directions & Places', titlePt:'Direcções e Lugares', icon:'🗺️', xp:25, learn:{
          explanation:{
            en:'Direction words (left, right, straight, next to, opposite) help you navigate a city and ask for help. "Where is...?" is the key question for asking locations.',
            pt:'As palavras de direcção (left, right, straight, next to, opposite) ajudam-te a navegar numa cidade e a pedir ajuda. "Where is...?" é a pergunta-chave para perguntar localizações.'
          },
          examples:[
            {en:'Turn left at the corner.', pt:'Vira à esquerda na esquina.'},
            {en:'The bank is next to the pharmacy.', pt:'O banco fica ao lado da farmácia.'},
            {en:'Where is the nearest hospital?', pt:'Onde fica o hospital mais próximo?'},
          ],
          practice:[
            {q:'"Next to" means:', opts:['far from','beside','inside','above'], ans:1, exp:'Next to = beside/near.'},
            {q:'How do you ask for a location?', opts:['Where is...?','What is...?','Who is...?','When is...?'], ans:0, exp:'Use "Where" for locations.'},
          ],
        }, qs:[
          {q:'"Turn left" means:',opts:['go straight','turn right','turn left','go back'],ans:2,exp:'"Turn left" = vira à esquerda. Opposite: "turn right" = vira à direita.'},
          {q:'Where do you go to catch a plane?',opts:['harbour','station','airport','bus stop'],ans:2,exp:'You catch a plane at the AIRPORT (aeroporto)!'},
          {q:'"It\'s next to the bank." This means:',opts:['far from','inside','beside/near','opposite'],ans:2,exp:'"Next to" = ao lado de. Beside/near the bank!'},
          {q:'How do you ask for directions?',opts:['Where is the bank?','Who is the bank?','When is the bank?','Why is the bank?'],ans:0,exp:'"Where is the bank?" = Onde fica o banco? Use "where" for location!'},
          {q:'"The hospital is ___ the park." (in front)',opts:['next to','behind','opposite','above'],ans:2,exp:'"Opposite" = in front of, facing. The hospital faces the park.'},
        ]},
        {id:'l5a', title:'There Is / There Are', titlePt:'There Is / There Are (Há)', icon:'📍', xp:20, learn:{
          explanation:{
            en:'We use "there is" for one thing (singular) and "there are" for more than one (plural) to say something exists. "There is a bank near here." "There are two chairs in the room."',
            pt:'Usamos "there is" para uma coisa (singular) e "there are" para mais do que uma (plural) para dizer que algo existe. "There is a bank near here." "There are two chairs in the room."'
          },
          examples:[
            {en:'There is a school near my house.', pt:'Há uma escola perto da minha casa.'},
            {en:'There are many shops in the city.', pt:'Há muitas lojas na cidade.'},
            {en:'Is there a pharmacy here?', pt:'Há uma farmácia aqui?'},
          ],
          practice:[
            {q:'Complete: "___ a cat in the garden."', opts:['There is','There are','Is there','They are'], ans:0, exp:'One cat (singular) → There IS.'},
            {q:'Complete: "___ three books on the table."', opts:['There is','There are','Is there','It is'], ans:1, exp:'Three books (plural) → There ARE.'},
          ],
        }, qs:[
          {q:'"There ___ a hospital near here."',opts:['is','are','be','am'],ans:0,exp:'Singular noun → "is".'},
          {q:'"There ___ many people at the party."',opts:['is','are','be','was'],ans:1,exp:'Plural noun → "are".'},
          {q:'Question form: "___ a bank nearby?"',opts:['Is there','There is','Are there','There are'],ans:0,exp:'Question with singular: "Is there...?"'},
          {q:'"There aren\'t any apples" means:',opts:['There are some apples','There are no apples','There is one apple','There were apples'],ans:1,exp:'aren\'t = are not = none.'},
          {q:'Which is correct?',opts:['There is two dogs.','There are two dogs.','There two dogs are.','Two dogs there are.'],ans:1,exp:'Plural (two dogs) → There ARE.'},
        ]},
      ]
    }
];
