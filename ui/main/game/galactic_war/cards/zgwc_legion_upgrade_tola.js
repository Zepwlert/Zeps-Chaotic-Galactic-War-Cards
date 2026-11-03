define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Tola Upgrade Tech",
    description: "!LOC:Doubles the attack speed of the Anti-Orbital defense.",
    icon: "coui://pa/units/orbital/l_ion_defense/l_ion_defense_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.tola,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.tolaWeapon, "multiply", { rate_of_fire: 2 })
      );
    },
  });
});
