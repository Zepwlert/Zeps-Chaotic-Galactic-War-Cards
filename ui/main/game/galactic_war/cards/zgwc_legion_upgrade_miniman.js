define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Miniman Upgrade Tech",
    description:
      "!LOC:Triples the splash radius of this T2 mobile artillery bot.",
    icon: "coui://pa/units/land/l_bot_artillery/l_bot_artillery_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.miniman,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.timeDelayBombAmmo, "multiply", {
          splash_radius: 3,
        })
      );
    },
  });
});
