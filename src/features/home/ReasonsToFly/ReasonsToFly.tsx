import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import StatIcon from "@/assets/icons/StatIcon";
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
