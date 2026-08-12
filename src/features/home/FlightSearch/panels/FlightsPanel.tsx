"use client";

import { type FormEvent, useState } from "react";
import type { Airport } from "../airportData";
import AirportField from "../AirportField";
import DateRangePicker from "../DateRangePicker";
import { TRIP_TYPES, type TripType } from "../flightSearchData";
import SwapIcon from "@/assets/icons/SwapIcon";
import { startOfDay } from "../dateUtils";

export default function FlightsPanel() {
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [origin, setOrigin] = useState<Airport | null>(null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const [depart, setDepart] = useState<Date | null>(() => startOfDay(new Date()));
  const [returnDate, setReturnDate] = useState<Date | null>(null);

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
        <legend className="visuallyHidden">Trip type</legend>
        {TRIP_TYPES.map((type) => (
          <label key={type.id} className="flightSearch__radio">
            <input
              type="radio"
              name="tripType"
              value={type.id}
              checked={tripType === type.id}
              onChange={() => {
                setTripType(type.id);
                if (type.id === "one-way") setReturnDate(null);
              }}
            />
            <span className="flightSearch__radioMark" aria-hidden="true" />
            <span>{type.label}</span>
          </label>
        ))}
      </fieldset>

      <div className="flightSearch__fields">
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
            mode={tripType === "one-way" ? "single" : "range"}
            value={{ depart, returnDate }}
            onChange={({ depart: nextDepart, returnDate: nextReturn }) => {
              setDepart(nextDepart);
              setReturnDate(nextReturn);
            }}
            disabledReturn={tripType === "one-way"}
            showReturn={tripType !== "one-way"}
          />
        </div>

        <button type="submit" className="flightSearch__submit">
          Search
        </button>
      </div>
    </form>
  );
}
