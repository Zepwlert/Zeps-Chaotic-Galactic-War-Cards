// Orbital Enthusiast start card. Every number lives in the call below; the shared
// work is done by loadout_tools.js.
define([
  "module",
  "cards/gwc_start",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/bank.js",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/loadout_tools.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (module, GWCStart, myBank, tools, gwoCard, gwoUnit, gwoGroup) {
  return tools.startCard(gwoCard, {
    id: module.id.substring(module.id.lastIndexOf("/") + 1),
    bank: myBank,
    start: GWCStart,
    name: "!LOC:Orbital Enthusiast",
    description:
      "!LOC:Dominate through space, massively increased orbital power at the cost of everything else.",
    apply: function (inventory) {
      inventory.addUnits([gwoGroup.orbitalAdvanced]);
      inventory.addMods(
        tools.enthusiast({
          units: gwoGroup.orbitalMobile,
          ammo: gwoGroup.orbitalAmmo,
          weapons: gwoGroup.orbitalWeapons,
          range: 1.5,
          rof: 1.5,
          factories: [gwoUnit.orbitalFactory, gwoUnit.orbitalLauncher],
          aim: true,
          cooldown: 0.75,
          energy: gwoGroup.energyWeapons,
          debuffs: [
            [gwoGroup.air, gwoGroup.airAmmo, 1.15],
            [gwoGroup.vehicles, gwoGroup.vehiclesAmmo, 1.15],
            [gwoGroup.bots, gwoGroup.botsAmmo, 1.15],
            [gwoGroup.naval, gwoGroup.navalAmmo, 1.5],
          ],
          extra: tools
            .multiply(
              [
                gwoUnit.legion.blackKnightWeapon,
              ],
              { max_range: 1.5 }
            )
            .concat(
              // Imperator drone
              tools.multiply([gwoUnit.legion.meteoroidAmmo], { damage: 4 }),
              tools.multiply(
                [gwoUnit.legion.meteoroid],
                { max_health: 4 }
              )
            ),
        })
      );
    },
  });
});
