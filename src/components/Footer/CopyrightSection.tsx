import Link from "next/link";
import "./CopyrightSection.scss";

const legalLinks = [
  { label: "Change cookie settings", href: "#" },
  { label: "Personal Data Privacy Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Fare Regulations", href: "#" },
  { label: "Site Map", href: "#" },
] as const;

export default function CopyrightSection() {
  return (
    <div className="copyrightSection" role="contentinfo" aria-label="Copyright and legal">
      <div className="copyrightSection__inner">
        <div className="copyrightSection__left">
          <p className="copyrightSection__copy">
            Copyright © {new Date().getFullYear()} flynas. All rights reserved.
          </p>
          <p className="copyrightSection__note">
            Site optimized for viewing in Firefox 29+, IE 10+, Safari 7+, and Chrome 35+
          </p>
        </div>

        <nav className="copyrightSection__links" aria-label="Legal">
          {legalLinks.map((link, index) => (
            <span key={link.label} className="copyrightSection__linkItem">
              {index > 0 && (
                <span className="copyrightSection__sep" aria-hidden="true">
                  |
                </span>
              )}
              <Link href={link.href} className="copyrightSection__link">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
