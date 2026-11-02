define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Maul Upgrade Tech",
    description:
      "!LOC:Adds 50% movement speed, 15% range and 50% attack speed to the T1 shotgun tank.",
    icon: "coui://pa/units/land/l_shotgun_tank/l_shotgun_tank_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.maul,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.maul, "multiply", {
            "navigation.move_speed": 1.5,
            "navigation.turn_speed": 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.maulWeapon, "multiply", {
              max_range: 1.15,
              rate_of_fire: 1.5,
            })
          )
      );
    },
  });
});
