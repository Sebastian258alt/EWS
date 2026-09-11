// ═══════════════════════════════════════════════════════════
//  SOUNDS-DATA.JS — Pronunciation Lab content (PRON_WORDS,
//  MINIMAL_PAIRS, TONGUE_TWISTERS, DIFFICULT_SOUNDS)
//  Extracted from data.js (Step 3.1 follow-up — data-side lazy load)
//  Loaded on demand via EWSLoadFeature('sounds-data', ...), always
//  BEFORE js/ui-sounds.js, whose render functions read these globals.
//  See index.html's ui-sounds wiring for the load order guarantee.
// ═══════════════════════════════════════════════════════════

const PRON_WORDS = [
  // ── Classic tricky words ──
  {w:'Hello',ipa:'/həˈloʊ/',m:'A common greeting'},
  {w:'Pronunciation',ipa:'/prəˌnʌnsiˈeɪʃən/',m:'The way a word is spoken'},
  {w:'Beautiful',ipa:'/ˈbjuːtɪfl/',m:'Pleasing to the senses'},
  {w:'Comfortable',ipa:'/ˈkʌmftəbl/',m:'At ease; not tight — 3 syllables!'},
  {w:'Vocabulary',ipa:'/vəˈkæbjʊleri/',m:'All the words you know'},
  {w:'Wednesday',ipa:'/ˈwenzdeɪ/',m:'The middle day of the week — D is silent!'},
  {w:'February',ipa:'/ˈfebrʊeri/',m:'Second month — first R often dropped in speech'},
  {w:'Library',ipa:'/ˈlaɪbreri/',m:'A place with books — two Rs, say both!'},
  {w:'Particularly',ipa:'/pəˈtɪkjʊləli/',m:'Especially; specifically'},
  {w:'Thoroughly',ipa:'/ˈθʌrəli/',m:'Completely; in detail'},
  {w:'Entrepreneur',ipa:'/ˌɒntrəprəˈnɜː/',m:'A business founder — French origin!'},
  {w:'Vegetable',ipa:'/ˈvedʒtəbl/',m:'An edible plant — 3 syllables, not 4'},
  {w:'Athlete',ipa:'/ˈæθliːt/',m:'A sports person — 2 syllables only!'},
  {w:'Clothes',ipa:'/kloʊðz/',m:'What you wear — the E is silent'},
  {w:'Receipt',ipa:'/rɪˈsiːt/',m:'Proof of purchase — the P is silent!'},
  {w:'Colonel',ipa:'/ˈkɜːnl/',m:'A military officer — sounds like "kernel"'},
  {w:'Worcestershire',ipa:'/ˈwʊstəʃɪə/',m:'English county — sounds like "Wooster-sher"'},
  {w:'Chaos',ipa:'/ˈkeɪɒs/',m:'Complete disorder — CH sounds like K'},
  {w:'Choir',ipa:'/ˈkwaɪər/',m:'A singing group — CH sounds like KW'},
  {w:'Queue',ipa:'/kjuː/',m:'A line of waiting people — only the Q is pronounced!'},
  // ── Silent letters ──
  {w:'Knife',ipa:'/naɪf/',m:'A cutting tool — the K is silent'},
  {w:'Knight',ipa:'/naɪt/',m:'A medieval soldier — K and GH are silent'},
  {w:'Gnome',ipa:'/noʊm/',m:'A small creature — the G is silent'},
  {w:'Psychology',ipa:'/saɪˈkɒlədʒi/',m:'Study of the mind — the P is silent'},
  {w:'Debt',ipa:'/det/',m:'Money owed — the B is silent'},
  {w:'Island',ipa:'/ˈaɪlənd/',m:'Land surrounded by water — the S is silent'},
  {w:'Salmon',ipa:'/ˈsæmən/',m:'A pink fish — the L is silent'},
  {w:'Subtle',ipa:'/ˈsʌtl/',m:'Not obvious — the B is silent'},
  {w:'Wrap',ipa:'/ræp/',m:'To cover — the W is silent'},
  {w:'Hour',ipa:'/aʊər/',m:'60 minutes — the H is silent'},
  // ── Stress patterns ──
  {w:'Photography',ipa:'/fəˈtɒɡrəfi/',m:'Taking photos — stress on 2nd syllable'},
  {w:'Photographer',ipa:'/fəˈtɒɡrəfər/',m:'Person taking photos — stress shifts!'},
  {w:'Economy',ipa:'/ɪˈkɒnəmi/',m:'Financial system — stress on 2nd syllable'},
  {w:'Economic',ipa:'/ˌiːkəˈnɒmɪk/',m:'Related to economy — stress on 3rd syllable!'},
  {w:'Present',ipa:'/ˈpreznt/ (n.) /prɪˈzent/ (v.)',m:'Noun: a gift. Verb: to show. Stress changes!'},
  {w:'Record',ipa:'/ˈrekərd/ (n.) /rɪˈkɔːrd/ (v.)',m:'Noun: an album. Verb: to register. Stress changes!'},
  {w:'Desert',ipa:'/ˈdezərt/ (n.) /dɪˈzɜːrt/ (v.)',m:'Noun: dry land. Verb: to abandon. Stress changes!'},
  // ── Commonly mispronounced ──
  {w:'Especially',ipa:'/ɪˈspeʃəli/',m:'Particularly — no X sound, starts with /ɪ/'},
  {w:'Interesting',ipa:'/ˈɪntrɪstɪŋ/',m:'Engaging — 3 syllables in natural speech'},
  {w:'Temperature',ipa:'/ˈtemprɪtʃər/',m:'How hot or cold — 3 syllables naturally'},
  {w:'Different',ipa:'/ˈdɪfrənt/',m:'Not the same — 2 syllables in natural speech'},
  {w:'Family',ipa:'/ˈfæmli/',m:'Your relatives — 2 syllables naturally'},
  {w:'Every',ipa:'/ˈevri/',m:'Each one — 2 syllables in natural speech'},
  {w:'Actually',ipa:'/ˈæktʃuəli/',m:'In fact — the S makes a /tʃ/ sound'},
  {w:'Usually',ipa:'/ˈjuːʒuəli/',m:'Most of the time — the S makes a /ʒ/ sound'},
  {w:'Vegetarian',ipa:'/ˌvedʒɪˈteəriən/',m:'No meat — stress on 3rd syllable'},
  {w:'Refrigerator',ipa:'/rɪˈfrɪdʒəreɪtər/',m:'Keeps food cold — NOT "fridge-a-rator"'},
  {w:'Miscellaneous',ipa:'/ˌmɪsəˈleɪniəs/',m:'Mixed variety — 5 syllables!'},
  {w:'Specific',ipa:'/spəˈsɪfɪk/',m:'Particular — NOT "espec-ific"'},
  {w:'Throughout',ipa:'/θruːˈaʊt/',m:'All the way through — TH + out'},
  {w:'Strength',ipa:'/streŋθ/',m:'Power — ends in /ŋθ/, a tough cluster!'},
  {w:'Twelfths',ipa:'/twelfθs/',m:'The hardest word to end — 5 consonants!'},
];

