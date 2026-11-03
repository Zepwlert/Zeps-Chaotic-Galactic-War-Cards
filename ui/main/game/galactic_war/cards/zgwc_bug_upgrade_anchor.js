define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Anchor Upgrade Tech",
    description: "!LOC:Adds 25% range and 50% rate of fire to the Anchor.",
    icon: "coui://pa/units/structure/bug_anchor/bug_anchor_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.anchor,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.anchorWeaponAG, "multiply", {
            max_range: 1.25,
            rate_of_fire: 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.anchorWeaponAO, "multiply", {
              max_range: 1.25,
              rate_of_fire: 1.5,
            })
          )
      );
    },
  });
});
