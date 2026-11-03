define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Zapper Upgrade Tech",
    description: "!LOC:Doubles the rate of fire of the mobile anti-air unit.",
    icon: "coui://pa/units/land/bug_aa/bug_aa_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.zapper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.zapperWeapon, "multiply", { rate_of_fire: 2 })
      );
    },
  });
});
