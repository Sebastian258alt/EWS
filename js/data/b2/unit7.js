// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit7.js
// ═══════════════════════════════════════════════════════
// Unit ID: u20
// Part of UNITS_B2 — Advanced Passive Voice

const UNITS_B2_UNIT7 = [
  {
      id: 'u20',
      cefr: 'B2',
      title: 'Advanced Passive Voice',
      titlePt: 'Voz Passiva Avançada',
      desc: 'Master the passive in every tense and situation 🎭',
      descPt: 'Domina a voz passiva em qualquer tempo verbal e situação 🎭',
      color: '#2d6a4f',
      icon: '🎭',
      premium: false,
      lessons: [
        {
          id: 'l20a',
          title: 'The Get-Passive',
          titlePt: 'A Passiva com Get',
          icon: '⚡',
          xp: 20,
          learn: {
            explanation: {
              en: 'In informal English, GET can replace BE in the passive, especially for sudden, unplanned, or negative events. "My bike got stolen" sounds more informal and dynamic than "My bike was stolen." Structure: subject + get + past participle.',
              pt: 'No inglês informal, GET pode substituir BE na passiva, especialmente para eventos súbitos, não planeados ou negativos. "My bike got stolen" soa mais informal e dinâmico do que "My bike was stolen." Estrutura: sujeito + get + particípio passado.'
            },
            examples: [
              { en: 'The window got broken during the storm.', pt: 'A janela partiu-se durante a tempestade.' },
              { en: 'She got promoted after just one year.', pt: 'Ela foi promovida depois de apenas um ano.' },
              { en: 'Our flight got delayed because of the weather.', pt: 'O nosso voo atrasou-se por causa do tempo.' }
            ],
            practice: [
              { q: '"His car ___ damaged in the accident." (informal)', opts: ['got', 'has', 'did', 'made'], ans: 0, exp: '"got damaged" — informal get-passive for a sudden event.' },
              { q: 'The get-passive is typically used for:', opts: ['formal reports', 'sudden or unplanned events', 'scientific writing', 'legal documents'], ans: 1, exp: 'It suits informal, dynamic, often negative events.' }
            ]
          },
          qs: [
            { q: '"The kids ___ soaked walking home in the rain."', opts: ['got', 'have', 'did', 'were being'], ans: 0, exp: '"got soaked" — informal get-passive.' },
            { q: '"My phone ___ stolen on the chapa yesterday."', opts: ['got', 'has', 'made', 'did'], ans: 0, exp: '"got stolen" — sudden negative event, informal register.' },
            { q: 'Which sentence uses the get-passive correctly?', opts: ['She got fired last week.', 'She got fire last week.', 'She getting fired last week.', 'She got fired being last week.'], ans: 0, exp: '"got fired" — get + past participle.' },
            { q: '"They ___ married in a small ceremony in Inhambane."', opts: ['got', 'made', 'did', 'have'], ans: 0, exp: '"got married" is a very common get-passive expression.' },
            { q: 'Compared to BE, the get-passive sounds:', opts: ['more formal', 'more informal and dynamic', 'grammatically incorrect', 'used only in writing'], ans: 1, exp: 'GET adds an informal, more dynamic feel to the passive.' }
          ]
        },
        {
          id: 'l20b',
          title: 'Passive with Modal Verbs',
          titlePt: 'Passiva com Verbos Modais',
          icon: '🔧',
          xp: 20,
          learn: {
            explanation: {
              en: 'Modals combine with the passive using: modal + BE + past participle. "The report must be finished today." For past modal passives: modal + HAVE BEEN + past participle. "The report should have been finished yesterday."',
              pt: 'Os modais combinam-se com a passiva usando: modal + BE + particípio passado. "The report must be finished today." Para passivas modais no passado: modal + HAVE BEEN + particípio. "The report should have been finished yesterday."'
            },
            examples: [
              { en: 'This form must be signed before Friday.', pt: 'Este formulário tem de ser assinado antes de sexta-feira.' },
              { en: 'The bridge should have been repaired years ago.', pt: 'A ponte devia ter sido reparada há anos.' },
              { en: 'The results can be checked online.', pt: 'Os resultados podem ser verificados online.' }
            ],
            practice: [
              { q: '"The documents ___ ___ by tomorrow." (obligation, present/future)', opts: ['must / signed', 'must / be signed', 'must / being signed', 'must / to be signed'], ans: 1, exp: '"must be signed" — modal + BE + past participle.' },
              { q: '"The problem ___ ___ ___ earlier." (past, missed obligation)', opts: ['should / be / fixed', 'should / have been / fixed', 'should / have / fixed', 'should / been / fixed'], ans: 1, exp: '"should have been fixed" — modal + HAVE BEEN + participle.' }
            ]
          },
          qs: [
            { q: '"The rules ___ ___ by every student."', opts: ['must / followed', 'must / be followed', 'must / being followed', 'must / to follow'], ans: 1, exp: '"must be followed" — correct modal passive structure.' },
            { q: '"The email ___ ___ already." (past modal passive)', opts: ['should / send', 'should / be sent', 'should / have been sent', 'should / having sent'], ans: 2, exp: '"should have been sent" — modal + have been + participle.' },
            { q: '"This medicine ___ ___ with food."', opts: ['can / take', 'can / be taken', 'can / being taken', 'can / to be taken'], ans: 1, exp: '"can be taken" — modal + BE + past participle.' },
            { q: 'What is the correct structure for past modal passive?', opts: ['modal + be + participle', 'modal + have + participle', 'modal + have been + participle', 'modal + been + participle'], ans: 2, exp: 'Past modal passive = modal + HAVE BEEN + past participle.' },
            { q: '"The mistake ___ ___ before it caused problems." (regret)', opts: ['could / be fixed', 'could / have been fixed', 'could / having fixed', 'could / fixed'], ans: 1, exp: '"could have been fixed" — missed opportunity, modal passive past.' }
          ]
        },
        {
          id: 'l20c',
          title: 'Passive with Reporting Verbs',
          titlePt: 'Passiva com Verbos de Relato',
          icon: '📰',
          xp: 25,
          learn: {
            explanation: {
              en: 'News and formal English often use: IT + IS/WAS + reporting verb (said, believed, thought, reported) + THAT clause. "It is said that the company is expanding." Alternative: subject + IS/WAS + reporting verb + TO + infinitive: "The company is said to be expanding."',
              pt: 'O inglês jornalístico e formal usa frequentemente: IT + IS/WAS + verbo de relato (said, believed, thought, reported) + oração com THAT. "It is said that the company is expanding." Alternativa: sujeito + IS/WAS + verbo de relato + TO + infinitivo: "The company is said to be expanding."'
            },
            examples: [
              { en: 'It is believed that the price will rise soon.', pt: 'Acredita-se que o preço vai subir em breve.' },
              { en: 'The suspect is thought to be hiding in Maputo.', pt: 'Acredita-se que o suspeito está escondido em Maputo.' },
              { en: 'It was reported that the flight had been cancelled.', pt: 'Foi relatado que o voo tinha sido cancelado.' }
            ],
            practice: [
              { q: '"It ___ that the economy is improving."', opts: ['is said', 'says', 'is saying', 'said'], ans: 0, exp: '"It is said that..." — impersonal passive reporting structure.' },
              { q: '"The company ___ to be losing money." (alternative structure)', opts: ['is said', 'says', 'is saying', 'said'], ans: 0, exp: '"is said to be" — subject + passive reporting verb + to infinitive.' }
            ]
          },
          qs: [
            { q: '"It ___ that thousands attended the festival."', opts: ['is estimated', 'estimates', 'is estimating', 'estimated'], ans: 0, exp: '"It is estimated that..." — passive reporting structure.' },
            { q: '"He ___ to have left the country already."', opts: ['is believed', 'believes', 'is believing', 'believed'], ans: 0, exp: '"is believed to have left" — passive reporting + perfect infinitive.' },
            { q: '"It ___ that prices will fall next year."', opts: ['is expected', 'expects', 'is expecting', 'expected'], ans: 0, exp: '"It is expected that..." — passive reporting structure.' },
            { q: 'Which is the correct alternative structure to "It is said that she is rich"?', opts: ['She is said being rich.', 'She is said to be rich.', 'She says to be rich.', 'She is saying to be rich.'], ans: 1, exp: '"is said to be" — subject + passive verb + to infinitive.' },
            { q: '"The building ___ to have been constructed in the 1800s."', opts: ['is thought', 'thinks', 'is thinking', 'thought'], ans: 0, exp: '"is thought to have been" — passive reporting + perfect infinitive.' }
          ]
        },
        {
          id: 'l20d',
          title: 'Passive with Two Objects',
          titlePt: 'Passiva com Dois Objetos',
          icon: '🎁',
          xp: 25,
          learn: {
            explanation: {
              en: 'Verbs like GIVE, SEND, OFFER, SHOW have two objects (person + thing). Either can become the passive subject: "They gave her an award" → "She was given an award" (more common) OR "An award was given to her."',
              pt: 'Verbos como GIVE, SEND, OFFER, SHOW têm dois objetos (pessoa + coisa). Qualquer um pode tornar-se o sujeito da passiva: "They gave her an award" → "She was given an award" (mais comum) OU "An award was given to her."'
            },
            examples: [
              { en: 'She was given a scholarship to study abroad.', pt: 'Ela recebeu uma bolsa de estudo para estudar no estrangeiro.' },
              { en: 'We were sent the wrong invoice by mistake.', pt: 'Enviaram-nos a fatura errada por engano.' },
              { en: 'He was offered a better position at the bank.', pt: 'Ofereceram-lhe uma posição melhor no banco.' }
            ],
            practice: [
              { q: '"They gave him a prize" → passive with PERSON as subject:', opts: ['A prize was given him.', 'He was given a prize.', 'He was given by a prize.', 'A prize gave him.'], ans: 1, exp: '"He was given a prize" — the person becomes the subject.' },
              { q: '"Someone showed us the results" → passive:', opts: ['We were shown the results.', 'The results were shown we.', 'We shown the results.', 'The results us were shown.'], ans: 0, exp: '"We were shown the results" — person as subject, natural passive.' }
            ]
          },
          qs: [
            { q: '"The company sent her a contract" → passive:', opts: ['She was sent a contract.', 'A contract sent her.', 'She sent a contract.', 'A contract was sending her.'], ans: 0, exp: '"She was sent a contract" — person becomes the subject.' },
            { q: '"They offered him the job" → passive:', opts: ['He was offered the job.', 'The job was offering him.', 'He offered the job.', 'The job him was offered.'], ans: 0, exp: '"He was offered the job" — most natural passive form.' },
            { q: '"Someone told me the news" → passive:', opts: ['I was told the news.', 'The news was telling me.', 'I told the news.', 'The news me was told.'], ans: 0, exp: '"I was told the news" — person as subject is the common form.' },
            { q: 'With two-object verbs, which subject is MORE common in the passive?', opts: ['the thing', 'the person', 'both equally', 'neither can be used'], ans: 1, exp: 'Making the person the subject is the more natural, common choice.' },
            { q: '"They awarded her the prize" → passive:', opts: ['She was awarded the prize.', 'The prize was awarding her.', 'She awarded the prize.', 'The prize her was awarded.'], ans: 0, exp: '"She was awarded the prize" — person as subject.' }
          ]
        },
        {
          id: 'l20e',
          title: 'Unit Review',
          titlePt: 'Revisão da Unidade',
          icon: '🧠',
          xp: 30,
          learn: {
            explanation: {
              en: 'Review: the informal get-passive for sudden events, passive with modals (modal + be/have been + participle), passive reporting structures (it is said that / is said to), and passive sentences built from two-object verbs.',
              pt: 'Revisão: a passiva informal com get para eventos súbitos, passiva com modais (modal + be/have been + particípio), estruturas de relato na passiva (it is said that / is said to) e frases passivas construídas a partir de verbos com dois objetos.'
            },
            examples: [
              { en: 'The car got fixed just in time for the trip.', pt: 'O carro foi arranjado mesmo a tempo da viagem.' },
              { en: 'The application must be submitted by Friday.', pt: 'A candidatura tem de ser submetida até sexta-feira.' },
              { en: 'She was given the keys on her first day.', pt: 'Deram-lhe as chaves no primeiro dia.' }
            ],
            practice: [
              { q: '"The window ___ broken during the game." (informal)', opts: ['got', 'has', 'did', 'made'], ans: 0, exp: '"got broken" — informal get-passive.' },
              { q: '"He ___ to be working abroad." (passive reporting)', opts: ['is said', 'says', 'is saying', 'said'], ans: 0, exp: '"is said to be" — passive reporting structure.' }
            ]
          },
          qs: [
            { q: '"Our luggage ___ lost at the airport." (informal, sudden)', opts: ['got', 'has', 'did', 'made'], ans: 0, exp: '"got lost" — informal get-passive for an unplanned event.' },
            { q: '"The work ___ ___ by Monday." (obligation)', opts: ['must / finish', 'must / be finished', 'must / finished', 'must / to finish'], ans: 1, exp: '"must be finished" — modal passive.' },
            { q: '"It ___ that the region receives heavy rainfall in December."', opts: ['is known', 'knows', 'is knowing', 'known'], ans: 0, exp: '"It is known that..." — passive reporting structure.' },
            { q: '"They lent her the money" → passive:', opts: ['She was lent the money.', 'The money was lending her.', 'She lent the money.', 'The money her was lent.'], ans: 0, exp: '"She was lent the money" — person as subject.' },
            { q: '"The report ___ ___ ___ before the deadline." (past regret)', opts: ['should / be / finished', 'should / have been / finished', 'should / have / finished', 'should / been / finish'], ans: 1, exp: '"should have been finished" — past modal passive.' }
          ]
        }
      ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT7);
