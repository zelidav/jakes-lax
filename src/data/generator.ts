// ===================================================================
// Jake's Lax It Up — Rated Slogan Generator
// ===================================================================
// Rating scale:
//   1 = cleanest (locker-room-free, collegiate, pure fundamentals)
//   2 = light (family-friendly, mildly clever)
//   3 = house standard (the iconic "Clean Balls Only" universe)
//   4 = edgier (clear double-entendre, still wearable in public)
//   5 = dirtiest (locker-room raw, adult-only drops)
// ===================================================================

export type BallRating = 1 | 2 | 3 | 4 | 5;

export const RATING_LABELS: Record<BallRating, { short: string; long: string }> = {
  1: { short: "Clean", long: "Squeaky clean · Collegiate" },
  2: { short: "Tidy", long: "Light humor · Family friendly" },
  3: { short: "House", long: "House standard · Clean Balls Only" },
  4: { short: "Edgy", long: "Double-entendre · Wearable edge" },
  5: { short: "Dirty", long: "Locker room raw · 18+" },
};

// ------------------------------------------------------------------
// Front chest hits — short, punchy, legible on a left-chest print
// ------------------------------------------------------------------
export const FRONTS: Record<BallRating, string[]> = {
  1: [
    "CLEAN GAME",
    "FUNDAMENTALS",
    "DISCIPLINE",
    "STICKWORK",
    "EYES UP",
    "SCOOP IT",
    "HANDLES",
    "FORM FIRST",
    "ONE TEAM",
    "CRADLE ON",
  ],
  2: [
    "KEEP 'EM CLEAN",
    "BALL CHECK",
    "RESPECT",
    "BALLS MATTER",
    "BALL IN",
    "GAME READY",
    "STICK CHECK",
    "STAY CLEAN",
    "HANDLE 'EM",
    "ON TIME",
  ],
  3: [
    "CLEAN BALLS ONLY",
    "LOOSE BALLS",
    "GROUND GAME",
    "LONG STICK",
    "DON'T FUMBLE",
    "DO BETTER",
    "WIPE 'EM",
    "BALL HOG",
    "NO DROP ZONE",
    "CRADLE HARDER",
    "HANDLE IT",
    "DIRTY MIND",
  ],
  4: [
    "BIG STICK",
    "TWO HANDS",
    "HOLD MINE",
    "CHECK ME",
    "STROKE IT",
    "WHAT'S POPPIN",
    "BALLS OUT",
    "WIPE DOWN",
    "SQUEEZE",
    "DIRTY WORK",
    "GRIND MODE",
    "CLUTCH",
  ],
  5: [
    "ASK ME",
    "FILTHY",
    "CERTIFIED",
    "EAT IT",
    "NO LIMIT",
    "JUICED UP",
    "BALLS DEEP",
    "STICKY",
    "GRIP CHECK",
    "UNHINGED",
    "MESSY",
    "LOADED",
  ],
};

// ------------------------------------------------------------------
// Back prints — the punchline / main graphic callout
// ------------------------------------------------------------------
export const BACKS: Record<BallRating, string[]> = {
  1: [
    "Clean Balls Win Games",
    "Ground Balls Win Games",
    "Control Your Game",
    "Fundamentals Over Flash",
    "One Cradle At A Time",
    "Discipline Is Undefeated",
    "Every Scoop Counts",
    "Stickwork Wins",
    "Precision Over Power",
    "The Pipe Is Undefeated",
  ],
  2: [
    "Clean Balls Only",
    "Keep Your Balls Clean",
    "Respect The Balls",
    "Ball Control Matters",
    "Check Your Balls Before Game Time",
    "Balls Matter",
    "Keep 'Em Clean",
    "Handle With Care",
    "Watch Your Stick",
    "Wet Balls Wobble",
  ],
  3: [
    "Dirty Balls Don't Fly Straight",
    "Loose Balls Win Games",
    "Long Sticks Don't Matter Without Clean Balls",
    "Don't Drop The Balls",
    "Handle Your Balls",
    "Loose Balls Matter",
    "My Stick, My Balls, My Problem",
    "Nobody Likes Dirty Balls",
    "Two Balls, One Cradle",
    "Ground Ball, Get Up, Go",
    "Protect The Pill",
    "Keep Your Balls Off The Turf",
  ],
  4: [
    "Wipe Your Balls Down",
    "Cradle Harder Than That",
    "Big Stick Energy",
    "Hold My Balls While I Shoot",
    "I Know What You Did With Those Balls",
    "Dirty Balls, Wide Shots",
    "Keep Your Balls Outta My Crease",
    "Don't Squeeze The Balls",
    "These Aren't Practice Balls",
    "My Pole Is Long, My Balls Are Clean",
    "Two Hands Only",
    "Balls In My Court",
  ],
  5: [
    "Ask About My Balls",
    "My Balls Are Filthy",
    "Certified Ball Handler",
    "Two Hands On My Stick",
    "Eat My Cradle",
    "I Handle Dirty Balls Professionally",
    "Your Mom's Ground Ball",
    "Balls Deep Defense",
    "Grip It, Squeeze It, Shoot It",
    "Unhinged From The Whistle",
    "Dirty Balls, Dirty Money",
    "Goalies Lie About Me",
  ],
};

