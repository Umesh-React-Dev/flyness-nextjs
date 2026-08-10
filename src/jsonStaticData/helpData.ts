import type { StaticImageData } from "next/image";
import iconSupport from "@/assets/images/help/icon-support.svg";
import iconInquiries from "@/assets/images/help/icon-inquiries.svg";
import iconFeedback from "@/assets/images/help/icon-feedback.svg";
import iconBaggage from "@/assets/images/help/icon-baggage.svg";
import iconVoucher from "@/assets/images/help/icon-voucher.svg";

export type HelpTag = {
  label: string;
  href?: string;
};

export type HelpCategory = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
  href: string;
  tags?: HelpTag[];
  featured?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "support",
    title: "Support",
    description:
      "Do you need help with your journey? We're here to help you with any problem you may face.",
    icon: iconSupport,
    href: "#",
    tags: [
      { label: "Cancel or Delay" },
      { label: "Payment Issues" },
      { label: "Boarding Pass" },
      { label: "Invoices & Itinerary" },
    ],
  },
  {
    id: "inquiries",
    title: "General Inquiries",
    description:
      "Have a question about your trip? We're happy to assist with baggage, seat selection, travel rules, and more.",
    icon: iconInquiries,
    href: "#",
  },
  {
    id: "feedback",
    title: "Complaints & Feedback",
    description:
      "Your feedback matters! Share your opinions with us so we can always provide you with the best experience and excellent services.",
    icon: iconFeedback,
    href: "#",
  },
  {
    id: "baggage",
    title: "Baggage Services",
    description:
      "Have you encountered an issue with your baggage? We're here to assist with lost, delayed, or damaged items, ensuring you have a smooth and worry-free travel experience.",
    icon: iconBaggage,
    href: "#",
    tags: [{ label: "Claim Form" }, { label: "Claim Tracking" }],
  },
  {
    id: "voucher",
    title: "flynas Travel Voucher",
    description:
      "You can check your voucher balance, view the expiration date, or request a refund easily.",
    icon: iconVoucher,
    href: "#",
    featured: true,
  },
];

export const HELP_FAQS: FaqItem[] = [
  {
    id: "refund-entitled",
    question: "When am I entitled to a refund?",
    answer:
      "You may be eligible for a refund of your ticket under the following circumstances:",
    bullets: [
      "If your flight has been cancelled.",
      "If your scheduled time of departure has been changed by at least 6 hours.",
    ],
  },
  {
    id: "refund-apply",
    question: "How do I apply for a refund in case of a flight disruption?",
    answer:
      "You can apply for a refund through Manage Booking on flynas.com or via the flynas app using your booking reference and passenger details.",
    bullets: [
      "Select the affected flight and choose the refund option.",
      "Submit the request and keep the confirmation email for your records.",
    ],
  },
  {
    id: "refund-time",
    question: "How long will it take for my refund to be paid?",
    answer:
      "Refund processing times depend on your original payment method and bank policies.",
    bullets: [
      "Credit or debit card refunds usually take 7–14 business days.",
      "flynas wallet refunds are typically credited within 24–48 hours.",
    ],
  },
  {
    id: "wallet",
    question: "What is flynas wallet and how do I access it?",
    answer:
      "flynas wallet is a digital balance linked to your flynas account that can be used toward future bookings and eligible services.",
    bullets: [
      "Sign in to your flynas account to view your wallet balance.",
      "You can also check your wallet from the My Account section in the flynas app.",
    ],
  },
  {
    id: "ota-refund",
    question: "How do I get a refund if I booked through an Online Travel Agent?",
    answer:
      "If you booked through an Online Travel Agent (OTA), refunds are usually handled by the agency that issued your ticket.",
    bullets: [
      "Contact the OTA directly with your booking reference.",
      "If the OTA asks you to contact flynas, open a support case with your booking details.",
    ],
  },
  {
    id: "refund-status",
    question: "How can I check the status of my refund?",
    answer:
      "You can track your refund status using the case tracking tool on this page or from Manage Booking after signing in.",
    bullets: [
      "Enter your case number or the email used for the request.",
      "You will also receive email updates when the refund status changes.",
    ],
  },
  {
    id: "airport-charge",
    question: "I was charged extra at the airport. Can I get a refund?",
    answer:
      "Extra airport charges may be refundable depending on the reason for the charge and supporting documents.",
    bullets: [
      "Keep your airport receipt and boarding pass.",
      "Submit a support request with the charge details for review.",
    ],
  },
  {
    id: "third-party",
    question:
      "How do I contact third parties such as Car Hire, Parking, or Hotels for a refund?",
    answer:
      "Third-party services such as car hire, parking, and hotels are managed by their own providers.",
    bullets: [
      "Use the booking confirmation email from the third-party provider to contact their support team.",
      "flynas can help guide you, but refund decisions for those services remain with the provider.",
    ],
  },
  {
    id: "payment-method",
    question: "Can I change my original payment method for my refund?",
    answer:
      "Refunds are generally returned to the original payment method used at the time of booking.",
    bullets: [
      "Card payments are refunded to the same card.",
      "In some cases, a flynas wallet credit may be offered as an alternative.",
    ],
  },
  {
    id: "cancelled-email",
    question:
      "I cannot find my cancelled flight email. How do I apply for a refund?",
    answer:
      "You can still request a refund without the cancellation email by using your booking reference and travel details.",
    bullets: [
      "Go to Manage Booking or open a support case on this page.",
      "Provide passenger names, flight date, and booking reference so we can locate the itinerary.",
    ],
  },
];
