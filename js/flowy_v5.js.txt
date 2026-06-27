// ═══════════════════════════════════════════════════════════
//  🐥 FLOWY.JS — Floating mascot assistant (BILINGUAL v5.0)
//  English With Sebastian
//  v5: Always-on voice wake ("Flowy"/"Flowly"), shout detection
//      via Web Audio API amplitude, sleeping/yawn/celebrating/
//      confused/excited/love/surprised states, confetti system,
//      easter eggs (50 clicks=dance, 100 clicks=shades), wing-
//      flap micro-interactions, tickle reactions, idle look-
//      around, entrance/exit animations, no-repeat randomiser
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Language helper ──────────────────────────────────────
  function getLang() {
    if (typeof window.currentLang !== 'undefined') return window.currentLang;
    const stored = localStorage.getItem('ews4_lang') || '';
    return (stored.startsWith('pt') || stored === 'mz') ? 'pt' : 'en';
  }
  function isPT() { const l = getLang(); return l === 'pt' || l === 'mz' || l.startsWith('pt'); }

  // ── SVG mascot ───────────────────────────────────────────
  const FLOWY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" width="62" height="62" aria-hidden="true">
  <defs>
    <radialGradient id="flowy-grad" cx="42%" cy="36%" r="62%">
      <stop offset="0%" stop-color="#6ab0ff"/>
      <stop offset="100%" stop-color="#3d7eff"/>
    </radialGradient>
    <radialGradient id="flowy-glow-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3d7eff" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#3d7eff" stop-opacity="0"/>
    </radialGradient>
    <filter id="flowy-soft"><feGaussianBlur stdDeviation="0.7"/></filter>
  </defs>
  <!-- Glow -->
  <circle class="flowy-glow" cx="31" cy="33" r="26" fill="url(#flowy-glow-grad)"/>
  <!-- Body -->
  <ellipse class="flowy-body flowy-core" cx="31" cy="34" rx="19" ry="18" fill="url(#flowy-grad)"/>
  <!-- Wings -->
  <ellipse class="flowy-wing-l" cx="13" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(-30 13 37)"/>
  <ellipse class="flowy-wing-r" cx="49" cy="37" rx="6" ry="4" fill="#5a9fff" opacity="0.75" transform="rotate(30 49 37)"/>
  <!-- Belly -->
  <ellipse cx="31" cy="38" rx="10" ry="8" fill="rgba(255,255,255,0.13)"/>
  <!-- Left eye -->
  <ellipse cx="24" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-l" cx="24.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="26" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid" cx="24" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="24px 25px" style="transform:scaleY(0)"/>
  <!-- Right eye -->
  <ellipse cx="38" cy="30" rx="5.5" ry="5.5" fill="white"/>
  <circle id="flowy-pupil-r" cx="38.8" cy="30.5" r="3" fill="#1a2a4a"/>
  <circle cx="40" cy="29" r="1.1" fill="white"/>
  <ellipse class="flowy-eye-lid right" cx="38" cy="30" rx="5.5" ry="5.5"
    fill="#4a8fff" transform-origin="38px 25px" style="transform:scaleY(0)"/>
  <!-- Beak -->
  <ellipse cx="31" cy="38" rx="3.5" ry="2" fill="#ffc93d"/>
  <!-- Expressions -->
  <path id="flowy-smile"  d="M27 39.5 Q31 44 35 39.5" stroke="#1a2a4a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-frown"  d="M27 43 Q31 39 35 43"     stroke="#1a2a4a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-l" d="M20 25 Q24 22.5 27 24.5" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <path id="flowy-brow-r" d="M35 24.5 Q38 22.5 42 25" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <!-- Excited open mouth -->
  <ellipse id="flowy-mouth-o" cx="31" cy="40" rx="3" ry="2.5" fill="#1a2a4a" opacity="0"/>
  <!-- Confused brow (one up) -->
  <path id="flowy-brow-c" d="M35 23 Q38 20 42 23" stroke="#1a2a4a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0"/>
  <!-- Love heart eyes overlay -->
  <g id="flowy-hearts" opacity="0">
    <text x="20" y="34" font-size="10" fill="#ff6b9d" text-anchor="middle">♥</text>
    <text x="39" y="34" font-size="10" fill="#ff6b9d" text-anchor="middle">♥</text>
  </g>
  <!-- Sleeping zzz eyes (closed) -->
  <ellipse id="flowy-sleep-l" cx="24" cy="30" rx="5.5" ry="2.5" fill="#4a8fff" opacity="0"/>
  <ellipse id="flowy-sleep-r" cx="38" cy="30" rx="5.5" ry="2.5" fill="#4a8fff" opacity="0"/>
  <!-- Tears -->
  <ellipse class="flowy-tear" id="flowy-tear-l" cx="22" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <ellipse class="flowy-tear" id="flowy-tear-r" cx="40" cy="36" rx="1.3" ry="2" fill="#aad4ff" opacity="0"/>
  <!-- Stars (happy / excited) -->
  <g class="flowy-star" style="--sx:-8px;--sy:-8px;transform-origin:20px 20px">
    <text x="12" y="20" font-size="8" fill="#ffd700">★</text>
  </g>
  <g class="flowy-star" style="--sx:8px;--sy:-10px;transform-origin:42px 18px">
    <text x="38" y="18" font-size="6" fill="#ffd700">✦</text>
  </g>
  <g class="flowy-star" style="--sx:4px;--sy:-6px;transform-origin:50px 24px">
    <text x="46" y="24" font-size="7" fill="#ffec6e">★</text>
  </g>
  <!-- Thinking swirl -->
  <g id="flowy-think-swirl" opacity="0">
    <circle cx="38" cy="14" r="3.5" fill="none" stroke="#7eb0ff" stroke-width="1.5" opacity="0.8"/>
    <circle cx="43" cy="9"  r="2.5" fill="none" stroke="#7eb0ff" stroke-width="1.2" opacity="0.6"/>
    <circle cx="47" cy="5"  r="1.5" fill="#7eb0ff" opacity="0.4"/>
  </g>
  <!-- Antenna -->
  <line x1="31" y1="16" x2="31" y2="10" stroke="#5a9fff" stroke-width="1.5" stroke-linecap="round"/>
  <circle class="flowy-antenna-dot" cx="31" cy="8.5" r="2.2" fill="#7eb0ff"/>
  <circle cx="31" cy="8.5" r="1" fill="white" opacity="0.6"/>
  <!-- Sunglasses (easter egg, hidden by default) -->
  <g id="flowy-shades" opacity="0">
    <rect x="16" y="26" width="13" height="9" rx="4.5" fill="#1a1a2e" stroke="#ffd700" stroke-width="1.2"/>
    <rect x="33" y="26" width="13" height="9" rx="4.5" fill="#1a1a2e" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="29" y1="30.5" x2="33" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="16" y1="30.5" x2="13" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
    <line x1="46" y1="30.5" x2="49" y2="30.5" stroke="#ffd700" stroke-width="1.2"/>
  </g>
