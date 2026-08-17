"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import {
  BEST_FARES_CTA,
  FARES_BY_ORIGIN,
  FARE_ORIGINS,
  type FareOriginId,
} from "./bestFaresData";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./BestFares.scss";

const DESKTOP_PER_VIEW = 4;

export default function BestFares() {
  const { t } = useTranslation("home");
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
          <div className="bestFares__tabs" role="tablist" aria-label={t(HOME_LABEL.FARES_CITIES_ARIA)}>
            <h2 id="best-fares-heading" className="bestFares__srOnly">
              {t(HOME_LABEL.FARES_HEADING)}
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
                  {t(`fares.origins.${origin.id}`)}
                </button>
              );
            })}
          </div>

          <Link href={BEST_FARES_CTA.href} className="bestFares__cta">
            {t(HOME_LABEL.FARES_CTA)}
          </Link>
        </div>

        <div
          id="best-fares-panel"
          role="tabpanel"
          aria-labelledby={`best-fares-tab-${activeOrigin}`}
          className="bestFares__slider"
          aria-roledescription="carousel"
          aria-label={t(HOME_LABEL.FARES_SLIDER_ARIA, {
            city: t(`fares.origins.${activeOrigin}`),
          })}
        >
          <button
            type="button"
            className="bestFares__arrow bestFares__arrow--prev"
            aria-label={t(HOME_LABEL.FARES_PREV)}
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
                    aria-label={t(HOME_LABEL.FARES_CARD_ARIA, {
                      city: t(`summer.cities.${deal.city.toLowerCase().replace(/\s+/g, "-")}`, {
                        defaultValue: deal.city,
                      }),
                      price: deal.price,
                      cabin: t(HOME_LABEL.FARES_CABIN),
                    })}
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
                      <span className="bestFares__city">
                        {t(`summer.cities.${deal.city.toLowerCase()}`, {
                          defaultValue: deal.city,
                        })}
                      </span>
                      <span className="bestFares__from">{t(HOME_LABEL.FARES_FROM)}</span>
                      <span className="bestFares__price">{deal.price}</span>
                      <span className="bestFares__cabin">{t(HOME_LABEL.FARES_CABIN)}</span>
                      <span className="bestFares__bookNow" aria-hidden="true">
                        {t(HOME_LABEL.FARES_BOOK_NOW)}
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
            aria-label={t(HOME_LABEL.FARES_NEXT)}
            onClick={goToNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
