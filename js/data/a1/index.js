// ═══════════════════════════════════════════════════════
//  English With Sebastian v2.0 — js/data/a1/index.js
// ═══════════════════════════════════════════════════════
// UNITS_A1 index — re-exports all units as UNITS_A1
// Load order in index.html: this file must be loaded AFTER all unit files.
// Unit files loaded before this: unit1.js, unit2.js, unit3.js, unit4.js, unit5.js

// Assembles UNITS_A1 from 5 unit file(s)
// Unit IDs in order: u1, u2, u3, u4, u5
const UNITS_A1 = [...UNITS_A1_UNIT1, ...UNITS_A1_UNIT2, ...UNITS_A1_UNIT3, ...UNITS_A1_UNIT4, ...UNITS_A1_UNIT5];
