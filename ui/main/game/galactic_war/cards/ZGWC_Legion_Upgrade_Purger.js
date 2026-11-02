define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Purger Upgrade Tech",
    description: "!LOC:Doubles the Splash radius of the T1 Boom bot.",
    icon: "coui://pa/units/land/l_bot_bomb/l_bot_bomb_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.purger,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.purgerAmmo, "multiply", {
          splash_radius: 2,
        })
      );
    },
  });
});
