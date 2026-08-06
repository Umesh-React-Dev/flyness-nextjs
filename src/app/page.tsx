import BestFares from "@/components/BestFares";
import BookNowPayLater from "@/components/BookNowPayLater";
import BookOrganiseTrip from "@/components/BookOrganiseTrip";
import FlightSearch from "@/components/FlightSearch";
import HeroSlider from "@/components/HeroSlider";
import SummerDestinations from "@/components/SummerDestinations";
import TripExtras from "@/components/TripExtras";
import WhereWeFly from "@/components/WhereWeFly";

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
    </>
  );
}
