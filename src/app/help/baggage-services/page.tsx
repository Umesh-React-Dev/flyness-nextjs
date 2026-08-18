import type { Metadata } from "next";
import HelpBaggageServicesPage from "@/features/help/HelpBaggageServicesPage";

export const metadata: Metadata = {
  title: "Baggage Services | Help & Support | flynas",
  description:
    "Manage baggage-related requests — complete a claim form, track an existing claim, or find unclaimed baggage.",
};

export default function Page() {
  return <HelpBaggageServicesPage />;
}
