// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit4.js
// ═══════════════════════════════════════════════════════
// Unit ID: u17
// Part of UNITS_B2 — Advanced Passive Voice

const UNITS_B2_UNIT4 = [
  {
    id:'u17', cefr:'B2', title:'Advanced Passive Voice', titlePt:'Voz Passiva Avançada',
    desc:'Shift the focus from the doer to the action, in any tense 🔧',
    descPt:'Muda o foco de quem faz para a acção, em qualquer tempo verbal 🔧',
    color:'#455a64', icon:'🔧', premium:false,
    lessons:[

      {id:'l17a', title:'Passive Across Tenses', titlePt:'Passiva em Vários Tempos', icon:'⏳', xp:25, learn:{
        explanation:{
          en:'The passive is formed with "be + past participle", changed to match whatever tense you need. Present simple: "The letter is sent." Past simple: "The letter was sent." Present perfect: "The letter has been sent." Future: "The letter will be sent." Only the form of "be" changes — the past participle stays the same.',
          pt:'A passiva forma-se com "be + particípio passado", ajustado ao tempo verbal necessário. Presente simples: "The letter is sent." Passado simples: "The letter was sent." Presente perfeito: "The letter has been sent." Futuro: "The letter will be sent." Só a forma de "be" muda — o particípio passado mantém-se igual.'
        },
        examples:[
          {en:'This report is checked every week.', pt:'Este relatório é verificado todas as semanas.'},
          {en:'The bridge was built in 1998.', pt:'A ponte foi construída em 1998.'},
          {en:'The results will be announced tomorrow.', pt:'Os resultados serão anunciados amanhã.'},
        ],
        practice:[
          {q:'"The documents ___ (sign) yesterday." (past simple passive)', opts:['are signed','were signed','have been signed','will be signed'], ans:1, exp:'Past simple passive: WERE signed.'},
          {q:'"The project ___ (finish) by next month." (future passive)', opts:['is finished','was finished','will be finished','has been finished'], ans:2, exp:'Future passive: WILL BE finished.'},
        ],
      }, qs:[
        {q:'"New rules ___ (introduce) next year." (future)',opts:['are introduced','were introduced','will be introduced','have been introduced'],ans:2,exp:'Future passive: WILL BE introduced.'},
        {q:'"The email ___ (send) an hour ago." (past)',opts:['is sent','was sent','has been sent','will be sent'],ans:1,exp:'Past simple passive: WAS sent.'},
        {q:'"Coffee ___ (grow) in many countries." (present, general fact)',opts:['is grown','was grown','has been grown','will be grown'],ans:0,exp:'Present simple passive for general facts: IS grown.'},
        {q:'"The homework ___ (already/complete)." (present perfect)',opts:['is already completed','was already completed','has already been completed','will already be completed'],ans:2,exp:'Present perfect passive: HAS ALREADY BEEN completed.'},
        {q:'What always stays the same when the passive changes tense?',opts:['the subject','the form of "be"','the past participle','the object'],ans:2,exp:'Only "be" changes tense; the past participle form is constant.'},
      ]},

      {id:'l17b', title:'Passive with Modals', titlePt:'Passiva com Modais', icon:'🔑', xp:25, learn:{
        explanation:{
          en:'Modal verbs combine with the passive using "modal + be + past participle": "The work must be finished today." "This form can be submitted online." "The problem should be solved soon." The modal never changes form, and "be" stays in its base form after it.',
          pt:'Os verbos modais combinam-se com a passiva usando "modal + be + particípio passado": "The work must be finished today." "This form can be submitted online." "The problem should be solved soon." O modal nunca muda de forma, e "be" mantém-se na forma base depois dele.'
        },
        examples:[
          {en:'This medicine must be taken twice a day.', pt:'Este remédio deve ser tomado duas vezes ao dia.'},
          {en:'The application can be completed online.', pt:'A candidatura pode ser preenchida online.'},
          {en:'The mistake should have been avoided.', pt:'O erro devia ter sido evitado.'},
        ],
        practice:[
          {q:'"The window ___ (can/repair) tomorrow."', opts:['can repair','can be repaired','can been repaired','can being repaired'], ans:1, exp:'Modal passive: CAN BE repaired.'},
          {q:'"All forms ___ (must/sign) before Friday."', opts:['must sign','must be signed','must been signed','must being signed'], ans:1, exp:'Modal passive: MUST BE signed.'},
        ],
      }, qs:[
        {q:'"The bill ___ (should/pay) by the end of the month."',opts:['should pay','should be paid','should been paid','should being paid'],ans:1,exp:'Modal passive: SHOULD BE paid.'},
        {q:'"This task ___ (can/finish) in two hours."',opts:['can finish','can be finished','can been finished','can being finished'],ans:1,exp:'Modal passive: CAN BE finished.'},
        {q:'"The mistake ___ (could/avoid) if we had checked earlier." (past modal passive)',opts:['could avoid','could be avoided','could have been avoided','could been avoid'],ans:2,exp:'Past modal passive: COULD HAVE BEEN avoided.'},
        {q:'"The password ___ (must/change) every 90 days."',opts:['must change','must be changed','must been changed','must being changed'],ans:1,exp:'Modal passive: MUST BE changed.'},
        {q:'The structure for modal passive is:',opts:['modal + verb + ing','modal + be + past participle','modal + have + past participle','modal + past simple'],ans:1,exp:'Modal + BE + past participle: must BE done, can BE fixed.'},
      ]},

      {id:'l17c', title:'The Get-Passive', titlePt:'A Passiva com "Get"', icon:'⚡', xp:25, learn:{
        explanation:{
          en:'In informal spoken English, "get" can replace "be" in the passive, especially for sudden, unplanned, or unfortunate events: "My phone got stolen." "She got promoted last month." "Get + past participle" feels more dynamic/informal than the standard "be" passive.',
          pt:'No inglês falado informal, "get" pode substituir "be" na passiva, especialmente para eventos súbitos, não planeados ou infelizes: "My phone got stolen." "She got promoted last month." "Get + particípio passado" soa mais dinâmico/informal do que a passiva padrão com "be".'
        },
        examples:[
          {en:'Our car got damaged in the storm.', pt:'O nosso carro ficou danificado na tempestade.'},
          {en:'He got fired for being late every day.', pt:'Ele foi despedido por chegar atrasado todos os dias.'},
          {en:'I got invited to the wedding at the last minute.', pt:'Fui convidado para o casamento à última da hora.'},
        ],
        practice:[
          {q:'"My bag ___ (get/steal) on the bus." (informal past)', opts:['got stole','got stolen','get stolen','was stealing'], ans:1, exp:'Get-passive past: GOT stolen.'},
          {q:'The get-passive is most common in:', opts:['formal legal writing','informal spoken English','academic essays','scientific reports'], ans:1, exp:'Get-passive is a hallmark of casual/spoken style.'},
        ],
      }, qs:[
        {q:'"He ___ (get/injure) playing football yesterday."',opts:['got injure','got injured','get injured','was injure'],ans:1,exp:'Get-passive past: GOT injured.'},
        {q:'"Careful, you might ___ (get/hurt)!"',opts:['get hurt','got hurt','getting hurt','gets hurt'],ans:0,exp:'Base form after "might": GET hurt.'},
        {q:'"Their house ___ (get/rob) last week."',opts:['got rob','got robbed','get robbed','was robbing'],ans:1,exp:'Get-passive past: GOT robbed.'},
        {q:'The get-passive is typically used for events that are:',opts:['formal and planned','sudden, unplanned or unfortunate','always positive','only in the future'],ans:1,exp:'Get-passive often highlights something sudden or unlucky happening.'},
        {q:'"She ___ (get/promote) to manager last year."',opts:['got promote','got promoted','gets promoted','was promote'],ans:1,exp:'Get-passive past: GOT promoted.'},
      ]},

      {id:'l17d', title:'Passive with Reporting Verbs', titlePt:'Passiva com Verbos de Relato', icon:'📰', xp:25, learn:{
        explanation:{
          en:'We often use the passive with reporting verbs (say, believe, think, report) to talk about general opinions without naming who holds them: "It is said that the company is losing money." or "The company is said to be losing money." Both forms are common in news and formal writing.',
          pt:'Usamos frequentemente a passiva com verbos de relato (say, believe, think, report) para falar de opiniões gerais sem nomear quem as tem: "It is said that the company is losing money." ou "The company is said to be losing money." Ambas as formas são comuns em notícias e escrita formal.'
        },
        examples:[
          {en:'It is believed that the suspect fled the country.', pt:'Acredita-se que o suspeito fugiu do país.'},
          {en:'The economy is expected to grow next year.', pt:'Espera-se que a economia cresça no próximo ano.'},
          {en:'He is said to be one of the richest men in the country.', pt:'Diz-se que ele é um dos homens mais ricos do país.'},
        ],
        practice:[
          {q:'"It ___ (report) that prices will rise." (impersonal passive)', opts:['is reported','was reporting','reports','reported'], ans:0, exp:'"It IS REPORTED that..." — impersonal passive with reporting verb.'},
          {q:'"The company ___ (think) to be planning layoffs." (personal passive)', opts:['thinks','is thought','thought','is thinking'], ans:1, exp:'"The company IS THOUGHT to be..." — personal passive structure.'},
        ],
      }, qs:[
        {q:'"It ___ (believe) that he left the country." (impersonal)',opts:['is believed','was believing','believes','believed'],ans:0,exp:'"It IS BELIEVED that..." — standard impersonal passive.'},
        {q:'"She ___ (say) to be an excellent doctor." (personal passive)',opts:['says','is said','said','saying'],ans:1,exp:'"She IS SAID to be..." — personal passive form.'},
        {q:'"The building ___ (think) to be over 200 years old."',opts:['thinks','is thought','thought','is thinking'],ans:1,exp:'"is thought to be" — personal passive with reporting verb.'},
        {q:'Which two forms exist for reporting-verb passives?',opts:['only impersonal (It is said that...)','only personal (X is said to...)','both impersonal and personal forms','neither, only active voice is used'],ans:2,exp:'Both "It is said that..." and "X is said to..." are correct and common.'},
        {q:'"It ___ (expect) that the match will be cancelled."',opts:['is expected','was expecting','expects','expected'],ans:0,exp:'Impersonal passive: "It IS EXPECTED that..."'},
      ]},

      {id:'l17e', title:'Advanced Passive Review', titlePt:'Revisão da Passiva Avançada', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: the passive works across all tenses (be + past participle, changing "be"), with modals (modal + be + past participle), informally with "get" for sudden/unplanned events, and with reporting verbs for general opinions (It is said that... / X is said to...).',
          pt:'Revisão rápida: a passiva funciona em todos os tempos verbais (be + particípio passado, mudando "be"), com modais (modal + be + particípio passado), informalmente com "get" para eventos súbitos, e com verbos de relato para opiniões gerais (It is said that... / X is said to...).'
        },
        examples:[
          {en:'The new bridge is being built right now. (present continuous passive)', pt:'A nova ponte está a ser construída neste momento. (passiva contínua presente)'},
          {en:'Your order should be delivered tomorrow. (modal passive)', pt:'A tua encomenda deve ser entregue amanhã. (passiva modal)'},
          {en:'He got caught cheating on the test. (get-passive)', pt:'Ele foi apanhado a copiar no teste. (passiva com get)'},
        ],
        practice:[
          {q:'"The house ___ (build) right now." (present continuous passive)', opts:['is built','is being built','was being built','has been built'], ans:1, exp:'Present continuous passive: IS BEING built.'},
          {q:'"The keys ___ (get/lose) last night." (informal past)', opts:['got lose','got lost','get lost','were losing'], ans:1, exp:'Get-passive past: GOT lost.'},
        ],
      }, qs:[
        {q:'"The road ___ (repair) at the moment." (present continuous passive)',opts:['is repaired','is being repaired','was repaired','has been repaired'],ans:1,exp:'Present continuous passive: IS BEING repaired.'},
        {q:'"This form ___ (must/complete) in ink."',opts:['must complete','must be completed','must been completed','must being completed'],ans:1,exp:'Modal passive: MUST BE completed.'},
        {q:'"Her wallet ___ (get/steal) at the market."',opts:['got steal','got stolen','get stolen','was steal'],ans:1,exp:'Get-passive: GOT stolen.'},
        {q:'"It ___ (say) that the castle is haunted."',opts:['is said','was saying','says','said'],ans:0,exp:'Impersonal passive with reporting verb: IT IS SAID that...'},
        {q:'"The parcel ___ (deliver) by Friday." (future passive)',opts:['is delivered','was delivered','will be delivered','has been delivered'],ans:2,exp:'Future passive: WILL BE delivered.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT4);
