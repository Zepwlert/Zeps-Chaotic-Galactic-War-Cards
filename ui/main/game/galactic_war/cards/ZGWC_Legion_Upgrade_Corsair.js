define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Corsair Upgrade Tech",
    description: "!LOC:Adds 50% range to the T1 hover artillery tank.",
    icon: "coui://pa/units/land/l_hover_tank/l_hover_tank_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.corsair,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.corsairWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
