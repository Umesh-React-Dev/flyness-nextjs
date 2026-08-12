"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import { HERO_CTA, HERO_SLIDES } from "./heroSliderData";
import "./HeroSlider.scss";

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = HERO_SLIDES.length;

  useEffect(() => {
    if (paused || slideCount <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slideCount);
  };

  return (
    <section
      className="heroSlider"
      aria-roledescription="carousel"
      aria-label="Featured destinations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="heroSlider__slides">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`heroSlider__slide${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="heroSlider__image"
            />
          </div>
        ))}
      </div>

      <div className="heroSlider__gradient" aria-hidden="true" />

      <div className="heroSlider__content">
        <div className="heroSlider__copy" aria-live="polite">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`heroSlider__text${index === activeIndex ? " is-active" : ""}`}
            >
              <h1 className="heroSlider__title">{slide.title}</h1>
              <p className="heroSlider__subtitle">{slide.subtitle}</p>
            </div>
          ))}
        </div>

        <Link href={HERO_CTA.href} className="heroSlider__cta">
          {HERO_CTA.label}
        </Link>
      </div>

      <button
        type="button"
        className="heroSlider__arrow heroSlider__arrow--prev"
        aria-label="Previous slide"
        onClick={goToPrev}
      >
        <ChevronLeftIcon width={20} height={20} strokeWidth={2} />
      </button>
      <button
        type="button"
        className="heroSlider__arrow heroSlider__arrow--next"
        aria-label="Next slide"
        onClick={goToNext}
      >
        <ChevronRightIcon width={20} height={20} strokeWidth={2} />
      </button>
    </section>
  );
}
