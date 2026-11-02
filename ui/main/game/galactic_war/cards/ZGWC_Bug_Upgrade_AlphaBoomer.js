define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Alpha Boomer Upgrade Tech",
    description:
      "!LOC:Triples the splash radius of the Alpha Boomer explosion.",
    icon: "coui://pa/units/land/bug_boomer_big/bug_boomer_big_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.alphaBoomer,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.alphaBoomerAmmo, "multiply", {
          splash_radius: 3,
          full_splash_damage_radius: 3,
        })
      );
    },
  });
});
