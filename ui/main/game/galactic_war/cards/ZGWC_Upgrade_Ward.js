
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Ward Production Tech",
    description:
      "!LOC:Ward Production Tech adds production of 80 metal to the Advanced vehicle mobile anti-nuke.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.ward,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.ward, "replace", { "production.metal": 80 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "TankAntiNuke",
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