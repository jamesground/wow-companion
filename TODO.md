# My Field Journal

## Foundation
- [x] Create Next.js project
- [x] Create Header component
- [x] Create Sidebar component
- [x] Add routing
- [ ] Navigation data model

## Characters
- [x] Character type
- [x] Character card
- [x] Character list
- [x] Integrate Blizzard character data
- [x] Replace local character data with Blizzard API data
- [x] Handle characters without full Blizzard profiles (level 10 and below)
- [x] Normalize Blizzard character data into MFJ character model
- [ ] Add character form/settings
- [ ] Mark characters as mains
- [ ] Persist character-specific settings
- [ ] Individual character detail page
- [ ] Validate remaining class emblems

## Midsummer
- [ ] Fire data
- [ ] Fire tracker
- [ ] Progress tracking
- [ ] Rewards page

## Profession Tracking and Armory Data
- [x] Build profession data model
- [x] Add profession tracking to characters
- [x] Define profession categories and types
- [x] Add profession validation
- [x] Add profession icons
- [x] Display profession icons on character cards
- [x] Add profession information tooltips
- [x] Track profession skill levels by expansion
- [x] Display current Midnight profession skill
- [ ] Add manual profession concentration tracking
- [ ] Investigate addon import for profession concentration
- [ ] Track profession tools
- [ ] Track recipes
- [ ] Track crafting materials
- [ ] Build crafting recommendation system

## Authentication / Blizzard API
- [x] Create Blizzard OAuth authorization flow
- [x] Exchange authorization code for access token
- [x] Store Blizzard access token in HTTP-only cookie
- [x] Retrieve Blizzard character summaries
- [x] Retrieve full Blizzard character profiles
- [x] Retrieve Blizzard profession data
- [x] Detect missing/invalid Blizzard authentication
- [x] Automatically re-authenticate when Blizzard returns 401
- [x] Redirect back to application after successful authentication
- [ ] Improve "Connect to Blizzard" / authentication UI
- [ ] Review Blizzard token expiration/re-authentication behavior
- [ ] Improve authentication error handling

## Recipes
- [ ] Investigate Blizzard `known_recipes` data
- [ ] Build recipe data model
- [ ] Retrieve recipe details
- [ ] Associate recipes with professions
- [ ] Associate recipes with expansions
- [ ] Determine recipe skill requirements
- [ ] Determine recipe crafting requirements
- [ ] Determine which characters know each recipe
- [ ] Determine which characters can currently craft each recipe
- [ ] Build "Who can craft X?" search

## Future
- [ ] Track crafting materials
- [ ] Track profession tools
- [ ] Account-wide crafting overview
- [ ] Character/profession comparison