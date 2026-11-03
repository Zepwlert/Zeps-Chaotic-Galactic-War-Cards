define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/ai.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (gwoAI, gwoCard, gwoUnit, gwoGroup) {
  return gwoCard.upgradeCard({
    name: "!LOC:Fabrication Starship Upgrade Tech",
    description:
      "!LOC:Fabrication Starship Upgrade Tech allows the Legion orbital fabricator to build all basic and advanced structures.",
    icon: "coui://pa/units/orbital/l_orbital_fabrication_bot/l_orbital_fabrication_bot_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.legion.fabricationStarship,
    buff: function (inventory) {
      // The advanced structures the fabricator may now build need to be held.
      inventory.addUnits(gwoGroup.starterUnitsAdvanced);

      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.fabricationStarship, "add", {
          // Legion units carry Custom1 (MLA's Custom58 matches no Legion unit).
          // Basic as per the MLA card, plus every advanced structure, factories
          // included.
          buildable_types:
            " | (Land & Structure & Basic | Factory & Basic | FabBuild | Structure & Advanced | FabAdvBuild) & Custom1",
        })
      );

      var structures = [
        "BasicAirDefense",
        "BasicAirFactory",
        "BasicArtillery",
        "BasicBotFactory",
        "BasicEnergyGenerator",
        "BasicLandDefense",
        "BasicLandDefenseSingle",
        "BasicRadar",
        "BasicVehicleFactory",
        "EnergyStorage",
        "MetalStorage",
        "OrbitalLauncher",
        "Umbrella",
        "Wall",
      ].concat(
        gwoAI.advancedStructureBuilds,
        inventory.hasCard("gwc_enable_titans") ? ["PlanetSplitter"] : []
      );
      inventory.addAIMods(
        gwoAI.builderAppendMods("fabber", structures, "OrbitalFabber")
      );
    },
  });
});
