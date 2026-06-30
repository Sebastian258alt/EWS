// ═══════════════════════════════════════════════════════════
//  💳 PREMIUM.JS — Página de Desbloqueio Premium
//  English With Sebastian v2.0
//
//  Flow: Plano → Método de Pagamento → Instruções → Código
//  Pagamentos: M-Pesa · e-Mola · mKesh
//  Moeda: Meticais (MZN)
// ═══════════════════════════════════════════════════════════

// ─── CONFIG — Sebastian preenche estes dados ──────────────
const PM_CONFIG = {
  whatsapp   : '258XXXXXXXXX',   // ex: 258841234567
  mpesa_num  : '84 XXX XXXX',    // número M-Pesa para receber
  emola_num  : '86 XXX XXXX',    // número e-Mola para receber
  mkesh_num  : '82 XXX XXXX',    // número mKesh para receber
  // Códigos de desbloqueio válidos (Sebastian gera e envia após confirmar pagamento)
  // Adiciona mais conforme necessário. Em produção, mover para Supabase.
  valid_codes: ['EWS-MOZA-2025', 'EWS-MAPUTO-01', 'EWS-NAMPULA-01', 'EWS-BEIRA-01'],
};

const PM_PLANS = {
  mensal: { id:'mensal', label:'Mensal',    price:99,  period:'/mês',  badge:null,         highlight:false },
  anual:  { id:'anual',  label:'Anual',     price:599, period:'/ano',  badge:'Poupa 50%',  highlight:true  },
};

const PM_METHODS = {
  mpesa: {
    id:'mpesa', name:'M-Pesa', logo:'🔴',
    color:'#e61515', bg:'rgba(230,21,21,.12)',
    operator:'Vodacom', number: () => PM_CONFIG.mpesa_num,
    steps: (price) => [
      'Abre o <strong>M-Pesa</strong> no teu telemóvel Vodacom',
      `Selecciona <strong>Enviar Dinheiro</strong>`,
      `Insere o número: <strong>${PM_CONFIG.mpesa_num}</strong>`,
      `Insere o valor: <strong>${price} MT</strong>`,
      'Adiciona como referência: <strong>EWS Premium</strong>',
      'Confirma com o teu <strong>PIN M-Pesa</strong>',
    ],
  },
  emola: {
    id:'emola', name:'e-Mola', logo:'🔵',
    color:'#0057a8', bg:'rgba(0,87,168,.12)',
    operator:'Movitel', number: () => PM_CONFIG.emola_num,
    steps: (price) => [
      'Abre o <strong>e-Mola</strong> no teu telemóvel Movitel',
      `Selecciona <strong>Transferência</strong>`,
      `Insere o número: <strong>${PM_CONFIG.emola_num}</strong>`,
      `Insere o valor: <strong>${price} MT</strong>`,
      'Adiciona como referência: <strong>EWS Premium</strong>',
      'Confirma com o teu <strong>PIN e-Mola</strong>',
    ],
  },
  mkesh: {
    id:'mkesh', name:'mKesh', logo:'🟢',
    color:'#00843d', bg:'rgba(0,132,61,.12)',
    operator:'Millennium BIM', number: () => PM_CONFIG.mkesh_num,
    steps: (price) => [
      'Abre o <strong>mKesh</strong> (ou a app Millennium BIM)',
      `Selecciona <strong>Pagamento / Transferência</strong>`,
      `Insere o número: <strong>${PM_CONFIG.mkesh_num}</strong>`,
      `Insere o valor: <strong>${price} MT</strong>`,
      'Adiciona como referência: <strong>EWS Premium</strong>',
      'Confirma a transacção com o teu <strong>PIN</strong>',
    ],
  },
};

// ─── STATE ─────────────────────────────────────────────────
let _pmStep   = 'plans';   // 'plans' | 'method' | 'instructions' | 'code'
let _pmPlan   = 'anual';
let _pmMethod = null;

// ─── PREMIUM CHECK ─────────────────────────────────────────
function isPremiumUser() {
  return localStorage.getItem('ews_premium') === '1';
}
window.isPremiumUser = isPremiumUser;

function _applyPremiumUnlock() {
  localStorage.setItem('ews_premium', '1');
  // Force curriculum re-render to remove premium locks
  if (typeof renderCurriculum === 'function') renderCurriculum();
}

// ─── OPEN / CLOSE ──────────────────────────────────────────
function openPM() {
  if (isPremiumUser()) { showToast('👑 Já és Premium! Obrigado pelo apoio 🇲🇿'); return; }
  SFX.click();
  _pmStep = 'plans'; _pmMethod = null;
  _renderPM();
  document.getElementById('pmOverlay').classList.add('on');
}
window.openPM = openPM;

