import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import appGalleryImg from "@/assets/images/footer/app-gallery.png";
import appStoreImg from "@/assets/images/footer/app-store.png";
import awardsImg from "@/assets/images/footer/awards.png";
import googlePlayImg from "@/assets/images/footer/google-play.png";
import paymentsImg from "@/assets/images/footer/payments.png";
import qrCodeImg from "@/assets/images/footer/qr-code.png";
import "./FooterBottom.scss";

const storeLinks: { name: string; href: string; image: StaticImageData }[] = [
  {
    name: "Download on the App Store",
    href: "#",
    image: appStoreImg,
  },
  {
    name: "Get it on Google Play",
    href: "#",
    image: googlePlayImg,
  },
  {
    name: "Explore it on AppGallery",
    href: "#",
    image: appGalleryImg,
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "X", href: "#", icon: XIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "YouTube", href: "#", icon: YouTubeIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
  { name: "TikTok", href: "#", icon: TikTokIcon },
] as const;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.5 8.5H16V6h-1.7C12.1 6 11 7.2 11 9.3V11H9v2.5h2V18h2.5v-4.5H16l.5-2.5h-2.5V9.5c0-.6.2-1 1-1z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.8 6H18.5l-4.2 4.8L19 18h-3.4l-2.7-3.5L9.4 18H7.7l4.5-5.1L7 6h3.5l2.4 3.2L16.8 6zm-1.2 10.8h.9L9.5 7.1h-1l7.1 9.7z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm4.9-6.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zm2.5.9c-.1-1.5-.4-2.8-1.5-3.9S15.4 3.6 13.9 3.5C12.3 3.4 11.7 3.4 12 3.4s-.3 0-1.9.1c-1.5.1-2.8.4-3.9 1.5S4.9 7.5 4.8 9c-.1 1.6-.1 2.2-.1 3s0 1.4.1 3c.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.6.1 2.2.1 3 .1s1.4 0 3-.1c1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.6.1-2.2.1-3s0-1.4-.1-3zm-1.4 7.2a3.3 3.3 0 0 1-1.9 1.9c-.5.2-1.4.4-3.1.4s-2.6 0-3.1-.4a3.3 3.3 0 0 1-1.9-1.9c-.2-.5-.4-1.4-.4-3.1s0-2.6.4-3.1a3.3 3.3 0 0 1 1.9-1.9c.5-.2 1.4-.4 3.1-.4s2.6 0 3.1.4a3.3 3.3 0 0 1 1.9 1.9c.2.5.4 1.4.4 3.1s0 2.6-.4 3.1z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.6 8.2c-.2-.8-.8-1.4-1.6-1.6C16.6 6.3 12 6.3 12 6.3s-4.6 0-6 .3c-.8.2-1.4.8-1.6 1.6C4.1 9.6 4.1 12 4.1 12s0 2.4.3 3.8c.2.8.8 1.4 1.6 1.6 1.4.3 6 .3 6 .3s4.6 0 6-.3c.8-.2 1.4-.8 1.6-1.6.3-1.4.3-3.8.3-3.8s0-2.4-.3-3.8zM10.5 14.7V9.3L14.8 12l-4.3 2.7z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8.3 9.3H6V18h2.3V9.3zM7.1 6a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zM18 18h-2.3v-4.5c0-1.1-.4-1.8-1.4-1.8-.7 0-1.2.5-1.4 1-.1.2-.1.5-.1.8V18H10.5s0-7.4 0-8.7h2.3v1.2c.3-.5 1.1-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4.1V18z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.8 6.2c.7.7 1.6 1.2 2.6 1.4V9c-1.1 0-2.1-.3-3-1v5.4c0 2.7-2.2 4.9-4.9 4.9S6.6 16.1 6.6 13.4 8.8 8.5 11.5 8.5c.3 0 .5 0 .8.1v2.1c-.2-.1-.5-.1-.8-.1-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8V6.2h2.5z"
      />
    </svg>
  );
}

export default function FooterBottom() {
  return (
    <section className="footerBottom" aria-label="App, social, awards and payments">
      <div className="footerBottom__inner">
        <div className="footerBottom__col footerBottom__col--app">
          <h3 className="footerBottom__title">Flynas App – Your Journey, Your Way</h3>
          <p className="footerBottom__subtitle">Manage your trips anytime, anywhere.</p>
          <div className="footerBottom__appMedia">
            <Image
              src={qrCodeImg}
              alt="QR code to download the Flynas app"
              className="footerBottom__qr"
              width={120}
              height={120}
              style={{ height: "auto" }}
            />
            <ul className="footerBottom__stores">
              {storeLinks.map((store) => (
                <li key={store.name}>
                  <Link href={store.href} className="footerBottom__storeLink">
                    <Image
                      src={store.image}
                      alt={store.name}
                      width={118}
                      height={29}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footerBottom__col footerBottom__col--social">
          <h3 className="footerBottom__title">Flynas on Social</h3>
          <p className="footerBottom__subtitle">
            Get the latest news, travel deals, and support when you need it.
          </p>
          <ul className="footerBottom__socialList">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link href={href} className="footerBottom__socialLink" aria-label={name}>
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footerBottom__col footerBottom__col--awards">
          <h3 className="footerBottom__title">Middle East&apos;s Leading Low Cost Airline</h3>
          <Image
            src={awardsImg}
            alt="APEX Four Star 2024, Skytrax World Airline Awards Winner 2023, and World Travel Awards Winner"
            className="footerBottom__awards"
            width={280}
            height={104}
            style={{ height: "auto" }}
          />
        </div>

        <div className="footerBottom__col footerBottom__col--payments">
          <h3 className="footerBottom__title">Payment Partners</h3>
          <Image
            src={paymentsImg}
            alt="Payment partners including Apple Pay, mada, Visa, Mastercard, American Express, SADAD, STC Bank, PayPal, Tabby, Tamara, KNET, and madfu"
            className="footerBottom__payments"
            width={360}
            height={100}
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
