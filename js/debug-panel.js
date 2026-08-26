/**
 * EnglishFlow MZ — Debug Panel
 * -----------------------------------------------------------------
 * On-screen debug console for use on real devices (phones) where
 * DevTools isn't available. Captures JS errors, unhandled promise
 * rejections, console.error/warn, EWSLoadFeature failures, and
 * shows Service Worker / cache status.
 *
 * ACTIVATION (does nothing unless one of these is true):
 *   - URL has ?debug=1   e.g. https://yoursite.com/?debug=1
 *   - localStorage.setItem('ews_debug', '1')  (persists across reloads)
 *
 * TO ADD TO index.html:
 *   <script src="js/debug-panel.js"></script>
 *   (place it as early as possible, right after the opening <body>,
 *    so it can catch errors thrown during boot too)
 *
 * TO REMOVE: just delete the <script> tag. This file touches nothing
 * else in the app — no globals besides window.EWSDebug, no CSS files.
 * -----------------------------------------------------------------
 */
(function () {
  'use strict';

  function isEnabled() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('debug') === '1') return true;
      if (window.localStorage && window.localStorage.getItem('ews_debug') === '1') return true;
    } catch (e) { /* ignore */ }
    return false;
  }

  if (!isEnabled()) return;

  var logs = [];
  var MAX_LOGS = 300;

  function push(type, args) {
    var msg;
    try {
      msg = Array.prototype.slice.call(args).map(function (a) {
        if (a instanceof Error) return a.stack || (a.name + ': ' + a.message);
        if (typeof a === 'object') {
          try { return JSON.stringify(a); } catch (e) { return String(a); }
        }
        return String(a);
      }).join(' ');
    } catch (e) {
      msg = '[unserializable log]';
    }
    var entry = { type: type, msg: msg, time: new Date().toLocaleTimeString() };
    logs.push(entry);
    if (logs.length > MAX_LOGS) logs.shift();
    render(entry);
  }

  // ---- Intercept console ----
  ['log', 'warn', 'error', 'info'].forEach(function (level) {
    var original = console[level];
    console[level] = function () {
      push(level, arguments);
      original.apply(console, arguments);
    };
  });

  // ---- Global error handlers ----
  window.addEventListener('error', function (e) {
    push('error', ['[window.onerror] ' + e.message + ' @ ' + (e.filename || '?') + ':' + (e.lineno || '?')]);
  });

  window.addEventListener('unhandledrejection', function (e) {
    var reason = e.reason;
    var text = (reason && (reason.stack || reason.message)) || String(reason);
    push('error', ['[unhandledrejection] ' + text]);
  });

  // ---- Wrap EWSLoadFeature to catch lazy-load failures ----
  function wrapLoadFeature() {
    if (typeof window.EWSLoadFeature !== 'function' || window.EWSLoadFeature.__ewsDebugWrapped) return;
    var original = window.EWSLoadFeature;
    var wrapped = function (key, src) {
      var result = original.apply(this, arguments);
      if (result && typeof result.then === 'function') {
        result.then(
          function () { push('info', ['[EWSLoadFeature] loaded: ' + key + ' (' + src + ')']); },
          function (err) { push('error', ['[EWSLoadFeature] FAILED: ' + key + ' (' + src + ') — ' + (err && err.message || err)]); }
        );
      }
      return result;
    };
    wrapped.__ewsDebugWrapped = true;
    window.EWSLoadFeature = wrapped;
    push('info', ['[debug-panel] EWSLoadFeature wrapped for monitoring']);
  }
  // EWSLoadFeature may be defined after this script runs, so poll briefly.
  wrapLoadFeature();
  var wrapAttempts = 0;
  var wrapTimer = setInterval(function () {
    wrapAttempts++;
    wrapLoadFeature();
    if (window.EWSLoadFeature && window.EWSLoadFeature.__ewsDebugWrapped) clearInterval(wrapTimer);
    if (wrapAttempts > 40) clearInterval(wrapTimer); // stop after ~10s
  }, 250);

  // ---- Service worker / cache status ----
  function checkSW() {
    if (!('serviceWorker' in navigator)) {
      push('info', ['[SW] Service workers not supported in this context']);
      return;
    }
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      if (!regs.length) {
        push('warn', ['[SW] No service worker registered']);
      } else {
        regs.forEach(function (r) {
          var state = r.active ? r.active.state : 'no-active-worker';
          push('info', ['[SW] scope=' + r.scope + ' state=' + state]);
        });
      }
    });
    if (window.caches) {
      caches.keys().then(function (keys) {
        push('info', ['[Cache] ' + keys.length + ' cache(s): ' + keys.join(', ')]);
      });
    }
  }

  // ---- Panel UI ----
  var panel, logEl, isMinimized = false;

  function render(entry) {
    if (!logEl) return;
    var line = document.createElement('div');
    line.style.cssText = 'padding:3px 6px;border-bottom:1px solid #333;white-space:pre-wrap;word-break:break-word;';
    var color = entry.type === 'error' ? '#ff6b6b' : entry.type === 'warn' ? '#ffd93d' : '#8fd3ff';
    line.innerHTML = '<span style="color:#777">' + entry.time + '</span> ' +
      '<span style="color:' + color + ';font-weight:bold">[' + entry.type.toUpperCase() + ']</span> ' +
      escapeHtml(entry.msg);
    logEl.appendChild(line);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function buildPanel() {
    panel = document.createElement('div');
    panel.id = 'ews-debug-panel';
    panel.style.cssText = [
      'position:fixed', 'left:0', 'right:0', 'bottom:0', 'height:40vh',
      'background:#111', 'color:#eee', 'font:11px/1.4 monospace',
      'z-index:2147483647', 'display:flex', 'flex-direction:column',
      'box-shadow:0 -2px 10px rgba(0,0,0,.5)'
    ].join(';');

    var header = document.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:6px 8px;background:#222;flex-shrink:0;';
    header.innerHTML = '<strong style="color:#fff">🐞 EWS Debug</strong>';

    var btnWrap = document.createElement('div');

    function makeBtn(label, onClick) {
      var b = document.createElement('button');
      b.textContent = label;
      b.style.cssText = 'margin-left:6px;background:#333;color:#eee;border:1px solid #555;border-radius:4px;padding:3px 8px;font-size:11px;';
      b.onclick = onClick;
      return b;
    }

    btnWrap.appendChild(makeBtn('SW/Cache', checkSW));
    btnWrap.appendChild(makeBtn('Clear', function () { logs = []; logEl.innerHTML = ''; }));
    btnWrap.appendChild(makeBtn('Copy', function () {
      var text = logs.map(function (l) { return '[' + l.time + '][' + l.type + '] ' + l.msg; }).join('\n');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          alert('Logs copiados (' + logs.length + ' linhas)');
        });
      }
    }));
    btnWrap.appendChild(makeBtn('_', function () {
      isMinimized = !isMinimized;
      logEl.style.display = isMinimized ? 'none' : 'block';
      panel.style.height = isMinimized ? 'auto' : '40vh';
    }));
    btnWrap.appendChild(makeBtn('✕', function () {
      panel.remove();
      try { window.localStorage.removeItem('ews_debug'); } catch (e) {}
    }));

    header.appendChild(btnWrap);

    logEl = document.createElement('div');
    logEl.style.cssText = 'flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;';

    panel.appendChild(header);
    panel.appendChild(logEl);
    document.body.appendChild(panel);
  }

  function init() {
    buildPanel();
    push('info', ['[debug-panel] Ativo. User-Agent: ' + navigator.userAgent]);
    push('info', ['[debug-panel] URL: ' + window.location.href]);
    checkSW();
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  window.EWSDebug = { logs: logs, checkSW: checkSW };
})();
