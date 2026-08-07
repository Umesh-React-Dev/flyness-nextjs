import Image from "next/image";
import Link from "next/link";
import { REASONS_STATS, REASONS_TILES } from "./reasonsToFlyData";
import "./ReasonsToFly.scss";

export default function ReasonsToFly() {
  return (
    <section className="reasonsToFly" aria-labelledby="reasons-to-fly-title">
      <div className="reasonsToFly__inner">
        <div className="reasonsToFly__grid">
          {REASONS_TILES.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`reasonsToFly__tile reasonsToFly__tile--${tile.area}`}
              aria-label={`${tile.title}: ${tile.description}`}
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
                  <span className="reasonsToFly__defaultTitle">{tile.title}</span>
                  <span className="reasonsToFly__defaultArrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </span>
                {tile.area === "fares" && (
                  <span className="reasonsToFly__defaultDesc">{tile.description}</span>
                )}
              </span>
            </Link>
          ))}

          <div className="reasonsToFly__banner">
            <h2 id="reasons-to-fly-title" className="reasonsToFly__title">
              Reasons to Fly With Us
            </h2>
            <p className="reasonsToFly__subtitle">
              Discover why millions choose flynas — competitive fares, a growing
              network, and an award-winning experience on every journey.
            </p>
            <ul className="reasonsToFly__stats">
              {REASONS_STATS.map((stat) => (
                <li key={stat.id} className="reasonsToFly__stat">
                  <span className="reasonsToFly__statIcon" aria-hidden="true">
                    <StatIcon type={stat.icon} />
                  </span>
                  <span className="reasonsToFly__statLabel">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 4.5L13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 14L14 6M14 6H8M14 6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatIcon({ type }: { type: (typeof REASONS_STATS)[number]["icon"] }) {
  switch (type) {
    case "fleet":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3.5 12.5h6.2l2.1-5.4 1.4.6-1.3 3.4h3.6l2.4-2.8 1.3.7-1.7 2.1H21v1.6h-3.5l1.7 2.1-1.3.7-2.4-2.8h-3.6l1.3 3.4-1.4.6-2.1-5.4H3.5v-1.6Z"
            fill="currentColor"
          />
        </svg>
      );
    case "flights":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 10h16M9 5V3.5M15 5V3.5M8 14h3M13 14h3M8 17h3M13 17h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "passengers":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 18.5c.6-2.6 2.5-4 4.5-4s3.9 1.4 4.5 4M13.2 14.8c1.1-.5 2.4-.6 3.6.1 1.4.8 2.3 2.3 2.7 3.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "routes":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 12h15M12 4c2.2 2.4 3.3 4.9 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-4.9-3.3-8S9.8 6.4 12 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
  }
}
