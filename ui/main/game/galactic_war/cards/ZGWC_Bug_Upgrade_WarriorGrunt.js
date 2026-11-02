define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Warrior Grunt Upgrade Tech",
    description:
      "!LOC:Gives the Warrior Grunt splash damage with a radius similar to the Boomer explosion.",
    icon: "coui://pa/units/land/bug_grunt_big/bug_grunt_big_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.warriorGrunt,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.warriorGruntBugGruntWeapon, "replace", {
            ammo_id: "/pa/units/land/bug_grunt_big/bug_grunt_ammo.json",
          })
          .concat(
            [
              {
                file: gwoUnit.bugs.warriorGruntBugGruntWeapon,
                path: "ammo_id",
                op: "tag",
              },
            ],
            gwoCard.mods(
              "/pa/units/land/bug_grunt_big/bug_grunt_ammo.json",
              "replace",
              {
                splash_damage: 50,
                splash_radius: 15,
                full_damage_splash_radius: 15,
                splash_damages_allies: false,
              }
            )
          )
      );
    },
  });
});
