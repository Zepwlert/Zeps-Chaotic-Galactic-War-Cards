define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Sniper Upgrade Tech",
    description:
      "!LOC:Lets the Sniper shoot through objects that stand in the way of its target.",
    icon: "coui://pa/units/land/bug_sniper/bug_sniper_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.sniper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.bugs.sniperAmmo, "replace", {
          collision_check: "target",
        })
      );
    },
  });
});
