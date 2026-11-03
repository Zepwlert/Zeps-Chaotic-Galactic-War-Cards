define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Manticore Upgrade Tech",
    description:
      "!LOC:Triples the number of projectiles the Manticore launches, but makes it less accurate.",
    icon: "coui://pa/units/land/bug_manticore/bug_manticore_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.manticore,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.manticore, "replace", {
            "tools.0.projectiles_per_fire": 3,
            "tools.0.muzzle_bone": [
              "socket_left",
              "socket_right",
              "socket_left",
            ],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.manticoreWeapon, "add", {
              firing_standard_deviation: 2,
            })
          )
      );
    },
  });
});
