define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Scarab Upgrade Tech",
    description: "!LOC:Adds 50% range to the T1 heavy turret.",
    icon: "coui://pa/units/land/l_t1_turret_adv/l_t1_turret_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.scarab,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.scarabWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
