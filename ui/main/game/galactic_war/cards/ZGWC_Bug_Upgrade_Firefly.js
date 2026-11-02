define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Firefly Upgrade Tech",
    description: "!LOC:Increases the Firefly vision radius by 100%.",
    icon: "coui://pa/units/air/bug_air_scout/bug_air_scout_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.firefly,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(
          gwoUnit.bugs.firefly,
          "multiply",
          gwoCard.observerPaths(2, "radius"),
          2
        )
      );
    },
  });
});
