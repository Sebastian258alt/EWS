// ═══════════════════════════════════════════════════════════
//  💛 PREMIUM.JS — Apoia o EnglishFlow (Doação Livre)
//  EnglishFlow é 100% grátis. Este painel apenas convida o
//  utilizador a apoiar o projeto, com o valor e método que
//  ele escolher. Não há planos, códigos, nem bloqueios.
//
//  Flow: Valor → Método de Pagamento → Instruções → Obrigado
//  Pagamentos: M-Pesa · e-Mola
//  Moeda: Meticais (MZN)
// ═══════════════════════════════════════════════════════════

// ─── CONFIG — Sebastian preenche/edita estes dados ────────
const PM_CONFIG = {
  // Preenche com o teu número de WhatsApp (código do país incluído, sem +)
  // para receber um aviso quando alguém apoiar. Deixa vazio ('') para
  // esconder o botão de aviso via WhatsApp.
  whatsapp   : '',
  mpesa_num  : '845713020',   // número M-Pesa (Vodacom)
  emola_num  : '871313059',   // número e-Mola (Movitel)
};

// Valores rápidos sugeridos (MT)
const PM_AMOUNTS = [50, 100, 200, 500];

const PM_METHODS = {
  mpesa: {
    id:'mpesa', name:'M-Pesa', operator:'Vodacom',
    logo:'img/payment/mpesa.png',
    color:'#e61515', bg:'rgba(230,21,21,.12)',
    number: () => PM_CONFIG.mpesa_num,
    steps: (amt) => [
      'Abre o menu <strong>M-Pesa</strong> (*150# ou a app Vodacom M-Pesa)',
      'Selecciona <strong>Enviar Dinheiro</strong>',
      `Insere o número: <strong>${_fmtNum(PM_CONFIG.mpesa_num)}</strong>`,
      `Insere o valor: <strong>${amt} MT</strong>`,
      'Confirma com o teu <strong>PIN M-Pesa</strong>',
    ],
  },
  emola: {
    id:'emola', name:'e-Mola', operator:'Movitel',
    logo:'img/payment/emola.png',
    color:'#f07d1f', bg:'rgba(240,125,31,.12)',
    number: () => PM_CONFIG.emola_num,
    steps: (amt) => [
      'Abre o menu <strong>e-Mola</strong> (*898# ou a app e-Mola)',
      'Selecciona <strong>Enviar Dinheiro / Transferir</strong>',
      `Insere o número: <strong>${_fmtNum(PM_CONFIG.emola_num)}</strong>`,
      `Insere o valor: <strong>${amt} MT</strong>`,
      'Confirma com o teu <strong>PIN e-Mola</strong>',
    ],
  },
};

// ─── HELPERS ───────────────────────────────────────────────
function _fmtNum(n) {
  const s = String(n).replace(/\D/g, '');
  // 9 dígitos moçambicanos: XX XXX XXXX
  if (s.length === 9) return `${s.slice(0,2)} ${s.slice(2,5)} ${s.slice(5)}`;
  return s;
}

// ─── STATE ─────────────────────────────────────────────────
let _pmStep     = 'amount';   // 'amount' | 'method' | 'instructions' | 'thanks'
let _pmAmount   = 100;
let _pmCustom   = false;
let _pmMethod   = null;

// ─── OPEN / CLOSE ──────────────────────────────────────────
function openPM() {
  if (window.SFX) SFX.click();
  _pmStep = 'amount'; _pmMethod = null; _pmCustom = false; _pmAmount = 100;
  _renderPM();
  document.getElementById('pmOverlay').classList.add('on');
}
window.openPM = openPM;

function closePM() {
  if (window.SFX) SFX.click();
  document.getElementById('pmOverlay').classList.remove('on');
}
window.closePM = closePM;

// ─── AMOUNT SELECTION ──────────────────────────────────────
function _pmSelectAmount(val) {
  if (window.SFX) SFX.click();
  _pmAmount = val; _pmCustom = false;
  _renderPM();
}
window._pmSelectAmount = _pmSelectAmount;

