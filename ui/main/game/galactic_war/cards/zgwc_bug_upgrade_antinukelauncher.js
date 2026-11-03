define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Bug Anti-Nuke Launcher Upgrade Tech",
    description: "!LOC:Makes anti-nuke missiles 50% cheaper.",
    icon: "coui://pa/units/structure/bug_anti_nuke/bug_anti_nuke_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.antiNukeLauncher,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.antiNukeLauncherAmmo, "multiply", {
          build_metal_cost: 0.5,
        })
      );
    },
  });
});
