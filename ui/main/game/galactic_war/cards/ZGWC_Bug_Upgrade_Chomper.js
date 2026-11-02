define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Chomper Upgrade Tech",
    description:
      "!LOC:Gives the Chomper 100% extra health and 150% extra movement speed.",
    icon: "coui://pa/units/orbital/bug_orbital_chomper/bug_orbital_chomper_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.chomper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.chomper, "multiply", {
          max_health: 2,
          "navigation.move_speed": 2.5,
        })
      );
    },
  });
});
