define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Acid Turret Upgrade Tech",
    description:
      "!LOC:Doubles the size of the acid puddles left by the Acid Turret.",
    icon: "coui://pa/units/structure/bug_turret_acid/bug_turret_acid_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.acidTurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(
          "/pa/units/structure/bug_turret_acid/turret_acid_dot_ammo.json",
          "multiply",
          {
            splash_radius: 2,
            full_damage_splash_radius: 2,
            "damage_volume.initial_radius": 2,
          }
        )
      );
    },
  });
});
