define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Peacekeeper Upgrade Tech",
    description: "!LOC:Triples the T1 Assault bots health.",
    icon: "coui://pa/units/land/l_assault_bot/l_assault_bot_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.legion.peacekeeper,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard.mods(gwoUnit.legion.peacekeeper, "multiply", { max_health: 3 })
      );
    },
  });
});
