// ═══════════════════════════════════════════════════════════
//  🤖 CHAT.JS — AI Tutor Interface with Supabase Edge Function (Gemini)
//  English With Sebastian v3.0
// ═══════════════════════════════════════════════════════════

let chatHistory = [];
let isTyping = false;
let chatMode = 'normal';
let lastFailedMessage = null;

function initChat() {
  window._chatInitDone = true;
  const u = getCU();
  chatHistory = (u && u.chatHistory) ? u.chatHistory.slice(-30) : [];
  renderQuickPrompts();
  renderChatHistory();
  setupChatInput();
}

function renderQuickPrompts() {
  const el = document.getElementById('aiChips');
  if (!el) return;
  const prompts = AI_QUICK_PROMPTS[currentLang] || AI_QUICK_PROMPTS.en;
  el.innerHTML = prompts.map(p =>
    `<button class="ai-chip" onclick="sendChip(this)" data-text="${p.text}">
      <span>${p.icon}</span> ${p.text}
    </button>`
  ).join('');
}

function sendChip(btn) {
  const text = btn.dataset.text || btn.textContent.trim().replace(/^[\S]\s/,'');
  document.getElementById('chatInput').value = text;
  sendChat();
}

function setupChatInput() {
  const inp = document.getElementById('chatInput');
  if (!inp) return;
  inp.addEventListener('input', () => autoResize(inp));
  inp.addEventListener('keydown', handleChatKey);
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
}

async function sendChat() {
  if (isTyping) return;
  const inp = document.getElementById('chatInput');
  if (!inp) return;
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = ''; autoResize(inp);
  addMessage('user', msg);
  SFX.click();
  const u = getCU();
  if (u) { u.aiChats = (u.aiChats || 0) + 1; saveCU(u); checkAchs(); }
  
  const chips = document.getElementById('aiChips');
  if (chips && chatHistory.filter(m => m.role === 'user').length >= 1) {
    chips.style.display = 'none';
  }
  
  await callGeminiAPI(msg);
}

async function callGeminiAPI(userMessage) {
  showTypingIndicator();
  
  const u = getCU();
  if (!u) {
    hideTypingIndicator();
    addMessage('assistant', '⚠️ You need to be logged in to use the AI tutor.');
    return;
  }
  
  // Prepare authentication token
  let authToken = null;
  if (u.authProvider === 'google') {
    // For Google users, try to get Supabase JWT
    if (window.getSupabaseToken) {
      authToken = await window.getSupabaseToken();
    }
  } else {
    // Local user – use sessionToken (if exists)
    authToken = u.sessionToken || null;
  }
  
  try {
    // Call the Supabase Edge Function
    const { data, error } = await window.supabaseClient.functions.invoke('gemini-chat', {
      body: {
        userId: u.un,
        mode: chatMode,
        message: userMessage,
        sessionToken: authToken,
      }
    });
    
    if (error) throw new Error(error.message);
    
    hideTypingIndicator();
    addMessage('assistant', data.reply);
    lastFailedMessage = null;
  } catch (err) {
    console.error('Edge Function error:', err);
    hideTypingIndicator();
    lastFailedMessage = { role: 'user', content: userMessage, mode: chatMode };
    const errorMsg = err.message.includes('Failed to fetch') || err.message.includes('NetworkError')
      ? '❌ Network error. Please check your connection and try again.'
      : '❌ AI service unavailable. Tap the retry button below.';
    addMessage('assistant', errorMsg);
    addRetryButton();
  }
  scrollChat();
}

function addRetryButton() {
  const win = document.getElementById('chatWin');
  if (!win) return;
  const existing = document.getElementById('chat-retry-btn');
  if (existing) existing.remove();
  const div = document.createElement('div');
  div.id = 'chat-retry-btn';
  div.className = 'chat-retry-container';
  div.innerHTML = `<button class="chat-retry-btn" onclick="retryLastMessage()">⟳ Retry last message</button>`;
  win.appendChild(div);
  scrollChat();
}

async function retryLastMessage() {
  if (!lastFailedMessage) return;
  const retryMsg = lastFailedMessage.content;
  const retryMode = lastFailedMessage.mode;
  // Remove the last two messages (user's failed request + error message)
  const win = document.getElementById('chatWin');
  const lastMsgs = win.querySelectorAll('.chat-msg');
  if (lastMsgs.length >= 2) {
    lastMsgs[lastMsgs.length - 1].remove(); // error message
    lastMsgs[lastMsgs.length - 2].remove(); // user message (the one that failed)
  }
  const retryBtn = document.getElementById('chat-retry-btn');
  if (retryBtn) retryBtn.remove();
  // Restore mode
  chatMode = retryMode;
  await callGeminiAPI(retryMsg);
}

