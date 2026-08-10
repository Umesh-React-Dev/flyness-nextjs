import HelpFooter from "@/components/Help/HelpFooter";
import HelpHeader from "@/components/Help/HelpHeader";
import "@/styles/help-layout.scss";

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="helpLayout">
      <HelpHeader />
      <main className="helpLayout__main">{children}</main>
      <HelpFooter />
    </div>
  );
}
