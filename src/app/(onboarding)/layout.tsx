import Link from "next/link";
import Image from "next/image";
import { LanguageSelect } from "@/components/common/LanguageSelect";
import { ONBOARDING_FOOTER_LINKS } from "@/jsonStaticData/onboardingData";
import "@/styles/onboarding.scss";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="onboarding-layout">
      <header className="onboarding-header">
        <Link href="/" className="onboarding-header__logo" aria-label="flynas home">
          <Image
            src="https://static.flynas.com/images/IBE/assets/images/flynas-logo-green.svg"
            alt="flynas"
            width={140}
            height={48}
            priority
            unoptimized
          />
        </Link>
        <LanguageSelect />
      </header>

      <div className="onboarding-layout__content">{children}</div>

      <footer className="onboarding-footer">
        <nav className="onboarding-footer__nav" aria-label="Footer">
          {ONBOARDING_FOOTER_LINKS.map(({ label, href }, index) => (
            <span key={label} className="onboarding-footer__item">
              {index > 0 && (
                <span className="onboarding-footer__sep" aria-hidden="true">
                  |
                </span>
              )}
              <a href={href}>{label}</a>
            </span>
          ))}
        </nav>
      </footer>
    </div>
  );
}
