# Debug & Reorganização — Notas

## 1. Estrutura de pastas (novo)
```
EWS-fixed/
├── index.html              # app principal
├── admin.html               # painel admin legado (autónomo, password local)
├── auth-callback.html       # callback do popup OAuth do Google
├── manifest.json / site.webmanifest
├── service-worker.js        # tem de ficar na raiz (scope "/")
├── favicon.ico / .svg / -96x96.png / apple-touch-icon.png
├── css/
│   └── style.css
├── js/
│   ├── data.js, supabase-config.js, storage.js, progress.js,
│   │   app.js, auth.js, ui.js, chat.js, quiz.js, game.js, leaderboard.js
├── icons/
│   └── icon-72…512.png + web-app-manifest-192/512.png
└── admin/                   # mini-app admin novo (login Supabase)
    ├── index.html  (renomeado — tinha um caracter invisível no nome)
    ├── admin.css, admin.js, admin-utils.js
```

Todas as referências (`<script src>`, `<link href>`, cache do service worker) foram
atualizadas para os novos caminhos. Nenhuma linha de lógica foi alterada — só
caminhos de ficheiros. Confirmado por diff: todos os `.js` e `style.css` ficaram
byte-a-byte idênticos aos originais.

## 2. Ficheiros eliminados (lixo/duplicados, confirmados sem referências)
- `app1.js` — versão antiga e mais curta de `app.js` (faltava o registo do
  Service Worker). Nada no projecto o referenciava.
- `index2.html` — versão antiga de `index.html` (sem as tags PWA/manifest
  adicionadas no `PWA_FIXES.md`). Nada o referenciava.
- Nome de ficheiro corrompido em `admin/` (continha um caracter Unicode
  invisível antes de "index.html") — renomeado para `admin/index.html`.

## 3. Ficheiros mantidos (propositadamente)
- `admin.html` (raiz) e a pasta `admin/` representam DUAS versões do painel
  de administração em estados diferentes: a da raiz está completa e funcional
  (password local fixa "admin123", gera `custom-data.js` para download); a da
  pasta `admin/` é uma versão mais nova com login Supabase, mas o dashboard
  ainda não está implementado (tem um `// TODO` no `admin.js`). Mantive as
  duas porque nenhuma delas é "lixo" — são fases diferentes do mesmo recurso.
  Se quiseres, deixa-me saber qual deves manter e eu removo a outra.

## 4. Bug corrigido
- Faltava `id="luBtn"` no botão de "LEVEL UP" (`index.html`). O `quiz.js`
  tentava `document.getElementById('luBtn')` para actualizar o texto do
  botão ao subir de nível; sem o id, a chamada falhava silenciosamente
  (estava protegida por `if (luBtn)`, por isso nunca rebentou nada, mas o
  texto também nunca era forçado nesse momento). Corrigido sem alterar
  comportamento existente.

## 5. Verificação de segurança da reorganização
- `node --check` em todos os `.js` → sem erros de sintaxe.
- Todas as chaves do `STATIC_ASSETS` do `service-worker.js` apontam para
  ficheiros que existem.
- Todos os `src=`/`href=` do `index.html`, `admin.html`, `admin/index.html`
  e `auth-callback.html` apontam para ficheiros que existem.
- Versão da cache do Service Worker subida de `ews-v2` para `ews-v3` — isto
  é importante: força os utilizadores que já tinham a app instalada como PWA
  a apagar a cache antiga (com os caminhos antigos) e buscar tudo de novo
  com os caminhos corrigidos, evitando ecrãs em branco/erros 404 em telemóveis
  que já tinham a app instalada.

## 6. Coisas que reparei mas NÃO toquei (fora do âmbito "não partir nada")
- `index.html` carrega tanto `/manifest.json` como `/site.webmanifest` (dois
  `<link rel="manifest">`). Os dois ficheiros têm conteúdo idêntico, por isso
  não causa erro, só é redundante.
- `formatChatContent()` em `chat.js` insere o texto do chat via `innerHTML`
  sem escapar HTML primeiro. Na prática o histórico de chat não é sincronizado
  com o Supabase (não está na allowlist de `storage.js`), por isso o risco é
  baixo (auto-XSS local), mas fica registado caso queiras reforçar isto no
  futuro.
