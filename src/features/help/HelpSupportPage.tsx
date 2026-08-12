import Image from "next/image";
import Link from "next/link";
import heroDecoration from "@/assets/images/help/support-hero-decoration.png";
import iconArrow from "@/assets/images/help/icon-arrow.svg";
import HelpSubpageHero from "@/components/help/HelpSubpageHero";
import HelpBreadcrumb from "@/components/help/HelpBreadcrumb";
import { HELP_SUPPORT_TOPICS } from "@/jsonStaticData/helpSupportData";
import "@/components/help/helpSubpage.scss";
import "./HelpSupportPage.scss";

export default function HelpSupportPage() {
  return (
    <div className="helpSubpage helpSupportPage">
      <HelpSubpageHero
        titleId="help-support-title"
        title="How can we help?"
        subtitle="Self-service portal for support and assistance."
        decorationSrc={heroDecoration}
      />

      <HelpBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Support" },
        ]}
      />

      <section className="helpSupportTopics" aria-label="Support topics">
        <ul className="helpSupportTopics__grid">
          {HELP_SUPPORT_TOPICS.map((topic) => (
            <li key={topic.id}>
              <Link href={topic.href} className="helpSupportCard">
                <div className="helpSupportCard__header">
                  <div className="helpSupportCard__heading">
                    <span className="helpSupportCard__iconWrap" aria-hidden="true">
                      <Image
                        src={topic.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="helpSupportCard__icon"
                      />
                    </span>
                    <h2 className="helpSupportCard__title">{topic.title}</h2>
                  </div>
                  <span className="helpSupportCard__arrow" aria-hidden="true">
                    <Image src={iconArrow} alt="" width={20} height={20} />
                  </span>
                </div>
                <p className="helpSupportCard__description">{topic.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
