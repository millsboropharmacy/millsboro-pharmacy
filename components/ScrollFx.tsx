"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll effects: sections fade up as they come into view, and the hero art drifts
// slower than the page (light parallax). Everything stays visible without JavaScript,
// and nothing moves for people who turn on "reduce motion".
const TARGETS = [
  ".actions__h",
  ".action",
  ".quote-band__q",
  ".section .h2",
  ".section__sub",
  ".perk",
  ".ico--page",
  ".step",
  ".flow > div",
  ".equation__row",
  ".svc__intro",
  ".svc__list li",
  ".indie__h",
  ".indie > div",
  ".rph",
  ".ins__list li",
  ".faq details",
  ".visit__grid > *",
  ".svc-index li",
  ".town",
  ".pull",
  ".panel",
  ".need",
  ".prose > *",
  ".aside",
].join(",");

export function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("fx");

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const seen = new Map<Element, number>();
    els.forEach((el) => {
      // stagger siblings a little
      const parent = el.parentElement!;
      const i = seen.get(parent) ?? 0;
      seen.set(parent, i + 1);
      el.style.setProperty("--fx-delay", `${Math.min(i, 6) * 70}ms`);
      el.classList.add("fx-item");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fx-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));

    // hero parallax
    const art = document.querySelector<SVGElement>(".hero-art");
    let raf = 0;
    const onScroll = () => {
      if (!art) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700);
        art.style.transform = `translateY(${y * 0.18}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
