define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Patriot Upgrade Tech",
    description: "!LOC:Doubles the T1 AA's attack speed.",
    icon: "coui://pa/units/land/l_bot_aa/l_bot_aa_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.patriot,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.patriotWeapon, "multiply", {
          rate_of_fire: 2,
          ammo_capacity: 2,
          ammo_per_shot: 0.5,
        })
      );
    },
  });
});
