// OPTIONAL: EXTRA UNIT FILES
//
// Most mods do not need this file.  Leave it as it is unless one of the two
// cases below applies to you.
//
// Change only the model.gwoSpecs line.  Leave the other lines as they are:
// they wrap the file so that a mistake in it cannot break the rest of the game.
(function () {
  try {
    requireGW(
      ["coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js"],
      function (gwoUnit) {
        if (!model.gwoSpecs) {
          model.gwoSpecs = [];
        }
        // Every player gets their own copy of the files that their units need,
        // and the game applies their cards to those copies.  It also copies
        // every file that you list here.
        //
        // List a file here if one of these is true:
        //   1. the game never loads it and you want to change it, for example
        //      the stomp of the Ares
        //   2. one of your cards lends it to another unit, for example a card
        //      that gives the Dox the weapon of the Ant - see "Whenever your
        //      value is a file name, tag it" in the README
        //
        // To use this list, remove the comment marks (//) from the start of the
        // line below, and change the example files to your own.
        // model.gwoSpecs.push(gwoUnit.aresStomp, gwoUnit.aresStompAmmo);
        // Files that the Bug cards lend to a unit that does not reference them.
        model.gwoSpecs.push(
          gwoUnit.bugs.boomerDeathExplosion,
          gwoUnit.bugs.hydraWeapon,
          gwoUnit.bugs.fighterWeapon,
          gwoUnit.bugs.medusaWeapon,
          gwoUnit.bugs.laserPlatformWeapon,
          gwoUnit.bugs.largeSpitterTurretWeapon,
          gwoUnit.bugs.boomer,
          // Used only by the Warrior Grunt card (see the MAINTENANCE note in
          // zgwc_bug_upgrade_warriorgrunt.js): check it after every Bugs update.
          "/pa/units/land/bug_grunt_big/bug_grunt_ammo.json"
        );
      }
    );
  } catch (e) {
    console.error(e);
    console.error("Zeps chaotic galactic war cards: " + (e.stack || e.message || e));
  }
})();
