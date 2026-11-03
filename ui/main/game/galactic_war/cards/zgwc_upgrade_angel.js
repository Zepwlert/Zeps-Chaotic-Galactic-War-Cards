
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Angel Production Tech",
    description:
      "!LOC:Angel Production Tech adds production of 40 metal to the advanced air support platform.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.angel,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.angel, "replace", { "production.metal": 40 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "SupportPlatform",
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