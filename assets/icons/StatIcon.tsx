import FleetStatIcon from "./FleetStatIcon";
import FlightsStatIcon from "./FlightsStatIcon";
import PassengersStatIcon from "./PassengersStatIcon";
import RoutesStatIcon from "./RoutesStatIcon";

type StatIconType = "fleet" | "flights" | "passengers" | "routes";

type StatIconProps = {
  type: StatIconType;
  className?: string;
};

export default function StatIcon({ type, className }: StatIconProps) {
  switch (type) {
    case "fleet":
      return <FleetStatIcon className={className} />;
    case "flights":
      return <FlightsStatIcon className={className} />;
    case "passengers":
      return <PassengersStatIcon className={className} />;
    case "routes":
      return <RoutesStatIcon className={className} />;
  }
}
