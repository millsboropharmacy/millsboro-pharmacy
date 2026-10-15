// Stock photos (Unsplash license: free for commercial use, no attribution required).
// Swap these for real photos of the store, Dhruv and the team once the doors open.
// Served through next/image, so Vercel resizes and caches them on the site's own domain.

export type Photo = { src: string; alt: string; position?: string; credit: string };

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75`;

export const PHOTOS = {
  consult: {
    src: u("1576091358783-a212ec293ff3"),
    alt: "A pharmacist going over a prescription bottle with a patient at the counter",
    position: "30% 40%",
    credit: "unsplash.com/photos/NNpo-liY5aU",
  },
  vaccine: {
    src: u("1576765608866-5b51046452be"),
    alt: "An older man getting a vaccine in his upper arm",
    position: "40% 35%",
    credit: "unsplash.com/photos/bsT-u4nBe7o",
  },
  delivery: {
    src: u("1638501478003-4e9761dcfe22"),
    alt: "A small package left on a doormat at a front door",
    position: "60% 70%",
    credit: "unsplash.com/photos/MuocECxCLlY",
  },
  syringe: {
    src: u("1611694449252-02453c27856a"),
    alt: "Gloved hands drawing a vaccine dose from a vial",
    position: "50% 45%",
    credit: "unsplash.com/photos/cM1aU42FnRg",
  },
  organizer: {
    src: u("1789983361946-1dd2258c7470"),
    alt: "A weekly pill organizer with morning and evening slots for each day",
    position: "50% 50%",
    credit: "unsplash.com/photos/Q-OXFcOXNPo",
  },
  organizerHand: {
    src: u("1563213126-a4273aed2016"),
    alt: "Someone taking the day's pills from a pill organizer",
    position: "55% 50%",
    credit: "unsplash.com/photos/1TL8AoEDj_c",
  },
  takingPill: {
    src: u("1771527114640-b618002269d4"),
    alt: "An older woman taking a pill",
    position: "45% 50%",
    credit: "unsplash.com/photos/MRqbrr-vOuU",
  },
  shelves: {
    src: u("1580281657527-47f249e8f4df"),
    alt: "A pharmacist pulling a medication from the shelf",
    position: "35% 45%",
    credit: "unsplash.com/photos/byGTytEGjBo",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
