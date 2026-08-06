"use client";

import { type FormEvent, useState } from "react";
import type { Airport } from "../airportData";
import AirportField from "../AirportField";
import StatusDateField from "../StatusDateField";
import {
  STATUS_SEARCH_MODES,
  type StatusSearchMode,
} from "../flightSearchData";
import { startOfDay } from "../dateUtils";

export default function StatusPanel() {
  const [mode, setMode] = useState<StatusSearchMode>("route");
  const [origin, setOrigin] = useState<Airport | null>(null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const [flightNumber, setFlightNumber] = useState("");
  const [depart, setDepart] = useState<Date>(() => startOfDay(new Date()));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="flightSearch__form" onSubmit={handleSubmit}>
      <fieldset className="flightSearch__tripTypes">
        <legend className="visuallyHidden">Search mode</legend>
        {STATUS_SEARCH_MODES.map((option) => (
          <label key={option.id} className="flightSearch__radio">
            <input
              type="radio"
              name="statusSearchMode"
              value={option.id}
              checked={mode === option.id}
              onChange={() => setMode(option.id)}
            />
            <span className="flightSearch__radioMark" aria-hidden="true" />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>

      <div className="flightSearch__fields flightSearch__fields--status">
        {mode === "route" ? (
          <>
            <div className="flightSearch__field">
              <AirportField
                label="Origin"
                placeholder="Origin"
                value={origin}
                onChange={setOrigin}
              />
            </div>

            <div className="flightSearch__field">
              <AirportField
                label="Destination"
                placeholder="Destination"
                value={destination}
                onChange={setDestination}
              />
            </div>
          </>
        ) : (
          <label className="flightSearch__field flightSearch__field--flightNumber">
            <span className="visuallyHidden">Flight number</span>
            <input
              type="text"
              placeholder="Flight number"
              value={flightNumber}
              onChange={(event) => setFlightNumber(event.target.value)}
              autoComplete="off"
            />
          </label>
        )}

        <div className="flightSearch__dateFields flightSearch__dateFields--single">
          <StatusDateField value={depart} onChange={setDepart} />
        </div>

        <button type="submit" className="flightSearch__submit">
          Search
        </button>
      </div>
    </form>
  );
}
