
define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Mend Production Tech",
    description:
      "!LOC:Mend Production Tech adds production of 18 metal to the advanced bot combat healer.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_storage_compression_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_economy",
    requires: gwoUnit.mend,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.mend, "replace", { "production.metal": 18 })
      );

      inventory.addAIMods([
        {
          type: "factory",
          op: "new",
          toBuild: "FabricationBotCombatAdv",
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