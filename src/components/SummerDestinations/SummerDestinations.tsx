import Image from "next/image";
import DestinationSlider from "@/components/DestinationSlider";
import {
  SUMMER_DESTINATIONS,
  SUMMER_DESTINATIONS_BG,
} from "./summerDestinationsData";
import "./SummerDestinations.scss";

export default function SummerDestinations() {
  return (
    <section className="summerDestinations" aria-labelledby="summer-destinations-title">
      <div className="summerDestinations__bg" aria-hidden="true">
        <Image
          src={SUMMER_DESTINATIONS_BG}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="summerDestinations__bgImage"
        />
        <div className="summerDestinations__overlay" />
      </div>

      <div className="summerDestinations__inner">
        <h2 id="summer-destinations-title" className="summerDestinations__title">
          Our Summer Destinations
        </h2>

        <DestinationSlider destinations={SUMMER_DESTINATIONS} />
      </div>
    </section>
  );
}
