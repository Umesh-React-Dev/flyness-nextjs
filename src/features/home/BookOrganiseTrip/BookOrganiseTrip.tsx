import Image from "next/image";
import Link from "next/link";
import { BOOK_ORGANISE_TRIP_CARDS } from "./bookOrganiseTripData";
import "./BookOrganiseTrip.scss";

export default function BookOrganiseTrip() {
  return (
    <section className="bookOrganiseTrip" aria-labelledby="book-organise-trip-title">
      <div className="bookOrganiseTrip__inner">
        <header className="bookOrganiseTrip__header">
          <h2 id="book-organise-trip-title" className="bookOrganiseTrip__title">
            Book and organise your trip with flynas
          </h2>
          <p className="bookOrganiseTrip__subtitle">
            Enjoy our discount packages up to 50% off.
          </p>
        </header>

        <ul className="bookOrganiseTrip__grid">
          {BOOK_ORGANISE_TRIP_CARDS.map((card) => (
            <li key={card.id} className="bookOrganiseTrip__card">
              <Link href={card.href} className="bookOrganiseTrip__link">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="bookOrganiseTrip__image"
                />
                <span className="bookOrganiseTrip__overlay" aria-hidden="true" />
                {/* <span className="bookOrganiseTrip__cardTitle">{card.title}</span>
                <span className="bookOrganiseTrip__brand">{card.brand}</span> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
