define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Enforcer Upgrade Tech",
    description:
      "!LOC:Adds 50% Health, 25% Attack speed, 25% Damage, 15% Range and 50% movement speed to the T2 Assault bot.",
    icon: "coui://pa/units/land/l_riot_bot/l_riot_bot_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.enforcer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.enforcer, "multiply", {
            max_health: 1.5,
            "navigation.move_speed": 1.5,
            "navigation.turn_speed": 1.5,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.enforcerWeapon, "multiply", {
              rate_of_fire: 1.25,
              max_range: 1.15,
            }),
            gwoCard.mods(gwoUnit.legion.enforcerAmmo, "multiply", {
              damage: 1.25,
            })
          )
      );
    },
  });
});
