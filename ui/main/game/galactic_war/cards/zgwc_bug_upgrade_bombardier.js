define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Bombardier Upgrade Tech",
    description:
      "!LOC:Gives the Bombardier 50% extra damage and 25% extra rate of fire.",
    icon: "coui://pa/units/land/bug_gren/bug_gren_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.bombardier,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.bombardierAmmo, "multiply", {
            damage: 1.5,
            splash_damage: 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.bombardierWeapon, "multiply", {
              rate_of_fire: 1.25,
            })
          )
      );
    },
  });
});
