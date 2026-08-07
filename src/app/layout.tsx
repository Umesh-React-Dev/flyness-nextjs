import type { Metadata } from "next";
import CopyrightSection from "@/components/Footer/CopyrightSection";
import Footer from "@/components/Footer/Footer";
import FooterBottom from "@/components/Footer/FooterBottom";
import FloatingLogo from "@/components/FloatingLogo";
import Header from "@/components/Header/Header";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import ScrollToTop from "@/components/ScrollToTop";
import SideServices from "@/components/SideServices";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Flyness",
  description: "Flight booking web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <NewsletterSubscribe />
        <Footer />
        <FooterBottom />
        <CopyrightSection />
        <SideServices />
        <ScrollToTop />
        <FloatingLogo />
      </body>
    </html>
  );
}