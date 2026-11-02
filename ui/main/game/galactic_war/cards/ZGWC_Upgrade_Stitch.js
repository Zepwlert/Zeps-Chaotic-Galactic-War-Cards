
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Stitch Production Tech",
    description:
      "!LOC:Stitch Production Tech adds production of 3 metal to the basic bot combat healer.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.stitch,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.stitch, "replace", { "production.metal": 3 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "FabricationBotCombat",
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