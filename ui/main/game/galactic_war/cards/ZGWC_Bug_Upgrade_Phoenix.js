define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Phoenix Upgrade Tech",
    description: "!LOC:Lets the Phoenix target ground units.",
    icon: "coui://pa/units/air/bug_fighter_adv/bug_fighter_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.phoenix,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.phoenixWeapon, "push", {
            target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.phoenix, "push", {
              unit_types: "UNITTYPE_Gunship",
            }),
            gwoCard.mods(gwoUnit.bugs.phoenixAmmo, "replace", {
              "armor_damage_map.AT_Structure": 1,
            }),
            gwoCard.mods(gwoUnit.bugs.phoenix, "replace", {
              guard_layer: "WL_AnySurface",
            })
          )
      );
    },
  });
});
