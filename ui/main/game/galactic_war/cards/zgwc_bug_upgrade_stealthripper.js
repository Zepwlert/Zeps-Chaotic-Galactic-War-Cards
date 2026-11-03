define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Stealth Ripper Upgrade Tech",
    description:
      "!LOC:Gives the Stealth Ripper 50% extra damage, 50% extra health and 50% extra vision range.",
    icon: "coui://pa/units/land/bug_ripper_stealth/bug_ripper_stealth_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.stealthRipper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.stealthRipperAmmo, "multiply", { damage: 1.5 })
          .concat(
            gwoCard.mods(gwoUnit.bugs.stealthRipper, "multiply", {
              max_health: 1.5,
            }),
            gwoCard.mods(
              gwoUnit.bugs.stealthRipper,
              "multiply",
              gwoCard.observerPaths(1, "radius"),
              1.5
            )
          )
      );
    },
  });
});
