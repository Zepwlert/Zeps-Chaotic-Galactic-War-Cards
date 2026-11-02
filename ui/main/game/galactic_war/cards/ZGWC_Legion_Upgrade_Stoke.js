define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Stoke Upgrade Tech",
    description:
      "!LOC:Adds 15% range, 50% damage and 50% attack speed to the T1 amphibious tank.",
    icon: "coui://pa/units/land/l_mortar_tank/l_mortar_tank_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.stoke,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.stokeWeapon, "multiply", {
            max_range: 1.15,
            rate_of_fire: 1.5,
          })
          .concat(
            gwoCard.mods(
              "/pa/units/land/l_mortar_tank/l_mortar_tank_torpedo_land_ammo.json",
              "multiply",
              { damage: 1.5 }
            ),
            gwoCard.mods(gwoUnit.legion.stokeTorpedoWeapon, "multiply", {
              max_range: 1.15,
              rate_of_fire: 1.5,
            }),
            gwoCard.mods(gwoUnit.legion.stokeTorpedoWaterAmmo, "multiply", {
              damage: 1.5,
            }),
            gwoCard.mods(gwoUnit.legion.stokeAmmo, "multiply", { damage: 1.5 })
          )
      );
    },
  });
});
