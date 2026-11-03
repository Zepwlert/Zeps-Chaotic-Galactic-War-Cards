define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Crusher Upgrade Tech",
    description:
      "!LOC:Doubles the splash radius and splash damage of the Crusher.",
    icon: "coui://pa/units/land/bug_crusher/bug_crusher_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.crusher,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.crusherAmmo, "multiply", {
          splash_radius: 2,
          full_damage_splash_radius: 2,
          "damage_volume.initial_radius": 2,
          splash_damage: 2,
        })
      );
    },
  });
});
