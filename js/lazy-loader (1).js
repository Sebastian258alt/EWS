// ═══════════════════════════════════════════════════════
//  English With Sebastian — js/lazy-loader.js
//  Sprint 3 a11y — manifest-driven lazy unit loading
// ═══════════════════════════════════════════════════════
// Replaces eager loading of all 48 js/data/{level}/unitN.js files
// (~700KB) with a slim manifest (~78KB of id/title/xp metadata only).
// Real lesson content (learn/qs) for a unit is fetched the first
// time it's actually needed, via window.EWSEnsureUnit(unitId).
//
// Contract with each js/data/{level}/unitN.js file: on load it runs
//   (window.__EWS_REGISTRY = window.__EWS_REGISTRY || []).push(...UNITS_X)
// i.e. it *appends* its real unit object(s) to the shared registry.
// To avoid duplicate entries (stub + real) once a file has loaded,
// this loader removes the matching stub(s) from the registry
// immediately before injecting the real script.
//
// Two unit "sources" are supported so content-loader.js's Supabase
// path can be lazy too, not just the bundled-file path:
//   - 'file'   : unitId -> { source:'file', level, file } — content
//                lives in js/data/{level}/{file}, loaded via <script>.
//   - 'custom' : unitId -> { source:'custom', load } — content is
//                fetched however the caller wants (e.g. a Supabase
//                query for a single unit's lessons). Registered via
//                window.__EWS_REGISTER_LAZY_UNITS(stubs, loadFn).

(function () {
  var registry = (window.__EWS_REGISTRY = window.__EWS_REGISTRY || []);

  // unitId -> { source:'file', level, file } | { source:'custom', load }
  var unitLocation = {};
  // "level/file" -> Promise (in-flight or resolved load) — file source only
  var filePromises = {};
  // "level/file" -> array of unit ids that file provides (for stub removal)
  var fileUnitIds = {};
  // unitId -> Promise (in-flight or resolved load) — custom source only
  var unitPromises = {};

  var manifestRef = null;

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Failed: ' + src)); };
      document.head.appendChild(s);
    });
  }

  function removeStubs(ids) {
    for (var i = registry.length - 1; i >= 0; i--) {
      if (ids.indexOf(registry[i].id) !== -1 && registry[i]._lazy) {
        registry.splice(i, 1);
      }
    }
  }

  // Load one manifest-listed file (level/file) and swap its stub
  // entries for the real, fully-loaded unit objects. Idempotent.
  function ensureFile(level, file) {
    var key = level + '/' + file;
    if (filePromises[key]) return filePromises[key];

    filePromises[key] = Promise.resolve().then(function () {
      removeStubs(fileUnitIds[key] || []);
      return loadScript('js/data/' + level + '/' + file);
    });
    return filePromises[key];
  }

  // Load one custom-sourced unit (e.g. from Supabase) and swap its stub
  // for the real object the loader function resolves with. Idempotent.
  function ensureCustom(unitId, load) {
    if (unitPromises[unitId]) return unitPromises[unitId];

    unitPromises[unitId] = Promise.resolve()
      .then(function () { return load(unitId); })
      .then(function (realUnit) {
        removeStubs([unitId]);
        registry.push(realUnit);
        return realUnit;
      });
    return unitPromises[unitId];
  }

  // Public: ensure a single unit's real content is loaded, given its unit id.
  window.EWSEnsureUnit = function (unitId) {
    var loc = unitLocation[unitId];
    if (!loc) {
      // Unknown id (or already a real, non-stub entry) — nothing to fetch.
      return Promise.resolve();
    }
    if (loc.source === 'custom') return ensureCustom(unitId, loc.load);
    return ensureFile(loc.level, loc.file);
  };

  // Public: ensure every registered unit — from every source — is loaded
  // (used e.g. by the daily challenge, which can draw a question from
  // any unit, whether it came from a manifest file or from Supabase).
  window.EWSEnsureAllUnits = function () {
    var all = [];
    for (var unitId in unitLocation) {
      all.push(window.EWSEnsureUnit(unitId));
    }
    return Promise.all(all);
  };

  // Public: called once, right after this script loads, with the parsed
  // manifest.json. Registers lightweight stub units so the curriculum UI
  // has titles/icons/xp to render immediately, and records where each
  // unit's real content lives so EWSEnsureUnit can find it later.
  window.__EWS_INIT_LAZY = function (manifest) {
    manifestRef = manifest;
    for (var level in manifest) {
      manifest[level].forEach(function (entry) {
        var key = level + '/' + entry.file;
        fileUnitIds[key] = entry.units.map(function (u) { return u.id; });

        entry.units.forEach(function (u) {
          unitLocation[u.id] = { source: 'file', level: level, file: entry.file };
          var stub = {};
          for (var k in u) stub[k] = u[k];
          stub._lazy = true;
          // Lessons stay slim (id/title/titlePt/icon/xp) — no learn/qs yet.
          registry.push(stub);
        });
      });
    }
  };

  // Public: register units whose real content comes from somewhere other
  // than a js/data/{level}/unitN.js file (currently: Supabase, via
  // content-loader.js). `stubs` is an array of slim unit objects — same
  // shape as the manifest stubs above (metadata + slim lesson list,
  // `_lazy:true`, no learn/qs) — that the caller has already pushed (or
  // is about to push) into UNITS/registry. `load(unitId)` must return a
  // Promise resolving to the real unit object (with full lesson content)
  // for that id; this loader swaps it in for the stub, on demand, via
  // EWSEnsureUnit/EWSEnsureAllUnits exactly like the file-backed path.
  window.__EWS_REGISTER_LAZY_UNITS = function (stubs, load) {
    (stubs || []).forEach(function (stub) {
      unitLocation[stub.id] = { source: 'custom', load: load };
    });
  };
}());
