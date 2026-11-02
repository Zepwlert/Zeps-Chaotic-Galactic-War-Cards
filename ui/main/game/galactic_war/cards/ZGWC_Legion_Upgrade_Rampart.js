define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Rampart Upgrade Tech",
    description: "!LOC:Doubles the T2 shield towers radius and capacity.",
    icon: "coui://pa/units/land/l_shield_gen/l_shield_gen_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.rampart,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.rampartLongWeapon, "multiply", {
          ammo_capacity: 2,
          max_range: 2,
        })
      );
    },
  });
});
