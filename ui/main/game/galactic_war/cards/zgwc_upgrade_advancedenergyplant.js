define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return {
    visible: _.constant(true),
    describe: _.constant("!LOC:2x energy produced, costs 1.25x more to place."),
    summarize: _.constant("!LOC:Advanced Energy Madness"),
    icon: _.constant(
      "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png"
    ),
    audio: _.constant({ found: "/VO/Computer/gw/board_tech_available_economy" }),
    getContext: gwoCard.getContext,
    // Dealt once the player has the unit that the card changes.
    deal: function (system, context, inventory) {
      return gwoCard.conditionalDeal(
        gwoCard.hasUnit(inventory.units(), gwoUnit.energyPlantAdvanced),
        60
      );
    },
    buff: function (inventory) {
      inventory.addMods([
        {
          file: gwoUnit.energyPlantAdvanced,
          path: "production.energy",
          op: "multiply",
          value: 2,
        },
        {
          file: gwoUnit.energyPlantAdvanced,
          path: "build_metal_cost",
          op: "multiply",
          value: 1.25,
        },
      ]);
    },
    dull: function () {},
  };
});
