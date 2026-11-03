define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Hydra Upgrade Tech",
    description:
      "!LOC:Triples the number of projectiles the Hydra launches, but makes it less accurate.",
    icon: "coui://pa/units/land/bug_hydra/bug_hydra_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.hydra,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.hydra, "replace", {
            "tools.0.projectiles_per_fire": 3,
            "tools.0.muzzle_bone": [
              "socket_muzzle",
              "socket_muzzle",
              "socket_muzzle",
            ],
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.hydraWeapon, "multiply", {
              firing_standard_deviation: 1.5,
            })
          )
      );
    },
  });
});
