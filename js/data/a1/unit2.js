// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/unit2.js
// ═══════════════════════════════════════════════════════
// Unit ID: u2
// Part of UNITS_A1

const UNITS_A1_UNIT2 = [
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
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT2);
