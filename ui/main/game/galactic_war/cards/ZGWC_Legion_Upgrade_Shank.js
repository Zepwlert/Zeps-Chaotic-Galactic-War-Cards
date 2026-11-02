define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Shank Upgrade Tech",
    description: "!LOC:Triples the splash radius of the T1 basic tanks attack.",
    icon: "coui://pa/units/land/l_tank_shank/l_tank_shank_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.shank,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.shankAmmo, "multiply", { splash_radius: 3 })
      );
    },
  });
});
