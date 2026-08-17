"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
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

const storeLinks: { id: "appStore" | "googlePlay" | "appGallery"; href: string; image: StaticImageData }[] = [
  {
    id: "appStore",
    href: "#",
    image: appStoreImg,
  },
  {
    id: "googlePlay",
    href: "#",
    image: googlePlayImg,
  },
  {
    id: "appGallery",
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
  const { t } = useTranslation("home");

  return (
    <section className="footerBottom" aria-label={t("footer.bottomAria")}>
      <div className="footerBottom__inner">
        <div className="footerBottom__col footerBottom__col--app">
          <h3 className="footerBottom__title">{t("footer.appTitle")}</h3>
          <p className="footerBottom__subtitle">{t("footer.appSubtitle")}</p>
          <div className="footerBottom__appMedia">
            <Image
              src={qrCodeImg}
              alt={t("footer.qrAlt")}
              className="footerBottom__qr"
              width={120}
              height={120}
              style={{ height: "auto" }}
            />
            <ul className="footerBottom__stores">
              {storeLinks.map((store) => (
                <li key={store.id}>
                  <Link href={store.href} className="footerBottom__storeLink">
                    <Image
                      src={store.image}
                      alt={t(`footer.stores.${store.id}`)}
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
          <h3 className="footerBottom__title">{t("footer.socialTitle")}</h3>
          <p className="footerBottom__subtitle">{t("footer.socialSubtitle")}</p>
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
          <h3 className="footerBottom__title">{t("footer.awardsTitle")}</h3>
          <Image
            src={awardsImg}
            alt={t("footer.awardsAlt")}
            className="footerBottom__awards"
            width={280}
            height={104}
            style={{ height: "auto" }}
          />
        </div>

        <div className="footerBottom__col footerBottom__col--payments">
          <h3 className="footerBottom__title">{t("footer.paymentsTitle")}</h3>
          <Image
            src={paymentsImg}
            alt={t("footer.paymentsAlt")}
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
