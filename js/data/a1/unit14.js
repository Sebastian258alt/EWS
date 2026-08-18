// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/a1/unit14.js
// ═══════════════════════════════════════════════════════
// Unit ID: u1j  |  CEFR: B1
// Passive Voice

const UNITS_A1_UNIT14 = [
  {
    id:'u1j', cefr:'B1', title:'Passive Voice', titlePt:'Voz Passiva',
    desc:'Shift the focus from who acts to what happens 🔄',
    descPt:'Muda o foco de quem age para o que acontece 🔄',
    color:'#ff5722', icon:'🔄', premium:false,
    lessons:[
      {id:'l1j1', title:'What is the Passive?', titlePt:'O que é a Voz Passiva?', icon:'📖', xp:20, learn:{
        explanation:{
          en:'Active: The subject DOES the action. "Pedro built the house." Passive: The subject RECEIVES the action. "The house was built (by Pedro)." Formula: BE + Past Participle. Use passive when the doer is unknown, unimportant, or obvious.',
          pt:'Activa: O sujeito FAZ a acção. "Pedro built the house." Passiva: O sujeito RECEBE a acção. "The house was built (by Pedro)." Fórmula: BE + Particípio Passado. Usa a passiva quando quem faz não é conhecido, é irrelevante ou é óbvio.'
        },
        examples:[
          {en:'Active: The chef cooked the meal.', pt:'Activa: O cozinheiro preparou a refeição.'},
          {en:'Passive: The meal was cooked (by the chef).', pt:'Passiva: A refeição foi preparada (pelo cozinheiro).'},
          {en:'English is spoken in many countries.', pt:'O inglês é falado em muitos países.'},
        ],
        practice:[
          {q:'Passive formula:', opts:['Subject + verb','BE + past participle','Have + past participle','Will + verb'], ans:1, exp:'Passive = BE (in the right tense) + Past Participle.'},
          {q:'"The window was broken." This is:', opts:['active voice','future tense','passive voice','reported speech'], ans:2, exp:'"Was broken" = BE + PP. This is PASSIVE voice.'},
        ],
      }, qs:[
        {q:'Passive voice focuses on:',opts:['who does the action','what happens to the subject','the future','a question'],ans:1,exp:'Passive focuses on the OBJECT/receiver of the action, not the doer.'},
        {q:'"Coffee is grown in Ethiopia." This sentence is:',opts:['active','passive','a question','reported speech'],ans:1,exp:'"is grown" = BE + PP = PASSIVE.'},
        {q:'To make passive, you need:',opts:['have + past participle','be + past participle','will + infinitive','do + base verb'],ans:1,exp:'Passive = BE (is/was/will be etc.) + Past Participle.'},
        {q:'When do we prefer passive?',opts:['When the doer is important','When we want to emphasise the action/result','When talking about the future','When asking questions'],ans:1,exp:'Passive is preferred when the DOER is unknown, obvious, or unimportant.'},
        {q:'"Somebody stole my phone." → Passive: "___ my phone."',opts:['Someone has stolen','My phone was stolen','My phone is stolen','They stolen'],ans:1,exp:'"My phone WAS STOLEN." — was + stolen (past participle).'},
      ]},
      {id:'l1j2', title:'Present Simple Passive', titlePt:'Passiva no Presente Simples', icon:'⭕', xp:25, learn:{
        explanation:{
          en:'Present Simple Passive = IS/ARE + Past Participle. Use "is" for singular, "are" for plural. "Rice is eaten every day in Mozambique." "Cars are made in factories." Negative: "It is not allowed." Question: "Is it sold here?"',
          pt:'Passiva no Presente Simples = IS/ARE + Particípio Passado. Usa "is" para singular, "are" para plural. "Rice is eaten every day in Mozambique." "Cars are made in factories." Negativa: "It is not allowed." Pergunta: "Is it sold here?"'
        },
        examples:[
          {en:'English is taught in all schools here.', pt:'O inglês é ensinado em todas as escolas aqui.'},
          {en:'These products are exported to many countries.', pt:'Estes produtos são exportados para muitos países.'},
          {en:'Is the shop open on Sundays?', pt:'A loja está aberta aos domingos?'},
        ],
        practice:[
          {q:'"The letters ___ delivered every morning."', opts:['is','are','was','were'], ans:1, exp:'"Letters" is plural → ARE delivered.'},
          {q:'"Portuguese ___ spoken in Mozambique."', opts:['are','were','is','be'], ans:2, exp:'"Portuguese" is singular → IS spoken.'},
        ],
      }, qs:[
        {q:'"Football ___ played all over the world."',opts:['are','is','was','be'],ans:1,exp:'"Football" is singular → IS played. Present Simple Passive.'},
        {q:'"The reports ___ written every Friday."',opts:['is','was','are','were'],ans:2,exp:'"Reports" is plural → ARE written.'},
        {q:'Negative Present Simple Passive: "It ___ allowed here."',opts:['is not','are not','was not','not is'],ans:0,exp:'"Is not allowed" — singular subject + is + not + past participle.'},
        {q:'Question form: "___ Portuguese spoken in Brazil?"',opts:['Do','Does','Is','Are'],ans:2,exp:'"IS Portuguese spoken...?" — IS comes first in questions.'},
        {q:'"Cashew nuts ___ grown in northern Mozambique."',opts:['is','are','was','will'],ans:1,exp:'"Cashew nuts" = plural → ARE grown. Present Simple Passive.'},
      ]},
      {id:'l1j3', title:'Past Simple Passive', titlePt:'Passiva no Passado Simples', icon:'⏮️', xp:25, learn:{
        explanation:{
          en:'Past Simple Passive = WAS/WERE + Past Participle. Use "was" for singular, "were" for plural. "The bridge was built in 1955." "Many houses were damaged in the flood." By + agent can be added to say WHO did it.',
          pt:'Passiva no Passado Simples = WAS/WERE + Particípio Passado. Usa "was" para singular, "were" para plural. "The bridge was built in 1955." "Many houses were damaged in the flood." Podes adicionar by + agente para dizer QUEM fez.'
        },
        examples:[
          {en:'Mozambique was colonised by Portugal.', pt:'Moçambique foi colonizado por Portugal.'},
          {en:'The thieves were caught by the police.', pt:'Os ladrões foram apanhados pela polícia.'},
          {en:'When was the Maputo cathedral built?', pt:'Quando foi construída a catedral de Maputo?'},
        ],
        practice:[
          {q:'"The car ___ stolen last night."', opts:['is','are','was','were'], ans:2, exp:'"The car" is singular → WAS stolen.'},
          {q:'"The windows ___ broken in the storm."', opts:['is','was','are','were'], ans:3, exp:'"Windows" is plural → WERE broken.'},
        ],
      }, qs:[
        {q:'"The letter ___ sent yesterday."',opts:['is','are','was','were'],ans:2,exp:'"The letter" is singular → WAS sent. Past Simple Passive.'},
        {q:'"Many trees ___ cut down last year."',opts:['is','was','are','were'],ans:3,exp:'"Trees" is plural → WERE cut down.'},
        {q:'"The school ___ built by the government."',opts:['is','was','are','were'],ans:1,exp:'"The school" is singular + past → WAS built. "By the government" tells us the agent.'},
        {q:'Question: "___ the suspect arrested?"',opts:['Is','Are','Was','Were'],ans:2,exp:'"WAS the suspect arrested?" — singular past passive question.'},
        {q:'"We ___ not told about the meeting."',opts:['was','were','is','are'],ans:1,exp:'"We were not told." — We + WERE + not + past participle.'},
      ]},
      {id:'l1j4', title:'Future & Modal Passives', titlePt:'Passiva no Futuro e com Modais', icon:'🔮', xp:25, learn:{
        explanation:{
          en:'Future Passive = WILL BE + Past Participle: "The exam will be held next week." Modal Passives = MODAL + BE + Past Participle: "It must be done." "It should be checked." "It can be fixed." "It might be cancelled."',
          pt:'Passiva no Futuro = WILL BE + Particípio Passado: "The exam will be held next week." Passivas Modais = MODAL + BE + Particípio Passado: "It must be done." "It should be checked." "It can be fixed." "It might be cancelled."'
        },
        examples:[
          {en:'The results will be announced tomorrow.', pt:'Os resultados serão anunciados amanhã.'},
          {en:'This problem must be solved immediately.', pt:'Este problema deve ser resolvido imediatamente.'},
          {en:'The package can be collected at reception.', pt:'A encomenda pode ser levantada na recepção.'},
        ],
        practice:[
          {q:'Future Passive formula:', opts:['will + past participle','will be + past participle','will have + past participle','be + past participle'], ans:1, exp:'"Will BE + past participle": The work will be DONE.'},
          {q:'"It ___ be repaired." (it\'s possible)', opts:['can','could','must','will'], ans:0, exp:'"Can be repaired" = it is possible to repair it.'},
        ],
      }, qs:[
        {q:'"The winners ___ announced next week."',opts:['are','will be','were','are being'],ans:1,exp:'"Will BE announced" — Future Passive.'},
        {q:'"All forms ___ filled in before submission."',opts:['must be','will','should','are'],ans:0,exp:'"Must be filled in" — Modal Passive expressing obligation.'},
        {q:'"This machine ___ fixed by the engineer."',opts:['will','can be','must','should'],ans:1,exp:'"Can be fixed" — Modal Passive expressing possibility.'},
        {q:'"The meeting ___ cancelled due to bad weather."',opts:['might be','will','is','was'],ans:0,exp:'"Might be cancelled" — Modal Passive expressing possibility.'},
        {q:'"Phones ___ not be used in the exam room."',opts:['must','can','should','might'],ans:0,exp:'"Must not be used" — prohibition using modal passive.'},
      ]},
      {id:'l1j5', title:'Active vs Passive — When to Use', titlePt:'Activa vs Passiva — Quando Usar', icon:'⚖️', xp:20, learn:{
        explanation:{
          en:'Use ACTIVE when the subject (doer) is important and known: "The teacher explained the lesson." Use PASSIVE when: 1) the doer is unknown ("My wallet was stolen."), 2) obvious ("He was arrested."), 3) when the result matters more ("The road has been closed.").',
          pt:'Usa a VOZ ACTIVA quando o sujeito (quem faz) é importante e conhecido: "The teacher explained the lesson." Usa a VOZ PASSIVA quando: 1) quem faz é desconhecido ("My wallet was stolen."), 2) óbvio ("He was arrested."), 3) o resultado importa mais ("The road has been closed.").'
        },
        examples:[
          {en:'Passive: A new hospital has been built. (result matters)', pt:'Passiva: Um novo hospital foi construído. (o resultado importa)'},
          {en:'Active: Dr. Silva performed the surgery. (doer important)', pt:'Activa: O Dr. Silva realizou a cirurgia. (quem fez é importante)'},
          {en:'Passive: Three people were injured. (doer unknown/less important)', pt:'Passiva: Três pessoas ficaram feridas. (quem fez é desconhecido/menos importante)'},
        ],
        practice:[
          {q:'Which is better in PASSIVE? "Someone robbed the bank."', opts:['Active is better here','Passive: "The bank was robbed."','Both are always equal','Neither is good'], ans:1, exp:'When "someone" is vague/unknown, passive is more natural and informative.'},
          {q:'News reports prefer passive because:', opts:['it\'s shorter','they don\'t know who did things','the action/result is the focus','it sounds more formal'], ans:2, exp:'News focuses on WHAT HAPPENED, not who did it. Passive suits this perfectly.'},
        ],
      }, qs:[
        {q:'Best passive use: "Nobody knows who wrote this."',opts:['"Someone wrote this."','"This was written by someone."','"This was written." (no agent needed)','Active is better here'],ans:2,exp:'When the agent is unknown/unimportant, omit it in passive: "This was written."'},
        {q:'"The police arrested the suspect." Active is better because:',opts:['passive is impossible here','the police (doer) is important information','the sentence is too long','it is in the past'],ans:1,exp:'When the DOER (the police) is important information, active voice is preferred.'},
        {q:'In scientific writing, passive is common because:',opts:['scientists don\'t like people','the PROCESS/result matters, not the researcher','it sounds more complicated','it is shorter'],ans:1,exp:'Science focuses on results and methods, not on individual researchers → passive is standard.'},
        {q:'Which is correctly passive?',opts:['"The car fixed."','"The car was fixed."','"The car be fixed."','"Fixed the car."'],ans:1,exp:'"The car WAS fixed." = BE + Past Participle ✓'},
        {q:'"Oil was discovered in 1940." This passive is used because:',opts:['who discovered it is the main point','the discovery (event) is more important','it is a question','it is in active voice'],ans:1,exp:'The DISCOVERY (event) is what matters — who found it is less important. Passive is perfect.'},
      ]},
      {id:'l1j6', title:'Passive — Revision & Practice', titlePt:'Passiva — Revisão e Prática', icon:'🏆', xp:30, learn:{
        explanation:{
          en:'Full passive review: Present (is/are + PP), Past (was/were + PP), Future (will be + PP), Modals (can/must/should + be + PP). Transform: Active subject → passive "by" phrase (optional). Active object → passive subject.',
          pt:'Revisão completa da passiva: Presente (is/are + PP), Passado (was/were + PP), Futuro (will be + PP), Modais (can/must/should + be + PP). Transformação: Sujeito activo → frase "by" passiva (opcional). Objecto activo → sujeito passivo.'
        },
        examples:[
          {en:'Active: They make cars in Germany. → Passive: Cars are made in Germany.', pt:'Activa: Eles fabricam carros na Alemanha. → Passiva: Os carros são fabricados na Alemanha.'},
          {en:'Active: The teacher has corrected the tests. → Passive: The tests have been corrected.', pt:'Activa: O professor corrigiu os testes. → Passiva: Os testes foram corrigidos.'},
        ],
        practice:[
          {q:'Transform: "They built this bridge in 1960." →', opts:['"This bridge built in 1960."','"This bridge was built in 1960."','"This bridge is built in 1960."','"This bridge were built in 1960."'], ans:1, exp:'"This bridge WAS BUILT in 1960." Past simple passive.'},
          {q:'Transform: "Someone has stolen my bag." →', opts:['"My bag is stolen."','"My bag was stolen."','"My bag has been stolen."','"My bag had been stolen."'], ans:2, exp:'"My bag HAS BEEN stolen." — present perfect passive.'},
        ],
      }, qs:[
        {q:'"They speak Portuguese in Brazil." → Passive:',opts:['"Portuguese is spoken in Brazil."','"Portuguese was spoken in Brazil."','"Portuguese will be spoken in Brazil."','"Portuguese spoke in Brazil."'],ans:0,exp:'"Portuguese IS SPOKEN in Brazil." — Present Simple Passive.'},
        {q:'"She will deliver the report tomorrow." → Passive:',opts:['"The report delivered tomorrow."','"The report is delivered tomorrow."','"The report will be delivered tomorrow."','"The report was delivered tomorrow."'],ans:2,exp:'"The report WILL BE DELIVERED tomorrow." — Future Passive.'},
        {q:'"They have repaired the road." → Passive:',opts:['"The road is repaired."','"The road was repaired."','"The road has been repaired."','"The road will be repaired."'],ans:2,exp:'"The road HAS BEEN repaired." — Present Perfect Passive.'},
        {q:'"You must submit the form by Friday." → Passive:',opts:['"The form must be submitted by Friday."','"The form is submitted by Friday."','"The form was submitted by Friday."','"The form will be submitted by Friday."'],ans:0,exp:'"The form MUST BE SUBMITTED by Friday." — Modal Passive.'},
        {q:'"Somebody stole the bicycle." → Passive:',opts:['"The bicycle is stolen."','"The bicycle was stolen."','"The bicycle has stolen."','"The bicycle were stolen."'],ans:1,exp:'"The bicycle WAS STOLEN." — Past Simple Passive. No agent needed.'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_A1_UNIT14);
