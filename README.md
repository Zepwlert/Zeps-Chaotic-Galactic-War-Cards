# Zeps Chaotic Galactic War Cards (ZGWC)

A Planetary Annihilation: TITANS mod that adds extra loadouts and tech cards to Galactic War.

Made possible because of: [Galactic War Overhaul](https://github.com/Quitch/GW-AI-Overhaul) (GWO).

Source and bug reports: <https://github.com/Zepwlert/Zeps-Chaotic-Galactic-War-Cards>

## What's in it

### Loadouts

This mod adds six different extra loadouts to pick from before starting a war, changing up the way you play.

| Loadout | Idea |
| --- | --- |
| Air Maniac | Massively more air power at the cost of everything else |
| Bot Maniac | The same, for bots |
| Vehicle Maniac | The same, for vehicles |
| Orbital Maniac | The same, for orbital units |
| One Man Army | Extreme health, damage, ROF, range and speed for units and defences, at 5x the cost |
| Regeneration | The Commander, units and structures heal over time, the Commander fastest |

### Tech cards

* Bug upgrades and Legion upgrades.
* A few special commander upgrades.
* General Upgrades that improve regular features.

## Install

Requires [Galactic War Overhaul](https://github.com/Quitch/GW-AI-Overhaul) (`com.pa.quitch.gwaioverhaul`).

Put the folder "ZepsChaoticGalacticWarCards" in your PA `client_mods` folder and enable it in the in-game Community Mods menu. Every player in a co-op war needs it.

## How it was made

Using Quitch's template I started building the cards. I built all the legion cards by hand and tested them. Learning more along the way. Ultimately my code looked like a mess so after finishing up the bug cards I sent it to Claude for some cleaning up, still does the same thing, just looks different.

## Development

Each card is one file in `ui/main/game/galactic_war/cards/`. The card lists and loaders are in
`ui/mods/com.pa.zepwlert.zepschaoticgalacticwarcards/`.

## Maintenance

- Built against Galactic War Overhaul 7.9.1 (the cards use its unit keys).
- The Warrior Grunt card depends on `/pa/units/land/bug_grunt_big/bug_grunt_ammo.json` in the Bugs mod, a file no Bugs
  unit uses and GWO has no key for. After each Bugs update, check that it still exists.

## License

Unlicense (public domain), see `LICENSE`.
