// ═══════════════════════════════════════════════════════════
//  📚 DATA.JS — All static app data
//  English With Sebastian v3.0
// ═══════════════════════════════════════════════════════════

// ─── i18n TRANSLATIONS ───────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Auth
    appTagline: '🔥 The English app that actually has a personality',
    loginTab: '👋 Log In', signupTab: '✨ Sign Up',
    userPlaceholder: '👤 Username', passPlaceholder: '🔒 Password',
    namePlaceholder: '😎 Your name', newUserPlaceholder: '🆔 Pick a username',
    newPassPlaceholder: '🔑 Password (min 8 chars)',
    loginBtn: "🚀 Let's Go!", signupBtn: '🎉 Create Account!',
    demoHint: 'Demo: <b>test</b> / <b>1234</b> — no excuses now',
    loginErr: '❌ Wrong credentials, genius.', regErr: 'Fill everything in properly, please!',
    userTaken: 'Username taken! Try another one.',
    weakPass: '🔒 Password needs 8+ chars, uppercase, lowercase & a number.',
    passStrWeak: 'Weak', passStrFair: 'Fair', passStrStrong: 'Strong',
    googleBtn: '🔐 Continue with Google', authOr: 'or',
    googleSigningIn: 'Opening Google sign-in…', googleError: 'Google sign-in failed. Try again.',
    googleNotConfigured: 'Google login is not configured yet. Add Supabase keys in supabase-config.js.',
    googlePopupBlocked: 'Popup blocked. Allow popups for this site, then try again.',
    // Topbar
    search: 'Search', toggleTheme: 'Toggle theme',
    // Nav
    navHome: 'Home', navGrammar: 'Grammar', navSounds: 'Sounds',
    navAI: 'AI Tutor', navProfile: 'Profile', navAbout: 'About',
    // Home
    homeHeroEyebrow: 'Your learning hub',
    homeHeroGreet: 'Hey,',
    homeHeroSub: 'Level up your English with lessons, games, and your AI tutor — all in one place.',
    homeHeroLevel: 'Level', homeHeroStreak: 'Day streak', homeHeroXP: 'Total XP',
    homeHeroCtaLearn: '▶ Continue learning',
    homeHeroCtaChallenge: '🎲 Daily challenge',
    homeHeroCtaAI: '🤖 Ask AI Tutor',
    dashTitle: 'Your progress',
    dashSubtitle: 'XP, streaks, lessons & quizzes at a glance',
    dashXP: 'Total XP',
    dashStreak: 'Day streak',
    dashLessons: 'Lessons done',
    dashQuizzes: 'Quiz statistics',
    dashQuizTaken: 'Quizzes taken',
    dashAvgAccuracy: 'Avg accuracy',
    dashBestScore: 'Best score',
    dashPerfects: 'Perfect runs',
    dashLevelProgress: 'Level progress',
    dashDailyProgress: 'Daily goal',
    dashCourseProgress: 'Course progress',
    dashOf: '{done} of {total}',
    dashToNext: '{n} XP to Level {lvl}',
    streakTitle: 'Start your streak today!', streakDesc: 'Complete a lesson to begin 🫡',
    streakActive: '🔥 {n}-day streak!', streakActiveDesc: 'Amazing! Keep it going!',
    dailyGoal: '📅 Daily Goal — 50 XP (you got this)',
    xpToday: '{n} XP earned today', xpGoal: '50 XP goal',
    dailyChallenge: 'Daily Challenge', dailyChallengeDesc: "Complete for +10 bonus XP! Don't be lazy 😤",
    dailyDone: '✅ Challenge Complete!', dailyDoneDesc: 'Come back tomorrow for a new one!',
    leaderboard: 'Leaderboard', leaderboardDesc: 'See how you rank this week',
    wordScramble: 'Word Scramble', wordScrambleDesc: 'Quick game to earn extra XP',
    // Grammar
    grammarTitle: '📖 Grammar Lab', grammarSub: 'Master English grammar — one rule at a time 💪',
    grammarSearch: 'Search grammar topics...',
    // Sounds
    soundsTitle: '🔊 Sound Lab', soundsSub: 'Hear it, feel it, speak it — pronunciation mastery 🎤',
    practiceTab: '🗣️ Practice', pairsTab: '👥 Pairs', twistersTab: '🌀 Twisters', difficultTab: '🎯 Sounds',
    hearBtn: '🔊 Hear it', slowBtn: '🐌 Slow', recordBtn: '🎤 Record',
    pairsNote: 'Click to hear the difference between confusable sounds! 👂',
    twistersNote: 'Practice these daily — your fluency will skyrocket! 🚀',
    difficultNote: 'Sounds that trip up Portuguese speakers 🇲🇿 — master these!',
    // AI
    aiName: 'Sebastian AI Tutor', aiSub: 'Ask me anything about English! Grammar, vocabulary, pronunciation...',
    aiOnline: 'Online now', clearChat: '🗑️ Clear chat',
    chatPlaceholder: 'Ask Sebastian anything...',
    aiMode: 'Mode', aiModeNormal: '💬 Normal', aiModeGrammar: '📝 Grammar Check', aiModePron: '🎤 Pronunciation',
    // Profile
    logoutBtn: '🚪 Log Out', dayStreak: 'Day Streak', totalXP: 'Total XP',
    correctAnswers: 'Correct Answers', lessonsDone: 'Lessons Done',
    achievements: '🎖️ Achievements', settings: '⚙️ Settings',
    darkLight: '🌓 Dark / Light Mode', toggle: 'Toggle',
    interfaceLang: '🌐 Interface Language', discoMode: '🕺 Disco Mode',
    konami: '🎮 Konami Code',
    // Quiz
    close: '✕', continue: 'Continue ›', seeResults: 'See Results 🏆',
    correct: '✅ Correct!', incorrect: '❌ Incorrect',
    backHome: '🏠 Back Home', tryAgain: '🔄 Try Again',
    // Game
    gameTitle: '🔤 Word Scramble Madness', submitBtn: '🎯 Submit!',
    surrenderBtn: '💀 Surrender', skipBtn: 'Skip this one (coward 😤)',
    // Toast messages
    toastDisco: '🕺 DISCO MODE! 🎉', toastDiscoOff: 'Disco off. Back to learning 📚',
    toastLight: '☀️ Light mode!', toastDark: '🌙 Dark mode!',
    toastHeart: '❤️ Heart regenerated!', toastAllDone: '🎓 All free lessons completed! You\'re a legend!',
    toastGameOver: '🎮 Game over! Score: {n} · +{n} XP!',
    toastKonami: '🎮 KONAMI CODE! +100 XP!! 🎉',
    // Premium
    premiumTitle: 'Go Premium!', premiumSub: 'Unlock everything and become an English legend.',
    premiumFeat1: 'All units — Phrasal Verbs, Idioms, Advanced',
    premiumFeat2: 'Infinite hearts — fail as many times as you need',
    premiumFeat3: 'Unlimited AI Tutor sessions',
    premiumFeat4: 'Exclusive badges to flex on the leaderboard',
    premiumBtn: '💳 Upgrade — $4.99/month', premiumSkip: 'Maybe when I get paid 💸',
    // About
    aboutTitle: 'About Sebastian', aboutRole: 'English Teacher · Translator · Interpreter',
    aboutLocation: '📍 Maputo / Matola, Mozambique',
    aboutBio: 'Final-year Translation & Interpretation student at Universidade Eduardo Mondlane, passionate educator, and certified English teacher with 4+ years of experience helping students unlock their potential.',
    aboutStats1: 'Years Teaching', aboutStats2: 'Students Taught', aboutStats3: 'Languages', aboutStats4: 'Lessons Created',
    aboutEducation: '🎓 Education', aboutExperience: '💼 Experience', aboutSkills: '⚡ Skills',
    aboutContact: '📬 Get in Touch', aboutDownloadCV: '📄 Download CV',
    certifications: '🏅 Certifications',
    // Level up
    levelUp: 'LEVEL UP!!! 🎉', levelUpText: 'You reached Level {n}!', letsGo: "LET'S GOOOO! 🚀",
    // Search
    searchPlaceholder: 'Search lessons, grammar, sounds...',
    searchEmpty: 'Start typing to search... 🔎', searchNone: 'Nothing found. Try different words 🤔',
    // Loading
    loadMsg0: 'Warming up your brain cells... 🧠',
    loadMsg1: 'Loading vocabulary banks... 📚',
    loadMsg2: 'Calibrating grammar engines... 📖',
    loadMsg3: 'Tuning pronunciation AI... 🎤',
    loadMsg4: 'Preparing your lessons... 🎯',
    loadMsg5: 'Almost there... ✨',
    // Leaderboard
    lbTitle: '🏆 Top Learners',
    // Unit badges
    free: '✓ Free', premium: '👑 Premium',
    // Misc
    noHearts: '❤️ No hearts left! Wait 5 min...', alreadyDone: '✅ Already done today! Come back tomorrow.',
    paymentSoon: '🚧 Payment coming soon — stay tuned!',
    // Admin translations (new)
    loadingUnits: 'Loading units…',
    loadingGrammar: 'Loading grammar…',
    loadingTranslations: 'Loading translations…',
    unitSaved: 'Unit saved!',
    unitDeleted: 'Unit deleted.',
    lessonSaved: 'Lesson saved!',
    lessonDeleted: 'Lesson deleted.',
    grammarSaved: 'Grammar topic saved!',
    grammarDeleted: 'Grammar topic deleted.',
    translationSaved: 'Translation saved!',
    translationDeleted: 'Translation deleted.',
    errorLoading: 'Error loading: ',
    errorSaving: 'Error saving: ',
    errorDeleting: 'Error deleting: ',
    invalidJSON: 'Invalid JSON. Please check the format.',
    confirmDelete: 'Are you sure you want to delete this item?',
    unitAdded: 'Unit added!',
    lessonAdded: 'Lesson added!',
    grammarAdded: 'Grammar topic added!',
    translationAdded: 'Translation added!',
    newUnit: 'New Unit',
    newLesson: 'New Lesson',
    newGrammar: 'New Grammar Topic',
    newTranslation: 'New Translation',
  },
  pt: {
    appTagline: '🔥 A app de inglês que tem personalidade de verdade',
    loginTab: '👋 Entrar', signupTab: '✨ Registar',
    userPlaceholder: '👤 Nome de utilizador', passPlaceholder: '🔒 Palavra-passe',
    namePlaceholder: '😎 O teu nome', newUserPlaceholder: '🆔 Escolhe um utilizador',
    newPassPlaceholder: '🔑 Palavra-passe (mín. 8 caracteres)',
    loginBtn: '🚀 Vamos Lá!', signupBtn: '🎉 Criar Conta!',
    demoHint: 'Demo: <b>test</b> / <b>1234</b> — sem desculpas agora',
    loginErr: '❌ Credenciais erradas, caro!', regErr: 'Preenche tudo correctamente, por favor!',
    userTaken: 'Utilizador já existe! Tenta outro.',
    weakPass: '🔒 A palavra-passe precisa de 8+ caracteres, maiúscula, minúscula e número.',
    passStrWeak: 'Fraca', passStrFair: 'Razoável', passStrStrong: 'Forte',
    googleBtn: '🔐 Continuar com Google', authOr: 'ou',
    googleSigningIn: 'A abrir o Google…', googleError: 'Falha no login Google. Tenta outra vez.',
    googleNotConfigured: 'Login Google ainda não está configurado. Adiciona as chaves em supabase-config.js.',
    googlePopupBlocked: 'Popup bloqueado. Permite popups neste site e tenta de novo.',
    search: 'Pesquisar', toggleTheme: 'Mudar tema',
    navHome: 'Início', navGrammar: 'Gramática', navSounds: 'Sons',
    navAI: 'IA Tutor', navProfile: 'Perfil', navAbout: 'Sobre',
    homeHeroEyebrow: 'O teu centro de estudo',
    homeHeroGreet: 'Olá,',
    homeHeroSub: 'Melhora o teu inglês com lições, jogos e o tutor IA — tudo num só lugar.',
    homeHeroLevel: 'Nível', homeHeroStreak: 'Dias seguidos', homeHeroXP: 'XP total',
    homeHeroCtaLearn: '▶ Continuar a aprender',
    homeHeroCtaChallenge: '🎲 Desafio diário',
    homeHeroCtaAI: '🤖 Perguntar à IA',
    dashTitle: 'O teu progresso',
    dashSubtitle: 'XP, séries, lições e quizzes num relance',
    dashXP: 'XP total',
    dashStreak: 'Dias seguidos',
    dashLessons: 'Lições feitas',
    dashQuizzes: 'Estatísticas de quiz',
    dashQuizTaken: 'Quizzes feitos',
    dashAvgAccuracy: 'Precisão média',
    dashBestScore: 'Melhor resultado',
    dashPerfects: 'Quizzes perfeitos',
    dashLevelProgress: 'Progresso de nível',
    dashDailyProgress: 'Meta diária',
    dashCourseProgress: 'Progresso do curso',
    dashOf: '{done} de {total}',
    dashToNext: '{n} XP para o Nível {lvl}',
    streakTitle: 'Começa a tua série hoje!', streakDesc: 'Completa uma lição para começar 🫡',
    streakActive: '🔥 Série de {n} dias!', streakActiveDesc: 'Incrível! Continua assim!',
    dailyGoal: '📅 Meta Diária — 50 XP (consegues)',
    xpToday: '{n} XP ganhos hoje', xpGoal: 'Meta: 50 XP',
    dailyChallenge: 'Desafio Diário', dailyChallengeDesc: 'Completa para +10 XP bónus! Não sejas preguiçoso 😤',
    dailyDone: '✅ Desafio Completo!', dailyDoneDesc: 'Volta amanhã para um novo desafio!',
    leaderboard: 'Classificação', leaderboardDesc: 'Vê como estás classificado esta semana',
    wordScramble: 'Palavras Baralhadas', wordScrambleDesc: 'Jogo rápido para ganhar XP extra',
    grammarTitle: '📖 Laboratório de Gramática', grammarSub: 'Domina a gramática inglesa — uma regra de cada vez 💪',
    grammarSearch: 'Pesquisar tópicos de gramática...',
    soundsTitle: '🔊 Laboratório de Sons', soundsSub: 'Ouve, sente, fala — domínio da pronúncia 🎤',
    practiceTab: '🗣️ Praticar', pairsTab: '👥 Pares', twistersTab: '🌀 Trava-línguas', difficultTab: '🎯 Sons',
    hearBtn: '🔊 Ouvir', slowBtn: '🐌 Devagar', recordBtn: '🎤 Gravar',
    pairsNote: 'Clica para ouvir a diferença entre sons confundíveis! 👂',
    twistersNote: 'Pratica estes diariamente — a tua fluência vai disparar! 🚀',
    difficultNote: 'Sons que dificultam os falantes de português 🇲🇿 — domina-os!',
    aiName: 'IA Tutora Sebastian', aiSub: 'Pergunta-me qualquer coisa sobre inglês! Gramática, vocabulário, pronúncia...',
    aiOnline: 'Online agora', clearChat: '🗑️ Limpar conversa',
    chatPlaceholder: 'Pergunta qualquer coisa ao Sebastian...',
    aiMode: 'Modo', aiModeNormal: '💬 Normal', aiModeGrammar: '📝 Correcção', aiModePron: '🎤 Pronúncia',
    logoutBtn: '🚪 Sair', dayStreak: 'Dias Consecutivos', totalXP: 'XP Total',
    correctAnswers: 'Respostas Correctas', lessonsDone: 'Lições Concluídas',
    achievements: '🎖️ Conquistas', settings: '⚙️ Configurações',
    darkLight: '🌓 Modo Escuro / Claro', toggle: 'Alternar',
    interfaceLang: '🌐 Idioma da Interface', discoMode: '🕺 Modo Discoteca',
    konami: '🎮 Código Konami',
    close: '✕', continue: 'Continuar ›', seeResults: 'Ver Resultados 🏆',
    correct: '✅ Correcto!', incorrect: '❌ Incorrecto',
    backHome: '🏠 Início', tryAgain: '🔄 Tentar Novamente',
    gameTitle: '🔤 Palavras Baralhadas', submitBtn: '🎯 Submeter!',
    surrenderBtn: '💀 Desistir', skipBtn: 'Saltar esta (cobarde 😤)',
    toastDisco: '🕺 MODO DISCOTECA! 🎉', toastDiscoOff: 'Discoteca desligada. Volta ao estudo 📚',
    toastLight: '☀️ Modo claro!', toastDark: '🌙 Modo escuro!',
    toastHeart: '❤️ Coração regenerado!', toastAllDone: '🎓 Todas as lições gratuitas concluídas! Eras uma lenda!',
    toastGameOver: '🎮 Jogo terminado! Pontuação: {n} · +{n} XP!',
    toastKonami: '🎮 CÓDIGO KONAMI! +100 XP!! 🎉',
    premiumTitle: 'Torna-te Premium!', premiumSub: 'Desbloqueia tudo e torna-te uma lenda do inglês.',
    premiumFeat1: 'Todas as unidades — Phrasal Verbs, Expressões, Avançado',
    premiumFeat2: 'Corações infinitos — falha quantas vezes precisares',
    premiumFeat3: 'Sessões ilimitadas com a IA Tutora',
    premiumFeat4: 'Distintivos exclusivos para mostrar na classificação',
    premiumBtn: '💳 Actualizar — $4.99/mês', premiumSkip: 'Talvez quando me pagarem 💸',
    aboutTitle: 'Sobre o Sebastian', aboutRole: 'Professor de Inglês · Tradutor · Intérprete',
    aboutLocation: '📍 Maputo / Matola, Moçambique',
    aboutBio: 'Estudante finalista em Tradução e Interpretação na Universidade Eduardo Mondlane, educador apaixonado e professor certificado de inglês com mais de 4 anos de experiência a ajudar estudantes a atingir o seu potencial.',
    aboutStats1: 'Anos de Ensino', aboutStats2: 'Estudantes', aboutStats3: 'Línguas', aboutStats4: 'Lições Criadas',
    aboutEducation: '🎓 Formação', aboutExperience: '💼 Experiência', aboutSkills: '⚡ Competências',
    aboutContact: '📬 Contacto', aboutDownloadCV: '📄 Descarregar CV',
    certifications: '🏅 Certificações',
    levelUp: 'SUBIU DE NÍVEL!!! 🎉', levelUpText: 'Chegaste ao Nível {n}!', letsGo: 'VAMOS LÁ! 🚀',
    searchPlaceholder: 'Pesquisar lições, gramática, sons...',
    searchEmpty: 'Começa a escrever para pesquisar... 🔎', searchNone: 'Nada encontrado. Tenta palavras diferentes 🤔',
    loadMsg0: 'A aquecer as células cerebrais... 🧠',
    loadMsg1: 'A carregar vocabulário... 📚',
    loadMsg2: 'A calibrar os motores de gramática... 📖',
    loadMsg3: 'A afinar a IA de pronúncia... 🎤',
    loadMsg4: 'A preparar as tuas lições... 🎯',
    loadMsg5: 'Quase lá... ✨',
    lbTitle: '🏆 Melhores Estudantes',
    free: '✓ Grátis', premium: '👑 Premium',
    noHearts: '❤️ Sem corações! Espera 5 min...', alreadyDone: '✅ Já concluído hoje! Volta amanhã.',
    paymentSoon: '🚧 Pagamento em breve — mantém-te atento!',
    // Admin translations (new)
    loadingUnits: 'A carregar unidades…',
    loadingGrammar: 'A carregar gramática…',
    loadingTranslations: 'A carregar traduções…',
    unitSaved: 'Unidade guardada!',
    unitDeleted: 'Unidade eliminada.',
    lessonSaved: 'Liç�o guardada!',
    lessonDeleted: 'Liç�o eliminada.',
    grammarSaved: 'Tópico gramatical guardado!',
    grammarDeleted: 'Tópico gramatical eliminado.',
    translationSaved: 'Tradução guardada!',
    translationDeleted: 'Tradução eliminada.',
    errorLoading: 'Erro ao carregar: ',
    errorSaving: 'Erro ao guardar: ',
    errorDeleting: 'Erro ao eliminar: ',
    invalidJSON: 'JSON inválido. Verifica o formato.',
    confirmDelete: 'Tens a certeza que queres eliminar este item?',
    unitAdded: 'Unidade adicionada!',
    lessonAdded: 'Liç�o adicionada!',
    grammarAdded: 'Tópico gramatical adicionado!',
    translationAdded: 'Tradução adicionada!',
    newUnit: 'Nova Unidade',
    newLesson: 'Nova Lição',
    newGrammar: 'Novo Tópico Gramatical',
    newTranslation: 'Nova Tradução',
  },
  // ── Mozambican Portuguese (mz) — distinct flavour with local expressions ──
  mz: {
    appTagline: '🔥 A app de inglês que bate mesmo — feita em Moçambique 🇲🇿',
    loginTab: '👋 Entrar', signupTab: '✨ Registar',
    userPlaceholder: '👤 Nome de utilizador', passPlaceholder: '🔒 Palavra-passe',
    namePlaceholder: '😎 O teu nome', newUserPlaceholder: '🆔 Escolhe um nome',
    newPassPlaceholder: '🔑 Palavra-passe (mín. 8 caracteres)',
    loginBtn: '🚀 Vamos a isso!', signupBtn: '🎉 Criar Conta!',
    loginErr: '❌ Credenciais erradas, mano!', regErr: 'Preenche tudo direito, please!',
    userTaken: 'Este nome já existe! Tenta outro.',
    weakPass: '🔒 A palavra-passe precisa de 8+ caracteres, maiúscula, minúscula e número.',
    passStrWeak: 'Fraca', passStrFair: 'Razoável', passStrStrong: 'Forte',
    googleBtn: '🔐 Continuar com Google', authOr: 'ou',
    googleSigningIn: 'A abrir o Google…', googleError: 'Login Google falhou. Tenta outra vez.',
    googleNotConfigured: 'Login Google ainda não configurado. Adiciona as chaves em supabase-config.js.',
    googlePopupBlocked: 'Popup bloqueado. Permite popups neste site e tenta de novo.',
    search: 'Pesquisar', toggleTheme: 'Mudar tema',
    navHome: 'Início', navGrammar: 'Gramática', navSounds: 'Sons',
    navAI: 'IA Tutora', navProfile: 'Perfil', navAbout: 'Sobre',
    homeHeroEyebrow: 'O teu centro de aprendizagem',
    homeHeroGreet: 'Olá,',
    homeHeroSub: 'Melhora o teu inglês com lições, jogos e a tutora IA — tudo num só lugar, de graça.',
    homeHeroLevel: 'Nível', homeHeroStreak: 'Dias seguidos', homeHeroXP: 'XP total',
    homeHeroCtaLearn: '▶ Continuar a aprender',
    homeHeroCtaChallenge: '🎲 Desafio do dia',
    homeHeroCtaAI: '🤖 Perguntar à IA',
    dashTitle: 'O teu progresso',
    dashSubtitle: 'XP, séries, lições e quizzes de uma vez',
    dashXP: 'XP total',
    dashStreak: 'Dias seguidos',
    dashLessons: 'Lições feitas',
    dashQuizzes: 'Estatísticas de quiz',
    dashQuizTaken: 'Quizzes feitos',
    dashAvgAccuracy: 'Precisão média',
    dashBestScore: 'Melhor resultado',
    dashPerfects: 'Quizzes perfeitos',
    dashLevelProgress: 'Progresso de nível',
    dashDailyProgress: 'Meta diária',
    dashCourseProgress: 'Progresso do curso',
    dashOf: '{done} de {total}',
    dashToNext: '{n} XP para o Nível {lvl}',
    streakTitle: 'Começa a tua série hoje!', streakDesc: 'Completa uma lição para começar 🫡',
    streakActive: '🔥 Série de {n} dias!', streakActiveDesc: 'Isso aí! Não pares agora!',
    dailyGoal: '📅 Meta do Dia — 50 XP (consegues sim!)',
    xpToday: '{n} XP ganhos hoje', xpGoal: 'Meta: 50 XP',
    dailyChallenge: 'Desafio Diário', dailyChallengeDesc: 'Faz para ganhar +10 XP bónus! Não fica parado 😤',
    dailyDone: '✅ Desafio Completo!', dailyDoneDesc: 'Volta amanhã para um novo desafio!',
    leaderboard: 'Classificação', leaderboardDesc: 'Vê como estás nessa semana',
    wordScramble: 'Palavras Baralhadas', wordScrambleDesc: 'Jogo rápido para ganhar XP extra',
    grammarTitle: '📖 Laboratório de Gramática', grammarSub: 'Domina a gramática inglesa — uma regra de cada vez 💪',
    grammarSearch: 'Pesquisar tópicos de gramática...',
    soundsTitle: '🔊 Laboratório de Sons', soundsSub: 'Ouve, sente, fala — domínio da pronúncia 🎤',
    practiceTab: '🗣️ Praticar', pairsTab: '👥 Pares', twistersTab: '🌀 Trava-línguas', difficultTab: '🎯 Sons',
    hearBtn: '🔊 Ouvir', slowBtn: '🐌 Devagar', recordBtn: '🎤 Gravar',
    pairsNote: 'Clica para ouvir a diferença entre sons parecidos! 👂',
    twistersNote: 'Pratica estes todos os dias — a tua fluência vai a disparar! 🚀',
    difficultNote: 'Sons que dificultam os falantes de português moçambicano 🇲🇿 — domina-os!',
    aiName: 'IA Tutora Sebastian', aiSub: 'Pergunta qualquer coisa sobre inglês! Gramática, vocabulário, pronúncia...',
    aiOnline: 'Online agora', clearChat: '🗑️ Limpar conversa',
    chatPlaceholder: 'Pergunta qualquer coisa ao Sebastian...',
    aiMode: 'Modo', aiModeNormal: '💬 Normal', aiModeGrammar: '📝 Correcção', aiModePron: '🎤 Pronúncia',
    logoutBtn: '🚪 Sair', dayStreak: 'Dias Consecutivos', totalXP: 'XP Total',
    correctAnswers: 'Respostas Certas', lessonsDone: 'Lições Concluídas',
    achievements: '🎖️ Conquistas', settings: '⚙️ Configurações',
    darkLight: '🌓 Modo Escuro / Claro', toggle: 'Alternar',
    interfaceLang: '🌐 Língua da Interface', discoMode: '🕺 Modo Discoteca',
    konami: '🎮 Código Konami',
    close: '✕', continue: 'Continuar ›', seeResults: 'Ver Resultados 🏆',
    correct: '✅ Correcto!', incorrect: '❌ Incorrecto',
    backHome: '🏠 Início', tryAgain: '🔄 Tentar Outra Vez',
    gameTitle: '🔤 Palavras Baralhadas', submitBtn: '🎯 Submeter!',
    surrenderBtn: '💀 Desistir', skipBtn: 'Saltar esta (cobarde 😤)',
    toastDisco: '🕺 MODO DISCOTECA! 🎉', toastDiscoOff: 'Discoteca desligada. Volta ao estudo 📚',
    toastLight: '☀️ Modo claro!', toastDark: '🌙 Modo escuro!',
    toastHeart: '❤️ Coração regenerado!', toastAllDone: '🎓 Todas as lições grátis concluídas! Eras um lenda!',
    toastGameOver: '🎮 Jogo terminado! Pontuação: {n} · +{n} XP!',
    toastKonami: '🎮 CÓDIGO KONAMI! +100 XP!! 🎉',
    premiumTitle: 'Vai Premium!', premiumSub: 'Desbloqueia tudo e torna-te uma lenda do inglês.',
    premiumFeat1: 'Todas as unidades — Phrasal Verbs, Expressões, Avançado',
    premiumFeat2: 'Corações infinitos — falha quantas vezes precisares',
    premiumFeat3: 'Sessões ilimitadas com a IA Tutora',
    premiumFeat4: 'Distintivos exclusivos para mostrar na classificação',
    premiumBtn: '💳 Actualizar — $4.99/mês', premiumSkip: 'Talvez quando me pagarem 💸',
    aboutTitle: 'Sobre o Sebastian', aboutRole: 'Professor de Inglês · Tradutor · Intérprete',
    aboutLocation: '📍 Maputo / Matola, Moçambique 🇲🇿',
    aboutBio: 'Estudante finalista de Tradução e Interpretação na Universidade Eduardo Mondlane, educador apaixonado e professor certificado de inglês com mais de 4 anos de experiência a ajudar estudantes moçambicanos a atingir o seu potencial.',
    aboutStats1: 'Anos de Ensino', aboutStats2: 'Estudantes', aboutStats3: 'Línguas', aboutStats4: 'Lições Criadas',
    aboutEducation: '🎓 Formação', aboutExperience: '💼 Experiência', aboutSkills: '⚡ Competências',
    aboutContact: '📬 Contacto', aboutDownloadCV: '📄 Descarregar CV',
    certifications: '🏅 Certificações',
    levelUp: 'SUBIU DE NÍVEL!!! 🎉', levelUpText: 'Chegaste ao Nível {n}!', letsGo: 'VAMOS A ISSO! 🚀',
    searchPlaceholder: 'Pesquisar lições, gramática, sons...',
    searchEmpty: 'Começa a escrever para pesquisar... 🔎', searchNone: 'Nada encontrado. Tenta palavras diferentes 🤔',
    loadMsg0: 'A aquecer as células cerebrais... 🧠',
    loadMsg1: 'A carregar vocabulário... 📚',
    loadMsg2: 'A calibrar os motores de gramática... 📖',
    loadMsg3: 'A afinar a IA de pronúncia... 🎤',
    loadMsg4: 'A preparar as tuas lições... 🎯',
    loadMsg5: 'Quase lá... ✨',
    lbTitle: '🏆 Melhores Estudantes',
    free: '✓ Grátis', premium: '👑 Premium',
    noHearts: '❤️ Sem corações! Espera 5 min...', alreadyDone: '✅ Já concluído hoje! Volta amanhã.',
    paymentSoon: '🚧 Pagamento em breve — aguarda!',
    // Admin translations (new)
    loadingUnits: 'A carregar unidades…',
    loadingGrammar: 'A carregar gramática…',
    loadingTranslations: 'A carregar traduções…',
    unitSaved: 'Unidade guardada!',
    unitDeleted: 'Unidade eliminada.',
    lessonSaved: 'Liç�o guardada!',
    lessonDeleted: 'Liç�o eliminada.',
    grammarSaved: 'Tópico gramatical guardado!',
    grammarDeleted: 'Tópico gramatical eliminado.',
    translationSaved: 'Tradução guardada!',
    translationDeleted: 'Tradução eliminada.',
    errorLoading: 'Erro ao carregar: ',
    errorSaving: 'Erro ao guardar: ',
    errorDeleting: 'Erro ao eliminar: ',
    invalidJSON: 'JSON inválido. Verifica o formato.',
    confirmDelete: 'Tens a certeza que queres eliminar este item?',
    unitAdded: 'Unidade adicionada!',
    lessonAdded: 'Liç�o adicionada!',
    grammarAdded: 'Tópico gramatical adicionado!',
    translationAdded: 'Tradução adicionada!',
    newUnit: 'Nova Unidade',
    newLesson: 'Nova Lição',
    newGrammar: 'Novo Tópico Gramatical',
    newTranslation: 'Nova Tradução',
  },
  // ── British English (en-gb) — same as en with minor differences ──
  'en-gb': {
    appTagline: '🔥 The English app that actually has a personality',
    loginTab: '👋 Log In', signupTab: '✨ Sign Up',
    userPlaceholder: '👤 Username', passPlaceholder: '🔒 Password',
    namePlaceholder: '😎 Your name', newUserPlaceholder: '🆔 Choose a username',
    newPassPlaceholder: '🔑 Password (min 8 chars)',
    loginBtn: "🚀 Let's Go!", signupBtn: '🎉 Create Account!',
    loginErr: '❌ Wrong credentials, mate.', regErr: 'Please fill everything in correctly!',
    userTaken: 'Username taken! Try another one.',
    weakPass: '🔒 Password needs 8+ chars, uppercase, lowercase & a number.',
    passStrWeak: 'Weak', passStrFair: 'Fair', passStrStrong: 'Strong',
    googleBtn: '🔐 Continue with Google', authOr: 'or',
    googleSigningIn: 'Opening Google sign-in…', googleError: 'Google sign-in failed. Try again.',
    googleNotConfigured: 'Google login is not configured yet. Add Supabase keys in supabase-config.js.',
    googlePopupBlocked: 'Pop-up blocked. Allow pop-ups for this site, then try again.',
    search: 'Search', toggleTheme: 'Toggle theme',
    navHome: 'Home', navGrammar: 'Grammar', navSounds: 'Sounds',
    navAI: 'AI Tutor', navProfile: 'Profile', navAbout: 'About',
    homeHeroEyebrow: 'Your learning hub',
    homeHeroGreet: 'Hey,',
    homeHeroSub: 'Level up your English with lessons, games, and your AI tutor — all in one place.',
    homeHeroLevel: 'Level', homeHeroStreak: 'Day streak', homeHeroXP: 'Total XP',
    homeHeroCtaLearn: '▶ Continue learning',
    homeHeroCtaChallenge: '🎲 Daily challenge',
    homeHeroCtaAI: '🤖 Ask AI Tutor',
    dashTitle: 'Your progress', dashSubtitle: 'XP, streaks, lessons & quizzes at a glance',
    dashXP: 'Total XP', dashStreak: 'Day streak', dashLessons: 'Lessons done',
    dashQuizzes: 'Quiz statistics', dashQuizTaken: 'Quizzes taken',
    dashAvgAccuracy: 'Avg accuracy', dashBestScore: 'Best score', dashPerfects: 'Perfect runs',
    dashLevelProgress: 'Level progress', dashDailyProgress: 'Daily goal',
    dashCourseProgress: 'Course progress', dashOf: '{done} of {total}', dashToNext: '{n} XP to Level {lvl}',
    streakTitle: 'Start your streak today!', streakDesc: 'Complete a lesson to begin 🫡',
    streakActive: '🔥 {n}-day streak!', streakActiveDesc: 'Brilliant! Keep it going!',
    dailyGoal: '📅 Daily Goal — 50 XP (you\'ve got this)',
    xpToday: '{n} XP earned today', xpGoal: '50 XP goal',
    dailyChallenge: 'Daily Challenge', dailyChallengeDesc: "Complete for +10 bonus XP! Don't be lazy 😤",
    dailyDone: '✅ Challenge Complete!', dailyDoneDesc: 'Come back tomorrow for a new one!',
    leaderboard: 'Leaderboard', leaderboardDesc: 'See how you rank this week',
    wordScramble: 'Word Scramble', wordScrambleDesc: 'Quick game to earn extra XP',
    grammarTitle: '📖 Grammar Lab', grammarSub: 'Master English grammar — one rule at a time 💪',
    grammarSearch: 'Search grammar topics...',
    soundsTitle: '🔊 Sound Lab', soundsSub: 'Hear it, feel it, speak it — pronunciation mastery 🎤',
    practiceTab: '🗣️ Practice', pairsTab: '👥 Pairs', twistersTab: '🌀 Twisters', difficultTab: '🎯 Sounds',
    hearBtn: '🔊 Hear it', slowBtn: '🐌 Slow', recordBtn: '🎤 Record',
    pairsNote: 'Click to hear the difference between confusable sounds! 👂',
    twistersNote: 'Practice these daily — your fluency will skyrocket! 🚀',
    difficultNote: 'Sounds that trip up Portuguese speakers 🇲🇿 — master these!',
    aiName: 'Sebastian AI Tutor', aiSub: 'Ask me anything about English! Grammar, vocabulary, pronunciation...',
    aiOnline: 'Online now', clearChat: '🗑️ Clear chat', chatPlaceholder: 'Ask Sebastian anything...',
    aiMode: 'Mode', aiModeNormal: '💬 Normal', aiModeGrammar: '📝 Grammar Check', aiModePron: '🎤 Pronunciation',
    logoutBtn: '🚪 Log Out', dayStreak: 'Day Streak', totalXP: 'Total XP',
    correctAnswers: 'Correct Answers', lessonsDone: 'Lessons Done',
    achievements: '🎖️ Achievements', settings: '⚙️ Settings',
    darkLight: '🌓 Dark / Light Mode', toggle: 'Toggle',
    interfaceLang: '🌐 Interface Language', discoMode: '🕺 Disco Mode', konami: '🎮 Konami Code',
    close: '✕', continue: 'Continue ›', seeResults: 'See Results 🏆',
    correct: '✅ Correct!', incorrect: '❌ Incorrect',
    backHome: '🏠 Back Home', tryAgain: '🔄 Try Again',
    gameTitle: '🔤 Word Scramble Madness', submitBtn: '🎯 Submit!',
    surrenderBtn: '💀 Surrender', skipBtn: 'Skip this one (coward 😤)',
    toastDisco: '🕺 DISCO MODE! 🎉', toastDiscoOff: 'Disco off. Back to learning 📚',
    toastLight: '☀️ Light mode!', toastDark: '🌙 Dark mode!',
    toastHeart: '❤️ Heart regenerated!', toastAllDone: '🎓 All free lessons completed! You\'re a legend!',
    toastGameOver: '🎮 Game over! Score: {n} · +{n} XP!',
    toastKonami: '🎮 KONAMI CODE! +100 XP!! 🎉',
    premiumTitle: 'Go Premium!', premiumSub: 'Unlock everything and become an English legend.',
    premiumFeat1: 'All units — Phrasal Verbs, Idioms, Advanced',
    premiumFeat2: 'Infinite hearts — fail as many times as you need',
    premiumFeat3: 'Unlimited AI Tutor sessions',
    premiumFeat4: 'Exclusive badges to flex on the leaderboard',
    premiumBtn: '💳 Upgrade — $4.99/month', premiumSkip: 'Maybe when I get paid 💸',
    aboutTitle: 'About Sebastian', aboutRole: 'English Teacher · Translator · Interpreter',
    aboutLocation: '📍 Maputo / Matola, Mozambique',
    aboutBio: 'Final-year Translation & Interpretation student at Universidade Eduardo Mondlane, passionate educator, and certified English teacher with 4+ years of experience helping students unlock their potential.',
    aboutStats1: 'Years Teaching', aboutStats2: 'Students Taught', aboutStats3: 'Languages', aboutStats4: 'Lessons Created',
    aboutEducation: '🎓 Education', aboutExperience: '💼 Experience', aboutSkills: '⚡ Skills',
    aboutContact: '📬 Get in Touch', aboutDownloadCV: '📄 Download CV',
    certifications: '🏅 Certifications',
    levelUp: 'LEVEL UP!!! 🎉', levelUpText: 'You reached Level {n}!', letsGo: "LET'S GOOOO! 🚀",
    searchPlaceholder: 'Search lessons, grammar, sounds...',
    searchEmpty: 'Start typing to search... 🔎', searchNone: 'Nothing found. Try different words 🤔',
    loadMsg0: 'Warming up your brain cells... 🧠',
    loadMsg1: 'Loading vocabulary banks... 📚',
    loadMsg2: 'Calibrating grammar engines... 📖',
    loadMsg3: 'Tuning pronunciation AI... 🎤',
    loadMsg4: 'Preparing your lessons... 🎯',
    loadMsg5: 'Almost there... ✨',
    lbTitle: '🏆 Top Learners',
    free: '✓ Free', premium: '👑 Premium',
    noHearts: '❤️ No hearts left! Wait 5 min...', alreadyDone: '✅ Already done today! Come back tomorrow.',
    paymentSoon: '🚧 Payment coming soon — stay tuned!',
    // Admin translations (new)
    loadingUnits: 'Loading units…',
    loadingGrammar: 'Loading grammar…',
    loadingTranslations: 'Loading translations…',
    unitSaved: 'Unit saved!',
    unitDeleted: 'Unit deleted.',
    lessonSaved: 'Lesson saved!',
    lessonDeleted: 'Lesson deleted.',
    grammarSaved: 'Grammar topic saved!',
    grammarDeleted: 'Grammar topic deleted.',
    translationSaved: 'Translation saved!',
    translationDeleted: 'Translation deleted.',
    errorLoading: 'Error loading: ',
    errorSaving: 'Error saving: ',
    errorDeleting: 'Error deleting: ',
    invalidJSON: 'Invalid JSON. Please check the format.',
    confirmDelete: 'Are you sure you want to delete this item?',
    unitAdded: 'Unit added!',
    lessonAdded: 'Lesson added!',
    grammarAdded: 'Grammar topic added!',
    translationAdded: 'Translation added!',
    newUnit: 'New Unit',
    newLesson: 'New Lesson',
    newGrammar: 'New Grammar Topic',
    newTranslation: 'New Translation',
  },
  // ── European Portuguese (pt-pt) ──
  'pt-pt': {
    appTagline: '🔥 A app de inglês que tem mesmo personalidade',
    loginTab: '👋 Entrar', signupTab: '✨ Registar',
    userPlaceholder: '👤 Nome de utilizador', passPlaceholder: '🔒 Palavra-passe',
    namePlaceholder: '😎 O teu nome', newUserPlaceholder: '🆔 Escolhe um utilizador',
    newPassPlaceholder: '🔑 Palavra-passe (mín. 8 caracteres)',
    loginBtn: '🚀 Vamos lá!', signupBtn: '🎉 Criar Conta!',
    loginErr: '❌ Credenciais erradas, pá!', regErr: 'Preenche tudo correctamente, se faz favor!',
    userTaken: 'Utilizador já existe! Tenta outro.',
    weakPass: '🔒 A palavra-passe precisa de 8+ caracteres, maiúscula, minúscula e número.',
    passStrWeak: 'Fraca', passStrFair: 'Razoável', passStrStrong: 'Forte',
    googleBtn: '🔐 Continuar com Google', authOr: 'ou',
    googleSigningIn: 'A abrir o Google…', googleError: 'Falha no login do Google. Tenta outra vez.',
    googleNotConfigured: 'Login Google não configurado. Adiciona as chaves em supabase-config.js.',
    googlePopupBlocked: 'Pop-up bloqueado. Permite pop-ups neste site e tenta novamente.',
    search: 'Pesquisar', toggleTheme: 'Mudar tema',
    navHome: 'Início', navGrammar: 'Gramática', navSounds: 'Sons',
    navAI: 'Tutor IA', navProfile: 'Perfil', navAbout: 'Sobre',
    homeHeroEyebrow: 'O teu centro de aprendizagem',
    homeHeroGreet: 'Olá,',
    homeHeroSub: 'Melhora o teu inglês com lições, jogos e o tutor IA — tudo num só lugar.',
    homeHeroLevel: 'Nível', homeHeroStreak: 'Dias seguidos', homeHeroXP: 'XP total',
    homeHeroCtaLearn: '▶ Continuar a aprender',
    homeHeroCtaChallenge: '🎲 Desafio diário',
    homeHeroCtaAI: '🤖 Perguntar ao Tutor IA',
    dashTitle: 'O teu progresso', dashSubtitle: 'XP, séries, lições e quizzes de uma vez',
    dashXP: 'XP total', dashStreak: 'Dias seguidos', dashLessons: 'Lições concluídas',
    dashQuizzes: 'Estatísticas de quiz', dashQuizTaken: 'Quizzes realizados',
    dashAvgAccuracy: 'Precisão média', dashBestScore: 'Melhor resultado', dashPerfects: 'Quizzes perfeitos',
    dashLevelProgress: 'Progresso de nível', dashDailyProgress: 'Meta diária',
    dashCourseProgress: 'Progresso do curso', dashOf: '{done} de {total}', dashToNext: '{n} XP para o Nível {lvl}',
    streakTitle: 'Começa a tua série hoje!', streakDesc: 'Completa uma lição para começar 🫡',
    streakActive: '🔥 Série de {n} dias!', streakActiveDesc: 'Óptimo! Continua assim!',
    dailyGoal: '📅 Meta Diária — 50 XP (tu consegues)',
    xpToday: '{n} XP ganhos hoje', xpGoal: 'Meta: 50 XP',
    dailyChallenge: 'Desafio Diário', dailyChallengeDesc: 'Completa para +10 XP bónus! Não sejas preguiçoso 😤',
    dailyDone: '✅ Desafio Completo!', dailyDoneDesc: 'Volta amanhã para um novo desafio!',
    leaderboard: 'Classificação', leaderboardDesc: 'Vê como estás classificado esta semana',
    wordScramble: 'Palavras Baralhadas', wordScrambleDesc: 'Jogo rápido para ganhar XP extra',
    grammarTitle: '📖 Laboratório de Gramática', grammarSub: 'Domina a gramática inglesa — uma regra de cada vez 💪',
    grammarSearch: 'Pesquisar tópicos de gramática...',
    soundsTitle: '🔊 Laboratório de Sons', soundsSub: 'Ouve, sente, fala — domínio da pronúncia 🎤',
    practiceTab: '🗣️ Praticar', pairsTab: '👥 Pares', twistersTab: '🌀 Trava-línguas', difficultTab: '🎯 Sons',
    hearBtn: '🔊 Ouvir', slowBtn: '🐌 Devagar', recordBtn: '🎤 Gravar',
    pairsNote: 'Clica para ouvires a diferença entre sons confundíveis! 👂',
    twistersNote: 'Pratica estes diariamente — a tua fluência vai disparar! 🚀',
    difficultNote: 'Sons que dificultam os falantes de português 🇵🇹 — domina-os!',
    aiName: 'Tutor IA Sebastian', aiSub: 'Pergunta-me qualquer coisa sobre inglês! Gramática, vocabulário, pronúncia...',
    aiOnline: 'Online agora', clearChat: '🗑️ Limpar conversa', chatPlaceholder: 'Pergunta qualquer coisa ao Sebastian...',
    aiMode: 'Modo', aiModeNormal: '💬 Normal', aiModeGrammar: '📝 Correcção', aiModePron: '🎤 Pronúncia',
    logoutBtn: '🚪 Terminar sessão', dayStreak: 'Dias Consecutivos', totalXP: 'XP Total',
    correctAnswers: 'Respostas Correctas', lessonsDone: 'Lições Concluídas',
    achievements: '🎖️ Conquistas', settings: '⚙️ Definições',
    darkLight: '🌓 Modo Escuro / Claro', toggle: 'Alternar',
    interfaceLang: '🌐 Idioma da Interface', discoMode: '🕺 Modo Discoteca', konami: '🎮 Código Konami',
    close: '✕', continue: 'Continuar ›', seeResults: 'Ver Resultados 🏆',
    correct: '✅ Correcto!', incorrect: '❌ Incorrecto',
    backHome: '🏠 Início', tryAgain: '🔄 Tentar Novamente',
    gameTitle: '🔤 Palavras Baralhadas', submitBtn: '🎯 Submeter!',
    surrenderBtn: '💀 Desistir', skipBtn: 'Saltar esta (cobarde 😤)',
    toastDisco: '🕺 MODO DISCOTECA! 🎉', toastDiscoOff: 'Discoteca desligada. Volta ao estudo 📚',
    toastLight: '☀️ Modo claro!', toastDark: '🌙 Modo escuro!',
    toastHeart: '❤️ Coração regenerado!', toastAllDone: '🎓 Todas as lições gratuitas concluídas! És uma lenda!',
    toastGameOver: '🎮 Jogo terminado! Pontuação: {n} · +{n} XP!',
    toastKonami: '🎮 CÓDIGO KONAMI! +100 XP!! 🎉',
    premiumTitle: 'Torna-te Premium!', premiumSub: 'Desbloqueia tudo e torna-te uma lenda do inglês.',
    premiumFeat1: 'Todas as unidades — Phrasal Verbs, Expressões, Avançado',
    premiumFeat2: 'Corações infinitos — falha quantas vezes precisares',
    premiumFeat3: 'Sessões ilimitadas com o Tutor IA',
    premiumFeat4: 'Distintivos exclusivos para mostrar na classificação',
    premiumBtn: '💳 Actualizar — $4.99/mês', premiumSkip: 'Talvez quando me pagarem 💸',
    aboutTitle: 'Sobre o Sebastian', aboutRole: 'Professor de Inglês · Tradutor · Intérprete',
    aboutLocation: '📍 Maputo / Matola, Moçambique',
    aboutBio: 'Estudante finalista de Tradução e Interpretação na Universidade Eduardo Mondlane, educador apaixonado e professor certificado de inglês com mais de 4 anos de experiência a ajudar estudantes a atingir o seu potencial.',
    aboutStats1: 'Anos de Ensino', aboutStats2: 'Estudantes', aboutStats3: 'Línguas', aboutStats4: 'Lições Criadas',
    aboutEducation: '🎓 Formação', aboutExperience: '💼 Experiência', aboutSkills: '⚡ Competências',
    aboutContact: '📬 Contacto', aboutDownloadCV: '📄 Descarregar CV',
    certifications: '🏅 Certificações',
    levelUp: 'SUBIU DE NÍVEL!!! 🎉', levelUpText: 'Chegaste ao Nível {n}!', letsGo: 'VAMOS LÁ! 🚀',
    searchPlaceholder: 'Pesquisar lições, gramática, sons...',
    searchEmpty: 'Começa a escrever para pesquisar... 🔎', searchNone: 'Nada encontrado. Tenta palavras diferentes 🤔',
    loadMsg0: 'A aquecer as células cerebrais... 🧠',
    loadMsg1: 'A carregar vocabulário... 📚',
    loadMsg2: 'A calibrar os motores de gramática... 📖',
    loadMsg3: 'A afinar o tutor IA de pronúncia... 🎤',
    loadMsg4: 'A preparar as tuas lições... 🎯',
    loadMsg5: 'Quase lá... ✨',
    lbTitle: '🏆 Melhores Estudantes',
    free: '✓ Grátis', premium: '👑 Premium',
    noHearts: '❤️ Sem corações! Espera 5 min...', alreadyDone: '✅ Já concluído hoje! Volta amanhã.',
    paymentSoon: '🚧 Pagamento em breve — mantém-te atento!',
    // Admin translations (new)
    loadingUnits: 'A carregar unidades…',
    loadingGrammar: 'A carregar gramática…',
    loadingTranslations: 'A carregar traduções…',
    unitSaved: 'Unidade guardada!',
    unitDeleted: 'Unidade eliminada.',
    lessonSaved: 'Liç�o guardada!',
    lessonDeleted: 'Liç�o eliminada.',
    grammarSaved: 'Tópico gramatical guardado!',
    grammarDeleted: 'Tópico gramatical eliminado.',
    translationSaved: 'Tradução guardada!',
    translationDeleted: 'Tradução eliminada.',
    errorLoading: 'Erro ao carregar: ',
    errorSaving: 'Erro ao guardar: ',
    errorDeleting: 'Erro ao eliminar: ',
    invalidJSON: 'JSON inválido. Verifica o formato.',
    confirmDelete: 'Tens a certeza que queres eliminar este item?',
    unitAdded: 'Unidade adicionada!',
    lessonAdded: 'Liç�o adicionada!',
    grammarAdded: 'Tópico gramatical adicionado!',
    translationAdded: 'Tradução adicionada!',
    newUnit: 'Nova Unidade',
    newLesson: 'Nova Lição',
    newGrammar: 'Novo Tópico Gramatical',
    newTranslation: 'Nova Tradução',
  }
};

