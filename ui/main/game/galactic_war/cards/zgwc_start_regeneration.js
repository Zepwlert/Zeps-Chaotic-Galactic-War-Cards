// Regeneration Commander start card.
//
// The Commander and every unit and structure heal over time.  The numbers are
// five times the Terminal Commander's health loss turned around, so the
// Commander heals fastest of all.  Healing stops by itself at full health.
//
// The game cannot make healing grow with every second without a hit, or
// restart after one: a unit has one fixed healing rate.  That is why this
// card gives the fixed rate.  "True Regeneration" is a separate tech card.
define([
  "module",
  "cards/gwc_start",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/bank.js",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/loadout_tools.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (module, GWCStart, myBank, tools, gwoCard, gwoUnit, gwoGroup) {
  return tools.startCard(gwoCard, {
    id: module.id.substring(module.id.lastIndexOf("/") + 1),
    bank: myBank,
    start: GWCStart,
    name: "!LOC:Regeneration Commander",
    description:
      "!LOC:The Commander, units and structures heal over time, the Commander fastest of all. Healing stops at full health.",
    apply: function (inventory) {
      // Five times the Terminal Commander's loss, turned into healing.
      inventory.addMods(tools.regeneration(gwoUnit, gwoGroup, 5));
    },
  });
});
