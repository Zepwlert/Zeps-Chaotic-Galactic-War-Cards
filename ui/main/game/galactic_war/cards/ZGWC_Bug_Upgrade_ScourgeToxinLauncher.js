define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Scourge Toxin Launcher Upgrade Tech",
    description:
      "!LOC:Doubles the area of effect of the Scourge Toxin Impactor.",
    icon: "coui://pa/units/structure/bug_nuke/bug_nuke_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.scourgeToxinLauncher,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.scourgeToxinLauncherAmmo, "multiply", {
          splash_radius: 2,
          full_damage_splash_radius: 2,
          burn_radius: 2,
          "damage_volume.initial_radius": 2,
        })
      );
    },
  });
});
