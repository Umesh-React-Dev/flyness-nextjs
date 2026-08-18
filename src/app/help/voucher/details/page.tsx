import type { Metadata } from "next";
import HelpVoucherDetailsPage from "@/features/help/HelpVoucherDetailsPage";

export const metadata: Metadata = {
  title: "Travel Voucher | Help & Support | flynas",
  description:
    "Check your flynas travel voucher balance, review terms and conditions, and find answers to voucher questions.",
};

export default function Page() {
  return <HelpVoucherDetailsPage />;
}
