# ditto-intro

A terminal animation that plays a Pokéball throw sequence, then reveals Ditto settling into an idle loop — all rendered with colored block characters right in your terminal.

## Demo

A Pokéball rolls in from the right side of the screen, flies across, then Ditto pops out and settles into an idle loop.

## How It Works

The animation is driven by two frame arrays defined in `lib/frames.js`:

- **`pokeball`** — A multi-frame sequence of a Pokéball flying across the terminal, played at ~50ms per frame.
- **`ditto`** — A looping idle animation of Ditto, played at ~300ms per frame.

Each frame is a grid of single characters, where each character maps to a color:

| Char | Color  |
|------|--------|
| `r`  | Red    |
| `b`  | Black  |
| `w`  | White  |
| `y`  | Yellow |
| `p`  | Pink   |
| `g`  | Green  |
| `_`  | Space  |

[`chalk`](https://github.com/chalk/chalk) is used to render each character as a colored `█` block, creating pixel-art-style sprites in the terminal.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run directly

```bash
npm start
```

### Build & install as a global CLI command

```bash
npm run build
npm install -g .
```

Then run from anywhere:

```bash
ditto
```

## Requirements

- Node.js 14+ (ESM support)
- A terminal with true color (24-bit) support for best results