</svg>`;

  // ── Bilingual message banks ──────────────────────────────
  const MSGS = {
    en: {
      idle: [
        'Psst… need help? 👀', 'Still here! Tap me 😏',
        "Don't leave me hanging… 🥺", 'HELP. I\'m bored. 😩',
        'Learning is cool. I promise. 🤓', 'Tap me! I\'m not just decoration! 🎨',
        'Your brain called. It wants XP. 🧠', 'I believe in you! (tap me) 🤏',
        'Free lesson? Free lesson! 🎁', 'I\'ve been floating here for ages 😅',
        'Grammar won\'t learn itself 😤', 'Oi! Oi! Oiii! 👋',
        'One lesson a day keeps failure away 📚', '…you gonna tap me or what? 🐥',
        'My wings are tired. Help me. 😂', 'Say "Flowy" and I\'ll appear! 🎤',
        'Did you know? I speak Portuguese too! 🇲🇿',
        'Vocabulary doesn\'t grow on trees 🌳 (or does it?)',
        'I\'m watching you… learn! 👁️', 'Your future fluent self says hi 👋',
      ],
      wakeWord: [
        'You called? Here I am! ✨ How can I help?',
        'At your service! 🫡 What do you need?',
        'Flowy is HERE! 🎉 How can I help you?',
        'Present! 🙋 Ready to assist!',
        'You rang? 🔔 What can I do for you?',
        'Ta-da! ✨ Your AI buddy is ready!',
        'Heard you! 👂 How can I help today?',
        'Reporting for duty! 🎖️ What\'s up?',
        'I heard my name! 🐥 What\'s going on?',
        'Rising from the depths! 🌊 How can I help?',
      ],
      shout: [
        'WOAH! You really called me! 😲 Here I am!!',
        'OKAY OKAY, I\'m HERE! 🎉 No need to shout!',
        'I heard you loud and clear! 📣 At your service!',
        'Coming in hot! 🔥 What do you need??',
        'FLOWY HAS ARRIVED! 💥 Ready to help!',
      ],
      listening: [
        '🎤 Listening… say "Flowy"!', '👂 I\'m all ears!',
        '🎙️ Mic is on, go ahead!', '🔊 Speak to me!',
        '👂 Say "Flowy" anytime!',
      ],
      sleeping: [
        'zzz… 😴', 'zzzZZZ 💤', 'zzz… (dreaming of vocab) 💭',
        '💤 Napping… tap to wake!', 'shhh… learning dreams 🌙',
      ],
      yawn: [
        '😪 Yaaawn… getting sleepy…', '😴 So quiet in here…',
        '🥱 Maybe I\'ll just rest my eyes…',
      ],
      tickle: [
        'Hahaha stop! 😂', 'That tickles!! 🤣',
        'HAHAHAHA 🤣 Cut it out!', 'Stop poking me!! 😝',
        'I\'m ticklish!! 😂😂', 'Ok ok ok hahaha 🤣',
      ],
      excited: [
        'OH WOW!! 🤩 This is AMAZING!', 'I\'M SO EXCITED!! 🎊',
        'YOOOO!! 🤩 Let\'s GOOO!', 'I can\'t contain myself!! 🌟',
        'THIS IS THE BEST DAY EVER!! 🎉',
      ],
      love: [
        'You\'re the best student! 🥰', 'I love helping you learn! ♥',
        'We make such a great team! 💙', 'Teaching you is my purpose! 🫶',
        'You mean everything to me! 💕',
      ],
      surprised: [
        'WAIT WHAT?! 😲', 'NO WAY!! 😱', 'I did NOT see that coming! 🫢',
        'WHAAAT?! 😳 Impossible!', '*jaw drops* 😮',
      ],
      confused: [
        'Hmm… that\'s a tough one 🤔', 'Wait, let me think… 🧐',
        'My brain is buffering… ⏳', 'I\'m 50/50 on this 😅',
        'Uhh… interesting choice 🤔',
      ],
      celebrating: [
        'CONFETTI TIME!! 🎊🎉', 'WE DID IT!! 🏆🎉',
        'CELEBRATE GOOD TIMES!! 🎊', 'CHAMPION!! 🏅🎉',
        'LEGENDARY!! ✨🎊', 'THE CROWD GOES WILD!! 🎉🎉',
      ],
      help: [
        'NEED HELP?? TAP ME!! 🚨', 'I know the answer. Do you? 😈',
        'Stuck? I\'ve got you! 💪', 'Click me before you guess wrong 😬',
        'My brain is FULL of answers 🧠✨', 'I can whisper the answer… 🤫 (jk, tap me)',
        "Don't panic! I'm here! 🆘", 'S.O.S — Student Overwhelmed? Solved! 😎',
        'Flowy to the rescue! 🦸', 'Pro tip: when in doubt, tap Flowy 🐥',
      ],
      happy: [
        'YESSS!! 🎉 You nailed it!', 'WOW. I\'m impressed! 🌟',
        'That\'s my student!! 🥹', 'Correct!! Give me a high five ✋',
        "You're basically fluent now 😭🔥", 'BOOM. Easy. 💥',
        'I knew you could do it! 🫶', '10/10 no notes 👌',
        'The English gods are pleased 🏆', "Chef's kiss. Perfecto. 😘✨",
        'Shakespeare would be proud 📜', 'You\'re on FIRE today 🔥🔥🔥',
        'Absolutely certified! 🏅', 'Your mum would be so proud 🥰',
        'That\'s what I\'m talking about!! 🎯',
      ],
      sad: [
        "Oops… we'll get it next time 😢", 'Nooo… my heart 💔',
        'That hurt me more than you 😭', "It's fine. I'm not crying. 😭 (I am)",
        'Wrong! ...but I still love you 🥺', 'My disappointment is immeasurable 😔',
        'BRUH 😞 c\'mon!', 'Errors = learning! (I\'m telling myself that too) 😅',
        'Even Shakespeare made mistakes. Probably. 📜',
        'Deep breath. Try again. I believe in us 🫂',
        'That was… a choice 😬 Let\'s try again!',
        'English: 1, You: 0. But the match isn\'t over! 💪',
        'My therapy bill just went up 😭 Just kidding, try again!',
        "It's not wrong, it's just… uniquely incorrect 😅",
      ],
      speaking: [
        'Processing big brain thoughts… 🤔', 'Hang on, consulting my wisdom 🧠',
        "Almost there! Don't go anywhere!", 'Here\'s what I found! 📖',
        'Check this out!', 'Thinking hard for you… 💭',
        'One moment, genius at work 🧪',
      ],
      roaming: [
        'Wheeeee!! 🛸', 'Just flying around! 🐥💨',
        'Don\'t mind me, just vibing ✈️', 'Zoom zoom! 💨',
        "I'm FREE!! 🦅", 'Catch me if you can! 😜',
        'No destination, just vibes 🌈', '*makes flying noises* 🚀',
        'Going on an adventure! 🗺️', 'Weee, look at me go! 🐣',
      ],
      easter_dance: [
        '50 taps and I DANCE?! Let\'s go!! 🕺💃',
        'YOU UNLOCKED MY DANCE MOVE!! 🎵🕺',
        'I\'ve been saving this! 🎶 Watch me!!',
      ],
      easter_shades: [
        '100 taps?! I\'m putting on my shades 😎🕶️',
        'Too cool for school now 😎✌️ (thanks to you)',
        'SUNGLASSES UNLOCKED 🕶️ I\'m iconic now.',
      ],
      jokes_formal: [
        'Why do linguists never panic? They know there\'s always a clause. 📜',
        'A noun and a verb walked into a bar. The verb said: "I\'m here." The noun: "I know." 🍺',
        'What do you call a sentence with no grammar mistakes? Hypothetical. 😅',
        'Why did the comma go to therapy? Too many run-on sentences. 🛋️',
        'The past, the present and the future walked into a room. It was tense. ⏳',
        'What\'s a linguist\'s favourite TV show? "Game of Phones". 📱',
        'Why is English hard? Because "read" is present and past tense simultaneously. 🤯',
        'A split infinitive is technically incorrect. But to boldly go... is worth it. 🚀',
      ],
      jokes_informal: [
        "English be like: 'I before E except after C' — except in: weird, their, ancient, feisty... 🙃",
        'Me: I\'ll do one lesson. Also me: 3 hours later still here 😂',
        'English spelling was invented by someone who hated us all. "knight"?? KNIGHT?? 😡',
        'POV: you learned "their/there/they\'re" and still see adults mess it up 💀',
        '"I\'m fine" in English means: I\'m absolutely NOT fine 🙃',
        'Nobody: ... English: let\'s make "read" rhyme with "red" sometimes. 🤪',
        '"Colonel" is pronounced "kernel". I just want you to know I didn\'t make the rules. 😤',
        'Fun fact: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo" is a valid sentence. Don\'t ask. 🦬',
        'English: has 26 letters. Also English: needs 44 phonemes. Logic? Never heard of her. 😭',
        'Why do English speakers say "I could care less" when they mean "I couldn\'t care less"? Nobody knows. 🤷',
      ],
    },

    pt: {
      idle: [
        'Psst… precisas de ajuda? 👀', 'Ainda aqui! Toca em mim 😏',
        'Não me deixes assim… 🥺', 'SOCORRO. Estou aborrecido. 😩',
        'Aprender é fixe. Prometo. 🤓', 'Toca em mim! Não sou só decoração! 🎨',
        'O teu cérebro ligou. Quer XP. 🧠', 'Acredito em ti! (toca em mim) 🤏',
        'Lição grátis? Lição grátis! 🎁', 'Já aqui ando há séculos 😅',
        'A gramática não se aprende sozinha 😤', 'Oi! Oi! Oiii! 👋',
        'Uma lição por dia mantém o insucesso afastado 📚',
        '…vais tocar em mim ou não? 🐥', 'As minhas asas estão cansadas. Ajuda-me. 😂',
        'Diz "Flowy" e eu apareço! 🎤', 'Sabia que também falo português? 🇲🇿',
        'Vocabulário não cresce em árvores 🌳 (ou crescerá?)',
        'Estou de olho em ti… a aprender! 👁️', 'O teu eu futuro fluente manda abraços 👋',
      ],
      wakeWord: [
        'Chamaste? Aqui estou! ✨ Como posso ajudar?',
        'Às vossas ordens! 🫡 O que precisas?',
        'O Flowy está AQUI! 🎉 Como posso ajudar?',
        'Presente! 🙋 Pronto para ajudar!',
        'Tocaste a campainha? 🔔 O que posso fazer por ti?',
        'Ta-da! ✨ O teu assistente IA está pronto!',
        'Ouvi-te! 👂 Como posso ajudar hoje?',
        'Reportando para serviço! 🎖️ O que se passa?',
        'Ouvi o meu nome! 🐥 O que está a acontecer?',
        'A emergir das profundezas! 🌊 Como posso ajudar?',
      ],
      shout: [
        'WOAH! Chamaste mesmo! 😲 Aqui estou!!',
        'OK OK, ESTOU AQUI! 🎉 Não precisa de gritar!',
        'Ouvi alto e bom som! 📣 Às tuas ordens!',
        'A chegar a toda a velocidade! 🔥 O que precisas??',
        'O FLOWY CHEGOU! 💥 Pronto para ajudar!',
      ],
      listening: [
        '🎤 A ouvir… diz "Flowy"!', '👂 Sou todo ouvidos!',
        '🎙️ Microfone ligado!', '🔊 Fala comigo!',
        '👂 Diz "Flowy" a qualquer momento!',
      ],
      sleeping: [
        'zzz… 😴', 'zzzZZZ 💤', 'zzz… (a sonhar com vocabulário) 💭',
        '💤 A dormir… toca para acordar!', 'shh… sonhos de aprendizagem 🌙',
      ],
      yawn: [
        '😪 Aaaah… a ficar com sono…', '😴 Está tão silencioso aqui…',
        '🥱 Talvez descanse os olhos um bocadinho…',
      ],
      tickle: [
        'Hahaha para! 😂', 'Fazes cócegas!! 🤣',
        'HAHAHAHA 🤣 Para com isso!', 'Para de me cutucar!! 😝',
        'Sou cócegas!! 😂😂', 'Ok ok ok hahaha 🤣',
      ],
      excited: [
        'OH UAU!! 🤩 Isto é INCRÍVEL!', 'ESTOU TÃO ANIMADO!! 🎊',
        'YOOOO!! 🤩 Vamos LÁ!', 'Não me consigo conter!! 🌟',
        'ESTE É O MELHOR DIA DE SEMPRE!! 🎉',
      ],
      love: [
        'És o melhor aluno! 🥰', 'Adoro ajudar-te a aprender! ♥',
        'Somos uma equipa incrível! 💙', 'Ensinar-te é o meu propósito! 🫶',
        'Tu és tudo para mim! 💕',
      ],
      surprised: [
        'ESPERA O QUÊ?! 😲', 'NÃO É POSSÍVEL!! 😱',
        'Não estava à espera disso! 🫢', 'OQUE?! 😳 Impossível!',
        '*boca aberta* 😮',
      ],
      confused: [
        'Hmm… essa é difícil 🤔', 'Espera, deixa-me pensar… 🧐',
        'O meu cérebro está a carregar… ⏳', 'Estou 50/50 nisto 😅',
        'Uhh… escolha interessante 🤔',
      ],
      celebrating: [
        'HORA DE CONFETTIS!! 🎊🎉', 'CONSEGUIMOS!! 🏆🎉',
        'CELEBRAAAAA!! 🎊', 'CAMPEÃO!! 🏅🎉',
        'LENDÁRIO!! ✨🎊', 'A MULTIDÃO ENLOUQUECE!! 🎉🎉',
      ],
      help: [
        'PRECISAS DE AJUDA?? TOCA EM MIM!! 🚨', 'Eu sei a resposta. E tu? 😈',
        'Bloqueado? Tenho-te! 💪', 'Clica em mim antes de errares 😬',
        'O meu cérebro está CHEIO de respostas 🧠✨',
        'Posso sussurrar a resposta… 🤫 (é brincadeira, toca em mim)',
        'Não entres em pânico! Estou aqui! 🆘', 'SOS — Estudante? Solucionado! 😎',
        'Flowy ao resgate! 🦸', 'Dica de pro: na dúvida, toca no Flowy 🐥',
      ],
      happy: [
        'SIMMMM!! 🎉 Conseguiste!', 'UAU. Estou impressionado! 🌟',
        'Esse é o meu aluno!! 🥹', 'Correto!! Dá-me uma palmada ✋',
        'Já és quase fluente 😭🔥', 'BOOM. Fácil. 💥',
        'Sabia que conseguias! 🫶', '10/10 sem notas 👌',
        'Os deuses do inglês estão satisfeitos 🏆', 'Chef\'s kiss. Perfeito. 😘✨',
        'Shakespeare estaria orgulhoso 📜', 'Estás em CHAMAS hoje 🔥🔥🔥',
        'Absolutamente certificado! 🏅', 'A tua mãe estaria tão orgulhosa 🥰',
        'É isso mesmo!! 🎯',
      ],
      sad: [
        'Oops… na próxima conseguimos 😢', 'Não… o meu coração 💔',
        'Isso doeu-me mais a mim do que a ti 😭', 'Está bem. Não estou a chorar. 😭 (Estou)',
        'Errado! ...mas ainda te adoro 🥺', 'A minha desilusão é imensurável 😔',
        'MANO 😞 vá!', 'Erros = aprendizagem! (Estou a dizer isso a mim próprio também) 😅',
        'Até o Shakespeare errava. Provavelmente. 📜',
        'Respira fundo. Tenta de novo. Acredito em nós 🫂',
        'Isso foi… uma escolha 😬 Vamos tentar de novo!',
        'Inglês: 1, Tu: 0. Mas o jogo não acabou! 💪',
        'A minha conta de terapia subiu 😭 É brincadeira, tenta de novo!',
        'Não está errado, está… incorretamente único 😅',
      ],
      speaking: [
        'A processar pensamentos avançados… 🤔', 'Espera, a consultar a minha sabedoria 🧠',
        'Quase lá! Não te vás embora!', 'Aqui está o que encontrei! 📖',
        'Olha isto!', 'A pensar muito para ti… 💭', 'Um momento, génio a trabalhar 🧪',
      ],
      roaming: [
        'Wheeeee!! 🛸', 'Só a voar por aqui! 🐥💨',
        'Não ligues, só a vibrar ✈️', 'Zum zum! 💨',
        'ESTOU LIVRE!! 🦅', 'Apanha-me se conseguires! 😜',
        'Sem destino, só vibes 🌈', '*faz barulhos de voo* 🚀',
        'A ir numa aventura! 🗺️', 'Weee, olha para mim! 🐣',
      ],
      easter_dance: [
        '50 toques e eu DANÇO?! Vamos lá!! 🕺💃',
        'DESBLOQUEASTE O MEU PASSO DE DANÇA!! 🎵🕺',
        'Estava a guardar isto! 🎶 Olha para mim!!',
      ],
      easter_shades: [
        '100 toques?! Vou pôr os meus óculos 😎🕶️',
        'Demasiado fixe para a escola agora 😎✌️',
        'ÓCULOS DESBLOQUEADOS 🕶️ Sou icónico agora.',
      ],
      jokes_formal: [
        'Por que é que os linguistas nunca entram em pânico? Porque sabem que há sempre uma cláusula. 📜',
        'Um sujeito e um predicado entraram num bar. O predicado disse: "Estou aqui." O sujeito: "Eu sei." 🍺',
        'Como se chama uma frase sem erros gramaticais? Hipotética. 😅',
        'Por que é que a vírgula foi à terapia? Muitas frases sem fim. 🛋️',
        'O passado, o presente e o futuro entraram numa sala. Ficou tenso. ⏳',
        'Qual é o programa favorito de um linguista? "O Jogo dos Telemóveis". 📱',
        'Por que é difícil o inglês? Porque "read" é presente E passado ao mesmo tempo. 🤯',
        'O infinitivo dividido é tecnicamente incorreto. Mas "to boldly go"... vale a pena. 🚀',
      ],
      jokes_informal: [
        "O inglês tipo: 'I before E except after C' — exceto em: weird, their, ancient, feisty... 🙃",
        'Eu: Faço só uma lição. Eu também: 3 horas depois ainda aqui 😂',
        'A ortografia inglesa foi inventada por alguém que nos odiava. "knight"?? KNIGHT?? 😡',
        'POV: aprendeste "their/there/they\'re" e ainda vês adultos a errar 💀',
        '"I\'m fine" em inglês significa: NÃO estou bem de todo 🙃',
        'Ninguém: ... O inglês: vamos fazer "read" rimar com "red" às vezes. 🤪',
        '"Colonel" pronuncia-se "kernel". Só quero que saibas que não fui eu. 😤',
        'Facto curioso: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo" é válida. Não perguntes. 🦬',
        'Inglês: tem 26 letras. Também o inglês: precisa de 44 fonemas. Lógica? Nunca ouvi falar. 😭',
        'Por que é que os falantes dizem "I could care less"? Ninguém sabe. 🤷',
      ],
    },
  };

  // ── Tab tips (bilingual) ────────────────────────────────
  const TAB_TIPS = {
    en: {
      home: {
        entry: [
          'Welcome back! 🏠 Ready to level up today?',
          'Home sweet home! 🎉 Let\'s get some XP!',
          'You\'re here! Daily challenge is waiting 👀',
          'Hello there! Let\'s make today count 🌟',
        ],
        tips: [
          'Your streak won\'t protect itself 🔥 Do a lesson!',
          'Daily challenge = free XP 🎁 Don\'t be lazy!',
          'The leaderboard isn\'t going to top itself 🏆',
          'One lesson = happy Flowy. Zero lessons = sad Flowy 🥺',
          '50 XP a day keeps failure away 💪',
          'Click "Continue learning" — I dare you 😏',
          'Your XP bar is looking… hungry 🍽️',
          'Did you do today\'s challenge? NO?! 😤 GO!',
          'Streaks are like plants 🌱 water them daily!',
          'That "level up" feeling won\'t come alone 🚀',
          'Why not try a grammar lesson today? 📖',
          'The AI tutor is literally free. USE IT. 🤖',
        ],
      },
      grammar: {
        entry: [
          'Grammar time! 📖 My favourite! (not really 😅)',
          'Ooh grammar lab! Try not to cry 😬',
          'Grammar! The fun never ends… 📝 (it does, I promise)',
        ],
        tips: [
          '"I am" not "I is". Write that down. ✍️',
          'Past simple vs Present perfect? Ask me! 🤯',
          'Articles (a/an/the) — the eternal struggle 😩',
          'Pro tip: read your sentence out loud 🗣️',
          'If it sounds weird, it probably IS weird 👂',
          'Confused? Tap me! I explain things nicely 😇',
          '"Their", "there", "they\'re" — three different words! 😤',
          'Third-person "s": she walk❌ she walks✅ 🎯',
          'Conditionals are scary but I believe in you 💪',
          'You\'re doing grammar. That\'s already impressive 👏',
        ],
      },
      sounds: {
        entry: [
          'Sound Lab! 🔊 Your ears are about to get educated!',
          'Pronunciation time! Don\'t be scared 😬🎤',
          'Ooh sounds! This is where the REAL magic happens 🎙️',
        ],
        tips: [
          'The "TH" sound: tongue between teeth, not behind! 👅',
          '"Ship" vs "Sheep" — your teacher can hear the difference 😂',
          'Slow practice first, speed comes later 🐌→🐇',
          'Record yourself! It\'s awkward but it works 🎤',
          'The schwa (ə) is in EVERY English word. Sneaky! 🕵️',
          '"Comfortable" = COM-fter-bull. Yes really. 🤯',
          'Stress the RIGHT syllable or people look confused 😅',
          '"W" is NOT a "V"! "Wine" ≠ "Vine" 🍷',
        ],
      },
      ai: {
        entry: [
          'AI Tutor! 🤖 Ask me ANYTHING — no judgement!',
          'Oh hello! 👋 Ready to answer your questions!',
          'AI mode activated! 🚀 What\'s confusing you today?',
        ],
        tips: [
          'Ask me to explain any grammar rule! 📚',
          'Paste a sentence and ask me to fix it! ✏️',
          'I can quiz you! Just say "Quiz me on past tense" 🎯',
          'Try: "Translate this to formal English" 🎩',
          'Ask me to write an example sentence! 💡',
          'I can help with pronunciation too! 🎤',
          'Ask me anything in Portuguese, I\'ll answer! 🇲🇿',
          'I\'m smarter than autocorrect. Promise. 🧠',
        ],
      },
      profile: {
        entry: [
          'Profile time! 😎 Let\'s check those stats!',
          'Checking yourself out? I respect it 🪞',
          'Your stats are here! Brace yourself 📊',
        ],
        tips: [
          'Those XP points represent real effort! Be proud 💪',
          'Your streak is your commitment meter 🔥',
          'Achievements unlock with more lessons — keep going! 🏅',
          'That accuracy % tells the real story 🎯',
          'Low streak? It resets at midnight ⏰ quick, do a lesson!',
        ],
      },
      about: {
        entry: [
          'The About page! 🎓 Sebastian built this whole thing!',
          'Learning about the creator? Respect! 🙌',
        ],
        tips: [
          'Sebastian has 4+ years of teaching experience 🏆',
          'UEM student AND app creator? Overachiever! 😤',
          'This app was built with love ❤️ and probably no sleep 😴',
          'Mozambique\'s English is about to level up 🇲🇿🚀',
        ],
      },
    },
    pt: {
      home: {
        entry: [
          'Bem-vindo de volta! 🏠 Pronto para subir de nível hoje?',
          'Lar doce lar! 🎉 Vamos ganhar XP!',
          'Estás aqui! O desafio diário está à espera 👀',
          'Olá! Vamos fazer hoje valer a pena 🌟',
        ],
        tips: [
          'A tua sequência não se protege sozinha 🔥 Faz uma lição!',
          'Desafio diário = XP grátis 🎁 Não sejas preguiçoso!',
          'O leaderboard não vai para o topo sozinho 🏆',
          'Uma lição = Flowy feliz. Zero lições = Flowy triste 🥺',
          '50 XP por dia mantém o insucesso afastado 💪',
          'Clica em "Continuar a aprender" — CLICA! 😏',
          'A tua barra de XP está… com fome 🍽️',
          'Fizeste o desafio de hoje? NÃO?! 😤 VAI!',
          'As sequências são como plantas 🌱 rega-as diariamente!',
          'Aquela sensação de "subir de nível" não vem sozinha 🚀',
        ],
      },
      grammar: {
        entry: [
          'Hora de gramática! 📖 O meu favorito! (não mesmo 😅)',
          'Oh laboratório de gramática! Tenta não chorar 😬',
          'Gramática! A diversão nunca acaba… 📝 (acaba, prometo)',
        ],
        tips: [
          '"I am" não "I is". Escreve isso. ✍️',
          'Passado simples vs Presente perfeito? Pergunta-me! 🤯',
          'Artigos (a/an/the) — a luta eterna 😩',
          'Dica de pro: lê a frase em voz alta 🗣️',
          'Se soa estranho, provavelmente É estranho 👂',
          'Confuso? Toca em mim! Explico com carinho 😇',
          '"Their", "there", "they\'re" — três palavras diferentes! 😤',
          'Terceira pessoa "s": she walk❌ she walks✅ 🎯',
        ],
      },
      sounds: {
        entry: [
          'Laboratório de Sons! 🔊 Os teus ouvidos vão aprender muito!',
          'Hora de pronúncia! Não tenhas medo 😬🎤',
          'Sons! É aqui que acontece a VERDADEIRA magia 🎙️',
        ],
        tips: [
          'O som "TH": língua entre os dentes, não atrás! 👅',
          '"Ship" vs "Sheep" — o professor ouve a diferença 😂',
          'Pratica devagar primeiro, a velocidade vem depois 🐌→🐇',
          'Grava-te! É estranho mas funciona 🎤',
          'A schwa (ə) está em CADA palavra inglesa. Astuta! 🕵️',
          '"Comfortable" = COM-fter-bull. A sério. 🤯',
        ],
      },
      ai: {
        entry: [
          'Tutor IA! 🤖 Pergunta-me TUDO — sem julgamentos!',
          'Olá! 👋 Pronto para responder às tuas perguntas!',
          'Modo IA ativado! 🚀 O que te está a confundir hoje?',
        ],
        tips: [
          'Pede-me para explicar qualquer regra gramatical! 📚',
          'Cola uma frase e pede-me para corrigir! ✏️',
          'Posso testar-te! Só diz "Testa-me no passado simples" 🎯',
          'Tenta: "Traduz isto para inglês formal" 🎩',
          'Pergunta-me para escrever uma frase exemplo! 💡',
          'Pergunta-me em português, respondo! 🇲🇿',
          'Sou mais inteligente que o autocorrect. Prometo. 🧠',
        ],
      },
      profile: {
        entry: [
          'Hora do perfil! 😎 Vamos ver as estatísticas!',
          'A ver-te a ti próprio? Respeito isso 🪞',
          'As tuas estatísticas estão aqui! Prepara-te 📊',
        ],
        tips: [
          'Esses pontos XP representam esforço real! Orgulha-te 💪',
          'A tua sequência é o teu medidor de comprometimento 🔥',
          'As conquistas desbloqueiam com mais lições — continua! 🏅',
          'Essa % de precisão conta a história real 🎯',
        ],
      },
      about: {
        entry: [
          'A página Sobre! 🎓 O Sebastian construiu tudo isto!',
          'A conhecer o criador? Respeito! 🙌',
        ],
        tips: [
          'O Sebastian tem mais de 4 anos de experiência de ensino 🏆',
          'Estudante na UEM E criador de app? Super-realizador! 😤',
          'Esta app foi construída com amor ❤️ e provavelmente sem dormir 😴',
          'O inglês de Moçambique está prestes a subir de nível 🇲🇿🚀',
        ],
      },
    },
  };

  // ── State ─────────────────────────────────────────────────
  let currentState    = 'idle';
  let currentTab      = 'home';
  let bubbleTimer     = null;
  let happyTimer      = null;
  let roamTimer       = null;
  let tipTimer        = null;
  let idleTimer       = null;
  let yawnTimer       = null;
  let roaming         = false;
  let wakeListening   = false;
  let alwaysListening = false;
  let wakeRecognition = null;
  let modalVisible    = false;
  let jokeIndex       = { formal: 0, informal: 0 };
  let clickCount      = 0;
  let rapidClickTimer = null;
  let rapidClicks     = 0;
  let shadesOn        = false;
  let dancing         = false;
  let lastMsgs        = {};
  let audioCtx        = null;
  let analyserNode    = null;
  let audioSource     = null;
  let volumeInterval  = null;

  // ── Helpers ──────────────────────────────────────────────
  // Non-repeating random pick
  function rand(arr, key) {
    if (!arr || !arr.length) return '';
    if (arr.length === 1) return arr[0];
    let idx = Math.floor(Math.random() * arr.length);
    if (key && lastMsgs[key] === idx) {
      idx = (idx + 1) % arr.length;
    }
    if (key) lastMsgs[key] = idx;
    return arr[idx];
  }
  function msgs(key) {
    const lang = isPT() ? 'pt' : 'en';
    return MSGS[lang][key] || MSGS.en[key] || [];
  }
  function tabTips(tab) {
    const lang = isPT() ? 'pt' : 'en';
    return (TAB_TIPS[lang] || TAB_TIPS.en)[tab] || null;
  }

  // ── SVG large (modal) ─────────────────────────────────────
  const FLOWY_SVG_LARGE = FLOWY_SVG.replace('width="62" height="62"', 'width="100" height="100"');

  // ── Confetti system ───────────────────────────────────────
  function spawnConfetti(count) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#ffd700','#ff6b9d','#7eb0ff','#00e676','#ffc93d','#b84dff','#ff5252'];
    for (let i = 0; i < (count || 30); i++) {
      const el = document.createElement('div');
      el.className = 'flowy-confetti-piece';
      el.style.cssText = `
        left:${10 + Math.random() * 80}vw;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        width:${6 + Math.random() * 8}px;
        height:${6 + Math.random() * 8}px;
        animation-delay:${Math.random() * 0.6}s;
        animation-duration:${1.2 + Math.random() * 1}s;
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        transform:rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
  }

  // ── Build DOM ─────────────────────────────────────────────
  function buildFlowy() {
    if (document.getElementById('flowy-wrap')) return;

    const wrap = document.createElement('div');
    wrap.id = 'flowy-wrap';
    wrap.setAttribute('role', 'complementary');
    wrap.setAttribute('aria-label', isPT() ? 'Assistente Flowy' : 'Flowy AI assistant');
    wrap.classList.add('flowy-entering');
    setTimeout(() => wrap.classList.remove('flowy-entering'), 700);

    const bubble = document.createElement('div');
    bubble.id = 'flowy-bubble';
    // Arrow pointer for bubble
    const arrow = document.createElement('div');
    arrow.id = 'flowy-bubble-arrow';
    bubble.appendChild(arrow);
    const bubbleText = document.createElement('span');
    bubbleText.id = 'flowy-bubble-text';
    bubble.appendChild(bubbleText);

    const btn = document.createElement('button');
    btn.id = 'flowy-btn';
    btn.className = 'state-idle';
    btn.setAttribute('aria-label', isPT() ? 'Abrir Tutor IA' : 'Open AI Tutor');
    btn.innerHTML = FLOWY_SVG;
    btn.addEventListener('click', onFlowyClick);
    btn.addEventListener('mouseenter', onFlowyHover);

    const micBtn = document.createElement('button');
    micBtn.id = 'flowy-mic-btn';
    micBtn.setAttribute('aria-label', isPT() ? 'Ativar reconhecimento de voz' : 'Activate voice recognition');
    micBtn.innerHTML = '🎤';
    micBtn.title = isPT() ? 'Diz "Flowy" para me invocar!' : 'Say "Flowy" to summon me!';
    micBtn.addEventListener('click', toggleWakeListening);

    wrap.appendChild(bubble);
    wrap.appendChild(btn);
    wrap.appendChild(micBtn);
    document.body.appendChild(wrap);

    buildModal();

    document.addEventListener('mousemove', trackPupils, { passive: true });

    // Try auto-start wake listening (always-on)
    setTimeout(() => {
      if (supportsWakeWord()) {
        alwaysListening = true;
        startWakeListening();
      }
    }, 2000);
  }

  function buildModal() {
    if (document.getElementById('flowy-modal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'flowy-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Flowy');

    overlay.innerHTML = `
      <div id="flowy-modal-inner">
        <button id="flowy-modal-close" aria-label="${isPT() ? 'Fechar' : 'Close'}">✕</button>
        <div id="flowy-modal-avatar">${FLOWY_SVG_LARGE}</div>
        <div id="flowy-modal-msg"></div>
        <div id="flowy-modal-actions">
          <button class="flowy-action-btn" data-action="lesson">${isPT() ? '📚 Iniciar Lição' : '📚 Start Lesson'}</button>
          <button class="flowy-action-btn" data-action="chat">${isPT() ? '💬 Falar com IA' : '💬 Chat with AI'}</button>
          <button class="flowy-action-btn" data-action="joke">${isPT() ? '😂 Conta uma piada' : '😂 Tell a joke'}</button>
          <button class="flowy-action-btn" data-action="tip">${isPT() ? '💡 Dá-me uma dica' : '💡 Give me a tip'}</button>
        </div>
        <div id="flowy-modal-joke-type" style="display:none">
          <button class="flowy-action-btn" data-action="joke-formal">${isPT() ? '🎩 Piada Formal' : '🎩 Formal Joke'}</button>
          <button class="flowy-action-btn" data-action="joke-informal">${isPT() ? '😜 Piada Informal' : '😜 Informal Joke'}</button>
          <button class="flowy-action-btn" data-action="back">← ${isPT() ? 'Voltar' : 'Back'}</button>
        </div>
      </div>`;

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    overlay.querySelector('#flowy-modal-close').addEventListener('click', closeModal);
    overlay.querySelectorAll('.flowy-action-btn').forEach(b => b.addEventListener('click', handleModalAction));

    document.body.appendChild(overlay);
  }

  function handleModalAction(e) {
    const action = e.currentTarget.dataset.action;
    const mainActions = document.getElementById('flowy-modal-actions');
    const jokeTypes   = document.getElementById('flowy-modal-joke-type');
    const msgEl       = document.getElementById('flowy-modal-msg');

    if (action === 'lesson') {
      closeModal();
      if (window.goTab) window.goTab('home');
    } else if (action === 'chat') {
      closeModal();
      const aiBtn = document.getElementById('bn-ai');
      if (window.goTab && aiBtn) window.goTab('ai', aiBtn);
      else if (window.goTab) window.goTab('ai');
      if (!window._chatInitDone && window.initChat) window.initChat();
    } else if (action === 'joke') {
      mainActions.style.display = 'none';
      jokeTypes.style.display   = 'flex';
      msgEl.textContent = isPT() ? 'Que tipo de piada preferes? 😄' : 'What type of joke? 😄';
    } else if (action === 'joke-formal') {
      const jArr = msgs('jokes_formal');
      msgEl.textContent = jArr[jokeIndex.formal % jArr.length];
      jokeIndex.formal++;
    } else if (action === 'joke-informal') {
      const jArr = msgs('jokes_informal');
      msgEl.textContent = jArr[jokeIndex.informal % jArr.length];
      jokeIndex.informal++;
    } else if (action === 'tip') {
      const tipData = tabTips(currentTab);
      msgEl.textContent = tipData
        ? rand([...tipData.entry, ...tipData.tips], 'modal_tip')
        : rand(msgs('idle'), 'modal_idle');
    } else if (action === 'back') {
      mainActions.style.display = 'flex';
      jokeTypes.style.display   = 'none';
      msgEl.textContent = rand(msgs('wakeWord'), 'wakeWord');
    }
  }

  function openModal(msg) {
    modalVisible = true;
    wakeUpFromSleep();
    const modal = document.getElementById('flowy-modal');
    const msgEl = document.getElementById('flowy-modal-msg');
    const mainActions = document.getElementById('flowy-modal-actions');
    const jokeTypes   = document.getElementById('flowy-modal-joke-type');
    if (!modal) return;
    if (mainActions) mainActions.style.display = 'flex';
    if (jokeTypes)   jokeTypes.style.display   = 'none';
    if (msgEl) msgEl.textContent = msg || rand(msgs('wakeWord'), 'wakeWord');
    modal.classList.add('visible');
    setState('happy');
    const avatar = document.getElementById('flowy-modal-avatar');
    if (avatar) { avatar.style.animation = 'none'; requestAnimationFrame(() => { avatar.style.animation = ''; }); }
  }

  function closeModal() {
    modalVisible = false;
    const modal = document.getElementById('flowy-modal');
    if (modal) modal.classList.remove('visible');
    setState('idle');
    resetIdleTimer();
  }

  // ── State machine ─────────────────────────────────────────
  function setState(state) {
    if (currentState === state && state !== 'celebrating') return;
    currentState = state;
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;

    // Remove all state classes
    btn.className = btn.className.replace(/state-\S+/g, '').trim();
    btn.classList.add('state-' + state);

    const smile   = btn.querySelector('#flowy-smile');
    const frown   = btn.querySelector('#flowy-frown');
    const browL   = btn.querySelector('#flowy-brow-l');
    const browR   = btn.querySelector('#flowy-brow-r');
    const browC   = btn.querySelector('#flowy-brow-c');
    const tearL   = btn.querySelector('#flowy-tear-l');
    const tearR   = btn.querySelector('#flowy-tear-r');
    const swirl   = btn.querySelector('#flowy-think-swirl');
    const hearts  = btn.querySelector('#flowy-hearts');
    const sleepL  = btn.querySelector('#flowy-sleep-l');
    const sleepR  = btn.querySelector('#flowy-sleep-r');
    const mouthO  = btn.querySelector('#flowy-mouth-o');

    const hide = el => el && el.setAttribute('opacity', '0');
    const show = el => el && el.setAttribute('opacity', '1');

    hide(smile); hide(frown); hide(browL); hide(browR); hide(browC);
    hide(tearL); hide(tearR); hide(swirl); hide(hearts); hide(sleepL); hide(sleepR); hide(mouthO);

    if (state === 'happy' || state === 'celebrating') { show(smile); }
    if (state === 'sad')     { show(frown); show(browL); show(browR); show(tearL); show(tearR); }
    if (state === 'thinking') { show(swirl); }
    if (state === 'love')    { show(hearts); }
    if (state === 'sleeping') { show(sleepL); show(sleepR); }
    if (state === 'confused') { show(browC); }
    if (state === 'excited')  { show(mouthO); show(smile); }
    if (state === 'surprised') { show(mouthO); }

    if (state === 'thinking') {
      showBubble('<span class="flowy-think-dot"></span><span class="flowy-think-dot"></span><span class="flowy-think-dot"></span>');
    } else if (state === 'speaking') {
      showBubble(rand(msgs('speaking'), 'speaking')); scheduleHide(3200);
    } else if (state === 'happy') {
      showBubble(rand(msgs('happy'), 'happy')); scheduleHide(3000);
    } else if (state === 'sad') {
      showBubble(rand(msgs('sad'), 'sad')); scheduleHide(3500);
    } else if (state === 'roaming') {
      showBubble(rand(msgs('roaming'), 'roaming')); scheduleHide(2000);
    } else if (state === 'sleeping') {
      showBubble(rand(msgs('sleeping'), 'sleeping'));
    } else if (state === 'celebrating') {
      showBubble(rand(msgs('celebrating'), 'celebrating')); scheduleHide(3000);
      spawnConfetti(50);
    } else if (state === 'excited') {
      showBubble(rand(msgs('excited'), 'excited')); scheduleHide(3000);
    } else if (state === 'love') {
      showBubble(rand(msgs('love'), 'love')); scheduleHide(3000);
    } else if (state === 'surprised') {
      showBubble(rand(msgs('surprised'), 'surprised')); scheduleHide(2500);
    } else if (state === 'confused') {
      showBubble(rand(msgs('confused'), 'confused')); scheduleHide(3000);
    } else {
      hideBubble();
    }
  }

  // ── Sleeping / idle ───────────────────────────────────────
  function resetIdleTimer() {
    clearTimeout(yawnTimer);
    clearTimeout(idleTimer);
    if (currentState === 'sleeping') wakeUpFromSleep();
    // Yawn after 45s of idle, sleep after 60s
    yawnTimer = setTimeout(() => {
      if (currentState === 'idle' && !modalVisible) {
        showBubble(rand(msgs('yawn'), 'yawn'));
        scheduleHide(3000);
        idleTimer = setTimeout(() => {
          if (currentState === 'idle' && !modalVisible) setState('sleeping');
        }, 15000);
      }
    }, 45000);
  }

  function wakeUpFromSleep() {
    if (currentState !== 'sleeping') return;
    setState('idle');
    resetIdleTimer();
  }

  // ── Bubble helpers ────────────────────────────────────────
  function showBubble(html) {
    clearTimeout(bubbleTimer);
    const el   = document.getElementById('flowy-bubble');
    const text = document.getElementById('flowy-bubble-text');
    if (!el || !text) return;
    text.innerHTML = html;
    requestAnimationFrame(() => el.classList.add('visible'));
    resetIdleTimer();
  }
  function hideBubble() {
    const el = document.getElementById('flowy-bubble');
    if (el) el.classList.remove('visible');
  }
  function scheduleHide(ms) {
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(hideBubble, ms);
  }

  // ── Pupil tracking ────────────────────────────────────────
  function trackPupils(e) {
    if (currentState === 'sleeping') return;
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const max = 1.4;
    const ox = dist > 1 ? (dx / dist) * max : 0;
    const oy = dist > 1 ? (dy / dist) * max : 0;
    const pl = btn.querySelector('#flowy-pupil-l');
    const pr = btn.querySelector('#flowy-pupil-r');
    if (pl) { pl.setAttribute('cx', 24 + ox); pl.setAttribute('cy', 30.5 + oy); }
    if (pr) { pr.setAttribute('cx', 38 + ox); pr.setAttribute('cy', 30.5 + oy); }
  }

  // ── Random look-around (when idle) ───────────────────────
  function scheduleLookAround() {
    setTimeout(function look() {
      if (currentState === 'idle') {
        const btn = document.getElementById('flowy-btn');
        if (btn) {
          const pl = btn.querySelector('#flowy-pupil-l');
          const pr = btn.querySelector('#flowy-pupil-r');
          const ox = (Math.random() - 0.5) * 2.8;
          const oy = (Math.random() - 0.5) * 2;
          if (pl) { pl.setAttribute('cx', 24 + ox); pl.setAttribute('cy', 30.5 + oy); }
          if (pr) { pr.setAttribute('cx', 38 + ox); pr.setAttribute('cy', 30.5 + oy); }
          // Reset after a moment
          setTimeout(() => {
            if (pl) { pl.setAttribute('cx', '24.8'); pl.setAttribute('cy', '30.5'); }
            if (pr) { pr.setAttribute('cx', '38.8'); pr.setAttribute('cy', '30.5'); }
          }, 2000);
        }
      }
      setTimeout(look, 6000 + Math.random() * 8000);
    }, 4000);
  }

  // ── Click interactions ────────────────────────────────────
  function onFlowyClick() {
    wakeUpFromSleep();
    resetIdleTimer();
    clickCount++;
    rapidClicks++;
    clearTimeout(rapidClickTimer);

    // Easter egg: 50 clicks — dance
    if (clickCount === 50 && !dancing) {
      triggerDance();
      return;
    }
    // Easter egg: 100 clicks — sunglasses
    if (clickCount === 100) {
      triggerShades();
      return;
    }

    // Tickling: 5+ rapid clicks
    rapidClickTimer = setTimeout(() => { rapidClicks = 0; }, 1500);
    if (rapidClicks >= 5) {
      rapidClicks = 0;
      setState('excited');
      showBubble(rand(msgs('tickle'), 'tickle'));
      scheduleHide(2500);
      clearTimeout(happyTimer);
      happyTimer = setTimeout(() => setState('idle'), 2800);
      return;
    }

    openModal(rand(msgs('wakeWord'), 'wakeWord'));
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 2500);
  }

  function onFlowyHover() {
    if (currentState === 'sleeping') { wakeUpFromSleep(); return; }
    if (currentState !== 'idle') return;
    const tipData = tabTips(currentTab);
    const roll    = Math.random();
    if (roll < 0.55 && tipData) showBubble(rand(tipData.tips, 'tab_tip'));
    else if (roll < 0.75) showBubble(rand(msgs('help'), 'help'));
    else if (roll < 0.88) showBubble(rand(msgs('idle'), 'idle'));
    else showBubble(rand(msgs('jokes_informal'), 'joke_i'));
    scheduleHide(3000);
  }

  // ── Easter eggs ───────────────────────────────────────────
  function triggerDance() {
    dancing = true;
    setState('celebrating');
    showBubble(rand(msgs('easter_dance'), 'easter_dance'));
    scheduleHide(4000);
    const btn = document.getElementById('flowy-btn');
    if (btn) btn.classList.add('state-dancing');
    spawnConfetti(60);
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => {
      dancing = false;
      if (btn) btn.classList.remove('state-dancing');
      setState('idle');
    }, 5000);
  }

  function triggerShades() {
    if (!shadesOn) {
      shadesOn = true;
      const shades = document.querySelectorAll('#flowy-shades');
      shades.forEach(s => s.setAttribute('opacity', '1'));
      setState('happy');
      showBubble(rand(msgs('easter_shades'), 'easter_shades'));
      spawnConfetti(80);
      scheduleHide(5000);
      clearTimeout(happyTimer);
      happyTimer = setTimeout(() => setState('idle'), 3500);
    }
  }

  // ── XP / Level-up reactions ───────────────────────────────
  function triggerXP() {
    setState('celebrating');
    spawnConfetti(40);
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 3000);
  }

  function triggerLevelUp() {
    setState('celebrating');
    spawnConfetti(80);
    showBubble(isPT() ? '🎉 SUBISTE DE NÍVEL!! 🏆' : '🎉 LEVEL UP!! 🏆');
    scheduleHide(5000);
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 5000);
  }

  // ── Quiz reactions ────────────────────────────────────────
  function triggerCorrect() {
    clearTimeout(happyTimer);
    setState('happy');
    happyTimer = setTimeout(() => setState('idle'), 2500);
    resetIdleTimer();
  }
  function triggerWrong() {
    clearTimeout(happyTimer);
    setState('sad');
    happyTimer = setTimeout(() => setState('idle'), 3000);
    resetIdleTimer();
  }

  function hookAnswerEvents() {
    ['showCorrect','onCorrect','markCorrect','answerCorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { triggerCorrect(); return orig.apply(this, arguments); };
      }
    });
    ['showWrong','onWrong','markWrong','answerWrong','showIncorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { triggerWrong(); return orig.apply(this, arguments); };
      }
    });

    // Hook level up events
    ['onLevelUp','levelUp','showLevelUp'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { triggerLevelUp(); return orig.apply(this, arguments); };
      }
    });

    const xppop = document.getElementById('xppop');
    const toast = document.getElementById('toast');
    if (xppop || toast) {
      const obs = new MutationObserver((mutations) => {
        mutations.forEach(m => {
          const text = (m.target.textContent || '').toLowerCase();
          if (m.target.id === 'xppop' && m.target.style.display !== 'none' && text.includes('xp')) {
            if (text.includes('level') || text.includes('nível')) triggerLevelUp();
            else triggerXP();
          }
          if (m.target.id === 'toast') {
            if (text.includes('level') || text.includes('nível')) triggerLevelUp();
            else if (text.includes('correct') || text.includes('✅') || text.includes('🎉') ||
                text.includes('correto') || text.includes('certo')) triggerCorrect();
            else if (text.includes('wrong') || text.includes('❌') || text.includes('incorrect') ||
                text.includes('errado') || text.includes('incorreto')) triggerWrong();
          }
        });
      });
      if (xppop) obs.observe(xppop, { attributes: true, attributeFilter: ['style'], childList: true, subtree: true });
      if (toast) obs.observe(toast, { attributes: true, attributeFilter: ['style','class'], childList: true, subtree: true });
    }

    const feedbackObs = new MutationObserver(() => {
      if (document.querySelector('.feedback-correct, .answer-correct, [data-correct="true"]')) triggerCorrect();
      if (document.querySelector('.feedback-wrong, .answer-wrong, [data-correct="false"]'))    triggerWrong();
      if (document.querySelector('.level-up, .levelup, [data-levelup="true"]'))                triggerLevelUp();
    });
    feedbackObs.observe(document.body, { childList: true, subtree: true, attributeFilter: ['class','data-correct','data-levelup'] });
  }

  // ── Chat hooks ────────────────────────────────────────────
  function hookChatFunctions() {
    const orig_show = window.showTypingIndicator;
    const orig_hide = window.hideTypingIndicator;
    if (orig_show) {
      window.showTypingIndicator = function () { setState('thinking'); return orig_show.apply(this, arguments); };
    }
    if (orig_hide) {
      window.hideTypingIndicator = function () {
        const r = orig_hide.apply(this, arguments);
        setState('speaking');
        clearTimeout(happyTimer);
        happyTimer = setTimeout(() => { setState('happy'); setTimeout(() => setState('idle'), 2000); }, 1400);
        return r;
      };
    }
  }

  // ── Language hook ─────────────────────────────────────────
  function hookLangChange() {
    const origSetLang = window.setLang;
    if (origSetLang) {
      window.setLang = function(lang) {
        const result = origSetLang.apply(this, arguments);
        setTimeout(updateModalLabels, 300);
        return result;
      };
    }
  }
  function updateModalLabels() {
    const modal = document.getElementById('flowy-modal');
    if (!modal) return;
    modal.remove();
    buildModal();
  }

  // ── Wake word voice recognition ──────────────────────────
  function supportsWakeWord() {
    return ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  function toggleWakeListening() {
    if (!supportsWakeWord()) {
      const msg = isPT()
        ? '😔 O teu browser não suporta reconhecimento de voz. Tenta o Chrome!'
        : '😔 Your browser doesn\'t support speech recognition. Try Chrome!';
      showBubble(msg); scheduleHide(4000); return;
    }
    if (wakeListening) stopWakeListening();
    else { alwaysListening = true; startWakeListening(); }
  }

  function startWakeListening() {
    if (wakeListening) return;
    wakeListening = true;
    const micBtn = document.getElementById('flowy-mic-btn');
    if (micBtn) micBtn.classList.add('listening');
    showBubble(rand(msgs('listening'), 'listening'));
    scheduleHide(3000);

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    wakeRecognition = new SR();
    wakeRecognition.continuous    = true;
    wakeRecognition.interimResults = true;  // Faster detection via interim results
    wakeRecognition.lang = isPT() ? 'pt-PT' : 'en-US';
    // Use both languages for flexibility
    wakeRecognition.maxAlternatives = 3;

    wakeRecognition.onresult = function(e) {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        // Check all alternatives for better accuracy
        for (let a = 0; a < e.results[i].length; a++) {
          const text = e.results[i][a].transcript.toLowerCase().trim();
          if (matchesWakeWord(text)) {
            // Detect if it's a shout (confidence + length/caps context)
            const isLoud = detectLoudAudio();
            handleWakeWord(isLoud);
            return;
          }
        }
      }
    };

    wakeRecognition.onerror = function(e) {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        wakeListening = false;
        alwaysListening = false;
        const micBtn = document.getElementById('flowy-mic-btn');
        if (micBtn) micBtn.classList.remove('listening');
      }
      // On other errors (no-speech, aborted) — just restart
    };

    wakeRecognition.onend = function() {
      if (wakeListening) {
        try { wakeRecognition.start(); } catch(err) {}
      }
    };

    try { wakeRecognition.start(); } catch(err) {
      wakeListening = false;
    }

    // Start audio level monitoring for shout detection
    startAudioMonitor();
  }

  function stopWakeListening() {
    wakeListening = false;
    alwaysListening = false;
    stopAudioMonitor();
    if (wakeRecognition) {
      try { wakeRecognition.stop(); } catch(err) {}
      wakeRecognition = null;
    }
    const micBtn = document.getElementById('flowy-mic-btn');
    if (micBtn) micBtn.classList.remove('listening');
    showBubble(isPT() ? '🎤 Microfone desligado.' : '🎤 Mic off.');
    scheduleHide(2000);
  }

  // ── Wake word matching ────────────────────────────────────
  function matchesWakeWord(text) {
    // All plausible speech-recognition outputs for "Flowy"
    const patterns = [
      'flowy', 'flowly', 'flow-y', 'flowi', 'fluí', 'floui',
      'flou', 'flaui', 'flaoui', 'flue', 'floue',
      // Portuguese mis-hearings
      'flói', 'flou', 'flói', 'floui',
    ];
    return patterns.some(p => text.includes(p));
  }

  // ── Audio level monitor (shout detection) ─────────────────
  let lastVolume = 0;

  function startAudioMonitor() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(stream => {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 256;
        audioSource = audioCtx.createMediaStreamSource(stream);
        audioSource.connect(analyserNode);
        const data = new Uint8Array(analyserNode.frequencyBinCount);
        volumeInterval = setInterval(() => {
          analyserNode.getByteFrequencyData(data);
          const avg = data.reduce((a, b) => a + b, 0) / data.length;
          lastVolume = avg;
        }, 100);
      })
      .catch(() => {}); // Silently fail — mic perms not granted
  }

  function stopAudioMonitor() {
    clearInterval(volumeInterval);
    volumeInterval = null;
    if (audioSource) { try { audioSource.disconnect(); } catch(e) {} audioSource = null; }
    if (audioCtx)    { try { audioCtx.close(); } catch(e) {} audioCtx = null; }
    analyserNode = null;
    lastVolume = 0;
  }

  function detectLoudAudio() {
    // volume > 60 (out of 255) = clearly speaking up / shouting
    return lastVolume > 60;
  }

  function handleWakeWord(isShout) {
    if (wakeRecognition) {
      try { wakeRecognition.stop(); } catch(err) {}
    }
    setTimeout(() => {
      if (wakeListening && wakeRecognition) {
        try { wakeRecognition.start(); } catch(err) {}
      }
    }, 2500);

    wakeUpFromSleep();
    resetIdleTimer();

    const greeting = isShout
      ? rand(msgs('shout'), 'shout')
      : rand(msgs('wakeWord'), 'wakeWord');
    openModal(greeting);

    // Excite animation on shout
    if (isShout) {
      setState('excited');
      spawnConfetti(25);
    } else {
      setState('happy');
    }
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => setState('idle'), 3500);
  }

  // ── Tab system ────────────────────────────────────────────
  function onTabChange(tabId) {
    currentTab = tabId || 'home';
    clearTimeout(tipTimer);
    wakeUpFromSleep();
    resetIdleTimer();
    const tipData = tabTips(currentTab);
    if (!tipData) return;
    setTimeout(() => {
      if (currentState === 'idle' || currentState === 'roaming') {
        showBubble(rand(tipData.entry, 'tab_entry'));
        scheduleHide(3800);
      }
    }, 1200);
    scheduleTipCycle();
  }

  function scheduleTipCycle() {
    clearTimeout(tipTimer);
    tipTimer = setTimeout(function cycle() {
      if (currentState === 'idle') {
        const tipData = tabTips(currentTab);
        if (tipData && tipData.tips.length) { showBubble(rand(tipData.tips, 'tab_tip')); scheduleHide(4000); }
      }
      tipTimer = setTimeout(cycle, 22000 + Math.random() * 13000);
    }, 22000 + Math.random() * 13000);
  }

  function hookTabSystem() {
    const origGoTab = window.goTab;
    if (origGoTab) {
      window.goTab = function (tabId) { onTabChange(tabId); return origGoTab.apply(this, arguments); };
    }
    document.addEventListener('click', (e) => {
      const navBtn = e.target.closest('[id^="bn-"], [data-tab]');
      if (!navBtn) return;
      const id  = navBtn.id || '';
      const tab = id.replace('bn-', '') || navBtn.dataset.tab || '';
      if (tab && tab !== currentTab) onTabChange(tab);
    }, { passive: true });
  }

  // ── Screen roaming ────────────────────────────────────────
  function getRandomPosition() {
    const margin  = 80;
    const btnSize = 80;
    const maxX = window.innerWidth  - btnSize - margin;
    const maxY = window.innerHeight - btnSize - margin;
    return { x: margin + Math.random() * maxX, y: margin + Math.random() * maxY };
  }

  function moveTo(x, y) {
    const wrap = document.getElementById('flowy-wrap');
    if (!wrap) return;
    wrap.style.bottom = 'auto';
    wrap.style.right  = 'auto';
    wrap.style.left   = x + 'px';
    wrap.style.top    = y + 'px';
  }

  function roamStep() {
    if (!roaming || modalVisible || currentState === 'sleeping') return;
    const pos = getRandomPosition();
    setState('roaming');
    moveTo(pos.x, pos.y);
    const tipData = tabTips(currentTab);
    const pools   = [msgs('roaming'), msgs('help')];
    if (tipData && Math.random() < 0.3) pools.push(tipData.tips);
    const pool = pools[Math.floor(Math.random() * pools.length)];
    clearTimeout(bubbleTimer);
    showBubble(rand(pool, 'roam'));
    scheduleHide(2400);
    clearTimeout(happyTimer);
    happyTimer = setTimeout(() => {
      if (currentState === 'roaming') { currentState = 'idle'; const btn = document.getElementById('flowy-btn'); if (btn) btn.className = 'state-idle'; }
    }, 600);
    roamTimer = setTimeout(roamStep, 12000 + Math.random() * 12000);
  }

  function startRoaming() {
    roaming = true;
    roamTimer = setTimeout(roamStep, 16000 + Math.random() * 8000);
  }
  function stopRoaming() { roaming = false; clearTimeout(roamTimer); }

  // ── Idle teaser ───────────────────────────────────────────
  function scheduleIdleTeaser() {
    setTimeout(function tick() {
      if (currentState === 'idle' && !modalVisible) {
        const roll    = Math.random();
        const tipData = tabTips(currentTab);
        if      (roll < 0.4 && tipData) showBubble(rand(tipData.tips, 'tab_tip'));
        else if (roll < 0.65)           showBubble(rand(msgs('help'), 'help'));
        else if (roll < 0.8)            showBubble(rand(msgs('idle'), 'idle'));
        else {
          const pool = Math.random() < 0.5 ? msgs('jokes_informal') : msgs('jokes_formal');
          showBubble(rand(pool, 'joke'));
        }
        scheduleHide(4000);
      }
      setTimeout(tick, 10000 + Math.random() * 8000);
    }, 10000);
  }

  // ── Boot ──────────────────────────────────────────────────
  function init() {
    buildFlowy();
    hookChatFunctions();
    hookAnswerEvents();
    hookTabSystem();
    hookLangChange();
    scheduleIdleTeaser();
    scheduleTipCycle();
    startRoaming();
    resetIdleTimer();
    scheduleLookAround();

    const authScreen = document.getElementById('screen-auth');
    const appScreen  = document.getElementById('screen-app');

    if (authScreen && appScreen) {
      const obs = new MutationObserver(() => {
        const wrap  = document.getElementById('flowy-wrap');
        const modal = document.getElementById('flowy-modal');
        if (!wrap) return;
        const onAuth = authScreen.classList.contains('on') && !appScreen.classList.contains('on');
        if (onAuth) {
          wrap.style.display = 'none';
          if (modal) modal.style.display = 'none';
          stopRoaming(); clearTimeout(tipTimer); stopWakeListening();
        } else {
          wrap.style.display = '';
          if (modal) modal.style.display = '';
          if (!roaming) startRoaming();
          scheduleTipCycle();
          if (supportsWakeWord() && !wakeListening) startWakeListening();
        }
      });
      obs.observe(authScreen, { attributes: true, attributeFilter: ['class'] });
      obs.observe(appScreen,  { attributes: true, attributeFilter: ['class'] });
      const wrap = document.getElementById('flowy-wrap');
      if (wrap) wrap.style.display = appScreen.classList.contains('on') ? '' : 'none';
    }

    // Any user interaction resets idle timer
    ['click','keydown','touchstart','scroll'].forEach(ev => {
      document.addEventListener(ev, resetIdleTimer, { passive: true });
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalVisible) closeModal(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    const poll = setInterval(() => {
      if (window.goTab) { clearInterval(poll); init(); }
    }, 80);
    setTimeout(() => { clearInterval(poll); if (!document.getElementById('flowy-wrap')) init(); }, 3000);
  }

  // ── Public API ────────────────────────────────────────────
  window.Flowy = {
    setState,
    correct:        triggerCorrect,
    wrong:          triggerWrong,
    xp:             triggerXP,
    levelUp:        triggerLevelUp,
    celebrate:      () => { setState('celebrating'); },
    say:            (msg) => { showBubble(msg); scheduleHide(3500); },
    setTab:         onTabChange,
    tip:            () => { const t = tabTips(currentTab); if (t) { showBubble(rand(t.tips, 'tab_tip')); scheduleHide(4000); } },
    open:           (msg) => openModal(msg),
    close:          closeModal,
    jokeInformal:   () => { showBubble(rand(msgs('jokes_informal'), 'joke_i')); scheduleHide(6000); },
    jokeFormal:     () => { showBubble(rand(msgs('jokes_formal'), 'joke_f')); scheduleHide(6000); },
    startListening: startWakeListening,
    stopListening:  stopWakeListening,
    confetti:       (n) => spawnConfetti(n),
    sleep:          () => setState('sleeping'),
    wake:           wakeUpFromSleep,
    love:           () => { setState('love'); clearTimeout(happyTimer); happyTimer = setTimeout(() => setState('idle'), 3000); },
    surprised:      () => { setState('surprised'); clearTimeout(happyTimer); happyTimer = setTimeout(() => setState('idle'), 2500); },
    excited:        () => { setState('excited'); clearTimeout(happyTimer); happyTimer = setTimeout(() => setState('idle'), 3000); },
  };

}());
