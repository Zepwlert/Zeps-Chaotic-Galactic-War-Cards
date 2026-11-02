define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Corvus Upgrade Tech",
    description:
      "!LOC:Lets the Corvus carry up to 9 units and arms it with the weapons of the Bug Fighter and the Medusa.",
    icon: "coui://pa/units/air/bug_transport/bug_transport_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.corvus,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.corvus, "replace", {
            "transporter.capacity": 9,
            tools: [
              {
                spec_id: gwoUnit.bugs.fighterWeapon,
                aim_bone: "bone_root",
                muzzle_bone: "bone_root",
              },
              {
                spec_id: gwoUnit.bugs.medusaWeapon,
                aim_bone: "bone_root",
                muzzle_bone: "bone_root",
              },
            ],
          })
          .concat(
            [
              { file: gwoUnit.bugs.corvus, path: "tools.0.spec_id", op: "tag" },
              { file: gwoUnit.bugs.corvus, path: "tools.1.spec_id", op: "tag" },
            ],
            gwoCard.mods(gwoUnit.bugs.corvus, "push", {
              command_caps: "ORDER_Attack",
            })
          )
      );
    },
  });
});
