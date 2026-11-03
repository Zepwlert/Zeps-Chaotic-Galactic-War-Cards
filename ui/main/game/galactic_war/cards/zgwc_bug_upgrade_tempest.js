define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Tempest Upgrade Tech",
    description:
      "!LOC:Doubles the Tempest rate of fire and gives it 25% extra range and vision radius.",
    icon: "coui://pa/units/land/bug_aa_big/bug_aa_big_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.tempest,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.tempestWeapon, "multiply", {
            rate_of_fire: 2,
            max_range: 1.25,
          })
          .concat(
            gwoCard.mods(
              gwoUnit.bugs.tempest,
              "multiply",
              gwoCard.observerPaths(1, "radius"),
              1.25
            )
          )
      );
    },
  });
});
