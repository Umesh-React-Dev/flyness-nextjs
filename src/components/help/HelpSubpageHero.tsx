import Image, { type StaticImageData } from "next/image";
import "./helpSubpage.scss";

type HelpSubpageHeroProps = {
  title: string;
  subtitle: string;
  decorationSrc: StaticImageData;
  titleId?: string;
};

export default function HelpSubpageHero({
  title,
  subtitle,
  decorationSrc,
  titleId,
}: HelpSubpageHeroProps) {
  return (
    <section className="helpSubpageHero" aria-labelledby={titleId}>
      <div className="helpSubpageHero__inner">
        <div className="helpSubpageHero__copy">
          <h1 id={titleId} className="helpSubpageHero__title">
            {title}
          </h1>
          <p className="helpSubpageHero__subtitle">{subtitle}</p>
        </div>
        <div className="helpSubpageHero__decoration" aria-hidden="true">
          <Image
            src={decorationSrc}
            alt=""
            width={386}
            height={78}
            className="helpSubpageHero__decorationImage"
          />
        </div>
      </div>
    </section>
  );
}
