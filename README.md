# Zeps Chaotic Galactic War Cards (ZGWC)

A Planetary Annihilation: TITANS mod that adds extra loadouts and tech cards to Galactic War.
Made possible because of: [Galactic War Overhaul](https://github.com/Quitch/GW-AI-Overhaul) (GWO).

## What's in it

**Loadouts**
This mod adds six different extra loadouts to pick from before starting a war, changing up the way you play.

**Tech cards**

- Bug upgrades and Legion upgrades.
- A few special commander upgrades.
- General Upgrades that improve regular features.

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
