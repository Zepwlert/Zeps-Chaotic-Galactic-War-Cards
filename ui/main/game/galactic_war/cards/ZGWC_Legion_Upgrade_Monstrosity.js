define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Monstrosity Upgrade Tech",
    description: "!LOC:Adds 50% range of the T2 heavy artillery bot.",
    icon: "coui://pa/units/land/l_bot_artillery_adv/l_bot_artillery_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.monstrosity,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.monstrosityWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
