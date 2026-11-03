define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:T1 Fabber Upgrade Tech",
    description:
      "!LOC:Gives the T1 fabrication units double the build power, 50% energy efficiency and double the movement speed (orbital fabricator excluded).",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_metal_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: [
      gwoUnit.legion.fabricationWalker,
      gwoUnit.legion.armourFabricator,
      gwoUnit.legion.fabricationFlyer,
    ],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.fabricationWalkerBuildArm, "multiply", {
            "construction_demand.energy": 0.5,
            "construction_demand.metal": 2,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.fabricationWalker, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            }),
            gwoCard.mods(gwoUnit.legion.armourFabricatorBuildArm, "multiply", {
              "construction_demand.energy": 0.5,
              "construction_demand.metal": 2,
            }),
            gwoCard.mods(gwoUnit.legion.armourFabricator, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            }),
            gwoCard.mods(gwoUnit.legion.fabricationFlyerBuildArm, "multiply", {
              "construction_demand.energy": 0.5,
              "construction_demand.metal": 2,
            }),
            gwoCard.mods(gwoUnit.legion.fabricationFlyer, "multiply", {
              "navigation.move_speed": 2,
              "navigation.turn_speed": 2,
            })
          )
      );
    },
  });
});
