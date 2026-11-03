define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Arsonist Upgrade Tech",
    description: "!LOC:Doubles the T2 flamethrower towers range.",
    icon: "coui://pa/units/land/l_flame_turret/l_flame_turret_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.arsonist,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.arsonistWeapon, "multiply", {
          max_range: 2,
        })
      );
    },
  });
});
