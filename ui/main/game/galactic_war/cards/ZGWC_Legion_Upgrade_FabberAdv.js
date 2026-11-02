define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:T2 Fabber Upgrade Tech",
    description:
      "!LOC:Gives the T2 fabrication units double the build power, 50% energy efficiency and double the movement speed (orbital fabricator included).",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_metal_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: [
      gwoUnit.legion.fabricationWalkerAdvanced,
      gwoUnit.legion.armourFabricatorAdvanced,
      gwoUnit.legion.fabricationFlyerAdvanced,
      gwoUnit.legion.fabricationStarship,
    ],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.fabricationWalkerAdvancedBuildArm, "multiply", {
            "construction_demand.energy": 0.5,
            "construction_demand.metal": 2,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.fabricationWalkerAdvanced, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            }),
            gwoCard.mods(
              gwoUnit.legion.armourFabricatorAdvancedBuildArm,
              "multiply",
              {
                "construction_demand.energy": 0.5,
                "construction_demand.metal": 2,
              }
            ),
            gwoCard.mods(gwoUnit.legion.armourFabricatorAdvanced, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            }),
            gwoCard.mods(
              gwoUnit.legion.fabricationFlyerAdvancedBuildArm,
              "multiply",
              {
                "construction_demand.energy": 0.5,
                "construction_demand.metal": 2,
              }
            ),
            gwoCard.mods(gwoUnit.legion.fabricationFlyerAdvanced, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            }),
            gwoCard.mods(
              gwoUnit.legion.fabricationStarshipBuildArm,
              "multiply",
              {
                "construction_demand.energy": 0.5,
                "construction_demand.metal": 2,
              }
            ),
            gwoCard.mods(gwoUnit.legion.fabricationStarship, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            })
          )
      );
    },
  });
});
