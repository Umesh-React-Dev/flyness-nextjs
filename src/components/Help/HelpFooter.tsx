import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import iconFacebook from "@/assets/images/help/icon-facebook.svg";
import iconYoutube from "@/assets/images/help/icon-youtube.svg";
import iconInstagram from "@/assets/images/help/icon-instagram.svg";
import iconLinkedin from "@/assets/images/help/icon-linkedin.svg";
import "./HelpFooter.scss";

type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: StaticImageData;
};

const SOCIAL_LINKS: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "#", icon: iconFacebook },
  { id: "youtube", label: "YouTube", href: "#", icon: iconYoutube },
  { id: "instagram", label: "Instagram", href: "#", icon: iconInstagram },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: iconLinkedin },
];

export default function HelpFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="helpFooter">
      <div className="helpFooter__main">
        <div className="helpFooter__columns">
          <div className="helpFooter__column">
            <h3 className="helpFooter__title">flynas on Social</h3>
            <p className="helpFooter__text">
              Get the latest news, travel deals, and support when you need it.
            </p>
            <ul className="helpFooter__social">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="helpFooter__socialLink"
                    aria-label={link.label}
                  >
                    <Image
                      src={link.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="helpFooter__socialIcon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="helpFooter__column">
            <h3 className="helpFooter__title">Help</h3>
            <ul className="helpFooter__links">
              <li>
                <Link href="#" className="helpFooter__link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="helpFooter__column">
            <h3 className="helpFooter__title">Legal</h3>
            <ul className="helpFooter__links">
              <li>
                <Link href="#" className="helpFooter__link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="helpFooter__link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="helpFooter__copyright">
        <p className="helpFooter__copyrightText">
          © {year} flynas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
