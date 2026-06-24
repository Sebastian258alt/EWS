path = 'js/data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

lessons = [
  ('l10a',
   "Third Conditional (If + Past Perfect, would have + past participle) describes UNREAL past situations. It expresses what would have happened if the past had been different. Often used for regret.",
   "O Terceiro Condicional (If + Past Perfect, would have + particípio passado) descreve situações passadas IRREAIS. Expressa o que teria acontecido se o passado tivesse sido diferente. Usado para exprimir arrependimento.",
   [("If I had studied harder, I would have passed.",    "Se eu tivesse estudado mais, teria passado."),
    ("She would have called if she had known.",           "Ela teria ligado se tivesse sabido."),
    ("We wouldn't have been late if we had left earlier.","Não teríamos chegado atrasados se tivéssemos saído mais cedo.")],
   [("Third Conditional formula:", "['If+Present,will+verb','If+Past Simple,would+verb','If+Past Perfect,would have+PP','If+were,would+verb']", 2, "If + Past Perfect, would have + past participle."),
    ("'If I had known, I ___ helped you.'", "['will have','would have','had','should']", 1, "would have + past participle.")]),

  ('l10b',
   "Mixed Conditionals combine two different conditional types. Past condition + present result: 'If I had studied medicine, I would be a doctor now.' Present condition + past result: 'If I were richer, I would have bought it.'",
   "Os Condicionais Mistos combinam dois tipos de condicional diferentes. Condição passada + resultado presente: 'If I had studied medicine, I would be a doctor now.' Condição presente + resultado passado: 'If I were richer, I would have bought it.'",
   [("If I had taken that job, I would be in Paris now.", "Se eu tivesse aceite esse emprego, estaria em Paris agora."),
    ("If she were more careful, she wouldn't have broken it.", "Se ela fosse mais cuidadosa, não o teria partido."),
    ("He would be healthier now if he had exercised more.", "Ele estaria mais saudável agora se tivesse feito mais exercício.")],
   [("Past condition + present result uses:", "['If+Past Perfect,would have+PP','If+Past Perfect,would+verb','If+Present,will+verb','If+Past,would+verb']", 1, "If + Past Perfect → would + infinitive (present result)."),
    ("'If I were richer, I ___ bought that house.'", "['would buy','will buy','would have bought','had bought']", 2, "Present condition + past result = would have bought.")]),

  ('l10c',
   "Wish + Past Simple = unreal present wish: 'I wish I had more time.' Wish + Past Perfect = past regret: 'I wish I had studied harder.' Never use will directly after wish.",
   "Wish + Past Simple = desejo irreal no presente: 'I wish I had more time.' Wish + Past Perfect = arrependimento passado: 'I wish I had studied harder.' Nunca uses will directamente depois de wish.",
   [("I wish I had saved more money.", "Eu queria ter poupado mais dinheiro."),
    ("She wishes she could speak French.", "Ela queria poder falar francês."),
    ("I wish I hadn't eaten so much!", "Eu queria não ter comido tanto!")],
   [("'I wish I ___ to the party.' (past regret)", "['went','go','had gone','would go']", 2, "Past regret = wish + Past Perfect: had gone."),
    ("'I wish I ___ more time now.' (present wish)", "['have','had','had had','will have']", 1, "Present wish = wish + Past Simple: had.")]),

  ('l10d',
   "Inverted conditionals are formal alternatives: drop 'if' and swap subject and auxiliary. 'If I had known' becomes 'Had I known'. 'If I were you' becomes 'Were I you'. Common in formal writing.",
   "Os condicionais invertidos são alternativas formais: elimina 'if' e troca sujeito e auxiliar. 'If I had known' torna-se 'Had I known'. 'If I were you' torna-se 'Were I you'. Comuns na escrita formal.",
   [("Had I known you were coming, I would have cooked.", "Se eu soubesse que estavas a vir, teria cozinhado."),
    ("Were I you, I would accept the offer.", "Se eu fosse tu, aceitaria a oferta."),
    ("Should you need help, please call me.", "Se precisares de ajuda, liga-me.")],
   [("'Had I known' is the inversion of:", "['If I know','If I had known','If I would know','If I knew']", 1, "Had I known = If I had known."),
    ("'Were I you' is the inversion of:", "['If I was you','If I had been you','If I were you','If I am you']", 2, "Were I you = If I were you.")]),

  ('l10e',
   "Unless means 'if not': 'I won't go unless you come' = 'I won't go if you don't come.' Even if means the result happens regardless: 'I'll go even if it rains.' As long as means 'on the condition that'.",
   "Unless significa 'se não': 'I won't go unless you come' = 'I won't go if you don't come.' Even if significa que o resultado acontece independentemente: 'I'll go even if it rains.' As long as significa 'desde que'.",
   [("I won't leave unless you come with me.", "Eu não vou sair a menos que venhas comigo."),
    ("She'll pass even if she doesn't study much.", "Ela vai passar mesmo que não estude muito."),
    ("You can stay as long as you are quiet.", "Podes ficar desde que estejas sossegado.")],
   [("Unless means:", "['if also','if not','even if','as long as']", 1, "Unless = if not."),
    ("'Even if it rains, I will go.' This means:", "['I only go if it does not rain','The rain will not stop me','I might go','I will not go']", 1, "Even if = regardless of the condition.")]),

  ('l10f',
   "Quick summary: Zero = If+Present, Present (universal truth). First = If+Present, will+verb (real future). Second = If+Past, would+verb (unreal present). Third = If+Past Perfect, would have+PP (unreal past).",
   "Resumo rápido: Zero = If+Present, Present (verdade universal). First = If+Present, will+verb (futuro real). Second = If+Past, would+verb (irreal presente). Third = If+Past Perfect, would have+PP (irreal passado).",
   [("If water reaches 100 degrees, it boils. (Zero)", "Se a água atingir 100 graus, ferve. (Zero)"),
    ("If it rains, I will stay home. (First)", "Se chover, ficarei em casa. (First)"),
    ("If I had wings, I would fly. (Second)", "Se eu tivesse asas, voaria. (Second)")],
   [("Which conditional is for REAL future possibilities?", "['Zero','First','Second','Third']", 1, "First Conditional = real future."),
    ("Which conditional expresses PAST regret?", "['Zero','First','Second','Third']", 3, "Third Conditional = unreal past.")]),

  ('l10g',
   "Conditionals appear in daily conversation: Zero for facts, First for real plans, Second for dreams, Third for regrets. Inverted forms like 'Should you need help' are used in formal writing.",
   "Os condicionais aparecem nas conversas do dia-a-dia: Zero para factos, First para planos reais, Second para sonhos, Third para arrependimentos. Formas invertidas como 'Should you need help' são usadas na escrita formal.",
   [("If you are tired, you should rest. (advice)", "Se estás cansado, deves descansar. (conselho)"),
    ("If I win the lottery, I'll buy a house. (First)", "Se eu ganhar na lotaria, comprarei uma casa. (First)"),
    ("If I were president, I would change things. (Second)", "Se eu fosse presidente, mudaria as coisas. (Second)")],
   [("'Should you need anything, call me.' This is:", "['First Conditional','Second Conditional','Inverted First Conditional','Zero Conditional']", 2, "Should you need = formal inversion of First Conditional."),
    ("'If I had left earlier, I wouldn't be late.' — Which type?", "['First','Second','Third or Mixed','Zero']", 2, "Past condition + present result = Mixed Conditional.")]),

  ('l10h',
   "Advanced practice: choose the right conditional by reading the full context. Is it real or unreal? Past, present, or future? Look for keywords: 'had' for Third, 'were' for Second, 'should' for formal inversion.",
   "Prática avançada: escolhe o condicional correcto lendo o contexto completo. É real ou irreal? Passado, presente ou futuro? Procura palavras-chave: 'had' para Third, 'were' para Second, 'should' para inversão formal.",
   [("Had she arrived earlier, she would have gotten a seat.", "Se ela tivesse chegado mais cedo, teria conseguido lugar."),
    ("Unless you apologise, I won't forgive you.", "A menos que peças desculpa, não te perdoarei."),
    ("Were it not for your help, I would have failed.", "Se não fosse a tua ajuda, eu teria falhado.")],
   [("'Had we known the truth, we ___ differently.'", "['would act','will act','would have acted','had acted']", 2, "Third Conditional inversion: would have acted."),
    ("'___ I you, I would think twice before accepting.'", "['If','Had','Were','Should']", 2, "Were I you = If I were you.")]),

  ('l11a',
   "Reported speech tells what someone said without their exact words. The main rule: move the tense one step back into the past. 'I am happy' becomes She said she WAS happy.",
   "O discurso indirecto diz o que alguém disse sem as suas palavras exactas. A regra principal: recua o tempo um passo para o passado. 'I am happy' torna-se She said she WAS happy.",
   [("Direct: 'I love English.' Reported: She said she loved English.", "Directo: 'I love English.' Indirecto: Ela disse que adorava inglês."),
    ("Direct: 'I am tired.' Reported: He said he was tired.", "Directo: 'I am tired.' Indirecto: Ele disse que estava cansado."),
    ("Direct: 'I will call.' Reported: She said she would call.", "Directo: 'I will call.' Indirecto: Ela disse que ligaria.")],
   [("In reported speech, Present Simple becomes:", "['Present Simple','Past Simple','Past Perfect','Future']", 1, "Present Simple becomes Past Simple."),
    ("'I am hungry.' She said she ___ hungry.", "['am','is','was','has been']", 2, "am becomes was.")]),

  ('l11b',
   "Each tense moves one step back: Present Simple to Past Simple. Present Continuous to Past Continuous. Present Perfect to Past Perfect. Past Simple to Past Perfect. Will becomes Would. Can becomes Could.",
   "Cada tempo recua um passo: Present Simple para Past Simple. Present Continuous para Past Continuous. Present Perfect para Past Perfect. Past Simple para Past Perfect. Will torna-se Would. Can torna-se Could.",
   [("'I am eating.' He said he was eating.", "'I am eating.' Ele disse que estava a comer."),
    ("'I have finished.' She said she had finished.", "'I have finished.' Ela disse que tinha terminado."),
    ("'I can help.' He said he could help.", "'I can help.' Ele disse que podia ajudar.")],
   [("'I will come.' She said she ___ come.", "['will','would','can','could']", 1, "Will becomes Would in reported speech."),
    ("'I have been waiting.' He said he ___ been waiting.", "['has','had','was','have']", 1, "Present Perfect becomes Past Perfect: had been waiting.")]),

  ('l11c',
   "Reported questions use statement word order — no inversion. Yes/No questions use 'if' or 'whether'. Wh- questions keep the question word: 'Where do you live?' becomes He asked me where I lived.",
   "As perguntas reportadas usam a ordem de afirmação — sem inversão. Perguntas Sim/Não usam 'if' ou 'whether'. Perguntas Wh- mantêm a palavra interrogativa: 'Where do you live?' torna-se He asked me where I lived.",
   [("'Are you coming?' She asked if I was coming.", "'Are you coming?' Ela perguntou se eu estava a vir."),
    ("'Where do you live?' He asked me where I lived.", "'Where do you live?' Ele perguntou-me onde eu vivia."),
    ("'Did you see it?' She asked whether I had seen it.", "'Did you see it?' Ela perguntou se eu o tinha visto.")],
   [("Yes/No reported questions use:", "['that','which','if or whether','what']", 2, "Use if or whether for Yes/No questions."),
    ("'What time is it?' He asked me what time ___.", "['is it','it is','it was','was it']", 2, "Statement order + tense backshift: it was.")]),

  ('l11d',
   "Commands in reported speech: TELL + object + TO + infinitive for commands. ASK + object + TO + infinitive for requests. NOT TO + infinitive for negatives. No tense shift needed.",
   "Ordens no discurso indirecto: TELL + objecto + TO + infinitivo para ordens. ASK + objecto + TO + infinitivo para pedidos. NOT TO + infinitivo para negativos. Não é necessária mudança de tempo.",
   [("'Sit down!' He told me to sit down.", "'Sit down!' Ele disse-me para me sentar."),
    ("'Please help me.' She asked me to help her.", "'Please help me.' Ela pediu-me para a ajudar."),
    ("'Don't be late!' He warned me not to be late.", "'Don't be late!' Ele avisou-me para não me atrasar.")],
   [("'Open the window!' She told me ___ the window.", "['open','to open','opening','opened']", 1, "Tell + object + TO + infinitive."),
    ("'Don't touch that!' He warned me ___ that.", "['to touch','not to touch','touching','not touching']", 1, "Negative: not to touch.")]),

  ('l11e',
   "Use specific reporting verbs: PROMISE for commitments, APOLOGISE for sorry, ADVISE for suggestions, WARN for danger, OFFER for voluntary help, EXPLAIN for reasons. They show the intent behind the words.",
   "Usa verbos de reporte específicos: PROMISE para compromissos, APOLOGISE para desculpas, ADVISE para sugestões, WARN para perigo, OFFER para ajuda voluntária, EXPLAIN para razões. Mostram a intenção por trás das palavras.",
   [("'I'm sorry I'm late.' She apologised for being late.", "'I'm sorry I'm late.' Ela pediu desculpa por ter chegado atrasada."),
    ("'I'll definitely be there.' He promised to be there.", "'I'll definitely be there.' Ele prometeu estar lá."),
    ("'You should rest.' The doctor advised me to rest.", "'You should rest.' O médico aconselhou-me a descansar.")],
   [("'I can help you.' He ___ to help me.", "['said','promised','offered','apologised']", 2, "Offered = voluntary help."),
    ("'Be careful!' She ___ me to be careful.", "['asked','told','warned','advised']", 2, "Warned = about danger.")]),

  ('l11f',
   "Review: tenses shift back one step. Questions use statement order plus if/whether. Commands use tell/ask + to + infinitive. Specific reporting verbs (promise, warn, advise, apologise) add meaning.",
   "Revisão: os tempos recuam um passo. Perguntas usam ordem de afirmação + if/whether. Ordens usam tell/ask + to + infinitivo. Verbos de reporte específicos (promise, warn, advise, apologise) adicionam significado.",
   [("'I have finished.' She said she had finished.", "'I have finished.' Ela disse que tinha terminado."),
    ("'Where are you going?' He asked where I was going.", "'Where are you going?' Ele perguntou para onde eu ia."),
    ("'Please don't leave.' She asked me not to leave.", "'Please don't leave.' Ela pediu-me para não sair.")],
   [("'I went to the shop.' He said he ___ to the shop.", "['went','goes','had gone','has gone']", 2, "Past Simple becomes Past Perfect: had gone."),
    ("'Will you help me?' She asked if I ___ help her.", "['will','would','can','could']", 1, "Will becomes Would in reported questions.")]),
]

