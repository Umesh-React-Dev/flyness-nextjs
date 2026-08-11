import type { StaticImageData } from "next/image";
import competitiveFares from "@/assets/images/services/upgrade-premium.jpg";
import nasmiles from "@/assets/images/services/seat-selection.jpg";
import domestic from "@/assets/images/destinations/istanbul.jpg";
import international from "@/assets/images/destinations/cairo.jpg";
import fleet from "@/assets/images/destinations/munich.jpg";
import awardService from "@/assets/images/services/preordered-meals.jpg";
import comfort from "@/assets/images/services/extra-baggage.jpg";
import nasholidays from "@/assets/images/destinations/paris.jpg";

export type ReasonTile = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  area: string;
};

export type ReasonStat = {
  id: string;
  label: string;
  icon: "fleet" | "flights" | "passengers" | "routes";
};

export const REASONS_STATS: ReasonStat[] = [
  {
    id: "fleet",
    label: "Fleet of 67+ aircraft",
    icon: "fleet",
  },
  {
    id: "flights",
    label: "2000 flights every week",
    icon: "flights",
  },
  {
    id: "passengers",
    label: "110 million passengers since the launch in 2007",
    icon: "passengers",
  },
  {
    id: "routes",
    label: "Over 156 routes to 80+ destinations across more than 38 countries",
    icon: "routes",
  },
];

export const REASONS_TILES: ReasonTile[] = [
  {
    id: "competitive-fares",
    title: "Competitive fares",
    description: "tailored travel options and exclusive partner deals",
    image: competitiveFares,
    href: "#",
    area: "fares",
  },
  {
    id: "nasmiles",
    title: "nasmiles",
    description: "earn and redeem miles on every journey",
    image: nasmiles,
    href: "#",
    area: "nasmiles",
  },
  {
    id: "domestic",
    title: "Strong Domestic presence",
    description: "connecting cities across the Kingdom",
    image: domestic,
    href: "#",
    area: "domestic",
  },
  {
    id: "comfort",
    title: "Comfort & Privileges",
    description: "extra space, seats, and onboard perks",
    image: comfort,
    href: "#",
    area: "comfort",
  },
  {
    id: "international",
    title: "Extensive International network",
    description: "fly to destinations across more than 38 countries",
    image: international,
    href: "#",
    area: "international",
  },
  {
    id: "fleet",
    title: "Sustainable & Modern Fleet",
    description: "newer aircraft for a smoother, greener flight",
    image: fleet,
    href: "#",
    area: "fleet",
  },
  {
    id: "award",
    title: "Award-Winning Service",
    description: "recognized for hospitality that goes the extra mile",
    image: awardService,
    href: "#",
    area: "award",
  },
  {
    id: "nasholidays",
    title: "nasholidays",
    description: "flights and hotels bundled for the perfect getaway",
    image: nasholidays,
    href: "#",
    area: "nasholidays",
  },
];
