define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Stheno Upgrade Tech",
    description:
      "!LOC:Makes the Stheno launch 5 projectiles over a wide area and increases the acid puddle size by 50%, but halves its damage.",
    icon: "coui://pa/units/air/bug_bomber_adv/bug_bomber_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.stheno,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.stheno, "replace", {
            "tools.0.projectiles_per_fire": 5,
            "tools.0.muzzle_bone": [
              "bone_root",
              "bone_root",
              "bone_root",
              "bone_root",
              "bone_root",
            ],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.sthenoWeapon, "add", {
              firing_standard_deviation: 6,
            }),
            gwoCard.mods(gwoUnit.bugs.sthenoAmmo, "multiply", {
              damage: 0.5,
              splash_damage: 0.5,
            }),
            gwoCard.mods(
              "/pa/units/air/bug_bomber_adv/bug_bomber_adv_dot_ammo.json",
              "multiply",
              {
                splash_radius: 1.5,
                full_damage_splash_radius: 1.5,
                "damage_volume.initial_radius": 1.5,
              }
            )
          )
      );
    },
  });
});
