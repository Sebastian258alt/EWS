# PWA Fixes — English With Sebastian

## Problemas corrigidos

### 1. `manifest.json` — Ícones inexistentes → CORRIGIDO
- Removidas referências a `/icons/icon-*.png` (pasta não existia)
- Substituído pelos ficheiros reais: `web-app-manifest-192x192.png` e `web-app-manifest-512x512.png`
- Cada tamanho agora tem 2 entradas separadas: `"purpose": "any"` e `"purpose": "maskable"`
- Adicionado campo `"scope": "/"`

### 2. `site.webmanifest` — Placeholder genérico → SINCRONIZADO
- Estava com `"name": "MyWebSite"` e cores brancas
- Agora é idêntico ao `manifest.json`

### 3. `service-worker.js` — Cache de ficheiros inexistentes → CORRIGIDO
- Removidos `/icons/icon-*.png` do `STATIC_ASSETS`
- Adicionados os ícones reais (`web-app-manifest-*.png`)
- Adicionado `try/catch` no install para não bloquear o SW por assets opcionais
- Adicionado caching dinâmico no fetch handler
- Adicionado `anthropic.com` à lista de exclusões de cache
- Versão atualizada: `ews-v1` → `ews-v2` (força reinstalação)

### 4. `index.html` — Referências PWA incompletas → MELHORADO
- Adicionado `<link rel="manifest" href="/site.webmanifest">`
- Adicionado `<meta name="mobile-web-app-capable" content="yes">`
- Adicionado `<meta name="apple-mobile-web-app-status-bar-style">`
- Melhorado registo do SW com scope explícito e logging de updates

## Ficheiros a criar (opcional mas recomendado)
Para ter mais tamanhos de ícone e melhorar o score no Lighthouse:
- Criar pasta `/icons/` com ícones 72, 96, 128, 144, 152, 192, 384, 512px
- Ferramenta gratuita: https://realfavicongenerator.net/
