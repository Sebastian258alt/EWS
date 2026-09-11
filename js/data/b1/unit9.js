// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/b1/unit9.js
// ═══════════════════════════════════════════════════════
// Unit ID: u6h  |  CEFR: B1
// Business English

const UNITS_B1_UNIT9 = [
  {
    id:'u6h', cefr:'B1', title:'Business English', titlePt:'Inglês Profissional',
    desc:'Communicate confidently in professional settings 💼',
    descPt:'Comunica com confiança em contextos profissionais 💼',
    color:'#37474f', icon:'💼', premium:true,
    lessons:[
      {id:'l6h1', title:'Professional Introductions', titlePt:'Apresentações Profissionais', icon:'🤝', xp:25, learn:{
        explanation:{
          en:'Professional introductions differ from casual ones. Use full names and job titles: "Allow me to introduce myself — I\'m [Name], [Job Title] at [Company]." When meeting someone: "It\'s a pleasure to meet you." "I\'ve heard great things about your work."',
          pt:'As apresentações profissionais diferem das casuais. Usa nome completo e cargo: "Allow me to introduce myself — I\'m [Name], [Job Title] at [Company]." Ao conhecer alguém: "It\'s a pleasure to meet you." "I\'ve heard great things about your work."'
        },
        examples:[
          {en:'Allow me to introduce myself — I\'m Ana Sitoe, Project Manager at TechMoz.', pt:'Permitam-me apresentar-me — sou a Ana Sitoe, Gestora de Projecto na TechMoz.'},
          {en:'It\'s a pleasure to finally meet you in person.', pt:'É um prazer finalmente conhecê-la pessoalmente.'},
          {en:'I work in the finance department. What about you?', pt:'Trabalho no departamento financeiro. E você?'},
        ],
        practice:[
          {q:'"It\'s a pleasure to meet you." A formal response is:', opts:['"Me too."','"Nice one."','"The pleasure is mine."','"Cool."'], ans:2, exp:'"The pleasure is mine." is the formal, polite response.'},
          {q:'"What do you do?" means:', opts:['What are you doing right now?','What is your job?','How are you?','Where are you from?'], ans:1, exp:'"What do you do?" = What is your job/profession?'},
        ],
      }, qs:[
        {q:'"I am in charge of the sales team." This means:',opts:['I work with the sales team','I manage/lead the sales team','I am new to the sales team','I left the sales team'],ans:1,exp:'"In charge of" = responsible for, managing or leading.'},
        {q:'Professional greeting when meeting a new client:',opts:['Hey, what\'s up?','Good morning, it\'s a pleasure to meet you.','Yo! How are things?','Hi there!'],ans:1,exp:'"Good morning, it\'s a pleasure to meet you." — formal and professional.'},
        {q:'"I report to the CEO." This means:',opts:['I write reports about the CEO','My manager is the CEO','I hired the CEO','I am the CEO'],ans:1,exp:'"Report to" = your direct boss/manager. "I report to the CEO" = the CEO is my manager.'},
        {q:'How do you ask about someone\'s role professionally?',opts:['What are you?','What do you do?','Where do you work at?','What\'s your thing?'],ans:1,exp:'"What do you do?" = professional way to ask about someone\'s job.'},
        {q:'"Based in Maputo" means:',opts:['originally from Maputo','currently living/working in Maputo','travelling to Maputo','born in Maputo'],ans:1,exp:'"Based in" = where you are currently located and working.'},
      ]},
      {id:'l6h2', title:'Emails — Formal Writing', titlePt:'Emails — Escrita Formal', icon:'✉️', xp:30, learn:{
        explanation:{
          en:'Professional emails have clear structure: Opening (Dear Mr/Ms [Name], / To Whom It May Concern,) → Purpose (I am writing to...) → Main message → Closing (Please do not hesitate to contact me. / I look forward to hearing from you.) → Sign-off (Yours sincerely / Kind regards / Best regards).',
          pt:'Os emails profissionais têm estrutura clara: Abertura (Dear Mr/Ms [Name], / To Whom It May Concern,) → Propósito (I am writing to...) → Mensagem principal → Fecho (Please do not hesitate to contact me.) → Despedida (Yours sincerely / Kind regards / Best regards).'
        },
        examples:[
          {en:'I am writing to enquire about the vacancy posted on your website.', pt:'Escrevo para me informar sobre a vaga publicada no vosso website.'},
          {en:'Please find attached my CV for your consideration.', pt:'Em anexo encontra o meu CV para a vossa consideração.'},
          {en:'I look forward to hearing from you at your earliest convenience.', pt:'Aguardo a vossa resposta quando vos for conveniente.'},
        ],
        practice:[
          {q:'Which is the correct formal email opening?', opts:['"Hey John!"','"Dear Mr. Costa,"','"Hi there,"','"Yo, Mr Costa"'], ans:1, exp:'"Dear Mr/Ms [Surname]," is the standard formal email opening.'},
          {q:'"Please find attached" means:', opts:['I have lost the file','There is a file with this email','Please find me a file','I am searching for an attachment'], ans:1, exp:'"Please find attached" = a document is included with this email.'},
        ],
      }, qs:[
        {q:'Which sign-off is MOST formal?',opts:['Cheers,','Love,','Yours sincerely,','Take care,'],ans:2,exp:'"Yours sincerely" is the most formal email sign-off. Use when you know the name of the recipient.'},
        {q:'"I am writing to follow up on our meeting last week." This means:',opts:['I\'m asking about something we discussed last week','I forgot about our meeting','I\'m cancelling our meeting','I\'m writing for the first time'],ans:0,exp:'"Follow up" = to check progress on something discussed previously.'},
        {q:'Which phrase asks someone to reply quickly?',opts:['"Do not reply."','"Reply when you want."','"I look forward to your prompt response."','"No need to reply."'],ans:2,exp:'"Prompt response" = quick reply. Politely requesting a fast answer.'},
        {q:'"To Whom It May Concern" is used when:',opts:['you know the person well','you don\'t know the recipient\'s name','you are emailing a friend','you are angry'],ans:1,exp:'"To Whom It May Concern" — formal opening when you don\'t know who will read the email.'},
        {q:'Which is a professional way to apologise in an email?',opts:['Sorry!!!','My bad.','I apologise for any inconvenience caused.','Oops!'],ans:2,exp:'"I apologise for any inconvenience caused." — formal, professional apology.'},
      ]},
      {id:'l6h3', title:'Meetings & Discussions', titlePt:'Reuniões e Discussões', icon:'🗣️', xp:25, learn:{
        explanation:{
          en:'Key meeting phrases: To start: "Shall we get started?" "Let\'s begin with item one." To contribute: "I\'d like to add..." "If I may..." To agree: "That\'s a good point." "I couldn\'t agree more." To disagree: "With respect, I think..." "I see it differently." To summarise: "To sum up..." "In conclusion..."',
          pt:'Expressões-chave para reuniões: Para começar: "Shall we get started?" Para contribuir: "I\'d like to add..." Para concordar: "That\'s a good point." Para discordar: "With respect, I think..." Para resumir: "To sum up..."'
        },
        examples:[
          {en:'Shall we get started? We have a lot to cover.', pt:'Podemos começar? Temos muito a tratar.'},
          {en:'With respect, I think we should reconsider that approach.', pt:'Com respeito, acho que devíamos reconsiderar essa abordagem.'},
          {en:'Could I just add something to that point?', pt:'Posso acrescentar algo a esse ponto?'},
        ],
        practice:[
          {q:'"With respect, I disagree." This phrase is:', opts:['rude','politely disagreeing','agreeing strongly','changing the subject'], ans:1, exp:'"With respect" softens a disagreement. It is POLITE.'},
          {q:'"Let\'s table this for now" means:', opts:['discuss it later','agree with it','disagree with it','put it on the table'], ans:0, exp:'"Table something" (British) = postpone for later. Note: In American English, "table" means the opposite — to discuss it now!'},
        ],
      }, qs:[
        {q:'"The floor is open for questions." This means:',opts:['The floor is broken','You can now ask questions','Questions are not allowed','Please sit on the floor'],ans:1,exp:'"The floor is open" = anyone can now speak or ask questions.'},
        {q:'How do you politely interrupt in a meeting?',opts:['"STOP!"','"Excuse me, could I just add something?"','"Be quiet, I\'m speaking."','"Wait, no."'],ans:1,exp:'"Excuse me, could I just add something?" — polite, professional interruption.'},
        {q:'"Let\'s take a five-minute break and reconvene." means:',opts:['End the meeting','Pause and come back together','Change the topic','Vote on something'],ans:1,exp:'"Reconvene" = come back together after a break.'},
        {q:'"I move that we approve the proposal." This is used to:',opts:['ask a question','formally suggest a decision','disagree','summarise'],ans:1,exp:'"I move that..." = formally proposing a decision for the group to vote on or agree to.'},
        {q:'To summarise at the end of a meeting, you say:',opts:['"I want to say something."','"Are there any questions?"','"To sum up, we have agreed to..."','"Let\'s start again."'],ans:2,exp:'"To sum up..." = to give a brief summary of what was decided.'},
      ]},
      {id:'l6h4', title:'Negotiations & Agreements', titlePt:'Negociações e Acordos', icon:'🤝', xp:30, learn:{
        explanation:{
          en:'Negotiation language: Making an offer: "We could offer..." "How about..." Making a counter-offer: "What if we...?" "We\'d be willing to... if you could..." Accepting: "That sounds reasonable." "We have a deal." Rejecting: "I\'m afraid that\'s not quite what we had in mind." "We\'d need you to..."',
          pt:'Linguagem de negociação: Fazer uma oferta: "We could offer..." "How about..." Contra-proposta: "What if we...?" "We\'d be willing to... if you could..." Aceitar: "That sounds reasonable." "We have a deal." Rejeitar: "I\'m afraid that\'s not quite what we had in mind."'
        },
        examples:[
          {en:'We could offer a 10% discount if you order 500 units.', pt:'Poderíamos oferecer um desconto de 10% se encomendar 500 unidades.'},
          {en:'That sounds reasonable. Let\'s shake on it.', pt:'Parece razoável. Vamos selar o acordo.'},
          {en:'I\'m afraid that\'s not quite what we had in mind.', pt:'Receio que não é bem o que tínhamos em mente.'},
        ],
        practice:[
          {q:'"We have a deal!" means:', opts:['We disagree','We are still negotiating','We have reached an agreement','We need more time'], ans:2, exp:'"We have a deal" = we have agreed. The negotiation is complete!'},
          {q:'"What if we split the difference?" means:', opts:['each side takes half the difference','we end the negotiation','we disagree','we repeat our offer'], ans:0, exp:'"Split the difference" = each party meets halfway between their positions.'},
        ],
      }, qs:[
        {q:'"We\'d be open to negotiating the price." means:',opts:['The price is fixed','We refuse to change the price','We are willing to discuss the price','We have agreed on the price'],ans:2,exp:'"Open to negotiating" = willing to discuss and possibly change.'},
        {q:'"That\'s our final offer." means:',opts:['We will offer more later','We will not change this offer','We are still thinking','We are withdrawing the offer'],ans:1,exp:'"Final offer" = the last and non-negotiable offer. Take it or leave it.'},
        {q:'How do you politely reject a proposal?',opts:['"No way!"','"That\'s ridiculous."','"I\'m afraid that doesn\'t quite work for us."','"Rejected."'],ans:2,exp:'"I\'m afraid that doesn\'t quite work for us." — polite, professional rejection.'},
        {q:'"Let\'s find a middle ground." means:',opts:['Let\'s disagree','Let\'s find a compromise','Let\'s end the negotiation','Let\'s repeat our positions'],ans:1,exp:'"Middle ground" = a compromise position that both sides can accept.'},
        {q:'"Could you go any lower on the price?" means:',opts:['Can the price be higher?','Can you reduce the price?','Is the price fixed?','Can we talk later?'],ans:1,exp:'"Go lower on the price" = reduce the price. A request for a discount.'},
      ]},
      {id:'l6h5', title:'Job Interviews', titlePt:'Entrevistas de Emprego', icon:'👔', xp:30, learn:{
        explanation:{
          en:'Job interview essentials: Opening: "Thank you for the opportunity." Strength questions: "I\'d say my greatest strength is..." Weakness questions: "I\'m working on improving my..." Experience: "In my previous role, I was responsible for..." Closing: "Do you have any questions for me?" "When can I expect to hear from you?"',
          pt:'Essenciais para entrevistas: Abertura: "Thank you for the opportunity." Pontos fortes: "I\'d say my greatest strength is..." Fraquezas: "I\'m working on improving my..." Experiência: "In my previous role, I was responsible for..." Fecho: "Do you have any questions for me?"'
        },
        examples:[
          {en:'My greatest strength is my ability to work under pressure.', pt:'O meu maior ponto forte é a minha capacidade de trabalhar sob pressão.'},
          {en:'In my previous role, I managed a team of eight people.', pt:'No meu cargo anterior, geria uma equipa de oito pessoas.'},
          {en:'I\'m a quick learner and I adapt well to new environments.', pt:'Aprendo rapidamente e adapto-me bem a novos ambientes.'},
        ],
        practice:[
          {q:'When asked "What is your weakness?", the best approach is:', opts:['Say you have no weaknesses','Name a real weakness and say how you\'re improving it','Refuse to answer','Say the job description\'s requirements'], ans:1, exp:'Be honest but show self-awareness: name a weakness AND how you\'re working on it.'},
          {q:'"In my previous role" means:', opts:['in my current job','in my future job','in my last/former job','in my dream job'], ans:2, exp:'"Previous role" = former/last position. The job before the current one.'},
        ],
      }, qs:[
        {q:'"Tell me about yourself." Start your answer with:',opts:['My hobbies are...','I am [Name], currently working as... with experience in...','I was born in...','I don\'t know what to say.'],ans:1,exp:'Start with name, current/recent role, and key experience. Keep it professional and relevant.'},
        {q:'"Why do you want to work here?" The best answer focuses on:',opts:['The salary','How the role fits your career goals and what attracts you to the company','That you need a job','That it\'s close to your home'],ans:1,exp:'Show genuine interest in the COMPANY and how the role matches your GOALS.'},
        {q:'"Where do you see yourself in 5 years?" is about:',opts:['your personal life','your career ambitions and goals','what you want to buy','where you want to live'],ans:1,exp:'This question is about CAREER AMBITIONS. Show ambition but also commitment to the role.'},
        {q:'"I\'m a team player." This means:',opts:['I prefer to work alone','I work well with others','I manage teams','I play sports'],ans:1,exp:'"Team player" = someone who works well with others and contributes to group goals.'},
        {q:'Which question is NOT appropriate to ask at an interview?',opts:['What does the role involve day-to-day?','What are the opportunities for growth?','How much is the salary? (first question)','What does the team culture look like?'],ans:2,exp:'Asking about salary as your FIRST question gives a bad impression. Research it before the interview.'},
      ]},
      {id:'l6h6', title:'Presentations & Public Speaking', titlePt:'Apresentações e Oratória', icon:'🎤', xp:35, learn:{
        explanation:{
          en:'Structure your presentation: Opening (Good morning everyone. Today I\'m going to talk about...) → Main points (First.../Moving on.../Furthermore...) → Visuals (As you can see from this chart.../This graph shows...) → Conclusion (To summarise.../In conclusion...) → Q&A (I\'d be happy to answer any questions.)',
          pt:'Estrutura a tua apresentação: Abertura (Good morning everyone. Today I\'m going to talk about...) → Pontos principais (First.../Moving on.../Furthermore...) → Visuais (As you can see from this chart...) → Conclusão (To summarise.../In conclusion...) → Q&A (I\'d be happy to answer any questions.)'
        },
        examples:[
          {en:'Today I\'m going to walk you through our Q3 results.', pt:'Hoje vou apresentar-vos os resultados do 3º trimestre.'},
          {en:'As you can see from this chart, sales have increased by 20%.', pt:'Como podem ver neste gráfico, as vendas aumentaram 20%.'},
          {en:'I\'d now like to open the floor to questions.', pt:'Gostaria agora de abrir espaço para perguntas.'},
        ],
        practice:[
          {q:'"I\'d like to draw your attention to..." means:', opts:['Please ignore this','Please look at / focus on this','Ask me a question','Skip this part'], ans:1, exp:'"Draw your attention to" = please focus on / look at this specific thing.'},
          {q:'"To wrap up" means:', opts:['to start a new topic','to end the presentation','to show a chart','to answer questions'], ans:1, exp:'"To wrap up" = to finish/conclude. "Let me wrap up with one final point."'},
        ],
      }, qs:[
        {q:'How do you start a presentation?',opts:['Let\'s go.','Good morning. Today I\'d like to talk to you about...','So... yeah...','OK here it is.'],ans:1,exp:'"Good morning. Today I\'d like to talk to you about..." — professional, confident opening.'},
        {q:'"Let\'s move on to the next point." is used to:',opts:['End the presentation','Transition to a new topic','Summarise','Ask a question'],ans:1,exp:'"Move on to" = transition smoothly to the next section or topic.'},
        {q:'"As you can see from this graph..." is used when:',opts:['you have no visuals','referring to a visual aid','asking a question','summarising'],ans:1,exp:'Used to draw attention to a VISUAL AID (chart, graph, image) in your presentation.'},
        {q:'What should you do if you don\'t know an answer in Q&A?',opts:['Make something up','Say "That\'s a great question. Let me get back to you on that."','Say nothing','End the presentation'],ans:1,exp:'"Let me get back to you on that." — honest and professional. Never guess or bluff!'},
        {q:'"In conclusion" is used to:',opts:['introduce a new idea','begin the presentation','summarise and close','ask for questions'],ans:2,exp:'"In conclusion" = to signal you are SUMMARISING and ending the presentation.'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT9);
