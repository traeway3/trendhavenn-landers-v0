// lib/landers.ts

export type Lander = {
  slug: string;     // URL segment
  title: string;    // display title if needed
  ctaUrl: string;   // your affiliate link
};

// Keep landers here. The key and the slug should match.
export const landers: Record<string, Lander> = {
  "126-pics-vid-playful2691-bc804": {
    slug: "126-pics-vid-playful2691-bc804",
    title: "Playful Rewards",
    ctaUrl:
      "https://rewarduplevel.com/aff_c?offer_id=2691&aff_id=27696&source=126-pics-vid-playful2691-bc804",
  },
  // add more landers here as needed
};

export function getLander(slug: string): Lander | null {
  return landers[slug] ?? null;
}
