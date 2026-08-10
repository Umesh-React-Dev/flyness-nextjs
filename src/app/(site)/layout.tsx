import CopyrightSection from "@/components/Footer/CopyrightSection";
import Footer from "@/components/Footer/Footer";
import FooterBottom from "@/components/Footer/FooterBottom";
import FloatingLogo from "@/components/FloatingLogo";
import Header from "@/components/Header/Header";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import ScrollToTop from "@/components/ScrollToTop";
import SideServices from "@/components/SideServices";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NewsletterSubscribe />
      <Footer />
      <FooterBottom />
      <CopyrightSection />
      <SideServices />
      <ScrollToTop />
      <FloatingLogo />
    </>
  );
}
