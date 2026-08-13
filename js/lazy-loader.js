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

(function () {
  var registry = (window.__EWS_REGISTRY = window.__EWS_REGISTRY || []);

  // unitId -> { level, file }
  var unitLocation = {};
  // "level/file" -> Promise (in-flight or resolved load)
  var filePromises = {};
  // "level/file" -> array of unit ids that file provides (for stub removal)
  var fileUnitIds = {};

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

  // Public: ensure a single unit's real content is loaded, given its unit id.
  window.EWSEnsureUnit = function (unitId) {
    var loc = unitLocation[unitId];
    if (!loc) {
      // Unknown id (or already a real, non-stub entry) — nothing to fetch.
      return Promise.resolve();
    }
    return ensureFile(loc.level, loc.file);
  };

  // Public: ensure every unit across every level is loaded (used e.g. by
  // the daily challenge, which can draw a question from any unit).
  window.EWSEnsureAllUnits = function () {
    var all = [];
    for (var level in manifestRef) {
      manifestRef[level].forEach(function (entry) {
        all.push(ensureFile(level, entry.file));
      });
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
          unitLocation[u.id] = { level: level, file: entry.file };
          var stub = {};
          for (var k in u) stub[k] = u[k];
          stub._lazy = true;
          // Lessons stay slim (id/title/titlePt/icon/xp) — no learn/qs yet.
          registry.push(stub);
        });
      });
    }
  };
}());
