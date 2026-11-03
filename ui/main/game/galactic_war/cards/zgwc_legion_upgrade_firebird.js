define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Firebird Upgrade Tech",
    description:
      "!LOC:Firebird Upgrade Tech enables the targeting of land and surface naval units by the advanced fighter's guns.",
    icon: "coui://pa/units/air/l_fighter_adv/l_fighter_adv_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.firebird,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.firebirdWeapon, "push", {
            target_layers: ["WL_LandHorizontal", "WL_WaterSurface"],
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.firebird, "push", {
              unit_types: "UNITTYPE_Gunship",
            }),
            gwoCard.mods(gwoUnit.legion.firebird, "replace", {
              guard_layer: "WL_AnySurface",
            })
          )
      );
    },
  });
});
