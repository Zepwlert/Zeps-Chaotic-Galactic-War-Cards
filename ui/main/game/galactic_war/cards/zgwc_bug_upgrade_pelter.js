define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Pelter Upgrade Tech",
    description:
      "!LOC:Doubles the rate of fire of the Pelter and halves its ammo cost per shot.",
    icon: "coui://pa/units/structure/bug_arty_small/bug_arty_small_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.pelter,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.pelterWeapon, "multiply", {
          rate_of_fire: 2,
          ammo_per_shot: 0.5,
        })
      );
    },
  });
});
