// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit8.js
// ═══════════════════════════════════════════════════════
// Unit ID: u13
// Part of UNITS_B1

const UNITS_B1_UNIT8 = [
  {
      id: 'u13',
      cefr: 'B1',
      title: 'Gerunds & Infinitives',
      titlePt: 'Gerúndios e Infinitivos',
      desc: 'Master the two verb forms that confuse everyone 📚',
      descPt: 'Domina as duas formas verbais que confundem toda a gente 📚',
      color: '#00897b',
      icon: '📚',
      premium: false,
      lessons: [
        {
          id: 'l13a',
          title: 'Gerund: Verb + -ing',
          titlePt: 'Gerúndio: Verbo + -ing',
          icon: '🔵',
          xp: 20,
          learn: {
            explanation: {
              en: 'A gerund is a verb used as a noun by adding -ing: Swimming is fun. Gerunds can be the subject, the object of a verb, or the object of a preposition.',
              pt: 'Um gerúndio é um verbo usado como substantivo ao adicionar -ing: Swimming is fun. Os gerúndios podem ser o sujeito, o objecto de um verbo ou o objecto de uma preposição.'
            },
            examples: [
              { en: 'Swimming every day keeps you healthy.', pt: 'Nadar todos os dias mantém-te saudável.' },
              { en: 'I love cooking Italian food.', pt: 'Eu adoro cozinhar comida italiana.' },
              { en: 'She is good at playing the guitar.', pt: 'Ela é boa a tocar guitarra.' }
            ],
            practice: [
              { q: '\'___ is my favourite hobby.\' (gerund as subject)', opts: ['Swim', 'To swim', 'Swimming', 'Swims'], ans: 2, exp: 'Gerund as subject: Swimming.' },
              { q: 'Which verb takes a gerund?', opts: ['want', 'decide', 'enjoy', 'agree'], ans: 2, exp: 'enjoy + gerund: enjoy doing.' }
            ]
          },
          qs: [
            { q: 'Gerund = verb + ___', opts: ['-ed', '-ing', '-s', '-en'], ans: 1, exp: 'Gerund: verb + -ing, used as a noun.' },
            { q: '"___ is a great hobby." (gerund as subject)', opts: ['Read', 'Reading', 'To read', 'Reads'], ans: 1, exp: '"Reading" is a gerund acting as the subject of the sentence.' },
            { q: '"I enjoy ___ movies." (gerund after verb)', opts: ['watch', 'watching', 'to watch', 'watched'], ans: 1, exp: '"enjoy" takes a gerund: "enjoy watching".' },
            { q: '"She is good at ___." (gerund after preposition)', opts: ['sing', 'singing', 'to sing', 'sings'], ans: 1, exp: 'After prepositions (at, for, about) we use the gerund: "at singing".' },
            { q: 'Which is a gerund?', opts: ['to run', 'running', 'ran', 'runs'], ans: 1, exp: '"running" is the gerund form of the verb "run".' }
          ]
        },
        {
          id: 'l13b',
          title: 'Infinitive: To + Verb',
          titlePt: 'Infinitivo: To + Verbo',
          icon: '🟢',
          xp: 20,
          learn: {
            explanation: {
              en: 'The infinitive (to + base verb) is used after many verbs (want to, need to, decide to), after adjectives (happy to, easy to), and to express purpose (\'I went to the shop to buy milk\').',
              pt: 'O infinitivo (to + verbo base) é usado depois de muitos verbos (want to, need to, decide to), depois de adjectivos (happy to, easy to), e para expressar propósito (\'I went to the shop to buy milk\').'
            },
            examples: [
              { en: 'I want to learn English well.', pt: 'Eu quero aprender inglês bem.' },
              { en: 'She was happy to help me.', pt: 'Ela ficou feliz em me ajudar.' },
              { en: 'He went to the gym to exercise.', pt: 'Ele foi ao ginásio para fazer exercício.' }
            ],
            practice: [
              { q: '\'I decided ___ the job.\' (infinitive after verb)', opts: ['accept', 'accepting', 'to accept', 'accepted'], ans: 2, exp: 'decide + to + infinitive.' },
              { q: '\'She is easy ___ with.\' (infinitive after adjective)', opts: ['work', 'working', 'to work', 'worked'], ans: 2, exp: 'adjective + to + infinitive: easy to work with.' }
            ]
          },
          qs: [
            { q: 'Infinitive = ___ + verb', opts: ['to', 'for', 'with', 'by'], ans: 0, exp: 'Infinitive: to + base verb, e.g., "to study".' },
            { q: '"I want ___ English." (infinitive after verb)', opts: ['study', 'studying', 'to study', 'studied'], ans: 2, exp: '"want" takes the infinitive: "want to study".' },
            { q: '"I went to the store ___ milk." (infinitive of purpose)', opts: ['buy', 'buying', 'to buy', 'bought'], ans: 2, exp: 'Infinitive of purpose: "to buy" explains why I went to the store.' },
            { q: '"She is happy ___ you." (infinitive after adjective)', opts: ['see', 'seeing', 'to see', 'saw'], ans: 2, exp: '"happy to see" — infinitive after adjectives describing emotions.' },
            { q: 'Which is an infinitive?', opts: ['running', 'to run', 'runs', 'ran'], ans: 1, exp: '"to run" is the infinitive form.' }
          ]
        },
        {
          id: 'l13c',
          title: 'Verbs + Gerund vs Infinitive (Part 1)',
          titlePt: 'Verbos + Gerúndio vs Infinitivo (Parte 1)',
          icon: '⚖️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Some verbs ALWAYS take a gerund: enjoy, avoid, finish, mind, suggest, keep. Others ALWAYS take an infinitive: want, need, decide, hope, promise, plan. You simply have to learn which is which!',
              pt: 'Alguns verbos SEMPRE levam gerúndio: enjoy, avoid, finish, mind, suggest, keep. Outros SEMPRE levam infinitivo: want, need, decide, hope, promise, plan. Simplesmente tens de aprender quais são quais!'
            },
            examples: [
              { en: 'She finished reading the book.', pt: 'Ela acabou de ler o livro.' },
              { en: 'I need to go home now.', pt: 'Eu preciso de ir para casa agora.' },
              { en: 'He keeps making the same mistake.', pt: 'Ele continua a cometer o mesmo erro.' }
            ],
            practice: [
              { q: 'Which verb takes a GERUND?', opts: ['want', 'need', 'avoid', 'promise'], ans: 2, exp: 'avoid + gerund: avoid doing.' },
              { q: 'Which verb takes an INFINITIVE?', opts: ['enjoy', 'finish', 'plan', 'keep'], ans: 2, exp: 'plan + infinitive: plan to do.' }
            ]
          },
          qs: [
            { q: 'Which verb takes a gerund?', opts: ['want', 'enjoy', 'need', 'decide'], ans: 1, exp: '"enjoy" takes a gerund: "enjoy doing".' },
            { q: 'Which verb takes an infinitive?', opts: ['enjoy', 'avoid', 'want', 'finish'], ans: 2, exp: '"want" takes an infinitive: "want to do".' },
            { q: '"I hope ___ you soon."', opts: ['see', 'to see', 'seeing', 'seen'], ans: 1, exp: '"hope" takes the infinitive: "hope to see".' },
            { q: '"She avoids ___ in the rain."', opts: ['walk', 'to walk', 'walking', 'walked'], ans: 2, exp: '"avoids" takes a gerund: "avoids walking".' },
            { q: '"He agreed ___ me."', opts: ['help', 'to help', 'helping', 'helped'], ans: 1, exp: '"agreed" takes an infinitive: "agreed to help".' }
          ]
        },
        {
          id: 'l13d',
          title: 'Verbs + Gerund vs Infinitive (Part 2)',
          titlePt: 'Verbos + Gerúndio vs Infinitivo (Parte 2)',
          icon: '⚖️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Some verbs change meaning with gerund vs infinitive! STOP + gerund = end a habit (\'I stopped smoking\'). STOP + infinitive = pause to do something (\'I stopped to smoke\'). Same with REMEMBER and TRY.',
              pt: 'Alguns verbos mudam de significado com gerúndio vs infinitivo! STOP + gerúndio = terminar um hábito (\'I stopped smoking\'). STOP + infinitivo = pausar para fazer algo (\'I stopped to smoke\'). O mesmo com REMEMBER e TRY.'
            },
            examples: [
              { en: 'I stopped eating meat. (I no longer eat it)', pt: 'Eu parei de comer carne. (já não como)' },
              { en: 'I stopped to eat. (I paused to eat)', pt: 'Eu parei para comer. (parei para isso)' },
              { en: 'Remember to lock the door. (don\'t forget)', pt: 'Lembra-te de fechar a porta. (não esqueças)' }
            ],
            practice: [
              { q: '\'I stopped ___ (smoking = quit habit)\'', opts: ['to smoke', 'smoke', 'smoking', 'smoked'], ans: 2, exp: 'stop + gerund = end the habit.' },
              { q: '\'I stopped ___ (in order to rest)\'', opts: ['resting', 'rest', 'to rest', 'rested'], ans: 2, exp: 'stop + infinitive = pause to do something else.' }
            ]
          },
          qs: [
            { q: '"I love ___ English." (both gerund and infinitive possible)', opts: ['studying', 'to study', 'both are correct', 'neither'], ans: 2, exp: '"love" can take both: "love studying" and "love to study" have similar meanings.' },
            { q: '"I stopped ___ coffee." (habit)', opts: ['drink', 'to drink', 'drinking', 'drank'], ans: 2, exp: '"stopped drinking" = I quit drinking coffee. Stop + gerund = end an action.' },
            { q: '"I stopped ___ coffee." (to do something else)', opts: ['drink', 'to drink', 'drinking', 'drank'], ans: 1, exp: '"stopped to drink" = I stopped (something else) in order to drink. Stop + infinitive = purpose.' },
            { q: '"I remember ___ the door." (past memory)', opts: ['lock', 'to lock', 'locking', 'locked'], ans: 2, exp: '"remember locking" = I have a memory of locking it. Remember + gerund = past memory.' },
            { q: '"I remembered ___ the door." (required action)', opts: ['lock', 'to lock', 'locking', 'locked'], ans: 1, exp: '"remembered to lock" = I didn\'t forget to do it. Remember + infinitive = a task to do.' }
          ]
        },
        {
          id: 'l13e',
          title: 'Gerund vs Infinitive with "Try"',
          titlePt: 'Gerúndio vs Infinitivo com "Try"',
          icon: '💪',
          xp: 20,
          learn: {
            explanation: {
              en: '"Try + infinitive" = make an effort to do something difficult: "I tried to lift the box." "Try + gerund" = experiment with something as a solution: "Try adding more salt." The difference is subtle but important!',
              pt: '"Try + infinitivo" = fazer um esforço para fazer algo difícil: "I tried to lift the box." "Try + gerúndio" = experimentar algo como solução: "Try adding more salt." A diferença é subtil mas importante!'
            },
            examples: [
              { en: 'I tried to open the jar, but it was stuck.', pt: 'Tentei abrir o frasco, mas estava preso.' },
              { en: 'Try using a different password.', pt: 'Experimenta usar uma senha diferente.' },
              { en: 'She tried to explain, but nobody listened.', pt: 'Ela tentou explicar, mas ninguém ouviu.' }
            ],
            practice: [
              { q: '"Try ___ a different route." (experiment as solution)', opts: ['to take', 'take', 'taking', 'taken'], ans: 2, exp: 'try + gerund = experiment with.' },
              { q: '"I tried ___ the window, but it was locked." (attempt)', opts: ['open', 'opening', 'to open', 'opened'], ans: 2, exp: 'try + infinitive = attempt (might not succeed).' }
            ]
          },
          qs: [
            { q: '"I tried ___ the box, but it was too heavy." (attempt)', opts: ['lift', 'to lift', 'lifting', 'lifted'], ans: 1, exp: '"try to lift" = attempt to do something (maybe impossible).' },
            { q: '"I tried ___ the door to get in." (experiment)', opts: ['open', 'to open', 'opening', 'opened'], ans: 2, exp: '"try opening" = experiment to see if it works.' },
            { q: '"Try ___ your password again." (suggestion)', opts: ['enter', 'to enter', 'entering', 'entered'], ans: 1, exp: '"try to enter" = attempt to do something (usually as a suggestion).' },
            { q: '"I tried ___ the key, but it didn\'t work." (experiment)', opts: ['use', 'to use', 'using', 'used'], ans: 2, exp: '"try using" = experiment with the key as a solution.' },
            { q: 'What is the difference between "try to do" and "try doing"?', opts: ['No difference', 'Try to do = attempt; Try doing = experiment', 'Try to do = experiment; Try doing = attempt', 'Try to do = past; Try doing = present'], ans: 1, exp: '"try to do" = make an effort; "try doing" = experiment with an action.' }
          ]
        },
        {
          id: 'l13f',
          title: 'Gerund vs Infinitive with "Go"',
          titlePt: 'Gerúndio vs Infinitivo com "Go"',
          icon: '🏃',
          xp: 20,
          learn: {
            explanation: {
              en: '"Go + gerund" is used for recreational activities: "go swimming", "go shopping", "go hiking". "Go + infinitive" is used for purpose or destination: "I went to the doctor", "I went to buy bread."',
              pt: '"Go + gerúndio" é usado para actividades recreativas: "go swimming", "go shopping", "go hiking". "Go + infinitivo" é usado para propósito ou destino: "I went to the doctor", "I went to buy bread."'
            },
            examples: [
              { en: "Let's go swimming this afternoon!", pt: 'Vamos nadar esta tarde!' },
              { en: 'I went to the market to buy fruit.', pt: 'Fui ao mercado comprar fruta.' },
              { en: 'She goes jogging every morning.', pt: 'Ela vai correr todas as manhãs.' }
            ],
            practice: [
              { q: '"Let\'s go ___ at the weekend." (activity)', opts: ['shop', 'to shop', 'shopping', 'shopped'], ans: 2, exp: 'go + gerund for recreational activities: go shopping.' },
              { q: '"I went ___ my sister." (purpose)', opts: ['see', 'seeing', 'to see', 'seen'], ans: 2, exp: 'go + infinitive for purpose: to see.' }
            ]
          },
          qs: [
            { q: '"Let\'s go ___ this weekend." (activity)', opts: ['shop', 'to shop', 'shopping', 'shopped'], ans: 2, exp: '"go shopping" — go + gerund for activities (usually recreational).' },
            { q: '"I need to go ___ some milk." (purpose)', opts: ['buy', 'to buy', 'buying', 'bought'], ans: 1, exp: '"to buy" — go + infinitive for purpose.' },
            { q: '"She goes ___ every morning." (activity)', opts: ['run', 'to run', 'running', 'ran'], ans: 2, exp: '"go running" — go + gerund for activities.' },
            { q: '"I went ___ the doctor." (purpose)', opts: ['see', 'to see', 'seeing', 'saw'], ans: 1, exp: '"to see" — go + infinitive for purpose.' },
            { q: 'Which is correct for an activity?', opts: ['go to swim', 'go swimming', 'go for swim', 'go swim'], ans: 1, exp: '"go swimming" is correct for the activity. "go to swim" is for purpose.' }
          ]
        },
        {
          id: 'l13g',
          title: 'Review: Gerunds & Infinitives',
          titlePt: 'Revisão: Gerúndios e Infinitivos',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Final review: Gerund (-ing) = subject, after prepositions, after certain verbs (enjoy, avoid, finish). Infinitive (to+verb) = after other verbs (want, need, decide), after adjectives, for purpose. Some verbs change meaning (stop, try, remember).',
              pt: 'Revisão final: Gerúndio (-ing) = sujeito, depois de preposições, depois de certos verbos (enjoy, avoid, finish). Infinitivo (to+verbo) = depois de outros verbos (want, need, decide), depois de adjectivos, para propósito. Alguns verbos mudam de significado (stop, try, remember).'
            },
            examples: [
              { en: 'Reading every day improves your English.', pt: 'Ler todos os dias melhora o teu inglês.' },
              { en: 'She decided to quit her job.', pt: 'Ela decidiu abandonar o emprego.' },
              { en: 'I\'m interested in learning new things.', pt: 'Estou interessado em aprender coisas novas.' }
            ],
            practice: [
              { q: '\'I can\'t stand ___ in traffic.\' (hate)', opts: ['wait', 'to wait', 'waiting', 'waited'], ans: 2, exp: 'can\'t stand + gerund.' },
              { q: '\'She decided ___ abroad.\' (infinitive)', opts: ['study', 'studying', 'to study', 'studied'], ans: 2, exp: 'decide + infinitive: to study.' }
            ]
          },
          qs: [
            { q: '"___ is a good way to learn English." (subject)', opts: ['Read', 'Reading', 'To read', 'Both B and C are correct'], ans: 3, exp: 'Both "reading" (gerund) and "to read" (infinitive) can be subjects.' },
            { q: '"I can\'t stand ___ in traffic." (gerund)', opts: ['wait', 'to wait', 'waiting', 'waited'], ans: 2, exp: '"stand" takes a gerund: "can\'t stand waiting".' },
            { q: '"She decided ___ the job offer." (infinitive)', opts: ['accept', 'to accept', 'accepting', 'accepted'], ans: 1, exp: '"decided" takes an infinitive: "decided to accept".' },
            { q: '"I stopped ___ to the gym." (habit)', opts: ['go', 'to go', 'going', 'went'], ans: 2, exp: '"stopped going" = I no longer go to the gym.' },
            { q: '"I stopped ___ to the gym." (purpose)', opts: ['go', 'to go', 'going', 'went'], ans: 1, exp: '"stopped to go" = I stopped (doing something else) to go to the gym.' }
          ]
        }
      ]
    }
];

// Auto-register into global registry (no index.js or index.html edits needed)
(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT8);
