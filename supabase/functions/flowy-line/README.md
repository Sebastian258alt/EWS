# flowy-line

Gera **uma** frase curta e imprevisível para o balão de fala do Flowy,
via Gemini. É a peça de backend que falta para o `js/flowy-ai.js`
(`window.FlowyAI`) funcionar — sem ela, o Flowy continua a funcionar
normalmente, só que sempre com as frases estáticas de `flowy.js`.

## Deploy

```bash
supabase functions deploy flowy-line
```

## Secrets necessários

Usa a **mesma** variável já configurada para a função `gemini-chat`:

```
GEMINI_API_KEY
```

Se `gemini-chat` já está deployada e a funcionar, o secret já deve estar
disponível ao nível do projeto — não precisas de o definir outra vez.
Caso contrário:

```bash
supabase secrets set GEMINI_API_KEY=xxxxxxxx
```

## Contrato (chamado por `js/flowy-ai.js`)

**Request**
```json
{
  "key": "idle",
  "lang": "pt",
  "fallback": "texto estático atual, usado como referência de tom/tamanho",
  "extra": { "tab": "home" }
}
```

**Response (sucesso)**
```json
{ "line": "frase nova gerada pela IA" }
```

**Response (sem melhor resposta / erro)**
```json
{ "line": null }
```
ou HTTP 4xx/5xx — o cliente (`flowy-ai.js`) trata qualquer erro, timeout
(1.8s) ou resposta vazia da mesma forma: devolve `null` e o `flowy.js`
mantém o texto estático que já estava no ecrã. Nunca bloqueia nem
rebenta a UI.

## Por que uma função à parte de `gemini-chat`?

`gemini-chat` foi feita para conversas (histórico, autenticação,
"modes"). O Flowy só precisa de uma linha curta e sem estado, o mais
depressa possível — por isso tem a sua própria função, mais pequena e
mais barata, com um prompt/orçamento de output minúsculo (≤60 tokens)
e `temperature` alta para máxima imprevisibilidade.
