import HelpFooter from "@/features/help/HelpFooter";
import HelpHeader from "@/features/help/HelpHeader";
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
