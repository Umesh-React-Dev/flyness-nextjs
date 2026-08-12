import type { Metadata } from "next";
import HelpInquiryPage from "@/features/help/HelpInquiryPage";

export const metadata: Metadata = {
  title: "Submit an Inquiry | Help & Support | flynas",
  description:
    "Submit a general inquiry about your trip — baggage, seat selection, travel rules, and more.",
};

export default function Page() {
  return <HelpInquiryPage />;
}
