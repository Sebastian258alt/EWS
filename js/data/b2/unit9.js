// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit9.js
// ═══════════════════════════════════════════════════════
// Unit ID: u22
// Part of UNITS_B2 — Cleft Sentences

const UNITS_B2_UNIT9 = [
  {
      id: 'u22',
      cefr: 'B2',
      title: 'Cleft Sentences',
      titlePt: 'Frases Clivadas',
      desc: 'Put the spotlight on exactly what matters 🔦',
      descPt: 'Coloca o foco exatamente no que importa 🔦',
      color: '#d4a017',
      icon: '🔦',
      premium: false,
      lessons: [
        {
          id: 'l22a',
          title: 'It-Clefts',
          titlePt: 'Frases com It',
          icon: '👉',
          xp: 20,
          learn: {
            explanation: {
              en: 'IT-clefts emphasize one part of a sentence using: IT + BE + emphasized part + THAT/WHO clause. "Maria bought the car" becomes "It was Maria who bought the car" (emphasizing Maria) or "It was the car that Maria bought" (emphasizing the car).',
              pt: 'As frases clivadas com IT dão ênfase a uma parte da frase usando: IT + BE + parte enfatizada + oração com THAT/WHO. "Maria bought the car" torna-se "It was Maria who bought the car" (ênfase na Maria) ou "It was the car that Maria bought" (ênfase no carro).'
            },
            examples: [
              { en: 'It was Pedro who fixed the generator.', pt: 'Foi o Pedro que arranjou o gerador.' },
              { en: 'It is the price that worries me most.', pt: 'É o preço que mais me preocupa.' },
              { en: 'It was in Beira that they first met.', pt: 'Foi em Beira que eles se conheceram pela primeira vez.' }
            ],
            practice: [
              { q: '"João broke the window" → emphasize João:', opts: ['It was João who broke the window.', 'It broke João the window.', 'João it was who broke the window.', 'It was who João broke the window.'], ans: 0, exp: '"It was João who broke..." — emphasizes the person.' },
              { q: 'The basic it-cleft structure is:', opts: ['It + verb + that', 'It + be + emphasized part + that/who', 'It + that + be', 'It + who + be'], ans: 1, exp: '"It + BE + emphasized part + that/who clause".' }
            ]
          },
          qs: [
            { q: '"She lost the keys" → emphasize "the keys":', opts: ['It was the keys that she lost.', 'It lost the keys she.', 'The keys it was that she lost.', 'It was that she lost the keys.'], ans: 0, exp: '"It was the keys that she lost." — correct it-cleft.' },
            { q: '"They met in Maputo" → emphasize "in Maputo":', opts: ['It was in Maputo that they met.', 'It met in Maputo they.', 'In Maputo it was that they met.', 'It was that they met in Maputo.'], ans: 0, exp: '"It was in Maputo that they met." — emphasizes the place.' },
            { q: 'Which word replaces "who" when emphasizing a THING?', opts: ['who', 'which', 'that', 'both which and that'], ans: 3, exp: 'Both "which" and "that" can refer to things in it-clefts.' },
            { q: '"Ana called the doctor" → emphasize "Ana":', opts: ['It was Ana who called the doctor.', 'It called Ana the doctor.', 'Ana it was who called.', 'It was that Ana called the doctor.'], ans: 0, exp: '"It was Ana who called the doctor." — emphasizes the person.' },
            { q: 'It-clefts are mainly used to:', opts: ['ask questions', 'give commands', 'emphasize one specific part of information', 'describe habits'], ans: 2, exp: 'They highlight exactly which part of a sentence matters most.' }
          ]
        },
        {
          id: 'l22b',
          title: 'What-Clefts (Pseudo-Clefts)',
          titlePt: 'Frases com What',
          icon: '💭',
          xp: 20,
          learn: {
            explanation: {
              en: 'WHAT-clefts (also called pseudo-clefts) put emphasis using: WHAT + clause + BE + emphasized part. "I need a break" becomes "What I need is a break." This structure is very common for emphasizing needs, wants, and feelings.',
              pt: 'As frases com WHAT (também chamadas pseudo-clivadas) dão ênfase usando: WHAT + oração + BE + parte enfatizada. "I need a break" torna-se "What I need is a break." Esta estrutura é muito comum para enfatizar necessidades, desejos e sentimentos.'
            },
            examples: [
              { en: 'What I love about Maputo is the food.', pt: 'O que eu adoro em Maputo é a comida.' },
              { en: 'What surprised us was how quickly he learned.', pt: 'O que nos surpreendeu foi a rapidez com que ele aprendeu.' },
              { en: 'What she wants is a bit of peace and quiet.', pt: 'O que ela quer é um pouco de paz e sossego.' }
            ],
            practice: [
              { q: '"I really need some rest" → what-cleft:', opts: ['What I need is some rest.', 'What need I is some rest.', 'It is what I need some rest.', 'Rest is what need I.'], ans: 0, exp: '"What I need is some rest." — correct what-cleft structure.' },
              { q: 'What-clefts always start with:', opts: ['It', 'This', 'What', 'That'], ans: 2, exp: 'What-clefts begin with the word "What".' }
            ]
          },
          qs: [
            { q: '"She wants a new job" → what-cleft:', opts: ['What she wants is a new job.', 'What wants she a new job.', 'A new job what she wants.', 'It is what she wants a new job.'], ans: 0, exp: '"What she wants is a new job." — correct pseudo-cleft.' },
            { q: '"This upset me the most" → what-cleft:', opts: ['What upset me the most was this.', 'What me upset was this the most.', 'This was what upset the most me.', 'It upset what me the most was this.'], ans: 0, exp: '"What upset me the most was this." — correct structure.' },
            { q: '"They love the beach" → what-cleft:', opts: ['What they love is the beach.', 'What love they is the beach.', 'The beach what they love.', 'It is what they love the beach.'], ans: 0, exp: '"What they love is the beach." — correct what-cleft.' },
            { q: 'What-clefts are especially common for expressing:', opts: ['commands only', 'needs, wants and feelings', 'past events only', 'questions'], ans: 1, exp: 'They\'re often used to emphasize needs, desires, or reactions.' },
            { q: '"I dislike the noise" → what-cleft:', opts: ['What I dislike is the noise.', 'What dislike I is the noise.', 'The noise what I dislike.', 'It is what I dislike the noise.'], ans: 0, exp: '"What I dislike is the noise." — correct pseudo-cleft form.' }
          ]
        },
        {
          id: 'l22c',
          title: 'All-Clefts & Emphasis with Do',
          titlePt: 'Frases com All e Ênfase com Do',
          icon: '💯',
          xp: 25,
          learn: {
            explanation: {
              en: 'ALL-clefts emphasize the only thing needed: "All I want is a cup of tea." Emphatic DO/DOES/DID adds strong stress to a verb without a cleft: "I DO like this song" (contrast to what someone might think), "She DID call you, I promise."',
              pt: 'As frases com ALL enfatizam a única coisa necessária: "All I want is a cup of tea." O DO/DOES/DID enfático acrescenta forte ênfase a um verbo sem clivagem: "I DO like this song" (em contraste com o que alguém possa pensar), "She DID call you, I promise."'
            },
            examples: [
              { en: 'All I need is a little more time.', pt: 'Só preciso de um pouco mais de tempo.' },
              { en: 'I do enjoy studying English, even when it\'s hard.', pt: 'Eu realmente gosto de estudar inglês, mesmo quando é difícil.' },
              { en: 'She did finish the project, despite the deadline.', pt: 'Ela realmente terminou o projeto, apesar do prazo.' }
            ],
            practice: [
              { q: '"I only want some peace" → all-cleft:', opts: ['All I want is some peace.', 'All want I is some peace.', 'Peace is all want I.', 'It all is what I want peace.'], ans: 0, exp: '"All I want is some peace." — correct all-cleft.' },
              { q: '"I like your idea" (emphatic, contrasting doubt):', opts: ['I like your idea.', 'I do like your idea.', 'I liking your idea.', 'I am like your idea.'], ans: 1, exp: '"I DO like" — emphatic do adds strong stress.' }
            ]
          },
          qs: [
            { q: '"I only ask for respect" → all-cleft:', opts: ['All I ask for is respect.', 'All ask I for is respect.', 'Respect all I ask for.', 'It all is what I ask for respect.'], ans: 0, exp: '"All I ask for is respect." — correct all-cleft structure.' },
            { q: '"He finished the report" (emphatic, despite doubts):', opts: ['He finished the report.', 'He does finished the report.', 'He did finish the report.', 'He finishing did the report.'], ans: 2, exp: '"He did finish" — emphatic DID + base verb.' },
            { q: '"I love this song" (strong emphasis):', opts: ['I love this song.', 'I do love this song.', 'I loving this song.', 'I am love this song.'], ans: 1, exp: '"I DO love" — emphatic do for strong feeling.' },
            { q: 'Emphatic DO/DOES/DID is followed by:', opts: ['the -ing form', 'the base verb', 'the past tense', 'the past participle'], ans: 1, exp: 'Emphatic do is always followed by the base form of the verb.' },
            { q: '"I only need your support" → all-cleft:', opts: ['All I need is your support.', 'All need I is your support.', 'Your support all I need.', 'It all is what I need your support.'], ans: 0, exp: '"All I need is your support." — correct all-cleft.' }
          ]
        },
        {
          id: 'l22d',
          title: 'Choosing the Right Cleft',
          titlePt: 'Escolher a Clivagem Certa',
          icon: '🧩',
          xp: 25,
          learn: {
            explanation: {
              en: 'Choose IT-clefts to highlight a specific person, thing, place or time. Choose WHAT-clefts to highlight needs, wants, feelings, or general ideas. Choose ALL-clefts when something is the ONLY thing that matters. All three make writing and speech feel more emphatic and natural at an advanced level.',
              pt: 'Escolhe frases com IT para destacar uma pessoa, coisa, lugar ou tempo específico. Escolhe frases com WHAT para destacar necessidades, desejos, sentimentos ou ideias gerais. Escolhe frases com ALL quando algo é a ÚNICA coisa que importa. As três tornam a escrita e a fala mais enfáticas e naturais a um nível avançado.'
            },
            examples: [
              { en: 'It was the manager who approved the budget.', pt: 'Foi o gerente que aprovou o orçamento.' },
              { en: 'What matters most is honesty.', pt: 'O que mais importa é a honestidade.' },
              { en: 'All you need to do is ask.', pt: 'Só precisas de perguntar.' }
            ],
            practice: [
              { q: 'To emphasize a specific PERSON, use:', opts: ['a what-cleft', 'an it-cleft', 'an all-cleft', 'emphatic do'], ans: 1, exp: 'It-clefts are best for emphasizing a specific person or thing.' },
              { q: 'To emphasize a NEED or FEELING, use:', opts: ['an it-cleft', 'a what-cleft', 'an all-cleft', 'none of these'], ans: 1, exp: 'What-clefts are ideal for emphasizing needs, wants, and feelings.' }
            ]
          },
          qs: [
            { q: 'Which cleft type best emphasizes "only one thing matters"?', opts: ['it-cleft', 'what-cleft', 'all-cleft', 'emphatic do'], ans: 2, exp: 'All-clefts show that something is the only important thing.' },
            { q: '"Trust is what matters most in a marriage" is an example of a:', opts: ['it-cleft', 'what-cleft', 'all-cleft', 'emphatic do sentence'], ans: 1, exp: 'This is a what-cleft (pseudo-cleft) structure.' },
            { q: '"It was last year that they moved to Chimoio" emphasizes:', opts: ['who moved', 'when they moved', 'what they moved', 'why they moved'], ans: 1, exp: 'The it-cleft here emphasizes the TIME of the event.' },
            { q: 'Which sentence uses emphatic DO correctly?', opts: ['She does works hard.', 'She does work hard.', 'She working does hard.', 'She hard does working.'], ans: 1, exp: '"does work" — emphatic do + base verb.' },
            { q: '"All she wants is a quiet evening at home" emphasizes:', opts: ['multiple wants', 'a contrast', 'the single, only thing wanted', 'a question'], ans: 2, exp: 'All-clefts show that this is the ONE thing that matters.' }
          ]
        },
        {
          id: 'l22e',
          title: 'Unit Review',
          titlePt: 'Revisão da Unidade',
          icon: '🧠',
          xp: 30,
          learn: {
            explanation: {
              en: 'Review: it-clefts (It + be + emphasized part + that/who) for people, things, places and times; what-clefts (What + clause + be + emphasis) for needs and feelings; all-clefts for the one thing that matters; and emphatic DO/DOES/DID + base verb for stress without a cleft.',
              pt: 'Revisão: frases com it (It + be + parte enfatizada + that/who) para pessoas, coisas, lugares e tempos; frases com what (What + oração + be + ênfase) para necessidades e sentimentos; frases com all para a única coisa que importa; e DO/DOES/DID enfático + verbo base para ênfase sem clivagem.'
            },
            examples: [
              { en: 'It was Carlos who organized the party.', pt: 'Foi o Carlos que organizou a festa.' },
              { en: 'What I really need is some sleep.', pt: 'O que eu realmente preciso é de dormir.' },
              { en: 'All they wanted was a fair chance.', pt: 'Só queriam uma oportunidade justa.' }
            ],
            practice: [
              { q: '"Sara organized the trip" → emphasize Sara:', opts: ['It was Sara who organized the trip.', 'Sara it was organized the trip.', 'It organized Sara the trip.', 'What Sara organized was the trip.'], ans: 0, exp: '"It was Sara who organized..." — it-cleft for the person.' },
              { q: '"I want silence" → what-cleft:', opts: ['What I want is silence.', 'What want I is silence.', 'Silence what I want.', 'It is what I want silence.'], ans: 0, exp: '"What I want is silence." — correct what-cleft.' }
            ]
          },
          qs: [
            { q: '"The teacher praised Maria" → emphasize Maria:', opts: ['It was Maria who the teacher praised.', 'Maria it was praised.', 'It praised Maria the teacher.', 'What the teacher was Maria praised.'], ans: 0, exp: '"It was Maria who the teacher praised." — it-cleft.' },
            { q: '"I need patience" → what-cleft:', opts: ['What I need is patience.', 'What need I is patience.', 'Patience what I need.', 'It is what I need patience.'], ans: 0, exp: '"What I need is patience." — pseudo-cleft form.' },
            { q: '"I only ask for one chance" → all-cleft:', opts: ['All I ask for is one chance.', 'All ask I for is one chance.', 'One chance all I ask for.', 'It all is one chance I ask for.'], ans: 0, exp: '"All I ask for is one chance." — all-cleft structure.' },
            { q: '"She finished the marathon" (emphatic, despite injury):', opts: ['She finished the marathon.', 'She does finished the marathon.', 'She did finish the marathon.', 'She finishing did the marathon.'], ans: 2, exp: '"did finish" — emphatic DID + base verb.' },
            { q: 'Which cleft type is used to emphasize a specific TIME or PLACE?', opts: ['what-cleft', 'it-cleft', 'all-cleft', 'emphatic do'], ans: 1, exp: 'It-clefts are ideal for emphasizing times, places, people, or things.' }
          ]
        }
      ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT9);
