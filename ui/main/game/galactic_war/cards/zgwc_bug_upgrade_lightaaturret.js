define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Light AA Turret Upgrade Tech",
    description: "!LOC:Lets the Light AA Turret target ground units.",
    icon: "coui://pa/units/structure/bug_aa_small/bug_aa_small_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.lightAATurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.lightAATurretWeapon, "push", {
          target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
        })
      );
    },
  });
});
