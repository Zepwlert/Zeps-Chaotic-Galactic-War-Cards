define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Matriarch Upgrade Tech",
    description:
      "!LOC:Doubles the number of Boomers the Matriarch spawns, and the acid she leaves behind deals 50% more damage.",
    icon: "coui://pa/units/land/bug_matriarch/bug_matriarch_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.matriarch,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.matriarch, "replace", {
            "tools.0.projectiles_per_fire": 10,
            "tools.0.muzzle_bone": [
              "socket_muzzle_1",
              "socket_muzzle_2",
              "socket_muzzle_3",
              "socket_muzzle_4",
              "socket_muzzle_1",
              "socket_muzzle_1",
              "socket_muzzle_2",
              "socket_muzzle_3",
              "socket_muzzle_4",
              "socket_muzzle_1",
            ],
          })
          .concat(
            gwoCard.mods(
              "/pa/units/land/bug_matriarch/bug_matriarch_dot_ammo.json",
              "multiply",
              { damage: 1.5 }
            )
          )
      );
    },
  });
});
