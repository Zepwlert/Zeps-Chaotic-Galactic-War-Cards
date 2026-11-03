// SHARED TOOLS FOR THE ZGWC START CARDS
//
// The start cards (the Enthusiasts and One Man Army) all build their stat
// changes the same way.  The shared parts live here so that each card file
// holds only its own numbers.  Nothing in this file talks to the game: it only
// builds the lists of changes ("mods") that a card hands to the inventory.
define(function () {
  // One change for every stat of every file.
  //   mods(["/pa/units/a.json", "/pa/units/b.json"], "multiply", { max_health: 2 })
  var mods = function (files, op, stats) {
    var out = [];
    _.forEach(files, function (file) {
      _.forOwn(stats, function (value, path) {
        out.push({ file: file, path: path, op: op, value: value });
      });
    });
    return out;
  };

  var multiply = function (files, stats) {
    return mods(files, "multiply", stats);
  };

  // A table of [file, stats] rows, all with the same op.
  //   table("multiply", [[gwoUnit.mend, { max_health: 0.2 }], ...])
  var table = function (op, rows) {
    return _.flatten(
      _.map(rows, function (row) {
        return mods([row[0]], op, row[1]);
      })
    );
  };

  // What every unit of the favoured domain receives.
  var UNIT_BUFF = {
    max_health: 1.5,
    "navigation.move_speed": 1.5,
    "navigation.brake": 1.5,
    "navigation.acceleration": 1.5,
    "navigation.turn_speed": 1.5,
    build_metal_cost: 0.5,
  };

  // Every other domain: a quarter of the unit health and of its ammo damage,
  // and a higher price.
  var debuff = function (units, ammo, cost) {
    return multiply(units, { max_health: 0.25, build_metal_cost: cost }).concat(
      multiply(ammo, { damage: 0.25, splash_damage: 0.25 })
    );
  };

  // An Enthusiast loadout.
  //   units      the domain's units          ammo       its ammo files
  //   weapons    its weapon files            factories  its factories
  //   range, rof the weapon multipliers      aim        also double turret speed
  //   cooldown   factory cooldown multiplier (omit for none)
  //   energy     the game's energy weapons.  Those inside `weapons` get a
  //              rate of fire of `rof`, so they also get 1/rof of the ammo
  //              per shot and ammo capacity.  They then fire `rof` times as
  //              often for the same energy per second.
  //   debuffs    [[units, ammo, cost], ...] extra  any further changes
  var enthusiast = function (o) {
    var weaponStats = { max_range: o.range, rate_of_fire: o.rof };
    if (o.aim) {
      weaponStats.yaw_rate = 2;
      weaponStats.pitch_rate = 2;
    }
    var energyWeapons = _.intersection(o.weapons, _.uniq(o.energy));
    var out = multiply(o.units, UNIT_BUFF).concat(
      multiply(o.ammo, { damage: 1.35, splash_damage: 1.35 }),
      multiply(o.weapons, weaponStats),
      multiply(energyWeapons, {
        ammo_per_shot: 1 / o.rof,
        ammo_capacity: 1 / o.rof,
      }),
      multiply(o.factories || [], { factory_cooldown_time: o.cooldown })
    );
    _.forEach(o.debuffs, function (entry) {
      out = out.concat(debuff(entry[0], entry[1], entry[2]));
    });
    return out.concat(o.extra || []);
  };

  // Healing per second of the Regeneration Commander, per group: the
  // Terminal Commander's health loss turned around, times `scale`.  Returns
  // the list of changes.
  var regeneration = function (gwoUnit, gwoGroup, scale) {
    var groups = [
      [[gwoUnit.commander], 15],
      [gwoGroup.immobile, 3],
      [gwoGroup.factories, 7],
      [gwoGroup.mobile, 1],
    ];
    var out = [];
    _.forEach(groups, function (g) {
      out = out.concat(
        mods(g[0], "add", { passive_health_regen: g[1] * scale })
      );
    });
    return out;
  };

  // The object a start card returns.
  //   o.id, o.bank, o.start, o.apply, o.name, o.description, o.hint
  var startCard = function (gwoCard, o) {
    var loadout = gwoCard.loadout(
      { id: o.id },
      { bank: o.bank, start: o.start, apply: o.apply }
    );
    return {
      visible: _.constant(false),
      summarize: _.constant(o.name),
      icon: function () {
        return gwoCard.loadoutIcon(o.id);
      },
      describe: _.constant(o.description),
      hint: gwoCard.lockedHint(o.hint || "!LOC:Unlocked by default."),
      deal: gwoCard.startCard,
      buff: loadout.buff,
      dull: loadout.dull,
    };
  };

  return {
    mods: mods,
    multiply: multiply,
    table: table,
    enthusiast: enthusiast,
    regeneration: regeneration,
    startCard: startCard,
  };
});
