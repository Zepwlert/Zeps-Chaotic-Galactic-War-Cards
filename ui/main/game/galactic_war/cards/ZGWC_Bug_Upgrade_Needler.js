define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Needler Upgrade Tech",
    description:
      "!LOC:Gives the Needler 50% extra rate of fire and 50% extra range and vision radius.",
    icon: "coui://pa/units/land/bug_needler/bug_needler_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: [gwoUnit.bugs.needler, gwoUnit.bugs.needlerBugNeedler],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.needlerWeapon, "multiply", {
            rate_of_fire: 1.5,
            max_range: 1.5,
          })
          .concat(
            gwoCard.mods(
              gwoUnit.bugs.needler,
              "multiply",
              gwoCard.observerPaths(2, "radius"),
              1.5
            ),
            gwoCard.mods(
              gwoUnit.bugs.needlerBugNeedler,
              "multiply",
              gwoCard.observerPaths(2, "radius"),
              1.5
            )
          )
      );
    },
  });
});
