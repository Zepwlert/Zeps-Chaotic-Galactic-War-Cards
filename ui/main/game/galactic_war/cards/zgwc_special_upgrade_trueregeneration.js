// Special card: shows up only when the war was started with the Regeneration
// Commander.  Every unit and structure, the Commander included, heals exactly
// 250 hit points per second.
define([
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/loadout_tools.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (tools, gwoCard, gwoUnit, gwoGroup) {
  var START = "zgwc_start_regeneration";
  var HEAL = 250;
  // What the Regeneration Commander card already adds, so that this card can
  // add only the difference and the total is exactly HEAL.
  var BASE_SCALE = 5;

  return gwoCard.upgradeCard({
    name: "!LOC:True Regeneration",
    description:
      "!LOC:True Regeneration makes all units and structures heal for 250hp per second.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_commander_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_armor",
    available: function (inventory) {
      return inventory.hasCard(START);
    },
    buff: function (inventory) {
      var current = {};
      _.forEach(
        tools.regeneration(gwoUnit, gwoGroup, BASE_SCALE),
        function (mod) {
          current[mod.file] = (current[mod.file] || 0) + mod.value;
        }
      );
      inventory.addMods(
        _.map(gwoGroup.units, function (file) {
          return {
            file: file,
            path: "passive_health_regen",
            op: "add",
            value: HEAL - (current[file] || 0),
          };
        })
      );
    },
  });
});
