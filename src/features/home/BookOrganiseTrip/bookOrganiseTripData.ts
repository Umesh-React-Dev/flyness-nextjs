import type { StaticImageData } from "next/image";
import hotelImg from "@/assets/images/img-09.jpg";
import carImg from "@/assets/images/img-010.jpg";
import eVisaImg from "@/assets/images/img-011.jpg";

export type BookOrganiseTripCard = {
  id: string;
  title: string;
  brand: string;
  image: StaticImageData;
  href: string;
};

export const BOOK_ORGANISE_TRIP_CARDS: BookOrganiseTripCard[] = [
  {
    id: "hotel",
    title: "Hotel",
    brand: "Booking.com",
    image: hotelImg,
    href: "#",
  },
  {
    id: "car",
    title: "Car",
    brand: "CarTrawler",
    image: carImg,
    href: "#",
  },
  {
    id: "evisa",
    title: "eVisa",
    brand: "sherpa°",
    image: eVisaImg,
    href: "#",
  },
];
