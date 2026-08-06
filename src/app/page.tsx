import FlightSearch from "@/components/FlightSearch";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="homeHero">
      <HeroSlider />
      <FlightSearch />
    </div>
  );
}
