// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/b1/unit5.js
// ═══════════════════════════════════════════════════════
// Unit ID: u10
// Part of UNITS_B1

const UNITS_B1_UNIT5 = [
  {
      id: 'u10',
      cefr: 'B2',
      title: 'Advanced Conditionals',
      titlePt: 'Condicionais Avançados',
      desc: 'Master if-clauses for all situations 🤔',
      descPt: 'Domina as orações condicionais para todas as situações 🤔',
      color: '#ff6f00',
      icon: '🤔',
      premium: false,
      lessons: [
        {
          id: 'l10a',
          title: 'Third Conditional',
          titlePt: 'Terceiro Condicional',
          icon: '🔀',
          xp: 25,
          learn: {
            explanation: {
              en: 'Third Conditional (If + Past Perfect, would have + past participle) describes UNREAL past situations. It expresses what would have happened if the past had been different. It\'s often used for regret.',
              pt: 'O Terceiro Condicional (If + Past Perfect, would have + particípio passado) descreve situações passadas IRREAIS. Expressa o que teria acontecido se o passado tivesse sido diferente. Usado para exprimir arrependimento.'
            },
            examples: [
            { en: 'If I had studied harder, I would have passed.', pt: 'Se eu tivesse estudado mais, teria passado.' },
            { en: 'She would have called if she had known.', pt: 'Ela teria ligado se tivesse sabido.' },
            { en: 'We wouldn\'t have been late if we had left earlier.', pt: 'Não teríamos chegado atrasados se tivéssemos saído mais cedo.' }
            ],
            practice: [
            { q: 'Third Conditional formula:', opts: ['If+Past Simple,would+verb', 'If+Past Perfect,would have+PP', 'If+Present,will+verb', 'If+were,would+verb'], ans: 1, exp: 'If + Past Perfect, would have + past participle.' },
            { q: 'Complete: \'If I had known, I ___ helped you.\'', opts: ['will have', 'would have', 'had', 'should'], ans: 1, exp: 'would have + past participle.' }
            ]
          },
          qs: [
            { q: '"If I had studied harder, I ___ the exam."', opts: ['would pass', 'would have passed', 'will pass', 'passed'], ans: 1, exp: '"would have passed" — Third Conditional: If + Past Perfect, Would have + PP. Unreal past condition.' },
            { q: 'Third Conditional = If + ___ + Would have + ___', opts: ['Past Simple, Past Participle', 'Past Perfect, Past Participle', 'Present Simple, Infinitive', 'Past Continuous, Infinitive'], ans: 1, exp: 'Third Conditional: If + PAST PERFECT, Would have + PAST PARTICIPLE.' },
            { q: '"If she ___ to the party, she would have met him."', opts: ['went', 'had gone', 'goes', 'was going'], ans: 1, exp: '"If she HAD GONE" — Third Conditional for unreal past situations.' },
            { q: '"I would have bought it if I ___ enough money."', opts: ['have', 'had', 'had had', 'would have'], ans: 2, exp: '"if I HAD HAD enough money" — Past Perfect of "have".' },
            { q: 'Which sentence expresses regret about the past?', opts: ['If I am rich, I will travel.', 'If I were rich, I would travel.', 'If I had been rich, I would have traveled.', 'If I have been rich, I travel.'], ans: 2, exp: 'Third Conditional expresses regret or wishes about the past.' }
          ]
        },
        {
          id: 'l10b',
          title: 'Mixed Conditionals',
          titlePt: 'Condicionais Mistas',
          icon: '🔄',
          xp: 25,
          learn: {
            explanation: {
              en: 'Mixed Conditionals combine two different conditional types. Past condition + present result: \'If I had studied medicine, I would be a doctor now.\' Present condition + past result: \'If I were richer, I would have bought it.\'',
              pt: 'Os Condicionais Mistos combinam dois tipos diferentes. Condição passada + resultado presente: \'If I had studied medicine, I would be a doctor now.\' Condição presente + resultado passado: \'If I were richer, I would have bought it.\''
            },
            examples: [
            { en: 'If I had taken that job, I would be in Paris now.', pt: 'Se eu tivesse aceite esse emprego, estaria em Paris agora.' },
            { en: 'If she were more careful, she wouldn\'t have broken it.', pt: 'Se ela fosse mais cuidadosa, não o teria partido.' },
            { en: 'He would be healthier now if he had exercised more.', pt: 'Ele estaria mais saudável agora se tivesse feito mais exercício.' }
            ],
            practice: [
            { q: 'Past condition + present result uses:', opts: ['If+Past Perfect,would have+PP', 'If+Past Perfect,would+verb', 'If+Present,will+verb', 'If+Past,would+verb'], ans: 1, exp: 'If + Past Perfect → would + infinitive (present result).' },
            { q: '\'If I were richer, I ___ bought that house.\'', opts: ['would buy', 'will buy', 'would have bought', 'had bought'], ans: 2, exp: 'Present condition + past result = would have bought.' }
            ]
          },
          qs: [
            { q: '"If I had studied medicine, I ___ a doctor now." (past condition, present result)', opts: ['would be', 'would have been', 'am', 'was'], ans: 0, exp: 'Mixed Conditional: If + Past Perfect, Would + infinitive. Past condition → Present result.' },
            { q: '"If I were a millionaire, I ___ bought that house." (present condition, past result)', opts: ['would have', 'would', 'will have', 'had'], ans: 0, exp: 'Mixed Conditional: If + Past Simple, Would have + PP. Present condition → Past result.' },
            { q: '"If she had taken the job, she ___ in London now."', opts: ['would be', 'would have been', 'is', 'was'], ans: 0, exp: 'If + Past Perfect (past condition), Would + infinitive (present result).' },
            { q: '"If I ___ English, I wouldn\'t have gotten this job." (present ability, past consequence)', opts: ['hadn\'t studied', 'don\'t study', 'didn\'t study', 'wouldn\'t study'], ans: 2, exp: '"If I DIDN\'T study English" (present condition) → "wouldn\'t have gotten" (past result).' },
            { q: 'Which is an example of a mixed conditional?', opts: ['If it rains, I will stay home.', 'If I studied, I would pass.', 'If I had studied, I would be a doctor now.', 'If I had studied, I would have passed.'], ans: 2, exp: '"If I had studied" (past condition) → "I would be a doctor now" (present result) is mixed.' }
          ]
        },
        {
          id: 'l10c',
          title: 'Unreal Past with "Wish"',
          titlePt: 'Passado Irreal com "Wish"',
          icon: '✨',
          xp: 20,
          learn: {
            explanation: {
              en: 'Wish expresses unreal desires. Wish + Past Simple = unreal present desire: \'I wish I had more time.\' Wish + Past Perfect = past regret: \'I wish I had studied harder.\' Never use will directly after wish.',
              pt: 'Wish expressa desejos irreais. Wish + Past Simple = desejo irreal presente: \'I wish I had more time.\' Wish + Past Perfect = arrependimento passado: \'I wish I had studied harder.\' Nunca uses will directamente depois de wish.'
            },
            examples: [
            { en: 'I wish I had saved more money.', pt: 'Eu queria ter poupado mais dinheiro.' },
            { en: 'She wishes she could speak French.', pt: 'Ela queria poder falar francês.' },
            { en: 'I wish I hadn\'t eaten so much!', pt: 'Eu queria não ter comido tanto!' }
            ],
            practice: [
            { q: '\'I wish I ___ to the party.\' (past regret)', opts: ['went', 'go', 'had gone', 'would go'], ans: 2, exp: 'Past regret = wish + Past Perfect: had gone.' },
            { q: '\'I wish I ___ more time now.\' (present wish)', opts: ['have', 'had', 'had had', 'will have'], ans: 1, exp: 'Present wish = wish + Past Simple: had.' }
            ]
          },
          qs: [
            { q: '"I wish I ___ you yesterday." (regret)', opts: ['see', 'saw', 'had seen', 'have seen'], ans: 2, exp: '"I wish I HAD SEEN you" — wish + Past Perfect expresses regret about the past.' },
            { q: '"I wish I ___ more time to travel." (present wish)', opts: ['have', 'had', 'had had', 'would have'], ans: 1, exp: '"I wish I HAD more time" — wish + Past Simple for present unreal wishes.' },
            { q: '"She wishes she ___ to the party." (past)', opts: ['went', 'goes', 'had gone', 'would go'], ans: 2, exp: '"She wishes she HAD GONE" — regret about the past.' },
            { q: '"I wish ___ studying earlier." (regret)', opts: ['I start', 'I started', 'I had started', 'I would start'], ans: 2, exp: '"I wish I HAD STARTED" — regret about a past action.' },
            { q: 'Which expresses a present wish?', opts: ['I wish I had been there.', 'I wish I were there now.', 'I wish I went there yesterday.', 'I wish I am there.'], ans: 1, exp: '"I wish I WERE there now" — present unreal wish (were for all subjects).' }
          ]
        },
        {
          id: 'l10d',
          title: 'Inverted Conditionals',
          titlePt: 'Condicionais Invertidos',
          icon: '↕️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Inverted conditionals are formal: drop \'if\' and swap subject and auxiliary. \'If I had known\' becomes \'Had I known\'. \'If I were you\' becomes \'Were I you\'. \'If you should need help\' becomes \'Should you need help\'.',
              pt: 'Os condicionais invertidos são formais: elimina \'if\' e troca sujeito e auxiliar. \'If I had known\' torna-se \'Had I known\'. \'If I were you\' torna-se \'Were I you\'. \'If you should need help\' torna-se \'Should you need help\'.'
            },
            examples: [
            { en: 'Had I known you were coming, I would have cooked.', pt: 'Se eu soubesse que estavas a vir, teria cozinhado.' },
            { en: 'Were I you, I would accept the offer.', pt: 'Se eu fosse tu, aceitaria a oferta.' },
            { en: 'Should you need help, please call me.', pt: 'Se precisares de ajuda, liga-me.' }
            ],
            practice: [
            { q: '\'Had I known\' is the inversion of:', opts: ['If I know', 'If I had known', 'If I would know', 'If I knew'], ans: 1, exp: 'Had I known = If I had known.' },
            { q: '\'Were I you\' is the inversion of:', opts: ['If I was you', 'If I had been you', 'If I were you', 'If I am you'], ans: 2, exp: 'Were I you = If I were you.' }
            ]
          },
          qs: [
            { q: '"Had I known, I ___ you." = "If I had known, I would have told you."', opts: ['would tell', 'would have told', 'will tell', 'tell'], ans: 1, exp: '"Had I known" = "If I had known". Inversion in Third Conditional.' },
            { q: '"Were I you, I ___ that job." = "If I were you, I would accept that job."', opts: ['would accept', 'would have accepted', 'accept', 'accepted'], ans: 0, exp: '"Were I you" = "If I were you". Inversion in Second Conditional.' },
            { q: '"Should you need help, ___ me." = "If you should need help, contact me."', opts: ['contact', 'would contact', 'will contact', 'contacts'], ans: 0, exp: '"Should you need help" = "If you should need help". Inversion with should.' },
            { q: '"___ she known, she would have come." = "If she had known, she would have come."', opts: ['Did', 'Has', 'Had', 'Would'], ans: 2, exp: '"Had she known" — inversion removes "if" and moves "had" to the front.' },
            { q: 'What is the inversion for "If I were you"?', opts: ['Were I you', 'Was I you', 'If were I you', 'I were you'], ans: 0, exp: '"Were I you" is the correct inversion.' }
          ]
        },
        {
          id: 'l10e',
          title: 'Conditionals with "Unless", "Even if"',
          titlePt: 'Condicionais com "Unless" e "Even if"',
          icon: '🚫',
          xp: 20,
          learn: {
            explanation: {
              en: 'Unless means \'if not\': \'I won\'t go unless you come\' = \'I won\'t go if you don\'t come.\' Even if means the result happens regardless of the condition: \'I\'ll go even if it rains.\' As long as means on the condition that.',
              pt: 'Unless significa \'se não\': \'I won\'t go unless you come\' = \'I won\'t go if you don\'t come.\' Even if significa que o resultado acontece independentemente: \'I\'ll go even if it rains.\' As long as significa desde que.'
            },
            examples: [
            { en: 'I won\'t leave unless you come with me.', pt: 'Eu não vou sair a menos que venhas comigo.' },
            { en: 'She\'ll pass even if she doesn\'t study much.', pt: 'Ela vai passar mesmo que não estude muito.' },
            { en: 'You can stay as long as you are quiet.', pt: 'Podes ficar desde que estejas sossegado.' }
            ],
            practice: [
            { q: '\'Unless\' means:', opts: ['if also', 'if not', 'even if', 'as long as'], ans: 1, exp: 'Unless = if not.' },
            { q: '\'Even if it rains, I will go.\' This means:', opts: ['I only go if it does not rain', 'The rain will not stop me', 'I might go', 'I will not go'], ans: 1, exp: 'Even if = regardless of the condition.' }
            ]
          },
          qs: [
            { q: '"I won\'t go ___ you invite me." = "I won\'t go if you don\'t invite me."', opts: ['if', 'unless', 'even if', 'as long as'], ans: 1, exp: '"Unless" means "if not". "I won\'t go unless you invite me."' },
            { q: '"She will come ___ she is tired." = "She will come even if she is tired."', opts: ['unless', 'even if', 'as long as', 'provided that'], ans: 1, exp: '"Even if" expresses that the result will happen regardless of the condition.' },
            { q: '"You can go ___ you finish your homework." = "You can go if you finish your homework."', opts: ['unless', 'even if', 'as long as', 'if not'], ans: 2, exp: '"As long as" means "on the condition that".' },
            { q: '"I will help you ___ you need me." = "I will help you if you need me."', opts: ['unless', 'provided that', 'even if', 'although'], ans: 1, exp: '"Provided that" means "if" or "on the condition that".' },
            { q: 'Which sentence uses "unless" correctly?', opts: ['Unless you study, you will pass.', 'Unless you study, you won\'t pass.', 'Unless you will study, you won\'t pass.', 'Unless you studied, you won\'t pass.'], ans: 1, exp: '"Unless you study, you won\'t pass." = If you don\'t study, you won\'t pass.' }
          ]
        },
        {
          id: 'l10f',
          title: 'Review: All Conditionals',
          titlePt: 'Revisão: Todos os Condicionais',
          icon: '🎯',
          xp: 25,
          learn: {
            explanation: {
              en: 'Summary: Zero Conditional = If+Present, Present (universal truth). First = If+Present, will+verb (real future). Second = If+Past Simple, would+verb (unreal present). Third = If+Past Perfect, would have+PP (unreal past).',
              pt: 'Resumo: Zero = If+Present, Present (verdade universal). First = If+Present, will+verb (futuro real). Second = If+Past Simple, would+verb (irreal presente). Third = If+Past Perfect, would have+PP (irreal passado).'
            },
            examples: [
            { en: 'If water reaches 100C, it boils. (Zero)', pt: 'Se a água atingir 100C, ferve. (Zero)' },
            { en: 'If it rains, I will stay home. (First)', pt: 'Se chover, ficarei em casa. (First)' },
            { en: 'If I had wings, I would fly. (Second)', pt: 'Se eu tivesse asas, voaria. (Second)' }
            ],
            practice: [
            { q: 'Which conditional is for REAL future possibilities?', opts: ['Zero', 'First', 'Second', 'Third'], ans: 1, exp: 'First Conditional = real future.' },
            { q: 'Which conditional expresses PAST regret?', opts: ['Zero', 'First', 'Second', 'Third'], ans: 3, exp: 'Third Conditional = unreal past regret.' }
            ]
          },
          qs: [
            { q: 'Zero Conditional: If + Present, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 1, exp: 'Zero Conditional = If + Present, Present (universal truths).' },
            { q: 'First Conditional: If + Present, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 0, exp: 'First Conditional = If + Present, Will + Infinitive (real future possibility).' },
            { q: 'Second Conditional: If + Past, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 2, exp: 'Second Conditional = If + Past, Would + Infinitive (unreal present).' },
            { q: 'Third Conditional: If + Past Perfect, ___', opts: ['Will + Infinitive', 'Present', 'Would + Infinitive', 'Would have + PP'], ans: 3, exp: 'Third Conditional = If + Past Perfect, Would have + PP (unreal past).' },
            { q: '"If I ___ you, I would have gone." (mixed)', opts: ['am', 'were', 'had been', 'would be'], ans: 1, exp: '"If I WERE you" (present condition) → "would have gone" (past result). Mixed conditional.' }
          ]
        },
        {
          id: 'l10g',
          title: 'Conditionals in Real Life',
          titlePt: 'Condicionais na Vida Real',
          icon: '💡',
          xp: 20,
          learn: {
            explanation: {
              en: 'Conditionals appear in everyday life. Zero for facts and advice. First for real future plans. Second for dreams and hypotheticals. Third for regrets. Inverted forms (Had I, Were I) for formal writing.',
              pt: 'Os condicionais aparecem no dia-a-dia. Zero para factos e conselhos. First para planos futuros reais. Second para sonhos e hipotéticos. Third para arrependimentos. Formas invertidas (Had I, Were I) para escrita formal.'
            },
            examples: [
            { en: 'If you are tired, you should rest. (advice)', pt: 'Se estás cansado, deves descansar. (conselho)' },
            { en: 'If I win the lottery, I\'ll buy a house. (First - real)', pt: 'Se eu ganhar na lotaria, comprarei uma casa. (First - real)' },
            { en: 'If I were president, I would change things. (Second - dream)', pt: 'Se eu fosse presidente, mudaria as coisas. (Second - sonho)' }
            ],
            practice: [
            { q: '\'Should you need anything, call me.\' This is:', opts: ['First Conditional', 'Second Conditional', 'Inverted Conditional', 'Zero Conditional'], ans: 2, exp: 'Should you need = formal inversion of First Conditional.' },
            { q: '\'If I had left earlier, I wouldn\'t be late.\' Which type?', opts: ['First', 'Second', 'Mixed/Third', 'Zero'], ans: 2, exp: 'Past condition + present result = Mixed Conditional.' }
            ]
          },
          qs: [
            { q: '"If it rains tomorrow, we ___ the picnic." (real future)', opts: ['cancel', 'will cancel', 'would cancel', 'would have cancelled'], ans: 1, exp: 'First Conditional: real possibility about the future.' },
            { q: '"If I ___ more money, I would travel." (unreal present)', opts: ['have', 'had', 'had had', 'will have'], ans: 1, exp: 'Second Conditional: unreal present situation.' },
            { q: '"If I had known, I ___ differently." (unreal past)', opts: ['act', 'would act', 'would have acted', 'will act'], ans: 2, exp: 'Third Conditional: expressing regret or different past outcome.' },
            { q: '"___ you need assistance, don\'t hesitate to ask." (polite)', opts: ['If', 'Unless', 'Should', 'Were'], ans: 2, exp: '"Should you need assistance" = formal inversion of First Conditional.' },
            { q: 'Which conditional expresses a general truth?', opts: ['If it snows, the roads are dangerous.', 'If it snows, I will stay home.', 'If it snowed, I would stay home.', 'If it had snowed, I would have stayed home.'], ans: 0, exp: 'Zero Conditional = general truth: "If it snows, the roads are dangerous."' }
          ]
        },
        {
          id: 'l10h',
          title: 'Advanced Conditional Practice',
          titlePt: 'Prática Avançada de Condicionais',
          icon: '✍️',
          xp: 25,
          learn: {
            explanation: {
              en: 'Advanced practice: choose the right conditional by reading the full context. Is it real or unreal? Past, present, or future? Formal or informal? Keywords like \'had\', \'were\', \'should\' signal formal inversions.',
              pt: 'Prática avançada: escolhe o condicional correcto lendo o contexto completo. É real ou irreal? Passado, presente ou futuro? Formal ou informal? Palavras-chave como \'had\', \'were\', \'should\' sinalizam inversões formais.'
            },
            examples: [
            { en: 'Had she arrived earlier, she would have gotten a seat.', pt: 'Se ela tivesse chegado mais cedo, teria conseguido lugar.' },
            { en: 'Unless you apologise, I won\'t forgive you.', pt: 'A menos que peças desculpa, não te perdoarei.' },
            { en: 'Were it not for your help, I would have failed.', pt: 'Se não fosse a tua ajuda, eu teria falhado.' }
            ],
            practice: [
            { q: '\'Had we known the truth, we ___ differently.\'', opts: ['would act', 'will act', 'would have acted', 'had acted'], ans: 2, exp: 'Third Conditional inversion: would have acted.' },
            { q: '\'___ I you, I would think twice before accepting.\'', opts: ['If', 'Had', 'Were', 'Should'], ans: 2, exp: 'Were I you = If I were you.' }
            ]
          },
          qs: [
            { q: '"Had I known you were coming, I ___ dinner."', opts: ['would prepare', 'would have prepared', 'will prepare', 'prepared'], ans: 1, exp: '"Had I known" (Third Conditional) → "would have prepared".' },
            { q: '"Were she here, she ___ help us."', opts: ['would have', 'would have had', 'would', 'will'], ans: 2, exp: '"Were she here" (Second Conditional inversion) → "would help".' },
            { q: '"If I ___ you, I wouldn\'t have done that."', opts: ['were', 'had been', 'am', 'would be'], ans: 0, exp: 'Mixed conditional: present condition "If I were you" + past result "wouldn\'t have done".' },
            { q: '"You won\'t pass the exam ___ you study."', opts: ['unless', 'if', 'as long as', 'provided that'], ans: 0, exp: '"Unless you study" = if you don\'t study.' },
            { q: '"___ I were you, I would accept the offer."', opts: ['If', 'Unless', 'Were', 'Had'], ans: 2, exp: '"Were I you" = inversion of "If I were you".' }
          ]
        }
      ]
    }
];
