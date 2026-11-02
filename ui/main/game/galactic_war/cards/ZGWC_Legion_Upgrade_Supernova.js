define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Supernova Upgrade Tech",
    description: "!LOC:Gives the Nuke-launcher 50% extra blast radius.",
    icon: "coui://pa/units/land/l_nuke_launcher/l_nuke_launcher_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.supernova,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.supernovaAmmo, "multiply", {
          "damage_volume.initial_radius": 1.5,
          "damage_volume.radius_velocity": 1.5,
          "damage_volume.burnable_remove_radius": 1.5,
          full_damage_splash_radius: 1.5,
          splash_radius: 1.5,
          burn_radius: 1.5,
        })
      );
    },
  });
});