def build_learn(en, pt, examples, practice):
    ex_lines = ',\n'.join(
        "          {{ en: '{}', pt: '{}' }}".format(e[0], e[1]) for e in examples
    )
    pr_lines = ',\n'.join(
        "          {{ q: '{}', opts: {}, ans: {}, exp: '{}' }}".format(p[0], p[1], p[2], p[3]) for p in practice
    )
    return (
        "        learn: {\n"
        "          explanation: {\n"
        "            en: '{}',\n".format(en) +
        "            pt: '{}'\n".format(pt) +
        "          },\n"
        "          examples: [\n"
        + ex_lines + "\n"
        "          ],\n"
        "          practice: [\n"
        + pr_lines + "\n"
        "          ]\n"
        "        },\n"
        "        qs: ["
    )

applied = []
missing = []

for item in lessons:
    lid = item[0]
    en, pt, examples, practice = item[1], item[2], item[3], item[4]
    learn_block = build_learn(en, pt, examples, practice)

    id_str = "        id: '{}',".format(lid)
    pos = content.find(id_str)
    if pos == -1:
        missing.append(lid)
        continue

    qs_pos = content.find("        qs: [", pos)
    if qs_pos == -1:
        missing.append(lid)
        continue

    between = content[pos:qs_pos]
    if 'learn:' in between:
        applied.append(lid + ':already')
        continue

    content = content[:qs_pos] + learn_block + content[qs_pos + len("        qs: ["):]
    applied.append(lid)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied:", applied)
print("Missing:", missing)
