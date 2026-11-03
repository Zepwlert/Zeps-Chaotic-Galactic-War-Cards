// Vehicle Enthusiast start card. Every number lives in the call below; the shared
// work is done by loadout_tools.js.
define([
  "module",
  "cards/gwc_start",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/bank.js",
  "coui://ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/loadout_tools.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (module, GWCStart, myBank, tools, gwoCard, gwoGroup) {
  return tools.startCard(gwoCard, {
    id: module.id.substring(module.id.lastIndexOf("/") + 1),
    bank: myBank,
    start: GWCStart,
    name: "!LOC:Vehicle Enthusiast",
    description:
      "!LOC:Dominate through vehicles, massively increased vehicle power at the cost of everything else.",
    apply: function (inventory) {
      inventory.addUnits([gwoGroup.vehiclesBasic]);
      inventory.addMods(
        tools.enthusiast({
          units: gwoGroup.vehicles,
          ammo: gwoGroup.vehiclesAmmo,
          weapons: gwoGroup.vehiclesWeapons,
          factories: gwoGroup.vehicleFactories,
          range: 1.5,
          rof: 1.5,
          aim: true,
          cooldown: 0.75,
          energy: gwoGroup.energyWeapons,
          debuffs: [
            [gwoGroup.air, gwoGroup.airAmmo, 1.15],
            [gwoGroup.bots, gwoGroup.botsAmmo, 1.15],
            [gwoGroup.orbital, gwoGroup.orbitalAmmo, 1.15],
            [gwoGroup.naval, gwoGroup.navalAmmo, 1.5],
          ],
        })
      );
    },
  });
});
