
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Solar array Production Tech",
    description:
      "!LOC:Solar array Production Tech adds production of 20 metal to the Advanced orbital solar array.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.solarArray,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.solarArray, "replace", { "production.metal": 20 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "SolarArray",
          value: [
            {
              test_type: "DesireMetal",
            },
            {
              test_type: "CanAffordBuildDemand",
            },
          ],
        },
      ]);
    },
  });
});