const MINIMAL_PAIRS = [
  // ── Short /ɪ/ vs Long /iː/ ──
  {a:'Ship',b:'Sheep',pa:'/ʃɪp/',pb:'/ʃiːp/',note:'Short /ɪ/ vs Long /iː/ — very common mistake for Portuguese speakers!'},
  {a:'Bit',b:'Beat',pa:'/bɪt/',pb:'/biːt/',note:'Short /ɪ/ vs Long /iː/ — tense your lips more for the long sound'},
  {a:'Live',b:'Leave',pa:'/lɪv/',pb:'/liːv/',note:'Short /ɪ/ vs Long /iː/ — "live" verb sounds different from "live" adjective'},
  {a:'Fill',b:'Feel',pa:'/fɪl/',pb:'/fiːl/',note:'Short /ɪ/ vs Long /iː/ — hold the long vowel twice as long'},
  // ── Short /ʊ/ vs Long /uː/ ──
  {a:'Full',b:'Fool',pa:'/fʊl/',pb:'/fuːl/',note:'Short /ʊ/ vs Long /uː/ — relax your lips for /ʊ/'},
  {a:'Pull',b:'Pool',pa:'/pʊl/',pb:'/puːl/',note:'/pʊl/ is to pull something; /puːl/ is to swim in'},
  // ── TH sounds ──
  {a:'Think',b:'Sink',pa:'/θɪŋk/',pb:'/sɪŋk/',note:'TH /θ/ vs /s/ — tongue between teeth for TH!'},
  {a:'Three',b:'Free',pa:'/θriː/',pb:'/friː/',note:'TH /θ/ vs /f/ — do not let your teeth touch your lip for TH'},
  {a:'This',b:'Dis',pa:'/ðɪs/',pb:'/dɪs/',note:'Voiced TH /ð/ vs /d/ — tongue between teeth, add voice'},
  {a:'Then',b:'Den',pa:'/ðen/',pb:'/den/',note:'Voiced TH /ð/ vs /d/ — feel the buzz on your tongue for /ð/'},
  // ── W vs V ──
  {a:'Wine',b:'Vine',pa:'/waɪn/',pb:'/vaɪn/',note:'/w/ vs /v/ — round lips for W; top teeth on lower lip for V'},
  {a:'Worse',b:'Verse',pa:'/wɜːrs/',pb:'/vɜːrs/',note:'/w/ vs /v/ — crucial difference in meaning!'},
  // ── B vs P ──
  {a:'Bad',b:'Pad',pa:'/bæd/',pb:'/pæd/',note:'/b/ voiced vs /p/ unvoiced — feel your throat vibrate for /b/'},
  {a:'Buy',b:'Pie',pa:'/baɪ/',pb:'/paɪ/',note:'/b/ vs /p/ — add a puff of air with /p/'},
  // ── Short vowels ──
  {a:'Bed',b:'Bad',pa:'/bed/',pb:'/bæd/',note:'/e/ vs /æ/ — open your mouth much wider for /æ/'},
  {a:'Pen',b:'Pan',pa:'/pen/',pb:'/pæn/',note:'/e/ vs /æ/ — "I need a new pen/pan" — very different!'},
  // ── Final consonants ──
  {a:'Half',b:'Have',pa:'/hɑːf/',pb:'/hæv/',note:'/f/ (unvoiced) vs /v/ (voiced) at end of word'},
  {a:'Safe',b:'Save',pa:'/seɪf/',pb:'/seɪv/',note:'/f/ vs /v/ — add voice vibration for /v/ at the end'},
  // ── L vs R ──
  {a:'Light',b:'Right',pa:'/laɪt/',pb:'/raɪt/',note:'/l/ vs /r/ — tongue touches roof for /l/; curls back for /r/'},
  {a:'Collect',b:'Correct',pa:'/kəˈlekt/',pb:'/kəˈrekt/',note:'/l/ vs /r/ — a famous Portuguese speaker challenge!'},
];

