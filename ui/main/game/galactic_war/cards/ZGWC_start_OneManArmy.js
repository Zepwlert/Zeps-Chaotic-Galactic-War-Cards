// One Man Army start card.
//
// Every unit and defensive structure gets extreme health, range, rate of
// fire and speed, and costs five times as much.  The shared work is done by
// loadout_tools.js.  The numbers are in the tables below.
define([
  "module",
  "cards/gwc_start",
  "coui://ui/mods/com.pa.Zepwlert.ZepsChaoticGalacticWarCards/bank.js",
  "coui://ui/mods/com.pa.Zepwlert.ZepsChaoticGalacticWarCards/loadout_tools.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (module, GWCStart, myBank, tools, gwoCard, gwoUnit, gwoGroup) {
  // Mobile units: 5x health and cost, double speed.
  var MOBILE = {
    max_health: 5,
    "navigation.move_speed": 2,
    "navigation.brake": 2,
    "navigation.acceleration": 2,
    "navigation.turn_speed": 2,
    build_metal_cost: 5,
  };
  // Structures: 5x health and cost.
  var STRUCTURE = { max_health: 5, build_metal_cost: 5 };
  // Weapons: double range, five times the fire rate, four times the turning.
  var WEAPON = { max_range: 2, rate_of_fire: 5, yaw_rate: 4, pitch_rate: 4 };

  // Stats that change by a different amount for one file.  Each row is
  // [file, { stat: multiplier }].
  var PER_UNIT = [
    //Anti-nuke
    [gwoUnit.antiNukeLauncher, { max_health: 0.2, build_metal_cost: 0.2 }],
    // Lob: each launched Dox costs 5x ammo, matching the 5x cost of every
    // other unit. Spawned Dox are never built, so the cost nerf would
    // otherwise never apply to them.
    [gwoUnit.lobWeapon, { ammo_per_shot: 5 }],
    // Support units: cancel the buffs the stock cards give their role.
    // Icarus
    [gwoUnit.icarus, { max_health: 0.2, build_metal_cost: 0.2 }],
    [gwoUnit.icarusWeapon, { max_range: 0.5, rate_of_fire: 0.125 }],
    //Angel
    [gwoUnit.angel, { max_health: 0.2, build_metal_cost: 0.2 }],
    [gwoUnit.angelBeam, { max_range: 0.5, rate_of_fire: 0.125 }],
    //Mend
    [gwoUnit.mend, { max_health: 0.2, build_metal_cost: 0.2 }],
    //Ward
    [gwoUnit.ward, { max_health: 0.2, build_metal_cost: 0.2 }],
    // Manhattan
    [
      gwoUnit.manhattanDeath,
      {
        splash_radius: 1.5,
        full_damage_splash_radius: 1.5,
        burn_radius: 1.5,
        "damage_volume.initial_radius": 1.5,
        "damage_volume.radius_velocity": 1.5,
        "damage_volume.burnable_remove_radius": 1.5,
      },
    ],
    //Metal extractor changes
    [
      gwoUnit.metalExtractor,
      { "production.metal": 2.5, build_metal_cost: 2.5 },
    ],
    [
      gwoUnit.metalExtractorAdvanced,
      { "production.metal": 2.5, build_metal_cost: 2.5 },
    ],
    // Artemis (Orbital vs orbital railgun)
    [gwoUnit.artemisWeapon, { ammo_demand: 5 }],
    // Holkins (Adv arti)
    [gwoUnit.holkinsWeapon, { ammo_demand: 5 }],
    // Pelter (Basic arti)
    [gwoUnit.pelterWeapon, { ammo_demand: 5 }],
    // Spark (T1 Microwave unit)
    [gwoUnit.sparkWeapon, { ammo_demand: 5 }],
    //SXX (Orbital Laser Platform)
    [gwoUnit.sxxWeapon, { ammo_demand: 5 }],
    // Zeus (Air titan)
    [gwoUnit.zeusWeapon, { ammo_demand: 5 }],
    //MLA Second wave
    //Swordfish
    [
      "/pa/units/addon/swordfish/swordfish_weapon.json",
      { rate_of_fire: 5, max_range: 2 },
    ],
    //Andreas
    ["/pa/units/addon/andreas/andreas_tool.json", { ammo_demand: 5 }],
    // Legion Second Wave
    [
      "/pa/units/l_addon/anti_ground_satellite/almaz_tool.json",
      { ammo_demand: 5 },
    ],
    //Legion
    //Dauntless
    ["/pa/units/air/l_bomber/l_bomber_tool_weapon.json", { ammo_demand: 5 }],
    //Meteor
    [
      "/pa/units/air/l_air_carrier/l_air_carrier.json",
      { max_health: 5, build_metal_cost: 5 },
    ],
    //Meteor Weapon
    [
      "/pa/units/air/l_air_carrier/l_air_carrier_tool_weapon.json",
      {
        max_range: 2,
        rate_of_fire: 5,
        yaw_rate: 4,
        pitch_rate: 4,
        ammo_demand: 0.25,
        ammo_capacity: 0.25,
        ammo_per_shot: 0.05,
      },
    ],
    //Lockheed main weapon
    [
      "/pa/units/air/l_gunship/l_gunship_main_tool_weapon.json",
      { max_range: 2, rate_of_fire: 5, pitch_rate: 4, yaw_rate: 4 },
    ],
    //Lockheed Rocket weapon
    [
      "/pa/units/air/l_gunship/l_gunship_rocket_tool_weapon.json",
      {
        max_range: 2,
        rate_of_fire: 5,
        pitch_rate: 4,
        yaw_rate: 4,
        ammo_demand: 5,
      },
    ],
    //Imperator
    [
      "/pa/units/orbital/l_orbital_battleship/l_orbital_battleship_tool_weapon_drone.json",
      { ammo_per_shot: 0.2 },
    ],
    // Black knight
    [
      "/pa/units/orbital/l_orbital_laser/l_orbital_laser_tool_weapon.json",
      { max_range: 2, ammo_demand: 5 },
    ],
    //Paladin
    [
      "/pa/units/orbital/l_orbital_railgun/l_orbital_railgun_tool_weapon.json",
      { ammo_demand: 5 },
    ],
    //Panzer
    [
      "/pa/units/land/l_hover_tank_adv/l_hover_tank_adv_tool_weapon.json",
      { ammo_demand: 5 },
    ],
    //Havoc
    [
      "/pa/units/land/l_tank_swarm/l_tank_swarm_tool_weapon.json",
      { ammo_demand: 5 },
    ],
    //Shredder
    [
      "/pa/units/land/l_air_defense/l_air_defense_ammo.json",
      { max_velocity: 2, min_velocity: 2 },
    ],
    //Hive
    ["/pa/units/land/l_swarm_hive/l_swarm_hive_ammo.json", { lifetime: 2 }],
    // Bugs. The game copies the stock buffs onto the Bugs units by role, but
    // not onto every Bugs file. The entries below close the gaps; each one
    // was checked against a simulation of that copy.
    // Energy weapons the copy misses: 5x more energy for the 5x fire rate.
    [gwoUnit.bugs.behemothWeapon, { ammo_demand: 5 }],
    [gwoUnit.bugs.hydraWeapon, { ammo_demand: 5 }],
    [gwoUnit.bugs.matriarchWeapon, { ammo_demand: 5 }],
    [gwoUnit.bugs.boomerBugBoomerAltWeapon, { ammo_demand: 5 }],
    [gwoUnit.bugs.basiliskWeapon, { ammo_demand: 5 }],
    // Combat weapons the copy misses.
    [
      gwoUnit.bugs.gruntWeapon,
      { max_range: 2, rate_of_fire: 5, yaw_rate: 4, pitch_rate: 4 },
    ],
    [
      gwoUnit.bugs.warriorGruntBugGruntWeapon,
      { max_range: 2, rate_of_fire: 5, yaw_rate: 4, pitch_rate: 4 },
    ],
    [
      gwoUnit.bugs.phoenixWeapon,
      { max_range: 2, rate_of_fire: 5, yaw_rate: 4, pitch_rate: 4 },
    ],
    // Combat units the stock support-unit cancels hit by mistake: restore.
    [gwoUnit.bugs.harpy, { max_health: 5, build_metal_cost: 5 }],
    [gwoUnit.bugs.crusher, { max_health: 5, build_metal_cost: 5 }],
    [gwoUnit.bugs.harpyWeapon, { max_range: 2, rate_of_fire: 8 }],
    // Drones of the Lilu Nest and the Behemoth: they keep their normal
    // health, cost, speed and damage. The Lilu Nest launcher ammo lives twice
    // as long, so a drone still lands anywhere in the nest doubled range.
    [gwoUnit.bugs.liluNestAmmo, { lifetime: 2 }],
    [
      gwoUnit.bugs.lilu,
      {
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
    [
      gwoUnit.bugs.liluWeapon,
      { rate_of_fire: 1.6, yaw_rate: 0.25, pitch_rate: 0.25 },
    ],
    [
      gwoUnit.bugs.liluDeathWeapon,
      { rate_of_fire: 1.6, yaw_rate: 0.25, pitch_rate: 0.25 },
    ],
    // Bugs support units and fabbers: cancel the buffs they receive.
    [
      gwoUnit.bugs.firefly,
      {
        max_health: 0.2,
        build_metal_cost: 0.2,
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
    [
      gwoUnit.bugs.corvus,
      {
        max_health: 0.2,
        build_metal_cost: 0.2,
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
    [
      gwoUnit.bugs.runner,
      {
        max_health: 0.2,
        build_metal_cost: 0.2,
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
    [
      gwoUnit.bugs.fabricationBotAdvanced,
      {
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
    [
      gwoUnit.bugs.landedBugOrbitalFabricator,
      {
        "navigation.move_speed": 0.5,
        "navigation.brake": 0.5,
        "navigation.acceleration": 0.5,
        "navigation.turn_speed": 0.5,
      },
    ],
  ];

  // Stats that are set to a fixed value.
  var SET = [
    // Energy weapons: more ammo per shot or capacity than the stock numbers.
    //Bumblebee (T1 flyer)
    [
      gwoUnit.bumblebeeWeapon,
      { ammo_per_shot: 200, ammo_capacity: 300, ammo_demand: 1000 },
    ],
    // Wyrm (T2 heavy bomber)
    [
      gwoUnit.wyrmWeapon,
      { ammo_per_shot: 1500, ammo_capacity: 1500, ammo_demand: 7500 },
    ],
    // Meteor weapon draws energy
    [
      "/pa/units/air/l_air_carrier/l_air_carrier_tool_weapon.json",
      { ammo_source: "energy" },
    ],
  ];

  return tools.startCard(gwoCard, {
    id: module.id.substring(module.id.lastIndexOf("/") + 1),
    bank: myBank,
    start: GWCStart,
    name: "!LOC:One man army commander",
    description:
      "!LOC:Each unit and defensive structure has extreme health, damage, ROF, range and speed increases. Each unit and defensive structure costs 5X more to build.",
    apply: function (inventory) {
      inventory.addUnits([gwoGroup.botsBasic]);

      var mobile = [].concat(
        gwoGroup.airCombat,
        gwoGroup.vehiclesCombat,
        gwoGroup.botsCombat,
        gwoGroup.orbitalCombat,
        gwoGroup.navalCombat,
        gwoGroup.titans
      );
      var weapons = [].concat(
        gwoGroup.airWeapons,
        gwoGroup.vehiclesWeapons,
        gwoGroup.botsWeapons,
        gwoGroup.orbitalWeapons,
        gwoGroup.navalWeapons,
        gwoGroup.titansWeapons
      );
      var structures = [].concat(
        gwoGroup.structuresDefencesBasic,
        gwoGroup.structuresArtillery,
        gwoGroup.structuresDefencesAdvanced
      );
      // The Lob keeps its normal rate of fire: every shot spawns a fully
      // buffed Dox that skips the 5x build cost, so the Lob pays for its
      // shots instead (see "Lob" in PER_UNIT).
      var artillery = _.without(
        gwoGroup.structuresArtilleryWeapons,
        gwoUnit.lobWeapon
      );

      inventory.addMods(
        [].concat(
          tools.multiply(mobile, MOBILE),
          tools.multiply(weapons, WEAPON),
          tools.multiply(structures, STRUCTURE),
          // Defence weapons draw 5x the energy to keep up with 5x the fire rate.
          tools.multiply(gwoGroup.structuresDefencesWeapons, WEAPON),
          tools.multiply(gwoGroup.structuresDefencesWeapons, {
            ammo_demand: 5,
          }),
          tools.multiply(gwoGroup.structuresArtilleryAmmo, {
            splash_radius: 1.25,
            full_damage_splash_radius: 1.25,
          }),
          tools.multiply(gwoGroup.structuresArtilleryWeapons, {
            max_range: 2,
            yaw_rate: 4,
            pitch_rate: 4,
            max_firing_velocity: 2,
          }),
          tools.multiply(artillery, { rate_of_fire: 5 }),
          tools.table("multiply", PER_UNIT),
          tools.table("replace", SET)
        )
      );
    },
  });
});
