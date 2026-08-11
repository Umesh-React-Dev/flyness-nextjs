import type { StaticImageData } from "next/image";
import background from "@/assets/images/img-454.jpg";
import tirana from "@/assets/images/destinations/tirana.jpg";
import istanbul from "@/assets/images/destinations/istanbul.jpg";
import sarajevo from "@/assets/images/destinations/sarajevo.jpg";
import munich from "@/assets/images/destinations/munich.jpg";
import vienna from "@/assets/images/destinations/vienna.jpg";
import cairo from "@/assets/images/destinations/cairo.jpg";
import paris from "@/assets/images/destinations/paris.jpg";

export type DestinationBadge = "Popular" | "New";

export type Destination = {
  id: string;
  name: string;
  image: StaticImageData;
  badge: DestinationBadge;
  href: string;
};

export const SUMMER_DESTINATIONS_BG = background;

export const SUMMER_DESTINATIONS: Destination[] = [
  {
    id: "tirana",
    name: "Tirana",
    image: tirana,
    badge: "Popular",
    href: "#",
  },
  {
    id: "istanbul",
    name: "Istanbul",
    image: istanbul,
    badge: "Popular",
    href: "#",
  },
  {
    id: "sarajevo",
    name: "Sarajevo",
    image: sarajevo,
    badge: "Popular",
    href: "#",
  },
  {
    id: "munich",
    name: "Munich",
    image: munich,
    badge: "New",
    href: "#",
  },
  {
    id: "vienna",
    name: "Vienna",
    image: vienna,
    badge: "Popular",
    href: "#",
  },
  {
    id: "cairo",
    name: "Cairo",
    image: cairo,
    badge: "New",
    href: "#",
  },
  {
    id: "paris",
    name: "Paris",
    image: paris,
    badge: "Popular",
    href: "#",
  },
];