const TONGUE_TWISTERS = [
  {text:'She sells seashells by the seashore.',note:'Focus on /s/ vs /ʃ/ (sh) — two distinct sounds!'},
  {text:'Peter Piper picked a peck of pickled peppers.',note:'Perfect /p/ practice — explosive consonant bursts'},
  {text:'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',note:'Master the /w/, /tʃ/ and /ʊ/ sounds'},
  {text:'The thirty-three thieves thought that they thrilled the throne throughout Thursday.',note:'Pure TH /θ/ workout — go slow, tongue between teeth!'},
  {text:'Red lorry, yellow lorry, red lorry, yellow lorry.',note:'The dreaded /r/ and /l/ combination — speed it up!'},
  {text:'I scream, you scream, we all scream for ice cream.',note:'Fun diphthong and consonant cluster practice'},
  {text:"Whether the weather is cold or whether the weather is hot, we'll be together whatever the weather, whether we like it or not.",note:'Master /w/, /ð/ (TH), and /e/ sounds all at once'},
  {text:'Six slippery snails slid slowly seaward.',note:'Challenge your /s/, /sl/ and /sn/ clusters'},
  {text:'Unique New York, unique New York, you know you need unique New York.',note:'/juː/ vs /njuː/ — feel the difference in your lips!'},
  {text:'Betty Botter bought some butter but the butter Betty bought was bitter.',note:'Master /b/, short /ʌ/ and /ɪ/ vowels'},
  {text:'I thought I thought of thinking of thanking you.',note:'Intensive TH /θ/ practice with past tense forms'},
  {text:'The big black bug bled blue-black blood.',note:'Voiced /b/, /l/ clusters and vowel contrasts'},
  {text:'Can you can a can as a canner can can a can?',note:'Perfect for /k/ sounds and the modal verb CAN'},
  {text:'Fresh French fried fish and chips from the fish and chip shop.',note:'/f/, /tʃ/ and consonant clusters — order this at speed!'},
];

