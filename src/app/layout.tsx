import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}