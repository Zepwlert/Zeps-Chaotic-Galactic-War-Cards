define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Lilu Nest Upgrade Tech",
    description: "!LOC:Doubles the number of projectiles the Lilu Nest fires.",
    icon: "coui://pa/units/structure/bug_air_drone_launcher/bug_air_drone_launcher_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.liluNest,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.liluNest, "replace", {
          "tools.0.projectiles_per_fire": 2,
          "tools.0.muzzle_bone": ["socket_muzzle", "socket_muzzle"],
        })
      );
    },
  });
});
