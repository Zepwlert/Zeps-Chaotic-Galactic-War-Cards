define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Paladin Upgrade Tech",
    description:
      "!LOC:Allows the T2 orbital railgun to target planetary units.",
    icon: "coui://pa/units/orbital/l_orbital_railgun/l_orbital_railgun_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.paladin,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.paladinWeapon, "push", {
            target_layers: ["WL_LandHorizontal", "WL_WaterSurface", "WL_Air"],
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.paladinAmmo, "replace", {
              collision_check: "target",
            }),
            gwoCard.mods(gwoUnit.legion.paladin, "push", {
              unit_types: "UNITTYPE_Heavy",
            })
          )
      );
    },
  });
});
