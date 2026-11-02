define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Laser Platform Upgrade Tech",
    description:
      "!LOC:Adds two Hydra cannons to the Laser Platform for extra fire support.",
    icon: "coui://pa/units/orbital/bug_orbital_laser/bug_orbital_laser_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.laserPlatform,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.laserPlatform, "push", {
            tools: [
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_pitch",
                muzzle_bone: "socket_muzzle",
              },
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_pitch",
                muzzle_bone: "socket_muzzle",
              },
            ],
          })
          .concat([
            {
              file: gwoUnit.bugs.laserPlatform,
              path: "tools.1.spec_id",
              op: "tag",
            },
            {
              file: gwoUnit.bugs.laserPlatform,
              path: "tools.2.spec_id",
              op: "tag",
            },
          ])
      );
    },
  });
});
