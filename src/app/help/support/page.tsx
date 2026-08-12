import type { Metadata } from "next";
import HelpSupportPage from "@/features/help/HelpSupportPage";

export const metadata: Metadata = {
  title: "Support | Help & Support | flynas",
  description:
    "Get support for flight cancellations, payment issues, boarding passes, invoices, and itineraries.",
};

export default function Page() {
  return <HelpSupportPage />;
}
