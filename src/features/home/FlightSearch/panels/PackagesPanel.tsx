"use client";

import { type FormEvent, useState } from "react";
import type { Airport } from "../airportData";
import AirportField from "../AirportField";
import DateRangePicker from "../DateRangePicker";
import OccupancyField from "../OccupancyField";
import {
  DEFAULT_OCCUPANCY,
  PACKAGE_TYPES,
  type OccupancyValue,
  type PackageType,
} from "../flightSearchData";
import { SwapIcon } from "../FlightSearchIcons";
import { startOfDay } from "../dateUtils";

export default function PackagesPanel() {
  const [packageType, setPackageType] = useState<PackageType>("flights-hotel");
  const [origin, setOrigin] = useState<Airport | null>(null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const [depart, setDepart] = useState<Date | null>(() => startOfDay(new Date()));
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [occupancy, setOccupancy] = useState<OccupancyValue>(DEFAULT_OCCUPANCY);

  const swapAirports = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="flightSearch__form" onSubmit={handleSubmit}>
      <fieldset className="flightSearch__tripTypes">
        <legend className="visuallyHidden">Package type</legend>
        {PACKAGE_TYPES.map((type) => (
          <label key={type.id} className="flightSearch__radio">
            <input
              type="radio"
              name="packageType"
              value={type.id}
              checked={packageType === type.id}
              onChange={() => setPackageType(type.id)}
            />
            <span className="flightSearch__radioMark" aria-hidden="true" />
            <span>{type.label}</span>
          </label>
        ))}
      </fieldset>

      <div className="flightSearch__fields flightSearch__fields--packages">
        <div className="flightSearch__route">
          <div className="flightSearch__field">
            <AirportField
              label="Origin"
              placeholder="Origin"
              value={origin}
              onChange={setOrigin}
            />
          </div>

          <button
            type="button"
            className="flightSearch__swap"
            aria-label="Swap origin and destination"
            onClick={swapAirports}
          >
            <SwapIcon />
          </button>

          <div className="flightSearch__field">
            <AirportField
              label="Destination"
              placeholder="Destination"
              value={destination}
              onChange={setDestination}
            />
          </div>
        </div>

        <div className="flightSearch__dateFields">
          <DateRangePicker
            mode="range"
            value={{ depart, returnDate }}
            onChange={({ depart: nextDepart, returnDate: nextReturn }) => {
              setDepart(nextDepart);
              setReturnDate(nextReturn);
            }}
          />
        </div>

        <div className="flightSearch__field">
          <OccupancyField value={occupancy} onChange={setOccupancy} />
        </div>

        <button type="submit" className="flightSearch__submit">
          Search
        </button>
      </div>
    </form>
  );
}