function clearChat() {
  SFX.click();
  chatHistory = [];
  const u = getCU();
  if (u) { u.chatHistory = []; saveCU(u); }
  renderChatHistory();
  const chips = document.getElementById('aiChips');
  if (chips) chips.style.display = 'flex';
  showToast(currentLang === 'pt' ? '🗑️ Conversa apagada!' : '🗑️ Chat cleared!');
}

function addMessage(role, content) {
  const msg = { role, content, ts: Date.now() };
  chatHistory.push(msg);
  const u = getCU();
  if (u) { u.chatHistory = chatHistory.slice(-30); saveCU(u); }
  appendMessageEl(msg);
  scrollChat();
}

function appendMessageEl(msg) {
  const win = document.getElementById('chatWin');
  if (!win) return;
  const isUser = msg.role === 'user';
  const timeStr = new Date(msg.ts).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const div = document.createElement('div');
  div.className = `chat-msg ${isUser ? 'chat-user' : 'chat-ai'}`;
  div.innerHTML = `
    ${!isUser ? `<div class="chat-av-ai">🤖</div>` : ''}
    <div class="chat-bubble-wrap">
      <div class="chat-bubble">${formatChatContent(msg.content)}</div>
      <div class="chat-ts">${timeStr}</div>
    </div>
    ${isUser ? `<div class="chat-av-user">${(getCU()?.name || 'U')[0].toUpperCase()}</div>` : ''}
  `;
  win.appendChild(div);
  requestAnimationFrame(() => div.classList.add('visible'));
}

function renderChatHistory() {
  const win = document.getElementById('chatWin');
  if (!win) return;
  win.innerHTML = '';
  if (chatHistory.length === 0) {
    win.innerHTML = `<div class="chat-empty">
      <div class="chat-empty-icon">🤖</div>
      <div>${currentLang === 'pt' ? 'Olá! Sou o teu tutor de IA. Pergunta qualquer coisa sobre inglês!' : "Hi! I'm your AI tutor. Ask me anything about English!"}</div>
    </div>`;
    return;
  }
  chatHistory.forEach(msg => appendMessageEl(msg));
  scrollChat();
}

function formatChatContent(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/→/g, '→')
    .replace(/\n/g, '<br>');
}

function scrollChat() {
  const win = document.getElementById('chatWin');
  if (win) setTimeout(() => win.scrollTop = win.scrollHeight, 50);
}

function showTypingIndicator() {
  isTyping = true;
  const win = document.getElementById('chatWin');
  if (!win) return;
  const div = document.createElement('div');
  div.className = 'chat-msg chat-ai'; div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="chat-av-ai">🤖</div>
    <div class="chat-bubble-wrap">
      <div class="chat-bubble typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>`;
  win.appendChild(div);
  requestAnimationFrame(() => div.classList.add('visible'));
  scrollChat();
  const btn = document.getElementById('chatSendBtn');
  if (btn) btn.disabled = true;
}

function hideTypingIndicator() {
  isTyping = false;
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
  const btn = document.getElementById('chatSendBtn');
  if (btn) btn.disabled = false;
}

function setChatMode(mode, btn) {
  chatMode = mode;
  document.querySelectorAll('.chat-mode-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const modeNames = {
    normal: currentLang === 'pt' ? '💬 Modo Normal' : '💬 Normal Mode',
    grammar: currentLang === 'pt' ? '📝 Modo Correcção' : '📝 Grammar Check Mode',
    pronunciation: currentLang === 'pt' ? '🎤 Modo Pronúncia' : '🎤 Pronunciation Mode',
    vocabulary: currentLang === 'pt' ? '📚 Modo Vocabulário' : '📚 Vocabulary Mode',
    translation: currentLang === 'pt' ? '🔄 Modo Tradução' : '🔄 Translation Mode',
    speaking: currentLang === 'pt' ? '🗣️ Modo Conversação' : '🗣️ Speaking Mode',
  };
  showToast(modeNames[mode] || '💬');
  SFX.click();
}

window.retryLastMessage = retryLastMessage;
window.clearChat   = clearChat;
window.sendChip    = sendChip;
window.setChatMode = setChatMode;
window.initChat    = initChat;
