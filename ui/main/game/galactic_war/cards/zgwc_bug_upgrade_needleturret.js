define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Needle Turret Upgrade Tech",
    description:
      "!LOC:Adds the Large Spitter Turret weapon to the Needle Turret.",
    icon: "coui://pa/units/structure/bug_turret_needle/bug_turret_needle_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.needleTurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.needleTurret, "push", {
            tools: {
              spec_id: gwoUnit.bugs.largeSpitterTurretWeapon,
              aim_bone: "socket_muzzle",
              muzzle_bone: ["socket_muzzle"],
            },
          })
          .concat([
            {
              file: gwoUnit.bugs.needleTurret,
              path: "tools.1.spec_id",
              op: "tag",
            },
          ])
      );
    },
  });
});
