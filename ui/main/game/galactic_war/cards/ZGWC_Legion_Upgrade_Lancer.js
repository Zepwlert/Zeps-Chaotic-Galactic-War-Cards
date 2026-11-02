define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Lancer Upgrade Tech",
    description: "!LOC:Doubles the T1 laser walkers movement speed.",
    icon: "coui://pa/units/land/l_sniper_bot/l_sniper_bot_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.lancer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.lancer, "multiply", {
          "navigation.move_speed": 2,
          "navigation.turn_speed": 2,
          "navigation.acceleration": 2,
        })
      );
    },
  });
});
