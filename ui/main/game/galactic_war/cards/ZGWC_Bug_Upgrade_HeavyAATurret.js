define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Heavy AA Turret Upgrade Tech",
    description: "!LOC:Lets the Heavy AA Turret target all unit types.",
    icon: "coui://pa/units/structure/bug_aa_large/bug_aa_large_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.heavyAATurret,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.heavyAATurretWeapon, "push", {
            target_layers: [
              "WL_LandHorizontal",
              "WL_WaterSurface",
              "WL_Seafloor",
              "WL_Underwater",
              "WL_Orbital",
            ],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.heavyAATurretAmmo, "replace", {
              armor_damage_map: {},
            })
          )
      );
    },
  });
});
