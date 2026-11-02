define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Scorcher Upgrade Tech",
    description:
      "!LOC:Gives the Scorcher 100% extra damage and 25% extra health.",
    icon: "coui://pa/units/land/bug_scorcher/bug_scorcher_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.scorcher,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.scorcherAmmo, "multiply", { damage: 2 })
          .concat(
            gwoCard.mods(gwoUnit.bugs.scorcher, "multiply", {
              max_health: 1.25,
            })
          )
      );
    },
  });
});
