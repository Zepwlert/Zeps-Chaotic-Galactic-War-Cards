// YOUR TECH CARDS
//
// This file tells Galactic War Overhaul (GWO) about your tech cards, including
// cards made with gwoCard.upgradeCard.  GWO never deals a card that is not
// listed here or in a deck's cards list in decks.js.  A card listed here
// joins every deck, so list a card only in decks.js if it belongs to one
// deck alone.
//
// Replace every example ID below with the ID of one of your cards: its file
// name without ".js".  Delete the entries that you do not need.  An example ID
// that stays logs a harmless "Script error for: cards/YOUR_CARD_ID_1" in the
// debugger, and the war carries on.
//
// Change only the lists.  Leave the other lines as they are: they wrap the
// file so that a mistake in it cannot break the rest of the game.
(function () {
  try {
    requireGW(
      [
        "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
        "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
      ],
      function (gwoUnit, gwoGroup) {
        // THE CARDS THAT THE GAME CAN DEAL
        if (!model.gwoCards) {
          model.gwoCards = [];
        }
        // Put a comma between IDs, for example
        // model.gwoCards.push("mym_damage_bots", "mym_faster_air");
        model.gwoCards.push(
          "ZGWC_Upgrade_MetalExtractor",
          "ZGWC_Upgrade_EnergyPlant",
          "ZGWC_Upgrade_AdvancedMetalExtractor",
          "ZGWC_Upgrade_AdvancedEnergyPlant",
          "ZGWC_Upgrade_Angel",
          "ZGWC_Upgrade_Stitch",
          "ZGWC_Upgrade_Mend",
          "ZGWC_Upgrade_Skitter",
          "ZGWC_Upgrade_Ward",
          "ZGWC_Upgrade_SolarArray",
          "ZGWC_Protocol_ROF",
          "ZGWC_Special_Upgrade_ChemoTherapy",
          "ZGWC_Special_Upgrade_WarpMastery",
          "ZGWC_Special_Upgrade_TrueRegeneration",
          "ZGWC_Bug_Upgrade_WarriorGrunt",
          "ZGWC_Bug_Upgrade_Basilisk",
          "ZGWC_Bug_Upgrade_Anchor",
          "ZGWC_Bug_Upgrade_Ripper",
          "ZGWC_Bug_Upgrade_StealthRipper",
          "ZGWC_Bug_Upgrade_Runner",
          "ZGWC_Bug_Upgrade_Grunt",
          "ZGWC_Bug_Upgrade_Belcher",
          "ZGWC_Bug_Upgrade_Needler",
          "ZGWC_Bug_Upgrade_Boomer",
          "ZGWC_Bug_Upgrade_Zapper",
          "ZGWC_Bug_Upgrade_Bombardier",
          "ZGWC_Bug_Upgrade_Tempest",
          "ZGWC_Bug_Upgrade_AlphaBoomer",
          "ZGWC_Bug_Upgrade_Scorcher",
          "ZGWC_Bug_Upgrade_Manticore",
          "ZGWC_Bug_Upgrade_Sniper",
          "ZGWC_Bug_Upgrade_Crusher",
          "ZGWC_Bug_Upgrade_Hydra",
          "ZGWC_Bug_Upgrade_Matriarch",
          "ZGWC_Bug_Upgrade_Rak",
          "ZGWC_Bug_Upgrade_Nug",
          "ZGWC_Bug_Upgrade_Firefly",
          "ZGWC_Bug_Upgrade_Fighter",
          "ZGWC_Bug_Upgrade_Phoenix",
          "ZGWC_Bug_Upgrade_Medusa",
          "ZGWC_Bug_Upgrade_Stheno",
          "ZGWC_Bug_Upgrade_Harpy",
          "ZGWC_Bug_Upgrade_Corvus",
          "ZGWC_Bug_Upgrade_Zeus",
          "ZGWC_Bug_Upgrade_Seeker",
          "ZGWC_Bug_Upgrade_AssaultRipper",
          "ZGWC_Bug_Upgrade_Chomper",
          "ZGWC_Bug_Upgrade_LaserPlatform",
          "ZGWC_Bug_Upgrade_Behemoth",
          "ZGWC_Bug_Upgrade_FabberOrbital",
          "ZGWC_Bug_Upgrade_SmallSpitterTurret",
          "ZGWC_Bug_Upgrade_LargeSpitterTurret",
          "ZGWC_Bug_Upgrade_NeedleTurret",
          "ZGWC_Bug_Upgrade_AcidTurret",
          "ZGWC_Bug_Upgrade_StealthTurret",
          "ZGWC_Bug_Upgrade_LightAATurret",
          "ZGWC_Bug_Upgrade_HeavyAATurret",
          "ZGWC_Bug_Upgrade_Pike",
          "ZGWC_Bug_Upgrade_LiluNest",
          "ZGWC_Bug_Upgrade_Umbrella",
          "ZGWC_Bug_Upgrade_Torpedo",
          "ZGWC_Bug_Upgrade_Pelter",
          "ZGWC_Bug_Upgrade_Holkins",
          "ZGWC_Bug_Upgrade_ScourgeToxinLauncher",
          "ZGWC_Bug_Upgrade_AntiNukeLauncher",
          "ZGWC_Legion_Upgrade_Dauntless",
          "ZGWC_Legion_Upgrade_Scythe",
          "ZGWC_Legion_Upgrade_Marauder",
          "ZGWC_Legion_Upgrade_Firebird",
          "ZGWC_Legion_Upgrade_Lockheed",
          "ZGWC_Legion_Upgrade_Meteor",
          "ZGWC_Legion_Upgrade_Salamander",
          "ZGWC_Legion_Upgrade_PeaceKeeper",
          "ZGWC_Legion_Upgrade_Lancer",
          "ZGWC_Legion_Upgrade_Patriot",
          "ZGWC_Legion_Upgrade_Purger",
          "ZGWC_Legion_Upgrade_Enforcer",
          "ZGWC_Legion_Upgrade_Miniman",
          "ZGWC_Legion_Upgrade_Necromancer",
          "ZGWC_Legion_Upgrade_Shank",
          "ZGWC_Legion_Upgrade_Maul",
          "ZGWC_Legion_Upgrade_Corsair",
          "ZGWC_Legion_Upgrade_Scorpion",
          "ZGWC_Legion_Upgrade_Earthshaker",
          "ZGWC_Legion_Upgrade_Deathmark",
          "ZGWC_Legion_Upgrade_Panzer",
          "ZGWC_Legion_Upgrade_Havoc",
          "ZGWC_Legion_Upgrade_Viper",
          "ZGWC_Legion_Upgrade_Paladin",
          "ZGWC_Legion_Upgrade_BlackKnight",
          "ZGWC_Legion_Upgrade_Imperator",
          "ZGWC_Legion_Upgrade_FabberBasic",
          "ZGWC_Legion_Upgrade_FabberAdv",
          "ZGWC_Legion_Upgrade_Jackal",
          "ZGWC_Legion_Upgrade_Tola",
          "ZGWC_Legion_Upgrade_Scarab",
          "ZGWC_Legion_Upgrade_Hive",
          "ZGWC_Legion_Upgrade_Archer",
          "ZGWC_Legion_Upgrade_Decimator",
          "ZGWC_Legion_Upgrade_Rampart",
          "ZGWC_Legion_Upgrade_Arsonist",
          "ZGWC_Legion_Upgrade_IronDome",
          "ZGWC_Legion_Upgrade_Supernova",
          "ZGWC_Legion_Upgrade_Centurion",
          "ZGWC_Legion_Upgrade_FabberOrbital",
          "ZGWC_Legion_Upgrade_Monstrosity",
          "ZGWC_Legion_Upgrade_Orbweaver",
          "ZGWC_Legion_Upgrade_Shredder",
          "ZGWC_Legion_Upgrade_Stoke"
        );

        // THE UNITS THAT EACH CARD'S TOOLTIP NAMES
        // One entry for each card listed above.  Use the same IDs.
        if (!model.gwoCardsToUnits) {
          model.gwoCardsToUnits = [];
        }
        model.gwoCardsToUnits.push(
          {
            id: "ZGWC_Upgrade_MetalExtractor",
            // Always name the unit itself, never its ammo or its weapon, even
            // when the card changes only the weapon.  For a card that changes
            // the commander, use gwoUnit.commander.
            // You can use a path to a unit, or a GWO unit ID.
            // example path: "/pa/units/land/assault_bot/assault_bot.json"
            // example GWO unit ID: gwoUnit.dox
            units: [gwoUnit.metalExtractor],
          },
          {
            id: "ZGWC_Upgrade_EnergyPlant",
            units: [gwoUnit.energyPlant],
          },
          {
            id: "ZGWC_Upgrade_AdvancedMetalExtractor",
            units: [gwoUnit.metalExtractorAdvanced],
          },
          {
            id: "ZGWC_Upgrade_Angel",
            units: [gwoUnit.angel],
          },
          {
            id: "ZGWC_Upgrade_Stitch",
            units: [gwoUnit.stitch],
          },
          {
            id: "ZGWC_Upgrade_Mend",
            units: [gwoUnit.mend],
          },
          {
            id: "ZGWC_Upgrade_Skitter",
            units: [gwoUnit.skitter],
          },
          {
            id: "ZGWC_Upgrade_Ward",
            units: [gwoUnit.ward],
          },
          {
            id: "ZGWC_Upgrade_SolarArray",
            units: [gwoUnit.solarArray],
          },
          {
            id: "ZGWC_Protocol_ROF",
            units: gwoGroup.units,
          },
          {
            id: "ZGWC_Special_Upgrade_ChemoTherapy",
            units: gwoGroup.units,
          },
          {
            id: "ZGWC_Special_Upgrade_WarpMastery",
            units: [gwoUnit.commander],
          },
          {
            id: "ZGWC_Special_Upgrade_TrueRegeneration",
            units: gwoGroup.units,
          },
          {
            id: "ZGWC_Bug_Upgrade_WarriorGrunt",
            units: [gwoUnit.bugs.warriorGrunt],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Basilisk",
            units: [gwoUnit.bugs.basilisk],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Anchor",
            units: [gwoUnit.bugs.anchor],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Ripper",
            units: [gwoUnit.bugs.ripper],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_StealthRipper",
            units: [gwoUnit.bugs.stealthRipper],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Runner",
            units: [gwoUnit.bugs.runner],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Grunt",
            units: [gwoUnit.bugs.grunt],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Belcher",
            units: [gwoUnit.bugs.belcher],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Needler",
            units: [gwoUnit.bugs.needler, gwoUnit.bugs.needlerBugNeedler],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Boomer",
            units: [gwoUnit.bugs.boomer, gwoUnit.bugs.boomerBugBoomer],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Zapper",
            units: [gwoUnit.bugs.zapper],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Bombardier",
            units: [gwoUnit.bugs.bombardier],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Tempest",
            units: [gwoUnit.bugs.tempest],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_AlphaBoomer",
            units: [gwoUnit.bugs.alphaBoomer],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Scorcher",
            units: [gwoUnit.bugs.scorcher],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Manticore",
            units: [gwoUnit.bugs.manticore],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Sniper",
            units: [gwoUnit.bugs.sniper],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Crusher",
            units: [gwoUnit.bugs.crusher],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Hydra",
            units: [gwoUnit.bugs.hydra],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Matriarch",
            units: [gwoUnit.bugs.matriarch],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Rak",
            units: [gwoUnit.bugs.rak],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Nug",
            units: [gwoUnit.bugs.nug],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Firefly",
            units: [gwoUnit.bugs.firefly],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Fighter",
            units: [gwoUnit.bugs.fighter],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Phoenix",
            units: [gwoUnit.bugs.phoenix],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Medusa",
            units: [gwoUnit.bugs.medusa],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Stheno",
            units: [gwoUnit.bugs.stheno],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Harpy",
            units: [gwoUnit.bugs.harpy],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Corvus",
            units: [gwoUnit.bugs.corvus],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Zeus",
            units: [gwoUnit.bugs.zeus],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Seeker",
            units: [gwoUnit.bugs.seeker, gwoUnit.bugs.seekerBugOrbitalFighter],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_AssaultRipper",
            units: [gwoUnit.bugs.behemoth],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Chomper",
            units: [gwoUnit.bugs.chomper],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_LaserPlatform",
            units: [gwoUnit.bugs.laserPlatform],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Behemoth",
            units: [gwoUnit.bugs.behemoth],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_FabberOrbital",
            units: [gwoUnit.bugs.orbitalFab],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_SmallSpitterTurret",
            units: [gwoUnit.bugs.smallSpitterTurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_LargeSpitterTurret",
            units: [gwoUnit.bugs.largeSpitterTurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_NeedleTurret",
            units: [gwoUnit.bugs.needleTurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_AcidTurret",
            units: [gwoUnit.bugs.acidTurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_StealthTurret",
            units: [gwoUnit.bugs.stealthTurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_LightAATurret",
            units: [gwoUnit.bugs.lightAATurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_HeavyAATurret",
            units: [gwoUnit.bugs.heavyAATurret],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Pike",
            units: [gwoUnit.bugs.pike],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_LiluNest",
            units: [gwoUnit.bugs.liluNest],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Umbrella",
            units: [gwoUnit.bugs.umbrella],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Torpedo",
            units: [
              gwoUnit.bugs.torpedoLauncher,
              gwoUnit.bugs.torpedoLauncherAdvanced,
            ],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Pelter",
            units: [gwoUnit.bugs.pelter],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_Holkins",
            units: [gwoUnit.bugs.holkins],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_ScourgeToxinLauncher",
            units: [gwoUnit.bugs.scourgeToxinLauncher],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Bug_Upgrade_AntiNukeLauncher",
            units: [gwoUnit.bugs.antiNukeLauncher],
            races: ["bugs"],
          },
          {
            id: "ZGWC_Upgrade_AdvancedEnergyPlant",
            units: [gwoUnit.energyPlantAdvanced],
          },
          {
            id: "ZGWC_Legion_Upgrade_Dauntless",
            units: [gwoUnit.legion.dauntless],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Scythe",
            units: [gwoUnit.legion.scythe],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Marauder",
            units: [gwoUnit.legion.marauder],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Firebird",
            units: [gwoUnit.legion.firebird],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Lockheed",
            units: [gwoUnit.legion.lockheed],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Meteor",
            units: [gwoUnit.legion.meteor],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Salamander",
            units: [gwoUnit.legion.salamander],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_PeaceKeeper",
            units: [gwoUnit.legion.peacekeeper],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Lancer",
            units: [gwoUnit.legion.lancer],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Patriot",
            units: [gwoUnit.legion.patriot],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Purger",
            units: [gwoUnit.legion.purger],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Enforcer",
            units: [gwoUnit.legion.enforcer],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Miniman",
            units: [gwoUnit.legion.miniman],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Necromancer",
            units: [gwoUnit.legion.necromancer],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Shank",
            units: [gwoUnit.legion.shank],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Maul",
            units: [gwoUnit.legion.maul],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Corsair",
            units: [gwoUnit.legion.corsair],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Scorpion",
            units: [gwoUnit.legion.scorpion],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Earthshaker",
            units: [gwoUnit.legion.earthshaker],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Deathmark",
            units: [gwoUnit.legion.deathmark],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Panzer",
            units: [gwoUnit.legion.panzer],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Havoc",
            units: [gwoUnit.legion.havoc],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Viper",
            units: [gwoUnit.legion.viper],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Paladin",
            units: [gwoUnit.legion.paladin],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_BlackKnight",
            units: [gwoUnit.legion.blackKnight],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Imperator",
            units: [gwoUnit.legion.imperator],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_FabberBasic",
            units: [
              gwoUnit.legion.fabricationWalker,
              gwoUnit.legion.armourFabricator,
              gwoUnit.legion.fabricationFlyer,
            ],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_FabberAdv",
            units: [
              gwoUnit.legion.fabricationWalkerAdvanced,
              gwoUnit.legion.armourFabricatorAdvanced,
              gwoUnit.legion.fabricationFlyerAdvanced,
              gwoUnit.legion.fabricationStarship,
            ],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Jackal",
            units: [gwoUnit.legion.jackal],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Tola",
            units: [gwoUnit.legion.tola],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Scarab",
            units: [gwoUnit.legion.scarab],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Hive",
            units: [gwoUnit.legion.hive],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Archer",
            units: [gwoUnit.legion.archer],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Decimator",
            units: [gwoUnit.legion.decimator],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Rampart",
            units: [gwoUnit.legion.rampart],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Arsonist",
            units: [gwoUnit.legion.arsonist],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_IronDome",
            units: [gwoUnit.legion.ironDome],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Supernova",
            units: [gwoUnit.legion.supernova],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Centurion",
            units: [gwoUnit.legion.centurion],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_FabberOrbital",
            units: [gwoUnit.legion.fabricationStarship],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Monstrosity",
            units: [gwoUnit.legion.monstrosity],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Orbweaver",
            units: [gwoUnit.legion.orbweaver],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Shredder",
            units: [gwoUnit.legion.shredder],
            races: ["legion"],
          },
          {
            id: "ZGWC_Legion_Upgrade_Stoke",
            units: [gwoUnit.legion.stoke],
            races: ["legion"],
          }
        );

        // OPTIONAL: tech cards that must NOT show an affected-units tooltip.
        // A card that changes something other than units, for example a card
        // that only turns on a feature, belongs here INSTEAD of in
        // model.gwoCardsToUnits above.  If you do not list it here, GWO warns
        // that the card has no tooltip data.  See "Feature reference" in the
        // README.  Remove the comment marks (//) from the lines below and edit
        // them if you need this list.
        // if (!model.gwoCardsWithoutTooltip) {
        //   model.gwoCardsWithoutTooltip = [];
        // }
        // model.gwoCardsWithoutTooltip.push("YOUR_CARD_ID_1", "YOUR_CARD_ID_N");
      }
    );
  } catch (e) {
    console.error(e);
    // You can change "New GW Cards" to the name of your mod, so that errors in
    // the debugger say which mod they came from.
    console.error("New GW Cards: " + (e.stack || e.message || e));
  }
})();
