define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Deathmark Upgrade Tech",
    description: "!LOC:Adds 50% range and damage to the T2 siege tank.",
    icon: "coui://pa/units/land/l_sniper_tank/l_sniper_tank_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.deathmark,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.deathmarkWeapon, "multiply", { max_range: 1.5 })
          .concat(
            gwoCard.mods(gwoUnit.legion.deathmarkAmmo, "multiply", {
              damage: 1.5,
            })
          )
      );
    },
  });
});