function closePM() {
  SFX.click();
  document.getElementById('pmOverlay').classList.remove('on');
}
window.closePM = closePM;

// ─── PLAN SELECTION ────────────────────────────────────────
function _selectPlan(id) { _pmPlan = id; _pmStep = 'method'; _renderPM(); }
window._pmSelectPlan = _selectPlan;

// ─── METHOD SELECTION ──────────────────────────────────────
function _selectMethod(id) { _pmMethod = id; _pmStep = 'instructions'; _renderPM(); }
window._pmSelectMethod = _selectMethod;

// ─── BACK ──────────────────────────────────────────────────
function _pmBack() {
  SFX.click();
  if (_pmStep === 'method')       _pmStep = 'plans';
  else if (_pmStep === 'instructions') _pmStep = 'method';
  else if (_pmStep === 'code')    _pmStep = 'instructions';
  _renderPM();
}
window._pmBack = _pmBack;

// ─── WHATSAPP CONFIRM ──────────────────────────────────────
function _pmWhatsApp() {
  const plan   = PM_PLANS[_pmPlan];
  const method = PM_METHODS[_pmMethod];
  const msg    = encodeURIComponent(
    `Olá! Acabei de pagar ${plan.price} MT via ${method.name} para o English With Sebastian Premium.\n` +
    `Plano: ${plan.label}\nPor favor confirma e envia-me o meu código de desbloqueio. Obrigado! 🇲🇿`
  );
  window.open(`https://wa.me/${PM_CONFIG.whatsapp}?text=${msg}`, '_blank');
  _pmStep = 'code';
  _renderPM();
}
window._pmWhatsApp = _pmWhatsApp;

// ─── CODE ENTRY ────────────────────────────────────────────
function _pmGoCode() { _pmStep = 'code'; _renderPM(); }
window._pmGoCode = _pmGoCode;

function _pmVerifyCode() {
  const input = document.getElementById('pmCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (PM_CONFIG.valid_codes.includes(code)) {
    _applyPremiumUnlock();
    document.getElementById('pmOverlay').classList.remove('on');
    SFX.correct();
    setTimeout(() => {
      showToast('🎉 Premium desbloqueado! Bem-vindo(a) à elite do inglês moçambicano! 🇲🇿👑');
    }, 300);
  } else {
    input.classList.add('pm-code-err');
    SFX.wrong();
    const err = document.getElementById('pmCodeErr');
    if (err) { err.textContent = '❌ Código inválido. Verifica e tenta novamente.'; err.style.display='block'; }
    setTimeout(() => input.classList.remove('pm-code-err'), 800);
  }
}
window._pmVerifyCode = _pmVerifyCode;

// ─── RENDERER ──────────────────────────────────────────────
function _renderPM() {
  const box = document.getElementById('pmBox');
  if (!box) return;
  box.innerHTML = _buildPMStep();
  // auto-focus code input if on code step
  if (_pmStep === 'code') {
    const inp = document.getElementById('pmCodeInput');
    if (inp) setTimeout(() => inp.focus(), 120);
  }
}

function _buildPMStep() {
  if (_pmStep === 'plans')        return _stepPlans();
  if (_pmStep === 'method')       return _stepMethod();
  if (_pmStep === 'instructions') return _stepInstructions();
  if (_pmStep === 'code')         return _stepCode();
  return '';
}