function _pmCustomInput(el) {
  const v = parseInt(el.value.replace(/\D/g, ''), 10);
  _pmCustom = true;
  _pmAmount = (isNaN(v) || v <= 0) ? 0 : v;
  // Just toggle the "on" state of the custom box + chips, don't full re-render
  // (would steal focus from the input while typing)
  document.querySelectorAll('.pm-amt-chip').forEach(c => c.classList.remove('on'));
  const box = document.getElementById('pmCustomBox');
  if (box) box.classList.add('on');
}
window._pmCustomInput = _pmCustomInput;

function _pmContinueAmount() {
  if (!_pmAmount || _pmAmount <= 0) {
    const box = document.getElementById('pmCustomBox');
    if (box) { box.classList.add('pm-amt-err'); setTimeout(() => box.classList.remove('pm-amt-err'), 500); }
    if (window.SFX) SFX.wrong();
    return;
  }
  if (window.SFX) SFX.click();
  _pmStep = 'method';
  _renderPM();
}
window._pmContinueAmount = _pmContinueAmount;

// ─── METHOD SELECTION ──────────────────────────────────────
function _pmSelectMethod(id) {
  if (window.SFX) SFX.click();
  _pmMethod = id; _pmStep = 'instructions'; _renderPM();
}
window._pmSelectMethod = _pmSelectMethod;

// ─── BACK ──────────────────────────────────────────────────
function _pmBack() {
  if (window.SFX) SFX.click();
  if (_pmStep === 'method')            _pmStep = 'amount';
  else if (_pmStep === 'instructions') _pmStep = 'method';
  _renderPM();
}
window._pmBack = _pmBack;

// ─── COPY NUMBER ───────────────────────────────────────────
function _pmCopyNumber() {
  const method = PM_METHODS[_pmMethod];
  if (!method) return;
  const raw = String(method.number()).replace(/\D/g, '');
  const done = () => { if (window.showToast) showToast('📋 Número copiado!'); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(raw).then(done).catch(done);
  } else {
    done();
  }
}
window._pmCopyNumber = _pmCopyNumber;

// ─── WHATSAPP (opcional, só se configurado) ────────────────
function _pmWhatsApp() {
  if (!PM_CONFIG.whatsapp) return;
  const method = PM_METHODS[_pmMethod];
  const msg = encodeURIComponent(
    `Olá! Acabei de apoiar o EnglishFlow com ${_pmAmount} MT via ${method.name}. Obrigado por este projeto! 🇲🇿💛`
  );
  window.open(`https://wa.me/${PM_CONFIG.whatsapp}?text=${msg}`, '_blank');
}
window._pmWhatsApp = _pmWhatsApp;

// ─── DONATED (agradecimento) ────────────────────────────────
function _pmDonated() {
  if (window.SFX) SFX.correct();
  _pmStep = 'thanks';
  _renderPM();
  if (typeof launchConfetti === 'function') launchConfetti();
}
window._pmDonated = _pmDonated;

// ─── RENDERER ──────────────────────────────────────────────
function _renderPM() {
  const box = document.getElementById('pmBox');
  if (!box) return;
  box.innerHTML = _buildPMStep();
  if (_pmStep === 'amount' && _pmCustom) {
    const inp = document.getElementById('pmCustomInput');
    if (inp) setTimeout(() => inp.focus(), 120);
  }
}

function _buildPMStep() {
  if (_pmStep === 'amount')       return _stepAmount();
  if (_pmStep === 'method')       return _stepMethod();
  if (_pmStep === 'instructions') return _stepInstructions();
  if (_pmStep === 'thanks')       return _stepThanks();
  return '';
}

