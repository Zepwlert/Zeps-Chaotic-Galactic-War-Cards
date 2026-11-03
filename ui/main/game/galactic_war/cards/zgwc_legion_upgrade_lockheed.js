define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Lockheed Upgrade Tech",
    description:
      "!LOC:Adds 50% damage and doubles the health of the T2 gunship.",
    icon: "coui://pa/units/air/l_gunship/l_gunship_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.lockheed,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.lockheed, "multiply", { max_health: 2 })
          .concat(
            gwoCard.mods(gwoUnit.legion.lockheedMainAmmo, "multiply", {
              damage: 1.5,
            }),
            gwoCard.mods(gwoUnit.legion.lockheedRocketAmmo, "multiply", {
              damage: 1.5,
            })
          )
      );
    },
  });
});