// ─── STEP 1: PLANOS ────────────────────────────────────────
function _stepPlans() {
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <div class="pm-crown">👑</div>
    <div class="pm-title">Desbloqueia o Inglês Profissional!</div>
    <div class="pm-sub">Phrasal Verbs e Expressões Idiomáticas — o inglês que os empregadores procuram 🇲🇿</div>

    <div class="pm-feats">
      <div class="pm-feat"><span>📚</span><span>Unidades Phrasal Verbs e Idioms desbloqueadas</span></div>
      <div class="pm-feat"><span>❤️</span><span>Corações infinitos — falha à vontade, aprende mais</span></div>
      <div class="pm-feat"><span>🤖</span><span>Sessões ilimitadas com a IA Tutora</span></div>
      <div class="pm-feat"><span>🏅</span><span>Distintivos exclusivos no leaderboard</span></div>
    </div>

    <div class="pm-plans-row">
      ${Object.values(PM_PLANS).map(p => `
        <div class="pm-plan-card ${p.highlight ? 'pm-plan-highlight' : ''} ${_pmPlan === p.id ? 'pm-plan-sel' : ''}"
             onclick="_pmSelectPlan('${p.id}')">
          ${p.badge ? `<div class="pm-plan-badge">${p.badge}</div>` : ''}
          <div class="pm-plan-name">${p.label}</div>
          <div class="pm-plan-price"><span class="pm-price-amt">${p.price}</span> <span class="pm-price-cur">MT</span></div>
          <div class="pm-plan-period">${p.period}</div>
        </div>`).join('')}
    </div>

    <div class="pm-plan-cta-row">
      <button class="pm-cta" onclick="_pmSelectPlan('${_pmPlan}')">
        Continuar com plano ${PM_PLANS[_pmPlan].label} →
      </button>
    </div>
    <button class="pm-skip" onclick="closePM()">Agora não, talvez quando me pagarem 💸</button>`;
}

// ─── STEP 2: MÉTODO ────────────────────────────────────────
function _stepMethod() {
  const plan = PM_PLANS[_pmPlan];
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <button class="pm-back-btn" onclick="_pmBack()">‹ Voltar</button>
    <div class="pm-step-title">Como queres pagar?</div>
    <div class="pm-step-sub">Plano ${plan.label} — <strong>${plan.price} MT${plan.period}</strong></div>

    <div class="pm-methods">
      ${Object.values(PM_METHODS).map(m => `
        <button class="pm-method-card" onclick="_pmSelectMethod('${m.id}')"
                style="border-color:${m.color};background:${m.bg}">
          <span class="pm-method-logo">${m.logo}</span>
          <div class="pm-method-info">
            <div class="pm-method-name" style="color:${m.color}">${m.name}</div>
            <div class="pm-method-op">${m.operator}</div>
          </div>
          <span class="pm-method-arr">›</span>
        </button>`).join('')}
    </div>

    <div class="pm-secure-note">🔒 Pagamento 100% seguro via carteira móvel</div>
    <button class="pm-skip" onclick="closePM()">Cancelar</button>`;
}

// ─── STEP 3: INSTRUÇÕES ────────────────────────────────────
function _stepInstructions() {
  const plan   = PM_PLANS[_pmPlan];
  const method = PM_METHODS[_pmMethod];
  const steps  = method.steps(plan.price);
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <button class="pm-back-btn" onclick="_pmBack()">‹ Voltar</button>

    <div class="pm-method-hero" style="background:${method.bg};border-color:${method.color}">
      <span style="font-size:2rem">${method.logo}</span>
      <div>
        <div class="pm-method-name" style="color:${method.color};font-size:1.1rem">${method.name}</div>
        <div class="pm-instr-amount">${plan.price} MT${plan.period}</div>
      </div>
    </div>

    <div class="pm-steps-list">
      <div class="pm-steps-title">Como pagar:</div>
      ${steps.map((s, i) => `
        <div class="pm-step-row">
          <div class="pm-step-num" style="background:${method.color}">${i+1}</div>
          <div class="pm-step-text">${s}</div>
        </div>`).join('')}
    </div>

    <div class="pm-after-pay">
      <div class="pm-after-title">Depois de pagar:</div>
      <p>Clica no botão abaixo para nos enviar a confirmação via WhatsApp. Recebes o teu código em menos de 24 horas!</p>
    </div>

    <button class="pm-cta pm-whatsapp-btn" onclick="_pmWhatsApp()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Confirmar Pagamento via WhatsApp
    </button>
    <button class="pm-alt-link" onclick="_pmGoCode()">Já tenho um código de desbloqueio →</button>
    <button class="pm-skip" onclick="closePM()">Cancelar</button>`;
}

// ─── STEP 4: CÓDIGO ────────────────────────────────────────
function _stepCode() {
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <button class="pm-back-btn" onclick="_pmBack()">‹ Voltar</button>

    <div class="pm-code-icon">🔑</div>
    <div class="pm-step-title">Insere o teu código</div>
    <div class="pm-step-sub">Recebeste um código depois de confirmar o pagamento via WhatsApp.</div>

    <div class="pm-code-wrap">
      <input id="pmCodeInput" class="pm-code-input" type="text"
             placeholder="Ex: EWS-MAPUTO-01"
             maxlength="20"
             onkeydown="if(event.key==='Enter') _pmVerifyCode()"
             autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false">
      <div id="pmCodeErr" class="pm-code-err-msg" style="display:none"></div>
    </div>

    <button class="pm-cta" onclick="_pmVerifyCode()">🔓 Desbloquear Premium</button>
    <div class="pm-code-help">
      Ainda não tens código?
      <button class="pm-alt-link" onclick="_pmStep='instructions';_pmMethod=_pmMethod||'mpesa';_renderPM()">Ver instruções de pagamento</button>
    </div>
    <button class="pm-skip" onclick="closePM()">Fechar</button>`;
}
