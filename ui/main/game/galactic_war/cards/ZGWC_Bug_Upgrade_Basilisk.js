define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/cards.js",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/units.js",
], function (gwoCard, gwoUnit) {
  return gwoCard.upgradeCard({
    name: "!LOC:Basilisk Upgrade Tech",
    description:
      "!LOC:Turns the Basilisk attack into projectiles that spawn a Boomer where they land, and makes it fire only in bursts once its ammo is full, with double the time between shots.",
    icon: "coui://pa/units/air/bug_basilisk/bug_basilisk_icon_buildbar.png",
    audio: "/VO/Computer/gw/board_tech_available_ammunition",
    requires: gwoUnit.bugs.basilisk,
    buff: function (inventory) {
      inventory.addMods(
        gwoCard
          .mods(gwoUnit.bugs.basiliskWeapon, "multiply", { rate_of_fire: 0.5 })
          .concat(
            gwoCard.mods(gwoUnit.bugs.basiliskWeapon, "replace", {
              carpet_fire: true,
              carpet_wait_for_full_ammo: true,
            }),
            gwoCard.mods(gwoUnit.bugs.basiliskAmmo, "replace", {
              ammo_type: "AMMO_Projectile",
              flight_type: "Ballistic",
              flight_layer: "Air",
              spawn_layers: "WL_Air",
              model: { filename: "/pa/units/air/shell/shell.papa" },
              fx_trail: {
                filename: "/pa/effects/specs/shell_proj_trail.pfx",
                offset: [0, 0.8, 0],
              },
              physics: {
                type: "Projectile",
                radius: 1,
                gravity_scalar: 3,
                add_to_spatial_db: false,
                allow_underground: true,
              },
              initial_velocity: 300,
              max_velocity: 300,
              lifetime: 1,
              spawn_unit_on_death: gwoUnit.bugs.boomer,
              spawn_unit_on_death_with_velocity: false,
            }),
            [
              {
                file: gwoUnit.bugs.basiliskAmmo,
                path: "spawn_unit_on_death",
                op: "tag",
              },
            ]
          )
      );
    },
  });
});
