define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Stealth Turret Upgrade Tech",
    description: "!LOC:Doubles the range of the Stealth Turret.",
    icon: "coui://pa/units/structure/bug_stealth_turret/bug_stealth_turret_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.stealthTurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.stealthTurretWeapon, "multiply", {
          max_range: 2,
        })
      );
    },
  });
});
