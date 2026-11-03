define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Black Knight Upgrade Tech",
    description: "!LOC:Gives the T2 Orbital platform double the splash radius.",
    icon: "coui://pa/units/orbital/l_orbital_laser/l_orbital_laser_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.blackKnight,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.blackKnightAmmo, "multiply", {
          splash_radius: 2,
          full_damage_splash_radius: 2,
          "damage_volume.initial_radius": 2,
          "damage_volume.radius_velocity": 2,
        })
      );
    },
  });
});
