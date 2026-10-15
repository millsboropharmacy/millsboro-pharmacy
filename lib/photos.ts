// Stock photos (Unsplash license: free for commercial use, no attribution required).
// No people on purpose (Dhruv's call). Swap in real store photos once the doors open.
// Served through next/image, so Vercel resizes and caches them on the site's own domain.

export type Photo = { src: string; alt: string; position?: string; credit: string };

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`;

export const PHOTOS = {
  pillsBlue: {
    src: u("1628771065518-0d82f1938462"),
    alt: "Pills spilling out of an orange prescription bottle on a blue background",
    position: "60% 50%",
    credit: "unsplash.com/photos/w8p9cQDLX7I",
  },
  syringe: {
    src: u("1611694449252-02453c27856a"),
    alt: "Gloved hands drawing a vaccine dose from a vial",
    position: "50% 45%",
    credit: "unsplash.com/photos/cM1aU42FnRg",
  },
  vials: {
    src: u("1576671081837-49000212a370"),
    alt: "Vaccine vials lined up on a counter",
    position: "40% 50%",
    credit: "unsplash.com/photos/KMvoHcB-w5g",
  },
  delivery: {
    src: u("1638501478003-4e9761dcfe22"),
    alt: "A small package left on a doormat at a front door",
    position: "60% 70%",
    credit: "unsplash.com/photos/MuocECxCLlY",
  },
  bottle: {
    src: u("1631669969504-f35518bf96ba"),
    alt: "A prescription bottle of capsules on a table",
    position: "40% 50%",
    credit: "unsplash.com/photos/FDvArkoGyvI",
  },
  organizer: {
    src: u("1789983361946-1dd2258c7470"),
    alt: "A weekly pill organizer with morning and evening slots for each day",
    position: "50% 50%",
    credit: "unsplash.com/photos/Q-OXFcOXNPo",
  },
  blister: {
    src: u("1631549916768-4119b2e5f926"),
    alt: "Blister packs of tablets and capsules",
    position: "50% 50%",
    credit: "unsplash.com/photos/RS0-h_pyByk",
  },
  capsules: {
    src: u("1607619056574-7b8d3ee536b2"),
    alt: "A close-up of colorful capsules and tablets",
    position: "50% 50%",
    credit: "unsplash.com/photos/KltoLK6Mk-g",
  },
  pillsOrange: {
    src: u("1587854692152-cbe660dbde88"),
    alt: "Capsules tipped out of a bottle on an orange background",
    position: "60% 50%",
    credit: "unsplash.com/photos/ZHys6xN7sUE",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
