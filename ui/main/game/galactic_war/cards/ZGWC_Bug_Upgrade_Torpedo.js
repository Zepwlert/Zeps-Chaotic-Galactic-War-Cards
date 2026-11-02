define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Torpedo Upgrade Tech",
    description:
      "!LOC:Adds 50% range and 100% projectile speed to the basic and advanced torpedo launchers.",
    icon: "coui://pa/units/structure/bug_basic_torp/bug_basic_torp_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: [
      gwoUnit.bugs.torpedoLauncher,
      gwoUnit.bugs.torpedoLauncherAdvanced,
    ],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.torpedoLauncherWeapon, "multiply", { max_range: 1.5 })
          .concat(
            gwoCard.mods(gwoUnit.torpedoLauncherAdvancedWeapon, "multiply", {
              max_range: 1.5,
            }),
            gwoCard.mods(gwoUnit.torpedoLauncherLandAmmo, "multiply", {
              initial_velocity: 2,
              max_velocity: 2,
            }),
            gwoCard.mods(gwoUnit.torpedoLauncherWaterAmmo, "multiply", {
              initial_velocity: 2,
              max_velocity: 2,
            }),
            gwoCard.mods(gwoUnit.torpedoLauncherAdvancedLandAmmo, "multiply", {
              initial_velocity: 2,
              max_velocity: 2,
            }),
            gwoCard.mods(gwoUnit.torpedoLauncherAdvancedWaterAmmo, "multiply", {
              initial_velocity: 2,
              max_velocity: 2,
            })
          )
      );
    },
  });
});
