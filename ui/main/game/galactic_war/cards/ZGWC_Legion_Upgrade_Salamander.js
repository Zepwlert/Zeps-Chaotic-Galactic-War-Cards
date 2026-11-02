define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Salamander Upgrade Tech",
    description:
      "!LOC:Adds 50% attack range and 50% extra damage to the T2 Fire aircraft.",
    icon: "coui://pa/units/air/l_air_carrier/l_air_carrier_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.salamander,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.salamanderFlameDropWeapon, "multiply", {
            max_range: 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.salamanderFlameDropAmmo, "multiply", {
              damage: 1.5,
            })
          )
      );
    },
  });
});
