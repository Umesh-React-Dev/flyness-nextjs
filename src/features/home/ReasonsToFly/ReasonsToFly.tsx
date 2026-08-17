"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import StatIcon from "@/assets/icons/StatIcon";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { REASONS_STATS, REASONS_TILES } from "./reasonsToFlyData";
import "./ReasonsToFly.scss";

export default function ReasonsToFly() {
  const { t } = useTranslation("home");

  return (
    <section className="reasonsToFly" aria-labelledby="reasons-to-fly-title">
      <div className="reasonsToFly__inner">
        <div className="reasonsToFly__grid">
          {REASONS_TILES.map((tile) => {
            const title = t(`reasons.tiles.${tile.id}.title`);
            const description = t(`reasons.tiles.${tile.id}.description`);

            return (
              <Link
                key={tile.id}
                href={tile.href}
                className={`reasonsToFly__tile reasonsToFly__tile--${tile.area}`}
                aria-label={`${title}: ${description}`}
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="reasonsToFly__image"
                />
                <span className="reasonsToFly__shade" aria-hidden="true" />

                <span className="reasonsToFly__default">
                  <span className="reasonsToFly__defaultRow">
                    <span className="reasonsToFly__defaultTitle">{title}</span>
                    <span className="reasonsToFly__defaultArrow" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </span>
                  {tile.area === "fares" && (
                    <span className="reasonsToFly__defaultDesc">{description}</span>
                  )}
                </span>
              </Link>
            );
          })}

          <div className="reasonsToFly__banner">
            <h2 id="reasons-to-fly-title" className="reasonsToFly__title">
              {t(HOME_LABEL.REASONS_TITLE)}
            </h2>
            <p className="reasonsToFly__subtitle">{t(HOME_LABEL.REASONS_SUBTITLE)}</p>
            <ul className="reasonsToFly__stats">
              {REASONS_STATS.map((stat) => (
                <li key={stat.id} className="reasonsToFly__stat">
                  <span className="reasonsToFly__statIcon" aria-hidden="true">
                    <StatIcon type={stat.icon} />
                  </span>
                  <span className="reasonsToFly__statLabel">
                    {t(`reasons.stats.${stat.id}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
