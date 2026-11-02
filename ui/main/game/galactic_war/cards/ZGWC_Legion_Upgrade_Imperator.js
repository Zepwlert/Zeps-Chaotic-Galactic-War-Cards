define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Imperator Upgrade Tech",
    description:
      "!LOC:Doubles the drone capacity and drone build rate and efficiency of the T2 Orbital drone carrier.",
    icon: "coui://pa/units/orbital/l_orbital_battleship/l_orbital_battleship_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.imperator,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.imperatorWeaponDrone, "multiply", {
          ammo_capacity: 2,
          ammo_per_shot: 0.5,
        })
      );
    },
  });
});
