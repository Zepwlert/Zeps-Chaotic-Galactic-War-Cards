define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoGroup, gwoUnit) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:All units gain +50% rate of fire, and energy weapons draw 50% more energy to keep up. All units cost 30% more to build."
    ),
    summarize: _.constant("!LOC:Protocol: Rate of fire"),
    icon: _.constant(
      "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwaio_protocol.png"
    ),
    audio: _.constant({ found: "/VO/Computer/gw/board_tech_available_combat" }),
    getContext: gwoCard.getContext,
    deal: function () {
      return { chance: 50 };
    },
    buff: function (inventory) {
      var rateOfFire = 1.5;
      var energyDemand = 1.5;
      var buildCost = 1.3;

      // Every weapon in the game: units, defences, artillery and the
      // Commander's.
      var rateOfFireMods = gwoCard.flatMapMods(gwoGroup.weapons, "multiply", {
        rate_of_fire: rateOfFire,
      });

      // Energy weapons keep their energy per shot, so firing faster means
      // the energy comes in faster.
      var energyMods = gwoCard.flatMapMods(gwoGroup.energyWeapons, "multiply", {
        ammo_demand: energyDemand,
      });

      // Every unit and structure except the Commander (who is not built),
      // plus the nukes and anti-nukes that silos build.
      var costMods = gwoCard.flatMapMods(
        _.without(gwoGroup.units, gwoUnit.commander).concat(
          gwoUnit.nukeLauncherAmmo,
          gwoUnit.antiNukeLauncherAmmo
        ),
        "multiply",
        { build_metal_cost: buildCost }
      );

      inventory.addMods(rateOfFireMods.concat(energyMods, costMods));
    },
    dull: function () {},
  };
});
