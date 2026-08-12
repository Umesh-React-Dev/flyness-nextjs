import type { Metadata } from "next";
import HelpComplaintFeedbackPage from "@/features/help/HelpComplaintFeedbackPage";

export const metadata: Metadata = {
  title: "Submit a Complaint | Help & Support | flynas",
  description:
    "Submit a complaint or feedback about your flynas experience. We're here to help make it right.",
};

export default function Page() {
  return <HelpComplaintFeedbackPage />;
}