// ------------------------------------------------------------------
// Personalized slogan templates — use {name} as the placeholder token
// The generator substitutes the user's provided name at render time.
// ------------------------------------------------------------------
export const PERSONALIZED_BACKS: Record<BallRating, string[]> = {
  1: [
    "{name}'s Fundamentals",
    "{name} Plays Clean",
    "{name} Scoops First",
    "Trust {name}'s Stickwork",
    "{name}, One Cradle At A Time",
  ],
  2: [
    "{name} Keeps 'Em Clean",
    "{name}'s Ball Check",
    "{name} Respects The Balls",
    "{name}, Handle With Care",
    "Clean Balls Only, {name}",
  ],
  3: [
    "{name}'s Balls Don't Fly Straight",
    "{name} Can't Handle His Balls",
    "Long Sticks Don't Help {name}",
    "Don't Drop {name}'s Balls",
    "Nobody Likes {name}'s Dirty Balls",
    "{name}, Wipe Your Balls Down",
    "{name}'s Stick. {name}'s Balls. {name}'s Problem.",
    "Protect {name}'s Pill",
  ],
  4: [
    "Ask {name} About His Balls",
    "{name}'s Balls Are Wide",
    "{name} Squeezes The Balls",
    "{name}'s Got Big Stick Energy",
    "I Know What {name} Did With Those Balls",
    "Keep {name}'s Balls Outta The Crease",
    "These Aren't {name}'s Practice Balls",
  ],
  5: [
    "{name}'s Balls Are Filthy",
    "Certified: {name}",
    "Eat {name}'s Cradle",
    "{name} Handles Dirty Balls Professionally",
    "{name}'s Mom's Ground Ball",
    "Goalies Lie About {name}",
    "{name}, Balls Deep",
  ],
};

export const PERSONALIZED_FRONTS: Record<BallRating, string[]> = {
  1: ["{NAME}", "TEAM {NAME}", "{NAME} #1"],
  2: ["{NAME}'S", "CAPTAIN {NAME}", "{NAME} CLEAN"],
  3: ["{NAME}'S BALLS", "{NAME} ONLY", "ASK {NAME}"],
  4: ["{NAME}'S STICK", "DO IT, {NAME}", "{NAME}, WIPE"],
  5: ["{NAME}: CERTIFIED", "FILTHY {NAME}", "{NAME}, UNHINGED"],
};

// ------------------------------------------------------------------
// Design concept templates — scale in chaos with rating
// ------------------------------------------------------------------
export const CONCEPTS: Record<BallRating, string[]> = {
  1: [
    "A single centered lacrosse stick, thick vector outlines, negative space — feels like a classic collegiate patch.",
    "Minimal crossed sticks above a ball, tight varsity hierarchy, two colors max.",
    "A clean half-circle seal with the slogan arched above, ball at the anchor point.",
  ],
  2: [
    "Two crossed lacrosse sticks framing the type, varsity arch above, tonal palette.",
    "Helmet silhouette in profile, slogan running along the crown, light halftone fill.",
    "Dot-based ball pattern as a subtle background, bold sans-serif slogan centered.",
  ],
  3: [
    "Our helmet character mid-cradle reacting to the slogan — slightly annoyed, one eyebrow cocked.",
    "Ball mid-flight wobbling off-axis, motion-line streaks trailing, dirt speckles — clearly missing the pipe.",
    "Helmet character with both hands on the stick, sweat drops, slogan in a half-moon arc above.",
  ],
  4: [
    "Helmet character shrugging with an exaggerated 'what?' face, stick casually propped, slogan in big block letters below.",
    "Two lacrosse balls in a cradle pocket, one dirty and one clean, side-by-side — comparison-style composition.",
    "The character winking at the viewer, stick over shoulder, slogan in a banner ribbon across the chest.",
  ],
  5: [
    "Unhinged version of the helmet character — wide eyes, tongue out, stick swinging wildly. Deliberately brash composition.",
    "The character mid-yell at a ref, mud on the visor, dirt flying. Slogan slammed across top in distressed block type.",
    "Split composition: clean player top half, filthy player bottom half, same face, same pose. Slogan across the split.",
  ],
};

