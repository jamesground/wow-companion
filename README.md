# My Field Journal

My Field Journal (MFJ) is a personal World of Warcraft companion application designed to help manage characters, professions, crafting, events, and other account-wide information.

MFJ is being built as a learning project while gradually becoming a practical tool for managing my WoW account.

## Current Features

### Characters

- Blizzard character data integration
- Character list
- Character cards
- Class-specific colors and emblems
- Main character indicator
- Item level display
- Filter characters to show mains only
- Sort characters by name, level, or item level
- Profession icons displayed on character cards
- Profession information tooltips
- Current Midnight profession skill display
- Support for characters level 10 and below that do not have full Blizzard profiles

Character data is retrieved from Blizzard's World of Warcraft API and normalized into MFJ's internal character model.

### Professions

- Profession data model
- Primary and secondary profession classification
- Crafting and gathering profession classification
- Character profession data
- Profession validation
- Profession icons
- Profession skill levels by expansion
- Current Midnight profession skill display
- Profession specialization display

Profession tiers are preserved by expansion so that historical profession data can be used later on individual character and profession pages.

Profession concentration is not currently provided by the Blizzard API and will eventually require manual tracking and/or addon data.

## Authentication & Blizzard API

MFJ uses Blizzard OAuth to authorize access to World of Warcraft account data.

- Blizzard OAuth authorization flow
- Authorization code exchange
- Server-side access token handling
- HTTP-only access token cookie
- Automatic detection of missing or invalid authentication
- Automatic re-authentication when Blizzard returns an unauthorized response
- Automatic return to the application after successful authentication

Blizzard API communication is handled server-side so that Blizzard client credentials and access tokens are not exposed to browser-side code.

## Planned Features

### Characters

- Character creation/editing and settings
- Persistent main character settings
- Individual character detail pages
- Validate remaining class emblems

### Midsummer

- Fire data
- Fire tracking
- Progress tracking
- Rewards tracking

### Professions & Crafting

- Manual profession concentration tracking
- Addon-based profession concentration import
- Profession tool tracking
- Recipe tracking
- Crafting material tracking
- Crafting recommendations
- "Who can craft this?" search

## Getting Started

### Requirements

- Node.js
- npm
- A Blizzard Developer account and OAuth client for Blizzard API integration

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
    Application pages and API routes

components/
    Reusable UI components

constants/
    Application-wide constants and styling data

data/
    Application data and service access

lib/
    Server-side services and Blizzard API integration

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

## Data Architecture

MFJ combines data from multiple sources.

### Blizzard API

Blizzard provides authoritative account and character information including:

- Character identity
- Realm
- Class and race
- Level
- Item level
- Specialization
- Professions
- Profession skill levels by expansion
- Known recipes

### MFJ

MFJ maintains application-specific information that Blizzard does not provide through the API, such as:

- Main character designation
- User preferences
- Other application-specific settings

### Future Addon Imports

Some useful World of Warcraft information is not exposed through Blizzard's API. MFJ may eventually support addon imports for data such as profession concentration and other account information.

## Long-Term Vision

MFJ is intended to grow beyond a simple character tracker into a personal World of Warcraft account management and planning tool.

The profession system is intended to go beyond simple tracking. Eventually, MFJ should be able to combine character professions, recipes, tools, concentration, materials, and crafting requirements to answer questions such as:

> "Which character can craft this item for another character right now?"

## Project Status

MFJ is actively under development. Features and architecture are expected to evolve as the project grows.