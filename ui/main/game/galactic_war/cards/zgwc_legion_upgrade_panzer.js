define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Panzer Upgrade Tech",
    description:
      "!LOC:Gives the T2 Hover assault tank double the capacity and build and 50% efficiency boost per volley, keeping the same attack interval.",
    icon: "coui://pa/units/land/l_hover_tank_adv/l_hover_tank_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.panzer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.panzerWeapon, "multiply", {
          ammo_capacity: 2,
          ammo_per_shot: 0.5,
          ammo_demand: 2,
        })
      );
    },
  });
});
