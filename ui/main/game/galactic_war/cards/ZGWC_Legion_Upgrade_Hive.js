define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Hive Upgrade Tech",
    description:
      "!LOC:Adds 50% range and doubles the lifetime of the nanobots that come out of the T1 hive turret.",
    icon: "coui://pa/units/land/l_swarm_hive/l_swarm_hive_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.hive,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.hiveWeapon, "multiply", { max_range: 1.5 })
          .concat(
            gwoCard.mods(gwoUnit.legion.hiveAmmo, "multiply", { lifetime: 2 })
          )
      );
    },
  });
});
