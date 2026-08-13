// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit4.js
// ═══════════════════════════════════════════════════════
// Unit ID: u9
// Part of UNITS_B1

const UNITS_B1_UNIT4 = [
  {
      id: 'u9',
      cefr: 'B1',
      title: 'Future Perfect & Future Continuous',
      titlePt: 'Future Perfect e Future Continuous',
      desc: 'Talk about what will be happening or finished 🔮',
      descPt: 'Fala sobre o que estará a acontecer ou já estará terminado 🔮',
      color: '#7c4dff',
      icon: '🔮',
      premium: false,
      lessons: [
        {
          id: 'l9a',
          title: 'Future Continuous: Actions in Progress',
          titlePt: 'Future Continuous: Acções em Progresso',
          icon: '🔄',
          xp: 20,
          learn: {
            explanation: {
              en: 'Future Continuous (will be + verb-ing) describes an action that will be in progress at a specific moment in the future. "This time tomorrow, I will be sleeping." It\'s like a snapshot of the future.',
              pt: 'O Future Continuous (will be + verbo-ing) descreve uma acção que estará em curso num momento específico do futuro. "This time tomorrow, I will be sleeping." É como uma fotografia do futuro.'
            },
            examples: [
              { en: 'This time next week, I will be flying to London.', pt: 'A esta hora na semana que vem, estarei a voar para Londres.' },
              { en: 'At 9pm, she will be watching the game.', pt: 'Às 21h, ela estará a ver o jogo.' },
              { en: 'Will you be using your car tomorrow?', pt: 'Vais estar a usar o teu carro amanhã?' }
            ],
            practice: [
              { q: 'Future Continuous formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + verb-ed', 'am/is/are + verb-ing'], ans: 1, exp: 'will + be + verb-ing.' },
              { q: '"At midnight I ___ (sleep)."', opts: ['will sleep', 'will be sleeping', 'will have slept', 'sleep'], ans: 1, exp: 'Future Continuous: will be sleeping.' }
            ]
          },
          qs: [
            { q: '"This time tomorrow, I ___ on the beach."', opts: ['will lie', 'will be lying', 'am lying', 'will have lain'], ans: 1, exp: '"will be lying" = action in progress at a specific future time.' },
            { q: 'Future Continuous = will + ___ + verb-ing', opts: ['be', 'have', 'do', 'being'], ans: 0, exp: 'Future Continuous = WILL + BE + verb-ing.' },
            { q: '"At 10am tomorrow, we ___ a meeting."', opts: ['will have', 'will be having', 'are having', 'had'], ans: 1, exp: '"will be having" = ongoing action at a specific future time.' },
            { q: 'Which is correct?', opts: ['I will be study at 8pm.', 'I will be studying at 8pm.', 'I am studying at 8pm.', 'I will studying at 8pm.'], ans: 1, exp: '"will be studying" — correct form: will + be + -ing.' }
          ]
        },
        {
          id: 'l9b',
          title: 'Future Perfect: Completed Actions',
          titlePt: 'Future Perfect: Acções Completadas',
          icon: '✅',
          xp: 20,
          learn: {
            explanation: {
              en: 'Future Perfect (will have + past participle) shows an action that will be completed before a specific point in the future. "By Friday, I will have finished the report." Think of it as looking back from a future moment.',
              pt: 'O Future Perfect (will have + particípio passado) mostra uma acção que estará concluída antes de um ponto específico no futuro. "By Friday, I will have finished the report." Imagina que olhas para trás a partir de um momento futuro.'
            },
            examples: [
              { en: 'By 2030, she will have graduated.', pt: 'Em 2030, ela já terá se formado.' },
              { en: 'I will have cooked dinner by the time you arrive.', pt: 'Eu já terei cozinhado o jantar quando chegares.' },
              { en: 'Will you have finished by 6pm?', pt: 'Já terás terminado até às 18h?' }
            ],
            practice: [
              { q: 'Future Perfect formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + past participle', 'have + past participle'], ans: 2, exp: 'will + have + past participle.' },
              { q: '"By next year, I ___ this course."', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: '"By" + future point = Future Perfect: will have finished.' }
            ]
          },
          qs: [
            { q: '"By 2025, I ___ graduated."', opts: ['will have', 'have', 'will', 'am going to'], ans: 0, exp: '"will have graduated" = will + have + past participle. The action will be complete by then.' },
            { q: 'Future Perfect = will + ___ + past participle', opts: ['be', 'have', 'has', 'had'], ans: 1, exp: 'Future Perfect = WILL + HAVE + past participle.' },
            { q: '"___ you have finished by 6pm?"', opts: ['Will', 'Are', 'Do', 'Have'], ans: 0, exp: '"Will you have finished?" = question using Future Perfect.' },
            { q: 'Which sentence is correct?', opts: ['By next year, I will finish my degree.', 'By next year, I will have finished my degree.', 'By next year, I have finished my degree.', 'By next year, I finished my degree.'], ans: 1, exp: '"By next year, I will have finished" = Future Perfect to show completion by a future time.' },
            { q: '"They ___ already ___ the report by Friday."', opts: ['will, finish', 'will have, finished', 'have, finished', 'will be, finishing'], ans: 1, exp: '"They will have already finished by Friday" — Future Perfect.' }
          ]
        },
        {
          id: 'l9c',
          title: 'Using "By the time" with Future Perfect',
          titlePt: 'Usando "By the time" com Future Perfect',
          icon: '⌛',
          xp: 20,
          learn: {
            explanation: {
              en: '"By the time" introduces the future point by which something will be done. It always pairs with Future Perfect in the main clause: "By the time he arrives, we will have eaten." The time clause uses Present Simple.',
              pt: '"By the time" introduz o ponto futuro pelo qual algo estará feito. Junta-se sempre ao Future Perfect na oração principal: "By the time he arrives, we will have eaten." A oração temporal usa o Presente Simples.'
            },
            examples: [
              { en: 'By the time she calls, I will have left.', pt: 'Quando ela ligar, eu já terei saído.' },
              { en: 'By the time the film ends, it will have been 3 hours.', pt: 'Quando o filme acabar, já terão passado 3 horas.' },
              { en: 'I will have eaten by the time you arrive.', pt: 'Eu já terei comido quando chegares.' }
            ],
            practice: [
              { q: 'After "by the time", use:', opts: ['will + base verb', 'Present Simple', 'Past Simple', 'Future Perfect'], ans: 1, exp: 'Time clause = Present Simple (not will).' },
              { q: '"By the time I arrive, she ___ (leave)."', opts: ['will leave', 'will have left', 'left', 'leaves'], ans: 1, exp: 'Future Perfect: will have left.' }
            ]
          },
          qs: [
            { q: '"By the time you arrive, we ___ already ___ dinner."', opts: ['will, have', 'will have, had', 'have, had', 'will be, having'], ans: 1, exp: '"By the time you arrive, we WILL HAVE ALREADY HAD dinner."' },
            { q: '"By the time he gets here, I ___ for an hour."', opts: ['will wait', 'will have waited', 'am waiting', 'waited'], ans: 1, exp: '"will have waited" — Future Perfect to show duration before a future point.' },
            { q: 'Which time expression is used with Future Perfect?', opts: ['now', 'by the time', 'currently', 'for the moment'], ans: 1, exp: '"By the time" is commonly used to introduce the future point before which the action is completed.' },
            { q: '"She ___ her homework by 8pm."', opts: ['will finish', 'will have finished', 'is finishing', 'finishes'], ans: 1, exp: '"will have finished" = she will be finished by 8pm.' },
            { q: 'What is the difference between Future Continuous and Future Perfect?', opts: ['Future Continuous is for completed actions, Future Perfect for ongoing', 'Future Continuous is for ongoing actions, Future Perfect for completed', 'Both are for ongoing actions', 'Both are for completed actions'], ans: 1, exp: 'Future Continuous = ongoing at a future time. Future Perfect = completed by a future time.' }
          ]
        },
        {
          id: 'l9d',
          title: 'Future Perfect Continuous',
          titlePt: 'Future Perfect Continuous',
          icon: '⏳',
          xp: 25,
          learn: {
            explanation: {
              en: 'Future Perfect Continuous (will have been + verb-ing) emphasises how long an action will have been going on by a future point. "By 2030, I will have been studying English for 10 years."',
              pt: 'O Future Perfect Continuous (will have been + verbo-ing) enfatiza há quanto tempo uma acção terá durado até um ponto futuro. "By 2030, I will have been studying English for 10 years."'
            },
            examples: [
              { en: 'By next June, I will have been working here for 5 years.', pt: 'No próximo Junho, já trabalharei aqui há 5 anos.' },
              { en: 'She will have been waiting for two hours by then.', pt: 'Ela já estará à espera há duas horas nessa altura.' },
              { en: 'They will have been building the house for a year.', pt: 'Eles já estarão a construir a casa há um ano.' }
            ],
            practice: [
              { q: 'Future Perfect Continuous formula:', opts: ['will + be + verb-ing', 'will + have + past participle', 'will + have + been + verb-ing', 'will + verb'], ans: 2, exp: 'will + have + been + verb-ing.' },
              { q: 'It emphasises:', opts: ['a single completed action', 'duration of an ongoing action up to a future point', 'a future plan', 'a present habit'], ans: 1, exp: 'Duration in progress up to a future point.' }
            ]
          },
          qs: [
            { q: '"By 2026, I ___ English for 10 years."', opts: ['will be learning', 'will have learned', 'will have been learning', 'am learning'], ans: 2, exp: '"will have been learning" = Future Perfect Continuous: emphasising duration up to a future point.' },
            { q: 'Future Perfect Continuous = will + have + been + ___', opts: ['-ing', 'past participle', 'infinitive', 'base form'], ans: 0, exp: 'Future Perfect Continuous = WILL + HAVE + BEEN + verb-ing.' },
            { q: '"They ___ here for 20 years by 2030."', opts: ['will live', 'will have lived', 'will have been living', 'are living'], ans: 2, exp: '"will have been living" emphasises the duration of the action.' },
            { q: 'Which sentence shows duration up to a future point?', opts: ['I will study tomorrow.', 'I will have studied for three hours by then.', 'I will be studying at 5pm.', 'I will study today.'], ans: 1, exp: '"will have studied for three hours" — Future Perfect (not Continuous) for duration before a future point.' }
          ]
        },
        {
          id: 'l9e',
          title: 'Future Time Clauses',
          titlePt: 'Orações Temporais Futuras',
          icon: '⏰',
          xp: 20,
          learn: {
            explanation: {
              en: 'After time conjunctions (when, as soon as, until, before, after), we use Present Simple — NOT "will" — even when talking about the future. The "will" goes in the other part of the sentence only.',
              pt: 'Depois de conjunções de tempo (when, as soon as, until, before, after), usamos o Presente Simples — NÃO "will" — mesmo quando falamos do futuro. O "will" vai apenas na outra parte da frase.'
            },
            examples: [
              { en: 'I will call you when I arrive. (NOT: when I will arrive)', pt: 'Vou ligar-te quando chegar. (NÃO: when I will arrive)' },
              { en: 'As soon as she wakes up, she will eat.', pt: 'Assim que ela acordar, ela vai comer.' },
              { en: 'Wait until the rain stops.', pt: 'Espera até a chuva parar.' }
            ],
            practice: [
              { q: '"I will call you when I ___ home."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Time clause = Present Simple: get (not will get).' },
              { q: '"As soon as she ___, we\'ll leave."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: 'As soon as + Present Simple.' }
            ]
          },
          qs: [
            { q: '"When I ___ home, I will call you."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Use Present Simple in time clauses (when, as soon as, until) after "will" in the main clause.' },
            { q: '"As soon as she ___ here, we will start."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: '"As soon as she arrives" — Present Simple in the time clause.' },
            { q: 'Which sentence uses the time clause correctly?', opts: ['I will wait until you will come.', 'I will wait until you come.', 'I will wait until you are coming.', 'I wait until you will come.'], ans: 1, exp: '"until you come" — Present Simple after until in a future time clause.' },
            { q: '"___ the time I finish, I will have completed 10 lessons."', opts: ['When', 'After', 'Before', 'By'], ans: 3, exp: '"BY the time I finish" — Future Perfect expresses the action completed by that future point.' },
            { q: 'What is the rule for future time clauses?', opts: ['Use will + infinitive', 'Use present tense (not will)', 'Use past tense', 'Use future continuous'], ans: 1, exp: 'In future time clauses (after when, as soon as, until, before, after, by the time), we use the present tense, not will.' }
          ]
        },
        {
          id: 'l9f',
          title: 'Predictions with Future Forms',
          titlePt: 'Previsões com Formas do Futuro',
          icon: '🔮',
          xp: 20,
          learn: {
            explanation: {
              en: 'Use "will" for opinions and strong predictions ("I think it will snow"). Use "going to" for predictions with visible evidence ("Look at those clouds — it\'s going to rain!"). "Might/could" express lower certainty.',
              pt: 'Usa "will" para opiniões e previsões fortes ("I think it will snow"). Usa "going to" para previsões com evidência visível ("Look at those clouds — it\'s going to rain!"). "Might/could" expressam menor certeza.'
            },
            examples: [
              { en: 'I think she will win the competition.', pt: 'Eu acho que ela vai ganhar a competição.' },
              { en: 'Look at the sky — it\'s going to storm!', pt: 'Olha para o céu — vai haver tempestade!' },
              { en: 'He might be late today.', pt: 'Ele pode chegar atrasado hoje.' }
            ],
            practice: [
              { q: 'Which shows the STRONGEST certainty?', opts: ['might rain', 'could rain', 'will rain', 'may rain'], ans: 2, exp: '"Will" = strongest certainty.' },
              { q: '"Look out! You ___ fall!" (visible evidence)', opts: ['will', 'are going to', 'might', 'may'], ans: 1, exp: 'Visible evidence → "going to".' }
            ]
          },
          qs: [
            { q: '"I think she ___ the exam." (opinion)', opts: ['will pass', 'is passing', 'passes', 'is going to pass'], ans: 0, exp: '"will pass" — predictions based on opinion or belief use "will".' },
            { q: '"Look at those clouds! It ___ rain." (evidence)', opts: ['will', 'is going to', 'may', 'might'], ans: 1, exp: '"is going to" — predictions based on visible evidence.' },
            { q: '"In 2050, people ___ live on Mars." (certain prediction)', opts: ['will', 'are going to', 'may', 'might'], ans: 0, exp: '"will" — strong prediction about the future.' },
            { q: '"I ___ be a millionaire one day!" (ambition)', opts: ['will', 'am going to', 'might', 'may'], ans: 0, exp: '"will" — expressing ambition or hope about the future.' },
            { q: 'Which is the most certain prediction?', opts: ['It will rain.', 'It might rain.', 'It could rain.', 'It may rain.'], ans: 0, exp: '"will" expresses the highest certainty; "might/could/may" express possibility.' }
          ]
        },
        {
          id: 'l9g',
          title: 'Review: Future Tenses',
          titlePt: 'Revisão: Tempos Futuros',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Quick recap: Will = spontaneous decisions, promises, opinions. Going to = plans and visible evidence. Future Continuous = action in progress at a future moment. Future Perfect = action completed before a future point.',
              pt: 'Revisão rápida: Will = decisões espontâneas, promessas, opiniões. Going to = planos e evidência visível. Future Continuous = acção em curso num momento futuro. Future Perfect = acção concluída antes de um ponto futuro.'
            },
            examples: [
              { en: 'This time next year, I will be living in London.', pt: 'A esta hora no próximo ano, estarei a viver em Londres.' },
              { en: 'By December, I will have passed my English exam.', pt: 'Em Dezembro, já terei passado no meu exame de inglês.' },
              { en: 'I\'m going to start a new job next Monday.', pt: 'Vou começar um novo emprego na próxima segunda-feira.' }
            ],
            practice: [
              { q: '"By next month, I ___ 30 lessons." (completed)', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: 'Completed by future point = Future Perfect.' },
              { q: '"At 5pm tomorrow, I ___ in a meeting." (in progress)', opts: ['will have met', 'will be meeting', 'meet', 'will meet'], ans: 1, exp: 'In progress at a future moment = Future Continuous.' }
            ]
          },
          qs: [
            { q: '"This time next week, I ___ in a hotel." (ongoing)', opts: ['will stay', 'will be staying', 'will have stayed', 'am staying'], ans: 1, exp: '"will be staying" = action in progress at a specific future time.' },
            { q: '"By next month, I ___ all the lessons." (completed)', opts: ['will finish', 'will have finished', 'am finishing', 'finish'], ans: 1, exp: '"will have finished" = Future Perfect for completion by a future point.' },
            { q: '"For 5 years by 2026, she ___ as a teacher." (duration)', opts: ['will work', 'will have been working', 'will be working', 'works'], ans: 1, exp: '"will have been working" — Future Perfect Continuous to emphasise duration.' },
            { q: '"When you arrive, I ___ for you at the station."', opts: ['will wait', 'will be waiting', 'will have waited', 'am waiting'], ans: 1, exp: '"will be waiting" = I will already be waiting at the time you arrive.' },
            { q: '"By the time we get there, the film ___ started."', opts: ['will have', 'will', 'is going to', 'has'], ans: 0, exp: '"will have started" — Future Perfect: completed before a future point.' }
          ]
        }
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT4);
