define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Runner Upgrade Tech",
    description:
      "!LOC:Gives the Runner 100% extra vision range and 50% extra movement speed.",
    icon: "coui://pa/units/land/bug_runner/bug_runner_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.runner,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(
            gwoUnit.bugs.runner,
            "multiply",
            gwoCard.observerPaths(3, "radius"),
            2
          )
          .concat(
            gwoCard.mods(gwoUnit.bugs.runner, "multiply", {
              "navigation.move_speed": 1.5,
            })
          )
      );
    },
  });
});
