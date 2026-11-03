define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Meteor Upgrade Tech",
    description:
      "!LOC:Doubles the drone capacity and drone build rate and efficiency of the T2 aircraft carrier.",
    icon: "coui://pa/units/air/l_air_carrier/l_air_carrier_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.meteor,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.meteorWeapon, "multiply", {
          ammo_per_shot: 0.5,
          ammo_capacity: 2,
        })
      );
    },
  });
});
