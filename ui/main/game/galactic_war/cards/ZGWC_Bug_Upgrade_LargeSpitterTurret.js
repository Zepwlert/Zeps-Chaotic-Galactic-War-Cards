define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Large Spitter Turret Upgrade Tech",
    description: "!LOC:Adds 50% range to the advanced anti-land turret.",
    icon: "coui://pa/units/structure/bug_turret_large/bug_turret_large_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.largeSpitterTurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.largeSpitterTurretWeapon, "multiply", {
          max_range: 1.5,
        })
      );
    },
  });
});
