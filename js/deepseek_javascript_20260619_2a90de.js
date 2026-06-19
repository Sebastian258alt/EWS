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
    id:'u0', title:'Beginner Zero', titlePt:'Nível Zero',
    desc:'Start here if you know ZERO English 🌱',
    descPt:'Começa aqui se não sabes nada de inglês 🌱',
    color:'#00bfa5', icon:'🌱', premium:false,
    lessons:[
      {id:'l0a', title:'What is English?', titlePt:'O que é o Inglês?', icon:'🌍', xp:10, qs:[
        {q:'English is a ___.',opts:['language','animal','colour','food'],ans:0,exp:'"English" is a language — a way of communicating!'},
        {q:'English is spoken in how many countries?',opts:['2','10','50','over 50'],ans:3,exp:'English is spoken in over 50 countries! It is truly a global language.'},
        {q:'Which country speaks English as its official language?',opts:['Brazil','Portugal','USA','Mozambique'],ans:2,exp:'The USA (United States of America) has English as its main language.'},
        {q:'Why learn English?',opts:['To forget Portuguese','To travel, work and communicate globally','It\'s easy','To watch TV only'],ans:1,exp:'English opens doors: travel, jobs, university, internet and more!'},
        {q:'The English alphabet has ___ letters.',opts:['20','24','26','30'],ans:2,exp:'The English alphabet has 26 letters: A to Z!'},
      ]},
      {id:'l0b', title:'The Alphabet A-Z', titlePt:'O Alfabeto A-Z', icon:'🔤', xp:15, qs:[
        {q:'Which comes FIRST in the alphabet?',opts:['B','A','C','D'],ans:1,exp:'A is the first letter: A, B, C, D, E, F, G...'},
        {q:'How many vowels does English have?',opts:['3','5','7','10'],ans:1,exp:'English has 5 vowels: A, E, I, O, U'},
        {q:'Which letter is a VOWEL?',opts:['B','C','E','T'],ans:2,exp:'E is a vowel. Vowels are: A, E, I, O, U'},
        {q:'What comes after M in the alphabet?',opts:['L','K','N','P'],ans:2,exp:'...K, L, M, N, O, P... N comes after M!'},
        {q:'Which word starts with the letter "H"?',opts:['Apple','Elephant','Hello','Dog'],ans:2,exp:'"Hello" starts with H. Hello! 👋'},
      ]},
      {id:'l0c', title:'Greetings & Goodbyes', titlePt:'Saudações e Despedidas', icon:'👋', xp:15, qs:[
        {q:'How do you say "Olá" in English?',opts:['Goodbye','Thank you','Hello','Please'],ans:2,exp:'"Hello" = Olá. You can also say "Hi!" (informal)'},
        {q:'"Good morning" is used:',opts:['At night','In the morning','At lunchtime','Any time'],ans:1,exp:'"Good morning" = Bom dia. Used in the morning!'},
        {q:'How do you say "Até logo" in English?',opts:['Hello','How are you?','Goodbye','Please'],ans:2,exp:'"Goodbye" = Até logo / Adeus. Also "Bye!" (informal)'},
        {q:'"How are you?" is a ___.',opts:['command','greeting','number','colour'],ans:1,exp:'"How are you?" = Como estás? It\'s a greeting!'},
        {q:'The correct response to "How are you?" is:',opts:['My name is Ana','I am fine, thank you','Goodbye','Yes, please'],ans:1,exp:'"I am fine, thank you" = Estou bem, obrigado/a. The perfect reply!'},
      ]},
      {id:'l0d', title:'Introducing Yourself', titlePt:'Apresentar-se', icon:'🙋', xp:20, qs:[
        {q:'"My name is ___." This sentence introduces:',opts:['your age','your name','your job','your city'],ans:1,exp:'"My name is..." = O meu nome é... Use it to introduce yourself!'},
        {q:'Complete: "I ___ from Mozambique."',opts:['is','am','are','be'],ans:1,exp:'"I am from..." Use "am" with "I". I am from Mozambique!'},
        {q:'"I am 25 years ___."',opts:['old','age','young','year'],ans:0,exp:'"I am 25 years old." = Tenho 25 anos. Always use "old"!'},
        {q:'Which sentence correctly introduces someone?',opts:['My name are Ana.','My name am Ana.','My name is Ana.','Me name is Ana.'],ans:2,exp:'"My name IS Ana." — use "is" for names!'},
        {q:'"Nice to meet you!" means:',opts:['Goodbye!','I don\'t know you.','Happy to meet you!','See you later!'],ans:2,exp:'"Nice to meet you!" = Muito prazer! Say this when meeting someone new.'},
      ]},
      {id:'l0e', title:'Numbers 1-20', titlePt:'Números 1-20', icon:'🔢', xp:15, qs:[
        {q:'What is "five" in numbers?',opts:['3','4','5','6'],ans:2,exp:'five = 5. One, two, three, four, five!'},
        {q:'How do you write 10 in words?',opts:['twelve','eight','ten','eleven'],ans:2,exp:'10 = ten. Count: one, two, three... ten!'},
        {q:'"Fifteen" is:',opts:['13','14','15','16'],ans:2,exp:'fifteen = 15. Five + Ten = Fifteen!'},
        {q:'What comes after "nineteen"?',opts:['eighteen','twenty','seventeen','thirteen'],ans:1,exp:'After nineteen (19) comes twenty (20)!'},
        {q:'Which number is "twelve"?',opts:['10','11','12','13'],ans:2,exp:'twelve = 12. A dozen = twelve!'},
      ]},
      {id:'l0f', title:'Colours', titlePt:'Cores', icon:'🎨', xp:15, qs:[
        {q:'What colour is the sky?',opts:['green','red','blue','yellow'],ans:2,exp:'The sky is BLUE! 🔵 "The sky is blue."'},
        {q:'"Red" in Portuguese is:',opts:['Azul','Verde','Vermelho','Amarelo'],ans:2,exp:'red = vermelho. "The rose is red." 🌹'},
        {q:'What colour is grass?',opts:['blue','green','orange','purple'],ans:1,exp:'Grass is GREEN! 🌿 "The grass is green."'},
        {q:'"Yellow" is the colour of:',opts:['the sea','the sun','the night','the soil'],ans:1,exp:'The sun is YELLOW! ☀️ "The sun is yellow."'},
        {q:'Which colour is NOT in the rainbow?',opts:['red','brown','blue','green'],ans:1,exp:'Brown is NOT in the rainbow. Rainbow = red, orange, yellow, green, blue, indigo, violet.'},
      ]},
      {id:'l0g', title:'Family Members', titlePt:'Membros da Família', icon:'👨‍👩‍👧‍👦', xp:20, qs:[
        {q:'"Mother" means:',opts:['irmã','mãe','avó','tia'],ans:1,exp:'mother = mãe. "My mother is kind."'},
        {q:'What is "father" in Portuguese?',opts:['irmão','tio','pai','avô'],ans:2,exp:'father = pai. "My father is strong."'},
        {q:'"Brother" and "sister" are your:',opts:['parents','grandparents','siblings','children'],ans:2,exp:'Brother and sister = siblings (irmãos). Part of your immediate family!'},
        {q:'What do you call your mother\'s mother?',opts:['aunt','sister','grandmother','cousin'],ans:2,exp:'Your mother\'s mother = grandmother (avó)!'},
        {q:'"I have two ___." (brother + sister)',opts:['parents','siblings','cousins','grandparents'],ans:1,exp:'Brother + sister = siblings. "I have two siblings."'},
      ]},
      {id:'l0h', title:'My First Conversation', titlePt:'A Minha Primeira Conversa', icon:'💬', xp:25, qs:[
        {q:'Put in order: "___ am I. Sebastian name My."',opts:['My name I am Sebastian.','My name is Sebastian.','I Sebastian name am.','Sebastian my name.'],ans:1,exp:'"My name is Sebastian." — Subject + Verb + Object!'},
        {q:'A: "Hello!" B: "___"',opts:['Goodbye!','Hello! How are you?','My name is Ana.','I am fine.'],ans:1,exp:'"Hello! How are you?" — Reply to a greeting with a greeting!'},
        {q:'A: "Where are you from?" B: "___"',opts:['I am 20 years old.','I am fine.','I am from Mozambique.','My name is Tom.'],ans:2,exp:'"I am from Mozambique." — Answer "Where from?" with "I am from..."'},
        {q:'How do you say "thank you" in English?',opts:['Please','Sorry','Thank you','Excuse me'],ans:2,exp:'"Thank you" = Obrigado/a. Always be polite!'},
        {q:'To end a conversation politely you say:',opts:['Hello!','How are you?','Nice to meet you!','Goodbye! Have a nice day!'],ans:3,exp:'"Goodbye! Have a nice day!" = Até logo! Tenha um bom dia! 👋'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 1 — PRESENT TENSES (A1-A2)
  // ══════════════════════════════════════════════════════
  {
    id:'u1', title:'Present Tenses', titlePt:'Tempos Presentes',
    desc:'Master the most-used tenses in English 🕐',
    descPt:'Domina os tempos presentes mais usados 🕐',
    color:'#2979ff', icon:'🕐', premium:false,
    lessons:[
      {id:'l1', title:'Verb To Be', titlePt:'Verbo To Be', icon:'🔵', xp:20, qs:[
        {q:'"She ___ a teacher."',opts:['am','is','are','be'],ans:1,exp:'"She IS a teacher." — He/She/It = IS'},
        {q:'"We ___ from Mozambique."',opts:['am','is','are','be'],ans:2,exp:'"We ARE from Mozambique." — We/You/They = ARE'},
        {q:'Negative of "I am happy":',opts:['I is not happy.','I am not happy.','I are not happy.','I be not happy.'],ans:1,exp:'"I am not happy." — I + am. Negative = am not / I\'m not'},
        {q:'"___ you a student?"',opts:['Am','Is','Are','Be'],ans:2,exp:'"ARE you a student?" — You = ARE'},
        {q:'"They ___ not here."',opts:['am','is','are','was'],ans:2,exp:'"They ARE not here." — They + are. Negative = are not / aren\'t'},
      ]},
      {id:'l2', title:'Subject Pronouns', titlePt:'Pronomes Pessoais', icon:'👤', xp:15, qs:[
        {q:'What pronoun replaces "Ana"?',opts:['He','She','It','They'],ans:1,exp:'"Ana" is a woman → SHE. "Ana is kind." = "She is kind."'},
        {q:'"The dog is hungry." Replace "the dog":',opts:['He','She','It','They'],ans:2,exp:'Animals and objects = IT. "The dog is hungry." = "It is hungry."'},
        {q:'"Pedro and I are friends." Replace with one pronoun:',opts:['We','They','He','You'],ans:0,exp:'"Pedro and I" = WE. "We are friends."'},
        {q:'What pronoun replaces "Mr. Silva"?',opts:['She','It','He','They'],ans:2,exp:'"Mr. Silva" is a man → HE. "Mr. Silva works here." = "He works here."'},
        {q:'"Ana and Pedro are students." Replace:',opts:['We','He','She','They'],ans:3,exp:'"Ana and Pedro" = THEY. Two or more people = THEY.'},
      ]},
      {id:'l3', title:'Simple Present', titlePt:'Presente Simples', icon:'⭕', xp:25, qs:[
        {q:'Which is correct?',opts:['She go to school.','She goes to school.','She is go.','She going.'],ans:1,exp:'"She GOES to school." — He/She/It adds -s or -es!'},
        {q:'"He ___ like coffee."',opts:['don\'t','doesn\'t','not','isn\'t'],ans:1,exp:'"He DOESN\'T like coffee." — Negative: doesn\'t + base verb.'},
        {q:'"I ___ English every day."',opts:['studies','studying','study','to study'],ans:2,exp:'"I STUDY English every day." — I/You/We/They: base form, no -s.'},
        {q:'Which word signals Simple Present?',opts:['yesterday','now','always','tomorrow'],ans:2,exp:'"Always", "usually", "often", "every day" = Simple Present signals!'},
        {q:'"___ she live in Maputo?"',opts:['Do','Does','Is','Are'],ans:1,exp:'"DOES she live in Maputo?" — Questions with He/She/It use DOES.'},
      ]},
      {id:'l4', title:'Present Continuous', titlePt:'Presente Contínuo', icon:'🔄', xp:25, qs:[
        {q:'"Look! It ___ (rain)"',opts:['rains','rained','is raining','has rained'],ans:2,exp:'"It IS RAINING." — Present Continuous = am/is/are + verb-ing.'},
        {q:'Which is WRONG?',opts:['I am eating.','She is running.','They are knowing.','We are waiting.'],ans:2,exp:'"Knowing" is wrong! Stative verbs (know, like, want) cannot use -ing.'},
        {q:'"They ___ playing football now."',opts:['is','am','are','be'],ans:2,exp:'"They ARE playing." — They + are + verb-ing.'},
        {q:'What is "write" in Present Continuous?',opts:['writing','writeing','writting','wrotes'],ans:0,exp:'"Writing" — drop the silent "e" before adding -ing: write → writing.'},
        {q:'"She is always ___ her keys." (lose)',opts:['lose','lost','losing','to lose'],ans:2,exp:'"Losing" — continuous = verb-ing. lose → losing!'},
      ]},
      {id:'l5', title:'Present Perfect', titlePt:'Presente Perfeito', icon:'✅', xp:30, qs:[
        {q:'"I ___ never been to Japan."',opts:['have','has','had','am'],ans:0,exp:'"I HAVE never been." — I/You/We/They = HAVE.'},
        {q:'Which uses Present Perfect CORRECTLY?',opts:['She has went to Paris.','She went to Paris yesterday.','She has been to Paris.','She have been to Paris.'],ans:2,exp:'"She HAS BEEN to Paris." — No specific time = Present Perfect!'},
        {q:'"They ___ already finished."',opts:['have','has','had','did'],ans:0,exp:'"They HAVE already finished." — "already" = big Present Perfect clue!'},
        {q:'Which signal word goes with Present Perfect?',opts:['yesterday','last year','in 2010','just'],ans:3,exp:'"Just", "already", "yet", "ever", "never", "since", "for" = Perfect signals!'},
        {q:'"Have you ___ sushi?" (eat)',opts:['eat','ate','eaten','eating'],ans:2,exp:'After have/has = past participle. eat → eaten. Irregular!'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 2 — PAST TENSES
  // ══════════════════════════════════════════════════════
  {
    id:'u2', title:'Past Tenses', titlePt:'Tempos Passados',
    desc:'Talk about history & completed actions 📜',
    descPt:'Fala sobre o passado e acções concluídas 📜',
    color:'#ff6d00', icon:'⏮️', premium:false,
    lessons:[
      {id:'l6', title:'Simple Past', titlePt:'Passado Simples', icon:'⏮️', xp:25, qs:[
        {q:'"She ___ a letter yesterday." (write)',opts:['writes','write','wrote','written'],ans:2,exp:'"Write" is irregular: write → WROTE.'},
        {q:'"They ___ not go to school last Monday."',opts:['did','do','does','have'],ans:0,exp:'Negative: DID + not + base verb. "They did not go."'},
        {q:'What is the past of "buy"?',opts:['buyed','boughted','bought','buyt'],ans:2,exp:'"Buy → Bought" — irregular verb!'},
        {q:'Which signals Simple Past?',opts:['just','since','already','three days ago'],ans:3,exp:'"Three days ago", "yesterday", "last week" = Simple Past signals.'},
        {q:'"___ you see the match last night?"',opts:['Did','Do','Does','Have'],ans:0,exp:'Past questions: DID + subject + base verb?'},
      ]},
      {id:'l7', title:'Past Continuous', titlePt:'Passado Contínuo', icon:'⏸️', xp:25, qs:[
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
    id:'u3', title:'Future', titlePt:'Futuro',
    desc:"Talk about what's coming! 🔮",
    descPt:'Fala sobre o que está a vir! 🔮',
    color:'#82b1ff', icon:'🚀', premium:false,
    lessons:[
      {id:'l8', title:'Future with Will', titlePt:'Futuro com Will', icon:'🔮', xp:25, qs:[
        {q:'"I think it ___ rain tomorrow."',opts:['is going to','will','rains','rained'],ans:1,exp:'"Will" for predictions based on opinion. "I think" = belief → will.'},
        {q:'"I\'m hungry." — "___ get you something to eat."',opts:['I go','I will','I going to','I am going'],ans:1,exp:'Spontaneous decision = "will". No prior plan!'},
        {q:'Negative of "She will come":',opts:['She won\'t come.','She will not comes.','She doesn\'t will come.','She will not coming.'],ans:0,exp:'"Won\'t" = will + not. She won\'t come.'},
        {q:'"Will you help me?" — The correct answer is:',opts:['Yes, I will.','Yes, I do.','Yes, I am.','Yes, I shall.'],ans:0,exp:'Will → will. "Yes, I WILL." ✓'},
        {q:'Which sentence uses "will" CORRECTLY?',opts:['They will goes.','She will is here.','We will arrive soon.','He will can help.'],ans:2,exp:'"Will + base verb". "arrive" is base form. ✓'},
      ]},
      {id:'l9', title:'Going To', titlePt:'Going To', icon:'📅', xp:25, qs:[
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
    id:'u4', title:'Vocabulary Builder', titlePt:'Construtor de Vocabulário',
    desc:'Expand your word power! 💡',
    descPt:'Expande o teu vocabulário! 💡',
    color:'#00e676', icon:'📚', premium:false,
    lessons:[
      {id:'l10', title:'Common Adjectives', titlePt:'Adjectivos Comuns', icon:'🎨', xp:20, qs:[
        {q:'Which word means "very big"?',opts:['tiny','huge','narrow','shallow'],ans:1,exp:'"Huge" = extremely large. Opposite: "tiny".'},
        {q:'"The weather is very ___. I need a jacket."',opts:['hot','warm','cold','boiling'],ans:2,exp:'If you need a jacket, it\'s "cold"!'},
        {q:'"She is a ___ girl. She always helps others."',opts:['selfish','kind','rude','lazy'],ans:1,exp:'Someone who helps others is "kind".'},
        {q:'What does "expensive" mean?',opts:['Cheap','Costing a lot','Free','Beautiful'],ans:1,exp:'"Expensive" = high price. Opposite: "cheap".'},
        {q:'"The soup tastes ___." (very good)',opts:['disgusting','delicious','bland','salty'],ans:1,exp:'"Delicious" = very tasty. 😋'},
      ]},
      {id:'l11', title:'Everyday Actions', titlePt:'Acções do Dia-a-dia', icon:'🏃', xp:20, qs:[
        {q:'What do you do with a book?',opts:['eat','read','drive','cook'],ans:1,exp:'You "read" a book. 📖'},
        {q:'"I ___ breakfast every morning."',opts:['do','make','eat','drink'],ans:2,exp:'We "eat" breakfast.'},
        {q:'Where do you sleep?',opts:['In the kitchen','In the bathroom','In the garden','In the bedroom'],ans:3,exp:'You sleep in the bedroom!'},
        {q:'"Can you ___ the door, please? It\'s hot."',opts:['close','open','lock','break'],ans:1,exp:'If it\'s hot, you want to "open" the door!'},
        {q:'Which verb goes with "TV"?',opts:['watch','see','look','hear'],ans:0,exp:'We "watch" TV. 📺'},
      ]},
      {id:'l12', title:'Food & Cooking', titlePt:'Comida e Culinária', icon:'🍳', xp:25, qs:[
        {q:'What is the main ingredient in bread?',opts:['rice','flour','sugar','salt'],ans:1,exp:'Bread is made from "flour".'},
        {q:'"I need to ___ the vegetables before cooking."',opts:['wash','read','wear','build'],ans:0,exp:'You "wash" vegetables to clean them.'},
        {q:'Which cooking method uses water?',opts:['fry','bake','boil','grill'],ans:2,exp:'"Boil" = cooking in hot water.'},
        {q:'"This steak is too ___. I ordered it well-done."',opts:['cooked','raw','sweet','salty'],ans:1,exp:'"Raw" = not cooked.'},
        {q:'What does "spicy" mean?',opts:['Sweet taste','Hot burning taste','No taste','Sour taste'],ans:1,exp:'"Spicy" = hot flavour from chili/pepper.'},
      ]},
      {id:'l13', title:'Body Parts', titlePt:'Partes do Corpo', icon:'🦴', xp:20, qs:[
        {q:'"Head" means:',opts:['mão','pé','cabeça','nariz'],ans:2,exp:'head = cabeça. "Use your head!" means think!'},
        {q:'What is "hand" in Portuguese?',opts:['pé','mão','braço','dedo'],ans:1,exp:'hand = mão. "Give me your hand."'},
        {q:'Which body part do you use to SEE?',opts:['ears','nose','eyes','mouth'],ans:2,exp:'You see with your EYES! 👀'},
        {q:'Which body part do you use to HEAR?',opts:['eyes','ears','nose','tongue'],ans:1,exp:'You hear with your EARS! 👂'},
        {q:'"My ___ hurts." (pointing to leg)',opts:['arm','head','leg','finger'],ans:2,exp:'leg = perna. "My leg hurts."'},
      ]},
      {id:'l14', title:'Animals & Nature', titlePt:'Animais e Natureza', icon:'🦁', xp:20, qs:[
        {q:'What sound does a dog make?',opts:['meow','woof','moo','roar'],ans:1,exp:'Dogs go "woof"! 🐕 Cats go "meow".'},
        {q:'"Lion" in Portuguese is:',opts:['elefante','leão','girafa','crocodilo'],ans:1,exp:'lion = leão. Lions are symbols of Africa! 🦁'},
        {q:'Where do fish live?',opts:['in trees','in water','underground','in the sky'],ans:1,exp:'Fish live in water — rivers, lakes, oceans!'},
        {q:'Which animal is the biggest?',opts:['cat','dog','elephant','bird'],ans:2,exp:'The elephant is the biggest land animal on Earth!'},
        {q:'"Tree" means:',opts:['flor','erva','árvore','pedra'],ans:2,exp:'tree = árvore. Trees give us oxygen!'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 5 — DAILY LIFE & COMMUNICATION
  // ══════════════════════════════════════════════════════
  {
    id:'u5', title:'Daily Life', titlePt:'Vida Quotidiana',
    desc:'English for everyday situations 🌍',
    descPt:'Inglês para situações do dia-a-dia 🌍',
    color:'#ffd740', icon:'🌅', premium:false,
    lessons:[
      {id:'l15', title:'Days & Months', titlePt:'Dias e Meses', icon:'📅', xp:20, qs:[
        {q:'What is the first day of the week in English?',opts:['Monday','Sunday','Saturday','Wednesday'],ans:1,exp:'In English-speaking countries, Sunday is traditionally the first day of the week.'},
        {q:'"Segunda-feira" in English is:',opts:['Sunday','Monday','Tuesday','Wednesday'],ans:1,exp:'Monday = Segunda-feira. The week starts with Monday for most people!'},
        {q:'Which month comes after March?',opts:['February','May','April','June'],ans:2,exp:'March → April → May → June. April comes after March!'},
        {q:'"December" is the ___ month of the year.',opts:['10th','11th','12th','9th'],ans:2,exp:'December is the 12th and last month of the year!'},
        {q:'"Agosto" in English is:',opts:['June','July','August','September'],ans:2,exp:'August = Agosto. Summer month in Europe!'},
      ]},
      {id:'l16', title:'Telling the Time', titlePt:'Dizer as Horas', icon:'🕐', xp:20, qs:[
        {q:'"It is 3 o\'clock." This means:',opts:['3:15','3:00','3:30','2:45'],ans:1,exp:'"O\'clock" = exact hour. 3 o\'clock = 3:00.'},
        {q:'"Quarter past five" means:',opts:['5:05','5:10','5:15','5:45'],ans:2,exp:'"Quarter past" = 15 minutes after. Quarter past five = 5:15.'},
        {q:'"Half past eight" means:',opts:['8:00','8:15','8:30','8:45'],ans:2,exp:'"Half past" = 30 minutes. Half past eight = 8:30.'},
        {q:'How do you ask for the time?',opts:['Where is the time?','What is your time?','What time is it?','How much time?'],ans:2,exp:'"What time is it?" = Que horas são? The standard question!'},
        {q:'"It\'s midnight." This means:',opts:['12:00 PM','12:00 AM','6:00 AM','6:00 PM'],ans:1,exp:'"Midnight" = 12:00 AM = meia-noite. "Midday/noon" = 12:00 PM.'},
      ]},
      {id:'l17', title:'Shopping & Money', titlePt:'Compras e Dinheiro', icon:'🛍️', xp:25, qs:[
        {q:'"How much does it cost?" This question is about:',opts:['size','colour','price','quality'],ans:2,exp:'"How much does it cost?" = Quanto custa? Asking about the price!'},
        {q:'"It\'s too ___. I can\'t afford it."',opts:['cheap','expensive','free','small'],ans:1,exp:'"Expensive" = muito caro. "I can\'t afford it" = não consigo pagar.'},
        {q:'Where do you buy medicine?',opts:['supermarket','pharmacy','bakery','school'],ans:1,exp:'You buy medicine at a pharmacy (farmácia)!'},
        {q:'"Change" in a shop means:',opts:['a new item','the money you get back','a discount','the receipt'],ans:1,exp:'"Change" = the money the cashier gives you back after paying!'},
        {q:'"Can I help you?" is said by:',opts:['the customer','the security guard','the shop assistant','the manager'],ans:2,exp:'Shop assistants say "Can I help you?" when you enter a shop.'},
      ]},
      {id:'l18', title:'Directions & Places', titlePt:'Direcções e Lugares', icon:'🗺️', xp:25, qs:[
        {q:'"Turn left" means:',opts:['go straight','turn right','turn left','go back'],ans:2,exp:'"Turn left" = vira à esquerda. Opposite: "turn right" = vira à direita.'},
        {q:'Where do you go to catch a plane?',opts:['harbour','station','airport','bus stop'],ans:2,exp:'You catch a plane at the AIRPORT (aeroporto)!'},
        {q:'"It\'s next to the bank." This means:',opts:['far from','inside','beside/near','opposite'],ans:2,exp:'"Next to" = ao lado de. Beside/near the bank!'},
        {q:'How do you ask for directions?',opts:['Where is the bank?','Who is the bank?','When is the bank?','Why is the bank?'],ans:0,exp:'"Where is the bank?" = Onde fica o banco? Use "where" for location!'},
        {q:'"The hospital is ___ the park." (in front)',opts:['next to','behind','opposite','above'],ans:2,exp:'"Opposite" = in front of, facing. The hospital faces the park.'},
      ]},
    ]
  },

  // ══════════════════════════════════════════════════════
  //  UNIT 6 — PHRASAL VERBS (Premium)
  // ══════════════════════════════════════════════════════
  {
    id:'u6', title:'Phrasal Verbs', titlePt:'Verbos Frasais',
    desc:'Sound like a native speaker 🤯',
    descPt:'Soa como um falante nativo 🤯',
    color:'#bc8cff', icon:'💬', premium:true,
    lessons:[
      {id:'l19', title:'Common Phrasal Verbs', titlePt:'Verbos Frasais Comuns', icon:'💬', xp:30, qs:[
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
    id:'u7', title:'Idioms', titlePt:'Expressões Idiomáticas',
    desc:'Speak naturally & sound cool 😎',
    descPt:'Fala naturalmente e com estilo 😎',
    color:'#ff4081', icon:'🗣️', premium:true,
    lessons:[
      {id:'l20', title:'Common Idioms', titlePt:'Expressões Comuns', icon:'🗣️', xp:35, qs:[
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