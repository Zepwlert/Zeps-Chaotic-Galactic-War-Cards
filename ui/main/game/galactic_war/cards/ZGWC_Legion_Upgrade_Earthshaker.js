define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Earthshaker Upgrade Tech",
    description:
      "!LOC:Adds 50% range, splash radius and movement speed to the T2 seismic tank.",
    icon: "coui://pa/units/land/l_tank_heavy_armor/l_tank_heavy_armor_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.earthshaker,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.earthshakerWeapon, "multiply", {
            max_range: 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.earthshakerAmmo, "multiply", {
              full_damage_splash_radius: 1.5,
              splash_radius: 1.5,
              "damage_volume.initial_radius": 1.5,
              "damage_volume.radius_velocity": 1.5,
            }),
            gwoCard.mods(gwoUnit.legion.earthshaker, "multiply", {
              "navigation.move_speed": 1.5,
              "navigation.turn_speed": 1.5,
            })
          )
      );
    },
  });
});
