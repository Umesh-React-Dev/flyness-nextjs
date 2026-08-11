import type { StaticImageData } from "next/image";
import img33 from "@/assets/images/img-33.webp";
import img34 from "@/assets/images/img-34.webp";
import img35 from "@/assets/images/img35.webp";

export type HeroSlide = {
  id: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "vienna",
    image: img33,
    title: "Book your Summer Trip to Vienna",
    subtitle: "Starting from 649 SAR",
  },
  {
    id: "istanbul",
    image: img34,
    title: "Discover Istanbul This Summer",
    subtitle: "Starting from 599 SAR",
  },
  {
    id: "cairo",
    image: img35,
    title: "Escape to Cairo",
    subtitle: "Starting from 549 SAR",
  },
];

export const HERO_CTA = {
  label: "Book Now!",
  href: "#",
} as const;
