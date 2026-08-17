"use client";

import { type FormEvent, useState } from "react";
import type { Airport } from "../airportData";
import AirportField from "../AirportField";
import StatusDateField from "../StatusDateField";
import {
  STATUS_SEARCH_MODES,
  type StatusSearchMode,
} from "../flightSearchData";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import { startOfDay } from "../dateUtils";

export default function StatusPanel() {
  const { t } = useTranslation("home");
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
        <legend className="visuallyHidden">{t(HOME_LABEL.SEARCH_STATUS_MODE)}</legend>
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
            <span>{t(`search.statusModes.${option.id}`)}</span>
          </label>
        ))}
      </fieldset>

      <div className="flightSearch__fields flightSearch__fields--status">
        {mode === "route" ? (
          <>
            <div className="flightSearch__field">
              <AirportField
                label={t(HOME_LABEL.SEARCH_ORIGIN)}
                placeholder={t(HOME_LABEL.SEARCH_ORIGIN)}
                value={origin}
                onChange={setOrigin}
              />
            </div>

            <div className="flightSearch__field">
              <AirportField
                label={t(HOME_LABEL.SEARCH_DESTINATION)}
                placeholder={t(HOME_LABEL.SEARCH_DESTINATION)}
                value={destination}
                onChange={setDestination}
              />
            </div>
          </>
        ) : (
          <label className="flightSearch__field flightSearch__field--flightNumber">
            <span className="visuallyHidden">{t(HOME_LABEL.SEARCH_FLIGHT_NUMBER)}</span>
            <input
              type="text"
              placeholder={t(HOME_LABEL.SEARCH_FLIGHT_NUMBER)}
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
          {t(HOME_LABEL.SEARCH_SUBMIT)}
        </button>
      </div>
    </form>
  );
}
