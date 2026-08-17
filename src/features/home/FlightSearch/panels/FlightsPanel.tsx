"use client";

import { type FormEvent, useState } from "react";
import type { Airport } from "../airportData";
import AirportField from "../AirportField";
import DateRangePicker from "../DateRangePicker";
import { TRIP_TYPES, type TripType } from "../flightSearchData";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import SwapIcon from "@/assets/icons/SwapIcon";
import { startOfDay } from "../dateUtils";

export default function FlightsPanel() {
  const { t } = useTranslation("home");
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
        <legend className="visuallyHidden">{t(HOME_LABEL.SEARCH_TRIP_TYPE)}</legend>
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
            <span>{t(`search.tripTypes.${type.id}`)}</span>
          </label>
        ))}
      </fieldset>

      <div className="flightSearch__fields">
        <div className="flightSearch__route">
          <div className="flightSearch__field">
            <AirportField
              label={t(HOME_LABEL.SEARCH_ORIGIN)}
              placeholder={t(HOME_LABEL.SEARCH_ORIGIN)}
              value={origin}
              onChange={setOrigin}
            />
          </div>

          <button
            type="button"
            className="flightSearch__swap"
            aria-label={t(HOME_LABEL.SEARCH_SWAP)}
            onClick={swapAirports}
          >
            <SwapIcon />
          </button>

          <div className="flightSearch__field">
            <AirportField
              label={t(HOME_LABEL.SEARCH_DESTINATION)}
              placeholder={t(HOME_LABEL.SEARCH_DESTINATION)}
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
          {t(HOME_LABEL.SEARCH_SUBMIT)}
        </button>
      </div>
    </form>
  );
}
