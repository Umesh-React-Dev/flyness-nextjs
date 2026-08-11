import BestFares from "./BestFares";
import BookNowPayLater from "./BookNowPayLater";
import BookOrganiseTrip from "./BookOrganiseTrip";
import FlightSearch from "./FlightSearch";
import HeroSlider from "./HeroSlider";
import ReasonsToFly from "./ReasonsToFly";
import SummerDestinations from "./SummerDestinations";
import TripExtras from "./TripExtras";
import WhereWeFly from "./WhereWeFly";

export default function HomePage() {
  return (
    <>
      <div className="homeHero">
        <HeroSlider />
        <FlightSearch />
      </div>
      <SummerDestinations />
      <TripExtras />
      <WhereWeFly />
      <BookNowPayLater />
      <BestFares />
      <BookOrganiseTrip />
      <ReasonsToFly />
    </>
  );
}
