define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Havoc Upgrade Tech",
    description: "!LOC:Gives the T2 Lightning tank 50% range.",
    icon: "coui://pa/units/land/l_tank_swarm/l_tank_swarm_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.havoc,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.havocWeapon, "multiply", { max_range: 1.5 })
      );
    },
  });
});
