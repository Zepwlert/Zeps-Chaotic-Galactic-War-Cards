define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Dauntless Upgrade Tech",
    description:
      "!LOC:Increases the T1 bombers damage by 50%, doubles the splash radius.",
    icon: "coui://pa/units/air/l_bomber/l_bomber_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.dauntless,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.dauntlessAmmo, "multiply", {
          splash_radius: 2,
          splash_damage: 2,
          damage: 1.5,
          full_damage_splash_radius: 2,
        })
      );
    },
  });
});
