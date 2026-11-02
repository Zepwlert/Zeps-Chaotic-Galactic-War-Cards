// Special card: shows up only when the war was started with the Terminal
// Commander.  The Terminal Commander's units lose health over time; this
// card takes away 75% of that loss.
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (gwoCard, gwoUnit, gwoGroup) {
  var START = "gwaio_start_terminal";

  // The loss per second that the Terminal Commander card gives, per group.
  // Adding back 75% of each value leaves 25% of the loss.  (The stat is
  // added by the Terminal card, so it can only be corrected by adding.)
  var LOSS = 0.75;

  return gwoCard.upgradeCard({
    name: "!LOC:Chemo Therapy Upgrade Tech",
    description:
      "!LOC:Removes 75% of the damage that the Commander, units and structures take from being ill.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_commander_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_armor",
    available: function (inventory) {
      return inventory.hasCard(START);
    },
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.commander, "add", { passive_health_regen: 15 * LOSS })
          .concat(
            gwoCard.flatMapMods(gwoGroup.immobile, "add", {
              passive_health_regen: 3 * LOSS,
            }),
            gwoCard.flatMapMods(gwoGroup.factories, "add", {
              passive_health_regen: 7 * LOSS,
            }),
            gwoCard.flatMapMods(gwoGroup.mobile, "add", {
              passive_health_regen: 1 * LOSS,
            })
          )
      );
    },
  });
});
