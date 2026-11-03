define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Zeus Upgrade Tech",
    description: "!LOC:Allows the Zeus to travel between planets.",
    icon: "coui://pa/units/air/bug_air_titan/bug_air_titan_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_orbital",
    requires: gwoUnit.bugs.zeus,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.zeus, "replace", {
          "navigation.inter_planetary_type": "system",
          gravwell_velocity_multiplier: 6,
          system_velocity_multiplier: 15,
        })
      );
    },
  });
});
