define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Seeker Upgrade Tech",
    description: "!LOC:Adds the weapon of the Laser Platform to the Seeker.",
    icon: "coui://pa/units/orbital/bug_orbital_fighter/bug_orbital_fighter_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: [gwoUnit.bugs.seeker, gwoUnit.bugs.seekerBugOrbitalFighter],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.seeker, "push", {
            tools: {
              spec_id: gwoUnit.bugs.laserPlatformWeapon,
              aim_bone: "bone_root",
              muzzle_bone: "bone_root",
            },
          })
          .concat(
            [{ file: gwoUnit.bugs.seeker, path: "tools.1.spec_id", op: "tag" }],
            gwoCard.mods(gwoUnit.bugs.seekerBugOrbitalFighter, "push", {
              tools: {
                spec_id: gwoUnit.bugs.laserPlatformWeapon,
                aim_bone: "bone_root",
                muzzle_bone: "bone_root",
              },
            }),
            [
              {
                file: gwoUnit.bugs.seekerBugOrbitalFighter,
                path: "tools.1.spec_id",
                op: "tag",
              },
            ]
          )
      );
    },
  });
});
