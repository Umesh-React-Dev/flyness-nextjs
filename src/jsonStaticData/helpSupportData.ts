import type { StaticImageData } from "next/image";
import iconFlightCancel from "@/assets/images/help/icon-flight-cancel.svg";
import iconPayment from "@/assets/images/help/icon-payment.svg";
import iconBoardingPass from "@/assets/images/help/icon-boarding-pass.svg";
import iconInvoices from "@/assets/images/help/icon-invoices.svg";

export type HelpSupportTopic = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
  href: string;
};

export const HELP_SUPPORT_TOPICS: HelpSupportTopic[] = [
  {
    id: "flight-cancel-delay",
    title: "Flight Cancelation or Delay",
    description:
      "Was your flight delayed or cancelled, we're here to help you manage your options quickly and easily.",
    icon: iconFlightCancel,
    href: "#",
  },
  {
    id: "payment-issues",
    title: "Payment Issues",
    description:
      "If you encounter a payment problem such as a duplicate deduction or a failed transaction, we can help you with booking confirmation and processing refund requests.",
    icon: iconPayment,
    href: "#",
  },
  {
    id: "boarding-pass",
    title: "Boarding Pass",
    description:
      "In case of difficulty obtaining the boarding pass, we will provide you with the necessary support to issue it and complete travel procedures easily.",
    icon: iconBoardingPass,
    href: "#",
  },
  {
    id: "invoices-itinerary",
    title: "Invoices and Itinerary",
    description:
      "You can obtain a copy of the invoice or itinerary through: Resending it via email",
    icon: iconInvoices,
    href: "#",
  },
];
