define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Orbweaver Upgrade Tech",
    description: "!LOC:Doubles the attack speed of the T2 AA Bot.",
    icon: "coui://pa/units/land/l_bot_aa_adv/l_bot_aa_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.orbweaver,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.orbweaverWeapon, "multiply", {
          rate_of_fire: 2,
        })
      );
    },
  });
});
