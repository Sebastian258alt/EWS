// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b1/unit9.js
// ═══════════════════════════════════════════════════════
// Unit ID: u14
// Part of UNITS_B1 — Passive Voice

const UNITS_B1_UNIT9 = [
  {
    id:'u14', cefr:'B1', title:'Passive Voice', titlePt:'Voz Passiva',
    desc:'Sound professional by mastering the passive 📰',
    descPt:'Soa profissional dominando a voz passiva 📰',
    color:'#546e7a', icon:'📰', premium:false,
    lessons:[

      {id:'l14a', title:'Present Simple Passive', titlePt:'Passiva do Presente Simples', icon:'🔵', xp:25, learn:{
        explanation:{
          en:'Active voice: subject does the action. "The chef cooks the food." Passive voice: the action is done TO the subject. "The food is cooked by the chef." Formula: subject + am/is/are + past participle (+ by + agent). We use the passive when the agent is unknown, unimportant, or obvious. "Portuguese is spoken in Mozambique." (We don\'t know/care who speaks it — everyone does.)',
          pt:'Voz activa: sujeito faz a acção. "The chef cooks the food." Voz passiva: a acção é feita AO sujeito. "The food is cooked by the chef." Fórmula: sujeito + am/is/are + particípio passado (+ by + agente). Usamos a passiva quando o agente é desconhecido, sem importância ou óbvio. "Portuguese is spoken in Mozambique." (Não sabemos/não importa quem fala — toda a gente fala.)'
        },
        examples:[
          {en:'English is taught in many schools in Mozambique.', pt:'O inglês é ensinado em muitas escolas em Moçambique.'},
          {en:'These phones are made in China.', pt:'Estes telemóveis são feitos na China.'},
          {en:'The report is written by the manager every month.', pt:'O relatório é escrito pelo gestor todos os meses.'},
        ],
        practice:[
          {q:'Present passive formula:', opts:['am/is/are + verb-ing','am/is/are + past participle','was/were + past participle','have + past participle'], ans:1, exp:'Present passive = am/is/are + past participle.'},
          {q:'Active: \"They clean the office.\" → Passive:', opts:['The office is cleaned.','The office was cleaned.','The office cleans.','The office cleaning.'], ans:0, exp:'The office IS CLEANED. (by them)'},
        ],
      }, qs:[
        {q:'\"English ___ (speak) in many countries.\"',opts:['speaks','is speaking','is spoken','are spoken'],ans:2,exp:'\"English IS SPOKEN\" — is + past participle of speak (spoke → spoken).'},
        {q:'Active → Passive: \"They make these bags in Portugal.\"',opts:['These bags make in Portugal.','These bags is made in Portugal.','These bags are made in Portugal.','These bags made in Portugal.'],ans:2,exp:'Subject (bags) = plural → ARE + made. \"These bags ARE MADE in Portugal.\"'},
        {q:'\"The school ___ at 7am every day.\" (open)',opts:['is opened','opens','is opening','opened'],ans:0,exp:'Passive: The school IS OPENED = Someone opens it (unnamed caretaker).'},
        {q:'\"By\" in a passive sentence introduces:',opts:['the time','the place','the agent (who does the action)','the reason'],ans:2,exp:'\"By + agent\" tells us WHO performs the action. Often omitted when unknown.'},
        {q:'Which is a PASSIVE sentence?',opts:['She reads the newspaper.','He is reading a book.','The newspaper is read by millions.','They will read the report.'],ans:2,exp:'\"The newspaper IS READ\" — passive. Subject receives the action.'},
      ]},

      {id:'l14b', title:'Past Simple Passive', titlePt:'Passiva do Passado Simples', icon:'⏮️', xp:25, learn:{
        explanation:{
          en:'Past passive is used to say what happened TO something or someone. Formula: was/were + past participle. Use "was" with singular subjects, "were" with plural subjects. "The bridge was built in 2005." "Many trees were cut down last year." Common in news, history, and formal writing.',
          pt:'A passiva do passado diz o que aconteceu A algo ou alguém. Fórmula: was/were + particípio passado. Usa "was" com sujeitos singulares, "were" com plurais. "The bridge was built in 2005." "Many trees were cut down last year." Comum em notícias, história e escrita formal.'
        },
        examples:[
          {en:'The Maputo suspension bridge was opened in 2018.', pt:'A ponte suspensa de Maputo foi inaugurada em 2018.'},
          {en:'Many people were injured in the accident.', pt:'Muitas pessoas ficaram feridas no acidente.'},
          {en:'This letter was written by my grandfather.', pt:'Esta carta foi escrita pelo meu avô.'},
        ],
        practice:[
          {q:'Past passive formula:', opts:['am/is/are + past participle','was/were + verb-ing','was/were + past participle','had + past participle'], ans:2, exp:'Past passive = was/were + past participle.'},
          {q:'\"The building ___ destroyed in the storm.\"', opts:['is','are','was','were'], ans:2, exp:'Singular subject (building) + WAS destroyed.'},
        ],
      }, qs:[
        {q:'\"Two people ___ arrested last night.\" (arrest)',opts:['was arrested','were arrest','were arrested','are arrested'],ans:2,exp:'Plural subject (two people) → WERE. Past participle of arrest = arrested.'},
        {q:'\"The car ___ stolen from the car park.\"',opts:['were stolen','is stolen','was stolen','had stolen'],ans:2,exp:'Singular subject (the car) → WAS stolen. Irregular: steal → stolen.'},
        {q:'Active → Passive: \"Shakespeare wrote Hamlet.\"',opts:['Hamlet was written by Shakespeare.','Hamlet written by Shakespeare.','Hamlet is written by Shakespeare.','Hamlet were written by Shakespeare.'],ans:0,exp:'Hamlet (singular) + WAS written + by Shakespeare. Past passive.'},
        {q:'\"The road ___ repaired last month.\"',opts:['is','was','were','are'],ans:1,exp:'Singular subject (the road) + WAS repaired. Past passive.'},
        {q:'Why do we often use the passive in news reports?',opts:['Because it is shorter','Because the agent (doer) is unknown or less important than the action','Because it is more fun','Because it uses fewer tenses'],ans:1,exp:'In news: \"Three people were killed\" — we focus on the event, not who did it.'},
      ]},

      {id:'l14c', title:'Modal Passives', titlePt:'Passiva com Modais', icon:'⚙️', xp:25, learn:{
        explanation:{
          en:'Combine modal verbs with the passive for strong or nuanced meaning. Formula: modal + be + past participle. Examples: "This must be done today." (obligation) "The problem can be solved." (possibility) "It should be checked." (advice) "Smoking is not allowed." (prohibition). These are common in formal English.',
          pt:'Combina verbos modais com a passiva para obter significado forte ou subtil. Fórmula: modal + be + particípio passado. Exemplos: "This must be done today." (obrigação) "The problem can be solved." (possibilidade) "It should be checked." (conselho) "Smoking is not allowed." (proibição). Comuns em inglês formal.'
        },
        examples:[
          {en:'This form must be completed in full.', pt:'Este formulário deve ser preenchido na totalidade.'},
          {en:'The issue could be resolved by tomorrow.', pt:'O problema podia ser resolvido até amanhã.'},
          {en:'Mobile phones should not be used during surgery.', pt:'Telemóveis não devem ser usados durante cirurgias.'},
        ],
        practice:[
          {q:'Modal passive formula:', opts:['modal + verb-ing','modal + be + past participle','modal + was + verb','am/is + modal + verb'], ans:1, exp:'Modal + BE + past participle: must be done, can be fixed.'},
          {q:'\"The report ___ submitted by Friday.\" (must)', opts:['must submitted','must be submitted','must is submitted','must to submit'], ans:1, exp:'MUST BE submitted. Modal + be + past participle.'},
        ],
      }, qs:[
        {q:'\"This problem ___ solved immediately.\" (must)',opts:['must be solved','must is solved','must solved','must to be solved'],ans:0,exp:'Must + BE + past participle = must be solved. Obligation passive.'},
        {q:'\"Pets ___ not be allowed inside the restaurant.\"',opts:['should','can','must','are'],ans:0,exp:'Should not be allowed = it is recommended they are not allowed. Polite rule.'},
        {q:'\"The mistake ___ corrected before the meeting.\"',opts:['should to be','should is','should be','should been'],ans:2,exp:'SHOULD BE corrected. Modal + be + past participle.'},
        {q:'\"The contract ___ signed by both parties.\"',opts:['can be','cans be','can is','can to be'],ans:0,exp:'CAN BE signed — possibility passive. Modal + be + past participle.'},
        {q:'Which sentence is a modal passive?',opts:['She is writing the report.','The report must be written today.','He wrote the report.','They write the report every month.'],ans:1,exp:'\"Must BE WRITTEN\" = modal + be + past participle. Modal passive!'},
      ]},

      {id:'l14d', title:'Active vs Passive — When to Use', titlePt:'Activa vs Passiva — Quando Usar', icon:'🎯', xp:20, learn:{
        explanation:{
          en:'Use ACTIVE voice when the doer is important and known: "The engineer designed this bridge." Use PASSIVE voice when: (1) the doer is unknown: "My car was stolen." (2) the doer is obvious: "He was arrested." (3) the doer is unimportant: "Oil was discovered in 1960." (4) in formal/academic writing: "The results were analysed."',
          pt:'Usa a voz ACTIVA quando o agente é importante e conhecido: "The engineer designed this bridge." Usa a voz PASSIVA quando: (1) o agente é desconhecido: "My car was stolen." (2) o agente é óbvio: "He was arrested." (3) o agente não tem importância: "Oil was discovered in 1960." (4) em escrita formal/académica: "The results were analysed."'
        },
        examples:[
          {en:'Active: The scientist discovered penicillin in 1928.', pt:'Activa: O cientista descobriu a penicilina em 1928.'},
          {en:'Passive: Penicillin was discovered in 1928.', pt:'Passiva: A penicilina foi descoberta em 1928.'},
          {en:'Passive: The data was collected over three months.', pt:'Passiva: Os dados foram recolhidos ao longo de três meses.'},
        ],
        practice:[
          {q:'\"My wallet was stolen\" uses passive because:', opts:['it sounds better','the thief is unknown','it\'s in the past','the wallet is important'], ans:1, exp:'Passive = doer unknown. We don\'t know WHO stole it.'},
          {q:'In academic writing, we prefer:', opts:['active voice always','passive voice (to focus on the process, not who did it)','no verbs','present tense only'], ans:1, exp:'Academic writing often uses passive: \"The data was collected\", \"The experiment was conducted\".'},
        ],
      }, qs:[
        {q:'\"Someone broke my window\" → Change to passive:',opts:['My window was broken.','My window broke.','My window is broken.','My window was breaking.'],ans:0,exp:'My window WAS BROKEN. (by someone — agent unknown/unimportant)'},
        {q:'Which sentence is BETTER in passive?',opts:['She cooked dinner last night.','Oil discovered in Brazil in 2006 by Petrobras.','Oil was discovered in Brazil in 2006.','Brazil discovered oil in 2006 by accident.'],ans:2,exp:'\"Oil WAS DISCOVERED\" — the discovery (event) is more important than who did it.'},
        {q:'In formal academic English, which do we typically prefer?',opts:['\"We collected the data\" (active)','\"The data was collected\" (passive)','Neither — no verbs','\"They collected data\" (active)'],ans:1,exp:'Academic writing prefers passive to maintain formality and focus on the process, not the people.'},
        {q:'\"He was arrested\" is passive because:',opts:['it\'s a negative sentence','it\'s past tense','the subject receives the action (police did the arresting)','it has no object'],ans:2,exp:'He = subject who RECEIVES the action. The police (obvious agent) did the arresting.'},
        {q:'Convert: \"They speak French in France.\"',opts:['French spoken in France.','French is spoke in France.','French is spoken in France.','French are spoken in France.'],ans:2,exp:'French (singular) + IS SPOKEN. Present simple passive.'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT9);
