// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit2.js
// ═══════════════════════════════════════════════════════
// Unit ID: u15
// Part of UNITS_B2 — Relative Clauses

const UNITS_B2_UNIT2 = [
  {
    id:'u15', cefr:'B2', title:'Relative Clauses', titlePt:'Orações Relativas',
    desc:'Add extra information to your sentences like a native speaker 🔗',
    descPt:'Acrescenta informação extra às tuas frases como um falante nativo 🔗',
    color:'#00897b', icon:'🔗', premium:false,
    lessons:[

      {id:'l15a', title:'Who, Which & That', titlePt:'Who, Which & That', icon:'👤', xp:25, learn:{
        explanation:{
          en:'Relative pronouns connect a clause to a noun. "Who" refers to people: "The man who called you is my uncle." "Which" refers to things: "The car which broke down is mine." "That" can replace who/which in defining clauses (informal): "The book that I read was great."',
          pt:'Os pronomes relativos ligam uma oração a um nome. "Who" refere-se a pessoas: "The man who called you is my uncle." "Which" refere-se a coisas: "The car which broke down is mine." "That" pode substituir who/which em orações definidoras (informal): "The book that I read was great."'
        },
        examples:[
          {en:'The teacher who taught me English was excellent.', pt:'O professor que me ensinou inglês era excelente.'},
          {en:'This is the phone which I bought last week.', pt:'Este é o telemóvel que comprei na semana passada.'},
          {en:'The bus that goes to Matola is late.', pt:'O autocarro que vai para a Matola está atrasado.'},
        ],
        practice:[
          {q:'"The woman ___ lives next door is a doctor."', opts:['which','who','whose','where'], ans:1, exp:'"Who" refers to people: the woman WHO lives next door.'},
          {q:'"I lost the keys ___ you gave me."', opts:['who','which','whose','when'], ans:1, exp:'"Which" refers to things: the keys WHICH you gave me.'},
        ],
      }, qs:[
        {q:'"The girl ___ won the competition is my sister."',opts:['which','who','whose','where'],ans:1,exp:'"Who" for people: the girl WHO won.'},
        {q:'"This is the laptop ___ I use every day."',opts:['who','which','whose','when'],ans:1,exp:'"Which" for things: the laptop WHICH I use.'},
        {q:'"That" can replace which of these in defining clauses?',opts:['whose only','who and which','where only','never replaces anything'],ans:1,exp:'"That" can informally replace both who and which in defining relative clauses.'},
        {q:'"The chef ___ cooked this meal is famous."',opts:['which','that','whose','where'],ans:1,exp:'"That" can replace "who" for people in defining clauses (informal style).'},
        {q:'Relative pronouns are used to:',opts:['start a new independent sentence','connect a clause with extra information to a noun','replace a verb','show possession only'],ans:1,exp:'Relative pronouns join extra information about a noun to the main clause.'},
      ]},

      {id:'l15b', title:'Whose, Where & When', titlePt:'Whose, Where & When', icon:'📍', xp:25, learn:{
        explanation:{
          en:'"Whose" shows possession (for people or things): "The man whose car was stolen called the police." "Where" refers to a place: "This is the school where I studied." "When" refers to a time: "I remember the day when we met."',
          pt:'"Whose" mostra posse (para pessoas ou coisas): "The man whose car was stolen called the police." "Where" refere-se a um lugar: "This is the school where I studied." "When" refere-se a um momento: "I remember the day when we met."'
        },
        examples:[
          {en:'That\'s the girl whose father is a pilot.', pt:'Aquela é a rapariga cujo pai é piloto.'},
          {en:'Maputo is the city where I was born.', pt:'Maputo é a cidade onde nasci.'},
          {en:'I\'ll never forget the day when I graduated.', pt:'Nunca vou esquecer o dia em que me formei.'},
        ],
        practice:[
          {q:'"This is the house ___ I grew up."', opts:['whose','where','when','who'], ans:1, exp:'"Where" refers to a place: the house WHERE I grew up.'},
          {q:'"That\'s the man ___ dog bit me."', opts:['who','whose','where','when'], ans:1, exp:'"Whose" shows possession: the man WHOSE dog.'},
        ],
      }, qs:[
        {q:'"I remember the year ___ we moved to Maputo."',opts:['whose','where','when','who'],ans:2,exp:'"When" refers to a time: the year WHEN we moved.'},
        {q:'"She is the artist ___ paintings are famous."',opts:['who','whose','where','when'],ans:1,exp:'"Whose" shows possession: the artist WHOSE paintings.'},
        {q:'"This is the beach ___ we used to play."',opts:['whose','where','when','who'],ans:1,exp:'"Where" refers to a place: the beach WHERE we used to play.'},
        {q:'"Whose" is used to show:',opts:['location','time','possession','a question only'],ans:2,exp:'"Whose" indicates ownership/possession.'},
        {q:'"I\'ll never forget the moment ___ I got my diploma."',opts:['whose','where','when','who'],ans:2,exp:'"When" for time: the moment WHEN I got my diploma.'},
      ]},

      {id:'l15c', title:'Defining vs Non-Defining', titlePt:'Definidoras vs Não-Definidoras', icon:'✂️', xp:25, learn:{
        explanation:{
          en:'Defining clauses give ESSENTIAL information (no commas, "that" allowed): "Students who study hard succeed." Non-defining clauses give EXTRA, non-essential information (commas required, "that" NOT allowed): "My brother, who lives in Beira, is a teacher." Removing a non-defining clause doesn\'t change the core meaning.',
          pt:'As orações definidoras dão informação ESSENCIAL (sem vírgulas, "that" é permitido): "Students who study hard succeed." As não-definidoras dão informação EXTRA, não essencial (com vírgulas, "that" NÃO é permitido): "My brother, who lives in Beira, is a teacher." Remover uma oração não-definidora não muda o significado central.'
        },
        examples:[
          {en:'The book that I borrowed was interesting. (defining — tells us which book)', pt:'O livro que pedi emprestado era interessante. (definidora)'},
          {en:'My father, who is 60, still works every day. (non-defining — extra info about my father)', pt:'O meu pai, que tem 60 anos, ainda trabalha todos os dias. (não-definidora)'},
          {en:'The lesson that we had yesterday was difficult.', pt:'A lição que tivemos ontem foi difícil.'},
        ],
        practice:[
          {q:'"My mother, ___ is a nurse, works at the hospital." (extra info)', opts:['that','who','which',''], ans:1, exp:'Non-defining clause with a person → "who" (never "that"), with commas.'},
          {q:'"The phone ___ I bought is broken." (essential info, no commas)', opts:['who','that','whose','where'], ans:1, exp:'Defining clause with a thing → "that" or "which" is fine, no commas.'},
        ],
      }, qs:[
        {q:'Which clause type uses commas?',opts:['defining','non-defining','neither','both always'],ans:1,exp:'Non-defining (extra) clauses are separated by commas.'},
        {q:'"That" can be used in:',opts:['non-defining clauses only','defining clauses only','both types equally','neither type'],ans:1,exp:'"That" is only used in defining (essential) clauses, never non-defining.'},
        {q:'"Mount Everest, ___ is the tallest mountain, is in Asia." (extra info)',opts:['that','which','whose',''],ans:1,exp:'Non-defining clause → "which", with commas (never "that").'},
        {q:'"The waiter ___ served us was very friendly." (essential info)',opts:['who','which is','whose',''],ans:0,exp:'Defining clause identifying which waiter → "who", no commas.'},
        {q:'If you remove a non-defining clause from a sentence, the core meaning:',opts:['is completely lost','stays basically the same','becomes a question','disappears entirely'],ans:1,exp:'Non-defining clauses add extra info — removing them keeps the main sentence meaning intact.'},
      ]},

      {id:'l15d', title:'Omitting the Relative Pronoun', titlePt:'Omitir o Pronome Relativo', icon:'🗑️', xp:25, learn:{
        explanation:{
          en:'In defining clauses, we can OMIT who/which/that when it is the OBJECT of the clause: "The man (who/that) I met was kind." But we CANNOT omit it when it is the SUBJECT: "The man who called me was kind" (cannot remove "who" here — it\'s the subject of "called").',
          pt:'Em orações definidoras, podemos OMITIR who/which/that quando é o OBJECTO da oração: "The man (who/that) I met was kind." Mas NÃO podemos omitir quando é o SUJEITO: "The man who called me was kind" (não se pode remover "who" aqui — é o sujeito de "called").'
        },
        examples:[
          {en:'The film (that) we watched was boring. (object — can omit)', pt:'O filme que vimos era aborrecido. (objecto — pode omitir)'},
          {en:'The woman who works here is my aunt. (subject — cannot omit)', pt:'A mulher que trabalha aqui é minha tia. (sujeito — não pode omitir)'},
          {en:'The house (which) they bought is huge. (object — can omit)', pt:'A casa que eles compraram é enorme. (objecto — pode omitir)'},
        ],
        practice:[
          {q:'"The song ___ I love is playing on the radio." (object, can be omitted)', opts:['who','(nothing needed — can omit)','whose',"can't be omitted"], ans:1, exp:'Object relative pronoun can be dropped: "The song I love..."'},
          {q:'"The boy ___ broke the window ran away." (subject, cannot omit)', opts:['who','(omit it)','whose','nothing'], ans:0, exp:'Subject relative pronoun CANNOT be omitted: "The boy WHO broke..."'},
        ],
      }, qs:[
        {q:'"The cake (___) she baked was delicious." (object)',opts:['who','that — can be omitted','whose','where'],ans:1,exp:'Object relative pronoun can be omitted: "The cake she baked..."'},
        {q:'"The man ___ lives next door is friendly." (subject — cannot omit)',opts:['(nothing)','who','whichever','anything'],ans:1,exp:'Subject pronoun cannot be dropped: "The man WHO lives..."'},
        {q:'You can omit the relative pronoun when it is the:',opts:['subject of the clause','object of the clause','always, no exceptions','never, it\'s always required'],ans:1,exp:'Only object relative pronouns can be omitted in defining clauses.'},
        {q:'"The teacher (___) I admire most is Mr. Silva." (object)',opts:['who — required','that — can be omitted','whose','where'],ans:1,exp:'Object pronoun, defining clause → can be omitted: "The teacher I admire..."'},
        {q:'Which sentence is INCORRECT?',opts:['The book I read was great.','The girl called me is my friend.','The girl who called me is my friend.','The car we bought is new.'],ans:1,exp:'"The girl called me" is wrong — "who" (subject) cannot be omitted: needs "The girl WHO called me".'},
      ]},

      {id:'l15e', title:'Relative Clauses Review', titlePt:'Revisão das Orações Relativas', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: who (people), which (things), whose (possession), where (place), when (time), that (defining clauses only, people or things). Defining = essential, no commas. Non-defining = extra info, commas required, no "that". Object relative pronouns can be omitted in defining clauses; subject ones cannot.',
          pt:'Revisão rápida: who (pessoas), which (coisas), whose (posse), where (lugar), when (tempo), that (só orações definidoras, pessoas ou coisas). Definidora = essencial, sem vírgulas. Não-definidora = informação extra, com vírgulas, sem "that". Pronomes relativos objecto podem ser omitidos em orações definidoras; os de sujeito não.'
        },
        examples:[
          {en:'The neighbour whose dog barks all night is annoying. (defining, possession)', pt:'O vizinho cujo cão ladra a noite toda é irritante. (definidora, posse)'},
          {en:'Inhambane, where I spent my holidays, is beautiful. (non-defining, place)', pt:'Inhambane, onde passei as férias, é linda. (não-definidora, lugar)'},
          {en:'The gift (that) she gave me was perfect. (defining, object — "that" omittable)', pt:'O presente que ela me deu foi perfeito. (definidora, objecto)'},
        ],
        practice:[
          {q:'"The city ___ I was born is Maputo."', opts:['who','which','where','whose'], ans:2, exp:'Place → "where": the city where I was born.'},
          {q:'"My uncle, ___ owns a shop, visited us." (extra info about uncle)', opts:['that','who','which',''], ans:1, exp:'Non-defining, person → "who", with commas.'},
        ],
      }, qs:[
        {q:'"The village ___ my grandmother lives is very quiet."',opts:['who','which','where','whose'],ans:2,exp:'Place → "where".'},
        {q:'"Mia, ___ speaks four languages, works as a translator." (extra info)',opts:['that','who','which',''],ans:1,exp:'Non-defining, person → "who" (never "that" here).'},
        {q:'"The keys ___ I lost were expensive." (object, essential info)',opts:['who','that','whose','where'],ans:1,exp:'Defining clause, object, thing → "that" (or which/omit).'},
        {q:'"Do you know the man ___ car is parked outside?"',opts:['who','which','whose','where'],ans:2,exp:'Possession → "whose": the man WHOSE car.'},
        {q:'"I still remember the day ___ I first arrived in Maputo."',opts:['whose','where','when','who'],ans:2,exp:'Time → "when": the day WHEN I arrived.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT2);
