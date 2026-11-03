// YOUR TECH CARDS
//
// This file tells Galactic War Overhaul (GWO) about your tech cards, including
// cards made with gwoCard.upgradeCard.  GWO never deals a card that is not
// listed here.  A card listed here joins every deck.
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
          "zgwc_upgrade_metalextractor",
          "zgwc_upgrade_energyplant",
          "zgwc_upgrade_advancedmetalextractor",
          "zgwc_upgrade_advancedenergyplant",
          "zgwc_upgrade_angel",
          "zgwc_upgrade_stitch",
          "zgwc_upgrade_mend",
          "zgwc_upgrade_skitter",
          "zgwc_upgrade_ward",
          "zgwc_upgrade_solararray",
          "zgwc_protocol_rof",
          "zgwc_special_upgrade_chemotherapy",
          "zgwc_special_upgrade_warpmastery",
          "zgwc_special_upgrade_trueregeneration",
          "zgwc_bug_upgrade_warriorgrunt",
          "zgwc_bug_upgrade_basilisk",
          "zgwc_bug_upgrade_anchor",
          "zgwc_bug_upgrade_ripper",
          "zgwc_bug_upgrade_stealthripper",
          "zgwc_bug_upgrade_runner",
          "zgwc_bug_upgrade_grunt",
          "zgwc_bug_upgrade_belcher",
          "zgwc_bug_upgrade_needler",
          "zgwc_bug_upgrade_boomer",
          "zgwc_bug_upgrade_zapper",
          "zgwc_bug_upgrade_bombardier",
          "zgwc_bug_upgrade_tempest",
          "zgwc_bug_upgrade_alphaboomer",
          "zgwc_bug_upgrade_scorcher",
          "zgwc_bug_upgrade_manticore",
          "zgwc_bug_upgrade_sniper",
          "zgwc_bug_upgrade_crusher",
          "zgwc_bug_upgrade_hydra",
          "zgwc_bug_upgrade_matriarch",
          "zgwc_bug_upgrade_rak",
          "zgwc_bug_upgrade_nug",
          "zgwc_bug_upgrade_firefly",
          "zgwc_bug_upgrade_fighter",
          "zgwc_bug_upgrade_phoenix",
          "zgwc_bug_upgrade_medusa",
          "zgwc_bug_upgrade_stheno",
          "zgwc_bug_upgrade_harpy",
          "zgwc_bug_upgrade_corvus",
          "zgwc_bug_upgrade_zeus",
          "zgwc_bug_upgrade_seeker",
          "zgwc_bug_upgrade_assaultripper",
          "zgwc_bug_upgrade_chomper",
          "zgwc_bug_upgrade_laserplatform",
          "zgwc_bug_upgrade_behemoth",
          "zgwc_bug_upgrade_fabberorbital",
          "zgwc_bug_upgrade_smallspitterturret",
          "zgwc_bug_upgrade_largespitterturret",
          "zgwc_bug_upgrade_needleturret",
          "zgwc_bug_upgrade_acidturret",
          "zgwc_bug_upgrade_stealthturret",
          "zgwc_bug_upgrade_lightaaturret",
          "zgwc_bug_upgrade_heavyaaturret",
          "zgwc_bug_upgrade_pike",
          "zgwc_bug_upgrade_lilunest",
          "zgwc_bug_upgrade_umbrella",
          "zgwc_bug_upgrade_torpedo",
          "zgwc_bug_upgrade_pelter",
          "zgwc_bug_upgrade_holkins",
          "zgwc_bug_upgrade_scourgetoxinlauncher",
          "zgwc_bug_upgrade_antinukelauncher",
          "zgwc_legion_upgrade_dauntless",
          "zgwc_legion_upgrade_scythe",
          "zgwc_legion_upgrade_marauder",
          "zgwc_legion_upgrade_firebird",
          "zgwc_legion_upgrade_lockheed",
          "zgwc_legion_upgrade_meteor",
          "zgwc_legion_upgrade_salamander",
          "zgwc_legion_upgrade_peacekeeper",
          "zgwc_legion_upgrade_lancer",
          "zgwc_legion_upgrade_patriot",
          "zgwc_legion_upgrade_purger",
          "zgwc_legion_upgrade_enforcer",
          "zgwc_legion_upgrade_miniman",
          "zgwc_legion_upgrade_necromancer",
          "zgwc_legion_upgrade_shank",
          "zgwc_legion_upgrade_maul",
          "zgwc_legion_upgrade_corsair",
          "zgwc_legion_upgrade_scorpion",
          "zgwc_legion_upgrade_earthshaker",
          "zgwc_legion_upgrade_deathmark",
          "zgwc_legion_upgrade_panzer",
          "zgwc_legion_upgrade_havoc",
          "zgwc_legion_upgrade_viper",
          "zgwc_legion_upgrade_paladin",
          "zgwc_legion_upgrade_blackknight",
          "zgwc_legion_upgrade_imperator",
          "zgwc_legion_upgrade_fabberbasic",
          "zgwc_legion_upgrade_fabberadv",
          "zgwc_legion_upgrade_jackal",
          "zgwc_legion_upgrade_tola",
          "zgwc_legion_upgrade_scarab",
          "zgwc_legion_upgrade_hive",
          "zgwc_legion_upgrade_archer",
          "zgwc_legion_upgrade_decimator",
          "zgwc_legion_upgrade_rampart",
          "zgwc_legion_upgrade_arsonist",
          "zgwc_legion_upgrade_irondome",
          "zgwc_legion_upgrade_supernova",
          "zgwc_legion_upgrade_centurion",
          "zgwc_legion_upgrade_fabberorbital",
          "zgwc_legion_upgrade_monstrosity",
          "zgwc_legion_upgrade_orbweaver",
          "zgwc_legion_upgrade_shredder",
          "zgwc_legion_upgrade_stoke"
        );

        // THE UNITS THAT EACH CARD'S TOOLTIP NAMES
        // One entry for each card listed above.  Use the same IDs.
        if (!model.gwoCardsToUnits) {
          model.gwoCardsToUnits = [];
        }
        model.gwoCardsToUnits.push(
          {
            id: "zgwc_upgrade_metalextractor",
            // Always name the unit itself, never its ammo or its weapon, even
            // when the card changes only the weapon.  For a card that changes
            // the commander, use gwoUnit.commander.
            // You can use a path to a unit, or a GWO unit ID.
            // example path: "/pa/units/land/assault_bot/assault_bot.json"
            // example GWO unit ID: gwoUnit.dox
            units: [gwoUnit.metalExtractor],
          },
          {
            id: "zgwc_upgrade_energyplant",
            units: [gwoUnit.energyPlant],
          },
          {
            id: "zgwc_upgrade_advancedmetalextractor",
            units: [gwoUnit.metalExtractorAdvanced],
          },
          {
            id: "zgwc_upgrade_angel",
            units: [gwoUnit.angel],
          },
          {
            id: "zgwc_upgrade_stitch",
            units: [gwoUnit.stitch],
          },
          {
            id: "zgwc_upgrade_mend",
            units: [gwoUnit.mend],
          },
          {
            id: "zgwc_upgrade_skitter",
            units: [gwoUnit.skitter],
          },
          {
            id: "zgwc_upgrade_ward",
            units: [gwoUnit.ward],
          },
          {
            id: "zgwc_upgrade_solararray",
            units: [gwoUnit.solarArray],
          },
          {
            id: "zgwc_protocol_rof",
            units: gwoGroup.units,
          },
          {
            id: "zgwc_special_upgrade_chemotherapy",
            units: gwoGroup.units,
          },
          {
            id: "zgwc_special_upgrade_warpmastery",
            units: [gwoUnit.commander],
          },
          {
            id: "zgwc_special_upgrade_trueregeneration",
            units: gwoGroup.units,
          },
          {
            id: "zgwc_bug_upgrade_warriorgrunt",
            units: [gwoUnit.bugs.warriorGrunt],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_basilisk",
            units: [gwoUnit.bugs.basilisk],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_anchor",
            units: [gwoUnit.bugs.anchor],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_ripper",
            units: [gwoUnit.bugs.ripper],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_stealthripper",
            units: [gwoUnit.bugs.stealthRipper],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_runner",
            units: [gwoUnit.bugs.runner],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_grunt",
            units: [gwoUnit.bugs.grunt],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_belcher",
            units: [gwoUnit.bugs.belcher],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_needler",
            units: [gwoUnit.bugs.needler, gwoUnit.bugs.needlerBugNeedler],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_boomer",
            units: [gwoUnit.bugs.boomer, gwoUnit.bugs.boomerBugBoomer],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_zapper",
            units: [gwoUnit.bugs.zapper],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_bombardier",
            units: [gwoUnit.bugs.bombardier],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_tempest",
            units: [gwoUnit.bugs.tempest],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_alphaboomer",
            units: [gwoUnit.bugs.alphaBoomer],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_scorcher",
            units: [gwoUnit.bugs.scorcher],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_manticore",
            units: [gwoUnit.bugs.manticore],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_sniper",
            units: [gwoUnit.bugs.sniper],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_crusher",
            units: [gwoUnit.bugs.crusher],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_hydra",
            units: [gwoUnit.bugs.hydra],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_matriarch",
            units: [gwoUnit.bugs.matriarch],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_rak",
            units: [gwoUnit.bugs.rak],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_nug",
            units: [gwoUnit.bugs.nug],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_firefly",
            units: [gwoUnit.bugs.firefly],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_fighter",
            units: [gwoUnit.bugs.fighter],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_phoenix",
            units: [gwoUnit.bugs.phoenix],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_medusa",
            units: [gwoUnit.bugs.medusa],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_stheno",
            units: [gwoUnit.bugs.stheno],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_harpy",
            units: [gwoUnit.bugs.harpy],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_corvus",
            units: [gwoUnit.bugs.corvus],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_zeus",
            units: [gwoUnit.bugs.zeus],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_seeker",
            units: [gwoUnit.bugs.seeker, gwoUnit.bugs.seekerBugOrbitalFighter],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_assaultripper",
            units: [gwoUnit.bugs.behemoth],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_chomper",
            units: [gwoUnit.bugs.chomper],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_laserplatform",
            units: [gwoUnit.bugs.laserPlatform],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_behemoth",
            units: [gwoUnit.bugs.behemoth],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_fabberorbital",
            units: [gwoUnit.bugs.orbitalFab],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_smallspitterturret",
            units: [gwoUnit.bugs.smallSpitterTurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_largespitterturret",
            units: [gwoUnit.bugs.largeSpitterTurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_needleturret",
            units: [gwoUnit.bugs.needleTurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_acidturret",
            units: [gwoUnit.bugs.acidTurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_stealthturret",
            units: [gwoUnit.bugs.stealthTurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_lightaaturret",
            units: [gwoUnit.bugs.lightAATurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_heavyaaturret",
            units: [gwoUnit.bugs.heavyAATurret],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_pike",
            units: [gwoUnit.bugs.pike],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_lilunest",
            units: [gwoUnit.bugs.liluNest],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_umbrella",
            units: [gwoUnit.bugs.umbrella],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_torpedo",
            units: [
              gwoUnit.bugs.torpedoLauncher,
              gwoUnit.bugs.torpedoLauncherAdvanced,
            ],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_pelter",
            units: [gwoUnit.bugs.pelter],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_holkins",
            units: [gwoUnit.bugs.holkins],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_scourgetoxinlauncher",
            units: [gwoUnit.bugs.scourgeToxinLauncher],
            races: ["bugs"],
          },
          {
            id: "zgwc_bug_upgrade_antinukelauncher",
            units: [gwoUnit.bugs.antiNukeLauncher],
            races: ["bugs"],
          },
          {
            id: "zgwc_upgrade_advancedenergyplant",
            units: [gwoUnit.energyPlantAdvanced],
          },
          {
            id: "zgwc_legion_upgrade_dauntless",
            units: [gwoUnit.legion.dauntless],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_scythe",
            units: [gwoUnit.legion.scythe],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_marauder",
            units: [gwoUnit.legion.marauder],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_firebird",
            units: [gwoUnit.legion.firebird],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_lockheed",
            units: [gwoUnit.legion.lockheed],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_meteor",
            units: [gwoUnit.legion.meteor],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_salamander",
            units: [gwoUnit.legion.salamander],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_peacekeeper",
            units: [gwoUnit.legion.peacekeeper],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_lancer",
            units: [gwoUnit.legion.lancer],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_patriot",
            units: [gwoUnit.legion.patriot],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_purger",
            units: [gwoUnit.legion.purger],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_enforcer",
            units: [gwoUnit.legion.enforcer],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_miniman",
            units: [gwoUnit.legion.miniman],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_necromancer",
            units: [gwoUnit.legion.necromancer],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_shank",
            units: [gwoUnit.legion.shank],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_maul",
            units: [gwoUnit.legion.maul],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_corsair",
            units: [gwoUnit.legion.corsair],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_scorpion",
            units: [gwoUnit.legion.scorpion],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_earthshaker",
            units: [gwoUnit.legion.earthshaker],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_deathmark",
            units: [gwoUnit.legion.deathmark],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_panzer",
            units: [gwoUnit.legion.panzer],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_havoc",
            units: [gwoUnit.legion.havoc],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_viper",
            units: [gwoUnit.legion.viper],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_paladin",
            units: [gwoUnit.legion.paladin],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_blackknight",
            units: [gwoUnit.legion.blackKnight],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_imperator",
            units: [gwoUnit.legion.imperator],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_fabberbasic",
            units: [
              gwoUnit.legion.fabricationWalker,
              gwoUnit.legion.armourFabricator,
              gwoUnit.legion.fabricationFlyer,
            ],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_fabberadv",
            units: [
              gwoUnit.legion.fabricationWalkerAdvanced,
              gwoUnit.legion.armourFabricatorAdvanced,
              gwoUnit.legion.fabricationFlyerAdvanced,
              gwoUnit.legion.fabricationStarship,
            ],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_jackal",
            units: [gwoUnit.legion.jackal],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_tola",
            units: [gwoUnit.legion.tola],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_scarab",
            units: [gwoUnit.legion.scarab],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_hive",
            units: [gwoUnit.legion.hive],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_archer",
            units: [gwoUnit.legion.archer],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_decimator",
            units: [gwoUnit.legion.decimator],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_rampart",
            units: [gwoUnit.legion.rampart],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_arsonist",
            units: [gwoUnit.legion.arsonist],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_irondome",
            units: [gwoUnit.legion.ironDome],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_supernova",
            units: [gwoUnit.legion.supernova],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_centurion",
            units: [gwoUnit.legion.centurion],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_fabberorbital",
            units: [gwoUnit.legion.fabricationStarship],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_monstrosity",
            units: [gwoUnit.legion.monstrosity],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_orbweaver",
            units: [gwoUnit.legion.orbweaver],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_shredder",
            units: [gwoUnit.legion.shredder],
            races: ["legion"],
          },
          {
            id: "zgwc_legion_upgrade_stoke",
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
    console.error("Zeps chaotic galactic war cards: " + (e.stack || e.message || e));
  }
})();