// ─── LEVELS ──────────────────────────────────────────────
const LEVELS = [
  {level:1,title:'Beginner',titlePt:'Iniciante',prev:0,next:100},
  {level:2,title:'Elementary',titlePt:'Elementar',prev:100,next:250},
  {level:3,title:'Pre-Intermediate',titlePt:'Pré-Intermédio',prev:250,next:500},
  {level:4,title:'Intermediate',titlePt:'Intermédio',prev:500,next:900},
  {level:5,title:'Upper-Intermediate',titlePt:'Intermédio Superior',prev:900,next:1400},
  {level:6,title:'Advanced',titlePt:'Avançado',prev:1400,next:2000},
  {level:7,title:'Fluent',titlePt:'Fluente',prev:2000,next:9999},
];

// ─── ACHIEVEMENTS ────────────────────────────────────────
const ACHS = [
  {id:'first',icon:'🌱',name:'First Step',namePt:'Primeiro Passo',c:u=>u.done.length>=1},
  {id:'5less',icon:'📚',name:'Book Worm',namePt:'Rato de Biblioteca',c:u=>u.done.length>=5},
  {id:'10less',icon:'🎓',name:'Scholar',namePt:'Académico',c:u=>u.done.length>=10},
  {id:'allless',icon:'🏆',name:'Completionist',namePt:'Perfeccionista',c:u=>u.done.length>=18},
  {id:'str3',icon:'🔥',name:'On Fire',namePt:'Em Chamas',c:u=>u.streak>=3},
  {id:'str7',icon:'💥',name:'Week Warrior',namePt:'Guerreiro Semanal',c:u=>u.streak>=7},
  {id:'str30',icon:'🌩️',name:'Monthly Legend',namePt:'Lenda Mensal',c:u=>u.streak>=30},
  {id:'xp100',icon:'⚡',name:'XP Hunter',namePt:'Caçador de XP',c:u=>u.xp>=100},
  {id:'xp500',icon:'💎',name:'XP Legend',namePt:'Lenda XP',c:u=>u.xp>=500},
  {id:'xp1000',icon:'👑',name:'XP Master',namePt:'Mestre XP',c:u=>u.xp>=1000},
  {id:'perfect',icon:'✨',name:'Perfectionist',namePt:'Perfeccionista',c:u=>u.hadPerfect},
  {id:'combo5',icon:'💫',name:'Combo Master',namePt:'Mestre do Combo',c:u=>(u.maxCombo||0)>=5},
  {id:'ai1',icon:'🤖',name:'AI Friend',namePt:'Amigo da IA',c:u=>(u.aiChats||0)>=1},
  {id:'ai10',icon:'🤖',name:'AI Addict',namePt:'Viciado em IA',c:u=>(u.aiChats||0)>=10},
  {id:'game100',icon:'🎮',name:'Scramble Pro',namePt:'Pro do Baralho',c:u=>(u.scrambleScore||0)>=100},
  {id:'pron5',icon:'🎤',name:'Speaker',namePt:'Orador',c:u=>(u.pronP||0)>=5},
  {id:'gram5',icon:'📖',name:'Grammar Nerd',namePt:'Nerd da Gramática',c:u=>(u.gramR||0)>=5},
  {id:'allach',icon:'🌟',name:'All Rounder',namePt:'Completo',c:u=>u.achs.length>=10},
];

// ─── MASCOT MESSAGES ─────────────────────────────────────
const MASCOT_MSGS = {
  en: [
    '🎓 Sebastian says: Keep going! Every lesson = brain gains!',
    '💪 You\'re doing great! Don\'t stop now!',
    '🔥 That streak isn\'t gonna keep itself!',
    '🤖 Pro tip: Use the AI Tutor when you\'re confused!',
    '🔊 Try the Sound Lab — your accent will thank you!',
    '📖 The Grammar Lab has everything you need!',
    '😎 Native speakers make mistakes too. They just keep talking!',
    '🌍 English opens doors. Keep pushing!',
    '🎯 30 minutes a day = fluent in 2 years. You got this!',
    '🏆 Top of the leaderboard? That could be YOU!',
  ],
  pt: [
    '🎓 Sebastian diz: Continua! Cada lição = progresso!',
    '💪 Estás a sair-te bem! Não pares agora!',
    '🔥 Essa série não se mantém sozinha!',
    '🤖 Dica: Usa a IA Tutora quando tiveres dúvidas!',
    '🔊 Experimenta o Laboratório de Sons — a tua pronúncia vai agradecer!',
    '📖 O Laboratório de Gramática tem tudo que precisas!',
    '😎 Falantes nativos também erram. Eles apenas continuam!',
    '🌍 O inglês abre portas. Continua!',
    '🎯 30 minutos por dia = fluente em 2 anos. Consegues!',
    '🏆 Topo da classificação? Podes ser TU!',
  ]
};

// ─── RANDOM TIPS ─────────────────────────────────────────
const TIPS = {
  en: [
    '💡 Complete daily challenges for bonus XP!',
    '🔥 Keep your streak alive — come back tomorrow!',
    '🎮 Try the Word Scramble game for extra XP!',
    '💪 Consistency beats talent — keep going!',
    '🤖 Ask the AI Tutor anything — it\'s free!',
    '🔊 Practice pronunciation every day — even 5 minutes helps!',
  ],
  pt: [
    '💡 Completa os desafios diários para XP bónus!',
    '🔥 Mantém a tua série — volta amanhã!',
    '🎮 Experimenta as Palavras Baralhadas para XP extra!',
    '💪 A consistência supera o talento — continua!',
    '🤖 Pergunta qualquer coisa à IA Tutora — é grátis!',
    '🔊 Pratica pronúncia todos os dias — até 5 minutos ajuda!',
  ]
};

// ─── QUIZ MESSAGES ───────────────────────────────────────
const QUIZ_MSGS = {
  en: {
    correct: ['Nailed it! 🎯','Perfect! ✨','Boom! 💥','Easy money 💰','Too smart! 🧠','Keep it up! 🔥','You\'re on fire! 🚀','Excellent! 💪'],
    wrong: ['Oops... not quite 😬','Almost! Keep going 💪','Brain fart? It happens 😅','Come on, you\'re better than this!','Review and try again! 📚'],
    results: {
      perfect: ['PERFECT!', 'Absolutely CRUSHED it! 🔥'],
      great: ['Great job!', 'Solid work! Almost perfect!'],
      ok: ['Not bad!', 'Good effort! Review the mistakes.'],
      tryAgain: ['Keep trying!', 'Review and try again — you got this!'],
    }
  },
  pt: {
    correct: ['Excelente! 🎯','Perfeito! ✨','Boom! 💥','Fácil! 💰','Demasiado inteligente! 🧠','Continua! 🔥','Estás em chamas! 🚀','Fantástico! 💪'],
    wrong: ['Oops... não foi bem 😬','Quase! Continua 💪','Lapso mental? Acontece 😅','Vá, és melhor que isso!','Revê e tenta novamente! 📚'],
    results: {
      perfect: ['PERFEITO!', 'Absolutamente ARRASOU! 🔥'],
      great: ['Muito bem!', 'Trabalho sólido! Quase perfeito!'],
      ok: ['Não foi mau!', 'Bom esforço! Revê os erros.'],
      tryAgain: ['Continua a tentar!', 'Revê e tenta novamente — consegues!'],
    }
  }
};

