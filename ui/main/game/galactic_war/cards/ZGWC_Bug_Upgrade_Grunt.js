define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Grunt Upgrade Tech",
    description: "!LOC:Makes the Grunt explode when it dies.",
    icon: "coui://pa/units/land/bug_grunt/bug_grunt_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.grunt,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.grunt, "replace", {
            "death_weapon.ground_ammo_spec": gwoUnit.bugs.boomerDeathExplosion,
          })
          .concat([
            {
              file: gwoUnit.bugs.grunt,
              path: "death_weapon.ground_ammo_spec",
              op: "tag",
            },
          ])
      );
    },
  });
});
