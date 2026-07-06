// ═══════════════════════════════════════════════════════
//  EnglishFlow v2.0 — js/data/b1/unit10.js
// ═══════════════════════════════════════════════════════
// Unit ID: u6i  |  CEFR: B1
// English for Mozambique — Local Context & Global English

const UNITS_B1_UNIT10 = [
  {
    id:'u6i', cefr:'B1', title:'English for Mozambique', titlePt:'Inglês para Moçambique',
    desc:'English skills rooted in the Mozambican context 🇲🇿',
    descPt:'Competências em inglês enraizadas no contexto moçambicano 🇲🇿',
    color:'#e65100', icon:'🇲🇿', premium:true,
    lessons:[
      {id:'l6i1', title:'Describing Mozambique', titlePt:'Descrever Moçambique', icon:'🗺️', xp:25, learn:{
        explanation:{
          en:'Talking about your country in English is a powerful skill. Key vocabulary: natural resources (resources naturais), coastline (litoral), landlocked/coastal nation, province (província), ethnic diversity (diversidade étnica), official language (língua oficial), developing country, GDP, tourism.',
          pt:'Falar sobre o teu país em inglês é uma competência poderosa. Vocabulário-chave: natural resources (recursos naturais), coastline (litoral), province (província), ethnic diversity (diversidade étnica), official language (língua oficial), developing country, GDP, tourism.'
        },
        examples:[
          {en:'Mozambique is a coastal nation in southeastern Africa.', pt:'Moçambique é uma nação costeira no sudeste de África.'},
          {en:'The country is rich in natural resources, including coal, gas, and minerals.', pt:'O país é rico em recursos naturais, incluindo carvão, gás e minerais.'},
          {en:'Maputo is the capital and the most populous city.', pt:'Maputo é a capital e a cidade mais populosa.'},
        ],
        practice:[
          {q:'"Coastal" means:', opts:['landlocked','near the ocean/sea','mountainous','rural'], ans:1, exp:'"Coastal" = near or along the coast/sea. Mozambique has a long Indian Ocean coastline.'},
          {q:'"Natural resources" are:', opts:['man-made things','materials from nature (minerals, gas, coal)','tourist attractions','cultural traditions'], ans:1, exp:'"Natural resources" = materials found in nature: coal, gas, minerals, water, timber.'},
        ],
      }, qs:[
        {q:'How many provinces does Mozambique have?',opts:['8','10','11','13'],ans:2,exp:'Mozambique has 11 provinces. The capital Maputo is also a city-province.'},
        {q:'"Mozambique borders ___ countries."',opts:['3','5','6','7'],ans:2,exp:'Mozambique borders 6 countries: Tanzania, Malawi, Zambia, Zimbabwe, South Africa, and Eswatini.'},
        {q:'"Língua oficial" in English is:',opts:['mother tongue','national language','official language','local language'],ans:2,exp:'"Official language" = língua oficial. Portuguese is the official language of Mozambique.'},
        {q:'"The GDP of Mozambique is growing." GDP means:',opts:['government development plan','gross domestic product','general development policy','geographic distribution plan'],ans:1,exp:'"GDP" = Gross Domestic Product = the total value of goods and services produced.'},
        {q:'Mozambique is famous for its:',opts:['mountains and snow','Indian Ocean coastline and marine biodiversity','desert climate','cold winters'],ans:1,exp:'Mozambique is known for its stunning Indian Ocean coastline, beaches, and marine life.'},
      ]},
      {id:'l6i2', title:'Talking About African Culture', titlePt:'Falar sobre a Cultura Africana', icon:'🎭', xp:25, learn:{
        explanation:{
          en:'Sharing your culture in English is valuable. Vocabulary: tradition (tradição), custom (costume), ceremony (cerimónia), ancestor (antepassado), community (comunidade), ubuntu (spirit of shared humanity), indigenous (indígena), oral tradition (tradição oral), folklore, lobolo (bride price), initiation rites.',
          pt:'Partilhar a tua cultura em inglês é valioso. Vocabulário: tradition, custom, ceremony, ancestor (antepassado), community, ubuntu (espírito de humanidade partilhada), indigenous (indígena), oral tradition (tradição oral), folklore, lobolo, initiation rites (ritos de iniciação).'
        },
        examples:[
          {en:'In many Mozambican cultures, the lobolo is an important tradition.', pt:'Em muitas culturas moçambicanas, o lobolo é uma tradição importante.'},
          {en:'Oral tradition was how stories and history were passed down before writing.', pt:'A tradição oral foi a forma como as histórias e a história foram transmitidas antes da escrita.'},
          {en:'The concept of ubuntu teaches that a person exists through others.', pt:'O conceito de ubuntu ensina que uma pessoa existe através dos outros.'},
        ],
        practice:[
          {q:'"Oral tradition" means:', opts:['written stories','passing knowledge through speech and storytelling','modern music','digital media'], ans:1, exp:'"Oral tradition" = knowledge, history, and stories passed verbally from generation to generation.'},
          {q:'"Ancestor" means:', opts:['a future descendant','a very old relative from past generations','a neighbour','a community leader'], ans:1, exp:'"Ancestor" = antepassado — a person from whom you are descended.'},
        ],
      }, qs:[
        {q:'"Ubuntu" is best described as:',opts:['a type of food','a philosophy of shared humanity and community','a traditional dance','a language'],ans:1,exp:'"Ubuntu" = "I am because we are" — a southern African philosophy of community and shared humanity.'},
        {q:'"Indigenous" means:',opts:['foreign','modern','originating naturally from a place','recently arrived'],ans:2,exp:'"Indigenous" = originating naturally from a particular region. Indigenous cultures = culturas originárias.'},
        {q:'"A coming-of-age ceremony" is:',opts:['a birth celebration','an initiation/transition ritual marking the move from childhood to adulthood','a wedding','a funeral'],ans:1,exp:'"Coming-of-age" = transition to adulthood. Many Mozambican cultures have important initiation ceremonies.'},
        {q:'How do you describe a traditional dance in English?',opts:['We have a dance from our region called [name]. It is performed during [occasion] and represents [meaning].','Dancing.','It\'s traditional.','We dance sometimes.'],ans:0,exp:'A good description gives the NAME, OCCASION, and MEANING — this makes your answer rich and interesting!'},
        {q:'"Passed down through generations" means:',opts:['destroyed by time','transmitted from parents/grandparents to children over many years','invented recently','forgotten'],ans:1,exp:'"Passed down through generations" = transmitted from older to younger family members across time.'},
      ]},
      {id:'l6i3', title:'Formal Letter Writing', titlePt:'Escrita de Cartas Formais', icon:'📄', xp:30, learn:{
        explanation:{
          en:'Formal letter structure: Your address (top right) → Date → Recipient\'s address (left) → Salutation (Dear Sir/Madam, / Dear Mr/Ms [Name],) → Opening paragraph (purpose) → Body paragraphs → Closing paragraph → Sign-off (Yours faithfully [if no name] / Yours sincerely [if name known]) → Signature.',
          pt:'Estrutura de carta formal: Seu endereço (canto superior direito) → Data → Endereço do destinatário (esquerda) → Saudação (Dear Sir/Madam, / Dear Mr/Ms [Name],) → Parágrafo de abertura (propósito) → Parágrafos do corpo → Parágrafo de fecho → Despedida (Yours faithfully / Yours sincerely) → Assinatura.'
        },
        examples:[
          {en:'I am writing to formally apply for the position of...', pt:'Escrevo para me candidatar formalmente ao cargo de...'},
          {en:'I would be grateful if you could provide further information regarding...', pt:'Ficaria grato se pudesse fornecer mais informações sobre...'},
          {en:'I trust this matter will receive your prompt attention.', pt:'Confio que este assunto receberá a vossa atenção imediata.'},
        ],
        practice:[
          {q:'Use "Yours faithfully" when:', opts:['you know the person\'s name','you don\'t know the person\'s name (Dear Sir/Madam)','emailing a friend','texting'], ans:1, exp:'"Yours faithfully" = Dear Sir/Madam (name unknown). "Yours sincerely" = Dear Mr/Ms [Name] (name known).'},
          {q:'"I would be grateful if..." is used to:', opts:['complain','make a polite request','give information','apologise'], ans:1, exp:'"I would be grateful if..." = very polite way to make a formal request.'},
        ],
      }, qs:[
        {q:'When you don\'t know the recipient\'s name, you write:',opts:['Dear Friend,','Dear Person,','Dear Sir/Madam,','Hello there,'],ans:2,exp:'"Dear Sir/Madam," — standard formal opening when you don\'t know the name.'},
        {q:'The sign-off for "Dear Mr. Costa" is:',opts:['Yours faithfully,','Best wishes,','Cheers,','Yours sincerely,'],ans:3,exp:'"Yours sincerely" when you know the name. "Yours faithfully" when you don\'t.'},
        {q:'"I am writing with reference to your advertisement dated..." means:',opts:['I saw your ad and I\'m responding to it','I am writing for no reason','I disagree with your advertisement','I am not interested'],ans:0,exp:'"With reference to" = about / regarding. Tells the reader why you are writing.'},
        {q:'Which paragraph states WHY you are writing?',opts:['The last paragraph','The opening paragraph','The sign-off','The address'],ans:1,exp:'The OPENING paragraph states your PURPOSE: "I am writing to apply for / enquire about / complain about..."'},
        {q:'Which is the most formal expression?',opts:['Can you help me?','Gimme the info.','I would appreciate your assistance in this matter.','Let me know.'],ans:2,exp:'"I would appreciate your assistance in this matter." — formal, polite, professional.'},
      ]},
      {id:'l6i4', title:'CVs & Job Applications', titlePt:'CVs e Candidaturas a Emprego', icon:'📋', xp:30, learn:{
        explanation:{
          en:'A CV (Curriculum Vitae) should include: Personal details → Personal statement → Work experience (most recent first) → Education → Skills → References. Key phrases: "I am currently working as..." / "My responsibilities include..." / "I have [X] years of experience in..." / "I am proficient in..."',
          pt:'Um CV deve incluir: Dados pessoais → Declaração pessoal → Experiência profissional (mais recente primeiro) → Formação → Competências → Referências. Frases-chave: "I am currently working as..." / "My responsibilities include..." / "I have [X] years of experience in..."'
        },
        examples:[
          {en:'I have five years of experience in project management.', pt:'Tenho cinco anos de experiência em gestão de projectos.'},
          {en:'I am proficient in Microsoft Office and data analysis.', pt:'Tenho domínio do Microsoft Office e análise de dados.'},
          {en:'My responsibilities include coordinating a team of ten people.', pt:'As minhas responsabilidades incluem coordenar uma equipa de dez pessoas.'},
        ],
        practice:[
          {q:'"Proficient in" means:', opts:['learning','very skilled at','interested in','studying'], ans:1, exp:'"Proficient in" = very skilled at, competent in. "I am proficient in English and French."'},
          {q:'"References available upon request" means:', opts:['I have no references','I refuse to give references','I can provide references if asked','My references are included'], ans:2, exp:'It means: "If you want references, ask me and I will provide them."'},
        ],
      }, qs:[
        {q:'Work experience in a CV is listed:',opts:['oldest first','alphabetically','most recent first','randomly'],ans:2,exp:'Most recent FIRST — reverse chronological order is standard for CVs.'},
        {q:'"I have a track record of..." means:',opts:['I have no experience','I have a history of proven results','I am just starting','I have bad results'],ans:1,exp:'"Track record" = history of proven achievements or results.'},
        {q:'"Seeking a challenging role in..." means:',opts:['I want an easy job','I am looking for a demanding and stimulating position','I am not sure what I want','I want to retire'],ans:1,exp:'"Challenging role" = a demanding, stimulating position that will push you to grow.'},
        {q:'Which best describes a "skill" on a CV?',opts:['Team player, fluent in English, proficient in Excel','I am nice and friendly','I enjoy weekends','I have a family'],ans:0,exp:'Skills = specific abilities: languages, software, technical skills, soft skills (team player, communicator).'},
        {q:'"Coordinated cross-functional teams" means:',opts:['worked alone','managed teams from different departments working together','played sport','travelled for work'],ans:1,exp:'"Cross-functional teams" = teams from different departments working together on a shared goal.'},
      ]},
      {id:'l6i5', title:'Development & Environment', titlePt:'Desenvolvimento e Meio Ambiente', icon:'🌱', xp:30, learn:{
        explanation:{
          en:'Important global topics you may discuss in English: sustainable development (desenvolvimento sustentável), climate change (alterações climáticas), deforestation (desflorestação), renewable energy (energias renováveis), food security (segurança alimentar), infrastructure (infra-estrutura), NGO, foreign investment, poverty alleviation.',
          pt:'Tópicos globais que podes discutir em inglês: sustainable development, climate change (alterações climáticas), deforestation (desflorestação), renewable energy (energias renováveis), food security (segurança alimentar), infrastructure (infra-estrutura), NGO, foreign investment, poverty alleviation.'
        },
        examples:[
          {en:'Climate change is affecting rainfall patterns across southern Africa.', pt:'As alterações climáticas estão a afectar os padrões de chuva em toda a África austral.'},
          {en:'Mozambique is investing in renewable energy such as solar power.', pt:'Moçambique está a investir em energias renováveis como a energia solar.'},
          {en:'Food security remains a challenge in rural areas.', pt:'A segurança alimentar continua a ser um desafio nas zonas rurais.'},
        ],
        practice:[
          {q:'"Renewable energy" is energy that:', opts:['runs out eventually','comes from sources that naturally replenish (sun, wind, water)','uses coal and gas','produces a lot of pollution'], ans:1, exp:'"Renewable" = naturally replenishes. Solar, wind, hydro = renewable. Coal, oil = non-renewable.'},
          {q:'"Food security" means:', opts:['having a food factory','reliable access to sufficient nutritious food','security guards in supermarkets','expensive food'], ans:1, exp:'"Food security" = everyone having reliable access to enough safe, nutritious food.'},
        ],
      }, qs:[
        {q:'"Deforestation" means:',opts:['planting trees','cutting down large areas of forest','protecting the environment','water conservation'],ans:1,exp:'"Deforestation" = large-scale cutting/clearing of forests. A major environmental concern.'},
        {q:'"Sustainable development" means:',opts:['developing quickly at any cost','meeting current needs without harming future generations\' ability to meet theirs','only using fossil fuels','stopping all development'],ans:1,exp:'"Sustainable development" = growth that meets TODAY\'S needs without harming FUTURE generations.'},
        {q:'"NGO" stands for:',opts:['National Government Organisation','Non-Governmental Organisation','Northern Global Office','Natural Gas Operation'],ans:1,exp:'"NGO" = Non-Governmental Organisation. Examples: Red Cross, Doctors Without Borders.'},
        {q:'"Poverty alleviation" means:',opts:['increasing poverty','ignoring poverty','reducing or eliminating poverty','studying poverty'],ans:2,exp:'"Alleviation" = reduction, relief. Poverty alleviation = efforts to reduce poverty.'},
        {q:'"Foreign investment" refers to:',opts:['money from local businesses','money from businesses/governments of other countries','investment in foreign cultures','tourism'],ans:1,exp:'"Foreign investment" = money invested in a country by foreign companies or governments.'},
      ]},
      {id:'l6i6', title:'English in the SADC Region', titlePt:'Inglês na Região da SADC', icon:'🌍', xp:25, learn:{
        explanation:{
          en:'English is the working language of SADC (Southern African Development Community). Key benefits: trading with South Africa, Zimbabwe, Zambia, Tanzania; reading contracts and legal documents; working in regional organisations and NGOs; access to international education and scholarships.',
          pt:'O inglês é a língua de trabalho da SADC (Comunidade de Desenvolvimento da África Austral). Benefícios: comércio com África do Sul, Zimbabwe, Zâmbia, Tanzânia; leitura de contratos e documentos legais; trabalho em organizações regionais e ONGs; acesso a educação e bolsas internacionais.'
        },
        examples:[
          {en:'The SADC region has a combined market of over 300 million people.', pt:'A região da SADC tem um mercado combinado de mais de 300 milhões de pessoas.'},
          {en:'English fluency opens doors to regional trade and investment.', pt:'A fluência em inglês abre portas ao comércio e investimento regional.'},
          {en:'Many international organisations in the region use English as their working language.', pt:'Muitas organizações internacionais na região usam o inglês como língua de trabalho.'},
        ],
        practice:[
          {q:'SADC stands for:', opts:['South Africa Development Council','Southern African Development Community','Southern African Democratic Countries','Sub-African Development Centre'], ans:1, exp:'SADC = Southern African Development Community — a regional economic community.'},
          {q:'"Working language" means:', opts:['a language for leisure','the language used officially for business and communication','a difficult language','a new language'], ans:1, exp:'"Working language" = the language officially used for business, meetings, and documents.'},
        ],
      }, qs:[
        {q:'Which of these is NOT a SADC member?',opts:['Mozambique','South Africa','Nigeria','Tanzania'],ans:2,exp:'"Nigeria" is NOT a SADC member — it is part of ECOWAS (West Africa). SADC covers Southern Africa.'},
        {q:'One major benefit of English in the SADC region is:',opts:['watching Hollywood films','communicating in regional trade and business','speaking to tourists only','learning American culture'],ans:1,exp:'English is the WORKING language of SADC — essential for regional trade, business, and diplomacy.'},
        {q:'"Cross-border trade" means:',opts:['trading within one city','trading between different countries','online shopping','local markets'],ans:1,exp:'"Cross-border trade" = trade between different countries. Very important in the SADC region.'},
        {q:'To work for a SADC regional organisation, you need:',opts:['only Portuguese','only Swahili','English and often French or Portuguese','no specific language'],ans:2,exp:'SADC has 16 members with many official languages. English is key, and French/Portuguese are also important.'},
        {q:'Learning English helps a Mozambican worker to:',opts:['only speak to tourists','access regional and global opportunities, education, and careers','forget Portuguese','speak only to South Africans'],ans:1,exp:'English skills dramatically expand career, educational, and business opportunities both regionally and globally.'},
      ]},
    ]
  }
];

(window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_B1_UNIT10);