// ─── CURRICULUM DATA ─────────────────────────────────────

// ─── UNITS (30+ lessons, A0→Advanced) ────────────────────
const UNITS = [
  // ══════════════════════════════════════════════════════
  //  UNIT 0 — BEGINNER ZERO (A0) — absolute beginners
  // ══════════════════════════════════════════════════════
  {
    id:'u0', cefr:'A0', title:'Beginner Zero', titlePt:'Nível Zero',
    desc:'Start here if you know ZERO English 🌱',
    descPt:'Começa aqui se não sabes nada de inglês 🌱',
    color:'#00bfa5', icon:'🌱', premium:false,
    lessons:[
      {id:'l0a', title:'What is English?', titlePt:'O que é o Inglês?', icon:'🌍', xp:10, learn:{
        explanation:{
          en:'English is a language — a way that people use words to talk, write, and understand each other. It is spoken as a first or second language in more than 50 countries, including the USA, the UK, Australia and South Africa. Learning English helps you travel, study, work, and connect with people all over the world.',
          pt:'O inglês é uma língua — uma forma que as pessoas usam para falar, escrever e se entenderem. É falado como primeira ou segunda língua em mais de 50 países, incluindo os EUA, o Reino Unido, a Austrália e a África do Sul. Aprender inglês ajuda-te a viajar, estudar, trabalhar e comunicar com pessoas de todo o mundo.'
        },
        examples:[
          {en:'English is a global language.', pt:'O inglês é uma língua global.'},
          {en:'Many people speak English as a second language.', pt:'Muitas pessoas falam inglês como segunda língua.'},
          {en:'I want to learn English.', pt:'Eu quero aprender inglês.'},
        ],
        practice:[
          {q:'How many countries speak English?', opts:['Only 2','Over 50','Exactly 10','None'], ans:1, exp:'English is spoken in over 50 countries around the world.'},
          {q:'Choose the TRUE sentence.', opts:['English is a colour.','English is a language.','English is a food.','English is an animal.'], ans:1, exp:'"English is a language" — a way of communicating.'},
        ],
      }, qs:[
        {q:'English is a ___.',opts:['language','animal','colour','food'],ans:0,exp:'"English" is a language — a way of communicating!'},
        {q:'English is spoken in how many countries?',opts:['2','10','50','over 50'],ans:3,exp:'English is spoken in over 50 countries! It is truly a global language.'},
        {q:'Which country speaks English as its official language?',opts:['Brazil','Portugal','USA','Mozambique'],ans:2,exp:'The USA (United States of America) has English as its main language.'},
        {q:'Why learn English?',opts:['To forget Portuguese','To travel, work and communicate globally','It\'s easy','To watch TV only'],ans:1,exp:'English opens doors: travel, jobs, university, internet and more!'},
        {q:'The English alphabet has ___ letters.',opts:['20','24','26','30'],ans:2,exp:'The English alphabet has 26 letters: A to Z!'},
      ]},
      {id:'l0b', title:'The Alphabet A-Z', titlePt:'O Alfabeto A-Z', icon:'🔤', xp:15, learn:{
        explanation:{
          en:'The English alphabet has 26 letters, from A to Z. Five of them are vowels: A, E, I, O, U. The rest are consonants. Knowing the alphabet helps you spell words, read, and use a dictionary.',
          pt:'O alfabeto inglês tem 26 letras, de A a Z. Cinco delas são vogais: A, E, I, O, U. As restantes são consoantes. Conhecer o alfabeto ajuda-te a soletrar palavras, ler e usar um dicionário.'
        },
        examples:[
          {en:'A, B, C, D, E... Z.', pt:'A, B, C, D, E... Z.'},
          {en:'My name starts with the letter S.', pt:'O meu nome começa com a letra S.'},
          {en:'Can you spell your name, please?', pt:'Podes soletrar o teu nome, por favor?'},
        ],
        practice:[
          {q:'Which letters are vowels?', opts:['B, C, D, F','A, E, I, O, U','X, Y, Z','M, N, P'], ans:1, exp:'The 5 vowels are A, E, I, O, U.'},
          {q:'What comes right after the letter J?', opts:['I','K','H','L'], ans:1, exp:'...I, J, K, L... K comes after J!'},
        ],
      }, qs:[
        {q:'Which comes FIRST in the alphabet?',opts:['B','A','C','D'],ans:1,exp:'A is the first letter: A, B, C, D, E, F, G...'},
        {q:'How many vowels does English have?',opts:['3','5','7','10'],ans:1,exp:'English has 5 vowels: A, E, I, O, U'},
        {q:'Which letter is a VOWEL?',opts:['B','C','E','T'],ans:2,exp:'E is a vowel. Vowels are: A, E, I, O, U'},
        {q:'What comes after M in the alphabet?',opts:['L','K','N','P'],ans:2,exp:'...K, L, M, N, O, P... N comes after M!'},
        {q:'Which word starts with the letter "H"?',opts:['Apple','Elephant','Hello','Dog'],ans:2,exp:'"Hello" starts with H. Hello! 👋'},
      ]},
      {id:'l0c', title:'Greetings & Goodbyes', titlePt:'Saudações e Despedidas', icon:'👋', xp:15, learn:{
        explanation:{
          en:'Greetings are words we use to say hello and goodbye politely. "Hello" and "Hi" greet someone. "Good morning", "Good afternoon" and "Good evening" depend on the time of day. "Goodbye" or "Bye" are used when leaving.',
          pt:'As saudações são palavras que usamos para cumprimentar e despedir-nos educadamente. "Hello" e "Hi" cumprimentam alguém. "Good morning", "Good afternoon" e "Good evening" dependem da hora do dia. "Goodbye" ou "Bye" são usados ao sair.'
        },
        examples:[
          {en:'Hello! How are you?', pt:'Olá! Como estás?'},
          {en:'Good morning, teacher!', pt:'Bom dia, professor(a)!'},
          {en:'Goodbye, see you tomorrow!', pt:'Adeus, até amanhã!'},
        ],
        practice:[
          {q:'What do you say when you meet someone in the morning?', opts:['Good night','Good morning','Goodbye','Good food'], ans:1, exp:'"Good morning" is used in the morning.'},
          {q:'Which word means "Adeus"?', opts:['Hello','Please','Goodbye','Thanks'], ans:2, exp:'"Goodbye" = Adeus.'},
        ],
      }, qs:[
        {q:'How do you say "Olá" in English?',opts:['Goodbye','Thank you','Hello','Please'],ans:2,exp:'"Hello" = Olá. You can also say "Hi!" (informal)'},
        {q:'"Good morning" is used:',opts:['At night','In the morning','At lunchtime','Any time'],ans:1,exp:'"Good morning" = Bom dia. Used in the morning!'},
        {q:'How do you say "Até logo" in English?',opts:['Hello','How are you?','Goodbye','Please'],ans:2,exp:'"Goodbye" = Até logo / Adeus. Also "Bye!" (informal)'},
        {q:'"How are you?" is a ___.',opts:['command','greeting','number','colour'],ans:1,exp:'"How are you?" = Como estás? It\'s a greeting!'},
        {q:'The correct response to "How are you?" is:',opts:['My name is Ana','I am fine, thank you','Goodbye','Yes, please'],ans:1,exp:'"I am fine, thank you" = Estou bem, obrigado/a. The perfect reply!'},
      ]},
      {id:'l0d', title:'Introducing Yourself', titlePt:'Apresentar-se', icon:'🙋', xp:20, learn:{
        explanation:{
          en:'To introduce yourself in English, use "My name is..." for your name, "I am from..." for your country, and "I am ___ years old" for your age. Always use "am" after "I".',
          pt:'Para te apresentares em inglês, usa "My name is..." para o teu nome, "I am from..." para o teu país, e "I am ___ years old" para a tua idade. Usa sempre "am" depois de "I".'
        },
        examples:[
          {en:'My name is Sebastian.', pt:'O meu nome é Sebastian.'},
          {en:'I am from Mozambique.', pt:'Eu sou de Moçambique.'},
          {en:'I am 20 years old.', pt:'Eu tenho 20 anos.'},
          {en:'Nice to meet you!', pt:'Muito prazer!'},
        ],
        practice:[
          {q:'Complete: "I ___ from Maputo."', opts:['is','am','are','be'], ans:1, exp:'Use "am" with "I".'},
          {q:'Which sentence says your age correctly?', opts:['I am Ana.','I am 18 years old.','I from Mozambique.','I name is Ana.'], ans:1, exp:'Age: "I am ___ years old."'},
        ],
      }, qs:[
        {q:'"My name is ___." This sentence introduces:',opts:['your age','your name','your job','your city'],ans:1,exp:'"My name is..." = O meu nome é... Use it to introduce yourself!'},
        {q:'Complete: "I ___ from Mozambique."',opts:['is','am','are','be'],ans:1,exp:'"I am from..." Use "am" with "I". I am from Mozambique!'},
        {q:'"I am 25 years ___."',opts:['old','age','young','year'],ans:0,exp:'"I am 25 years old." = Tenho 25 anos. Always use "old"!'},
        {q:'Which sentence correctly introduces someone?',opts:['My name are Ana.','My name am Ana.','My name is Ana.','Me name is Ana.'],ans:2,exp:'"My name IS Ana." — use "is" for names!'},
        {q:'"Nice to meet you!" means:',opts:['Goodbye!','I don\'t know you.','Happy to meet you!','See you later!'],ans:2,exp:'"Nice to meet you!" = Muito prazer! Say this when meeting someone new.'},
      ]},
      {id:'l0e', title:'Numbers 1-20', titlePt:'Números 1-20', icon:'🔢', xp:15, learn:{
        explanation:{
          en:'Numbers in English go from one (1) to twenty (20) and beyond. Numbers 13-19 usually end in "-teen" (thirteen, fourteen...). Round tens like twenty and thirty end in "-ty".',
          pt:'Os números em inglês vão de one (1) a twenty (20) e além. Os números de 13 a 19 normalmente terminam em "-teen" (thirteen, fourteen...). As dezenas como twenty, thirty terminam em "-ty".'
        },
        examples:[
          {en:'One, two, three, four, five.', pt:'Um, dois, três, quatro, cinco.'},
          {en:'I have ten fingers.', pt:'Eu tenho dez dedos.'},
          {en:'She is fifteen years old.', pt:'Ela tem quinze anos.'},
        ],
        practice:[
          {q:'What number is "twenty"?', opts:['12','20','2','22'], ans:1, exp:'twenty = 20.'},
          {q:'Which is the correct counting order?', opts:['one, three, two','one, two, three','three, two, one','two, three, one'], ans:1, exp:'one, two, three — counting order!'},
        ],
      }, qs:[
        {q:'What is "five" in numbers?',opts:['3','4','5','6'],ans:2,exp:'five = 5. One, two, three, four, five!'},
        {q:'How do you write 10 in words?',opts:['twelve','eight','ten','eleven'],ans:2,exp:'10 = ten. Count: one, two, three... ten!'},
        {q:'"Fifteen" is:',opts:['13','14','15','16'],ans:2,exp:'fifteen = 15. Five + Ten = Fifteen!'},
        {q:'What comes after "nineteen"?',opts:['eighteen','twenty','seventeen','thirteen'],ans:1,exp:'After nineteen (19) comes twenty (20)!'},
        {q:'Which number is "twelve"?',opts:['10','11','12','13'],ans:2,exp:'twelve = 12. A dozen = twelve!'},
      ]},
      {id:'l0f', title:'Colours', titlePt:'Cores', icon:'🎨', xp:15, learn:{
        explanation:{
          en:'Colours describe how things look. The main colours are red, blue, yellow, green, orange, purple, black, white, and brown. We use "is/are" with colours: "The sky IS blue."',
          pt:'As cores descrevem como as coisas parecem. As principais cores são red, blue, yellow, green, orange, purple, black, white e brown. Usamos "is/are" com as cores: "The sky IS blue."'
        },
        examples:[
          {en:'The sky is blue.', pt:'O céu é azul.'},
          {en:'My favourite colour is green.', pt:'A minha cor favorita é verde.'},
          {en:'The flag has red, yellow, and black.', pt:'A bandeira tem vermelho, amarelo e preto.'},
        ],
        practice:[
          {q:'What colour is a banana?', opts:['blue','yellow','purple','black'], ans:1, exp:'Bananas are yellow.'},
          {q:'"Vermelho" in English is:', opts:['blue','green','red','white'], ans:2, exp:'red = vermelho.'},
        ],
      }, qs:[
        {q:'What colour is the sky?',opts:['green','red','blue','yellow'],ans:2,exp:'The sky is BLUE! 🔵 "The sky is blue."'},
        {q:'"Red" in Portuguese is:',opts:['Azul','Verde','Vermelho','Amarelo'],ans:2,exp:'red = vermelho. "The rose is red." 🌹'},
        {q:'What colour is grass?',opts:['blue','green','orange','purple'],ans:1,exp:'Grass is GREEN! 🌿 "The grass is green."'},
        {q:'"Yellow" is the colour of:',opts:['the sea','the sun','the night','the soil'],ans:1,exp:'The sun is YELLOW! ☀️ "The sun is yellow."'},
        {q:'Which colour is NOT in the rainbow?',opts:['red','brown','blue','green'],ans:1,exp:'Brown is NOT in the rainbow. Rainbow = red, orange, yellow, green, blue, indigo, violet.'},
      ]},
      {id:'l0g', title:'Family Members', titlePt:'Membros da Família', icon:'👨‍👩‍👧‍👦', xp:20, learn:{
        explanation:{
          en:'Family words describe the people in your family. "Mother" and "father" are your parents. "Brother" and "sister" are your siblings. "Grandmother" and "grandfather" are your grandparents.',
          pt:'As palavras de família descrevem as pessoas da tua família. "Mother" e "father" são os teus pais. "Brother" e "sister" são os teus irmãos. "Grandmother" e "grandfather" são os teus avós.'
        },
        examples:[
          {en:'This is my mother.', pt:'Esta é a minha mãe.'},
          {en:'I have one brother and one sister.', pt:'Eu tenho um irmão e uma irmã.'},
          {en:'My grandfather is very kind.', pt:'O meu avô é muito gentil.'},
        ],
        practice:[
          {q:"Your father's mother is your:", opts:['aunt','grandmother','sister','cousin'], ans:1, exp:"Father's mother = grandmother."},
          {q:'"Irmã" in English is:', opts:['brother','mother','sister','daughter'], ans:2, exp:'sister = irmã.'},
        ],
      }, qs:[
        {q:'"Mother" means:',opts:['irmã','mãe','avó','tia'],ans:1,exp:'mother = mãe. "My mother is kind."'},
        {q:'What is "father" in Portuguese?',opts:['irmão','tio','pai','avô'],ans:2,exp:'father = pai. "My father is strong."'},
        {q:'"Brother" and "sister" are your:',opts:['parents','grandparents','siblings','children'],ans:2,exp:'Brother and sister = siblings (irmãos). Part of your immediate family!'},
        {q:'What do you call your mother\'s mother?',opts:['aunt','sister','grandmother','cousin'],ans:2,exp:'Your mother\'s mother = grandmother (avó)!'},
        {q:'"I have two ___." (brother + sister)',opts:['parents','siblings','cousins','grandparents'],ans:1,exp:'Brother + sister = siblings. "I have two siblings."'},
      ]},
      {id:'l0h', title:'My First Conversation', titlePt:'A Minha Primeira Conversa', icon:'💬', xp:25, learn:{
        explanation:{
          en:'Now let\'s put it all together! A simple conversation starts with a greeting, asks a question or two, and ends politely. For example: "Hello! What is your name? Where are you from? Nice to meet you! Goodbye!"',
          pt:'Agora vamos juntar tudo! Uma conversa simples começa com uma saudação, faz uma ou duas perguntas e termina educadamente. Por exemplo: "Hello! What is your name? Where are you from? Nice to meet you! Goodbye!"'
        },
        examples:[
          {en:'A: Hello! B: Hi! How are you?', pt:'A: Olá! B: Oi! Como estás?'},
          {en:'A: What is your name? B: My name is Ana.', pt:'A: Qual é o teu nome? B: O meu nome é Ana.'},
          {en:'A: Where are you from? B: I am from Mozambique.', pt:'A: De onde és? B: Eu sou de Moçambique.'},
        ],
        practice:[
          {q:'What is a polite way to end a conversation?', opts:['What?','Goodbye! Have a nice day!','Nothing','My name is...'], ans:1, exp:'Always end politely: "Goodbye! Have a nice day!"'},
          {q:'Put these in the right conversation order:', opts:['Goodbye → Hello → Name?','Hello → Name? → Goodbye','Name? → Goodbye → Hello','Goodbye → Name? → Hello'], ans:1, exp:'Start with Hello, ask questions, then say Goodbye.'},
        ],
      }, qs:[
        {q:'Put in order: "___ am I. Sebastian name My."',opts:['My name I am Sebastian.','My name is Sebastian.','I Sebastian name am.','Sebastian my name.'],ans:1,exp:'"My name is Sebastian." — Subject + Verb + Object!'},
        {q:'A: "Hello!" B: "___"',opts:['Goodbye!','Hello! How are you?','My name is Ana.','I am fine.'],ans:1,exp:'"Hello! How are you?" — Reply to a greeting with a greeting!'},
        {q:'A: "Where are you from?" B: "___"',opts:['I am 20 years old.','I am fine.','I am from Mozambique.','My name is Tom.'],ans:2,exp:'"I am from Mozambique." — Answer "Where from?" with "I am from..."'},
        {q:'How do you say "thank you" in English?',opts:['Please','Sorry','Thank you','Excuse me'],ans:2,exp:'"Thank you" = Obrigado/a. Always be polite!'},
        {q:'To end a conversation politely you say:',opts:['Hello!','How are you?','Nice to meet you!','Goodbye! Have a nice day!'],ans:3,exp:'"Goodbye! Have a nice day!" = Até logo! Tenha um bom dia! 👋'},
      ]},
      {id:'l0i', title:'Plural Nouns', titlePt:'Substantivos no Plural', icon:'➕', xp:15, learn:{
        explanation:{
          en:'Most English nouns become plural by adding -s: book → books. Nouns ending in -s, -x, -ch, -sh add -es: box → boxes. A few are irregular: man → men, child → children.',
          pt:'A maioria dos substantivos ingleses fica no plural ao adicionar -s: book → books. Substantivos terminados em -s, -x, -ch, -sh adicionam -es: box → boxes. Alguns são irregulares: man → men, child → children.'
        },
        examples:[
          {en:'I have two dogs.', pt:'Eu tenho dois cães.'},
          {en:'She bought three boxes.', pt:'Ela comprou três caixas.'},
          {en:'There are many children in the park.', pt:'Há muitas crianças no parque.'},
        ],
        practice:[
          {q:'Plural of "book":', opts:['bookes','books','bookies','book'], ans:1, exp:'Just add -s: book → books.'},
          {q:'Plural of "box":', opts:['boxs','boxes','boxies','box'], ans:1, exp:'Words ending in -x add -es: box → boxes.'},
        ],
      }, qs:[
        {q:'Plural of "cat":',opts:['cates','cats','catses','cat'],ans:1,exp:'Add -s: cat → cats.'},
        {q:'Plural of "watch":',opts:['watchs','watches','watchies','watch'],ans:1,exp:'Words ending in -ch add -es: watch → watches.'},
        {q:'Irregular plural of "child":',opts:['childs','childes','children','childen'],ans:2,exp:'"Child" is irregular: child → children.'},
        {q:'"I have ___ sisters." (2)',opts:['a','two','one','no'],ans:1,exp:'"Two sisters" — plural noun needs a number bigger than one!'},
        {q:'Which is the correct plural of "man"?',opts:['mans','men','mens','manes'],ans:1,exp:'"Man" is irregular: man → men.'},
      ]},
      {id:'l0j', title:'Question Words', titlePt:'Palavras Interrogativas', icon:'❓', xp:20, learn:{
        explanation:{
          en:'Question words start most English questions: What (thing), Where (place), Who (person), When (time), Why (reason), and How (manner). They go at the beginning of the sentence.',
          pt:'As palavras interrogativas começam a maioria das perguntas em inglês: What (coisa), Where (lugar), Who (pessoa), When (tempo), Why (razão), e How (modo). Vêm no início da frase.'
        },
        examples:[
          {en:'What is your name?', pt:'Qual é o teu nome?'},
          {en:'Where do you live?', pt:'Onde vives?'},
          {en:'Why are you happy?', pt:'Porque estás feliz?'},
        ],
        practice:[
          {q:'Which question word asks about a PLACE?', opts:['What','Where','Who','Why'], ans:1, exp:'"Where" asks about a place.'},
          {q:'Which question word asks about a PERSON?', opts:['What','When','Who','How'], ans:2, exp:'"Who" asks about a person.'},
        ],
      }, qs:[
        {q:'"___ is your favourite colour?"',opts:['Who','What','Where','When'],ans:1,exp:'"What" asks about a thing — like a colour.'},
        {q:'"___ is your birthday?" (asking about time)',opts:['Where','What','When','Who'],ans:2,exp:'"When" asks about time.'},
        {q:'"___ are you sad?" (asking for a reason)',opts:['Why','How','What','Where'],ans:0,exp:'"Why" asks for a reason.'},
        {q:'"___ do you spell your name?" (asking about manner)',opts:['What','How','Who','Why'],ans:1,exp:'"How" asks about manner or method.'},
        {q:'"___ is your teacher?" (asking about a person)',opts:['What','Where','Who','When'],ans:2,exp:'"Who" asks about a person.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 1 — PRESENT TENSES (A1-A2)
  // ══════════════════════════════════════════════════════
  {
    id:'u1', cefr:'A1', title:'Present Tenses', titlePt:'Tempos Presentes',
    desc:'Master the most-used tenses in English 🕐',
    descPt:'Domina os tempos presentes mais usados 🕐',
    color:'#2979ff', icon:'🕐', premium:false,
    lessons:[
      {id:'l1', title:'Verb To Be', titlePt:'Verbo To Be', icon:'🔵', xp:20, learn:{
        explanation:{
          en:'The verb "to be" (am/is/are) is the most important verb in English. Use "am" with I, "is" with he/she/it, and "are" with you/we/they. It connects a subject to a description, name, or place.',
          pt:'O verbo "to be" (am/is/are) é o verbo mais importante do inglês. Usa "am" com I, "is" com he/she/it, e "are" com you/we/they. Ele liga o sujeito a uma descrição, nome ou lugar.'
        },
        examples:[
          {en:'I am a student.', pt:'Eu sou estudante.'},
          {en:'She is happy.', pt:'Ela está feliz.'},
          {en:'They are from Maputo.', pt:'Eles são de Maputo.'},
        ],
        practice:[
          {q:'Complete: "He ___ my friend."', opts:['am','is','are','be'], ans:1, exp:'He/She/It → IS.'},
          {q:'Which is correct?', opts:['You is tired.','You am tired.','You are tired.','You be tired.'], ans:2, exp:'You → ARE.'},
        ],
      }, qs:[
        {q:'"She ___ a teacher."',opts:['am','is','are','be'],ans:1,exp:'"She IS a teacher." — He/She/It = IS'},
        {q:'"We ___ from Mozambique."',opts:['am','is','are','be'],ans:2,exp:'"We ARE from Mozambique." — We/You/They = ARE'},
        {q:'Negative of "I am happy":',opts:['I is not happy.','I am not happy.','I are not happy.','I be not happy.'],ans:1,exp:'"I am not happy." — I + am. Negative = am not / I\'m not'},
        {q:'"___ you a student?"',opts:['Am','Is','Are','Be'],ans:2,exp:'"ARE you a student?" — You = ARE'},
        {q:'"They ___ not here."',opts:['am','is','are','was'],ans:2,exp:'"They ARE not here." — They + are. Negative = are not / aren\'t'},
      ]},
      {id:'l2', title:'Subject Pronouns', titlePt:'Pronomes Pessoais', icon:'👤', xp:15, learn:{
        explanation:{
          en:'Subject pronouns (I, you, he, she, it, we, they) replace the name of a person, animal, or thing so we don\'t repeat it. Use "he" for men, "she" for women, "it" for animals/objects, and "they" for two or more.',
          pt:'Os pronomes pessoais (I, you, he, she, it, we, they) substituem o nome de uma pessoa, animal ou coisa para não o repetirmos. Usa "he" para homens, "she" para mulheres, "it" para animais/objectos, e "they" para dois ou mais.'
        },
        examples:[
          {en:'Maria is kind. She is kind.', pt:'A Maria é gentil. Ela é gentil.'},
          {en:'The cat is small. It is small.', pt:'O gato é pequeno. Ele é pequeno.'},
          {en:'Pedro and Ana are here. They are here.', pt:'O Pedro e a Ana estão aqui. Eles estão aqui.'},
        ],
        practice:[
          {q:'Which pronoun replaces "João"?', opts:['She','It','He','They'], ans:2, exp:'João is a man → HE.'},
          {q:'Which pronoun replaces "the books"?', opts:['It','He','They','She'], ans:2, exp:'Plural things → THEY.'},
        ],
      }, qs:[
        {q:'What pronoun replaces "Ana"?',opts:['He','She','It','They'],ans:1,exp:'"Ana" is a woman → SHE. "Ana is kind." = "She is kind."'},
        {q:'"The dog is hungry." Replace "the dog":',opts:['He','She','It','They'],ans:2,exp:'Animals and objects = IT. "The dog is hungry." = "It is hungry."'},
        {q:'"Pedro and I are friends." Replace with one pronoun:',opts:['We','They','He','You'],ans:0,exp:'"Pedro and I" = WE. "We are friends."'},
        {q:'What pronoun replaces "Mr. Silva"?',opts:['She','It','He','They'],ans:2,exp:'"Mr. Silva" is a man → HE. "Mr. Silva works here." = "He works here."'},
        {q:'"Ana and Pedro are students." Replace:',opts:['We','He','She','They'],ans:3,exp:'"Ana and Pedro" = THEY. Two or more people = THEY.'},
      ]},
      {id:'l3', title:'Simple Present', titlePt:'Presente Simples', icon:'⭕', xp:25, learn:{
        explanation:{
          en:'We use Simple Present for habits, routines, and facts. Add -s or -es to the verb with he/she/it: "She works." With I/you/we/they, use the base verb: "I work." Signal words: always, usually, every day.',
          pt:'Usamos o Presente Simples para hábitos, rotinas e factos. Adiciona -s ou -es ao verbo com he/she/it: "She works." Com I/you/we/they, usa o verbo base: "I work." Palavras-sinal: always, usually, every day.'
        },
        examples:[
          {en:'I study English every day.', pt:'Eu estudo inglês todos os dias.'},
          {en:'She works in a hospital.', pt:'Ela trabalha num hospital.'},
          {en:'We don\'t eat meat.', pt:'Nós não comemos carne.'},
        ],
        practice:[
          {q:'Complete: "He ___ TV every night."', opts:['watch','watchs','watches','watching'], ans:2, exp:'watch ends in -ch → add -es: watches.'},
          {q:'Which signals Simple Present?', opts:['right now','yesterday','usually','tomorrow'], ans:2, exp:'"usually" = repeated habit = Simple Present.'},
        ],
      }, qs:[
        {q:'Which is correct?',opts:['She go to school.','She goes to school.','She is go.','She going.'],ans:1,exp:'"She GOES to school." — He/She/It adds -s or -es!'},
        {q:'"He ___ like coffee."',opts:['don\'t','doesn\'t','not','isn\'t'],ans:1,exp:'"He DOESN\'T like coffee." — Negative: doesn\'t + base verb.'},
        {q:'"I ___ English every day."',opts:['studies','studying','study','to study'],ans:2,exp:'"I STUDY English every day." — I/You/We/They: base form, no -s.'},
        {q:'Which word signals Simple Present?',opts:['yesterday','now','always','tomorrow'],ans:2,exp:'"Always", "usually", "often", "every day" = Simple Present signals!'},
        {q:'"___ she live in Maputo?"',opts:['Do','Does','Is','Are'],ans:1,exp:'"DOES she live in Maputo?" — Questions with He/She/It use DOES.'},
      ]},
      {id:'l4', title:'Present Continuous', titlePt:'Presente Contínuo', icon:'🔄', xp:25, learn:{
        explanation:{
          en:'We use Present Continuous (am/is/are + verb-ing) for actions happening right now, or temporary situations. "Look! She is dancing." Stative verbs like know, like, want usually don\'t take -ing.',
          pt:'Usamos o Presente Contínuo (am/is/are + verbo-ing) para acções a acontecer agora, ou situações temporárias. "Olha! Ela está a dançar." Verbos de estado como know, like, want normalmente não levam -ing.'
        },
        examples:[
          {en:'I am studying right now.', pt:'Eu estou a estudar agora.'},
          {en:'They are playing football.', pt:'Eles estão a jogar futebol.'},
          {en:'It is raining outside.', pt:'Está a chover lá fora.'},
        ],
        practice:[
          {q:'Complete: "We ___ lunch now."', opts:['eat','eats','are eating','ate'], ans:2, exp:'Right now = Present Continuous: are eating.'},
          {q:'Which verb usually does NOT take -ing?', opts:['run','know','play','write'], ans:1, exp:'"Know" is a stative verb — no -ing.'},
        ],
      }, qs:[
        {q:'"Look! It ___ (rain)"',opts:['rains','rained','is raining','has rained'],ans:2,exp:'"It IS RAINING." — Present Continuous = am/is/are + verb-ing.'},
        {q:'Which is WRONG?',opts:['I am eating.','She is running.','They are knowing.','We are waiting.'],ans:2,exp:'"Knowing" is wrong! Stative verbs (know, like, want) cannot use -ing.'},
        {q:'"They ___ playing football now."',opts:['is','am','are','be'],ans:2,exp:'"They ARE playing." — They + are + verb-ing.'},
        {q:'What is "write" in Present Continuous?',opts:['writing','writeing','writting','wrotes'],ans:0,exp:'"Writing" — drop the silent "e" before adding -ing: write → writing.'},
        {q:'"She is always ___ her keys." (lose)',opts:['lose','lost','losing','to lose'],ans:2,exp:'"Losing" — continuous = verb-ing. lose → losing!'},
      ]},
      {id:'l5', title:'Present Perfect', titlePt:'Presente Perfeito', icon:'✅', xp:30, learn:{
        explanation:{
          en:'Present Perfect (have/has + past participle) connects the past to the present — for experiences or actions with no exact time. "I have visited Paris." Use "has" with he/she/it, "have" with the rest.',
          pt:'O Present Perfect (have/has + particípio passado) liga o passado ao presente — para experiências ou acções sem hora exacta. "I have visited Paris." Usa "has" com he/she/it, "have" com o resto.'
        },
        examples:[
          {en:'I have finished my homework.', pt:'Eu já terminei o meu trabalho de casa.'},
          {en:'She has lived here for 5 years.', pt:'Ela vive aqui há 5 anos.'},
          {en:'Have you ever eaten sushi?', pt:'Já alguma vez comeste sushi?'},
        ],
        practice:[
          {q:'Complete: "She ___ already left."', opts:['have','has','had','is'], ans:1, exp:'He/She/It → HAS.'},
          {q:'Which signals Present Perfect?', opts:['yesterday','last week','already','tomorrow'], ans:2, exp:'"already" is a classic Present Perfect signal.'},
        ],
      }, qs:[
        {q:'"I ___ never been to Japan."',opts:['have','has','had','am'],ans:0,exp:'"I HAVE never been." — I/You/We/They = HAVE.'},
        {q:'Which uses Present Perfect CORRECTLY?',opts:['She has went to Paris.','She went to Paris yesterday.','She has been to Paris.','She have been to Paris.'],ans:2,exp:'"She HAS BEEN to Paris." — No specific time = Present Perfect!'},
        {q:'"They ___ already finished."',opts:['have','has','had','did'],ans:0,exp:'"They HAVE already finished." — "already" = big Present Perfect clue!'},
        {q:'Which signal word goes with Present Perfect?',opts:['yesterday','last year','in 2010','just'],ans:3,exp:'"Just", "already", "yet", "ever", "never", "since", "for" = Perfect signals!'},
        {q:'"Have you ___ sushi?" (eat)',opts:['eat','ate','eaten','eating'],ans:2,exp:'After have/has = past participle. eat → eaten. Irregular!'},
      ]},
      {id:'l1a', title:'Can & Can\'t', titlePt:'Can & Can\'t (Poder)', icon:'💪', xp:20, learn:{
        explanation:{
          en:'"Can" expresses ability or permission. Use "can" + base verb for all subjects (no -s!): "She can swim." The negative is "cannot" or "can\'t": "I can\'t drive."',
          pt:'"Can" expressa capacidade ou permissão. Usa "can" + verbo base para todos os sujeitos (sem -s!): "She can swim." A negativa é "cannot" ou "can\'t": "I can\'t drive."'
        },
        examples:[
          {en:'I can speak English.', pt:'Eu sei falar inglês.'},
          {en:'She can\'t cook.', pt:'Ela não sabe cozinhar.'},
          {en:'Can you help me, please?', pt:'Podes ajudar-me, por favor?'},
        ],
        practice:[
          {q:'Complete: "He ___ swim very well."', opts:['cans','can','canning','to can'], ans:1, exp:'Can never adds -s: He CAN swim.'},
          {q:'Negative of "They can dance":', opts:['They cans not dance.','They don\'t can dance.','They can\'t dance.','They not can dance.'], ans:2, exp:'Negative = can\'t / cannot + base verb.'},
        ],
      }, qs:[
        {q:'"Can" is followed by:',opts:['a base verb','a verb + ing','a verb + s','to + verb'],ans:0,exp:'After "can", always use the base verb: can swim, can run.'},
        {q:'"She ___ play the piano."',opts:['can','cans','canning','is can'],ans:0,exp:'She CAN play — no -s with modal verbs!'},
        {q:'Question form: "___ you drive?"',opts:['Do','Can','Are','Is'],ans:1,exp:'"Can you drive?" — Can goes before the subject in questions.'},
        {q:'"I can\'t swim" means:',opts:['I am able to swim','I am not able to swim','I love swimming','I will swim'],ans:1,exp:'Can\'t = cannot = NOT able to.'},
        {q:'Which is grammatically correct?',opts:['She can to dance.','She cans dance.','She can dance.','She can dances.'],ans:2,exp:'"Can + base verb" — no "to", no -s.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 2 — PAST TENSES
  // ══════════════════════════════════════════════════════
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
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 3 — FUTURE
  // ══════════════════════════════════════════════════════
  {
    id:'u3', cefr:'A2', title:'Future', titlePt:'Futuro',
    desc:"Talk about what's coming! 🔮",
    descPt:'Fala sobre o que está a vir! 🔮',
    color:'#82b1ff', icon:'🚀', premium:false,
    lessons:[
      {id:'l8', title:'Future with Will', titlePt:'Futuro com Will', icon:'🔮', xp:25, learn:{
        explanation:{
          en:'"Will" + base verb expresses predictions, promises, and spontaneous decisions made at the moment of speaking. "I think it will rain." "I\'ll help you!"',
          pt:'"Will" + verbo base expressa previsões, promessas e decisões espontâneas tomadas no momento da fala. "I think it will rain." "I\'ll help you!"'
        },
        examples:[
          {en:'I will call you tomorrow.', pt:'Eu vou ligar-te amanhã.'},
          {en:'She won\'t be late.', pt:'Ela não vai chegar atrasada.'},
          {en:'Will you marry me?', pt:'Casas comigo?'},
        ],
        practice:[
          {q:'"Will" is followed by:', opts:['a base verb','verb+ing','verb+ed','to+verb'], ans:0, exp:'will + base verb: will go, will help.'},
          {q:'Negative of "will":', opts:["willn't","won't","not will","will not have"], ans:1, exp:'will + not = won\'t.'},
        ],
      }, qs:[
        {q:'"I think it ___ rain tomorrow."',opts:['is going to','will','rains','rained'],ans:1,exp:'"Will" for predictions based on opinion. "I think" = belief → will.'},
        {q:'"I\'m hungry." — "___ get you something to eat."',opts:['I go','I will','I going to','I am going'],ans:1,exp:'Spontaneous decision = "will". No prior plan!'},
        {q:'Negative of "She will come":',opts:['She won\'t come.','She will not comes.','She doesn\'t will come.','She will not coming.'],ans:0,exp:'"Won\'t" = will + not. She won\'t come.'},
        {q:'"Will you help me?" — The correct answer is:',opts:['Yes, I will.','Yes, I do.','Yes, I am.','Yes, I shall.'],ans:0,exp:'Will → will. "Yes, I WILL." ✓'},
        {q:'Which sentence uses "will" CORRECTLY?',opts:['They will goes.','She will is here.','We will arrive soon.','He will can help.'],ans:2,exp:'"Will + base verb". "arrive" is base form. ✓'},
      ]},
      {id:'l9', title:'Going To', titlePt:'Going To', icon:'📅', xp:25, learn:{
        explanation:{
          en:'"Be going to" + base verb expresses plans already made or predictions with visible evidence. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"',
          pt:'"Be going to" + verbo base expressa planos já feitos ou previsões com evidência visível. "I am going to study medicine." "Look at those clouds — it\'s going to rain!"'
        },
        examples:[
          {en:'We are going to travel next year.', pt:'Nós vamos viajar no próximo ano.'},
          {en:'She is going to buy a car.', pt:'Ela vai comprar um carro.'},
          {en:'Is he going to call you?', pt:'Ele vai ligar-te?'},
        ],
        practice:[
          {q:'"Going to" is used for:', opts:['spontaneous decisions','plans already made','past habits','permanent facts'], ans:1, exp:'Going to = pre-planned future.'},
          {q:'"She ___ going to study."', opts:['am','is','are','be'], ans:1, exp:'She + IS going to.'},
        ],
      }, qs:[
        {q:'"Look at those clouds! It ___ rain."',opts:['will','is going to','rains','might'],ans:1,exp:'"Going to" for predictions with visible evidence.'},
        {q:'"We ___ visit grandma next weekend." (planned)',opts:['will','are going to','are going','going to'],ans:1,exp:'Pre-planned future = "be going to".'},
        {q:'Correct form: "She ___ study medicine."',opts:['is going to','are going to','is going','goes to'],ans:0,exp:'"She IS GOING TO study" — she + is + going to + base verb.'},
        {q:'What does "going to" express?',opts:['Spontaneous decisions','Prior plans and evidence','General facts','Habits'],ans:1,exp:'"Going to" = plans already made OR visible evidence of future event.'},
        {q:'"I ___ start exercising." (already decided)',opts:['am going to','will','should','might'],ans:0,exp:'"Going to" for plans already decided.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 4 — VOCABULARY BUILDER
  // ══════════════════════════════════════════════════════
  {
    id:'u4', cefr:'A1', title:'Vocabulary Builder', titlePt:'Construtor de Vocabulário',
    desc:'Expand your word power! 💡',
    descPt:'Expande o teu vocabulário! 💡',
    color:'#00e676', icon:'📚', premium:false,
    lessons:[
      {id:'l10', title:'Common Adjectives', titlePt:'Adjectivos Comuns', icon:'🎨', xp:20, learn:{
        explanation:{
          en:'Adjectives describe nouns — people, places, or things. They usually go before the noun ("a big house") or after "to be" ("The house is big"). Learning opposites (big/small, hot/cold) helps you remember faster.',
          pt:'Os adjectivos descrevem substantivos — pessoas, lugares ou coisas. Normalmente vêm antes do substantivo ("a big house") ou depois de "to be" ("The house is big"). Aprender opostos (big/small, hot/cold) ajuda-te a memorizar mais depressa.'
        },
        examples:[
          {en:'This is a huge elephant.', pt:'Este é um elefante enorme.'},
          {en:'My sister is very kind.', pt:'A minha irmã é muito gentil.'},
          {en:'That phone is expensive.', pt:'Aquele telemóvel é caro.'},
        ],
        practice:[
          {q:'Opposite of "cheap":', opts:['small','expensive','kind','tiny'], ans:1, exp:'cheap ↔ expensive.'},
          {q:'"The food is ___." (very tasty)', opts:['bland','disgusting','delicious','salty'], ans:2, exp:'delicious = very tasty.'},
        ],
      }, qs:[
        {q:'Which word means "very big"?',opts:['tiny','huge','narrow','shallow'],ans:1,exp:'"Huge" = extremely large. Opposite: "tiny".'},
        {q:'"The weather is very ___. I need a jacket."',opts:['hot','warm','cold','boiling'],ans:2,exp:'If you need a jacket, it\'s "cold"!'},
        {q:'"She is a ___ girl. She always helps others."',opts:['selfish','kind','rude','lazy'],ans:1,exp:'Someone who helps others is "kind".'},
        {q:'What does "expensive" mean?',opts:['Cheap','Costing a lot','Free','Beautiful'],ans:1,exp:'"Expensive" = high price. Opposite: "cheap".'},
        {q:'"The soup tastes ___." (very good)',opts:['disgusting','delicious','bland','salty'],ans:1,exp:'"Delicious" = very tasty. 😋'},
      ]},
      {id:'l11', title:'Everyday Actions', titlePt:'Acções do Dia-a-dia', icon:'🏃', xp:20, learn:{
        explanation:{
          en:'Action verbs describe what we do every day: eat, drink, read, sleep, watch, open, close. Pairing the right verb with the right noun (watch TV, read a book) sounds natural in English.',
          pt:'Os verbos de acção descrevem o que fazemos todos os dias: eat, drink, read, sleep, watch, open, close. Juntar o verbo certo ao substantivo certo (watch TV, read a book) soa natural em inglês.'
        },
        examples:[
          {en:'I read a book before bed.', pt:'Eu leio um livro antes de dormir.'},
          {en:'We watch TV in the evening.', pt:'Nós vemos TV à noite.'},
          {en:'She opens the window every morning.', pt:'Ela abre a janela todas as manhãs.'},
        ],
        practice:[
          {q:'Which verb goes with "a shower"?', opts:['eat','take','read','watch'], ans:1, exp:'We TAKE a shower.'},
          {q:'"I always ___ my teeth at night."', opts:['brush','watch','read','open'], ans:0, exp:'We BRUSH our teeth.'},
        ],
      }, qs:[
        {q:'What do you do with a book?',opts:['eat','read','drive','cook'],ans:1,exp:'You "read" a book. 📖'},
        {q:'"I ___ breakfast every morning."',opts:['do','make','eat','drink'],ans:2,exp:'We "eat" breakfast.'},
        {q:'Where do you sleep?',opts:['In the kitchen','In the bathroom','In the garden','In the bedroom'],ans:3,exp:'You sleep in the bedroom!'},
        {q:'"Can you ___ the door, please? It\'s hot."',opts:['close','open','lock','break'],ans:1,exp:'If it\'s hot, you want to "open" the door!'},
        {q:'Which verb goes with "TV"?',opts:['watch','see','look','hear'],ans:0,exp:'We "watch" TV. 📺'},
      ]},
      {id:'l12', title:'Food & Cooking', titlePt:'Comida e Culinária', icon:'🍳', xp:25, learn:{
        explanation:{
          en:'Cooking vocabulary helps you talk about meals and recipes: boil, fry, bake, grill, wash, cut. Words like "raw", "spicy", and "delicious" describe how food tastes or looks.',
          pt:'O vocabulário de culinária ajuda-te a falar sobre refeições e receitas: boil, fry, bake, grill, wash, cut. Palavras como "raw", "spicy" e "delicious" descrevem o sabor ou aspecto da comida.'
        },
        examples:[
          {en:'I like to fry onions first.', pt:'Eu gosto de fritar cebola primeiro.'},
          {en:'This soup is too spicy for me.', pt:'Esta sopa é demasiado picante para mim.'},
          {en:'Can you cut the tomatoes, please?', pt:'Podes cortar os tomates, por favor?'},
        ],
        practice:[
          {q:'Which method uses an oven?', opts:['boil','bake','fry','wash'], ans:1, exp:'BAKE = cook in an oven.'},
          {q:'"Raw" food is:', opts:['well-cooked','not cooked','very sweet','very salty'], ans:1, exp:'Raw = not cooked yet.'},
        ],
      }, qs:[
        {q:'What is the main ingredient in bread?',opts:['rice','flour','sugar','salt'],ans:1,exp:'Bread is made from "flour".'},
        {q:'"I need to ___ the vegetables before cooking."',opts:['wash','read','wear','build'],ans:0,exp:'You "wash" vegetables to clean them.'},
        {q:'Which cooking method uses water?',opts:['fry','bake','boil','grill'],ans:2,exp:'"Boil" = cooking in hot water.'},
        {q:'"This steak is too ___. I ordered it well-done."',opts:['cooked','raw','sweet','salty'],ans:1,exp:'"Raw" = not cooked.'},
        {q:'What does "spicy" mean?',opts:['Sweet taste','Hot burning taste','No taste','Sour taste'],ans:1,exp:'"Spicy" = hot flavour from chili/pepper.'},
      ]},
      {id:'l13', title:'Body Parts', titlePt:'Partes do Corpo', icon:'🦴', xp:20, learn:{
        explanation:{
          en:'Body part vocabulary is essential for describing health, pain, and appearance: head, hand, eyes, ears, leg, arm. We say "My ___ hurts" to describe pain.',
          pt:'O vocabulário das partes do corpo é essencial para descrever saúde, dor e aparência: head, hand, eyes, ears, leg, arm. Dizemos "My ___ hurts" para descrever dor.'
        },
        examples:[
          {en:'My head hurts.', pt:'Dói-me a cabeça.'},
          {en:'She has beautiful eyes.', pt:'Ela tem olhos bonitos.'},
          {en:'He broke his arm.', pt:'Ele partiu o braço.'},
        ],
        practice:[
          {q:'"Hurts" means:', opts:['feels good','causes pain','looks nice','smells bad'], ans:1, exp:'Hurts = causes pain.'},
          {q:'Which body part do you use to SMELL?', opts:['ears','eyes','nose','mouth'], ans:2, exp:'You smell with your NOSE.'},
        ],
      }, qs:[
        {q:'"Head" means:',opts:['mão','pé','cabeça','nariz'],ans:2,exp:'head = cabeça. "Use your head!" means think!'},
        {q:'What is "hand" in Portuguese?',opts:['pé','mão','braço','dedo'],ans:1,exp:'hand = mão. "Give me your hand."'},
        {q:'Which body part do you use to SEE?',opts:['ears','nose','eyes','mouth'],ans:2,exp:'You see with your EYES! 👀'},
        {q:'Which body part do you use to HEAR?',opts:['eyes','ears','nose','tongue'],ans:1,exp:'You hear with your EARS! 👂'},
        {q:'"My ___ hurts." (pointing to leg)',opts:['arm','head','leg','finger'],ans:2,exp:'leg = perna. "My leg hurts."'},
      ]},
      {id:'l14', title:'Animals & Nature', titlePt:'Animais e Natureza', icon:'🦁', xp:20, learn:{
        explanation:{
          en:'Nature vocabulary covers animals, plants, and the environment. Each animal makes a different sound and lives in a different habitat — knowing these words helps with storytelling and descriptions.',
          pt:'O vocabulário da natureza cobre animais, plantas e o ambiente. Cada animal faz um som diferente e vive num habitat diferente — saber estas palavras ajuda a contar histórias e a descrever.'
        },
        examples:[
          {en:'The lion is the king of the jungle.', pt:'O leão é o rei da selva.'},
          {en:'Fish live in water.', pt:'Os peixes vivem na água.'},
          {en:'Trees give us oxygen.', pt:'As árvores dão-nos oxigénio.'},
        ],
        practice:[
          {q:'Which animal says "moo"?', opts:['dog','cow','cat','lion'], ans:1, exp:'Cows say "moo"!'},
          {q:'Where do birds usually live?', opts:['underground','in water','in trees','in caves'], ans:2, exp:'Birds usually live in trees / nests.'},
        ],
      }, qs:[
        {q:'What sound does a dog make?',opts:['meow','woof','moo','roar'],ans:1,exp:'Dogs go "woof"! 🐕 Cats go "meow".'},
        {q:'"Lion" in Portuguese is:',opts:['elefante','leão','girafa','crocodilo'],ans:1,exp:'lion = leão. Lions are symbols of Africa! 🦁'},
        {q:'Where do fish live?',opts:['in trees','in water','underground','in the sky'],ans:1,exp:'Fish live in water — rivers, lakes, oceans!'},
        {q:'Which animal is the biggest?',opts:['cat','dog','elephant','bird'],ans:2,exp:'The elephant is the biggest land animal on Earth!'},
        {q:'"Tree" means:',opts:['flor','erva','árvore','pedra'],ans:2,exp:'tree = árvore. Trees give us oxygen!'},
      ]},
      {id:'l4a', title:'Weather & Seasons', titlePt:'Tempo e Estações', icon:'⛅', xp:20, learn:{
        explanation:{
          en:'We talk about weather using "It is...": "It is sunny", "It is raining". The four seasons are spring, summer, autumn (fall), and winter. Each season has typical weather and activities.',
          pt:'Falamos sobre o tempo usando "It is...": "It is sunny", "It is raining". As quatro estações são spring, summer, autumn (fall) e winter. Cada estação tem um clima e actividades típicas.'
        },
        examples:[
          {en:'It is sunny today.', pt:'Hoje está sol.'},
          {en:'It rains a lot in winter.', pt:'Chove muito no inverno.'},
          {en:'I love summer because it\'s hot.', pt:'Eu adoro o verão porque é quente.'},
        ],
        practice:[
          {q:'"It is raining" describes the:', opts:['season','weather','time','colour'], ans:1, exp:'It describes WEATHER.'},
          {q:'Which season comes after spring?', opts:['winter','autumn','summer','none'], ans:2, exp:'Spring → Summer → Autumn → Winter.'},
        ],
      }, qs:[
        {q:'"It is ___ today. Bring an umbrella!"',opts:['sunny','raining','cold','hot'],ans:1,exp:'You need an umbrella when it\'s RAINING.'},
        {q:'How many seasons are there?',opts:['2','3','4','5'],ans:2,exp:'There are 4 seasons: spring, summer, autumn, winter.'},
        {q:'"Hot" is the opposite of:',opts:['warm','cold','sunny','windy'],ans:1,exp:'hot ↔ cold.'},
        {q:'Which season is the coldest?',opts:['summer','spring','winter','autumn'],ans:2,exp:'Winter is the coldest season.'},
        {q:'"It\'s very windy today" means:',opts:['It is raining a lot','There is a lot of wind','It is very hot','It is snowing'],ans:1,exp:'Windy = lots of wind blowing.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 5 — DAILY LIFE & COMMUNICATION
  // ══════════════════════════════════════════════════════
  {
    id:'u5', cefr:'A1', title:'Daily Life', titlePt:'Vida Quotidiana',
    desc:'English for everyday situations 🌍',
    descPt:'Inglês para situações do dia-a-dia 🌍',
    color:'#ffd740', icon:'🌅', premium:false,
    lessons:[
      {id:'l15', title:'Days & Months', titlePt:'Dias e Meses', icon:'📅', xp:20, learn:{
        explanation:{
          en:'The 7 days of the week and 12 months of the year are essential for making plans, telling stories, and talking about dates. In English, days and months always start with a capital letter.',
          pt:'Os 7 dias da semana e os 12 meses do ano são essenciais para fazer planos, contar histórias e falar sobre datas. Em inglês, os dias e meses começam sempre com letra maiúscula.'
        },
        examples:[
          {en:'Today is Monday.', pt:'Hoje é segunda-feira.'},
          {en:'My birthday is in July.', pt:'O meu aniversário é em Julho.'},
          {en:'We have classes from Monday to Friday.', pt:'Temos aulas de segunda a sexta-feira.'},
        ],
        practice:[
          {q:'Which day comes after Friday?', opts:['Sunday','Thursday','Saturday','Monday'], ans:2, exp:'Friday → Saturday.'},
          {q:'How many months are in a year?', opts:['10','11','12','13'], ans:2, exp:'There are 12 months in a year.'},
        ],
      }, qs:[
        {q:'What is the first day of the week in English?',opts:['Monday','Sunday','Saturday','Wednesday'],ans:1,exp:'In English-speaking countries, Sunday is traditionally the first day of the week.'},
        {q:'"Segunda-feira" in English is:',opts:['Sunday','Monday','Tuesday','Wednesday'],ans:1,exp:'Monday = Segunda-feira. The week starts with Monday for most people!'},
        {q:'Which month comes after March?',opts:['February','May','April','June'],ans:2,exp:'March → April → May → June. April comes after March!'},
        {q:'"December" is the ___ month of the year.',opts:['10th','11th','12th','9th'],ans:2,exp:'December is the 12th and last month of the year!'},
        {q:'"Agosto" in English is:',opts:['June','July','August','September'],ans:2,exp:'August = Agosto. Summer month in Europe!'},
      ]},
      {id:'l16', title:'Telling the Time', titlePt:'Dizer as Horas', icon:'🕐', xp:20, learn:{
        explanation:{
          en:'To tell the time, we use "o\'clock" for exact hours, "quarter past/to" for 15 minutes, and "half past" for 30 minutes. "What time is it?" is the standard question.',
          pt:'Para dizer as horas, usamos "o\'clock" para horas exactas, "quarter past/to" para 15 minutos, e "half past" para 30 minutos. "What time is it?" é a pergunta padrão.'
        },
        examples:[
          {en:'It\'s 7 o\'clock.', pt:'São 7 horas.'},
          {en:'It\'s half past three.', pt:'São três e meia.'},
          {en:'What time is it?', pt:'Que horas são?'},
        ],
        practice:[
          {q:'"Quarter to six" means:', opts:['6:15','5:45','6:45','5:15'], ans:1, exp:'Quarter TO = 15 minutes BEFORE: 5:45.'},
          {q:'How do you ask the time?', opts:['What hour is now?','What time is it?','Which time?','How time is it?'], ans:1, exp:'"What time is it?" is correct.'},
        ],
      }, qs:[
        {q:'"It is 3 o\'clock." This means:',opts:['3:15','3:00','3:30','2:45'],ans:1,exp:'"O\'clock" = exact hour. 3 o\'clock = 3:00.'},
        {q:'"Quarter past five" means:',opts:['5:05','5:10','5:15','5:45'],ans:2,exp:'"Quarter past" = 15 minutes after. Quarter past five = 5:15.'},
        {q:'"Half past eight" means:',opts:['8:00','8:15','8:30','8:45'],ans:2,exp:'"Half past" = 30 minutes. Half past eight = 8:30.'},
        {q:'How do you ask for the time?',opts:['Where is the time?','What is your time?','What time is it?','How much time?'],ans:2,exp:'"What time is it?" = Que horas são? The standard question!'},
        {q:'"It\'s midnight." This means:',opts:['12:00 PM','12:00 AM','6:00 AM','6:00 PM'],ans:1,exp:'"Midnight" = 12:00 AM = meia-noite. "Midday/noon" = 12:00 PM.'},
      ]},
      {id:'l17', title:'Shopping & Money', titlePt:'Compras e Dinheiro', icon:'🛍️', xp:25, learn:{
        explanation:{
          en:'Shopping vocabulary helps you buy things confidently: price, expensive, cheap, change, receipt. "How much does it cost?" asks the price; the cashier might say "Here\'s your change."',
          pt:'O vocabulário de compras ajuda-te a comprar com confiança: price, expensive, cheap, change, receipt. "How much does it cost?" pergunta o preço; o caixa pode dizer "Here\'s your change."'
        },
        examples:[
          {en:'How much does this cost?', pt:'Quanto custa isto?'},
          {en:'That\'s too expensive for me.', pt:'Isso é demasiado caro para mim.'},
          {en:'Here is your change.', pt:'Aqui está o seu troco.'},
        ],
        practice:[
          {q:'"Change" in a shop means:', opts:['a new product','money given back','a discount card','the shop owner'], ans:1, exp:'Change = money given back after paying.'},
          {q:'How do you ask the price?', opts:['How much does it cost?','How is it cost?','What price?','How many cost?'], ans:0, exp:'"How much does it cost?" is the standard question.'},
        ],
      }, qs:[
        {q:'"How much does it cost?" This question is about:',opts:['size','colour','price','quality'],ans:2,exp:'"How much does it cost?" = Quanto custa? Asking about the price!'},
        {q:'"It\'s too ___. I can\'t afford it."',opts:['cheap','expensive','free','small'],ans:1,exp:'"Expensive" = muito caro. "I can\'t afford it" = não consigo pagar.'},
        {q:'Where do you buy medicine?',opts:['supermarket','pharmacy','bakery','school'],ans:1,exp:'You buy medicine at a pharmacy (farmácia)!'},
        {q:'"Change" in a shop means:',opts:['a new item','the money you get back','a discount','the receipt'],ans:1,exp:'"Change" = the money the cashier gives you back after paying!'},
        {q:'"Can I help you?" is said by:',opts:['the customer','the security guard','the shop assistant','the manager'],ans:2,exp:'Shop assistants say "Can I help you?" when you enter a shop.'},
      ]},
      {id:'l18', title:'Directions & Places', titlePt:'Direcções e Lugares', icon:'🗺️', xp:25, learn:{
        explanation:{
          en:'Direction words (left, right, straight, next to, opposite) help you navigate a city and ask for help. "Where is...?" is the key question for asking locations.',
          pt:'As palavras de direcção (left, right, straight, next to, opposite) ajudam-te a navegar numa cidade e a pedir ajuda. "Where is...?" é a pergunta-chave para perguntar localizações.'
        },
        examples:[
          {en:'Turn left at the corner.', pt:'Vira à esquerda na esquina.'},
          {en:'The bank is next to the pharmacy.', pt:'O banco fica ao lado da farmácia.'},
          {en:'Where is the nearest hospital?', pt:'Onde fica o hospital mais próximo?'},
        ],
        practice:[
          {q:'"Next to" means:', opts:['far from','beside','inside','above'], ans:1, exp:'Next to = beside/near.'},
          {q:'How do you ask for a location?', opts:['Where is...?','What is...?','Who is...?','When is...?'], ans:0, exp:'Use "Where" for locations.'},
        ],
      }, qs:[
        {q:'"Turn left" means:',opts:['go straight','turn right','turn left','go back'],ans:2,exp:'"Turn left" = vira à esquerda. Opposite: "turn right" = vira à direita.'},
        {q:'Where do you go to catch a plane?',opts:['harbour','station','airport','bus stop'],ans:2,exp:'You catch a plane at the AIRPORT (aeroporto)!'},
        {q:'"It\'s next to the bank." This means:',opts:['far from','inside','beside/near','opposite'],ans:2,exp:'"Next to" = ao lado de. Beside/near the bank!'},
        {q:'How do you ask for directions?',opts:['Where is the bank?','Who is the bank?','When is the bank?','Why is the bank?'],ans:0,exp:'"Where is the bank?" = Onde fica o banco? Use "where" for location!'},
        {q:'"The hospital is ___ the park." (in front)',opts:['next to','behind','opposite','above'],ans:2,exp:'"Opposite" = in front of, facing. The hospital faces the park.'},
      ]},
      {id:'l5a', title:'There Is / There Are', titlePt:'There Is / There Are (Há)', icon:'📍', xp:20, learn:{
        explanation:{
          en:'We use "there is" for one thing (singular) and "there are" for more than one (plural) to say something exists. "There is a bank near here." "There are two chairs in the room."',
          pt:'Usamos "there is" para uma coisa (singular) e "there are" para mais do que uma (plural) para dizer que algo existe. "There is a bank near here." "There are two chairs in the room."'
        },
        examples:[
          {en:'There is a school near my house.', pt:'Há uma escola perto da minha casa.'},
          {en:'There are many shops in the city.', pt:'Há muitas lojas na cidade.'},
          {en:'Is there a pharmacy here?', pt:'Há uma farmácia aqui?'},
        ],
        practice:[
          {q:'Complete: "___ a cat in the garden."', opts:['There is','There are','Is there','They are'], ans:0, exp:'One cat (singular) → There IS.'},
          {q:'Complete: "___ three books on the table."', opts:['There is','There are','Is there','It is'], ans:1, exp:'Three books (plural) → There ARE.'},
        ],
      }, qs:[
        {q:'"There ___ a hospital near here."',opts:['is','are','be','am'],ans:0,exp:'Singular noun → "is".'},
        {q:'"There ___ many people at the party."',opts:['is','are','be','was'],ans:1,exp:'Plural noun → "are".'},
        {q:'Question form: "___ a bank nearby?"',opts:['Is there','There is','Are there','There are'],ans:0,exp:'Question with singular: "Is there...?"'},
        {q:'"There aren\'t any apples" means:',opts:['There are some apples','There are no apples','There is one apple','There were apples'],ans:1,exp:'aren\'t = are not = none.'},
        {q:'Which is correct?',opts:['There is two dogs.','There are two dogs.','There two dogs are.','Two dogs there are.'],ans:1,exp:'Plural (two dogs) → There ARE.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 6 — PHRASAL VERBS (Premium)
  // ══════════════════════════════════════════════════════
  {
    id:'u6', cefr:'B1', title:'Phrasal Verbs', titlePt:'Verbos Frasais',
    desc:'Sound like a native speaker 🤯',
    descPt:'Soa como um falante nativo 🤯',
    color:'#bc8cff', icon:'💬', premium:true,
    lessons:[
      {id:'l19', title:'Common Phrasal Verbs', titlePt:'Verbos Frasais Comuns', icon:'💬', xp:30, learn:{
        explanation:{
          en:'Phrasal verbs combine a verb with a preposition or particle to create a new meaning, often totally different from the original verb. "Give up" (verb: give) means to quit! Native speakers use them constantly.',
          pt:'Os phrasal verbs combinam um verbo com uma preposição ou partícula para criar um novo significado, muitas vezes totalmente diferente do verbo original. "Give up" (verbo: give) significa desistir! Os falantes nativos usam-nos constantemente.'
        },
        examples:[
          {en:'Don\'t give up on your dreams.', pt:'Não desistas dos teus sonhos.'},
          {en:'I ran into an old friend yesterday.', pt:'Encontrei um velho amigo ontem, por acaso.'},
          {en:'Can you look after my dog?', pt:'Podes cuidar do meu cão?'},
        ],
        practice:[
          {q:'"Give up" means:', opts:['to donate','to quit','to grow','to wake up'], ans:1, exp:'Give up = quit/stop trying.'},
          {q:'"Look after" means:', opts:['to search for','to take care of','to admire','to ignore'], ans:1, exp:'Look after = take care of.'},
        ],
      }, qs:[
        {q:'"Give up" means:',opts:['to donate','to stop trying','to increase effort','to hand over'],ans:1,exp:'"Give up" = quit/desistir. "Don\'t give up!" 💪'},
        {q:'"She ran ___ her ex at the mall."',opts:['over','into','away','out'],ans:1,exp:'"Run into" = to meet unexpectedly. Awkward! 😬'},
        {q:'"Turn ___ the TV — I\'m sleeping!"',opts:['on','up','off','down'],ans:2,exp:'"Turn off" = stop a device.'},
        {q:'"He needs to ___ up with a good idea."',opts:['come','give','bring','look'],ans:0,exp:'"Come up with" = to think of/invent.'},
        {q:'"Can you ___ after my dog this weekend?"',opts:['look','watch','take','see'],ans:0,exp:'"Look after" = to take care of.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 7 — IDIOMS (Premium)
  // ══════════════════════════════════════════════════════
  {
    id:'u7', cefr:'B1', title:'Idioms', titlePt:'Expressões Idiomáticas',
    desc:'Speak naturally & sound cool 😎',
    descPt:'Fala naturalmente e com estilo 😎',
    color:'#ff4081', icon:'🗣️', premium:true,
    lessons:[
      {id:'l20', title:'Common Idioms', titlePt:'Expressões Comuns', icon:'🗣️', xp:35, learn:{
        explanation:{
          en:'Idioms are fixed expressions whose meaning isn\'t literal — you can\'t guess it just from the individual words. "It\'s raining cats and dogs" doesn\'t involve animals; it means it\'s raining very heavily! Learning idioms helps you sound natural.',
          pt:'Os idiomas são expressões fixas cujo significado não é literal — não se consegue adivinhar apenas pelas palavras individuais. "It\'s raining cats and dogs" não tem animais; significa que está a chover muito! Aprender idiomas ajuda-te a soar natural.'
        },
        examples:[
          {en:'That exam was a piece of cake!', pt:'Aquele exame foi canja (muito fácil)!'},
          {en:'Break a leg in your interview!', pt:'Boa sorte na tua entrevista!'},
          {en:'He\'s on the fence about the job offer.', pt:'Ele está indeciso sobre a proposta de trabalho.'},
        ],
        practice:[
          {q:'"A piece of cake" means:', opts:['delicious food','very easy','very hard','a dessert'], ans:1, exp:'A piece of cake = very easy.'},
          {q:'"On the fence" means:', opts:['sitting outside','undecided','very confident','angry'], ans:1, exp:'On the fence = undecided.'},
        ],
      }, qs:[
        {q:'"It\'s raining cats and dogs." This means:',opts:['Animals are falling','It\'s raining heavily','The weather is strange','Pets are outside'],ans:1,exp:'"Raining cats and dogs" = raining VERY heavily.'},
        {q:'"Break a leg!" means:',opts:['Be careful!','Good luck!','Hurry up!','Don\'t be nervous!'],ans:1,exp:'"Break a leg" = good luck! Used in theatre.'},
        {q:'"He\'s on the fence about the decision." This means he is:',opts:['sitting down','undecided','very sure','wrong'],ans:1,exp:'"On the fence" = undecided/indeciso.'},
        {q:'"That exam was a piece of cake." This means:',opts:['It was delicious','It was very hard','It was very easy','It was boring'],ans:2,exp:'"A piece of cake" = very easy. 🎂'},
        {q:'"Hit the nail on the head" = to be:',opts:['violent','confused','exactly right','careless'],ans:2,exp:'"Hit the nail on the head" = exactly right/acertar em cheio.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 8 — PAST PERFECT & NARRATIVE TENSES
  // ══════════════════════════════════════════════════════
  {
    id: 'u8',
    cefr: 'B1',
    title: 'Past Perfect & Narrative Tenses',
    titlePt: 'Past Perfect e Tempos Narrativos',
    desc: 'Master the art of storytelling in English 📖',
    descPt: 'Domina a arte de contar histórias em inglês 📖',
    color: '#6d4c41',
    icon: '📖',
    premium: false,
    lessons: [
      {
        id: 'l8a',
        title: 'The Past Perfect',
        titlePt: 'O Past Perfect',
        icon: '⏪',
        xp: 20,
        learn: {
          explanation: {
            en: 'Past Perfect (had + past participle) shows that one past action happened BEFORE another past action. It\'s the "past of the past". "When I arrived, she had already left" — leaving happened first.',
            pt: 'O Past Perfect (had + particípio passado) mostra que uma acção passada aconteceu ANTES de outra acção passada. É o "passado do passado". "When I arrived, she had already left" — sair aconteceu primeiro.'
          },
          examples: [
            { en: 'I had finished my homework before dinner.', pt: 'Eu já tinha terminado o trabalho de casa antes do jantar.' },
            { en: 'She had never seen snow before that trip.', pt: 'Ela nunca tinha visto neve antes daquela viagem.' },
            { en: 'By the time we arrived, the film had started.', pt: 'Quando chegámos, o filme já tinha começado.' }
          ],
          practice: [
            { q: 'Past Perfect formula:', opts: ['have + past participle', 'had + past participle', 'was + verb-ing', 'did + base verb'], ans: 1, exp: 'had + past participle.' },
            { q: 'Which action happened FIRST: "I had eaten before you called"?', opts: ['Calling', 'Eating', 'Both together', 'Unclear'], ans: 1, exp: 'Eating happened first (Past Perfect), then calling (Past Simple).' }
          ]
        },
        qs: [
          { q: '"She ___ already eaten when I arrived."', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: '"She HAD already eaten..." — Past Perfect = action completed before another past action.' },
          { q: 'Past Perfect = ___ + Past Participle', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: 'Had + Past Participle. Example: "I had finished my work before she came."' },
          { q: '"When I got home, my brother ___ already left."', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: '"had already left" — the leaving happened BEFORE I got home.' },
          { q: 'Which sentence uses Past Perfect correctly?', opts: ['I have seen the movie already.', 'I had seen the movie when you arrived.', 'I saw the movie before you arrived.', 'I have had seen the movie.'], ans: 1, exp: '"I had seen the movie when you arrived" = Past Perfect for the action that happened first.' },
          { q: '"She said she ___ never ___ to Europe."', opts: ['has, be', 'had, been', 'have, been', 'was, be'], ans: 1, exp: '"She said she HAD never BEEN to Europe." — Past Perfect in reported speech.' }
        ]
      },
      {
        id: 'l8b',
        title: 'Narrative Tenses Overview',
        titlePt: 'Visão Geral dos Tempos Narrativos',
        icon: '📝',
        xp: 20,
        learn: {
          explanation: {
            en: 'Narrative tenses (Past Simple, Past Continuous, and Past Perfect) work together to tell a clear story, showing what happened, what was already happening, and what had happened earlier.',
            pt: 'Os tempos narrativos (Past Simple, Past Continuous e Past Perfect) trabalham juntos para contar uma história clara, mostrando o que aconteceu, o que já estava a acontecer, e o que tinha acontecido antes.'
          },
          examples: [
            { en: 'I was walking home when it started to rain.', pt: 'Eu estava a caminhar para casa quando começou a chover.' },
            { en: 'She had already cooked dinner when he arrived.', pt: 'Ela já tinha cozinhado o jantar quando ele chegou.' },
            { en: 'We met, talked, and then said goodbye.', pt: 'Nós encontrámo-nos, conversámos, e depois despedimo-nos.' }
          ],
          practice: [
            { q: 'Which tense shows an ongoing background action?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Future'], ans: 1, exp: 'Past Continuous = background/ongoing action.' },
            { q: 'Which tense shows the EARLIEST event in a story?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Present'], ans: 2, exp: 'Past Perfect = the action before the rest of the story.' }
          ]
        },
        qs: [
          { q: 'Narrative tenses are used for:', opts: ['Describing routines', 'Telling stories', 'Making predictions', 'Giving orders'], ans: 1, exp: 'Narrative tenses are used to tell stories about past events.' },
          { q: 'Which tenses are considered narrative tenses?', opts: ['Present Simple only', 'Past Simple, Past Continuous, Past Perfect', 'Future only', 'All tenses'], ans: 1, exp: 'Past Simple, Past Continuous, and Past Perfect are the main narrative tenses.' },
          { q: '"I ___ dinner when the phone ___."', opts: ['was having, rang', 'had, rang', 'have, rings', 'was having, was ringing'], ans: 0, exp: '"I WAS HAVING dinner when the phone RANG" — Past Continuous (ongoing) + Past Simple (interruption).' },
          { q: '"After I ___ my homework, I watched TV."', opts: ['finish', 'finished', 'had finished', 'was finishing'], ans: 2, exp: '"After I HAD FINISHED my homework..." — Past Perfect for the action that happened first.' },
          { q: 'What is the correct narrative sequence?', opts: ['I arrived. I was eating. I had left.', 'I had arrived. I ate. I was leaving.', 'I arrived. I ate. I had already eaten.', 'I was arriving. I ate. I had left.'], ans: 2, exp: 'The correct sequence shows chronological order with Past Perfect for the earliest action.' }
        ]
      },
      {
        id: 'l8c',
        title: 'Narrative Story: The Unexpected Journey',
        titlePt: 'História Narrativa: A Viagem Inesperada',
        icon: '✈️',
        xp: 25,
        learn: {
          explanation: {
            en: 'In storytelling, Past Perfect signals "this happened even earlier". Watch for it in stories to understand the true order of events, not just the order they are mentioned in.',
            pt: 'Ao contar histórias, o Past Perfect assinala "isto aconteceu ainda mais cedo". Repara nele nas histórias para entenderes a verdadeira ordem dos eventos, não apenas a ordem em que são mencionados.'
          },
          examples: [
            { en: 'I had packed my bags before the taxi arrived.', pt: 'Eu já tinha feito as malas antes do táxi chegar.' },
            { en: 'She told me she had lost her passport.', pt: 'Ela disse-me que tinha perdido o passaporte.' },
            { en: 'By the time the sun rose, we had already left.', pt: 'Quando o sol nasceu, nós já tínhamos partido.' }
          ],
          practice: [
            { q: 'In "I had packed before the taxi arrived", what happened first?', opts: ['Taxi arriving', 'Packing', 'Both together', 'Unclear'], ans: 1, exp: 'Packing happened first (Past Perfect).' },
            { q: 'Past Perfect in stories usually signals:', opts: ['the next event', 'an earlier event', 'a future event', 'a repeated habit'], ans: 1, exp: 'It points back to something that happened even earlier.' }
          ]
        },
        qs: [
          { q: 'Read the story: "I was walking home when I saw a strange light in the sky. I had never seen anything like it before." The first action was:', opts: ['Walking', 'Seeing the light', 'The light appearing', 'Going home'], ans: 2, exp: 'The light appeared (implied), then the person saw it while walking. Past Perfect in the third sentence shows the light had appeared before seeing it.' },
          { q: 'In the story "I had already left the house when I remembered my keys", what happened first?', opts: ['Left the house', 'Remembered the keys', 'Went back', 'Forgot the keys'], ans: 0, exp: 'The person HAD LEFT (Past Perfect) before remembering (Past Simple).' },
          { q: 'Which sentence uses Past Perfect correctly in a narrative?', opts: ['I was tired because I was working all day.', 'I was tired because I worked all day.', 'I was tired because I had worked all day.', 'I was tired because I have worked all day.'], ans: 2, exp: '"I HAD WORKED all day" — cause (work) happened before effect (being tired).' },
          { q: '"She ___ the book for years before it ___ published."', opts: ['wrote, was', 'had written, was', 'has written, was', 'was writing, had been'], ans: 1, exp: '"She HAD WRITTEN the book for years before it WAS published."' }
        ]
      },
      {
        id: 'l8d',
        title: 'Sequence Words',
        titlePt: 'Palavras de Sequência',
        icon: '🔗',
        xp: 20,
        learn: {
          explanation: {
            en: 'Sequence words (first, then, after, before, finally) show the order of events in a story without needing complicated grammar. "Before" points to the earlier action; "after" and "then" point forward.',
            pt: 'As palavras de sequência (first, then, after, before, finally) mostram a ordem dos eventos numa história sem precisar de gramática complicada. "Before" aponta para a acção mais cedo; "after" e "then" apontam para a frente.'
          },
          examples: [
            { en: 'First, I woke up. Then, I had breakfast.', pt: 'Primeiro, acordei. Depois, tomei o pequeno-almoço.' },
            { en: 'Before leaving, I locked the door.', pt: 'Antes de sair, tranquei a porta.' },
            { en: 'Finally, we arrived home.', pt: 'Finalmente, chegámos a casa.' }
          ],
          practice: [
            { q: 'Which word points to the EARLIER action?', opts: ['after', 'before', 'then', 'finally'], ans: 1, exp: '"Before" = earlier.' },
            { q: '"I ate breakfast. ___ I left for work."', opts: ['Before', 'Then', 'While', 'Since'], ans: 1, exp: '"Then" shows the next step.' }
          ]
        },
        qs: [
          { q: '"First, ___ we went to the market, we bought vegetables."', opts: ['then', 'before', 'after', 'finally'], ans: 0, exp: '"First, THEN we went..." — sequence words order events.' },
          { q: 'Which word signals the EARLIEST action?', opts: ['after', 'before', 'then', 'finally'], ans: 1, exp: '"Before" indicates the action that happened earlier. "Before I ate, I washed my hands."' },
          { q: '"I finished my homework. ___ I went to bed."', opts: ['Before', 'After', 'Then', 'When'], ans: 2, exp: '"Then" shows the next action in sequence.' },
          { q: 'Which sequence is correct?', opts: ['I woke up, then I brushed my teeth, after I had breakfast.', 'I had breakfast, before I woke up, then I brushed my teeth.', 'I woke up, then I had breakfast, after I brushed my teeth.'], ans: 0, exp: 'Correct sequence: woke up → brushed teeth → had breakfast.' },
          { q: '"___ I left the house, I locked the door."', opts: ['After', 'Before', 'Then', 'Finally'], ans: 0, exp: '"AFTER I left the house, I locked the door." — First left, then locked.' }
        ]
      },
      {
        id: 'l8e',
        title: 'Using "Already", "Just" & "Never"',
        titlePt: 'Usando "Already", "Just" e "Never"',
        icon: '⌛',
        xp: 20,
        learn: {
          explanation: {
            en: 'With Past Perfect, "already" shows something was completed earlier than expected, "just" shows it happened a moment before, and "never" shows no prior experience. They usually go between had and the past participle.',
            pt: 'Com o Past Perfect, "already" mostra que algo foi concluído mais cedo do que o esperado, "just" mostra que aconteceu um instante antes, e "never" mostra ausência de experiência anterior. Normalmente ficam entre had e o particípio passado.'
          },
          examples: [
            { en: 'I had already left when you called.', pt: 'Eu já tinha saído quando me ligaste.' },
            { en: 'She had just arrived when the meeting started.', pt: 'Ela tinha acabado de chegar quando a reunião começou.' },
            { en: 'He had never tried sushi before that night.', pt: 'Ele nunca tinha experimentado sushi antes daquela noite.' }
          ],
          practice: [
            { q: '"I had ___ finished when she arrived." (a moment before)', opts: ['already', 'never', 'just', 'yet'], ans: 2, exp: '"Just" = a moment before.' },
            { q: 'Where does "already" usually go?', opts: ['before had', 'between had and participle', 'at the end only', 'before the subject'], ans: 1, exp: 'had + already + past participle.' }
          ]
        },
        qs: [
          { q: '"I had ___ arrived when she called." (a moment before)', opts: ['already', 'never', 'just', 'yet'], ans: 2, exp: '"I had JUST arrived" = a very short time before.' },
          { q: '"She ___ seen that movie, so we watched something else." (before)', opts: ['had just', 'had already', 'had never', 'has already'], ans: 1, exp: '"She had ALREADY seen it" — an action completed before another time.' },
          { q: '"I ___ been to Italy, so I was excited to go." (not before)', opts: ['had already', 'had just', 'had never', 'has never'], ans: 2, exp: '"I had NEVER been" — no prior experience.' },
          { q: '"We ___ finished eating ___ the waiter arrived."', opts: ['had already, when', 'already had, while', 'had just, before', 'just had, after'], ans: 0, exp: '"We HAD ALREADY finished eating WHEN the waiter arrived."' },
          { q: 'Which is correct?', opts: ['I had never saw that before.', 'I had never seen that before.', 'I have never saw that before.', 'I never seen that before.'], ans: 1, exp: '"I had never SEEN" — Past Perfect requires Past Participle (seen, not saw).' }
        ]
      },
      {
        id: 'l8f',
        title: 'Narrative Practice: Writing a Story',
        titlePt: 'Prática Narrativa: Escrevendo uma História',
        icon: '✍️',
        xp: 25,
        learn: {
          explanation: {
            en: 'To write a good story, start most actions in Past Simple, use Past Continuous for background scenes, and Past Perfect for anything that happened before the main story timeline.',
            pt: 'Para escrever uma boa história, começa a maioria das acções no Past Simple, usa o Past Continuous para cenários de fundo, e o Past Perfect para tudo o que aconteceu antes da linha temporal principal da história.'
          },
          examples: [
            { en: 'The sun was setting when she finally arrived.', pt: 'O sol estava a pôr-se quando ela finalmente chegou.' },
            { en: 'He had studied hard, so the exam felt easy.', pt: 'Ele tinha estudado muito, por isso o exame pareceu fácil.' },
            { en: 'I opened the door and walked inside.', pt: 'Eu abri a porta e entrei.' }
          ],
          practice: [
            { q: 'Which tense usually starts a story\'s main events?', opts: ['Past Perfect', 'Past Simple', 'Present Perfect', 'Future'], ans: 1, exp: 'Past Simple narrates the main sequence of events.' },
            { q: 'Which tense explains WHY something happened earlier?', opts: ['Past Continuous', 'Past Perfect', 'Present Simple', 'Future Perfect'], ans: 1, exp: 'Past Perfect gives the earlier cause/reason.' }
          ]
        },
        qs: [
          { q: 'What tense is best to start a story?', opts: ['Present Simple', 'Past Simple', 'Future', 'Present Perfect'], ans: 1, exp: 'Past Simple is the standard tense to start narrating a past event.' },
          { q: 'What tense describes an action that was ongoing when something else happened?', opts: ['Past Perfect', 'Past Continuous', 'Past Simple', 'Present Continuous'], ans: 1, exp: 'Past Continuous describes actions in progress at a specific past moment.' },
          { q: '"I was walking to the store when I ___ my friend."', opts: ['see', 'saw', 'was seeing', 'had seen'], ans: 1, exp: '"I WAS WALKING (ongoing) when I SAW (interruption) my friend."' },
          { q: '"She ___ in that office for five years before she got promoted."', opts: ['worked', 'was working', 'had worked', 'has worked'], ans: 2, exp: '"She HAD WORKED for five years" — duration before a later event (promotion).' },
          { q: 'Finish the story correctly: "I ___ the door and ___ inside."', opts: ['opened, walked', 'opened, was walking', 'was opening, walked', 'had opened, walked'], ans: 0, exp: 'Simple Past is used for consecutive actions in a story.' }
        ]
      },
      {
        id: 'l8g',
        title: 'Time Expressions with Past Perfect',
        titlePt: 'Expressões de Tempo com Past Perfect',
        icon: '🕰️',
        xp: 20,
        learn: {
          explanation: {
            en: '"By the time", "since", and "for" often pair with Past Perfect. "By the time" marks a deadline in the past. "Since" marks a starting point; "for" marks a duration.',
            pt: '"By the time", "since" e "for" juntam-se frequentemente ao Past Perfect. "By the time" marca um prazo no passado. "Since" marca um ponto de partida; "for" marca uma duração.'
          },
          examples: [
            { en: 'By the time he called, I had already gone to bed.', pt: 'Quando ele ligou, eu já tinha ido para a cama.' },
            { en: 'She had worked there for ten years before retiring.', pt: 'Ela tinha trabalhado lá durante dez anos antes de se reformar.' },
            { en: 'They had been friends since childhood.', pt: 'Eles eram amigos desde a infância.' }
          ],
          practice: [
            { q: '"For" is used with:', opts: ['a point in time', 'a duration', 'a place', 'a reason'], ans: 1, exp: '"For" + a period/duration: for 10 years.' },
            { q: '"Since" is used with:', opts: ['a duration', 'a starting point', 'a place', 'a reason'], ans: 1, exp: '"Since" + a specific starting point: since 2010.' }
          ]
        },
        qs: [
          { q: '"By the time I arrived, they ___ already ___."', opts: ['have, left', 'had, left', 'has, left', 'were, left'], ans: 1, exp: '"By the time" + Past Perfect: "they HAD already LEFT."' },
          { q: '"I had been there ___ 2010."', opts: ['for', 'since', 'from', 'ago'], ans: 1, exp: '"since 2010" — specific point in time. Past Perfect requires "since" or "for".' },
          { q: '"She had been a teacher ___ 15 years before she retired."', opts: ['for', 'since', 'during', 'from'], ans: 0, exp: '"for 15 years" — duration. "For" + period, "Since" + point.' },
          { q: '"___ the time I woke up, she had already left."', opts: ['After', 'By', 'Before', 'During'], ans: 1, exp: '"BY the time" indicates the deadline before which the action had already happened.' },
          { q: 'Which expression does NOT work with Past Perfect?', opts: ['by the time', 'before', 'after', 'tomorrow'], ans: 3, exp: '"tomorrow" is future — cannot be used with Past Perfect.' }
        ]
      },
      {
        id: 'l8h',
        title: 'Review: Narrative Tenses',
        titlePt: 'Revisão: Tempos Narrativos',
        icon: '🎯',
        xp: 25,
        learn: {
          explanation: {
            en: 'Let\'s review: Past Simple for the main events, Past Continuous for ongoing background actions, and Past Perfect for anything that happened even earlier. Mixing all three correctly makes your stories sound natural and clear.',
            pt: 'Vamos rever: Past Simple para os eventos principais, Past Continuous para acções de fundo em curso, e Past Perfect para tudo o que aconteceu ainda mais cedo. Combinar os três correctamente faz as tuas histórias soarem naturais e claras.'
          },
          examples: [
            { en: 'I was reading when the lights went out.', pt: 'Eu estava a ler quando as luzes se apagaram.' },
            { en: 'She had already left when I called.', pt: 'Ela já tinha saído quando eu liguei.' },
            { en: 'We arrived, unpacked, and went to sleep.', pt: 'Nós chegámos, desfizemos as malas, e fomos dormir.' }
          ],
          practice: [
            { q: 'Which combination shows an interrupted action?', opts: ['Past Simple + Past Simple', 'Past Continuous + Past Simple', 'Past Perfect + Past Perfect', 'Future + Past'], ans: 1, exp: 'Past Continuous (ongoing) + Past Simple (interruption).' },
            { q: 'Which tense always shows the EARLIEST event?', opts: ['Past Simple', 'Past Continuous', 'Past Perfect', 'Present Perfect'], ans: 2, exp: 'Past Perfect = always the earliest action in the sequence.' }
          ]
        },
        qs: [
          { q: '"I was watching TV when the lights went out." The two tenses are:', opts: ['Past Continuous + Past Simple', 'Past Simple + Past Perfect', 'Past Perfect + Past Simple', 'Past Continuous + Past Perfect'], ans: 0, exp: 'Past Continuous (was watching) + Past Simple (went out).' },
          { q: '"I had finished my work before I went home." The first action is:', opts: ['Went home', 'Finished work', 'Started work', 'Both at the same time'], ans: 1, exp: 'Had finished (Past Perfect) happened before went home (Past Simple).' },
          { q: 'Which sentence correctly describes three past events in order?', opts: ['I ate, I had arrived, I was sleeping.', 'I arrived, I ate, I slept.', 'I was arriving, I ate, I had slept.', 'I had arrived, I was eating, I slept.'], ans: 1, exp: 'Arrived (Past Simple) → ate (Past Simple) → slept (Past Simple) shows clear sequence.' },
          { q: '"She ___ never ___ sushi before she ___ to Japan."', opts: ['had, eaten, went', 'has, ate, went', 'had, ate, went', 'has, eaten, was going'], ans: 0, exp: '"She HAD never EATEN sushi before she WENT to Japan."' },
          { q: 'Narrative tenses are essential for:', opts: ['Writing emails', 'Ordering food', 'Telling stories', 'Giving directions'], ans: 2, exp: 'Narrative tenses are primarily used for storytelling and describing past events.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 9 — FUTURE PERFECT & FUTURE CONTINUOUS
  // ══════════════════════════════════════════════════════
  {
    id: 'u9',
    cefr: 'B1',
    title: 'Future Perfect & Future Continuous',
    titlePt: 'Future Perfect e Future Continuous',
    desc: 'Talk about what will be happening or finished 🔮',
    descPt: 'Fala sobre o que estará a acontecer ou já estará terminado 🔮',
    color: '#7c4dff',
    icon: '🔮',
    premium: false,
    lessons: [
      {
        id: 'l9a',
        title: 'Future Continuous: Actions in Progress',
        titlePt: 'Future Continuous: Acções em Progresso',
        icon: '🔄',
        xp: 20,
        learn: {
          explanation: {
            en: 'Future Continuous (will be + verb-ing) describes an action that will be in progress at a specific moment in the future. "This time tomorrow, I will be sleeping." It\'s like a snapshot of the future.',
            pt: 'O Future Continuous (will be + verbo-ing) descreve uma acção que estará em curso num momento específico do futuro. "This time tomorrow, I will be sleeping." É como uma fotografia do futuro.'
          },
          examples: [
            { en: 'This time next week, I will be flying to London.', pt: 'A esta hora na semana que vem, estarei a voar para Londres.' },
            { en: 'At 9pm, she will be watching the game.', pt: 'Às 21h, ela estará a ver o jogo.' },
            { en: 'Will you be using your car tomorrow?', pt: 'Vais estar a usar o teu carro amanhã?' }
          ],
          practice: [
            { q: 'Future Continuous formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + verb-ed', 'am/is/are + verb-ing'], ans: 1, exp: 'will + be + verb-ing.' },
            { q: '"At midnight I ___ (sleep)."', opts: ['will sleep', 'will be sleeping', 'will have slept', 'sleep'], ans: 1, exp: 'Future Continuous: will be sleeping.' }
          ]
        },
        qs: [
          { q: '"This time tomorrow, I ___ on the beach."', opts: ['will lie', 'will be lying', 'am lying', 'will have lain'], ans: 1, exp: '"will be lying" = action in progress at a specific future time.' },
          { q: 'Future Continuous = will + ___ + verb-ing', opts: ['be', 'have', 'do', 'being'], ans: 0, exp: 'Future Continuous = WILL + BE + verb-ing.' },
          { q: '"At 10am tomorrow, we ___ a meeting."', opts: ['will have', 'will be having', 'are having', 'had'], ans: 1, exp: '"will be having" = ongoing action at a specific future time.' },
          { q: 'Which is correct?', opts: ['I will be study at 8pm.', 'I will be studying at 8pm.', 'I am studying at 8pm.', 'I will studying at 8pm.'], ans: 1, exp: '"will be studying" — correct form: will + be + -ing.' }
        ]
      },
      {
        id: 'l9b',
        title: 'Future Perfect: Completed Actions',
        titlePt: 'Future Perfect: Acções Completadas',
        icon: '✅',
        xp: 20,
        learn: {
          explanation: {
            en: 'Future Perfect (will have + past participle) shows an action that will be completed before a specific point in the future. "By Friday, I will have finished the report." Think of it as looking back from a future moment.',
            pt: 'O Future Perfect (will have + particípio passado) mostra uma acção que estará concluída antes de um ponto específico no futuro. "By Friday, I will have finished the report." Imagina que olhas para trás a partir de um momento futuro.'
          },
          examples: [
            { en: 'By 2030, she will have graduated.', pt: 'Em 2030, ela já terá se formado.' },
            { en: 'I will have cooked dinner by the time you arrive.', pt: 'Eu já terei cozinhado o jantar quando chegares.' },
            { en: 'Will you have finished by 6pm?', pt: 'Já terás terminado até às 18h?' }
          ],
          practice: [
            { q: 'Future Perfect formula:', opts: ['will + base verb', 'will + be + verb-ing', 'will + have + past participle', 'have + past participle'], ans: 2, exp: 'will + have + past participle.' },
            { q: '"By next year, I ___ this course."', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: '"By" + future point = Future Perfect: will have finished.' }
          ]
        },
        qs: [
          { q: '"By 2025, I ___ graduated."', opts: ['will have', 'have', 'will', 'am going to'], ans: 0, exp: '"will have graduated" = will + have + past participle. The action will be complete by then.' },
          { q: 'Future Perfect = will + ___ + past participle', opts: ['be', 'have', 'has', 'had'], ans: 1, exp: 'Future Perfect = WILL + HAVE + past participle.' },
          { q: '"___ you have finished by 6pm?"', opts: ['Will', 'Are', 'Do', 'Have'], ans: 0, exp: '"Will you have finished?" = question using Future Perfect.' },
          { q: 'Which sentence is correct?', opts: ['By next year, I will finish my degree.', 'By next year, I will have finished my degree.', 'By next year, I have finished my degree.', 'By next year, I finished my degree.'], ans: 1, exp: '"By next year, I will have finished" = Future Perfect to show completion by a future time.' },
          { q: '"They ___ already ___ the report by Friday."', opts: ['will, finish', 'will have, finished', 'have, finished', 'will be, finishing'], ans: 1, exp: '"They will have already finished by Friday" — Future Perfect.' }
        ]
      },
      {
        id: 'l9c',
        title: 'Using "By the time" with Future Perfect',
        titlePt: 'Usando "By the time" com Future Perfect',
        icon: '⌛',
        xp: 20,
        learn: {
          explanation: {
            en: '"By the time" introduces the future point by which something will be done. It always pairs with Future Perfect in the main clause: "By the time he arrives, we will have eaten." The time clause uses Present Simple.',
            pt: '"By the time" introduz o ponto futuro pelo qual algo estará feito. Junta-se sempre ao Future Perfect na oração principal: "By the time he arrives, we will have eaten." A oração temporal usa o Presente Simples.'
          },
          examples: [
            { en: 'By the time she calls, I will have left.', pt: 'Quando ela ligar, eu já terei saído.' },
            { en: 'By the time the film ends, it will have been 3 hours.', pt: 'Quando o filme acabar, já terão passado 3 horas.' },
            { en: 'I will have eaten by the time you arrive.', pt: 'Eu já terei comido quando chegares.' }
          ],
          practice: [
            { q: 'After "by the time", use:', opts: ['will + base verb', 'Present Simple', 'Past Simple', 'Future Perfect'], ans: 1, exp: 'Time clause = Present Simple (not will).' },
            { q: '"By the time I arrive, she ___ (leave)."', opts: ['will leave', 'will have left', 'left', 'leaves'], ans: 1, exp: 'Future Perfect: will have left.' }
          ]
        },
        qs: [
          { q: '"By the time you arrive, we ___ already ___ dinner."', opts: ['will, have', 'will have, had', 'have, had', 'will be, having'], ans: 1, exp: '"By the time you arrive, we WILL HAVE ALREADY HAD dinner."' },
          { q: '"By the time he gets here, I ___ for an hour."', opts: ['will wait', 'will have waited', 'am waiting', 'waited'], ans: 1, exp: '"will have waited" — Future Perfect to show duration before a future point.' },
          { q: 'Which time expression is used with Future Perfect?', opts: ['now', 'by the time', 'currently', 'for the moment'], ans: 1, exp: '"By the time" is commonly used to introduce the future point before which the action is completed.' },
          { q: '"She ___ her homework by 8pm."', opts: ['will finish', 'will have finished', 'is finishing', 'finishes'], ans: 1, exp: '"will have finished" = she will be finished by 8pm.' },
          { q: 'What is the difference between Future Continuous and Future Perfect?', opts: ['Future Continuous is for completed actions, Future Perfect for ongoing', 'Future Continuous is for ongoing actions, Future Perfect for completed', 'Both are for ongoing actions', 'Both are for completed actions'], ans: 1, exp: 'Future Continuous = ongoing at a future time. Future Perfect = completed by a future time.' }
        ]
      },
      {
        id: 'l9d',
        title: 'Future Perfect Continuous',
        titlePt: 'Future Perfect Continuous',
        icon: '⏳',
        xp: 25,
        learn: {
          explanation: {
            en: 'Future Perfect Continuous (will have been + verb-ing) emphasises how long an action will have been going on by a future point. "By 2030, I will have been studying English for 10 years."',
            pt: 'O Future Perfect Continuous (will have been + verbo-ing) enfatiza há quanto tempo uma acção terá durado até um ponto futuro. "By 2030, I will have been studying English for 10 years."'
          },
          examples: [
            { en: 'By next June, I will have been working here for 5 years.', pt: 'No próximo Junho, já trabalharei aqui há 5 anos.' },
            { en: 'She will have been waiting for two hours by then.', pt: 'Ela já estará à espera há duas horas nessa altura.' },
            { en: 'They will have been building the house for a year.', pt: 'Eles já estarão a construir a casa há um ano.' }
          ],
          practice: [
            { q: 'Future Perfect Continuous formula:', opts: ['will + be + verb-ing', 'will + have + past participle', 'will + have + been + verb-ing', 'will + verb'], ans: 2, exp: 'will + have + been + verb-ing.' },
            { q: 'It emphasises:', opts: ['a single completed action', 'duration of an ongoing action up to a future point', 'a future plan', 'a present habit'], ans: 1, exp: 'Duration in progress up to a future point.' }
          ]
        },
        qs: [
          { q: '"By 2026, I ___ English for 10 years."', opts: ['will be learning', 'will have learned', 'will have been learning', 'am learning'], ans: 2, exp: '"will have been learning" = Future Perfect Continuous: emphasising duration up to a future point.' },
          { q: 'Future Perfect Continuous = will + have + been + ___', opts: ['-ing', 'past participle', 'infinitive', 'base form'], ans: 0, exp: 'Future Perfect Continuous = WILL + HAVE + BEEN + verb-ing.' },
          { q: '"They ___ here for 20 years by 2030."', opts: ['will live', 'will have lived', 'will have been living', 'are living'], ans: 2, exp: '"will have been living" emphasises the duration of the action.' },
          { q: 'Which sentence shows duration up to a future point?', opts: ['I will study tomorrow.', 'I will have studied for three hours by then.', 'I will be studying at 5pm.', 'I will study today.'], ans: 1, exp: '"will have studied for three hours" — Future Perfect (not Continuous) for duration before a future point.' }
        ]
      },
      {
        id: 'l9e',
        title: 'Future Time Clauses',
        titlePt: 'Orações Temporais Futuras',
        icon: '⏰',
        xp: 20,
        learn: {
          explanation: {
            en: 'After time conjunctions (when, as soon as, until, before, after), we use Present Simple — NOT "will" — even when talking about the future. The "will" goes in the other part of the sentence only.',
            pt: 'Depois de conjunções de tempo (when, as soon as, until, before, after), usamos o Presente Simples — NÃO "will" — mesmo quando falamos do futuro. O "will" vai apenas na outra parte da frase.'
          },
          examples: [
            { en: 'I will call you when I arrive. (NOT: when I will arrive)', pt: 'Vou ligar-te quando chegar. (NÃO: when I will arrive)' },
            { en: 'As soon as she wakes up, she will eat.', pt: 'Assim que ela acordar, ela vai comer.' },
            { en: 'Wait until the rain stops.', pt: 'Espera até a chuva parar.' }
          ],
          practice: [
            { q: '"I will call you when I ___ home."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Time clause = Present Simple: get (not will get).' },
            { q: '"As soon as she ___, we\'ll leave."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: 'As soon as + Present Simple.' }
          ]
        },
        qs: [
          { q: '"When I ___ home, I will call you."', opts: ['will get', 'get', 'am getting', 'got'], ans: 1, exp: 'Use Present Simple in time clauses (when, as soon as, until) after "will" in the main clause.' },
          { q: '"As soon as she ___ here, we will start."', opts: ['will arrive', 'arrives', 'arrived', 'is arriving'], ans: 1, exp: '"As soon as she arrives" — Present Simple in the time clause.' },
          { q: 'Which sentence uses the time clause correctly?', opts: ['I will wait until you will come.', 'I will wait until you come.', 'I will wait until you are coming.', 'I wait until you will come.'], ans: 1, exp: '"until you come" — Present Simple after until in a future time clause.' },
          { q: '"___ the time I finish, I will have completed 10 lessons."', opts: ['When', 'After', 'Before', 'By'], ans: 3, exp: '"BY the time I finish" — Future Perfect expresses the action completed by that future point.' },
          { q: 'What is the rule for future time clauses?', opts: ['Use will + infinitive', 'Use present tense (not will)', 'Use past tense', 'Use future continuous'], ans: 1, exp: 'In future time clauses (after when, as soon as, until, before, after, by the time), we use the present tense, not will.' }
        ]
      },
      {
        id: 'l9f',
        title: 'Predictions with Future Forms',
        titlePt: 'Previsões com Formas do Futuro',
        icon: '🔮',
        xp: 20,
        learn: {
          explanation: {
            en: 'Use "will" for opinions and strong predictions ("I think it will snow"). Use "going to" for predictions with visible evidence ("Look at those clouds — it\'s going to rain!"). "Might/could" express lower certainty.',
            pt: 'Usa "will" para opiniões e previsões fortes ("I think it will snow"). Usa "going to" para previsões com evidência visível ("Look at those clouds — it\'s going to rain!"). "Might/could" expressam menor certeza.'
          },
          examples: [
            { en: 'I think she will win the competition.', pt: 'Eu acho que ela vai ganhar a competição.' },
            { en: 'Look at the sky — it\'s going to storm!', pt: 'Olha para o céu — vai haver tempestade!' },
            { en: 'He might be late today.', pt: 'Ele pode chegar atrasado hoje.' }
          ],
          practice: [
            { q: 'Which shows the STRONGEST certainty?', opts: ['might rain', 'could rain', 'will rain', 'may rain'], ans: 2, exp: '"Will" = strongest certainty.' },
            { q: '"Look out! You ___ fall!" (visible evidence)', opts: ['will', 'are going to', 'might', 'may'], ans: 1, exp: 'Visible evidence → "going to".' }
          ]
        },
        qs: [
          { q: '"I think she ___ the exam." (opinion)', opts: ['will pass', 'is passing', 'passes', 'is going to pass'], ans: 0, exp: '"will pass" — predictions based on opinion or belief use "will".' },
          { q: '"Look at those clouds! It ___ rain." (evidence)', opts: ['will', 'is going to', 'may', 'might'], ans: 1, exp: '"is going to" — predictions based on visible evidence.' },
          { q: '"In 2050, people ___ live on Mars." (certain prediction)', opts: ['will', 'are going to', 'may', 'might'], ans: 0, exp: '"will" — strong prediction about the future.' },
          { q: '"I ___ be a millionaire one day!" (ambition)', opts: ['will', 'am going to', 'might', 'may'], ans: 0, exp: '"will" — expressing ambition or hope about the future.' },
          { q: 'Which is the most certain prediction?', opts: ['It will rain.', 'It might rain.', 'It could rain.', 'It may rain.'], ans: 0, exp: '"will" expresses the highest certainty; "might/could/may" express possibility.' }
        ]
      },
      {
        id: 'l9g',
        title: 'Review: Future Tenses',
        titlePt: 'Revisão: Tempos Futuros',
        icon: '🎯',
        xp: 25,
        learn: {
          explanation: {
            en: 'Quick recap: Will = spontaneous decisions, promises, opinions. Going to = plans and visible evidence. Future Continuous = action in progress at a future moment. Future Perfect = action completed before a future point.',
            pt: 'Revisão rápida: Will = decisões espontâneas, promessas, opiniões. Going to = planos e evidência visível. Future Continuous = acção em curso num momento futuro. Future Perfect = acção concluída antes de um ponto futuro.'
          },
          examples: [
            { en: 'This time next year, I will be living in London.', pt: 'A esta hora no próximo ano, estarei a viver em Londres.' },
            { en: 'By December, I will have passed my English exam.', pt: 'Em Dezembro, já terei passado no meu exame de inglês.' },
            { en: 'I\'m going to start a new job next Monday.', pt: 'Vou começar um novo emprego na próxima segunda-feira.' }
          ],
          practice: [
            { q: '"By next month, I ___ 30 lessons." (completed)', opts: ['will finish', 'will be finishing', 'will have finished', 'finish'], ans: 2, exp: 'Completed by future point = Future Perfect.' },
            { q: '"At 5pm tomorrow, I ___ in a meeting." (in progress)', opts: ['will have met', 'will be meeting', 'meet', 'will meet'], ans: 1, exp: 'In progress at a future moment = Future Continuous.' }
          ]
        },
        qs: [
          { q: '"This time next week, I ___ in a hotel." (ongoing)', opts: ['will stay', 'will be staying', 'will have stayed', 'am staying'], ans: 1, exp: '"will be staying" = action in progress at a specific future time.' },
          { q: '"By next month, I ___ all the lessons." (completed)', opts: ['will finish', 'will have finished', 'am finishing', 'finish'], ans: 1, exp: '"will have finished" = Future Perfect for completion by a future point.' },
          { q: '"For 5 years by 2026, she ___ as a teacher." (duration)', opts: ['will work', 'will have been working', 'will be working', 'works'], ans: 1, exp: '"will have been working" — Future Perfect Continuous to emphasise duration.' },
          { q: '"When you arrive, I ___ for you at the station."', opts: ['will wait', 'will be waiting', 'will have waited', 'am waiting'], ans: 1, exp: '"will be waiting" = I will already be waiting at the time you arrive.' },
          { q: '"By the time we get there, the film ___ started."', opts: ['will have', 'will', 'is going to', 'has'], ans: 0, exp: '"will have started" — Future Perfect: completed before a future point.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 10 — ADVANCED CONDITIONALS
  // ══════════════════════════════════════════════════════
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
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 11 — REPORTED SPEECH
  // ══════════════════════════════════════════════════════
  {
    id: 'u11',
    cefr: 'B1',
    title: 'Reported Speech',
    titlePt: 'Discurso Indireto',
    desc: 'Tell what others said without quoting directly 🗣️',
    descPt: 'Diz o que outros disseram sem citar diretamente 🗣️',
    color: '#e65100',
    icon: '🗣️',
    premium: false,
    lessons: [
      {
        id: 'l11a',
        title: 'Introduction to Reported Speech',
        titlePt: 'Introdução ao Discurso Indireto',
        icon: '📢',
        xp: 20,
        learn: {
          explanation: {
            en: 'Reported speech tells what someone said without using their exact words. The main rule: move the tense one step back into the past. \'I am happy\' becomes She said she WAS happy.',
            pt: 'O discurso indirecto diz o que alguém disse sem usar as suas palavras exactas. A regra principal: recua o tempo um passo para o passado. \'I am happy\' torna-se She said she WAS happy.'
          },
          examples: [
          { en: 'Direct: I love English. Reported: She said she loved English.', pt: 'Directo: I love English. Indirecto: Ela disse que adorava inglês.' },
          { en: 'Direct: I am tired. Reported: He said he was tired.', pt: 'Directo: I am tired. Indirecto: Ele disse que estava cansado.' },
          { en: 'Direct: I will call. Reported: She said she would call.', pt: 'Directo: I will call. Indirecto: Ela disse que ligaria.' }
          ],
          practice: [
          { q: 'In reported speech, Present Simple becomes:', opts: ['Present Simple', 'Past Simple', 'Past Perfect', 'Future'], ans: 1, exp: 'Present Simple becomes Past Simple.' },
          { q: '\'I am hungry.\' She said she ___ hungry.', opts: ['am', 'is', 'was', 'has been'], ans: 2, exp: 'am becomes was in reported speech.' }
          ]
        },
        qs: [
          { q: 'What is reported speech?', opts: ['Direct quotes', 'Telling what someone said without quoting exactly', 'Future predictions', 'Past actions'], ans: 1, exp: 'Reported speech is when you report what someone said without using their exact words.' },
          { q: '"I am happy." → She said she ___ happy.', opts: ['am', 'is', 'was', 'were'], ans: 2, exp: '"She said she WAS happy" — Present becomes Past in reported speech.' },
          { q: 'What happens to the tense in reported speech?', opts: ['Present becomes Past', 'Past becomes Present', 'No change', 'Future becomes Past'], ans: 0, exp: 'Present Simple → Past Simple, Present Continuous → Past Continuous, etc.' },
          { q: '"I study English." → He said he ___ English.', opts: ['studies', 'studied', 'study', 'is studying'], ans: 1, exp: '"He said he STUDIED English" — Present Simple → Past Simple.' },
          { q: 'Which is an example of reported speech?', opts: ['She said, "I am tired."', 'She said she was tired.', 'She said, "I tired."', 'She said she is tired.'], ans: 1, exp: '"She said she was tired" = reported speech without quotes.' }
        ]
      },
      {
        id: 'l11b',
        title: 'Tense Changes in Reported Speech',
        titlePt: 'Mudanças de Tempo no Discurso Indireto',
        icon: '🔄',
        xp: 25,
        learn: {
          explanation: {
            en: 'Each tense moves one step back: Present Simple to Past Simple. Present Continuous to Past Continuous. Present Perfect to Past Perfect. Past Simple to Past Perfect. Will to Would. Can to Could. Must to Had to.',
            pt: 'Cada tempo recua um passo: Present Simple para Past Simple. Present Continuous para Past Continuous. Present Perfect para Past Perfect. Past Simple para Past Perfect. Will para Would. Can para Could. Must para Had to.'
          },
          examples: [
          { en: '\'I am eating.\' He said he was eating.', pt: '\'I am eating.\' Ele disse que estava a comer.' },
          { en: '\'I have finished.\' She said she had finished.', pt: '\'I have finished.\' Ela disse que tinha terminado.' },
          { en: '\'I can help.\' He said he could help.', pt: '\'I can help.\' Ele disse que podia ajudar.' }
          ],
          practice: [
          { q: '\'I will come.\' She said she ___ come.', opts: ['will', 'would', 'can', 'could'], ans: 1, exp: 'Will becomes Would in reported speech.' },
          { q: '\'I have been waiting.\' He said he ___ been waiting.', opts: ['has', 'had', 'was', 'have'], ans: 1, exp: 'Present Perfect becomes Past Perfect: had been waiting.' }
          ]
        },
        qs: [
          { q: 'Present Simple → ___ in reported speech', opts: ['Present Perfect', 'Past Simple', 'Past Perfect', 'Future'], ans: 1, exp: 'Present Simple becomes Past Simple: "I eat" → "He said he ate."' },
          { q: 'Present Continuous → ___ in reported speech', opts: ['Past Continuous', 'Past Simple', 'Past Perfect Continuous', 'Present'], ans: 0, exp: 'Present Continuous → Past Continuous: "I am eating" → "He said he was eating."' },
          { q: 'Present Perfect → ___ in reported speech', opts: ['Past Perfect', 'Present Perfect', 'Past Simple', 'Past Continuous'], ans: 0, exp: 'Present Perfect → Past Perfect: "I have eaten" → "He said he had eaten."' },
          { q: '"I will call you." → He said he ___ me.', opts: ['will call', 'called', 'would call', 'has called'], ans: 2, exp: 'Future "will" → "would" in reported speech.' },
          { q: '"I have been waiting." → She said she ___ been waiting.', opts: ['has', 'had', 'have', 'was'], ans: 1, exp: 'Present Perfect Continuous → Past Perfect Continuous: "I have been waiting" → "had been waiting".' }
        ]
      },
      {
        id: 'l11c',
        title: 'Reporting Questions',
        titlePt: 'Reportando Perguntas',
        icon: '❓',
        xp: 20,
        learn: {
          explanation: {
            en: 'Reported questions use statement word order (no inversion, no question mark). Yes/No questions use \'if\' or \'whether\'. Wh- questions keep the question word: \'Where do you live?\' becomes He asked where I lived.',
            pt: 'As perguntas reportadas usam a ordem de afirmação (sem inversão, sem ponto de interrogação). Perguntas Sim/Não usam \'if\' ou \'whether\'. Perguntas Wh- mantêm a palavra interrogativa: \'Where do you live?\' torna-se He asked where I lived.'
          },
          examples: [
          { en: '\'Are you coming?\' She asked if I was coming.', pt: '\'Are you coming?\' Ela perguntou se eu estava a vir.' },
          { en: '\'Where do you live?\' He asked me where I lived.', pt: '\'Where do you live?\' Ele perguntou-me onde eu vivia.' },
          { en: '\'Did you see it?\' She asked whether I had seen it.', pt: '\'Did you see it?\' Ela perguntou se eu o tinha visto.' }
          ],
          practice: [
          { q: 'Yes/No reported questions use:', opts: ['that', 'which', 'if or whether', 'what'], ans: 2, exp: 'Use if or whether for Yes/No reported questions.' },
          { q: '\'What time is it?\' He asked me what time ___.', opts: ['is it', 'it is', 'it was', 'was it'], ans: 2, exp: 'Statement order + tense backshift: it was.' }
          ]
        },
        qs: [
          { q: '"Where do you live?" → He asked me ___', opts: ['where do I live', 'where I live', 'where I lived', 'where did I live'], ans: 2, exp: 'Reported question: "where I lived" — no question word order and tense backshift.' },
          { q: '"Are you coming?" → She asked ___', opts: ['if I am coming', 'if I was coming', 'if was I coming', 'if I came'], ans: 1, exp: 'Yes/No question becomes "if/whether" + statement word order: "if I was coming".' },
          { q: '"What time is it?" → He asked me ___', opts: ['what time is it', 'what time it was', 'what time it is', 'what time was it'], ans: 1, exp: 'Reported question: "what time it was" — subject + verb order.' },
          { q: '"Did you go?" → She asked me ___ I went.', opts: ['did', 'that', 'if', 'whether'], ans: 2, exp: '"if" is used to report yes/no questions: "She asked me IF I went."' },
          { q: 'Which is correct?', opts: ['He asked me where I am going.', 'He asked me where I was going.', 'He asked me where was I going.', 'He asked me where I go.'], ans: 1, exp: '"where I was going" — correct reported question.' }
        ]
      },
      {
        id: 'l11d',
        title: 'Reporting Commands and Requests',
        titlePt: 'Reportando Ordens e Pedidos',
        icon: '📋',
        xp: 20,
        learn: {
          explanation: {
            en: 'Commands in reported speech use TELL + object + TO + infinitive. Requests use ASK + object + TO + infinitive. Negatives use NOT TO + infinitive. No tense backshift is needed for commands and requests.',
            pt: 'Ordens no discurso indirecto usam TELL + objecto + TO + infinitivo. Pedidos usam ASK + objecto + TO + infinitivo. Negativos usam NOT TO + infinitivo. Não é necessária mudança de tempo para ordens e pedidos.'
          },
          examples: [
          { en: '\'Sit down!\' He told me to sit down.', pt: '\'Sit down!\' Ele disse-me para me sentar.' },
          { en: '\'Please help me.\' She asked me to help her.', pt: '\'Please help me.\' Ela pediu-me para a ajudar.' },
          { en: '\'Don\'t be late!\' He warned me not to be late.', pt: '\'Don\'t be late!\' Ele avisou-me para não me atrasar.' }
          ],
          practice: [
          { q: '\'Open the window!\' She told me ___ the window.', opts: ['open', 'to open', 'opening', 'opened'], ans: 1, exp: 'Tell + object + TO + infinitive.' },
          { q: '\'Don\'t touch that!\' He warned me ___ that.', opts: ['to touch', 'not to touch', 'touching', 'not touching'], ans: 1, exp: 'Negative command: not to touch.' }
          ]
        },
        qs: [
          { q: '"Sit down!" → He told me ___', opts: ['to sit down', 'sit down', 'that I sit down', 'that I sat down'], ans: 0, exp: 'Commands use "tell + object + to + infinitive": "He told me to sit down."' },
          { q: '"Please help me." → She asked me ___ her.', opts: ['to help', 'help', 'that I help', 'if I help'], ans: 0, exp: 'Requests use "ask + to + infinitive": "She asked me to help her."' },
          { q: '"Don\'t be late!" → He warned me ___', opts: ['to be late', 'not to be late', 'don\'t be late', 'that I am not late'], ans: 1, exp: 'Negative commands become "not to": "not to be late".' },
          { q: '"Could you wait?" → She asked us ___', opts: ['wait', 'to wait', 'if we wait', 'that we wait'], ans: 1, exp: '"She asked us to wait" — reporting a polite request.' },
          { q: 'Which reports a command correctly?', opts: ['He told me to close the door.', 'He told me close the door.', 'He told me that close the door.', 'He told me to closed the door.'], ans: 0, exp: '"He told me to close the door" — tell + object + to + infinitive.' }
        ]
      },
      {
        id: 'l11e',
        title: 'Reporting Verbs',
        titlePt: 'Verbos de Reporte',
        icon: '📝',
        xp: 20,
        learn: {
          explanation: {
            en: 'Use specific reporting verbs instead of always \'said\': PROMISE for commitments, APOLOGISE for sorry, ADVISE for suggestions, WARN for danger, OFFER for voluntary help, EXPLAIN for reasons. They make reported speech more precise.',
            pt: 'Usa verbos de reporte específicos em vez de sempre \'said\': PROMISE para compromissos, APOLOGISE para desculpas, ADVISE para sugestões, WARN para perigo, OFFER para ajuda voluntária, EXPLAIN para razões. Tornam o discurso indirecto mais preciso.'
          },
          examples: [
          { en: '\'I am sorry I am late.\' She apologised for being late.', pt: '\'I am sorry I am late.\' Ela pediu desculpa por ter chegado atrasada.' },
          { en: '\'I will definitely be there.\' He promised to be there.', pt: '\'I will definitely be there.\' Ele prometeu estar lá.' },
          { en: '\'You should rest.\' The doctor advised me to rest.', pt: '\'You should rest.\' O médico aconselhou-me a descansar.' }
          ],
          practice: [
          { q: '\'I can help you.\' He ___ to help me.', opts: ['said', 'promised', 'offered', 'apologised'], ans: 2, exp: 'Offered = voluntary help.' },
          { q: '\'Be careful!\' She ___ me to be careful.', opts: ['asked', 'told', 'warned', 'advised'], ans: 2, exp: 'Warned = about danger.' }
          ]
        },
        qs: [
          { q: '"I\'m sorry I\'m late." → She ___ for being late.', opts: ['apologised', 'said', 'told', 'explained'], ans: 0, exp: '"apologised" is a reporting verb that shows the meaning of the original statement.' },
          { q: '"I can help you." → He ___ to help me.', opts: ['offered', 'said', 'told', 'apologised'], ans: 0, exp: '"offered" = reporting verb for a voluntary action.' },
          { q: '"I\'ll definitely be there." → She ___ to be there.', opts: ['said', 'told', 'promised', 'explained'], ans: 2, exp: '"promised" — reporting a commitment.' },
          { q: '"The train is delayed." → The announcement ___ that the train was delayed.', opts: ['said', 'told', 'offered', 'promised'], ans: 0, exp: '"said" — neutral reporting verb for information.' },
          { q: 'Which reporting verb is used for advice?', opts: ['said', 'told', 'advised', 'asked'], ans: 2, exp: '"advised" — "He advised me to study harder."' }
        ]
      },
      {
        id: 'l11f',
        title: 'Review: Reported Speech',
        titlePt: 'Revisão: Discurso Indireto',
        icon: '🎯',
        xp: 25,
        learn: {
          explanation: {
            en: 'Review: tenses shift one step back. Yes/No questions use if or whether. Wh- questions keep the question word with statement order. Commands use tell or ask + to + infinitive. Specific verbs like warn, promise, advise add meaning.',
            pt: 'Revisão: os tempos recuam um passo. Perguntas Sim/Não usam if ou whether. Perguntas Wh- mantêm a palavra interrogativa com ordem de afirmação. Ordens usam tell ou ask + to + infinitivo. Verbos específicos como warn, promise, advise adicionam significado.'
          },
          examples: [
          { en: '\'I have finished.\' She said she had finished.', pt: '\'I have finished.\' Ela disse que tinha terminado.' },
          { en: '\'Where are you going?\' He asked where I was going.', pt: '\'Where are you going?\' Ele perguntou para onde eu ia.' },
          { en: '\'Please don\'t leave.\' She asked me not to leave.', pt: '\'Please don\'t leave.\' Ela pediu-me para não sair.' }
          ],
          practice: [
          { q: '\'I went to the shop.\' He said he ___ to the shop.', opts: ['went', 'goes', 'had gone', 'has gone'], ans: 2, exp: 'Past Simple becomes Past Perfect: had gone.' },
          { q: '\'Will you help me?\' She asked if I ___ help her.', opts: ['will', 'would', 'can', 'could'], ans: 1, exp: 'Will becomes Would in reported questions.' }
          ]
        },
        qs: [
          { q: '"I am tired." → She said she ___ tired.', opts: ['is', 'was', 'has been', 'had been'], ans: 1, exp: 'Present Simple → Past Simple: "She said she was tired."' },
          { q: '"I went to the store." → He said he ___ to the store.', opts: ['goes', 'went', 'had gone', 'was going'], ans: 2, exp: 'Past Simple → Past Perfect: "He said he had gone."' },
          { q: '"Where is the station?" → He asked me where the station ___', opts: ['is', 'was', 'has been', 'had been'], ans: 1, exp: '"where the station was" — reported question with tense backshift.' },
          { q: '"Don\'t touch that!" → She warned me ___ that.', opts: ['to touch', 'not to touch', 'don\'t touch', 'that I don\'t touch'], ans: 1, exp: '"not to touch" — negative command in reported speech.' },
          { q: '"I\'ll help you tomorrow." → He promised ___ me the next day.', opts: ['he helps', 'to help', 'he helped', 'that he help'], ans: 1, exp: '"He promised TO HELP me" — reporting a promise with infinitive.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 12 — RELATIVE CLAUSES
  // ══════════════════════════════════════════════════════
  {
    id: 'u12',
    cefr: 'B1',
    title: 'Relative Clauses',
    titlePt: 'Orações Relativas',
    desc: 'Add information to your sentences seamlessly 🔗',
    descPt: 'Adiciona informação às tuas frases de forma fluida 🔗',
    color: '#1565c0',
    icon: '🔗',
    premium: false,
    lessons: [
      {
        id: 'l12a',
        title: 'Defining Relative Clauses',
        titlePt: 'Orações Relativas Definidoras',
        icon: '🔍',
        xp: 20,
        learn: {
          explanation: {
            en: 'Defining relative clauses identify WHICH person or thing we mean. Without them, the sentence is incomplete. We use: WHO for people, WHICH for things, THAT for people or things (informal), WHERE for places.',
            pt: 'As orações relativas definidoras identificam QUAL pessoa ou coisa pretendemos dizer. Sem elas, a frase fica incompleta. Usamos: WHO para pessoas, WHICH para coisas, THAT para pessoas ou coisas (informal), WHERE para lugares.'
          },
          examples: [
            { en: 'The man who called is my uncle.', pt: 'O homem que ligou é o meu tio.' },
            { en: 'The book that I read was amazing.', pt: 'O livro que li foi incrível.' },
            { en: 'The city where I grew up is small.', pt: 'A cidade onde cresci é pequena.' }
          ],
          practice: [
            { q: 'Which pronoun is used for PEOPLE?', opts: ['which', 'where', 'who', 'whose'], ans: 2, exp: 'WHO for people.' },
            { q: '"The car ___ I bought is red."', opts: ['who', 'which', 'where', 'whose'], ans: 1, exp: 'WHICH for things.' }
          ]
        },
        qs: [
          { q: '"The man ___ lives next door is a doctor." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — relative pronoun for people in subject position.' },
          { q: '"This is the book ___ I bought yesterday." (object)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in object position.' },
          { q: '"The woman ___ car was stolen called the police."', opts: ['who', 'whom', 'which', 'whose'], ans: 3, exp: '"whose" — relative pronoun showing possession for people.' },
          { q: '"The house ___ is red belongs to my uncle."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things in subject position.' },
          { q: 'Which relative pronoun is used for people?', opts: ['which', 'who', 'that', 'both who and that'], ans: 3, exp: '"who" and "that" can both be used for people.' }
        ]
      },
      {
        id: 'l12b',
        title: 'Non-Defining Relative Clauses',
        titlePt: 'Orações Relativas Não-Definidoras',
        icon: '📝',
        xp: 20,
        learn: {
          explanation: {
            en: 'Non-defining clauses add EXTRA information — remove them and the sentence still makes complete sense. They always use commas and CANNOT use "that". Example: "My brother, WHO lives in London, is a doctor."',
            pt: 'As orações não-definidoras adicionam informação EXTRA — se as removermos, a frase ainda faz sentido completo. Usam sempre vírgulas e NÃO podem usar "that". Exemplo: "My brother, WHO lives in London, is a doctor."'
          },
          examples: [
            { en: 'My mother, who is a nurse, works nights.', pt: 'A minha mãe, que é enfermeira, trabalha de noite.' },
            { en: 'Paris, which I visited last year, is beautiful.', pt: 'Paris, que visitei no ano passado, é bonita.' },
            { en: 'The Eiffel Tower, which was built in 1889, is iconic.', pt: 'A Torre Eiffel, que foi construída em 1889, é icónica.' }
          ],
          practice: [
            { q: 'Non-defining clauses are separated by:', opts: ['full stops', 'commas', 'dashes', 'semicolons'], ans: 1, exp: 'Commas before and after the non-defining clause.' },
            { q: 'Can "that" be used in a non-defining clause?', opts: ['Yes, always', 'Yes, sometimes', 'No, never', 'Only in questions'], ans: 2, exp: 'No — non-defining clauses cannot use "that".' }
          ]
        },
        qs: [
          { q: '"My brother, ___ lives in London, is a chef." (extra info)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas, gives extra information about the subject.' },
          { q: '"Paris, ___ is the capital of France, is beautiful."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause for things.' },
          { q: '"My car, ___ is blue, is very fast."', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — non-defining clause with commas.' },
          { q: 'What punctuation is used with non-defining relative clauses?', opts: ['No punctuation', 'Commas', 'Semicolons', 'Colons'], ans: 1, exp: 'Non-defining clauses are separated by commas.' },
          { q: 'Which is a non-defining relative clause?', opts: ['The man who lives here is my uncle.', 'My uncle, who lives here, is a doctor.', 'The woman that I saw was happy.', 'The house which I bought is big.'], ans: 1, exp: '"My uncle, who lives here, is a doctor" — extra information with commas.' }
        ]
      },
      {
        id: 'l12c',
        title: 'Relative Pronouns: Who, Whom, Whose',
        titlePt: 'Pronomes Relativos: Who, Whom, Whose',
        icon: '📖',
        xp: 20,
        learn: {
          explanation: {
            en: 'WHO is subject form for people: "The man WHO called." WHOM is object form (formal): "The man WHOM I met." WHOSE shows possession: "The student WHOSE phone was stolen." WHICH is for things.',
            pt: 'WHO é a forma de sujeito para pessoas: "The man WHO called." WHOM é a forma de objecto (formal): "The man WHOM I met." WHOSE mostra posse: "The student WHOSE phone was stolen." WHICH é para coisas.'
          },
          examples: [
            { en: 'The woman who called is my aunt.', pt: 'A mulher que ligou é a minha tia.' },
            { en: 'The student whose phone was stolen was upset.', pt: 'O estudante cujo telemóvel foi roubado ficou chateado.' },
            { en: 'To whom should I address the letter?', pt: 'A quem devo dirigir a carta?' }
          ],
          practice: [
            { q: '"The man ___ car is broken is my boss." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: 'WHOSE = possession.' },
            { q: 'WHOM is used as:', opts: ['subject form', 'object form (formal)', 'possessive', 'for things'], ans: 1, exp: 'WHOM = formal object pronoun for people.' }
          ]
        },
        qs: [
          { q: '"The woman ___ you met is my sister." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 0, exp: '"who" can be used as an object pronoun, though "whom" is more formal.' },
          { q: '"To ___ should I address the letter?" (object of preposition)', opts: ['who', 'whom', 'whose', 'which'], ans: 1, exp: '"whom" — formal object pronoun used after prepositions.' },
          { q: '"The student ___ phone was stolen reported it." (possession)', opts: ['who', 'whom', 'whose', 'which'], ans: 2, exp: '"whose" — relative pronoun showing possession.' },
          { q: '"The company ___ you work for is expanding." (object)', opts: ['who', 'whom', 'whose', 'which'], ans: 3, exp: '"which" — relative pronoun for things as objects.' },
          { q: 'When do we use "whom"?', opts: ['As a subject', 'As an object (formal)', 'To show possession', 'For things'], ans: 1, exp: '"whom" is the formal object form for people.' }
        ]
      },
      {
        id: 'l12d',
        title: 'Omitting the Relative Pronoun',
        titlePt: 'Omitindo o Pronome Relativo',
        icon: '✂️',
        xp: 20,
        learn: {
          explanation: {
            en: 'We can omit (drop) the relative pronoun only when it is the OBJECT of the clause, not the subject. "The book (that) I read was great." — "that" is the object, so we can drop it. "The man WHO called" — WHO is the subject, cannot be dropped.',
            pt: 'Podemos omitir o pronome relativo apenas quando é o OBJECTO da oração, não o sujeito. "The book (that) I read was great." — "that" é o objecto, podemos omiti-lo. "The man WHO called" — WHO é o sujeito, não pode ser omitido.'
          },
          examples: [
            { en: 'The film (that) I watched was boring.', pt: 'O filme (que) vi era aborrecido.' },
            { en: 'The man who lives next door is a doctor. (cannot omit)', pt: 'O homem que vive ao lado é médico. (não se pode omitir)' },
            { en: 'This is the book (which) I told you about.', pt: 'Este é o livro (do qual) te falei.' }
          ],
          practice: [
            { q: 'When can you omit the relative pronoun?', opts: ['Always', 'Never', 'When it is the object', 'When it is the subject'], ans: 2, exp: 'Only when it is the OBJECT.' },
            { q: 'In "The girl who won", can you omit "who"?', opts: ['Yes', 'No', 'Sometimes', 'Only in writing'], ans: 1, exp: 'No — "who" is the subject here.' }
          ]
        },
        qs: [
          { q: '"The film ___ I watched was boring." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The relative pronoun can be omitted when it is the object of the clause: "The film I watched..."' },
          { q: '"The man ___ lives next door is a doctor." (subject, cannot omit)', opts: ['who', 'whom', 'which', 'that'], ans: 0, exp: 'The relative pronoun cannot be omitted when it is the subject of the clause.' },
          { q: '"This is the book ___ I told you about." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: 'The object pronoun can be omitted: "This is the book I told you about."' },
          { q: 'Which relative pronoun can be omitted?', opts: ['Subject pronoun', 'Object pronoun', 'Possessive pronoun', 'All pronouns'], ans: 1, exp: 'Only object relative pronouns can be omitted.' },
          { q: 'Which sentence has an omitted relative pronoun?', opts: ['The man who called you is here.', 'The book you gave me is great.', 'The woman whose car was stolen is upset.', 'The house which I bought is old.'], ans: 1, exp: '"The book (that) you gave me" — "that" is omitted.' }
        ]
      },
      {
        id: 'l12e',
        title: 'Reduced Relative Clauses',
        titlePt: 'Orações Relativas Reduzidas',
        icon: '📉',
        xp: 25,
        learn: {
          explanation: {
            en: 'Reduced relative clauses drop the pronoun and auxiliary verb, leaving just the verb. Active = verb-ing: "The man STANDING by the door" (= who is standing). Passive = past participle: "The house BUILT in 1990" (= which was built).',
            pt: 'As orações relativas reduzidas eliminam o pronome e o auxiliar, deixando apenas o verbo. Activa = verbo-ing: "The man STANDING by the door" (= who is standing). Passiva = particípio passado: "The house BUILT in 1990" (= which was built).'
          },
          examples: [
            { en: 'The man standing at the door is my uncle.', pt: 'O homem que está à porta é o meu tio.' },
            { en: 'The book lying on the table is mine.', pt: 'O livro que está na mesa é meu.' },
            { en: 'The house built in 1990 is beautiful.', pt: 'A casa construída em 1990 é bonita.' }
          ],
          practice: [
            { q: 'Active reduced clause uses:', opts: ['past participle', 'verb-ing', 'to + verb', 'base verb'], ans: 1, exp: 'Active reduced = verb-ing: the girl singing.' },
            { q: 'Passive reduced clause uses:', opts: ['verb-ing', 'to + verb', 'past participle', 'will + verb'], ans: 2, exp: 'Passive reduced = past participle: the house built.' }
          ]
        },
        qs: [
          { q: '"The man ___ at the door is my uncle." (reduced from "who is standing")', opts: ['standing', 'stands', 'stand', 'to stand'], ans: 0, exp: 'Reduced relative clause: "The man standing at the door..." = "who is standing".' },
          { q: '"The book ___ on the table is mine." (reduced from "which is lying")', opts: ['lying', 'lies', 'lay', 'to lie'], ans: 0, exp: '"The book lying on the table" = "which is lying".' },
          { q: '"The house ___ in 1990 is beautiful." (passive, reduced from "which was built")', opts: ['built', 'building', 'to build', 'builds'], ans: 0, exp: '"The house built in 1990" = "which was built".' },
          { q: 'How do you reduce a relative clause?', opts: ['Remove the pronoun and change the verb to -ing or PP', 'Add more words', 'Keep the pronoun', 'Change to future tense'], ans: 0, exp: 'Reduce by dropping the relative pronoun and changing the verb to -ing (active) or past participle (passive).' },
          { q: 'Which is a reduced relative clause?', opts: ['The girl who sings well.', 'The girl singing well.', 'The girl sings well.', 'The girl, singing well, left.'], ans: 1, exp: '"The girl singing well" is reduced from "who sings well".' }
        ]
      },
      {
        id: 'l12f',
        title: 'Review: Relative Clauses',
        titlePt: 'Revisão: Orações Relativas',
        icon: '🎯',
        xp: 25,
        learn: {
          explanation: {
            en: 'Defining clauses = essential, no commas, "that" OK. Non-defining = extra info, commas, no "that". WHO = people. WHICH = things. WHOSE = possession. WHERE = places. WHEN = times. Pronoun can be omitted if object.',
            pt: 'Definidoras = essenciais, sem vírgulas, "that" permitido. Não-definidoras = informação extra, vírgulas, sem "that". WHO = pessoas. WHICH = coisas. WHOSE = posse. WHERE = lugares. WHEN = momentos. Pronome pode ser omitido se for objecto.'
          },
          examples: [
            { en: "That's the school where I studied.", pt: 'Essa é a escola onde estudei.' },
            { en: 'My car, which is red, needs a service.', pt: 'O meu carro, que é vermelho, precisa de revisão.' },
            { en: 'The woman whose dog barked all night is my neighbour.', pt: 'A mulher cujo cão ladrou a noite toda é minha vizinha.' }
          ],
          practice: [
            { q: 'Commas are used in ___ relative clauses.', opts: ['defining', 'non-defining', 'both', 'neither'], ans: 1, exp: 'Non-defining clauses use commas.' },
            { q: '"The film ___ won the Oscar is brilliant."', opts: ['who', 'whose', 'which', 'where'], ans: 2, exp: 'WHICH for things.' }
          ]
        },
        qs: [
          { q: '"The woman ___ we met is famous." (object, can omit)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" as object — can be omitted in informal English.' },
          { q: '"This is the house ___ has a red door." (subject)', opts: ['who', 'whom', 'which', 'whose'], ans: 2, exp: '"which" — relative pronoun for things as subject.' },
          { q: '"My teacher, ___ is from England, speaks very clearly." (non-defining)', opts: ['who', 'whom', 'which', 'whose'], ans: 0, exp: '"who" — non-defining clause with commas for people.' },
          { q: '"The car ___ I bought is red." (object, can omit)', opts: ['which', 'that', 'who', 'whom'], ans: 0, exp: '"which" as object — can be omitted in informal speech.' },
          { q: 'Which sentence has a reduced relative clause?', opts: ['The woman who lives here is kind.', 'The woman living here is kind.', 'The woman, who lives here, is kind.', 'The woman that lives here is kind.'], ans: 1, exp: '"The woman living here" is reduced from "who lives here".' }
        ]
      },
      {
        id: 'l12g',
        title: 'Relative Clauses Practice',
        titlePt: 'Prática de Orações Relativas',
        icon: '✍️',
        xp: 25,
        learn: {
          explanation: {
            en: 'Relative adverbs add location, time, and reason nuance: WHERE for places, WHEN for times, WHY for reasons. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."',
            pt: 'Os advérbios relativos adicionam nuances de localização, tempo e razão: WHERE para lugares, WHEN para momentos, WHY para razões. "The city WHERE I was born." "The year WHEN I graduated." "The reason WHY I called."'
          },
          examples: [
            { en: 'That is the town where I grew up.', pt: 'Essa é a cidade onde cresci.' },
            { en: 'I remember the year when we met.', pt: 'Lembro-me do ano em que nos conhecemos.' },
            { en: 'Tell me the reason why you were late.', pt: 'Diz-me a razão pela qual chegaste atrasado.' }
          ],
          practice: [
            { q: '"The city ___ I was born is in the north." (place)', opts: ['when', 'which', 'where', 'whose'], ans: 2, exp: 'WHERE for places.' },
            { q: '"The reason ___ she left is unknown." (reason)', opts: ['where', 'when', 'why', 'whose'], ans: 2, exp: 'WHY for reasons.' }
          ]
        },
        qs: [
          { q: '"The restaurant ___ we ate is expensive." (object, can omit)', opts: ['where', 'which', 'who', 'whose'], ans: 1, exp: '"which" — object relative pronoun for things.' },
          { q: '"This is the city ___ I was born." (place)', opts: ['where', 'which', 'who', 'whose'], ans: 0, exp: '"where" — relative adverb for places.' },
          { q: '"The reason ___ I called is urgent." (reason)', opts: ['where', 'which', 'why', 'whose'], ans: 2, exp: '"why" — relative adverb for reasons.' },
          { q: '"That was the day ___ we met." (time)', opts: ['where', 'which', 'why', 'when'], ans: 3, exp: '"when" — relative adverb for time.' },
          { q: 'Which is correct?', opts: ['The house where I bought is big.', 'The house which I bought is big.', 'The house who I bought is big.', 'The house when I bought is big.'], ans: 1, exp: '"which" is the correct relative pronoun for things.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 13 — GERUNDS & INFINITIVES
  // ══════════════════════════════════════════════════════
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

// ─── GRAMMAR DATA ────────────────────────────────────────
const GRAM = [
  {id:'g1',cat:'Tenses',cc:'#2979ff',icon:'🔵',title:'Simple Present',sub:'Habits, facts & routines',
   formula:'Subject + V(s/es)',
   uses:['Habits: "She reads every day."','General truths: "Water boils at 100°C."','Fixed schedules: "The bus leaves at 8am."'],
   examples:[{en:'She works at a hospital.',pt:'Ela trabalha num hospital.'},{en:'Do you speak English?',pt:'Falas inglês?'},{en:'The Earth revolves around the Sun.',pt:'A Terra gira em torno do Sol.'}],
   signals:['always','usually','often','sometimes','rarely','never','every day','on Mondays'],
   tip:'💡 Add -s/-es for He/She/It: go→goes, watch→watches, study→studies',
   mistakes:[{w:'She go to school every day.',r:'She goes to school every day.'},{w:'He don\'t work on Sundays.',r:'He doesn\'t work on Sundays.'}],
   quiz:[{q:'Which is correct?',opts:['She go.','She goes.','She is go.','She going.'],ans:1},{q:'"He ___ like coffee."',opts:['don\'t','doesn\'t','not','isn\'t'],ans:1}]},
  {id:'g2',cat:'Tenses',cc:'#2979ff',icon:'🟡',title:'Present Continuous',sub:'Ongoing actions right now',
   formula:'Subject + am/is/are + V-ing',
   uses:['Actions happening NOW: "She is sleeping."','Temporary situations: "I\'m living in Maputo this year."','Future arrangements: "We are meeting tomorrow."','Annoying habits: "He\'s always interrupting!"'],
   examples:[{en:'I am studying English right now.',pt:'Estou a estudar inglês agora.'},{en:'Are you listening to me?',pt:'Estás a ouvir-me?'},{en:'They are building a new school.',pt:'Eles estão a construir uma escola.'}],
   signals:['now','right now','at the moment','currently','look!','listen!','today'],
   tip:'💡 Stative verbs can\'t use -ing: know, love, want, need, like, believe',
   mistakes:[{w:'She is know the answer.',r:'She knows the answer.'},{w:'I am wanting coffee.',r:'I want coffee.'}],
   quiz:[{q:'"Look! It ___ (rain)"',opts:['rains','rained','is raining','has rained'],ans:2},{q:'Which is WRONG?',opts:['I am eating.','She is running.','They are knowing.','We are waiting.'],ans:2}]},
  {id:'g3',cat:'Tenses',cc:'#2979ff',icon:'🟢',title:'Present Perfect',sub:'Past actions with present impact',
   formula:'Subject + have/has + Past Participle',
   uses:['Life experiences: "I have visited Paris."','Recent actions: "I have just eaten."','Unfinished periods: "She has lived here for 5 years."'],
   examples:[{en:'I have never eaten sushi.',pt:'Nunca comi sushi.'},{en:'She has already left.',pt:'Ela já foi embora.'},{en:'Have you finished your homework?',pt:'Já terminaste a tua tarefa?'}],
   signals:['just','already','yet','ever','never','recently','since','for','still'],
   tip:'💡 Simple Past with specific time: "I went yesterday." Present Perfect with no time or since/for.',
   mistakes:[{w:'I have went to the store.',r:'I have gone to the store.'},{w:'She has seen him yesterday.',r:'She saw him yesterday.'}],
   quiz:[{q:'"Have you ___ seen a lion?"',opts:['ever','just','since','yet'],ans:0},{q:'"She ___ just finished."',opts:['have','has','had','did'],ans:1}]},
  {id:'g4',cat:'Tenses',cc:'#2979ff',icon:'⏮️',title:'Simple Past',sub:'Completed past actions',
   formula:'Subject + V-ed / V2 (irregular)',
   uses:['Completed actions at specific time: "I ate at 7pm."','Sequence of events: "She woke up, had breakfast, then left."'],
   examples:[{en:'She walked to school yesterday.',pt:'Ela foi à escola a pé ontem.'},{en:'Did you see the match last night?',pt:'Viste o jogo ontem à noite?'},{en:'We bought a new car last year.',pt:'Comprámos um carro novo no ano passado.'}],
   signals:['yesterday','last week/month','ago','in 2010','when','then','once'],
   tip:'💡 Irregular verbs: go→went, buy→bought, eat→ate, see→saw, come→came',
   mistakes:[{w:'She goed to the shop.',r:'She went to the shop.'},{w:'Did you went there?',r:'Did you go there?'}],
   quiz:[{q:'"She ___ a letter." (write, past)',opts:['writed','wrote','has written','writing'],ans:1},{q:'"___ you see the game?"',opts:['Did','Do','Have','Were'],ans:0}]},
  {id:'g5',cat:'Modal Verbs',cc:'#d500f9',icon:'⚡',title:'Modal Verbs',sub:'can, should, must, might...',
   formula:'Subject + modal + base verb',
   uses:['CAN: ability — "I can swim."','SHOULD: advice — "You should sleep more."','MUST: obligation — "You must wear a seatbelt."','MIGHT/MAY: possibility — "It might rain."','WOULD: polite/conditional — "I would like a coffee."'],
   examples:[{en:'You should study more.',pt:'Deves estudar mais.'},{en:'She can speak three languages.',pt:'Ela consegue falar três línguas.'},{en:'It might snow tonight.',pt:'Pode nevar esta noite.'}],
   signals:['can','could','should','must','might','may','will','would','shall','ought to'],
   tip:'💡 Modals NEVER take -s for He/She/It: "She can swim" ✓ NOT "She cans swim" ✗',
   mistakes:[{w:'She cans speak French.',r:'She can speak French.'},{w:'You should to study.',r:'You should study.'}],
   quiz:[{q:'"You ___ see a doctor. You look terrible."',opts:['must to','should','can','might to'],ans:1},{q:'"She ___ swim when she was 5."',opts:['can','could','should','must'],ans:1}]},
  {id:'g6',cat:'Conditionals',cc:'#ff4081',icon:'🔀',title:'Conditionals',sub:'If this, then that',
   formula:'If + condition, result',
   uses:['Zero (always true): If + Present, Present','1st (real): If + Present, Will + base','2nd (unreal): If + Past, Would + base','3rd (past unreal): If + Past Perfect, Would have + PP'],
   examples:[{en:'If you heat ice, it melts.',pt:'Se aqueceres gelo, ele derrete.'},{en:'If I have time, I will call you.',pt:'Se tiver tempo, ligo-te.'},{en:'If I were rich, I would travel.',pt:'Se fosse rico, viajaria.'}],
   signals:['if','unless','provided that','as long as','in case'],
   tip:'💡 In 2nd Conditional, use "were" for all subjects: "If I WERE you..." (not "was").',
   mistakes:[{w:'If I will go, I will tell you.',r:'If I go, I will tell you.'},{w:'If I was you, I would leave.',r:'If I were you, I would leave.'}],
   quiz:[{q:'"If it rains, she ___ stay home."',opts:['would','will','stay','stayed'],ans:1},{q:'"If I were rich, I ___ travel."',opts:['will','would','am','should'],ans:1}]},
  {id:'g7',cat:'Articles',cc:'#1de9b6',icon:'📄',title:'Articles: A / An / The',sub:'The most confusing 3 words in English',
   formula:'A + consonant sound | An + vowel sound | The = specific',
   uses:['A/AN: first mention, not specific — "I saw a cat."','THE: specific/already mentioned — "The cat was orange."','THE: unique things — "the sun", "the moon"','ZERO article: languages, sports, meals — "She speaks English."'],
   examples:[{en:'She is a doctor.',pt:'Ela é médica.'},{en:'The doctor I like is Dr. Silva.',pt:'O médico de quem gosto é o Dr. Silva.'},{en:'He plays the piano.',pt:'Ele toca piano.'}],
   signals:['first mention→a/an','specific/known→the','unique→the','instruments→the'],
   tip:'💡 AN before vowel SOUNDS: "an hour" (h is silent!) / "a university" (sounds like "you"!)',
   mistakes:[{w:'She is a honest person.',r:'She is an honest person.'},{w:'I play a guitar.',r:'I play the guitar.'}],
   quiz:[{q:'Choose: "She is ___ engineer."',opts:['a','an','the','—'],ans:1},{q:'Choose: "___ Amazon is the largest river."',opts:['A','An','The','—'],ans:2}]},
  {id:'g8',cat:'Passive Voice',cc:'#ff6d00',icon:'🔄',title:'Passive Voice',sub:'The action matters, not the doer',
   formula:'Subject + be + Past Participle (+ by...)',
   uses:['When the doer is unknown: "The window was broken."','When the doer is obvious: "The thief was arrested."','In formal/academic writing.','To emphasise the result.'],
   examples:[{en:'The book was written by Couto.',pt:'O livro foi escrito pelo Couto.'},{en:'English is spoken worldwide.',pt:'O inglês é falado em todo o mundo.'},{en:'My phone was stolen!',pt:'O meu telefone foi roubado!'}],
   signals:['was/were + PP','is/are + PP','has been + PP','will be + PP'],
   tip:'💡 "By" introduces the agent (doer). Without "by" = unknown doer.',
   mistakes:[{w:'The cake was ate by him.',r:'The cake was eaten by him.'},{w:'It was writed in 2010.',r:'It was written in 2010.'}],
   quiz:[{q:'"The letter ___ yesterday." (write, passive)',opts:['wrote','was wrote','was written','is writing'],ans:2},{q:'Which is PASSIVE?',opts:['She cleaned the room.','The room was cleaned.','Cleaning the room.','She has cleaned it.'],ans:1}]},

  // ─── NEW GRAMMAR TOPICS ──────────────────────────────
  {id:'g9',cat:'Tenses',cc:'#6d4c41',icon:'⏪',title:'Past Perfect',sub:'The past of the past — an action completed before another past action',
   formula:'Subject + had + Past Participle',
   uses:['Action completed before another past action: "She had left when I arrived."','Duration before something in the past: "I had lived there for 5 years before moving."','Unreal past situations: "I wish I had studied harder."','Reported speech: "He said he had seen her."'],
   examples:[{en:'She had already finished her homework when I called.',pt:'Ela já tinha terminado a lição de casa quando liguei.'},{en:'I had never seen such a beautiful place before I went to Italy.',pt:'Nunca tinha visto um lugar tão bonito antes de ir à Itália.'},{en:'By the time we arrived, the movie had already started.',pt:'Quando chegámos, o filme já tinha começado.'},{en:'He was tired because he had been working all day.',pt:'Ele estava cansado porque tinha estado a trabalhar o dia todo.'}],
   signals:['already','just','never','ever','yet','by the time','before','after','when','once'],
   tip:'💡 Past Perfect is used to show which action happened first when two past actions are compared.',
   mistakes:[{w:'She had went to the store.',r:'She had gone to the store.'},{w:'I had saw him before.',r:'I had seen him before.'},{w:'They have left when I arrived.',r:'They had left when I arrived.'}],
   quiz:[{q:'"She ___ already eaten when I arrived."',opts:['has','had','have','was'],ans:1},{q:'"I ___ never ___ to Europe before."',opts:['have, be','had, been','has, been','had, be'],ans:1},{q:'"By the time we got there, the party ___ started."',opts:['has','had','have','was'],ans:1},{q:'"He was tired because he ___ all night."',opts:['worked','had worked','was working','has worked'],ans:1}]},

  {id:'g10',cat:'Tenses',cc:'#7c4dff',icon:'✅',title:'Future Perfect',sub:'An action that will be completed before a specific future time',
   formula:'Subject + will have + Past Participle',
   uses:['Action that will be finished before a certain future time: "I will have graduated by 2025."','To express a future deadline: "We will have finished the project by Friday."','To show how long something will have lasted: "I will have worked here for 10 years by 2026."'],
   examples:[{en:'By next year, I will have finished my degree.',pt:'Para o ano que vem, já terei terminado a minha licenciatura.'},{en:'She will have arrived by 5pm.',pt:'Ela já terá chegado até às 17h.'},{en:'They will have been married for 20 years in 2030.',pt:'Eles estarão casados há 20 anos em 2030.'}],
   signals:['by','by the time','before','by then','until','in (a future time)'],
   tip:'💡 Future Perfect focuses on completion before a specific future moment. Use "by" + a future time.',
   mistakes:[{w:'I will have finish by then.',r:'I will have finished by then.'},{w:'By 2025, I have graduated.',r:'By 2025, I will have graduated.'},{w:'She will has arrived by 6pm.',r:'She will have arrived by 6pm.'}],
   quiz:[{q:'"By 2030, I ___ for 10 years."',opts:['will work','will have worked','have worked','will be working'],ans:1},{q:'"By the time you arrive, we ___ dinner."',opts:['will have','will have had','have','had'],ans:1},{q:'"She ___ her homework by 8pm."',opts:['will finish','will have finished','finishes','finished'],ans:1},{q:'"They ___ already ___ the report by Friday."',opts:['will, finish','will have, finished','have, finished','will be, finishing'],ans:1}]},

  {id:'g11',cat:'Tenses',cc:'#e040fb',icon:'🔄',title:'Future Continuous',sub:'An action that will be in progress at a specific future time',
   formula:'Subject + will be + verb-ing',
   uses:['Action in progress at a specific future time: "This time tomorrow, I will be travelling."','Longer actions that will be interrupted by shorter ones: "I will be eating when you arrive."','Polite questions about future plans: "Will you be using the car tomorrow?"'],
   examples:[{en:'This time next week, I will be lying on the beach.',pt:'Para a semana a esta hora, estarei deitado na praia.'},{en:'She will be working when you call her.',pt:'Ela estará a trabalhar quando ligares para ela.'},{en:'Will you be attending the meeting tomorrow?',pt:'Estarás a assistir à reunião amanhã?'}],
   signals:['this time tomorrow','at 8pm','when you arrive','while'],
   tip:'💡 Future Continuous describes actions in progress at a specific future moment, not actions that are completed.',
   mistakes:[{w:'I will be study at 8pm.',r:'I will be studying at 8pm.'},{w:'She will working tomorrow.',r:'She will be working tomorrow.'},{w:'They will be arrive at 5pm.',r:'They will be arriving at 5pm.'}],
   quiz:[{q:'"This time tomorrow, I ___ on the beach."',opts:['will lie','will be lying','am lying','will have lain'],ans:1},{q:'"At 10am, we ___ a meeting."',opts:['will have','will be having','are having','had'],ans:1},{q:'"Will you ___ at the party tonight?"',opts:['dance','be dancing','danced','have danced'],ans:1},{q:'"I ___ for you when you arrive."',opts:['wait','will wait','will be waiting','will have waited'],ans:2}]},

  {id:'g12',cat:'Conditionals',cc:'#ff6f00',icon:'🔀',title:'Mixed Conditionals',sub:'Combining past conditions with present results (and vice versa)',
   formula:'Type 1: If + Past Perfect, Would + infinitive (past condition → present result)\nType 2: If + Past Simple, Would have + PP (present condition → past result)',
   uses:['Past condition, present result: "If I had studied medicine, I would be a doctor now."','Present condition, past result: "If I were a millionaire, I would have bought that house."','Showing how a past action affects the present: "If I hadn\'t learned English, I wouldn\'t have this job."'],
   examples:[{en:'If I had studied harder, I would be at university now.',pt:'Se tivesse estudado mais, estaria na universidade agora.'},{en:'If she were fluent in English, she would have gotten the job.',pt:'Se ela fosse fluente em inglês, teria conseguido o emprego.'},{en:'If I hadn\'t met you, I would be lost.',pt:'Se não te tivesse conhecido, estaria perdido.'}],
   signals:['if','had I','were I','but for'],
   tip:'💡 Mixed conditionals show the relationship between a past unreal condition and a present unreal result, or a present unreal condition and a past unreal result.',
   mistakes:[{w:'If I have studied, I would be a doctor.',r:'If I had studied, I would be a doctor.'},{w:'If I were rich, I would have bought the house.',r:'If I had been rich, I would have bought the house.'},{w:'If I had known, I would tell you.',r:'If I had known, I would have told you.'}],
   quiz:[{q:'"If I had studied, I ___ a doctor now."',opts:['would be','would have been','am','was'],ans:0},{q:'"If I were rich, I ___ that house."',opts:['would buy','would have bought','bought','had bought'],ans:1},{q:'"If I hadn\'t learned English, I ___ this job."',opts:['wouldn\'t have','wouldn\'t have had','wouldn\'t have get','won\'t have'],ans:0},{q:'"If she ___ the meeting, she wouldn\'t be so confused now."',opts:['attended','had attended','would attend','has attended'],ans:1}]},

  {id:'g13',cat:'Indirect Speech',cc:'#e65100',icon:'🗣️',title:'Reported Speech (Indirect Speech)',sub:'Reporting what someone said without quoting them directly',
   formula:'Reporting verb + (that) + subject + verb (with backshift)',
   uses:['Reporting statements: "She said (that) she was tired."','Reporting questions: "He asked if/whether I was coming."','Reporting commands: "She told me to sit down."','Reporting requests: "He asked me to help."'],
   examples:[{en:'Direct: "I am happy." → Reported: She said she was happy.',pt:'Directo: "Estou feliz." → Indirecto: Ela disse que estava feliz.'},{en:'Direct: "Where do you live?" → Reported: He asked where I lived.',pt:'Directo: "Onde vives?" → Indirecto: Ele perguntou onde eu vivia.'},{en:'Direct: "Don\'t be late." → Reported: She warned me not to be late.',pt:'Directo: "Não te atrases." → Indirecto: Ela avisou-me para não me atrasar.'}],
   signals:['said','told','asked','warned','advised','promised','explained','apologised'],
   tip:'💡 When reporting speech, tenses often "backshift" (present becomes past, past becomes past perfect, etc.) and pronouns and time expressions may change.',
   mistakes:[{w:'She said she is tired.',r:'She said she was tired.'},{w:'He asked me where I am going.',r:'He asked me where I was going.'},{w:'She told me to not go.',r:'She told me not to go.'}],
   quiz:[{q:'"I am tired." → She said she ___ tired.',opts:['is','was','has been','had been'],ans:1},{q:'"Where is the station?" → He asked where the station ___.',opts:['is','was','has been','had been'],ans:1},{q:'"Don\'t touch that!" → She warned me ___ that.',opts:['to touch','not to touch','don\'t touch','that I don\'t touch'],ans:1},{q:'"I\'ll help you." → He promised ___ me.',opts:['he helps','to help','he helped','that he help'],ans:1}]}
];

// ─── PRONUNCIATION DATA ──────────────────────────────────
const PRON_WORDS = [
  {w:'Hello',ipa:'/həˈloʊ/',m:'A common greeting'},
  {w:'Pronunciation',ipa:'/prəˌnʌnsiˈeɪʃən/',m:'The way a word is spoken'},
  {w:'Beautiful',ipa:'/ˈbjuːtɪfl/',m:'Pleasing to the senses'},
  {w:'Comfortable',ipa:'/ˈkʌmftəbl/',m:'At ease; not tight'},
  {w:'Vocabulary',ipa:'/vəˈkæbjʊleri/',m:'All the words you know'},
  {w:'Wednesday',ipa:'/ˈwenzdeɪ/',m:'The middle day of the week'},
  {w:'February',ipa:'/ˈfebrʊeri/',m:'The second month'},
  {w:'Library',ipa:'/ˈlaɪbreri/',m:'A place with books'},
  {w:'Particularly',ipa:'/pəˈtɪkjʊləli/',m:'Especially; specifically'},
  {w:'Thoroughly',ipa:'/ˈθʌrəli/',m:'Completely; in detail'},
  {w:'Entrepreneur',ipa:'/ˌɒntrəprəˈnɜː/',m:'A business founder'},
  {w:'Vegetable',ipa:'/ˈvedʒtəbl/',m:'An edible plant'},
  {w:'Athlete',ipa:'/ˈæθliːt/',m:'A sports person'},
  {w:'Clothes',ipa:'/kloʊðz/',m:'What you wear'},
  {w:'Receipt',ipa:'/rɪˈsiːt/',m:'A proof of purchase'},
  {w:'Colonel',ipa:'/ˈkɜːnl/',m:'A military officer'},
  {w:'Worcestershire',ipa:'/ˈwʊstəʃɪə/',m:'A county in England'},
  {w:'Chaos',ipa:'/ˈkeɪɒs/',m:'Complete disorder'},
  {w:'Choir',ipa:'/ˈkwaɪər/',m:'A singing group'},
  {w:'Queue',ipa:'/kjuː/',m:'A line of waiting people'},
];

const MINIMAL_PAIRS = [
  {a:'Ship',b:'Sheep',pa:'/ʃɪp/',pb:'/ʃiːp/',note:'Short /ɪ/ vs Long /iː/ — a very common mistake!'},
  {a:'Bit',b:'Beat',pa:'/bɪt/',pb:'/biːt/',note:'Short /ɪ/ vs Long /iː/ — listen carefully'},
  {a:'Full',b:'Fool',pa:'/fʊl/',pb:'/fuːl/',note:'Short /ʊ/ vs Long /uː/'},
  {a:'Live',b:'Leave',pa:'/lɪv/',pb:'/liːv/',note:'Short /ɪ/ vs Long /iː/'},
  {a:'Think',b:'Sink',pa:'/θɪŋk/',pb:'/sɪŋk/',note:'The /θ/ vs /s/ — tongue between teeth!'},
  {a:'This',b:'Dis',pa:'/ðɪs/',pb:'/dɪs/',note:'The /ð/ (voiced) — tongue tip between teeth'},
  {a:'Wine',b:'Vine',pa:'/waɪn/',pb:'/vaɪn/',note:'/w/ vs /v/ — lips position matters!'},
  {a:'West',b:'Best',pa:'/west/',pb:'/best/',note:'/w/ vs /b/ — round lips for /w/'},
];

const TONGUE_TWISTERS = [
  {text:'She sells seashells by the seashore.',note:'Focus on /s/ vs /ʃ/ sounds'},
  {text:'Peter Piper picked a peck of pickled peppers.',note:'Perfect /p/ practise'},
  {text:'How much wood would a woodchuck chuck?',note:'Master the /w/ and /ʧ/ sounds'},
  {text:'The thirty-three thieves thought that they thrilled the throne.',note:'Pure /θ/ workout — go slow!'},
  {text:'Red lorry, yellow lorry, red lorry, yellow lorry.',note:'The dreaded /r/ and /l/ combo'},
  {text:'I scream, you scream, we all scream for ice cream.',note:'Fun vowel and consonant clusters'},
];

const DIFFICULT_SOUNDS = [
  {sound:'TH /θ/',eg:'think, three, throat, bath',tip:'Tongue TIP between upper and lower teeth. Blow air gently. NO vibration!',wrong:'Many say /t/ or /s/. E.g. "sink" instead of "think"'},
  {sound:'TH /ð/',eg:'this, that, the, breathe',tip:'Same position as /θ/ BUT add voice/vibration. Feel the buzz!',wrong:'Often said as /d/. E.g. "dis" instead of "this"'},
  {sound:'W /w/',eg:'wine, water, word, work',tip:'Round your lips like kissing. Start with /u/ then open. Short!',wrong:'Many say /v/. E.g. "vine" instead of "wine"'},
  {sound:'V /v/',eg:'very, voice, live, love',tip:'Top teeth on LOWER lip. Add vibration. Not just air!',wrong:'Often confused with /b/. E.g. "berry" instead of "very"'},
  {sound:'H /h/',eg:'hello, happy, hold, have',tip:'Just breathe out. No vibration. Light and breezy! No sound at all before the vowel.',wrong:'Many drop the H. E.g. "ello" instead of "hello"'},
  {sound:'R /r/',eg:'red, right, run, drive',tip:'Tongue tip raised, not touching anything. Curl back slightly. Lips rounded.',wrong:'Do not trill like Spanish R. English R is smooth.'},
];

// ─── WORD SCRAMBLE DATA ──────────────────────────────────
const WORDS_FOR_GAME = [
  // ── BEGINNER TIER (3–5 letters) ──
  {w:'CAT',h:'A small furry animal that says meow'},
  {w:'DOG',h:'A loyal pet that says woof'},
  {w:'SUN',h:'The big star that gives us light and heat'},
  {w:'RED',h:'The colour of fire and blood'},
  {w:'BIG',h:'Something that is large in size'},
  {w:'RUN',h:'To move your legs fast'},
  {w:'EAT',h:'To put food in your mouth'},
  {w:'HOT',h:'Having a high temperature'},
  {w:'COLD',h:'Having a low temperature'},
  {w:'HAND',h:'The body part at the end of your arm'},
  {w:'FACE',h:'The front of your head, with eyes and mouth'},
  {w:'BOOK',h:'Pages with words and pictures that you read'},
  {w:'TREE',h:'A tall plant with a trunk and leaves'},
  {w:'FISH',h:'An animal that lives in water'},
  {w:'BLUE',h:'The colour of the sky and ocean'},
  {w:'RAIN',h:'Water that falls from clouds'},
  {w:'MILK',h:'A white drink that comes from cows'},
  {w:'BIRD',h:'An animal with wings and feathers that can fly'},
  {w:'JUMP',h:'To push yourself off the ground into the air'},
  {w:'SING',h:'To make music with your voice'},
  {w:'OPEN',h:'Not closed; to allow entry'},
  {w:'LOVE',h:'A deep feeling of affection'},
  {w:'FIRE',h:'Hot, bright flames from burning'},
  {w:'STAR',h:'A bright light you see in the sky at night'},
  // ── INTERMEDIATE TIER (6–8 letters) ──
  {w:'SCHOOL',h:'A place where children go to learn'},
  {w:'FAMILY',h:'Parents, children, brothers and sisters'},
  {w:'FRIEND',h:'A person you like and trust'},
  {w:'ORANGE',h:'A round fruit, also a warm colour between red and yellow'},
  {w:'FLOWER',h:'The colourful part of a plant'},
  {w:'DINNER',h:'The main meal of the day, usually in the evening'},
  {w:'WINDOW',h:'A glass opening in a wall that lets in light'},
  {w:'MARKET',h:'A place where people buy and sell things'},
  {w:'TRAVEL',h:'To go from one place to another'},
  {w:'STRONG',h:'Having great power or physical force'},
  {w:'SIMPLE',h:'Easy to understand; not complicated'},
  {w:'LISTEN',h:'To pay attention to sounds'},
  {w:'MOTHER',h:'A female parent'},
  {w:'FATHER',h:'A male parent'},
  {w:'SISTER',h:'A female sibling'},
  {w:'BROTHER',h:'A male sibling'},
  {w:'DOCTOR',h:'A person trained to treat sick people'},
  {w:'FINGER',h:'One of the five parts at the end of your hand'},
  {w:'HUNGRY',h:'Feeling a need to eat food'},
  {w:'HAPPY',h:'Feeling pleasure and joy'},
  // ── ADVANCED TIER (9+ letters) ──
  {w:'BEAUTIFUL',h:'An adjective meaning very attractive'},
  {w:'VOCABULARY',h:'All the words a person knows'},
  {w:'GRAMMAR',h:'Rules for using a language correctly'},
  {w:'PRONUNCIATION',h:'How you say a word'},
  {w:'FLUENCY',h:'Ability to speak easily and accurately'},
  {w:'PRACTICE',h:'Repeated exercise to improve skill'},
  {w:'LANGUAGE',h:'A system of communication'},
  {w:'SENTENCE',h:'A group of words expressing a complete thought'},
  {w:'ADJECTIVE',h:'A word that describes a noun'},
  {w:'PREPOSITION',h:'A word showing relationship (in, on, at)'},
  {w:'CONJUNCTION',h:'A word that joins (and, but, or)'},
  {w:'IRREGULAR',h:'Not following the normal rules'},
  {w:'CONTINUOUS',h:'Without stopping; still happening'},
  {w:'PERFECT',h:'Without errors; complete'},
  {w:'PASSIVE',h:'Receiving the action, not doing it'},
  {w:'CHALLENGE',h:'Something difficult to do'},
  {w:'ACHIEVEMENT',h:'A thing accomplished successfully'},
  {w:'CONFIDENT',h:'Feeling sure about yourself'},
  {w:'EXCELLENT',h:'Extremely good; outstanding'},
  {w:'IMPORTANT',h:'Of great significance or value'},
  {w:'COMMUNICATE',h:'To share information with others'},
  {w:'TRANSLATE',h:'To express in another language'},
  {w:'INTERPRET',h:'To explain the meaning of something'},
  {w:'EDUCATION',h:'The process of learning and teaching'},
];

// ─── AI CHAT DATA ────────────────────────────────────────
const AI_QUICK_PROMPTS = {
  en: [
    {text: "Difference between 'since' and 'for'?", icon: '⏱️'},
    {text: "How do I use 'the' correctly?", icon: '📖'},
    {text: "Explain Present Perfect simply", icon: '✅'},
    {text: "Common phrasal verbs with 'get'", icon: '💬'},
    {text: "How to pronounce 'th' sounds?", icon: '🔊'},
    {text: "Give me 5 useful English idioms", icon: '🗣️'},
    {text: "Will vs Going To — what's the difference?", icon: '🔮'},
    {text: "How to avoid common Mozambican English errors?", icon: '🇲🇿'},
  ],
  pt: [
    {text: "Diferença entre 'since' e 'for'?", icon: '⏱️'},
    {text: "Como usar 'the' correctamente?", icon: '📖'},
    {text: "Explica o Presente Perfeito de forma simples", icon: '✅'},
    {text: "Verbos frasais comuns com 'get'", icon: '💬'},
    {text: "Como pronunciar os sons 'th'?", icon: '🔊'},
    {text: "Dá-me 5 expressões inglesas úteis", icon: '🗣️'},
    {text: "Will vs Going To — qual é a diferença?", icon: '🔮'},
    {text: "Erros de inglês comuns em Moçambique?", icon: '🇲🇿'},
  ]
};

const AI_RESPONSES = {
  default: {
    en: [
      "Great question! Let me break this down for you step by step...",
      "This is a common confusion for learners! Here's how to think about it:",
      "As your English tutor, I'd say the key thing to remember is:",
      "Excellent! This is exactly the kind of thing that makes the difference between good and fluent English:",
    ],
    pt: [
      "Boa pergunta! Vou explicar passo a passo...",
      "Esta é uma confusão comum para estudantes! Aqui está como pensar nisso:",
      "Como teu tutor de inglês, diria que a coisa principal a lembrar é:",
      "Excelente! Isto é exactamente o tipo de coisa que faz a diferença entre o bom e o inglês fluente:",
    ]
  },
  since_for: {
    en: `**Since vs For** ⏱️\n\n📌 **FOR** = duration (how long)\n→ "I have studied English **for** 2 years."\n→ "She has been waiting **for** an hour."\n\n📌 **SINCE** = starting point (from when)\n→ "I have studied English **since** 2022."\n→ "She has been waiting **since** 3pm."\n\n💡 **Trick**: Replace with "during X time" (FOR) vs "from that point" (SINCE).\n\nFOR = a span ↔ SINCE = a point in time 🎯`,
    pt: `**Since vs For** ⏱️\n\n📌 **FOR** = duração (quanto tempo)\n→ "Estudo inglês **for** 2 anos."\n→ "Ela está à espera **for** uma hora."\n\n📌 **SINCE** = ponto de partida (desde quando)\n→ "Estudo inglês **since** 2022."\n→ "Ela está à espera **since** às 15h."\n\n💡 **Truque**: Substitui por "durante X tempo" (FOR) vs "desde aquele ponto" (SINCE).\n\nFOR = período ↔ SINCE = ponto no tempo 🎯`
  },
};

// ─── ABOUT ME DATA ───────────────────────────────────────
const ABOUT_DATA = {
  name: 'Sebastiao Zefanias Nhamuneque Junior',
  nickname: 'Sebastian',
  role: {en: 'English Teacher · Translator · Interpreter', pt: 'Professor de Inglês · Tradutor · Intérprete'},
  location: 'Maputo / Matola, Mozambique 🇲🇿',
  email: 'nhamoneques@gmail.com',
  phone: '+258 845 713 020',
  whatsapp: '+258845713020',
  education: [
    {
      en: {degree: 'Bachelor\'s in Translation & Interpretation', school: 'Universidade Eduardo Mondlane', year: '2022–Present', note: 'Final Year Student'},
      pt: {degree: 'Licenciatura em Tradução e Interpretação', school: 'Universidade Eduardo Mondlane', year: '2022–Presente', note: 'Estudante do Último Ano'}
    }
  ],
  experience: [
    {
      en: {title: 'English Teacher', org: 'CLCI — Consultoria Linguística e Coaching Isac', period: '2020–2024', desc: 'Taught English levels 1 through 4 to diverse groups of adult learners. Developed custom lesson plans and assessment tools.'},
      pt: {title: 'Professor de Inglês', org: 'CLCI — Consultoria Linguística e Coaching Isac', period: '2020–2024', desc: 'Leccionou inglês dos níveis 1 ao 4 a grupos diversificados. Desenvolveu planos de aula e ferramentas de avaliação personalizadas.'}
    },
    {
      en: {title: 'Translator EN↔PT', org: 'Freelance', period: '2022–Present', desc: 'Technical and academic translation services. Specialisation in education, linguistics, and development sector documents.'},
      pt: {title: 'Tradutor EN↔PT', org: 'Freelancer', period: '2022–Presente', desc: 'Serviços de tradução técnica e académica. Especialização em educação, linguística e documentos do sector do desenvolvimento.'}
    }
  ],
  skills: [
    {icon:'🎓', en:'English Teaching', pt:'Ensino de Inglês'},
    {icon:'📝', en:'Translation (EN↔PT)', pt:'Tradução (EN↔PT)'},
    {icon:'🎙️', en:'Consecutive Interpretation', pt:'Interpretação Consecutiva'},
    {icon:'🌍', en:'Localisation', pt:'Localização'},
    {icon:'📱', en:'Educational Technology', pt:'Tecnologia Educacional'},
    {icon:'💻', en:'Basic IT Skills', pt:'Informática Básica'},
    {icon:'🗣️', en:'Content Creation', pt:'Criação de Conteúdo'},
    {icon:'📊', en:'Language Assessment', pt:'Avaliação Linguística'},
  ],
  stats: [
    {n: 4, en: 'Years Teaching', pt: 'Anos de Ensino', icon: '🎓'},
    {n: 200, en: 'Students Taught', pt: 'Estudantes', icon: '👥'},
    {n: 3, en: 'Languages', pt: 'Línguas', icon: '🌍'},
    {n: 50, en: 'Lessons Created', pt: 'Lições Criadas', icon: '📚'},
  ],
  socials: {
    facebook: '#', instagram: 'https://instagram.com', tiktok: '#',
    linkedin: '#', youtube: '#', github: '#'
  }
};

// ─── SEARCH INDEX ────────────────────────────────────────
const buildSearchIndex = () => {
  const idx = [];
  UNITS.forEach(unit => {
    unit.lessons.forEach(l => {
      idx.push({
        title: l.title, sub: `${unit.title} · +${l.xp} XP`,
        icon: l.icon, tag: 'Lesson', tagColor: unit.color,
        action: () => window.startLesson && window.startLesson(unit.id, l.id)
      });
    });
  });
  GRAM.forEach(g => {
    idx.push({
      title: g.title, sub: g.sub,
      icon: g.icon, tag: g.cat, tagColor: g.cc,
      action: () => {
        if (window.goTabFn) window.goTabFn('grammar');
        setTimeout(() => { const el = document.getElementById('gc-'+g.id); if(el) el.scrollIntoView({behavior:'smooth'}); }, 300);
      }
    });
  });
  PRON_WORDS.forEach(p => {
    idx.push({
      title: p.w, sub: `${p.ipa} · ${p.m}`,
      icon: '🔊', tag: 'Sound', tagColor: '#1de9b6',
      action: () => { if (window.goTabFn) window.goTabFn('sounds'); }
    });
  });
  return idx;
};

window.buildSearchIndex = buildSearchIndex;
