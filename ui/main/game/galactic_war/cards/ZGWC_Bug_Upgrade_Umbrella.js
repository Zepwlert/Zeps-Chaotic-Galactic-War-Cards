define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Umbrella Upgrade Tech",
    description:
      "!LOC:Doubles the rate of fire of the Umbrella and adds 25% range.",
    icon: "coui://pa/units/structure/bug_anti_orbital/bug_anti_orbital_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.umbrella,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.umbrellaWeapon, "multiply", {
          rate_of_fire: 2,
          max_range: 1.25,
        })
      );
    },
  });
});
