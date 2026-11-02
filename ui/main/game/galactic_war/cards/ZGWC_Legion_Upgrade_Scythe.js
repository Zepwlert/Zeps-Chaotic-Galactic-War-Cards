define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Scythe Upgrade Tech",
    description: "!LOC:Doubles the T1 air-to-airs rate of fire.",
    icon: "coui://pa/units/air/l_fighter/l_fighter_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.scythe,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.scytheWeapon, "multiply", {
          rate_of_fire: 2,
        })
      );
    },
  });
});
