define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Shredder Upgrade Tech",
    description:
      "!LOC:Shredder Upgrade Tech enables the targeting of land and surface naval units by the basic anti-air defense.",
    icon: "coui://pa/units/land/l_air_defense/l_air_defense_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.shredder,
    buff: function (inventory) {
      var targeting = {
        target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
        target_priorities: ["Mobile & (Land | Naval)"],
      };

      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.shredder, "push", {
            unit_types: "UNITTYPE_SurfaceDefense",
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.shredderWeapon, "push", targeting),
            gwoCard.mods(gwoUnit.legion.shredderBeamWeapon, "push", targeting),
            // The beam does the damage and only hurts air by default.
            gwoCard.mods(gwoUnit.legion.shredderBeamAmmo, "replace", {
              armor_damage_map: {},
            })
          )
      );
    },
  });
});
