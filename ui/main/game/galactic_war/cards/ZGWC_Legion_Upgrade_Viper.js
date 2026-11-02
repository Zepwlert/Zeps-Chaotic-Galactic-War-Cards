define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Viper Upgrade Tech",
    description:
      "!LOC:Gives the T1 Orbital fighter 50% range and 100% movement speed.",
    icon: "coui://pa/units/orbital/l_orbital_fighter/l_orbital_fighter_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.viper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.viper, "multiply", {
            "navigation.move_speed": 2,
            "navigation.turn_speed": 2,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.viperWeapon, "multiply", {
              max_range: 1.5,
            })
          )
      );
    },
  });
});
