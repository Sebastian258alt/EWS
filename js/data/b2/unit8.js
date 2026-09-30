// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit8.js
// ═══════════════════════════════════════════════════════
// Unit ID: u21
// Part of UNITS_B2 — Participle Clauses

const UNITS_B2_UNIT8 = [
  {
      id: 'u21',
      cefr: 'B2',
      title: 'Participle Clauses',
      titlePt: 'Orações com Particípio',
      desc: 'Write shorter, more elegant sentences ✂️',
      descPt: 'Escreve frases mais curtas e elegantes ✂️',
      color: '#8d6e63',
      icon: '✂️',
      premium: false,
      lessons: [
        {
          id: 'l21a',
          title: '-ing Clauses (Active Meaning)',
          titlePt: 'Orações com -ing (Sentido Ativo)',
          icon: '🏃',
          xp: 20,
          learn: {
            explanation: {
              en: 'We can replace a relative clause with an -ING clause when the subject DOES the action (active meaning). "The man who is standing near the door" becomes "The man standing near the door." This makes sentences shorter and more natural.',
              pt: 'Podemos substituir uma oração relativa por uma oração com -ING quando o sujeito FAZ a ação (sentido ativo). "The man who is standing near the door" torna-se "The man standing near the door." Isto torna as frases mais curtas e naturais.'
            },
            examples: [
              { en: 'The woman selling vegetables is my aunt.', pt: 'A mulher que vende vegetais é minha tia.' },
              { en: 'Students studying for exams often feel stressed.', pt: 'Os estudantes que estudam para exames sentem-se muitas vezes stressados.' },
              { en: 'I saw a dog running along the beach.', pt: 'Vi um cão a correr na praia.' }
            ],
            practice: [
              { q: '"The man ___ over there is my teacher." (who is standing)', opts: ['stand', 'standing', 'stood', 'to stand'], ans: 1, exp: '"standing" — -ing clause replacing "who is standing".' },
              { q: 'The -ing participle clause is used when the subject:', opts: ['receives the action', 'does the action', 'is unknown', 'is a thing only'], ans: 1, exp: '-ing clauses have an active meaning — the subject performs the action.' }
            ]
          },
          qs: [
            { q: '"People ___ near the market can hear the noise every day." (who live)', opts: ['live', 'living', 'lived', 'to live'], ans: 1, exp: '"living" — replaces "who live", active meaning.' },
            { q: '"The girl ___ the guitar is my cousin." (who is playing)', opts: ['play', 'playing', 'played', 'to play'], ans: 1, exp: '"playing" — active -ing participle clause.' },
            { q: '"Anyone ___ questions should raise their hand." (who has)', opts: ['have', 'having', 'had', 'to have'], ans: 1, exp: '"having" — -ing clause with active meaning.' },
            { q: 'Which sentence correctly uses an -ing participle clause?', opts: ['The child crying needs help.', 'The child cried needs help.', 'The child to cry needs help.', 'The child cries needs help.'], ans: 0, exp: '"crying" — correct -ing participle clause.' },
            { q: '"The chapa ___ passengers stopped suddenly." (that was carrying)', opts: ['carry', 'carrying', 'carried', 'to carry'], ans: 1, exp: '"carrying" — active -ing clause replacing "that was carrying".' }
          ]
        },
        {
          id: 'l21b',
          title: '-ed Clauses (Passive Meaning)',
          titlePt: 'Orações com -ed (Sentido Passivo)',
          icon: '🎯',
          xp: 20,
          learn: {
            explanation: {
              en: 'We use an -ED (past participle) clause when the subject RECEIVES the action (passive meaning). "The car that was damaged in the accident" becomes "The car damaged in the accident." This works for both regular and irregular past participles.',
              pt: 'Usamos uma oração com -ED (particípio passado) quando o sujeito RECEBE a ação (sentido passivo). "The car that was damaged in the accident" torna-se "The car damaged in the accident." Isto funciona tanto para particípios regulares como irregulares.'
            },
            examples: [
              { en: 'The letter written in Portuguese was hard to read.', pt: 'A carta escrita em português foi difícil de ler.' },
              { en: 'Goods produced locally support the economy.', pt: 'Os produtos produzidos localmente apoiam a economia.' },
              { en: 'The house destroyed by the flood was rebuilt.', pt: 'A casa destruída pela cheia foi reconstruída.' }
            ],
            practice: [
              { q: '"The book ___ by that author is very popular." (that was written)', opts: ['write', 'writing', 'written', 'to write'], ans: 2, exp: '"written" — past participle clause, passive meaning.' },
              { q: 'The -ed participle clause is used when the subject:', opts: ['does the action', 'receives the action', 'is always a person', 'is future'], ans: 1, exp: '-ed clauses have a passive meaning — the subject receives the action.' }
            ]
          },
          qs: [
            { q: '"The products ___ in Mozambique are exported worldwide." (that are made)', opts: ['make', 'making', 'made', 'to make'], ans: 2, exp: '"made" — passive participle clause.' },
            { q: '"The bridge ___ last year connects the two villages." (that was built)', opts: ['build', 'building', 'built', 'to build'], ans: 2, exp: '"built" — passive -ed participle clause.' },
            { q: '"Documents ___ in English must be translated." (that are written)', opts: ['write', 'writing', 'written', 'to write'], ans: 2, exp: '"written" — passive meaning, participle clause.' },
            { q: 'Which sentence uses an -ed participle clause correctly?', opts: ['The window broken yesterday was fixed.', 'The window breaking yesterday was fixed.', 'The window break yesterday was fixed.', 'The window to break yesterday was fixed.'], ans: 0, exp: '"broken" — passive past participle clause.' },
            { q: '"The house ___ near the river flooded every year." (that is located)', opts: ['locate', 'locating', 'located', 'to locate'], ans: 2, exp: '"located" — passive participle clause.' }
          ]
        },
        {
          id: 'l21c',
          title: 'Participle Clauses of Reason & Time',
          titlePt: 'Orações de Razão e Tempo com Particípio',
          icon: '⏳',
          xp: 25,
          learn: {
            explanation: {
              en: 'Participle clauses can replace BECAUSE or WHEN clauses at the start of a sentence. "Because she felt tired, she went to bed" becomes "Feeling tired, she went to bed." "After he finished the report, he sent it" becomes "Having finished the report, he sent it" (HAVING + participle shows an action completed before the main one).',
              pt: 'As orações com particípio podem substituir orações com BECAUSE ou WHEN no início de uma frase. "Because she felt tired, she went to bed" torna-se "Feeling tired, she went to bed." "After he finished the report, he sent it" torna-se "Having finished the report, he sent it" (HAVING + particípio mostra uma ação concluída antes da principal).'
            },
            examples: [
              { en: 'Feeling exhausted, she decided to rest for the day.', pt: 'Sentindo-se exausta, ela decidiu descansar durante o dia.' },
              { en: 'Having finished his homework, he watched television.', pt: 'Tendo terminado os trabalhos de casa, ele viu televisão.' },
              { en: 'Not knowing the address, we got completely lost.', pt: 'Não sabendo a morada, ficámos completamente perdidos.' }
            ],
            practice: [
              { q: '"___ the letter, she called her mother immediately." (after reading)', opts: ['Read', 'Reading', 'Having read', 'To read'], ans: 2, exp: '"Having read" shows an action completed before the next one.' },
              { q: '"___ hungry, the children ate quickly." (because they felt)', opts: ['Feel', 'Feeling', 'Felt', 'To feel'], ans: 1, exp: '"Feeling" — participle clause of reason.' }
            ]
          },
          qs: [
            { q: '"___ the exam, she felt relieved." (having finished)', opts: ['Finish', 'Finishing', 'Having finished', 'Finished'], ans: 2, exp: '"Having finished" — completed action before the main clause.' },
            { q: '"___ tired after work, he went straight to bed." (because he felt)', opts: ['Feel', 'Feeling', 'Felt', 'To feel'], ans: 1, exp: '"Feeling" — participle clause showing reason.' },
            { q: '"___ the door, she noticed the light was off." (when she opened)', opts: ['Open', 'Opening', 'Opened', 'Having open'], ans: 1, exp: '"Opening" — participle clause of time.' },
            { q: 'Which structure shows an action completed BEFORE the main clause?', opts: ['-ing + verb', 'having + past participle', '-ed + verb', 'to + verb'], ans: 1, exp: '"Having + past participle" shows a prior completed action.' },
            { q: '"___ no money left, he had to borrow some." (because he had)', opts: ['Have', 'Having', 'Had', 'To have'], ans: 1, exp: '"Having no money left" — participle clause of reason.' }
          ]
        },
        {
          id: 'l21d',
          title: 'Negative & Perfect Participle Clauses',
          titlePt: 'Orações com Particípio Negativo e Perfeito',
          icon: '🚫',
          xp: 25,
          learn: {
            explanation: {
              en: 'To make a participle clause negative, put NOT before it: "Not wanting to be late, she left early." For a perfect passive meaning, use HAVING BEEN + past participle: "Having been warned about the storm, they stayed inside."',
              pt: 'Para tornar uma oração com particípio negativa, coloca NOT antes: "Not wanting to be late, she left early." Para um sentido passivo perfeito, usa HAVING BEEN + particípio: "Having been warned about the storm, they stayed inside."'
            },
            examples: [
              { en: 'Not having a car, he takes the chapa every day.', pt: 'Não tendo carro, ele apanha o chapa todos os dias.' },
              { en: 'Having been told the news, she called her family.', pt: 'Tendo sido informada da notícia, ela ligou à família.' },
              { en: 'Not knowing what to say, he stayed silent.', pt: 'Não sabendo o que dizer, ele ficou calado.' }
            ],
            practice: [
              { q: '"___ enough money, they couldn\'t buy the tickets." (not having)', opts: ['Not have', 'Not having', 'Having not', 'Not to have'], ans: 1, exp: '"Not having" — negative participle clause, "not" comes first.' },
              { q: '"___ warned about the risk, she still went ahead." (having been)', opts: ['Being', 'Been', 'Having been', 'Have been'], ans: 2, exp: '"Having been warned" — perfect passive participle clause.' }
            ]
          },
          qs: [
            { q: '"___ seen the film before, I knew what would happen." (having)', opts: ['Seeing', 'Seen', 'Having seen', 'To see'], ans: 2, exp: '"Having seen" — perfect participle showing prior experience.' },
            { q: '"___ invited to the party, she felt left out." (not being)', opts: ['Not being', 'Being not', 'Not been', 'No being'], ans: 0, exp: '"Not being invited" — negative passive participle clause.' },
            { q: '"___ the instructions, he assembled the shelf easily." (having read)', opts: ['Reading', 'Read', 'Having read', 'To read'], ans: 2, exp: '"Having read" shows a completed prior action.' },
            { q: 'How is a participle clause made negative?', opts: ['participle + not', 'not + participle', 'no + participle', 'never + having'], ans: 1, exp: '"Not" goes before the participle, e.g. "Not knowing..."' },
            { q: '"___ told to wait, they left the office anyway." (having been)', opts: ['Being', 'Been', 'Having been', 'Have been'], ans: 2, exp: '"Having been told" — perfect passive participle clause.' }
          ]
        },
        {
          id: 'l21e',
          title: 'Unit Review',
          titlePt: 'Revisão da Unidade',
          icon: '🧠',
          xp: 30,
          learn: {
            explanation: {
              en: 'Review: -ing clauses for active meaning, -ed clauses for passive meaning, participle clauses of reason and time (including HAVING + participle for prior actions), and negative/perfect forms (Not + participle, Having been + participle).',
              pt: 'Revisão: orações com -ing para sentido ativo, orações com -ed para sentido passivo, orações de razão e tempo com particípio (incluindo HAVING + particípio para ações anteriores) e formas negativas/perfeitas (Not + particípio, Having been + particípio).'
            },
            examples: [
              { en: 'The man waiting outside is my neighbour.', pt: 'O homem que espera lá fora é meu vizinho.' },
              { en: 'Having finished dinner, they went for a walk.', pt: 'Tendo terminado o jantar, foram dar um passeio.' },
              { en: 'Not knowing the rules, she asked for help.', pt: 'Não sabendo as regras, ela pediu ajuda.' }
            ],
            practice: [
              { q: '"The woman ___ the market stall is my neighbour." (who runs)', opts: ['run', 'running', 'ran', 'to run'], ans: 1, exp: '"running" — active -ing participle clause.' },
              { q: '"The car ___ in the accident was towed away." (that was damaged)', opts: ['damage', 'damaging', 'damaged', 'to damage'], ans: 2, exp: '"damaged" — passive -ed participle clause.' }
            ]
          },
          qs: [
            { q: '"The children ___ in the yard are my students." (who are playing)', opts: ['play', 'playing', 'played', 'to play'], ans: 1, exp: '"playing" — active -ing participle clause.' },
            { q: '"The report ___ yesterday needs corrections." (that was submitted)', opts: ['submit', 'submitting', 'submitted', 'to submit'], ans: 2, exp: '"submitted" — passive -ed participle clause.' },
            { q: '"___ the meeting, she went straight home." (after finishing)', opts: ['Finish', 'Finishing', 'Having finished', 'Finished'], ans: 2, exp: '"Having finished" — completed prior action.' },
            { q: '"___ any money, he asked his brother for help." (not having)', opts: ['Not have', 'Not having', 'Having not', 'No having'], ans: 1, exp: '"Not having" — negative participle clause.' },
            { q: 'An -ing participle clause always shows a subject that:', opts: ['receives the action', 'performs the action', 'is passive', 'is in the past'], ans: 1, exp: '-ing clauses always carry an active meaning.' }
          ]
        }
      ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT8);
