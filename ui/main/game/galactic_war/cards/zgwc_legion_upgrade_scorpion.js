define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Scorpion Upgrade Tech",
    description:
      "!LOC:Adds 50% Health, 25% Attack speed, 25% Damage, 15% Range and 50% movement speed to the T2 assault tank.",
    icon: "coui://pa/units/land/l_tank_laser_adv/l_tank_laser_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.scorpion,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.scorpionWeapon, "multiply", {
            max_range: 1.15,
            rate_of_fire: 1.25,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.scorpion, "multiply", {
              max_health: 1.5,
              "navigation.move_speed": 1.5,
              "navigation.turn_speed": 1.5,
            }),
            gwoCard.mods(gwoUnit.legion.scorpionAmmo, "multiply", {
              damage: 1.25,
            })
          )
      );
    },
  });
});
