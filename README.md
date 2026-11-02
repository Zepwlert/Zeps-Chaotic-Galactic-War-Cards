# Zeps Chaotic Galactic War Cards (ZGWC)

A Planetary Annihilation: TITANS client mod by **Zepwlert** that adds loadouts and tech cards to Galactic War.
It runs on top of [Galactic War Overhaul](https://github.com/Quitch/GW-AI-Overhaul) (GWO).

## What's in it

**Loadouts (6)**

| Loadout | Idea |
| --- | --- |
| Air Maniac | Massively more air power at the cost of everything else |
| Bot Maniac | The same, for bots |
| Vehicle Maniac | The same, for vehicles |
| Orbital Maniac | The same, for orbital units |
| One Man Army | Extreme health, damage, ROF, range and speed for units and defences, at 5x the cost |
| Regeneration | The Commander, units and structures heal over time, the Commander fastest |

**Tech cards**

- **Bug upgrades (51)** and **Legion upgrades (44)**: one card per unit.
- **Special upgrades (3)**
  - *Chemo Therapy*: removes 75% of the damage taken from being ill.
  - *True Regeneration*: all units and structures heal 250 hp per second.
  - *Warp Mastery*: warped units are not vulnerable and can move at once; the warp costs 75% less energy.
- **Protocol: ROF** and 10 general upgrades (energy and metal, Angel, Mend, Skitter, Stitch, Ward, and more).

## Install

Requires [Galactic War Overhaul](https://github.com/Quitch/GW-AI-Overhaul) (`com.pa.quitch.gwaioverhaul`).

Put this folder in your PA `client_mods` folder (for example `client_mods/ZepsChaoticGalacticWarCards`)
and enable it in the in-game Community Mods menu. Every player in a co-op war needs it.

## Development

```
npm install
npm run lint:js
```

Everything under `ui/main/game/galactic_war/cards/` is one card per file. The registration and card lists are in
`ui/mods/com.pa.Zepwlert.ZepsChaoticGalacticWarCards/`. The mod grew out of a card template; its guide is kept in
[`docs/TEMPLATE_GUIDE.md`](docs/TEMPLATE_GUIDE.md), and `CLAUDE.md` holds the rules for writing cards safely.

## License

Unlicense (public domain), see `LICENSE`.
