import type { StaticImageData } from "next/image";
import cairo from "@/assets/images/destinations/cairo.jpg";
import istanbul from "@/assets/images/destinations/istanbul.jpg";
import munich from "@/assets/images/destinations/munich.jpg";
import paris from "@/assets/images/destinations/paris.jpg";
import sarajevo from "@/assets/images/destinations/sarajevo.jpg";
import tirana from "@/assets/images/destinations/tirana.jpg";
import vienna from "@/assets/images/destinations/vienna.jpg";

export type FareOriginId =
  | "riyadh"
  | "jeddah"
  | "dammam"
  | "abha"
  | "qassim";

export type FareOrigin = {
  id: FareOriginId;
  label: string;
};

export type FareDeal = {
  id: string;
  city: string;
  price: string;
  cabin: string;
  image: StaticImageData;
  href: string;
};

export const FARE_ORIGINS: FareOrigin[] = [
  { id: "riyadh", label: "Riyadh" },
  { id: "jeddah", label: "Jeddah" },
  { id: "dammam", label: "Dammam" },
  { id: "abha", label: "Abha" },
  { id: "qassim", label: "Qassim" },
];

export const BEST_FARES_CTA = {
  label: "Find the best fares",
  href: "#",
};

const CABIN = "One Way / Economy";

export const FARES_BY_ORIGIN: Record<FareOriginId, FareDeal[]> = {
  riyadh: [
    {
      id: "ruh-tbilisi",
      city: "Tbilisi",
      price: "SAR 716.78*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
    {
      id: "ruh-sarajevo",
      city: "Sarajevo",
      price: "SAR 639.99*",
      cabin: CABIN,
      image: sarajevo,
      href: "#",
    },
    {
      id: "ruh-baku",
      city: "Baku",
      price: "SAR 567.65*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
    {
      id: "ruh-istanbul",
      city: "Istanbul",
      price: "SAR 459.00*",
      cabin: CABIN,
      image: istanbul,
      href: "#",
    },
    {
      id: "ruh-cairo",
      city: "Cairo",
      price: "SAR 339.00*",
      cabin: CABIN,
      image: cairo,
      href: "#",
    },
    {
      id: "ruh-paris",
      city: "Paris",
      price: "SAR 899.00*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
    {
      id: "ruh-tirana",
      city: "Tirana",
      price: "SAR 589.50*",
      cabin: CABIN,
      image: tirana,
      href: "#",
    },
    {
      id: "ruh-vienna",
      city: "Vienna",
      price: "SAR 749.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
  ],
  jeddah: [
    {
      id: "jed-sarajevo",
      city: "Sarajevo",
      price: "SAR 599.99*",
      cabin: CABIN,
      image: sarajevo,
      href: "#",
    },
    {
      id: "jed-casablanca",
      city: "Casablanca",
      price: "SAR 679.00*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
    {
      id: "jed-istanbul",
      city: "Istanbul",
      price: "SAR 429.00*",
      cabin: CABIN,
      image: istanbul,
      href: "#",
    },
    {
      id: "jed-cairo",
      city: "Cairo",
      price: "SAR 319.00*",
      cabin: CABIN,
      image: cairo,
      href: "#",
    },
    {
      id: "jed-munich",
      city: "Munich",
      price: "SAR 819.00*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
    {
      id: "jed-tirana",
      city: "Tirana",
      price: "SAR 549.00*",
      cabin: CABIN,
      image: tirana,
      href: "#",
    },
    {
      id: "jed-vienna",
      city: "Vienna",
      price: "SAR 729.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
    {
      id: "jed-paris",
      city: "Paris",
      price: "SAR 869.00*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
  ],
  dammam: [
    {
      id: "dmm-tbilisi",
      city: "Tbilisi",
      price: "SAR 709.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
    {
      id: "dmm-baku",
      city: "Baku",
      price: "SAR 539.00*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
    {
      id: "dmm-istanbul-sabiha",
      city: "Istanbul Sabiha",
      price: "SAR 579.41*",
      cabin: CABIN,
      image: istanbul,
      href: "#",
    },
    {
      id: "dmm-cairo",
      city: "Cairo",
      price: "SAR 339.00*",
      cabin: CABIN,
      image: cairo,
      href: "#",
    },
    {
      id: "dmm-sarajevo",
      city: "Sarajevo",
      price: "SAR 649.00*",
      cabin: CABIN,
      image: sarajevo,
      href: "#",
    },
    {
      id: "dmm-paris",
      city: "Paris",
      price: "SAR 919.00*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
    {
      id: "dmm-tirana",
      city: "Tirana",
      price: "SAR 599.00*",
      cabin: CABIN,
      image: tirana,
      href: "#",
    },
    {
      id: "dmm-vienna",
      city: "Vienna",
      price: "SAR 779.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
  ],
  abha: [
    {
      id: "ahh-dubai",
      city: "Dubai",
      price: "SAR 421.10*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
    {
      id: "ahh-cairo",
      city: "Cairo",
      price: "SAR 412.53*",
      cabin: CABIN,
      image: cairo,
      href: "#",
    },
    {
      id: "ahh-istanbul",
      city: "Istanbul",
      price: "SAR 529.00*",
      cabin: CABIN,
      image: istanbul,
      href: "#",
    },
    {
      id: "ahh-addis",
      city: "Addis Ababa",
      price: "SAR 518.78*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
    {
      id: "ahh-sarajevo",
      city: "Sarajevo",
      price: "SAR 689.00*",
      cabin: CABIN,
      image: sarajevo,
      href: "#",
    },
    {
      id: "ahh-tirana",
      city: "Tirana",
      price: "SAR 619.00*",
      cabin: CABIN,
      image: tirana,
      href: "#",
    },
    {
      id: "ahh-vienna",
      city: "Vienna",
      price: "SAR 809.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
    {
      id: "ahh-munich",
      city: "Munich",
      price: "SAR 859.00*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
  ],
  qassim: [
    {
      id: "elq-istanbul",
      city: "Istanbul",
      price: "SAR 499.00*",
      cabin: CABIN,
      image: istanbul,
      href: "#",
    },
    {
      id: "elq-trabzon",
      city: "Trabzon",
      price: "SAR 549.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
    {
      id: "elq-cairo-sphinx",
      city: "Cairo-Sphinx",
      price: "SAR 389.00*",
      cabin: CABIN,
      image: cairo,
      href: "#",
    },
    {
      id: "elq-abha",
      city: "Abha",
      price: "SAR 299.00*",
      cabin: CABIN,
      image: tirana,
      href: "#",
    },
    {
      id: "elq-sarajevo",
      city: "Sarajevo",
      price: "SAR 669.00*",
      cabin: CABIN,
      image: sarajevo,
      href: "#",
    },
    {
      id: "elq-paris",
      city: "Paris",
      price: "SAR 929.00*",
      cabin: CABIN,
      image: paris,
      href: "#",
    },
    {
      id: "elq-munich",
      city: "Munich",
      price: "SAR 849.00*",
      cabin: CABIN,
      image: munich,
      href: "#",
    },
    {
      id: "elq-vienna",
      city: "Vienna",
      price: "SAR 799.00*",
      cabin: CABIN,
      image: vienna,
      href: "#",
    },
  ],
};
