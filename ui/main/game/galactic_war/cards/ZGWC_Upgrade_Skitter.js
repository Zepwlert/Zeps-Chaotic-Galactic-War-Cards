
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Skitter Production Tech",
    description:
      "!LOC:Skitter Production Tech adds production of 2 metal to the basic vehicle scout.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.skitter,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.skitter, "replace", { "production.metal": 2 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "LandScout",
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