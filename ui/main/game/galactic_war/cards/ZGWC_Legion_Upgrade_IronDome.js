define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Iron Dome Upgrade Tech",
    description:
      "!LOC:Give the Anti-Nuke 50% cheaper nukes and no build cooldown time.",
    icon: "coui://pa/units/land/l_anti_nuke_launcher/l_anti_nuke_launcher_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.ironDome,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.legion.ironDome, "multiply", {
            factory_cooldown_time: 0,
          })
          .concat(
            gwoCard.mods(gwoUnit.legion.ironDomeAmmo, "multiply", {
              build_metal_cost: 0.5,
            })
          )
      );
    },
  });
});
