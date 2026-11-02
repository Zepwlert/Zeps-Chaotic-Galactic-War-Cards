define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Jackal Upgrade Tech",
    description:
      "!LOC:Makes the T1 basic turret gather energy twice as fast, makes ammo 50% cheaper and gives it 25% extra range.",
    icon: "coui://pa/units/land/l_t1_turret_basic/l_t1_turret_basic_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.jackal,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.jackalWeapon, "multiply", {
          ammo_capacity: 2,
          ammo_demand: 2,
          ammo_per_shot: 0.5,
          max_range: 1.25,
        })
      );
    },
  });
});
