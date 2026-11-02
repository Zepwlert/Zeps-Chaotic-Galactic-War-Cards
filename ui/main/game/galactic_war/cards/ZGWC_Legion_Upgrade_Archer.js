define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Archer Upgrade Tech",
    description:
      "!LOC:Archer Upgrade Tech enables the targeting of land and surface naval units by the advanced anti-air defense.",
    icon: "coui://pa/units/land/l_air_defense_adv/l_air_defense_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.archer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.archer, "push", {
            unit_types: "UNITTYPE_SurfaceDefense",
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.archerWeapon, "push", {
              target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
              target_priorities: ["Mobile & (Land | Naval)"],
            }),
            // The missile only damages air by default, so it would hit
            // ground targets for nothing.
            gwoCard.mods(gwoUnit.legion.archerAmmo, "replace", {
              armor_damage_map: {},
            })
          )
      );
    },
  });
});
