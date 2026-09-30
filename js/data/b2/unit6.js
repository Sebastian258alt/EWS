// ═══════════════════════════════════════════════════════
//  EnglishFlow — js/data/b2/unit6.js
// ═══════════════════════════════════════════════════════
// Unit ID: u19
// Part of UNITS_B2 — Advanced Linking Words

const UNITS_B2_UNIT6 = [
  {
    id:'u19', cefr:'B2', title:'Advanced Linking Words', titlePt:'Conectores Avançados',
    desc:'Connect your ideas smoothly, like a fluent writer ✍️',
    descPt:'Liga as tuas ideias com fluência, como um escritor experiente ✍️',
    color:'#6d4c41', icon:'✍️', premium:false,
    lessons:[

      {id:'l19a', title:'Although, Even Though & Though', titlePt:'Although, Even Though & Though', icon:'⚡', xp:25, learn:{
        explanation:{
          en:'"Although", "even though" and "though" introduce a contrast and are followed by a full clause (subject + verb): "Although it was raining, we went out." "Even though" is slightly stronger/more emphatic than "although". "Though" is more informal and can also go at the END of a sentence: "It was raining. We went out, though."',
          pt:'"Although", "even though" e "though" introduzem um contraste e são seguidos de uma oração completa (sujeito + verbo): "Although it was raining, we went out." "Even though" é ligeiramente mais forte/enfático do que "although". "Though" é mais informal e também pode ir no FIM da frase: "It was raining. We went out, though."'
        },
        examples:[
          {en:'Although she was tired, she finished the report.', pt:'Embora estivesse cansada, ela terminou o relatório.'},
          {en:'Even though he studied hard, he failed the exam.', pt:'Mesmo tendo estudado muito, ele reprovou no exame.'},
          {en:'I didn\'t like the movie. It was well made, though.', pt:'Não gostei do filme. Foi bem feito, no entanto.'},
        ],
        practice:[
          {q:'"___ it was expensive, we bought it."', opts:['Because','Although','So','Since'], ans:1, exp:'Contrast → "Although" (followed by clause).'},
          {q:'Which one commonly goes at the END of a sentence?', opts:['Although','Even though','Though','Despite'], ans:2, exp:'"Though" is the informal one that can appear at the end of a sentence.'},
        ],
      }, qs:[
        {q:'"___ he was sick, he came to work."',opts:['Because','Although','So that','Due to'],ans:1,exp:'Contrast, full clause → "Although".'},
        {q:'"I love this city. It\'s very noisy, ___."',opts:['although','despite','though','because'],ans:2,exp:'End-of-sentence informal contrast → "though".'},
        {q:'"___ knowing the risks, she went ahead with the plan." (more emphatic)',opts:['Although','Even though','Despite','Because'],ans:2,exp:'Followed by -ing (a gerund, not a clause) → "Despite", not "although/even though".'},
        {q:'Which structure follows "although"?',opts:['a noun phrase','a gerund (-ing)','a full clause (subject + verb)','an infinitive'],ans:2,exp:'Although/even though/though are followed by a full clause.'},
        {q:'"___ the bad weather, they went hiking." (followed by a noun)',opts:['Although','Even though','Despite','Because'],ans:2,exp:'Followed by a noun phrase → "Despite", not "although".'},
      ]},

      {id:'l19b', title:'Despite & In Spite Of', titlePt:'Despite & In Spite Of', icon:'💪', xp:25, learn:{
        explanation:{
          en:'"Despite" and "in spite of" mean the same thing and both are followed by a NOUN or a GERUND (-ing form), never a full clause: "Despite the rain, we went out." "In spite of being tired, she kept working." If you need a full clause after them, add "the fact that": "Despite the fact that it was raining, we went out."',
          pt:'"Despite" e "in spite of" significam o mesmo e são ambos seguidos de um NOME ou GERÚNDIO (-ing), nunca uma oração completa: "Despite the rain, we went out." "In spite of being tired, she kept working." Se precisares de uma oração completa depois deles, acrescenta "the fact that": "Despite the fact that it was raining, we went out."'
        },
        examples:[
          {en:'Despite the traffic, we arrived on time.', pt:'Apesar do trânsito, chegámos a tempo.'},
          {en:'In spite of feeling nervous, she gave a great speech.', pt:'Apesar de se sentir nervosa, ela fez um óptimo discurso.'},
          {en:'Despite the fact that he was tired, he finished the race.', pt:'Apesar de estar cansado, ele terminou a corrida.'},
        ],
        practice:[
          {q:'"___ the heavy rain, the match continued."', opts:['Although','Despite','Because','So'], ans:1, exp:'Followed by a noun phrase → "Despite".'},
          {q:'"Despite ___ hard, he didn\'t pass." (gerund needed)', opts:['study','studying','studied','to study'], ans:1, exp:'Despite + gerund (-ing): despite STUDYING hard.'},
        ],
      }, qs:[
        {q:'"___ the difficulties, they finished the project."',opts:['Although','Despite','Because','So that'],ans:1,exp:'Followed by a noun → "Despite".'},
        {q:'"In spite of ___ late, she managed to catch the bus." (gerund needed)',opts:['be','being','was','been'],ans:1,exp:'In spite of + gerund: in spite of BEING late.'},
        {q:'To use a full clause after "despite", you must add:',opts:['"that"','"the fact that"','nothing, it works directly','"because"'],ans:1,exp:'Despite + the fact that + clause: "Despite the fact that it rained..."'},
        {q:'"Despite" and "in spite of" are followed by:',opts:['a full clause only','a noun or gerund','an infinitive only','an adjective only'],ans:1,exp:'Both are followed by a noun phrase or a gerund (-ing).'},
        {q:'Which sentence is CORRECT?',opts:['Despite it was raining, we went out.','Despite the rain, we went out.','Despite raining, we went out heavily.','Despite of the rain, we went out.'],ans:1,exp:'"Despite the rain" (noun) is correct; "despite it was raining" needs "the fact that" instead.'},
      ]},

      {id:'l19c', title:'However, Nevertheless & Nonetheless', titlePt:'However, Nevertheless & Nonetheless', icon:'📝', xp:25, learn:{
        explanation:{
          en:'"However", "nevertheless" and "nonetheless" connect two separate sentences (not clauses within one sentence) and usually start a new sentence, followed by a comma: "It was raining. However, we decided to go out." "Nevertheless" and "nonetheless" are more formal and slightly stronger than "however".',
          pt:'"However", "nevertheless" e "nonetheless" ligam duas frases separadas (não orações dentro de uma frase) e normalmente iniciam uma nova frase, seguidos de vírgula: "It was raining. However, we decided to go out." "Nevertheless" e "nonetheless" são mais formais e ligeiramente mais fortes do que "however".'
        },
        examples:[
          {en:'The exam was difficult. However, most students passed.', pt:'O exame foi difícil. No entanto, a maioria dos alunos passou.'},
          {en:'He had very little money. Nevertheless, he helped his neighbours.', pt:'Ele tinha muito pouco dinheiro. Ainda assim, ajudou os vizinhos.'},
          {en:'The company faced huge losses. Nonetheless, it survived the crisis.', pt:'A empresa enfrentou grandes prejuízos. Mesmo assim, sobreviveu à crise.'},
        ],
        practice:[
          {q:'"It was very expensive. ___, we bought it."', opts:['Because','So','However','Since'], ans:2, exp:'Contrast between two sentences → "However,".'},
          {q:'Which punctuation typically follows "however" at the start of a sentence?', opts:['a full stop','a comma','a semicolon','no punctuation'], ans:1, exp:'"However," is usually followed by a comma.'},
        ],
      }, qs:[
        {q:'"The traffic was terrible. ___, we arrived on time."',opts:['Because','So','However','Since'],ans:2,exp:'Contrast between sentences → "However,".'},
        {q:'"She failed the first attempt. ___, she never gave up." (more formal, stronger)',opts:['So','Because','Nevertheless','Due to'],ans:2,exp:'Formal contrast → "Nevertheless,".'},
        {q:'"However" typically connects:',opts:['two clauses in one sentence','two separate sentences','a noun and a verb','two adjectives'],ans:1,exp:'"However" usually links two separate sentences/ideas, starting the second one.'},
        {q:'Which is the MOST formal option?',opts:['but','however','nevertheless','though'],ans:2,exp:'"Nevertheless" is the most formal of these contrast words.'},
        {q:'"The plan was risky. ___, they decided to try it."',opts:['Because','Nonetheless','Due to','So that'],ans:1,exp:'Contrast between sentences, formal tone → "Nonetheless,".'},
      ]},

      {id:'l19d', title:'Linking Cause & Result', titlePt:'Ligar Causa e Resultado', icon:'🔀', xp:25, learn:{
        explanation:{
          en:'To show cause, use "because", "since", "as", or "due to/owing to" (+ noun): "We stayed home because it was raining." "Due to the storm, flights were cancelled." To show result, use "so", "therefore", "as a result", "consequently": "It was raining, so we stayed home." "Therefore" and "consequently" are more formal.',
          pt:'Para mostrar causa, usa "because", "since", "as", ou "due to/owing to" (+ nome): "We stayed home because it was raining." "Due to the storm, flights were cancelled." Para mostrar resultado, usa "so", "therefore", "as a result", "consequently": "It was raining, so we stayed home." "Therefore" e "consequently" são mais formais.'
        },
        examples:[
          {en:'She was late because the bus broke down.', pt:'Ela chegou atrasada porque o autocarro avariou.'},
          {en:'Due to heavy rain, the match was postponed.', pt:'Devido à chuva forte, o jogo foi adiado.'},
          {en:'He didn\'t study; therefore, he failed the test.', pt:'Ele não estudou; portanto, reprovou no teste.'},
        ],
        practice:[
          {q:'"___ the strike, all trains were cancelled." (+ noun, cause)', opts:['Because','Due to','So','Therefore'], ans:1, exp:'Cause + noun → "Due to".'},
          {q:'"He lost his job. ___, he had to sell his car." (result, formal)', opts:['Because','Due to','As a result','Since'], ans:2, exp:'Result → "As a result,".'},
        ],
      }, qs:[
        {q:'"___ the accident, traffic was terrible today." (+ noun)',opts:['Because','Due to','So','Therefore'],ans:1,exp:'Cause + noun phrase → "Due to".'},
        {q:'"He ignored the warnings. ___, he lost all his savings." (formal result)',opts:['Because','Due to','Consequently','Since'],ans:2,exp:'Formal result connector → "Consequently,".'},
        {q:'"___ she was ill, she didn\'t go to school." (+ full clause)',opts:['Due to','Because of','Because','As a result'],ans:2,exp:'Cause + full clause → "Because", not "due to" (which needs a noun).'},
        {q:'Which pair both introduce a RESULT?',opts:['because, since','so, therefore','due to, owing to','although, despite'],ans:1,exp:'"So" and "therefore" both introduce a result/consequence.'},
        {q:'"___ to the heavy traffic, we missed the flight."',opts:['Because','Due','So','Therefore'],ans:1,exp:'"Due to" + noun expresses cause.'},
      ]},

      {id:'l19e', title:'Linking Words Review', titlePt:'Revisão dos Conectores', icon:'🧠', xp:30, learn:{
        explanation:{
          en:'Quick review: although/even though/though + full clause. Despite/in spite of + noun or gerund. However/nevertheless/nonetheless start a new sentence after a full stop. Because/since/as + clause, due to/owing to + noun (cause). So/therefore/consequently (result).',
          pt:'Revisão rápida: although/even though/though + oração completa. Despite/in spite of + nome ou gerúndio. However/nevertheless/nonetheless iniciam uma nova frase depois de um ponto final. Because/since/as + oração, due to/owing to + nome (causa). So/therefore/consequently (resultado).'
        },
        examples:[
          {en:'Although the flight was delayed, we still made our connection.', pt:'Embora o voo tenha atrasado, ainda apanhámos a ligação.'},
          {en:'Despite the delay, we still made our connection.', pt:'Apesar do atraso, ainda apanhámos a ligação.'},
          {en:'The flight was delayed. Nevertheless, we made our connection.', pt:'O voo atrasou. Ainda assim, apanhámos a ligação.'},
        ],
        practice:[
          {q:'"___ being exhausted, she finished the marathon." (+ gerund)', opts:['Although','Despite','Because','So'], ans:1, exp:'Followed by a gerund → "Despite".'},
          {q:'"He trained every day. ___, he won the competition."', opts:['Because','Due to','Therefore','Although'], ans:2, exp:'Result between two sentences → "Therefore,".'},
        ],
      }, qs:[
        {q:'"___ he had no experience, he got the job." (+ full clause)',opts:['Despite','Although','Due to','Because of'],ans:1,exp:'Full clause → "Although".'},
        {q:'"___ the bad reviews, the film was a box-office hit." (+ noun)',opts:['Although','Even though','Despite','Because'],ans:2,exp:'Noun phrase → "Despite".'},
        {q:'"The team played badly. ___, they still won." (new sentence, contrast)',opts:['Because','However','Due to','So that'],ans:1,exp:'Contrast between sentences → "However,".'},
        {q:'"___ the storm, the flight was delayed." (+ noun, cause)',opts:['Because','Due to','So','Therefore'],ans:1,exp:'Cause + noun → "Due to".'},
        {q:'"She worked hard all year. ___, she got the promotion." (result)',opts:['Although','Despite','Consequently','Because'],ans:2,exp:'Result → "Consequently,".'},
      ]},

    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B2_UNIT6);
