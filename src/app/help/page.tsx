import type { Metadata } from "next";
import Help from "@/components/Help/Help";

export const metadata: Metadata = {
  title: "Help & Support | flynas",
  description:
    "Get help with your flynas journey — track support cases, browse help topics, and find answers to frequently asked questions.",
};

export default function HelpPage() {
  return <Help />;
}
