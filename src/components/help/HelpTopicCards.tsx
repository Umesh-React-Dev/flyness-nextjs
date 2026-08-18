import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import iconArrow from "@/assets/images/help/icon-arrow.svg";
import "./HelpTopicCards.scss";

export type HelpTopicCardItem = {
  id: string;
  icon: StaticImageData;
  href: string;
  title: string;
  description: string;
};

type HelpTopicCardsProps = {
  items: HelpTopicCardItem[];
  ariaLabel: string;
};

export default function HelpTopicCards({ items, ariaLabel }: HelpTopicCardsProps) {
  return (
    <section className="helpTopicCards" aria-label={ariaLabel}>
      <ul className="helpTopicCards__grid">
        {items.map((topic) => (
          <li key={topic.id}>
            <Link href={topic.href} className="helpTopicCard">
              <div className="helpTopicCard__header">
                <div className="helpTopicCard__heading">
                  <span className="helpTopicCard__iconWrap" aria-hidden="true">
                    <Image
                      src={topic.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="helpTopicCard__icon"
                    />
                  </span>
                  <h2 className="helpTopicCard__title">{topic.title}</h2>
                </div>
                <span className="helpTopicCard__arrow" aria-hidden="true">
                  <Image src={iconArrow} alt="" width={20} height={20} />
                </span>
              </div>
              <p className="helpTopicCard__description">{topic.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
