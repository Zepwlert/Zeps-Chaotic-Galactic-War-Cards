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
      // MAINTENANCE: bug_grunt_big/bug_grunt_ammo.json is a file in the Bugs
      // mod that no Bugs unit uses, and GWO has no key for it. The card points
      // the Warrior Grunt weapon at it so that only the Warrior Grunt, not the
      // ordinary Grunt, gets the splash damage. It is also listed in
      // model.gwoSpecs in specs.js. After every Bugs update, check that the
      // file is still in the Bugs mod; if it is gone, the card does nothing.
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
