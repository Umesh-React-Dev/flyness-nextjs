"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  BEST_FARES_CTA,
  FARES_BY_ORIGIN,
  FARE_ORIGINS,
  type FareOriginId,
} from "./bestFaresData";
import "./BestFares.scss";

const DESKTOP_PER_VIEW = 4;

export default function BestFares() {
  const [activeOrigin, setActiveOrigin] = useState<FareOriginId>("riyadh");
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(DESKTOP_PER_VIEW);

  const deals = FARES_BY_ORIGIN[activeOrigin];

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width < 640) setPerView(1);
      else if (width < 900) setPerView(2);
      else setPerView(DESKTOP_PER_VIEW);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const pageCount = Math.max(1, Math.ceil(deals.length / perView));

  useEffect(() => {
    setPage(0);
  }, [activeOrigin, perView]);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  const trackStyle = useMemo(
    () => ({
      width: `${(deals.length / perView) * 100}%`,
      transform: `translateX(-${(100 / deals.length) * page * perView}%)`,
    }),
    [deals.length, page, perView],
  );

  const cardWidthPercent = 100 / deals.length;

  const goToPrev = () => {
    setPage((current) => (current <= 0 ? pageCount - 1 : current - 1));
  };

  const goToNext = () => {
    setPage((current) => (current >= pageCount - 1 ? 0 : current + 1));
  };

  return (
    <section className="bestFares" aria-labelledby="best-fares-heading">
      <div className="bestFares__inner">
        <div className="bestFares__header">
          <div className="bestFares__tabs" role="tablist" aria-label="Departure city">
            <h2 id="best-fares-heading" className="bestFares__srOnly">
              Find the best fares
            </h2>
            {FARE_ORIGINS.map((origin) => {
              const isActive = origin.id === activeOrigin;
              return (
                <button
                  key={origin.id}
                  type="button"
                  role="tab"
                  id={`best-fares-tab-${origin.id}`}
                  aria-selected={isActive}
                  aria-controls="best-fares-panel"
                  className={`bestFares__tab${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveOrigin(origin.id)}
                >
                  {origin.label}
                </button>
              );
            })}
          </div>

          <Link href={BEST_FARES_CTA.href} className="bestFares__cta">
            {BEST_FARES_CTA.label}
          </Link>
        </div>

        <div
          id="best-fares-panel"
          role="tabpanel"
          aria-labelledby={`best-fares-tab-${activeOrigin}`}
          className="bestFares__slider"
          aria-roledescription="carousel"
          aria-label={`Best fares from ${FARE_ORIGINS.find((o) => o.id === activeOrigin)?.label}`}
        >
          <button
            type="button"
            className="bestFares__arrow bestFares__arrow--prev"
            aria-label="Previous fares"
            onClick={goToPrev}
          >
            <ChevronLeftIcon />
          </button>

          <div className="bestFares__viewport">
            <ul className="bestFares__track" style={trackStyle}>
              {deals.map((deal) => (
                <li
                  key={deal.id}
                  className="bestFares__item"
                  style={{ width: `${cardWidthPercent}%` }}
                >
                  <Link
                    href={deal.href}
                    className="bestFares__card"
                    aria-label={`${deal.city}, from ${deal.price}, ${deal.cabin}`}
                  >
                    <div className="bestFares__media">
                      <Image
                        src={deal.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 900px) 45vw, 25vw"
                        className="bestFares__image"
                      />
                      <div className="bestFares__gradient" aria-hidden="true" />
                    </div>

                    <div className="bestFares__content">
                      <span className="bestFares__city">{deal.city}</span>
                      <span className="bestFares__from">From</span>
                      <span className="bestFares__price">{deal.price}</span>
                      <span className="bestFares__cabin">{deal.cabin}</span>
                      <span className="bestFares__bookNow" aria-hidden="true">
                        Book Now
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="bestFares__arrow bestFares__arrow--next"
            aria-label="Next fares"
            onClick={goToNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 5L8 12l7 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
