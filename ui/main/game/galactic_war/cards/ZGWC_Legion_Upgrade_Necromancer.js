define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Necromancer Upgrade Tech",
    description:
      "!LOC:50% cheaper unit summoning for the T2 Boom bot summoner.",
    icon: "coui://pa/units/land/l_necromancer/l_necromancer_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.necromancer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.necromancerWeapon, "multiply", {
          ammo_per_shot: 0.5,
        })
      );
    },
  });
});
