import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import FooterBottom from "@/components/Footer/FooterBottom";
import Header from "@/components/Header/Header";
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
        <Footer />
        <FooterBottom />
      </body>
    </html>
  );
}