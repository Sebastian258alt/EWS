// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit7.js
// ═══════════════════════════════════════════════════════
// Unit ID: u12
// Part of UNITS_B1

const UNITS_B1_UNIT7 = [
  {
      id: 'u12',
      cefr: 'B1',
      title: 'Relative Clauses',
      titlePt: 'Orações Relativas',
      desc: 'Add information to your sentences seamlessly 🔗',
      descPt: 'Adiciona informação às tuas frases de forma fluida 🔗',
      color: '#1565c0',
      icon: '🔗',
      premium: false,
      lessons: [
        {
          id: 'l12a',
          title: 'Defining Relative Clauses',
          titlePt: 'Orações Relativas Definidoras',
          icon: '🔍',
          xp: 20,
          learn: {
            explanation: {
              en: 'Defining relative clauses identify WHICH person or thing we mean. Without them, the sentence is incomplete. We use: WHO for people, WHICH for things, THAT for people or things (informal), WHERE for places.',
              pt: 'As orações relativas definidoras identificam QUAL pessoa ou coisa pretendemos dizer. Sem elas, a frase fica incompleta. Usamos: WHO para pessoas, WHICH para coisas, THAT para pessoas ou coisas (informal), WHERE para lugares.'
            },
            examples: [
              { en: 'The man who called is my uncle.', pt: 'O homem que ligou é o meu tio.' },
              { en: 'The book that I read was amazing.', pt: 'O livro que li foi incrível.' },
              { en: 'The city where I grew up is small.', pt: 'A cidade onde cresci é pequena.' }
            ],
            practice: [
              { q: 'Which pronoun is used for PEOPLE?', opts: ['which', 'where', 'who', 'whose'], ans: 2, exp: 'WHO for people.' },
              { q: '"The car ___ I bought is red."', opts: ['who', 'which', 'where', 'whose'], ans: 1, exp: 'WHICH for things.' }
            ]
          },
          qs: [
            { q: '"The man ___ lives next door is a doctor." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — relative pronoun for people in subject position.' },
            { q: '"This is the book ___ I bought yesterday." (object)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in object position.' },
            { q: '"The woman ___ car was stolen called the police."', opts: ['who', 'whom', 'which', 'whose'], ans: 3, exp: '"whose" — relative pronoun showing possession for people.' },
            { q: '"The house ___ is red belongs to my uncle."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in subject position.' },
            { q: 'Which relative pronoun is used for people?', opts: ['which', 'who', 'that', 'both who and that'], ans: 3, exp: '"who" and "that" can both be used for people.' }
          ]
        },
        {
          id: 'l12b',
          title: 'Non-Defining Relative Clauses',
          titlePt: 'Orações Relativas Não-Definidoras',
          icon: '📝',
          xp: 20,
          learn: {
            explanation: {
              en: 'Non-defining clauses add EXTRA information — remove them and the sentence still makes complete sense. They always use commas and CANNOT use "that". Example: "My brother, WHO lives in London, is a doctor."',
              pt: 'As orações não-definidoras adicionam informação EXTRA — se as removermos, a frase ainda faz sentido completo. Usam sempre vírgulas e NÃO podem usar "that". Exemplo: "My brother, WHO lives in London, is a doctor."'
            },
            examples: [
              { en: 'My mother, who is a nurse, works nights.', pt: 'A minha mãe, que é enfermeira, trabalha de noite.' },
              { en: 'Paris, which I visited last year, is beautiful.', pt: 'Paris, que visitei no ano passado, é bonita.' },
              { en: 'The Eiffel Tower, which was built in 1889, is iconic.', pt: 'A Torre Eiffel, que foi construída em 1889, é icónica.' }
            ],
            practice: [
              { q: 'Non-defining clauses are separated by:', opts: ['full stops', 'commas', 'dashes', 'semicolons'], ans: 1, exp: 'Commas before and after the non-defining clause.' },
              { q: 'Can "that" be used in a non-defining clause?', opts: ['Yes, always', 'Yes, sometimes', 'No, never', 'Only in questions'], ans: 2, exp: 'No — non-defining clauses cannot use "that".' }
            ]
          },
          qs: [
            { q: '"My brother, ___ lives in London, is a chef." (extra info)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas, gives extra information about the subject.' },
            { q: '"Paris, ___ is the capital of France, is beautiful."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause for things.' },
            { q: '"My car, ___ is blue, is very fast."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause with commas.' },
            { q: 'What punctuation is used with non-defining relative clauses?', opts: ['No punctuation', 'Commas', 'Semicolons', 'Colons'], ans: 1, exp: 'Non-defining clauses are separated by commas.' },
            { q: 'Which is a non-defining relative clause?', opts: ['The man who lives here is my uncle.', 'My uncle, who lives here, is a doctor.', 'The woman that I saw was happy.', 'The house which I bought is big.'], ans: 1, exp: '"My uncle, who lives here, is a doctor" — extra information with commas.' }
          ]
        },
        {
          id: 'l12c',
          title: 'Relative Pronouns: Who, Whom, Whose',
          titlePt: 'Pronomes Relativos: Who, Whom, Whose',
          icon: '📖',
          xp: 20,
          learn: {
            explanation: {
              en: 'WHO is subject form for people: "The man WHO called." WHOM is object form (formal): "The man WHOM I met." WHOSE shows possession: "The student WHOSE phone was stolen." WHICH is for things.',
              pt: 'WHO é a forma de sujeito para pessoas: "The man WHO called." WHOM é a forma de objecto (formal): "The man WHOM I met." WHOSE mostra posse: "The student WHOSE phone was stolen." WHICH é para coisas.'
            },
            examples: [
              { en: 'The woman who called is my aunt.', pt: 'A mulher que ligou é a minha tia.' },
              { en: 'The student whose phone was stolen was upset.', pt: 'O estudante cujo telemóvel foi roubado ficou chateado.' },
              { en: 'To whom should I address the letter?', pt: 'A quem devo dirigir a carta?' }
            ],
            practice: [
              { q: '"The man ___ car is broken is my boss." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: 'WHOSE = possession.' },
              { q: 'WHOM is used as:', opts: ['subject form', 'object form (formal)', 'possessive', 'for things'], ans: 1, exp: 'WHOM = formal object pronoun for people.' }
            ]
          },
          qs: [
            { q: '"The woman ___ you met is my sister." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 0, exp: '"who" can be used as an object pronoun, though "whom" is more formal.' },
            { q: '"To ___ should I address the letter?" (object of preposition)', opts: ['who', 'whom', 'whose', 'which'], ans: 1, exp: '"whom" — formal object pronoun used after prepositions.' },
            { q: '"The student ___ phone was stolen reported it." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: '"whose" — relative pronoun showing possession.' },
            { q: '"The company ___ you work for is expanding." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 3, exp: '"which" — relative pronoun for things as objects.' },
            { q: 'When do we use "whom"?', opts: ['As a subject', 'As an object (formal)', 'To show possession', 'For things'], ans: 1, exp: '"whom" is the formal object form for people.' }
          ]
        },
        {
          id: 'l12d',
          title: 'Omitting the Relative Pronoun',
          titlePt: 'Omitindo o Pronome Relativo',
          icon: '✂️',
          xp: 20,
          learn: {
            explanation: {
              en: 'We can omit (drop) the relative pronoun only when it is the OBJECT of the clause, not the subject. "The book (that) I read was great." — "that" is the object, so we can drop it. "The man WHO called" — WHO is the subject, cannot be dropped.',
              pt: 'Podemos omitir o pronome relativo apenas quando é o OBJECTO da oração, não o sujeito. "The book (that) I read was great." — "that" é o objecto, podemos omiti-lo. "The man WHO called" — WHO é o sujeito, não pode ser omitido.'
            },
            examples: [
              { en: 'The film (that) I watched was boring.', pt: 'O filme (que) vi era aborrecido.' },
              { en: 'The man who lives next door is a doctor. (cannot omit)', pt: 'O homem que vive ao lado é médico. (não se pode omitir)' },
              { en: 'This is the book (which) I told you about.', pt: 'Este é o livro (do qual) te falei.' }
            ],
            practice: [
              { q: 'When can you omit the relative pronoun?', opts: ['Always', 'Never', 'When it is the object', 'When it is the subject'], ans: 2, exp: 'Only when it is the OBJECT.' },
              { q: 'In "The girl who won", can you omit "who"?', opts: ['Yes', 'No', 'Sometimes', 'Only in writing'], ans: 1, exp: 'No — "who" is the subject here.' }
            ]
          },
          qs: [
            { q: '"The film ___ I watched was boring." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The relative pronoun can be omitted when it is the object of the clause: "The film I watched..."' },
            { q: '"The man ___ lives next door is a doctor." (subject, cannot omit)', opts: ['who', 'whom', 'which', 'that'], ans: 0, exp: 'The relative pronoun cannot be omitted when it is the subject of the clause.' },
            { q: '"This is the book ___ I told you about." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The object pronoun can be omitted: "This is the book I told you about."' },
            { q: 'Which relative pronoun can be omitted?', opts: ['Subject pronoun', 'Object pronoun', 'Possessive pronoun', 'All pronouns'], ans: 1, exp: 'Only object relative pronouns can be omitted.' },
            { q: 'Which sentence has an omitted relative pronoun?', opts: ['The man who called you is here.', 'The book you gave me is great.', 'The woman whose car was stolen is upset.', 'The house which I bought is old.'], ans: 1, exp: '"The book (that) you gave me" — "that" is omitted.' }
          ]
        },
        {
          id: 'l12e',
          title: 'Reduced Relative Clauses',
          titlePt: 'Orações Relativas Reduzidas',
          icon: '📉',
          xp: 25,
          learn: {
            explanation: {
              en: 'Reduced relative clauses drop the pronoun and auxiliary verb, leaving just the verb. Active = verb-ing: "The man STANDING by the door" (= who is standing). Passive = past participle: "The house BUILT in 1990" (= which was built).',
              pt: 'As orações relativas reduzidas eliminam o pronome e o auxiliar, deixando apenas o verbo. Activa = verbo-ing: "The man STANDING by the door" (= who is standing). Passiva = particípio passado: "The house BUILT in 1990" (= which was built).'
            },
            examples: [
              { en: 'The man standing at the door is my uncle.', pt: 'O homem que está à porta é o meu tio.' },
              { en: 'The book lying on the table is mine.', pt: 'O livro que está na mesa é meu.' },
              { en: 'The house built in 1990 is beautiful.', pt: 'A casa construída em 1990 é bonita.' }
            ],
            practice: [
              { q: 'Active reduced clause uses:', opts: ['past participle', 'verb-ing', 'to + verb', 'base verb'], ans: 1, exp: 'Active reduced = verb-ing: the girl singing.' },
              { q: 'Passive reduced clause uses:', opts: ['verb-ing', 'to + verb', 'past participle', 'will + verb'], ans: 2, exp: 'Passive reduced = past participle: the house built.' }
            ]
          },
          qs: [
            { q: '"The man ___ at the door is my uncle." (reduced from "who is standing")', opts: ['standing', 'stands', 'stand', 'to stand'], ans: 0, exp: 'Reduced relative clause: "The man standing at the door..." = "who is standing".' },
            { q: '"The book ___ on the table is mine." (reduced from "which is lying")', opts: ['lying', 'lies', 'lay', 'to lie'], ans: 0, exp: '"The book lying on the table" = "which is lying".' },
            { q: '"The house ___ in 1990 is beautiful." (passive, reduced from "which was built")', opts: ['built', 'building', 'to build', 'builds'], ans: 0, exp: '"The house built in 1990" = "which was built".' },
            { q: 'How do you reduce a relative clause?', opts: ['Remove the pronoun and change the verb to -ing or PP', 'Add more words', 'Keep the pronoun', 'Change to future tense'], ans: 0, exp: 'Reduce by dropping the relative pronoun and changing the verb to -ing (active) or past participle (passive).' },
            { q: 'Which is a reduced relative clause?', opts: ['The girl who sings well.', 'The girl singing well.', 'The girl sings well.', 'The girl, singing well, left.'], ans: 1, exp: '"The girl singing well" is reduced from "who sings well".' }
          ]
        },
        {
          id: 'l12f',
          title: 'Review: Relative Clauses',
          titlePt: 'Revisão: Orações Relativas',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Defining clauses = essential, no commas, "that" OK. Non-defining = extra info, commas, no "that". WHO = people. WHICH = things. WHOSE = possession. WHERE = places. WHEN = times. Pronoun can be omitted if object.',
              pt: 'Definidoras = essenciais, sem vírgulas, "that" permitido. Não-definidoras = informação extra, vírgulas, sem "that". WHO = pessoas. WHICH = coisas. WHOSE = posse. WHERE = lugares. WHEN = momentos. Pronome pode ser omitido se for objecto.'
            },
            examples: [
              { en: "That's the school where I studied.", pt: 'Essa é a escola onde estudei.' },
              { en: 'My car, which is red, needs a service.', pt: 'O meu carro, que é vermelho, precisa de revisão.' },
              { en: 'The woman whose dog barked all night is my neighbour.', pt: 'A mulher cujo cão ladrou a noite toda é minha vizinha.' }
            ],
            practice: [
              { q: 'Commas are used in ___ relative clauses.', opts: ['defining', 'non-defining', 'both', 'neither'], ans: 1, exp: 'Non-defining clauses use commas.' },
              { q: '"The film ___ won the Oscar is brilliant."', opts: ['who', 'whose', 'which', 'where'], ans: 2, exp: 'WHICH for things.' }
            ]
          },
          qs: [
            { q: '"The woman ___ we met is famous." (object, can omit)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" as object — can be omitted in informal English.' },
            { q: '"This is the house ___ has a red door." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things as subject.' },
            { q: '"My teacher, ___ is from England, speaks very clearly." (non-defining)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas for people.' },
            { q: '"The car ___ I bought is red." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: '"which" as object — can be omitted in informal speech.' },
            { q: 'Which sentence has a reduced relative clause?', opts: ['The woman who lives here is kind.', 'The woman living here is kind.', 'The woman, who lives here, is kind.', 'The woman that lives here is kind.'], ans: 1, exp: '"The woman living here" is reduced from "who lives here".' }
          ]
        },
        {
          id: 'l12g',
          title: 'Relative Clauses Practice',
          titlePt: 'Prática de Orações Relativas',
          icon: '✍️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Relative adverbs add location, time, and reason nuance: WHERE for places, WHEN for times, WHY for reasons. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."',
              pt: 'Os advérbios relativos adicionam nuances de localização, tempo e razão: WHERE para lugares, WHEN para momentos, WHY para razões. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."'
            },
            examples: [
              { en: 'That is the town where I grew up.', pt: 'Essa é a cidade onde cresci.' },
              { en: 'I remember the year when we met.', pt: 'Lembro-me do ano em que nos conhecemos.' },
              { en: 'Tell me the reason why you were late.', pt: 'Diz-me a razão pela qual chegaste atrasado.' }
            ],
            practice: [
              { q: '"The city ___ I was born is in the north." (place)', opts: ['when', 'which', 'where', 'whose'], ans: 2, exp: 'WHERE for places.' },
              { q: '"The reason ___ she left is unknown." (reason)', opts: ['where', 'when', 'why', 'whose'], ans: 2, exp: 'WHY for reasons.' }
            ]
          },
          qs: [
            { q: '"The restaurant ___ we ate is expensive." (object, can omit)', opts: ['where', 'which', 'who', 'whose'], ans: 1, exp: '"which" — object relative pronoun for things.' },
            { q: '"This is the city ___ I was born." (place)', opts: ['where', 'which', 'who', 'whose'], ans: 0, exp: '"where" — relative adverb for places.' },
            { q: '"The reason ___ I called is urgent." (reason)', opts: ['where', 'which', 'why', 'whose'], ans: 2, exp: '"why" — relative adverb for reasons.' },
            { q: '"That was the day ___ we met." (time)', opts: ['where', 'which', 'why', 'when'], ans: 3, exp: '"when" — relative adverb for time.' },
            { q: 'Which is correct?', opts: ['The house where I bought is big.', 'The house which I bought is big.', 'The house who I bought is big.', 'The house when I bought is big.'], ans: 1, exp: '"which" is the correct relative pronoun for things.' }
          ]
        }
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT7);