const DIFFICULT_SOUNDS = [
  {sound:'TH /θ/ (unvoiced)',eg:'think, three, throat, bath, truth, both',tip:'Put your tongue TIP gently between your upper and lower teeth. Blow air through. NO vibration in your throat! Try in a mirror — you should see your tongue.',wrong:'Portuguese speakers say /t/ or /s/ instead. "sink" instead of "think"; "free" instead of "three". Practise: put your finger between your teeth and say "ssss" — that is TH!'},
  {sound:'TH /ð/ (voiced)',eg:'this, that, the, breathe, father, together',tip:'Same tongue position as /θ/ — between your teeth — BUT add voice vibration. Put your hand on your throat and feel the buzz! It should tickle your tongue.',wrong:'Often sounds like /d/. "dis" instead of "this", "dey" instead of "they". The key difference: /ð/ = buzz + tongue between teeth. /d/ = tongue behind upper teeth, no exposure.'},
  {sound:'W /w/',eg:'wine, water, word, work, away, well, one, what',tip:'Start with very rounded lips, as if about to say /uː/. Then quickly open and move into the vowel. Keep it short and smooth — it is a GLIDE sound, not a consonant like /v/.',wrong:'Many Portuguese speakers say /v/ instead. "vine" for "wine", "wery" sounds like "very". Lips should NEVER touch teeth for /w/. Round them like a kiss!'},
  {sound:'V /v/',eg:'very, voice, live, love, never, over, five, brave',tip:'Your UPPER front teeth must rest lightly on your LOWER lip. Then push air and add vibration. Feel the tickle where teeth meet lip! Hold it: "vvvvv".',wrong:'Often confused with /b/ (both lips together). "berry" instead of "very". Keep your UPPER teeth on your LOWER lip for /v/ — one lip stays free. Never close both lips!'},
  {sound:'H /h/',eg:'hello, happy, hold, have, who, behind, hotel, huge',tip:'Simply breathe out gently, as if fogging up a mirror. No vibration. The H is light and airy. Do not block your throat or add tension. Just an open breathe before the vowel.',wrong:'Portuguese speakers often drop the H. "ello" instead of "hello". In English, H must be heard — except in: hour, honest, heir, herb (British). Practise: breathe before every H word.'},
  {sound:'R /r/',eg:'red, right, run, three, drive, break, sorry, career',tip:'Curl your tongue tip slightly backward — it should NOT touch anything! Round your lips slightly. The English R is smooth and retroflex, not a trill. Think of the "er" in butter.',wrong:'Trilling like Portuguese/Spanish R sounds very foreign in English. English R is a smooth glide. Practise: say "butter" slowly — the middle sound is an English R! "buh-R-er"'},
  {sound:'Short /ɪ/ vs Long /iː/',eg:'/ɪ/: bit, sit, fill, ship, dinner | /iː/: beat, seat, feel, sheep, seen',tip:'For /ɪ/: relax your lips, mouth slightly open, NO tension. For /iː/: spread lips wide like smiling, hold it LONGER. The LENGTH and TENSION both matter.',wrong:'"I want to sit" vs "I want to seat" — very different meanings! "ship" vs "sheep" changes the word. Relax for short /ɪ/; smile wide and hold for long /iː/.'},
  {sound:'Schwa /ə/ — the neutral vowel',eg:'about, the, a, of, to, from, teacher, butter, perhaps',tip:'The schwa /ə/ is the most common sound in English! It is a very SHORT, RELAXED, central vowel — your tongue and lips do nothing. It appears in EVERY unstressed syllable.',wrong:'Learners stress every syllable equally. "About" should be /əˈbaʊt/ — first syllable is barely there! Every time you see an unstressed vowel, reduce it to /ə/. This is what makes English sound natural.'},
  {sound:'Short /æ/',eg:'cat, man, have, bad, plan, family, that, can',tip:'This is the most OPEN front vowel in English. Drop your jaw DOWN and push your tongue forward. Spread lips slightly. It sounds exaggerated — but that is correct!',wrong:'Many learners say /e/ instead. "pen" and "pan" should NOT sound the same. Open your mouth MUCH wider for /æ/. Hold a mirror — your mouth should be clearly open.'},
  {sound:'/ŋ/ (NG ending)',eg:'sing, ring, king, wrong, long, going, thinking, running',tip:'The /ŋ/ is made at the BACK of your throat, with the back of your tongue touching the soft palate. Your lips stay OPEN. No /g/ sound follows in words like "sing", "ring".',wrong:'Many say /n/ instead of /ŋ/, or add an extra /g/ sound: "singg". In -ING endings (going, running, thinking), you should hear /ŋ/ — practise by humming with mouth open.'},
  {sound:'/dʒ/ vs /ʒ/',eg:'/dʒ/: job, judge, age, journey | /ʒ/: measure, vision, pleasure, genre',tip:'/dʒ/ is EXPLOSIVE — like D + ZH combined, it stops then releases (like "d-zh"). /ʒ/ is a SMOOTH continuous buzz — like the French J. Feel the difference: "job" (stop+release) vs "pleasure" (smooth buzz).',wrong:'Mixing these sounds unnatural. "genre" (borrowed from French) has /ʒ/, while "gym" and "jump" have /dʒ/. Practise: "judge" has TWO /dʒ/ sounds. "Asia" has /ʒ/ in the middle.'},
  {sound:'Final Consonants',eg:'stopped /t/, robbed /d/, wanted /ɪd/ | cats /s/, dogs /z/, buses /ɪz/',tip:'English REQUIRES final consonants to be fully pronounced! Past -ED: say /t/ after unvoiced sounds (walked, laughed), /d/ after voiced sounds (played, lived), /ɪd/ after T or D (wanted, needed).',wrong:'Dropping final consonants is the clearest marker of a non-native accent. "stop" vs "stopped", "cat" vs "cats" — endings carry grammar. Practise: exaggerate final consonants, especially /t/, /d/, /s/, /z/.'},
  {sound:'Stress & Word Rhythm',eg:'PHOtograph → phoTOgraphy → photoGRAPHic',tip:'English is STRESS-TIMED: stressed syllables are LOUD, LONG and CLEAR; unstressed syllables are SHORT, QUIET and REDUCED. Beat your fist on the table on stressed syllables to feel the rhythm.',wrong:'Reading every syllable with equal stress sounds very foreign. "I WANT TO GO" should feel like "I WANNA go" in fast natural speech. Stressed beats stay clear; everything else reduces between them.'},
  {sound:'Connected Speech & Linking',eg:'want to→wanna | going to→gonna | pick it up→pickit-up',tip:'In natural fast speech, words LINK together. Final consonant + initial vowel: "pick it up" → "pickit-up". T between vowels often becomes D: "better" → "bedder". Practise listening to authentic spoken English.',wrong:'Speaking each word separately as if reading aloud sounds robotic. "I am going to eat" → natural: "I\'m gonna eat". This is NOT slang — it is how native speakers naturally connect sounds. You should understand AND produce it.'},
];
