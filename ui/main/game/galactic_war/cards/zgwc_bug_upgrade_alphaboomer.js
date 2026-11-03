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
        []
          .concat(
            gwoCard.mods(gwoUnit.bugs.alphaBoomerAmmo, "multiply", {
              splash_radius: 3,
            }),
            // The Bugs file misspells the key as full_splash_damage_radius, which
            // the engine ignores, so multiply would change nothing.  Set the real
            // key to three times the Bugs value of 3.
            gwoCard.mods(gwoUnit.bugs.alphaBoomerAmmo, "replace", {
              full_damage_splash_radius: 9,
            })
          )
      );
    },
  });
});
