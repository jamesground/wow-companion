# My Field Journal

My Field Journal (MFJ) is a personal World of Warcraft companion application designed to help manage characters, professions, crafting, events, and other account-wide information.

MFJ is being built as a learning project while gradually becoming a practical tool for managing my WoW account.

## Current Features

### Characters

- Character data model
- Character list
- Character cards
- Class-specific colors and emblems
- Main character indicator
- Item level display
- Filter characters to show mains only
- Sort characters by name, level, or item level
- Profession icons displayed on character cards
- Profession information tooltips

Character data is currently stored locally in `data/characters.ts`.

### Professions

- Profession data model
- Primary and secondary profession classification
- Crafting and gathering profession classification
- Character profession data
- Profession validation
- Profession skill and concentration display

## Planned Features

### Characters

- Character creation/editing
- Blizzard Armory integration
- Replace locally maintained character data with Blizzard API data

### Midsummer

- Fire data
- Fire tracking
- Progress tracking
- Rewards tracking

### Professions & Crafting

- Profession tracking per character
- Concentration tracking
- Profession tool tracking
- Recipe tracking
- Crafting material tracking
- Crafting recommendations

## Getting Started

### Requirements

- Node.js
- npm

### Development Server

Run the development server with:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

The development server automatically reloads as files are changed.

## Project Structure

```text
app/
    Application pages and routes

components/
    Reusable UI components

constants/
    Application-wide constants and styling data

data/
    Local application data

types/
    TypeScript type definitions

public/
    Static assets such as class and profession icons
```

## Development

Common commands:

```bash
npm run dev
```

Start the local development server.

```bash
npm run build
```

Create a production build.

```bash
npm run lint
```

Run the project's linting checks.

## Long-Term Vision

MFJ is intended to grow beyond a simple character tracker into a personal World of Warcraft account management and planning tool.

A major goal is integrating Blizzard's Armory/API data so that character and profession information can eventually be synchronized rather than maintained manually.

The profession system is intended to go beyond simple tracking. Eventually, MFJ should be able to combine character professions, recipes, tools, concentration, materials, and crafting requirements to answer questions such as:

> "Which character can craft this item for another character right now?"

## Project Status

MFJ is actively under development. Features and architecture are expected to evolve as the project grows.