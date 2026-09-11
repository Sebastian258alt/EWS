// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit1.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1
// Part of UNITS_A1

const UNITS_A1_UNIT1 = [
  {
      id:'u1', cefr:'A1', title:'Present Tenses', titlePt:'Tempos Presentes',
      desc:'Master the most-used tenses in English 🕐',
      descPt:'Domina os tempos presentes mais usados 🕐',
      color:'#2979ff', icon:'🕐', premium:false,
      lessons:[
        {id:'l1', title:'Verb To Be', titlePt:'Verbo To Be', icon:'🔵', xp:20, learn:{
          explanation:{
            en:'The verb "to be" (am/is/are) is the most important verb in English. Use "am" with I, "is" with he/she/it, and "are" with you/we/they. It connects a subject to a description, name, or place.',
            pt:'O verbo "to be" (am/is/are) é o verbo mais importante do inglês. Usa "am" com I, "is" com he/she/it, e "are" com you/we/they. Ele liga o sujeito a uma descrição, nome ou lugar.'
          },
          examples:[
            {en:'I am a student.', pt:'Eu sou estudante.'},
            {en:'She is happy.', pt:'Ela está feliz.'},
            {en:'They are from Maputo.', pt:'Eles são de Maputo.'},
          ],
          practice:[
            {q:'Complete: "He ___ my friend."', opts:['am','is','are','be'], ans:1, exp:'He/She/It → IS.'},
            {q:'Which is correct?', opts:['You is tired.','You am tired.','You are tired.','You be tired.'], ans:2, exp:'You → ARE.'},
          ],
        }, qs:[
          {q:'"She ___ a teacher."',opts:['am','is','are','be'],ans:1,exp:'"She IS a teacher." — He/She/It = IS'},
          {q:'"We ___ from Mozambique."',opts:['am','is','are','be'],ans:2,exp:'"We ARE from Mozambique." — We/You/They = ARE'},
          {q:'Negative of "I am happy":',opts:['I is not happy.','I am not happy.','I are not happy.','I be not happy.'],ans:1,exp:'"I am not happy." — I + am. Negative = am not / I\'m not'},
          {q:'"___ you a student?"',opts:['Am','Is','Are','Be'],ans:2,exp:'"ARE you a student?" — You = ARE'},
          {q:'"They ___ not here."',opts:['am','is','are','was'],ans:2,exp:'"They ARE not here." — They + are. Negative = are not / aren\'t'},
        ]},
        {id:'l2', title:'Subject Pronouns', titlePt:'Pronomes Pessoais', icon:'👤', xp:15, learn:{
          explanation:{
            en:'Subject pronouns (I, you, he, she, it, we, they) replace the name of a person, animal, or thing so we don\'t repeat it. Use "he" for men, "she" for women, "it" for animals/objects, and "they" for two or more.',
            pt:'Os pronomes pessoais (I, you, he, she, it, we, they) substituem o nome de uma pessoa, animal ou coisa para não o repetirmos. Usa "he" para homens, "she" para mulheres, "it" para animais/objectos, e "they" para dois ou mais.'
          },
          examples:[
            {en:'Maria is kind. She is kind.', pt:'A Maria é gentil. Ela é gentil.'},
            {en:'The cat is small. It is small.', pt:'O gato é pequeno. Ele é pequeno.'},
            {en:'Pedro and Ana are here. They are here.', pt:'O Pedro e a Ana estão aqui. Eles estão aqui.'},
          ],
          practice:[
            {q:'Which pronoun replaces "João"?', opts:['She','It','He','They'], ans:2, exp:'João is a man → HE.'},
            {q:'Which pronoun replaces "the books"?', opts:['It','He','They','She'], ans:2, exp:'Plural things → THEY.'},
          ],
        }, qs:[
          {q:'What pronoun replaces "Ana"?',opts:['He','She','It','They'],ans:1,exp:'"Ana" is a woman → SHE. "Ana is kind." = "She is kind."'},
          {q:'"The dog is hungry." Replace "the dog":',opts:['He','She','It','They'],ans:2,exp:'Animals and objects = IT. "The dog is hungry." = "It is hungry."'},
          {q:'"Pedro and I are friends." Replace with one pronoun:',opts:['We','They','He','You'],ans:0,exp:'"Pedro and I" = WE. "We are friends."'},
          {q:'What pronoun replaces "Mr. Silva"?',opts:['She','It','He','They'],ans:2,exp:'"Mr. Silva" is a man → HE. "Mr. Silva works here." = "He works here."'},
          {q:'"Ana and Pedro are students." Replace:',opts:['We','He','She','They'],ans:3,exp:'"Ana and Pedro" = THEY. Two or more people = THEY.'},
        ]},
        {id:'l3', title:'Simple Present', titlePt:'Presente Simples', icon:'⭕', xp:25, learn:{
          explanation:{
            en:'We use Simple Present for habits, routines, and facts. Add -s or -es to the verb with he/she/it: "She works." With I/you/we/they, use the base verb: "I work." Signal words: always, usually, every day.',
            pt:'Usamos o Presente Simples para hábitos, rotinas e factos. Adiciona -s ou -es ao verbo com he/she/it: "She works." Com I/you/we/they, usa o verbo base: "I work." Palavras-sinal: always, usually, every day.'
          },
          examples:[
            {en:'I study English every day.', pt:'Eu estudo inglês todos os dias.'},
            {en:'She works in a hospital.', pt:'Ela trabalha num hospital.'},
            {en:'We don\'t eat meat.', pt:'Nós não comemos carne.'},
          ],
          practice:[
            {q:'Complete: "He ___ TV every night."', opts:['watch','watchs','watches','watching'], ans:2, exp:'watch ends in -ch → add -es: watches.'},
            {q:'Which signals Simple Present?', opts:['right now','yesterday','usually','tomorrow'], ans:2, exp:'"usually" = repeated habit = Simple Present.'},
          ],
        }, qs:[
          {q:'Which is correct?',opts:['She go to school.','She goes to school.','She is go.','She going.'],ans:1,exp:'"She GOES to school." — He/She/It adds -s or -es!'},
          {q:'"He ___ like coffee."',opts:['don\'t','doesn\'t','not','isn\'t'],ans:1,exp:'"He DOESN\'T like coffee." — Negative: doesn\'t + base verb.'},
          {q:'"I ___ English every day."',opts:['studies','studying','study','to study'],ans:2,exp:'"I STUDY English every day." — I/You/We/They: base form, no -s.'},
          {q:'Which word signals Simple Present?',opts:['yesterday','now','always','tomorrow'],ans:2,exp:'"Always", "usually", "often", "every day" = Simple Present signals!'},
          {q:'"___ she live in Maputo?"',opts:['Do','Does','Is','Are'],ans:1,exp:'"DOES she live in Maputo?" — Questions with He/She/It use DOES.'},
        ]},
        {id:'l4', title:'Present Continuous', titlePt:'Presente Contínuo', icon:'🔄', xp:25, learn:{
          explanation:{
            en:'We use Present Continuous (am/is/are + verb-ing) for actions happening right now, or temporary situations. "Look! She is dancing." Stative verbs like know, like, want usually don\'t take -ing.',
            pt:'Usamos o Presente Contínuo (am/is/are + verbo-ing) para acções a acontecer agora, ou situações temporárias. "Olha! Ela está a dançar." Verbos de estado como know, like, want normalmente não levam -ing.'
          },
          examples:[
            {en:'I am studying right now.', pt:'Eu estou a estudar agora.'},
            {en:'They are playing football.', pt:'Eles estão a jogar futebol.'},
            {en:'It is raining outside.', pt:'Está a chover lá fora.'},
          ],
          practice:[
            {q:'Complete: "We ___ lunch now."', opts:['eat','eats','are eating','ate'], ans:2, exp:'Right now = Present Continuous: are eating.'},
            {q:'Which verb usually does NOT take -ing?', opts:['run','know','play','write'], ans:1, exp:'"Know" is a stative verb — no -ing.'},
          ],
        }, qs:[
          {q:'"Look! It ___ (rain)"',opts:['rains','rained','is raining','has rained'],ans:2,exp:'"It IS RAINING." — Present Continuous = am/is/are + verb-ing.'},
          {q:'Which is WRONG?',opts:['I am eating.','She is running.','They are knowing.','We are waiting.'],ans:2,exp:'"Knowing" is wrong! Stative verbs (know, like, want) cannot use -ing.'},
          {q:'"They ___ playing football now."',opts:['is','am','are','be'],ans:2,exp:'"They ARE playing." — They + are + verb-ing.'},
          {q:'What is "write" in Present Continuous?',opts:['writing','writeing','writting','wrotes'],ans:0,exp:'"Writing" — drop the silent "e" before adding -ing: write → writing.'},
          {q:'"She is always ___ her keys." (lose)',opts:['lose','lost','losing','to lose'],ans:2,exp:'"Losing" — continuous = verb-ing. lose → losing!'},
        ]},
        {id:'l5', title:'Present Perfect', titlePt:'Presente Perfeito', icon:'✅', xp:30, learn:{
          explanation:{
            en:'Present Perfect (have/has + past participle) connects the past to the present — for experiences or actions with no exact time. "I have visited Paris." Use "has" with he/she/it, "have" with the rest.',
            pt:'O Present Perfect (have/has + particípio passado) liga o passado ao presente — para experiências ou acções sem hora exacta. "I have visited Paris." Usa "has" com he/she/it, "have" com o resto.'
          },
          examples:[
            {en:'I have finished my homework.', pt:'Eu já terminei o meu trabalho de casa.'},
            {en:'She has lived here for 5 years.', pt:'Ela vive aqui há 5 anos.'},
            {en:'Have you ever eaten sushi?', pt:'Já alguma vez comeste sushi?'},
          ],
          practice:[
            {q:'Complete: "She ___ already left."', opts:['have','has','had','is'], ans:1, exp:'He/She/It → HAS.'},
            {q:'Which signals Present Perfect?', opts:['yesterday','last week','already','tomorrow'], ans:2, exp:'"already" is a classic Present Perfect signal.'},
          ],
        }, qs:[
          {q:'"I ___ never been to Japan."',opts:['have','has','had','am'],ans:0,exp:'"I HAVE never been." — I/You/We/They = HAVE.'},
          {q:'Which uses Present Perfect CORRECTLY?',opts:['She has went to Paris.','She went to Paris yesterday.','She has been to Paris.','She have been to Paris.'],ans:2,exp:'"She HAS BEEN to Paris." — No specific time = Present Perfect!'},
          {q:'"They ___ already finished."',opts:['have','has','had','did'],ans:0,exp:'"They HAVE already finished." — "already" = big Present Perfect clue!'},
          {q:'Which signal word goes with Present Perfect?',opts:['yesterday','last year','in 2010','just'],ans:3,exp:'"Just", "already", "yet", "ever", "never", "since", "for" = Perfect signals!'},
          {q:'"Have you ___ sushi?" (eat)',opts:['eat','ate','eaten','eating'],ans:2,exp:'After have/has = past participle. eat → eaten. Irregular!'},
        ]},
        {id:'l1a', title:'Can & Can\'t', titlePt:'Can & Can\'t (Poder)', icon:'💪', xp:20, learn:{
          explanation:{
            en:'"Can" expresses ability or permission. Use "can" + base verb for all subjects (no -s!): "She can swim." The negative is "cannot" or "can\'t": "I can\'t drive."',
            pt:'"Can" expressa capacidade ou permissão. Usa "can" + verbo base para todos os sujeitos (sem -s!): "She can swim." A negativa é "cannot" ou "can\'t": "I can\'t drive."'
          },
          examples:[
            {en:'I can speak English.', pt:'Eu sei falar inglês.'},
            {en:'She can\'t cook.', pt:'Ela não sabe cozinhar.'},
            {en:'Can you help me, please?', pt:'Podes ajudar-me, por favor?'},
          ],
          practice:[
            {q:'Complete: "He ___ swim very well."', opts:['cans','can','canning','to can'], ans:1, exp:'Can never adds -s: He CAN swim.'},
            {q:'Negative of "They can dance":', opts:['They cans not dance.','They don\'t can dance.','They can\'t dance.','They not can dance.'], ans:2, exp:'Negative = can\'t / cannot + base verb.'},
          ],
        }, qs:[
          {q:'"Can" is followed by:',opts:['a base verb','a verb + ing','a verb + s','to + verb'],ans:0,exp:'After "can", always use the base verb: can swim, can run.'},
          {q:'"She ___ play the piano."',opts:['can','cans','canning','is can'],ans:0,exp:'She CAN play — no -s with modal verbs!'},
          {q:'Question form: "___ you drive?"',opts:['Do','Can','Are','Is'],ans:1,exp:'"Can you drive?" — Can goes before the subject in questions.'},
          {q:'"I can\'t swim" means:',opts:['I am able to swim','I am not able to swim','I love swimming','I will swim'],ans:1,exp:'Can\'t = cannot = NOT able to.'},
          {q:'Which is grammatically correct?',opts:['She can to dance.','She cans dance.','She can dance.','She can dances.'],ans:2,exp:'"Can + base verb" — no "to", no -s.'},
        ]},
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT1);
