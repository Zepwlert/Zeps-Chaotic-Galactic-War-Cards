define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Ripper Upgrade Tech",
    description:
      "!LOC:Gives the basic bug 100% extra movement speed and 50% extra rate of fire.",
    icon: "coui://pa/units/land/bug_ripper/bug_ripper_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.ripper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.ripper, "multiply", { "navigation.move_speed": 2 })
          .concat(
            gwoCard.mods(gwoUnit.bugs.ripperWeapon, "multiply", {
              rate_of_fire: 1.5,
            })
          )
      );
    },
  });
});
