define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Holkins Upgrade Tech",
    description: "!LOC:Doubles the splash radius of the Holkins.",
    icon: "coui://pa/units/structure/bug_arty_large/bug_arty_large_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.holkins,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.holkinsAmmo, "multiply", {
          splash_radius: 2,
          full_damage_splash_radius: 2,
        })
      );
    },
  });
});
