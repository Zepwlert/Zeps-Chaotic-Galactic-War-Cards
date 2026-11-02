define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Marauder Upgrade Tech",
    description:
      "!LOC:Adds 50% rate of fire, 50% damage and 15% range to the T1 gunship.",
    icon: "coui://pa/units/air/l_raider/l_raider_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.marauder,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.marauderWeapon, "multiply", {
            rate_of_fire: 1.5,
            max_range: 1.15,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.marauderAmmo, "multiply", {
              damage: 1.5,
            })
          )
      );
    },
  });
});
