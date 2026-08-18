import type { StaticImageData } from "next/image";
import iconClaimForm from "@/assets/images/help/icon-claim-form.svg";
import iconClaimTracking from "@/assets/images/help/icon-invoices.svg";
import iconFindBaggage from "@/assets/images/help/icon-find-baggage.svg";

export type HelpBaggageTopic = {
  id: string;
  icon: StaticImageData;
  href: string;
};

export const HELP_BAGGAGE_TOPICS: HelpBaggageTopic[] = [
  {
    id: "claim-form",
    icon: iconClaimForm,
    href: "#",
  },
  {
    id: "claim-tracking",
    icon: iconClaimTracking,
    href: "#",
  },
  {
    id: "find-baggage",
    icon: iconFindBaggage,
    href: "#",
  },
];
