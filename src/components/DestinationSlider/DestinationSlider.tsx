"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import "./DestinationSlider.scss";

export type DestinationSlide = {
  id: string;
  name: string;
  image: StaticImageData;
  badge: string;
  href: string;
};

type DestinationSliderProps = {
  destinations: DestinationSlide[];
  /** Cards shown at once on desktop (default 4) */
  visibleCount?: number;
};

export default function DestinationSlider({
  destinations,
  visibleCount = 4,
}: DestinationSliderProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [perView, setPerView] = useState(visibleCount);
  const total = destinations.length;

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width < 640) setPerView(1);
      else if (width < 900) setPerView(2);
      else setPerView(visibleCount);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [visibleCount]);

  // Page starts: 0, perView, 2*perView, ...
  const pageCount = Math.max(1, Math.ceil(total / perView));
  const maxStart = (pageCount - 1) * perView;

  useEffect(() => {
    setStartIndex((current) => {
      const page = Math.floor(current / perView);
      return Math.min(page * perView, maxStart);
    });
  }, [maxStart, perView]);

  const goToPrev = () => {
    setStartIndex((current) => (current <= 0 ? maxStart : current - perView));
  };

  const goToNext = () => {
    setStartIndex((current) => (current >= maxStart ? 0 : current + perView));
  };

  // Track sized so exactly `perView` cards fill the viewport; slide by a full page
  const trackWidthPercent = (total / perView) * 100;
  const cardWidthPercent = 100 / total;
  const slideOffsetPercent = (100 / total) * startIndex;

  return (
    <div
      className="destinationSlider"
      aria-roledescription="carousel"
      aria-label="Summer destinations"
    >
      <button
        type="button"
        className="destinationSlider__arrow destinationSlider__arrow--prev"
        aria-label="Previous destinations"
        onClick={goToPrev}
      >
        <ChevronLeftIcon width={18} height={18} strokeWidth={2.2} />
      </button>

      <div className="destinationSlider__viewport">
        <ul
          className="destinationSlider__track"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${slideOffsetPercent}%)`,
          }}
        >
          {destinations.map((destination, index) => {
            const isVisible = index >= startIndex && index < startIndex + perView;

            return (
              <li
                key={destination.id}
                className="destinationSlider__item"
                style={{ width: `${cardWidthPercent}%` }}
                aria-hidden={!isVisible}
                inert={!isVisible ? true : undefined}
              >
                <Link
                  href={destination.href}
                  className="destinationSlider__card"
                  aria-label={`Explore ${destination.name}`}
                  tabIndex={isVisible ? undefined : -1}
                >
                  <span
                    className={`destinationSlider__badge destinationSlider__badge--${destination.badge
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {destination.badge}
                  </span>

                  <div className="destinationSlider__media">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 900px) 45vw, 25vw"
                      className="destinationSlider__image"
                    />
                  </div>

                  <span className="destinationSlider__label">{destination.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        className="destinationSlider__arrow destinationSlider__arrow--next"
        aria-label="Next destinations"
        onClick={goToNext}
      >
        <ChevronRightIcon width={18} height={18} strokeWidth={2.2} />
      </button>
    </div>
  );
}
