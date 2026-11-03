define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Rak Upgrade Tech",
    description:
      "!LOC:Adds four Hydra cannons to the Rak for additional fire support.",
    icon: "coui://pa/units/land/bug_laser_spider/bug_laser_spider_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.rak,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.rak, "push", {
            tools: [
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_turret",
                muzzle_bone: "socket_muzzle",
              },
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_turret",
                muzzle_bone: "socket_muzzle",
              },
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_turret",
                muzzle_bone: "socket_muzzle",
              },
              {
                spec_id: gwoUnit.bugs.hydraWeapon,
                aim_bone: "bone_turret",
                muzzle_bone: "socket_muzzle",
              },
            ],
          })
          .concat([
            { file: gwoUnit.bugs.rak, path: "tools.1.spec_id", op: "tag" },
            { file: gwoUnit.bugs.rak, path: "tools.2.spec_id", op: "tag" },
            { file: gwoUnit.bugs.rak, path: "tools.3.spec_id", op: "tag" },
            { file: gwoUnit.bugs.rak, path: "tools.4.spec_id", op: "tag" },
          ])
      );
    },
  });
});
