define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Centurion Upgrade Tech",
    description: "!LOC:Gives the Orbital turret 50% extra range.",
    icon: "coui://pa/units/orbital/l_defense_satellite/l_defense_satellite_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.centurion,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.centurionWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
