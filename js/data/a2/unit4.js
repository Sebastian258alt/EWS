// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/a2/unit4.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2d
// Part of UNITS_A2 — Present Perfect

const UNITS_A2_UNIT4 = [
  {
    id:'u2d', cefr:'A2', title:'Present Perfect', titlePt:'Presente Perfeito',
    desc:'Connect the past to the present like a fluent speaker ⏱️',
    descPt:'Liga o passado ao presente como um falante fluente ⏱️',
    color:'#00b8d4', icon:'⏱️', premium:false,
    lessons:[

      {id:'l2d1', title:'Have/Has + Past Participle', titlePt:'Have/Has + Particípio Passado', icon:'🧩', xp:20, learn:{
        explanation:{
          en:'The Present Perfect is formed with "have/has + past participle". Use "have" with I/you/we/they and "has" with he/she/it: "I have visited Maputo." "She has finished her homework." Regular past participles end in -ed (worked, played); irregular ones must be memorised (gone, seen, done, eaten).',
          pt:'O Presente Perfeito forma-se com "have/has + particípio passado". Usa "have" com I/you/we/they e "has" com he/she/it: "I have visited Maputo." "She has finished her homework." Particípios regulares terminam em -ed (worked, played); os irregulares têm de ser memorizados (gone, seen, done, eaten).'
        },
        examples:[
          {en:'I have lived in Matola for five years.', pt:'Vivo em Matola há cinco anos.'},
          {en:'He has already eaten lunch.', pt:'Ele já almoçou.'},
          {en:'They have travelled to Nampula twice.', pt:'Eles viajaram a Nampula duas vezes.'},
        ],
        practice:[
          {q:'Complete: "She ___ finished the report."', opts:['have','has','had','having'], ans:1, exp:'He/She/It + HAS. She has finished.'},
          {q:'What is the past participle of "go"?', opts:['goed','went','gone','going'], ans:2, exp:'Go → went (past simple) → gone (past participle, irregular).'},
        ],
      }, qs:[
        {q:'"I ___ seen that movie before."',opts:['have','has','had','am'],ans:0,exp:'I + HAVE. I have seen.'},
        {q:'"He ___ never tried sushi."',opts:['have','has','having','had'],ans:1,exp:'He + HAS. He has never tried.'},
        {q:'Past participle of "eat":',opts:['ate','eaten','eating','eats'],ans:1,exp:'Eat → ate (past simple) → eaten (past participle).'},
        {q:'Which sentence is CORRECT?',opts:['She have worked here.','She has worked here.','She has work here.','She having worked here.'],ans:1,exp:'"She HAS worked here" — has + past participle.'},
        {q:'The Present Perfect connects:',opts:['only the future','only the past','the past to the present','two future actions'],ans:2,exp:'Present Perfect shows an action in the past that is relevant NOW.'},
      ]},

      {id:'l2d2', title:'Ever & Never', titlePt:'Ever & Never', icon:'❓', xp:20, learn:{
        explanation:{
          en:'"Ever" (= at any time) is used in questions to ask about life experience: "Have you ever visited Beira?" "Never" (= at no time) is used in negative statements: "I have never eaten oysters." Both words go between the subject and the past participle.',
          pt:'"Ever" (= alguma vez) é usado em perguntas sobre experiências de vida: "Have you ever visited Beira?" "Never" (= nunca) é usado em afirmações negativas: "I have never eaten oysters." Ambas as palavras ficam entre o sujeito e o particípio passado.'
        },
        examples:[
          {en:'Have you ever been to Inhambane?', pt:'Alguma vez foste a Inhambane?'},
          {en:'I have never driven a car.', pt:'Nunca conduzi um carro.'},
          {en:'Has she ever met the president?', pt:'Ela alguma vez conheceu o presidente?'},
        ],
        practice:[
          {q:'"Have you ___ eaten mopane worms?"', opts:['ever','never','already','yet'], ans:0, exp:'Ever = alguma vez. Used in questions about experience.'},
          {q:'"I have ___ been to Europe."', opts:['ever','never','yet',"don't"], ans:1, exp:'Never = nunca. Used in negative/affirmative statements meaning "at no time".'},
        ],
      }, qs:[
        {q:'"___ you ever visited Gaza province?"',opts:['Do','Have','Did','Are'],ans:1,exp:'"Have you ever...?" is the question form for life experience.'},
        {q:'"He has ___ been late for work."',opts:['ever','never','already','yet'],ans:1,exp:'Never = at no time. "He has never been late" = nunca chegou atrasado.'},
        {q:'"Ever" is mainly used in:',opts:['negative statements','questions','commands','the future tense'],ans:1,exp:'Ever is typically used in questions: "Have you ever...?"'},
        {q:'Where does "never" go in the sentence?',opts:['At the very end','Before the subject','Between subject and past participle','After the past participle'],ans:2,exp:'Subject + HAVE/HAS + NEVER + past participle: "I have never seen it."'},
        {q:'"Has she ever tried xima?" is asking about:',opts:['a specific time in the past','her life experience in general','a future plan','a daily habit'],ans:1,exp:'"Ever" questions ask about general life experience, not a specific moment.'},
      ]},

      {id:'l2d3', title:'Already, Yet & Just', titlePt:'Already, Yet & Just', icon:'⏳', xp:20, learn:{
        explanation:{
          en:'"Already" (= before now, sooner than expected) is used in positive sentences: "I have already paid the bill." "Yet" (= up to now) is used in negatives and questions, usually at the end: "I haven\'t finished yet." "Have you eaten yet?" "Just" (= a very short time ago) goes before the past participle: "She has just arrived."',
          pt:'"Already" (= já) é usado em frases afirmativas: "I have already paid the bill." "Yet" (= ainda) é usado em negativas e perguntas, normalmente no fim: "I haven\'t finished yet." "Have you eaten yet?" "Just" (= agora mesmo) vem antes do particípio passado: "She has just arrived."'
        },
        examples:[
          {en:'I have already done my homework.', pt:'Já fiz o meu trabalho de casa.'},
          {en:'She hasn\'t called me yet.', pt:'Ela ainda não me ligou.'},
          {en:'We have just arrived at the airport.', pt:'Acabámos de chegar ao aeroporto.'},
        ],
        practice:[
          {q:'"I have ___ seen that film — twice!"', opts:['yet','already','still','ago'], ans:1, exp:'Already = já. Used in positive sentences.'},
          {q:'"Have you finished ___?"', opts:['already','just','yet','never'], ans:2, exp:'Yet is used at the end of questions and negatives.'},
        ],
      }, qs:[
        {q:'"He has ___ left — you just missed him!"',opts:['yet','already','just','ever'],ans:2,exp:'Just = há pouco tempo. "He has just left" = acabou de sair.'},
        {q:'"I haven\'t finished my homework ___."',opts:['already','just','yet','ever'],ans:2,exp:'Yet at the end of a negative sentence = ainda não.'},
        {q:'"She has ___ won three competitions this year."',opts:['yet','already','just now','ago'],ans:1,exp:'Already = já (before now, more than expected).'},
        {q:'Which word usually goes at the END of the sentence?',opts:['just','already','yet','never'],ans:2,exp:'"Yet" usually appears at the end: "Have you called yet?"'},
        {q:'"We have ___ opened the shop — come in!"',opts:['yet','never','just','ago'],ans:2,exp:'Just = a moment ago. "We have just opened" = acabámos de abrir.'},
      ]},

      {id:'l2d4', title:'Present Perfect vs Past Simple', titlePt:'Present Perfect vs Passado Simples', icon:'⚖️', xp:25, learn:{
        explanation:{
          en:'Use Past Simple for a finished action at a SPECIFIC time in the past: "I visited Maputo in 2019." Use Present Perfect when the time is NOT specific or the result matters now: "I have visited Maputo." Key clue words: Past Simple → yesterday, last year, in 2019, ago. Present Perfect → ever, never, already, yet, just, for, since.',
          pt:'Usa o Passado Simples para uma ação terminada num momento ESPECÍFICO do passado: "I visited Maputo in 2019." Usa o Presente Perfeito quando o momento NÃO é específico ou o resultado importa agora: "I have visited Maputo." Palavras-chave: Passado Simples → yesterday, last year, in 2019, ago. Presente Perfeito → ever, never, already, yet, just, for, since.'
        },
        examples:[
          {en:'I have finished the exam. (result matters now)', pt:'Terminei o exame. (o resultado importa agora)'},
          {en:'I finished the exam at 10am yesterday. (specific time)', pt:'Terminei o exame às 10h de ontem. (momento específico)'},
          {en:'Have you ever eaten matapa? — Yes, I ate it last week.', pt:'Alguma vez comeste matapa? — Sim, comi na semana passada.'},
        ],
        practice:[
          {q:'"I ___ my homework yesterday." (specific time)', opts:['have done','did','have did','has done'], ans:1, exp:'"Yesterday" = specific time → Past Simple: "I did my homework yesterday."'},
          {q:'"I ___ never ___ to Japan." (no specific time)', opts:["have / been","did / go","has / been","was / been"], ans:0, exp:'No specific time + "never" → Present Perfect: "I have never been."'},
        ],
      }, qs:[
        {q:'"She ___ the exam last Monday."',opts:['has passed','passed','have passed','is passing'],ans:1,exp:'"Last Monday" = specific past time → Past Simple: passed.'},
        {q:'"I ___ my keys. I can\'t find them anywhere!" (result matters now)',opts:['lost','have lost','was losing','lose'],ans:1,exp:'No specific time, result matters now → Present Perfect: have lost.'},
        {q:'Which clue word signals Past Simple?',opts:['ever','since','ago','yet'],ans:2,exp:'"Ago" always pairs with Past Simple: "two years ago I moved."'},
        {q:'Which clue word signals Present Perfect?',opts:['yesterday','last year','since 2020','in 2019'],ans:2,exp:'"Since" pairs with Present Perfect to show duration from a point to now.'},
        {q:'"When ___ you arrive?" — "I arrived at 6pm."',opts:['have','did','has','do'],ans:1,exp:'"When" + specific time answer → Past Simple question: "When did you arrive?"'},
      ]},

      {id:'l2d5', title:'For & Since', titlePt:'For & Since (Duração)', icon:'📏', xp:25, learn:{
        explanation:{
          en:'"For" + a period of time (how long): "I have lived here for three years." "Since" + a starting point (when it began): "I have lived here since 2021." Both are used with the Present Perfect to talk about something that started in the past and continues now.',
          pt:'"For" + um período de tempo (quanto tempo): "I have lived here for three years." "Since" + um ponto de início (quando começou): "I have lived here since 2021." Ambos são usados com o Presente Perfeito para falar de algo que começou no passado e continua agora.'
        },
        examples:[
          {en:'I have studied English for two years.', pt:'Estudo inglês há dois anos.'},
          {en:'She has worked here since January.', pt:'Ela trabalha aqui desde Janeiro.'},
          {en:'They have known each other for a long time.', pt:'Eles conhecem-se há muito tempo.'},
        ],
        practice:[
          {q:'"I have lived in Maputo ___ 2015."', opts:['for','since','ago','yet'], ans:1, exp:'Since + starting point (a year, date, event): since 2015.'},
          {q:'"She has taught English ___ six years."', opts:['since','for','ago','already'], ans:1, exp:'For + a period of time: for six years.'},
        ],
      }, qs:[
        {q:'"He has played football ___ he was seven."',opts:['for','since','ago','yet'],ans:1,exp:'Since + starting point: "since he was seven" (that year/age).'},
        {q:'"We have lived here ___ ten years."',opts:['since','for','ago','never'],ans:1,exp:'For + duration/period: "for ten years".'},
        {q:'Which pairs with "for"?',opts:['a specific starting point','a period of time','last year','2010'],ans:1,exp:'"For" always pairs with a length/period of time (for two hours, for a week).'},
        {q:'Which pairs with "since"?',opts:['three days','a month','2 years','last Monday'],ans:3,exp:'"Since" pairs with a specific starting point: since last Monday, since 2019, since I was young.'},
        {q:'"I haven\'t seen her ___ the wedding."',opts:['for','since','ago','yet'],ans:1,exp:'Since + a specific event/point: since the wedding.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A2_UNIT4);
