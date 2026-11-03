define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Bug Fighter Upgrade Tech",
    description: "!LOC:Lets the Bug Fighter target ground units.",
    icon: "coui://pa/units/air/bug_fighter/bug_fighter_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.fighter,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.fighterWeapon, "push", {
            target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.fighter, "push", {
              unit_types: "UNITTYPE_Gunship",
            }),
            gwoCard.mods(gwoUnit.bugs.fighterAmmo, "replace", {
              "armor_damage_map.AT_Structure": 1,
            }),
            gwoCard.mods(gwoUnit.bugs.fighter, "replace", {
              guard_layer: "WL_AnySurface",
            })
          )
      );
    },
  });
});
