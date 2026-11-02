define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Assault Ripper Upgrade Tech",
    description:
      "!LOC:Doubles the lifetime of the Assault Ripper drones that the Behemoth launches.",
    icon: "coui://pa/units/orbital/bug_orbital_battleship/bug_orbital_battleship_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.behemoth,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.assaultRipperDeathWeapon, "multiply", {
          fire_delay: 2,
        })
      );
    },
  });
});
