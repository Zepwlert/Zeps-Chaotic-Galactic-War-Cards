define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Nug Upgrade Tech",
    description:
      "!LOC:Gives the Nug 50% extra health and movement speed, and 50% extra splash radius and splash damage.",
    icon: "coui://pa/units/land/bug_titan/bug_titan_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.nug,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.nug, "multiply", {
            max_health: 1.5,
            "navigation.move_speed": 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.atlasAmmo, "multiply", {
              splash_radius: 1.5,
              full_damage_splash_radius: 1.5,
              damage: 1.5,
            })
          )
      );
    },
  });
});