// ─── STEP 1: VALOR ─────────────────────────────────────────
function _stepAmount() {
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <div class="pm-crown">💛</div>
    <div class="pm-title">Apoia o EnglishFlow</div>
    <div class="pm-sub">O EnglishFlow é 100% gratuito, para sempre — sem planos, sem códigos, sem letras miúdas. Se te tem ajudado a aprender inglês, considera apoiar o projeto com o valor que quiseres 🇲🇿</div>

    <div class="pm-amt-grid">
      ${PM_AMOUNTS.map(a => `
        <div class="pm-amt-chip ${!_pmCustom && _pmAmount === a ? 'on' : ''}" onclick="_pmSelectAmount(${a})">
          ${a}<span>MT</span>
        </div>`).join('')}
    </div>

    <div class="pm-amt-custom ${_pmCustom ? 'on' : ''}" id="pmCustomBox">
      <input id="pmCustomInput" class="pm-amt-custom-input" type="tel" inputmode="numeric"
             placeholder="Outro valor"
             value="${_pmCustom && _pmAmount ? _pmAmount : ''}"
             oninput="_pmCustomInput(this)"
             onfocus="_pmCustomInput(this)">
      <span class="pm-amt-suffix">MT</span>
    </div>

    <button class="pm-cta" onclick="_pmContinueAmount()">Continuar →</button>
    <button class="pm-skip" onclick="closePM()">Agora não, obrigado</button>`;
}

// ─── STEP 2: MÉTODO ────────────────────────────────────────
function _stepMethod() {
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <button class="pm-back-btn" onclick="_pmBack()">‹ Voltar</button>
    <div class="pm-step-title">Como queres apoiar?</div>
    <div class="pm-step-sub">Valor do apoio: <strong>${_pmAmount} MT</strong></div>

    <div class="pm-methods">
      ${Object.values(PM_METHODS).map(m => `
        <button class="pm-method-card" onclick="_pmSelectMethod('${m.id}')"
                style="border-color:${m.color};background:${m.bg}">
          <img class="pm-method-logo-img" src="${m.logo}" alt="${m.name}">
          <div class="pm-method-info">
            <div class="pm-method-name" style="color:${m.color}">${m.name}</div>
            <div class="pm-method-op">${m.operator}</div>
          </div>
          <span class="pm-method-arr">›</span>
        </button>`).join('')}
    </div>

    <div class="pm-secure-note">🔒 O apoio vai diretamente para o número pessoal do criador do EnglishFlow.</div>
    <button class="pm-skip" onclick="closePM()">Cancelar</button>`;
}

// ─── STEP 3: INSTRUÇÕES ────────────────────────────────────
function _stepInstructions() {
  const method = PM_METHODS[_pmMethod];
  const steps  = method.steps(_pmAmount);
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <button class="pm-back-btn" onclick="_pmBack()">‹ Voltar</button>

    <div class="pm-method-hero" style="background:${method.bg};border-color:${method.color}">
      <img src="${method.logo}" alt="${method.name}">
      <div>
        <div class="pm-method-name" style="color:${method.color};font-size:1.1rem">${method.name}</div>
        <div class="pm-instr-amount">${_pmAmount} MT</div>
      </div>
    </div>

    <div class="pm-instr-number-row">
      <span class="pm-instr-number">${_fmtNum(method.number())}</span>
      <button class="pm-copy-btn" onclick="_pmCopyNumber()">📋 Copiar</button>
    </div>

    <div class="pm-steps-list">
      <div class="pm-steps-title">Como apoiar:</div>
      ${steps.map((s, i) => `
        <div class="pm-step-row">
          <div class="pm-step-num" style="background:${method.color}">${i+1}</div>
          <div class="pm-step-text">${s}</div>
        </div>`).join('')}
    </div>

    <div class="pm-after-pay">
      <div class="pm-after-title">Depois de apoiares:</div>
      <p>Não precisas de enviar nenhum comprovativo — o EnglishFlow continua 100% grátis para ti e para todos, hoje e sempre. Obrigado por fazeres parte disto! 💛</p>
    </div>

    <button class="pm-cta" onclick="_pmDonated()">🙏 Já apoiei!</button>
    ${PM_CONFIG.whatsapp ? `
    <button class="pm-alt-link" onclick="_pmWhatsApp()">Avisar via WhatsApp</button>` : ''}
    <button class="pm-skip" onclick="closePM()">Cancelar</button>`;
}

// ─── STEP 4: OBRIGADO ──────────────────────────────────────
function _stepThanks() {
  return `
    <button class="pm-close-x" onclick="closePM()" aria-label="Fechar">✕</button>
    <div class="pm-thanks-icon">🙌</div>
    <div class="pm-thanks-title">Muito Obrigado!</div>
    <div class="pm-thanks-sub">O teu apoio ajuda a manter o EnglishFlow gratuito e acessível a todos os moçambicanos que querem aprender inglês. Significa muito para nós 🇲🇿💛</div>
    <button class="pm-cta" onclick="closePM()">Fechar</button>`;
}
