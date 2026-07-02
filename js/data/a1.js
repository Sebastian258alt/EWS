// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1.js
// ═══════════════════════════════════════════════════════
// A1 / A2 — Core Grammar (Present, Past, Future, Vocabulary, Daily Life)
// u3 is tagged A2 but included here to preserve curriculum order.
// Edit this file to update A1 and A2 lesson content.

const UNITS_A1 = [
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
    },
  {
      id:'u2', cefr:'A1', title:'Past Tenses', titlePt:'Tempos Passados',
      desc:'Talk about history & completed actions 📜',
      descPt:'Fala sobre o passado e acções concluídas 📜',
      color:'#ff6d00', icon:'⏮️', premium:false,
      lessons:[
        {id:'l6', title:'Simple Past', titlePt:'Passado Simples', icon:'⏮️', xp:25, learn:{
          explanation:{
            en:'We use Simple Past for actions that finished at a specific time in the past. Regular verbs add -ed (worked, played). Many common verbs are irregular (go→went, buy→bought) and must be memorized.',
            pt:'Usamos o Passado Simples para acções que terminaram num momento específico do passado. Os verbos regulares adicionam -ed (worked, played). Muitos verbos comuns são irregulares (go→went, buy→bought) e têm de ser memorizados.'
          },
          examples:[
            {en:'I visited my grandmother last week.', pt:'Eu visitei a minha avó na semana passada.'},
            {en:'She bought a new phone yesterday.', pt:'Ela comprou um telemóvel novo ontem.'},
            {en:'They didn\'t go to the party.', pt:'Eles não foram à festa.'},
          ],
          practice:[
            {q:'Past of "go":', opts:['goed','went','gone','going'], ans:1, exp:'"Go" is irregular: go → went.'},
            {q:'Negative form uses:', opts:['don\'t','doesn\'t','didn\'t','isn\'t'], ans:2, exp:'Past negative = didn\'t + base verb.'},
          ],
        }, qs:[
          {q:'"She ___ a letter yesterday." (write)',opts:['writes','write','wrote','written'],ans:2,exp:'"Write" is irregular: write → WROTE.'},
          {q:'"They ___ not go to school last Monday."',opts:['did','do','does','have'],ans:0,exp:'Negative: DID + not + base verb. "They did not go."'},
          {q:'What is the past of "buy"?',opts:['buyed','boughted','bought','buyt'],ans:2,exp:'"Buy → Bought" — irregular verb!'},
          {q:'Which signals Simple Past?',opts:['just','since','already','three days ago'],ans:3,exp:'"Three days ago", "yesterday", "last week" = Simple Past signals.'},
          {q:'"___ you see the match last night?"',opts:['Did','Do','Does','Have'],ans:0,exp:'Past questions: DID + subject + base verb?'},
        ]},
        {id:'l7', title:'Past Continuous', titlePt:'Passado Contínuo', icon:'⏸️', xp:25, learn:{
          explanation:{
            en:'Past Continuous (was/were + verb-ing) describes an action in progress at a specific past moment, often interrupted by another action. "I was sleeping when the phone rang."',
            pt:'O Passado Contínuo (was/were + verbo-ing) descreve uma acção em curso num momento específico do passado, muitas vezes interrompida por outra acção. "I was sleeping when the phone rang."'
          },
          examples:[
            {en:'I was watching TV at 8pm.', pt:'Eu estava a ver TV às 8 da noite.'},
            {en:'They were playing football when it rained.', pt:'Eles estavam a jogar futebol quando começou a chover.'},
            {en:'What were you doing yesterday?', pt:'O que estavas a fazer ontem?'},
          ],
          practice:[
            {q:'Past Continuous formula:', opts:['did + verb','was/were + verb-ing','have + verb-ed','will + verb'], ans:1, exp:'was/were + verb-ing.'},
            {q:'"While I ___, she called."', opts:['cook','cooked','was cooking','cooking'], ans:2, exp:'Ongoing action interrupted = was cooking.'},
          ],
        }, qs:[
          {q:'"While I ___, the phone rang." (sleep)',opts:['sleep','slept','was sleeping','have slept'],ans:2,exp:'Past Continuous = was/were + -ing. Ongoing action interrupted!'},
          {q:'"They ___ football when it started raining."',opts:['played','were playing','have played','play'],ans:1,exp:'"WERE PLAYING" — ongoing action interrupted by rain.'},
          {q:'Choose the CORRECT sentence:',opts:['She was cry.','She was cried.','She were crying.','She was crying.'],ans:3,exp:'"She WAS CRYING." — was/were + -ing.'},
          {q:'"What ___ you doing at 9pm last night?"',opts:['did','were','have','are'],ans:1,exp:'"WERE you doing?" — Past Continuous question.'},
          {q:'Past Continuous describes:',opts:['Past habits','Finished actions','Ongoing past actions','Future plans'],ans:2,exp:'Past Continuous = actions IN PROGRESS at a specific past moment.'},
        ]},
      ]
    },
  {
      id:'u3', cefr:'A2', title:'Future', titlePt:'Futuro',
      desc:"Talk about what's coming! 🔮",
      descPt:'Fala sobre o que está a vir! 🔮',
      color:'#82b1ff', icon:'🚀', premium:false,
      lessons:[
        {id:'l8', title:'Future with Will', titlePt:'Futuro com Will', icon:'🔮', xp:25, learn:{
          explanation:{
            en:'"Will" + base verb expresses predictions, promises, and spontaneous decisions made at the moment of speaking. "I think it will rain." "I\'ll help you!"',
            pt:'"Will" + verbo base expressa previsões, promessas e decisões espontâneas tomadas no momento da fala. "I think it will rain." "I\'ll help you!"'
          },
          examples:[
            {en:'I will call you tomorrow.', pt:'Eu vou ligar-te amanhã.'},
            {en:'She won\'t be late.', pt:'Ela não vai chegar atrasada.'},
            {en:'Will you marry me?', pt:'Casas comigo?'},
          ],
          practice:[
            {q:'"Will" is followed by:', opts:['a base verb','verb+ing','verb+ed','to+verb'], ans:0, exp:'will + base verb: will go, will help.'},
            {q:'Negative of "will":', opts:["willn't","won't","not will","will not have"], ans:1, exp:'will + not = won\'t.'},
          ],
        }, qs:[
          {q:'"I think it ___ rain tomorrow."',opts:['is going to','will','rains','rained'],ans:1,exp:'"Will" for predictions based on opinion. "I think" = belief → will.'},
          {q:'"I\'m hungry." — "___ get you something to eat."',opts:['I go','I will','I going to','I am going'],ans:1,exp:'Spontaneous decision = "will". No prior plan!'},
          {q:'Negative of "She will come":',opts:['She won\'t come.','She will not comes.','She doesn\'t will come.','She will not coming.'],ans:0,exp:'"Won\'t" = will + not. She won\'t come.'},
          {q:'"Will you help me?" — The correct answer is:',opts:['Yes, I will.','Yes, I do.','Yes, I am.','Yes, I shall.'],ans:0,exp:'Will → will. "Yes, I WILL." ✓'},
          {q:'Which sentence uses "will" CORRECTLY?',opts:['They will goes.','She will is here.','We will arrive soon.','He will can help.'],ans:2,exp:'"Will + base verb". "arrive" is base form. ✓'},
        ]},
        {id:'l9', title:'Going To', titlePt:'Going To', icon:'📅', xp:25, learn:{
          explanation:{
            en:'"Be going to" + base verb expresses plans already made or predictions with visible evidence. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"',
            pt:'"Be going to" + verbo base expressa planos já feitos ou previsões com evidência visível. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"'
          },
          examples:[
            {en:'We are going to travel next year.', pt:'Nós vamos viajar no próximo ano.'},
            {en:'She is going to buy a car.', pt:'Ela vai comprar um carro.'},
            {en:'Is he going to call you?', pt:'Ele vai ligar-te?'},
          ],
          practice:[
            {q:'"Going to" is used for:', opts:['spontaneous decisions','plans already made','past habits','permanent facts'], ans:1, exp:'Going to = pre-planned future.'},
            {q:'"She ___ going to study."', opts:['am','is','are','be'], ans:1, exp:'She + IS going to.'},
          ],
        }, qs:[
          {q:'"Look at those clouds! It ___ rain."',opts:['will','is going to','rains','might'],ans:1,exp:'"Going to" for predictions with visible evidence.'},
          {q:'"We ___ visit grandma next weekend." (planned)',opts:['will','are going to','are going','going to'],ans:1,exp:'Pre-planned future = "be going to".'},
          {q:'Correct form: "She ___ study medicine."',opts:['is going to','are going to','is going','goes to'],ans:0,exp:'"She IS GOING TO study" — she + is + going to + base verb.'},
          {q:'What does "going to" express?',opts:['Spontaneous decisions','Prior plans and evidence','General facts','Habits'],ans:1,exp:'"Going to" = plans already made OR visible evidence of future event.'},
          {q:'"I ___ start exercising." (already decided)',opts:['am going to','will','should','might'],ans:0,exp:'"Going to" for plans already decided.'},
        ]},
      ]
    },
  {
      id:'u4', cefr:'A1', title:'Vocabulary Builder', titlePt:'Construtor de Vocabulário',
      desc:'Expand your word power! 💡',
      descPt:'Expande o teu vocabulário! 💡',
      color:'#00e676', icon:'📚', premium:false,
      lessons:[
        {id:'l10', title:'Common Adjectives', titlePt:'Adjectivos Comuns', icon:'🎨', xp:20, learn:{
          explanation:{
            en:'Adjectives describe nouns — people, places, or things. They usually go before the noun ("a big house") or after "to be" ("The house is big"). Learning opposites (big/small, hot/cold) helps you remember faster.',
            pt:'Os adjectivos descrevem substantivos — pessoas, lugares ou coisas. Normalmente vêm antes do substantivo ("a big house") ou depois de "to be" ("The house is big"). Aprender opostos (big/small, hot/cold) ajuda-te a memorizar mais depressa.'
          },
          examples:[
            {en:'This is a huge elephant.', pt:'Este é um elefante enorme.'},
            {en:'My sister is very kind.', pt:'A minha irmã é muito gentil.'},
            {en:'That phone is expensive.', pt:'Aquele telemóvel é caro.'},
          ],
          practice:[
            {q:'Opposite of "cheap":', opts:['small','expensive','kind','tiny'], ans:1, exp:'cheap ↔ expensive.'},
            {q:'"The food is ___." (very tasty)', opts:['bland','disgusting','delicious','salty'], ans:2, exp:'delicious = very tasty.'},
          ],
        }, qs:[
          {q:'Which word means "very big"?',opts:['tiny','huge','narrow','shallow'],ans:1,exp:'"Huge" = extremely large. Opposite: "tiny".'},
          {q:'"The weather is very ___. I need a jacket."',opts:['hot','warm','cold','boiling'],ans:2,exp:'If you need a jacket, it\'s "cold"!'},
          {q:'"She is a ___ girl. She always helps others."',opts:['selfish','kind','rude','lazy'],ans:1,exp:'Someone who helps others is "kind".'},
          {q:'What does "expensive" mean?',opts:['Cheap','Costing a lot','Free','Beautiful'],ans:1,exp:'"Expensive" = high price. Opposite: "cheap".'},
          {q:'"The soup tastes ___." (very good)',opts:['disgusting','delicious','bland','salty'],ans:1,exp:'"Delicious" = very tasty. 😋'},
        ]},
        {id:'l11', title:'Everyday Actions', titlePt:'Acções do Dia-a-dia', icon:'🏃', xp:20, learn:{
          explanation:{
            en:'Action verbs describe what we do every day: eat, drink, read, sleep, watch, open, close. Pairing the right verb with the right noun (watch TV, read a book) sounds natural in English.',
            pt:'Os verbos de acção descrevem o que fazemos todos os dias: eat, drink, read, sleep, watch, open, close. Juntar o verbo certo ao substantivo certo (watch TV, read a book) soa natural em inglês.'
          },
          examples:[
            {en:'I read a book before bed.', pt:'Eu leio um livro antes de dormir.'},
            {en:'We watch TV in the evening.', pt:'Nós vemos TV à noite.'},
            {en:'She opens the window every morning.', pt:'Ela abre a janela todas as manhãs.'},
          ],
          practice:[
            {q:'Which verb goes with "a shower"?', opts:['eat','take','read','watch'], ans:1, exp:'We TAKE a shower.'},
            {q:'"I always ___ my teeth at night."', opts:['brush','watch','read','open'], ans:0, exp:'We BRUSH our teeth.'},
          ],
        }, qs:[
          {q:'What do you do with a book?',opts:['eat','read','drive','cook'],ans:1,exp:'You "read" a book. 📖'},
          {q:'"I ___ breakfast every morning."',opts:['do','make','eat','drink'],ans:2,exp:'We "eat" breakfast.'},
          {q:'Where do you sleep?',opts:['In the kitchen','In the bathroom','In the garden','In the bedroom'],ans:3,exp:'You sleep in the bedroom!'},
          {q:'"Can you ___ the door, please? It\'s hot."',opts:['close','open','lock','break'],ans:1,exp:'If it\'s hot, you want to "open" the door!'},
          {q:'Which verb goes with "TV"?',opts:['watch','see','look','hear'],ans:0,exp:'We "watch" TV. 📺'},
        ]},
        {id:'l12', title:'Food & Cooking', titlePt:'Comida e Culinária', icon:'🍳', xp:25, learn:{
          explanation:{
            en:'Cooking vocabulary helps you talk about meals and recipes: boil, fry, bake, grill, wash, cut. Words like "raw", "spicy", and "delicious" describe how food tastes or looks.',
            pt:'O vocabulário de culinária ajuda-te a falar sobre refeições e receitas: boil, fry, bake, grill, wash, cut. Palavras como "raw", "spicy" e "delicious" descrevem o sabor ou aspecto da comida.'
          },
          examples:[
            {en:'I like to fry onions first.', pt:'Eu gosto de fritar cebola primeiro.'},
            {en:'This soup is too spicy for me.', pt:'Esta sopa é demasiado picante para mim.'},
            {en:'Can you cut the tomatoes, please?', pt:'Podes cortar os tomates, por favor?'},
          ],
          practice:[
            {q:'Which method uses an oven?', opts:['boil','bake','fry','wash'], ans:1, exp:'BAKE = cook in an oven.'},
            {q:'"Raw" food is:', opts:['well-cooked','not cooked','very sweet','very salty'], ans:1, exp:'Raw = not cooked yet.'},
          ],
        }, qs:[
          {q:'What is the main ingredient in bread?',opts:['rice','flour','sugar','salt'],ans:1,exp:'Bread is made from "flour".'},
          {q:'"I need to ___ the vegetables before cooking."',opts:['wash','read','wear','build'],ans:0,exp:'You "wash" vegetables to clean them.'},
          {q:'Which cooking method uses water?',opts:['fry','bake','boil','grill'],ans:2,exp:'"Boil" = cooking in hot water.'},
          {q:'"This steak is too ___. I ordered it well-done."',opts:['cooked','raw','sweet','salty'],ans:1,exp:'"Raw" = not cooked.'},
          {q:'What does "spicy" mean?',opts:['Sweet taste','Hot burning taste','No taste','Sour taste'],ans:1,exp:'"Spicy" = hot flavour from chili/pepper.'},
        ]},
        {id:'l13', title:'Body Parts', titlePt:'Partes do Corpo', icon:'🦴', xp:20, learn:{
          explanation:{
            en:'Body part vocabulary is essential for describing health, pain, and appearance: head, hand, eyes, ears, leg, arm. We say "My ___ hurts" to describe pain.',
            pt:'O vocabulário das partes do corpo é essencial para descrever saúde, dor e aparência: head, hand, eyes, ears, leg, arm. Dizemos "My ___ hurts" para descrever dor.'
          },
          examples:[
            {en:'My head hurts.', pt:'Dói-me a cabeça.'},
            {en:'She has beautiful eyes.', pt:'Ela tem olhos bonitos.'},
            {en:'He broke his arm.', pt:'Ele partiu o braço.'},
          ],
          practice:[
            {q:'"Hurts" means:', opts:['feels good','causes pain','looks nice','smells bad'], ans:1, exp:'Hurts = causes pain.'},
            {q:'Which body part do you use to SMELL?', opts:['ears','eyes','nose','mouth'], ans:2, exp:'You smell with your NOSE.'},
          ],
        }, qs:[
          {q:'"Head" means:',opts:['mão','pé','cabeça','nariz'],ans:2,exp:'head = cabeça. "Use your head!" means think!'},
          {q:'What is "hand" in Portuguese?',opts:['pé','mão','braço','dedo'],ans:1,exp:'hand = mão. "Give me your hand."'},
          {q:'Which body part do you use to SEE?',opts:['ears','nose','eyes','mouth'],ans:2,exp:'You see with your EYES! 👀'},
          {q:'Which body part do you use to HEAR?',opts:['eyes','ears','nose','tongue'],ans:1,exp:'You hear with your EARS! 👂'},
          {q:'"My ___ hurts." (pointing to leg)',opts:['arm','head','leg','finger'],ans:2,exp:'leg = perna. "My leg hurts."'},
        ]},
        {id:'l14', title:'Animals & Nature', titlePt:'Animais e Natureza', icon:'🦁', xp:20, learn:{
          explanation:{
            en:'Nature vocabulary covers animals, plants, and the environment. Each animal makes a different sound and lives in a different habitat — knowing these words helps with storytelling and descriptions.',
            pt:'O vocabulário da natureza cobre animais, plantas e o ambiente. Cada animal faz um som diferente e vive num habitat diferente — saber estas palavras ajuda a contar histórias e a descrever.'
          },
          examples:[
            {en:'The lion is the king of the jungle.', pt:'O leão é o rei da selva.'},
            {en:'Fish live in water.', pt:'Os peixes vivem na água.'},
            {en:'Trees give us oxygen.', pt:'As árvores dão-nos oxigénio.'},
          ],
          practice:[
            {q:'Which animal says "moo"?', opts:['dog','cow','cat','lion'], ans:1, exp:'Cows say "moo"!'},
            {q:'Where do birds usually live?', opts:['underground','in water','in trees','in caves'], ans:2, exp:'Birds usually live in trees / nests.'},
          ],
        }, qs:[
          {q:'What sound does a dog make?',opts:['meow','woof','moo','roar'],ans:1,exp:'Dogs go "woof"! 🐕 Cats go "meow".'},
          {q:'"Lion" in Portuguese is:',opts:['elefante','leão','girafa','crocodilo'],ans:1,exp:'lion = leão. Lions are symbols of Africa! 🦁'},
          {q:'Where do fish live?',opts:['in trees','in water','underground','in the sky'],ans:1,exp:'Fish live in water — rivers, lakes, oceans!'},
          {q:'Which animal is the biggest?',opts:['cat','dog','elephant','bird'],ans:2,exp:'The elephant is the biggest land animal on Earth!'},
          {q:'"Tree" means:',opts:['flor','erva','árvore','pedra'],ans:2,exp:'tree = árvore. Trees give us oxygen!'},
        ]},
        {id:'l4a', title:'Weather & Seasons', titlePt:'Tempo e Estações', icon:'⛅', xp:20, learn:{
          explanation:{
            en:'We talk about weather using "It is...": "It is sunny", "It is raining". The four seasons are spring, summer, autumn (fall), and winter. Each season has typical weather and activities.',
            pt:'Falamos sobre o tempo usando "It is...": "It is sunny", "It is raining". As quatro estações são spring, summer, autumn (fall) e winter. Cada estação tem um clima e actividades típicas.'
          },
          examples:[
            {en:'It is sunny today.', pt:'Hoje está sol.'},
            {en:'It rains a lot in winter.', pt:'Chove muito no inverno.'},
            {en:'I love summer because it\'s hot.', pt:'Eu adoro o verão porque é quente.'},
          ],
          practice:[
            {q:'"It is raining" describes the:', opts:['season','weather','time','colour'], ans:1, exp:'It describes WEATHER.'},
            {q:'Which season comes after spring?', opts:['winter','autumn','summer','none'], ans:2, exp:'Spring → Summer → Autumn → Winter.'},
          ],
        }, qs:[
          {q:'"It is ___ today. Bring an umbrella!"',opts:['sunny','raining','cold','hot'],ans:1,exp:'You need an umbrella when it\'s RAINING.'},
          {q:'How many seasons are there?',opts:['2','3','4','5'],ans:2,exp:'There are 4 seasons: spring, summer, autumn, winter.'},
          {q:'"Hot" is the opposite of:',opts:['warm','cold','sunny','windy'],ans:1,exp:'hot ↔ cold.'},
          {q:'Which season is the coldest?',opts:['summer','spring','winter','autumn'],ans:2,exp:'Winter is the coldest season.'},
          {q:'"It\'s very windy today" means:',opts:['It is raining a lot','There is a lot of wind','It is very hot','It is snowing'],ans:1,exp:'Windy = lots of wind blowing.'},
        ]},
      ]
    },
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
