import Image from "next/image";
import Link from "next/link";
import { TRIP_EXTRAS } from "./tripExtrasData";
import "./TripExtras.scss";

export default function TripExtras() {
  return (
    <section className="tripExtras" aria-labelledby="trip-extras-title">
      <div className="tripExtras__inner">
        <header className="tripExtras__header">
          <h2 id="trip-extras-title" className="tripExtras__title">
            Enjoy your trip even more
          </h2>
          <p className="tripExtras__subtitle">
            Explore the additional services we offer to make your journey even
            more memorable.
          </p>
        </header>

        <ul className="tripExtras__grid">
          {TRIP_EXTRAS.map((extra) => (
            <li key={extra.id} className="tripExtras__card">
              <div className="tripExtras__imageWrap">
                <Image
                  src={extra.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="tripExtras__image"
                />
              </div>
              <div className="tripExtras__body">
                <h3 className="tripExtras__cardTitle">{extra.title}</h3>
                <p className="tripExtras__cardText">{extra.description}</p>
                <Link href={extra.href} className="tripExtras__cta">
                  {extra.ctaLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
