define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/unit_groups.js",
], function (gwoCard, gwoUnit, gwoGroup) {
  return gwoCard.upgradeCard({
    name: "!LOC:Orbital Fabricator Upgrade Tech",
    description:
      "!LOC:Allows the Bug orbital fabricator to build all basic and advanced structures.",
    icon: "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/img/tech/gwc_metal_upgrade.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.orbitalFab,
    buff: function (inventory) {
      inventory.addUnits(gwoGroup.starterUnitsAdvanced);

      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.orbitalFab, "add", {
          buildable_types:
            " | (Land & Structure & Basic | Factory & Basic | FabBuild | Structure & Advanced | FabAdvBuild) & Custom2",
        })
      );
    },
  });
});
