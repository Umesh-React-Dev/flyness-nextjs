import type { StaticImageData } from "next/image";
import iconSupport from "@/assets/images/help/icon-support.svg";
import iconInquiries from "@/assets/images/help/icon-inquiries.svg";
import iconFeedback from "@/assets/images/help/icon-feedback.svg";
import iconBaggage from "@/assets/images/help/icon-baggage.svg";
import iconVoucher from "@/assets/images/help/icon-voucher.svg";

export type HelpCategory = {
  id: string;
  icon: StaticImageData;
  href: string;
  featured?: boolean;
  tagCount?: number;
};

export type FaqItem = {
  id: string;
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "support",
    icon: iconSupport,
    href: "/help/support",
    tagCount: 4,
  },
  {
    id: "inquiries",
    icon: iconInquiries,
    href: "/help/inquiry",
  },
  {
    id: "feedback",
    icon: iconFeedback,
    href: "/help/complaint-feedback",
  },
  {
    id: "baggage",
    icon: iconBaggage,
    href: "#",
    tagCount: 2,
  },
  {
    id: "voucher",
    icon: iconVoucher,
    href: "#",
    featured: true,
  },
];

export const HELP_FAQS: FaqItem[] = [
  { id: "refund-entitled" },
  { id: "refund-apply" },
  { id: "refund-time" },
  { id: "wallet" },
  { id: "ota-refund" },
  { id: "refund-status" },
  { id: "airport-charge" },
  { id: "third-party" },
  { id: "payment-method" },
  { id: "cancelled-email" },
];