// ------------------------------------------------------------------
// Color palettes — one per drop; rating nudges the pick
// ------------------------------------------------------------------
export const PALETTES: Record<BallRating, string[]> = {
  1: ["Cream on Navy + Gold accent", "Chalk White on Ink + Gray", "Bone on Charcoal + Field Green"],
  2: ["Cream on Black + Field Green", "Athletic Gray on White + Navy", "Bone on Ink + Safety Orange"],
  3: ["Black on Cream + Safety Orange", "Cream on Black + Field Green", "White on Navy + Red"],
  4: ["Black on White + Blood Red", "Cream on Black + Safety Orange", "Navy on Cream + Hot Pink"],
  5: ["Safety Orange on Black + Neon Green", "Blood Red on Black + White", "Neon Yellow on Charcoal + Black"],
};

// ------------------------------------------------------------------
// Generator — pure function, runs client-side on every button press
// ------------------------------------------------------------------
export type GeneratedDesign = {
  rating: BallRating;
  ratingLabel: string;
  front: string;
  back: string;
  concept: string;
  palette: string;
  midjourneyPrompt: string;
  stylize: number;
  personalizedFor?: string;
};

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const STYLIZE_BY_RATING: Record<BallRating, number> = {
  1: 400,
  2: 500,
  3: 650,
  4: 800,
  5: 900,
};

// Trim, title-case ("adrian" → "Adrian"), defend against pure whitespace
function normalizeName(raw?: string): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  // Keep apostrophes / hyphens in names ("O'Brien", "Jean-Luc")
  return trimmed.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

export type GenerateOpts = {
  rating: BallRating;
  name?: string;
  /** Force personalized slogan if a name is provided. Defaults to true. */
  preferPersonalized?: boolean;
};

export function jakesLaxItUp({ rating, name, preferPersonalized = true }: GenerateOpts): GeneratedDesign {
  const normalized = normalizeName(name);

  // Back slogan — personalized templates win when a name is in play
  let back: string;
  if (normalized && preferPersonalized && PERSONALIZED_BACKS[rating].length > 0) {
    back = pick(PERSONALIZED_BACKS[rating]).replace(/\{name\}/g, normalized);
  } else if (normalized && PERSONALIZED_BACKS[rating].length > 0 && Math.random() < 0.35) {
    // Even if not preferring, sprinkle personalized sometimes
    back = pick(PERSONALIZED_BACKS[rating]).replace(/\{name\}/g, normalized);
  } else {
    back = pick(BACKS[rating]);
  }

  // Front chest hit — usually regular, but ~40% personalized when a name is provided
  let front: string;
  if (normalized && Math.random() < 0.4 && PERSONALIZED_FRONTS[rating].length > 0) {
    front = pick(PERSONALIZED_FRONTS[rating]).replace(/\{NAME\}/g, normalized.toUpperCase());
  } else {
    front = pick(FRONTS[rating]);
  }

  const concept = pick(CONCEPTS[rating]);
  const palette = pick(PALETTES[rating]);
  const stylize = STYLIZE_BY_RATING[rating];

  const midjourneyPrompt =
    `${concept} ` +
    `Colors: ${palette.toLowerCase()}. ` +
    `Bold t-shirt graphic, centered composition, thick outlines, high contrast, ` +
    `limited colors, screen print friendly, vector style, minimal background ` +
    `--style raw --ar 1:1 --s ${stylize}`;

  return {
    rating,
    ratingLabel: RATING_LABELS[rating].short,
    front,
    back,
    concept,
    palette,
    midjourneyPrompt,
    stylize,
    personalizedFor: normalized || undefined,
  };
}

// ------------------------------------------------------------------
// Hand-curated pairings — for the Shop / feature rails
// (pulled from the brand doc + expanded)
// ------------------------------------------------------------------
export type CuratedPairing = {
  rating: BallRating;
  tier: "A" | "B" | "C";
  front: string;
  back: string;
};

export const CURATED_PAIRINGS: CuratedPairing[] = [
  // Tier A — hero sellers
  { rating: 3, tier: "A", front: "Clean Balls Only", back: "Dirty Balls Don't Fly Straight" },
  { rating: 2, tier: "A", front: "Keep 'Em Clean", back: "Loose Balls Win Games" },
  { rating: 2, tier: "A", front: "Ball Check", back: "Check Your Balls Before Game Time" },
  { rating: 2, tier: "A", front: "Balls Matter", back: "Ball Control Matters" },
  // Tier B — funny / viral
  { rating: 3, tier: "B", front: "Handle 'Em", back: "Handle Your Balls" },
  { rating: 3, tier: "B", front: "Don't Fumble", back: "Don't Drop The Balls" },
  { rating: 2, tier: "B", front: "Respect", back: "Respect The Balls" },
  { rating: 4, tier: "B", front: "Do Better", back: "Nobody Likes Dirty Balls" },
  // Tier C — cleaner / premium
  { rating: 1, tier: "C", front: "Clean Game", back: "Clean Balls Only" },
  { rating: 1, tier: "C", front: "Fundamentals", back: "Clean Balls Win Games" },
  { rating: 1, tier: "C", front: "Discipline", back: "Control Your Balls" },
];

