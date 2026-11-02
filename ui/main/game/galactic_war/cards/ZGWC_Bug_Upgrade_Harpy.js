define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Harpy Upgrade Tech",
    description:
      "!LOC:Gives the Harpy 50% extra movement speed and health, and 25% extra damage.",
    icon: "coui://pa/units/air/bug_harpy/bug_harpy_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.harpy,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.harpy, "multiply", {
            "navigation.move_speed": 1.5,
            max_health: 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.harpyAmmo, "multiply", { damage: 1.25 })
          )
      );
    },
  });
});
