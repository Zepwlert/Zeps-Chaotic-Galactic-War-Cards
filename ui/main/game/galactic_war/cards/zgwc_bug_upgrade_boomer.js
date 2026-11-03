define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Boomer Upgrade Tech",
    description: "!LOC:Triples the splash radius of the Boomer explosion.",
    icon: "coui://pa/units/land/bug_boomer/bug_boomer_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: [gwoUnit.bugs.boomer, gwoUnit.bugs.boomerBugBoomer],
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.boomerDeathExplosion, "multiply", {
            splash_radius: 3,
            full_damage_splash_radius: 3,
            "damage_volume.initial_radius": 3,
          })
          .concat(
            gwoCard.mods(gwoUnit.bugs.boomerAmmo, "multiply", {
              splash_radius: 3,
              full_damage_splash_radius: 3,
              "damage_volume.initial_radius": 3,
            })
          )
      );
    },
  });
});
