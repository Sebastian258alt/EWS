// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit5.js
// ═══════════════════════════════════════════════════════
// Unit ID: u18
// Part of UNITS_B2 — Modals of Deduction

const UNITS_B2_UNIT5 = [
  {
    id:'u18', cefr:'B2', title:'Modals of Deduction', titlePt:'Modais de Dedução',
    desc:'Guess, speculate and draw conclusions like a detective 🕵️',
    descPt:'Adivinha, especula e tira conclusões como um detective 🕵️',
    color:'#8d6e63', icon:'🕵️', premium:false,
    lessons:[

      {id:'l18a', title:'Must, Might, Could, Can\'t (Present)', titlePt:'Must, Might, Could, Can\'t (Presente)', icon:'🤔', xp:25, learn:{
        explanation:{
          en:'We use modals to guess how certain we are about something happening NOW. "Must" = almost certain it\'s true: "He must be tired, he worked all night." "Might/Could" = it\'s possible: "She might be at home." "Can\'t" = almost certain it\'s NOT true: "That can\'t be his car, he sold it."',
          pt:'Usamos modais para adivinhar o quão certos estamos de algo que acontece AGORA. "Must" = quase certo que é verdade: "He must be tired, he worked all night." "Might/Could" = é possível: "She might be at home." "Can\'t" = quase certo que NÃO é verdade: "That can\'t be his car, he sold it."'
        },
        examples:[
          {en:'The lights are off — they must be asleep.', pt:'As luzes estão apagadas — devem estar a dormir.'},
          {en:'She might be busy, I\'m not sure.', pt:'Ela pode estar ocupada, não tenho certeza.'},
          {en:'That can\'t be true — I just spoke to him.', pt:'Isso não pode ser verdade — acabei de falar com ele.'},
        ],
        practice:[
          {q:'"He\'s wearing a suit — he ___ have an interview." (almost certain)', opts:['must','might','can\'t','should'], ans:0, exp:'Strong certainty something is true → MUST.'},
          {q:'"She ___ be at work, or maybe still at home." (uncertain)', opts:['must','might','can\'t','has to'], ans:1, exp:'Uncertain possibility → MIGHT (or could).'},
        ],
      }, qs:[
        {q:'"He never misses class — that ___ be him absent today." (almost certain it\'s NOT)',opts:['must','might','can\'t','should'],ans:2,exp:'Strong certainty something is FALSE → CAN\'T.'},
        {q:'"There\'s a note on the door — she ___ be out shopping." (likely guess)',opts:['must','can\'t','shouldn\'t','mustn\'t'],ans:0,exp:'Strong logical guess it\'s true → MUST.'},
        {q:'"I\'m not sure where he is — he ___ be at the gym."',opts:['must','might','can\'t','has to'],ans:1,exp:'Uncertain guess → MIGHT.'},
        {q:'"They can\'t be home; ___"',opts:['their car is in the driveway','the lights are all off','I just saw them','they always come home early'],ans:1,exp:'Evidence supporting "they are NOT home": lights are off.'},
        {q:'Which modal expresses the STRONGEST certainty that something is true?',opts:['might','could','must','may'],ans:2,exp:'"Must" expresses the strongest logical certainty among these options.'},
      ]},

      {id:'l18b', title:'Must Have, Might Have, Can\'t Have (Past)', titlePt:'Must Have, Might Have, Can\'t Have (Passado)', icon:'🔍', xp:25, learn:{
        explanation:{
          en:'To speculate about the PAST, use "modal + have + past participle". "Must have" = almost certainly happened: "She must have left already, her car is gone." "Might/Could have" = possibly happened: "He might have forgotten." "Can\'t have" = almost certainly did NOT happen: "He can\'t have finished, it\'s only been five minutes."',
          pt:'Para especular sobre o PASSADO, usa "modal + have + particípio passado". "Must have" = quase de certeza aconteceu: "She must have left already, her car is gone." "Might/Could have" = possivelmente aconteceu: "He might have forgotten." "Can\'t have" = quase de certeza NÃO aconteceu: "He can\'t have finished, it\'s only been five minutes."'
        },
        examples:[
          {en:'The ground is wet — it must have rained last night.', pt:'O chão está molhado — deve ter chovido ontem à noite.'},
          {en:'She might have missed the bus, that\'s why she\'s late.', pt:'Ela pode ter perdido o autocarro, é por isso que está atrasada.'},
          {en:'He can\'t have eaten yet, we only just got here.', pt:'Ele não pode ter comido ainda, acabámos de chegar.'},
        ],
        practice:[
          {q:'"The door is unlocked — someone ___ (forget) to lock it." (likely)', opts:['must have forgotten','might forget','can\'t have forgotten','should forget'], ans:0, exp:'Strong logical guess about the past → MUST HAVE forgotten.'},
          {q:'"He ___ (leave) yet, his coat is still here." (almost certainly not)', opts:['must have left','might have left','can\'t have left','should have left'], ans:2, exp:'Strong certainty something did NOT happen → CAN\'T HAVE left.'},
        ],
      }, qs:[
        {q:'"The cake is gone — someone ___ (eat) it." (strong guess)',opts:['must have eaten','might eat','can\'t have eaten','should eat'],ans:0,exp:'Strong past deduction → MUST HAVE eaten.'},
        {q:'"She looks tired — she ___ (not/sleep) well." (likely guess)',opts:['mustn\'t have slept','might not have slept','can\'t have slept','shouldn\'t have slept'],ans:1,exp:'Possible/likely guess → MIGHT NOT HAVE slept.'},
        {q:'"He can\'t have passed the exam — ___"',opts:['he studied all week','he got a perfect score','he didn\'t study at all','the teacher praised him'],ans:2,exp:'Evidence supporting "he did NOT pass": he didn\'t study.'},
        {q:'"They ___ (get) lost — they know this road well." (almost impossible)',opts:['must have got','might have got','can\'t have got','should have got'],ans:2,exp:'Strong certainty it did NOT happen → CAN\'T HAVE got lost.'},
        {q:'The structure for past speculation is:',opts:['modal + past simple','modal + have + past participle','modal + be + -ing','modal + had + -ing'],ans:1,exp:'MODAL + HAVE + past participle: must have gone, might have seen.'},
      ]},

      {id:'l18c', title:'Should Have (Criticism & Regret)', titlePt:'Should Have (Crítica e Arrependimento)', icon:'😔', xp:25, learn:{
        explanation:{
          en:'"Should have + past participle" is used to criticise a past action or express regret about something that didn\'t happen the right way: "You should have called me" (= you didn\'t call, and that was wrong). "I shouldn\'t have eaten so much" (= I ate too much, and I regret it).',
          pt:'"Should have + particípio passado" é usado para criticar uma acção passada ou exprimir arrependimento sobre algo que não correu como devia: "You should have called me" (= não me ligaste, e isso estava errado). "I shouldn\'t have eaten so much" (= comi demasiado, e arrependo-me).'
        },
        examples:[
          {en:'You should have told me the truth from the start.', pt:'Devias ter-me contado a verdade desde o início.'},
          {en:'I shouldn\'t have spent all my money on that phone.', pt:'Não devia ter gasto todo o meu dinheiro naquele telemóvel.'},
          {en:'We should have left earlier to avoid the traffic.', pt:'Devíamos ter saído mais cedo para evitar o trânsito.'},
        ],
        practice:[
          {q:'"I ___ (study) harder — I failed the test." (regret)', opts:['should study','should have studied','must have studied','can\'t have studied'], ans:1, exp:'Regret about the past → SHOULD HAVE studied.'},
          {q:'"You ___ (not/drive) so fast — it was dangerous." (criticism)', opts:['shouldn\'t drive','shouldn\'t have driven','mustn\'t have driven','can\'t have driven'], ans:1, exp:'Criticism of a past action → SHOULDN\'T HAVE driven.'},
        ],
      }, qs:[
        {q:'"He ___ (apologise) — what he said was very rude." (criticism)',opts:['should apologise','should have apologised','must apologise','can\'t apologise'],ans:1,exp:'Criticism of past behaviour → SHOULD HAVE apologised.'},
        {q:'"We ___ (bring) an umbrella — now we\'re all wet." (regret)',opts:['should bring','should have brought','must have brought','can\'t have brought'],ans:1,exp:'Regret about the past → SHOULD HAVE brought.'},
        {q:'"I ___ (not/say) that to her — she got upset." (regret about a mistake)',opts:['shouldn\'t say','shouldn\'t have said','mustn\'t have said','can\'t have said'],ans:1,exp:'Regret about a past mistake → SHOULDN\'T HAVE said.'},
        {q:'"Should have" is mainly used to express:',opts:['a future plan','a present possibility','criticism or regret about the past','a scientific fact'],ans:2,exp:'Should have + past participle = criticism/regret about something in the past.'},
        {q:'"They ___ (check) the weather before the trip." (criticism, they didn\'t)',opts:['should check','should have checked','must have checked','can\'t have checked'],ans:1,exp:'Criticism → SHOULD HAVE checked.'},
      ]},

      {id:'l18d', title:'Deduction vs Certainty vs Possibility', titlePt:'Dedução vs Certeza vs Possibilidade', icon:'📊', xp:25, learn:{
        explanation:{
          en:'Think of a scale: "must/can\'t" = very confident (90%+ certain), "should/shouldn\'t" (as prediction, not criticism) = fairly confident: "The bus should arrive soon," "might/could/may" = genuinely unsure (50/50 or less). Choosing the right modal shows exactly how sure you are.',
          pt:'Pensa numa escala: "must/can\'t" = muito confiante (90%+ de certeza), "should/shouldn\'t" (como previsão, não crítica) = razoavelmente confiante: "The bus should arrive soon," "might/could/may" = genuinamente incerto (50/50 ou menos). Escolher o modal certo mostra exactamente o quão seguro estás.'
        },
        examples:[
          {en:'He must be at home — his car is in the driveway. (very confident)', pt:'Ele deve estar em casa — o carro dele está na garagem. (muito confiante)'},
          {en:'The meeting should finish by 5pm. (fairly confident prediction)', pt:'A reunião deve terminar até às 17h. (previsão razoavelmente confiante)'},
          {en:'It might snow this weekend. (genuinely unsure)', pt:'Pode nevar este fim de semana. (genuinamente incerto)'},
        ],
        practice:[
          {q:'"The parcel ___ arrive today, but I\'m not 100% sure." (fairly confident prediction)', opts:['must','should','can\'t','might'], ans:1, exp:'Fairly confident prediction → SHOULD.'},
          {q:'"I don\'t know his plans — he ___ come to the party." (genuinely unsure)', opts:['must','should','might','can\'t'], ans:2, exp:'Genuine uncertainty → MIGHT.'},
        ],
      }, qs:[
        {q:'Which modal shows the HIGHEST confidence a thing is true?',opts:['might','could','must','may'],ans:2,exp:'"Must" = very high confidence.'},
        {q:'"She ___ be back by 6, but plans can change." (fairly confident, not 100%)',opts:['must','should','can\'t','might'],ans:1,exp:'Fairly confident prediction → SHOULD.'},
        {q:'"It ___ rain later, who knows." (genuinely unsure, 50/50)',opts:['must','should','might','can\'t'],ans:2,exp:'Genuine uncertainty → MIGHT.'},
        {q:'"That ___ be correct — I checked it three times." (very confident it IS true)',opts:['might','could','must','may'],ans:2,exp:'Very high confidence → MUST.'},
        {q:'Ordering from most to least confident: must, should, might — which order is correct?',opts:['might > should > must','must > should > might','should > must > might','they are all equal'],ans:1,exp:'Confidence scale: MUST (highest) > SHOULD > MIGHT (lowest/most uncertain).'},
      ]},

      {id:'l18e', title:'Modals of Deduction Review', titlePt:'Revisão dos Modais de Dedução', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: present deduction → must/might/could/can\'t + base verb. Past deduction → must/might/could/can\'t + have + past participle. Should have = criticism or regret about the past (not deduction). Confidence scale: must/can\'t (very sure) > should (fairly sure) > might/could/may (unsure).',
          pt:'Revisão rápida: dedução presente → must/might/could/can\'t + verbo base. Dedução passada → must/might/could/can\'t + have + particípio passado. Should have = crítica ou arrependimento sobre o passado (não dedução). Escala de confiança: must/can\'t (muito seguro) > should (razoavelmente seguro) > might/could/may (inseguro).'
        },
        examples:[
          {en:'She must be exhausted after that trip. (present deduction)', pt:'Ela deve estar exausta depois dessa viagem. (dedução presente)'},
          {en:'He must have forgotten his keys. (past deduction)', pt:'Ele deve ter esquecido as chaves. (dedução passada)'},
          {en:'You should have asked for help. (criticism/regret)', pt:'Devias ter pedido ajuda. (crítica/arrependimento)'},
        ],
        practice:[
          {q:'"She isn\'t answering — she ___ be busy." (present guess)', opts:['must','should have','can\'t have','must have'], ans:0, exp:'Present deduction → MUST + base verb.'},
          {q:'"They ___ (leave) already — the lights are off." (past guess)', opts:['must leave','must have left','should leave','can\'t leave'], ans:1, exp:'Past deduction → MUST HAVE left.'},
        ],
      }, qs:[
        {q:'"He ___ be lying — his story keeps changing." (present, confident)',opts:['must','can\'t','should','might not'],ans:0,exp:'Present strong deduction → MUST.'},
        {q:'"She ___ (miss) the flight — she is very organised." (past, almost impossible)',opts:['must have missed','might have missed','can\'t have missed','should have missed'],ans:2,exp:'Strong certainty NOT true → CAN\'T HAVE missed.'},
        {q:'"You ___ (tell) me earlier — now it\'s too late!" (regret/criticism)',opts:['should tell','should have told','must have told','can\'t have told'],ans:1,exp:'Criticism about the past → SHOULD HAVE told.'},
        {q:'"It ___ be him — I don\'t recognise that car." (uncertain)',opts:['must','might not','can\'t','should'],ans:1,exp:'Genuine uncertainty → MIGHT NOT.'},
        {q:'Which one expresses regret rather than a guess?',opts:['must have','might have','should have','can\'t have'],ans:2,exp:'"Should have" = regret/criticism, not speculation about what happened.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT5);