// ------------------------------------------------------------------
// Drop concepts — full 5–8 design drops
// ------------------------------------------------------------------
export type DropConcept = {
  id: string;
  title: string;
  tagline: string;
  rating: BallRating;
  palette: string;
  designs: string[];
};

export const DROP_CONCEPTS: DropConcept[] = [
  {
    id: "drop-01-clean-balls-only",
    title: "Drop 01 — Clean Balls Only",
    tagline: "The foundation. Say it with your chest.",
    rating: 3,
    palette: "Black / Cream / Field Green",
    designs: [
      "CLEAN BALLS ONLY / Dirty Balls Don't Fly Straight",
      "LOOSE BALLS / Loose Balls Win Games",
      "HANDLE 'EM / Handle Your Balls",
      "BALL CHECK / Check Your Balls Before Game Time",
      "FUNDAMENTALS / Clean Balls Win Games",
      "CRADLE ON / Keep Your Balls Clean",
    ],
  },
  {
    id: "drop-02-ground-ball-culture",
    title: "Drop 02 — Ground Ball Culture",
    tagline: "For the dirty-work players. Wings, FOGOs, long poles, fourth-line hustle.",
    rating: 3,
    palette: "Gray / Navy / White",
    designs: [
      "GROUND GAME / Loose Balls Matter",
      "SCOOP IT / Ground Balls Win Games",
      "NO DROP ZONE / Don't Drop The Balls",
      "LONG STICK / Doesn't Matter Without Clean Balls",
      "TWO HANDS / Two Hands Only",
      "WIPE 'EM / Wipe Your Balls Down",
    ],
  },
  {
    id: "drop-03-varsity-letter",
    title: "Drop 03 — Varsity Letter",
    tagline: "Old-school collegiate. 1-ball premium. Looks great on anyone.",
    rating: 1,
    palette: "Vintage Cream / Maroon / Navy",
    designs: [
      "CLEAN GAME / Fundamentals Over Flash",
      "DISCIPLINE / Discipline Is Undefeated",
      "STICKWORK / Stickwork Wins",
      "FORM FIRST / Precision Over Power",
      "ONE TEAM / Every Scoop Counts",
    ],
  },
  {
    id: "drop-04-locker-room-raw",
    title: "Drop 04 — Locker Room Raw",
    tagline: "4–5 ball. The one your parents ask about. 18+ marketing.",
    rating: 5,
    palette: "Black / Safety Orange / Neon Green",
    designs: [
      "ASK ME / Ask About My Balls",
      "FILTHY / My Balls Are Filthy",
      "CERTIFIED / Certified Ball Handler",
      "BALLS DEEP / Balls Deep Defense",
      "GRIP CHECK / Grip It, Squeeze It, Shoot It",
      "UNHINGED / Unhinged From The Whistle",
      "EAT IT / Eat My Cradle",
    ],
  },
  {
    id: "drop-05-home-and-away",
    title: "Drop 05 — Home & Away",
    tagline: "Same slogans, two colorways. Cream for home fits, Black for road trips.",
    rating: 3,
    palette: "Cream colorway · Black colorway",
    designs: [
      "CLEAN BALLS ONLY / Dirty Balls Don't Fly Straight (both colorways)",
      "LOOSE BALLS / Loose Balls Win Games (both)",
      "BALL CHECK / Check Your Balls Before Game Time (both)",
      "HANDLE 'EM / Handle Your Balls (both)",
      "Hat — CLEAN BALLS ONLY (cream + black)",
      "Sticker pack — the whole drop",
    ],
  },
  {
    id: "drop-06-team-drop",
    title: "Drop 06 — Team Drop",
    tagline: "Custom pairings for your squad. Name / number back, slogan front.",
    rating: 2,
    palette: "Team colors + Jake's Lax chest hit",
    designs: [
      "CLEAN BALLS ONLY + [NUMBER] on the back",
      "BALL CHECK + [LAST NAME]",
      "Team name hoodie — sleeve print",
      "Hat — team logo + JL stick-balls mark",
      "Shorts — small hit at hem",
    ],
  },
];
