// Special card: shows up only when the war was started with the Warp
// Commander.  Units are no longer vulnerable after a warp and can move at
// once, and the warp costs 75% less energy.
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  var START = "gwaio_start_warp";

  return gwoCard.upgradeCard({
    name: "!LOC:Warp Mastery Upgrade Tech",
    description:
      "!LOC:Warped units are no longer vulnerable and can move the moment they land. The warp costs 75% less energy.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_commander_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_efficiency",
    available: function (inventory) {
      return inventory.hasCard(START);
    },
    buff: function (inventory) {
      // Replaces the warp that the Warp Commander card sets up.  The first
      // two numbers remove the vulnerable state; the last two are 25% of the
      // original 60000 drain and 600000 cost.
      inventory.addMods(
        gwoCard.mods(gwoUnit.commander, "replace", {
          mass_teleporter: {
            radius: 100,
            phasing_duration: 0,
            phasing_health_frac: 1,
            energy_drain: 15000,
            energy_cost: 150000,
            unit_cap: 1000,
            target_types: "Mobile",
          },
        })
      );
    },
  });
});
