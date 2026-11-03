define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Decimator Upgrade Tech",
    description: "!LOC:Gives the T2 rocket barrage turret 50% extra range.",
    icon: "coui://pa/units/land/l_rocket_barrage/l_rocket_barrage_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.decimator,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.decimatorWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
