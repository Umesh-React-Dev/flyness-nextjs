import type { StaticImageData } from "next/image";
import iconFlightCancel from "@/assets/images/help/icon-flight-cancel.svg";
import iconPayment from "@/assets/images/help/icon-payment.svg";
import iconBoardingPass from "@/assets/images/help/icon-boarding-pass.svg";
import iconInvoices from "@/assets/images/help/icon-invoices.svg";

export type HelpSupportTopic = {
  id: string;
  icon: StaticImageData;
  href: string;
};

export const HELP_SUPPORT_TOPICS: HelpSupportTopic[] = [
  {
    id: "flight-cancel-delay",
    icon: iconFlightCancel,
    href: "#",
  },
  {
    id: "payment-issues",
    icon: iconPayment,
    href: "#",
  },
  {
    id: "boarding-pass",
    icon: iconBoardingPass,
    href: "#",
  },
  {
    id: "invoices-itinerary",
    icon: iconInvoices,
    href: "#",
  },
];
