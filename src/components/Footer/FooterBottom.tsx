import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TikTokIcon from "@/assets/icons/TikTokIcon";
import XIcon from "@/assets/icons/XIcon";
import YouTubeIcon from "@/assets/icons/YouTubeIcon";
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
