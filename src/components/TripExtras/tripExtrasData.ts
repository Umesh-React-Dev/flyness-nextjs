import type { StaticImageData } from "next/image";
import extraBaggage from "@/assets/images/services/extra-baggage.jpg";
import preorderedMeals from "@/assets/images/services/preordered-meals.jpg";
import seatSelection from "@/assets/images/services/seat-selection.jpg";
import upgradePremium from "@/assets/images/services/upgrade-premium.jpg";

export type TripExtra = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  ctaLabel: string;
};

export const TRIP_EXTRAS: TripExtra[] = [
  {
    id: "extra-baggage",
    title: "Extra Baggage",
    description:
      "Save up to 50% from airports prices, add your extra baggage now.",
    image: extraBaggage,
    href: "#",
    ctaLabel: "Add Now",
  },
  {
    id: "preordered-meals",
    title: "Pre-ordered Meals",
    description:
      "Feeling hungry? Choose one of our delicious meals to be specially served to you on your trip.",
    image: preorderedMeals,
    href: "#",
    ctaLabel: "Add Now",
  },
  {
    id: "seat-selection",
    title: "Seat Selection",
    description: "Hurry! Don't miss your chance to sit on your preferred seat.",
    image: seatSelection,
    href: "#",
    ctaLabel: "Add Now",
  },
  {
    id: "upgrade-premium",
    title: "Upgrade to Premium",
    description:
      "With flynas, you can now upgrade your flight to Premium Class, ensuring a luxurious and comfortable arrival at your destination.",
    image: upgradePremium,
    href: "#",
    ctaLabel: "Add Now",
  },
];
