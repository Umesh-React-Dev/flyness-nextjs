"use client";

import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";

type BookingLookupPanelProps = {
  helperText: string;
  referenceName: string;
  lastNameName: string;
};

export default function BookingLookupPanel({
  helperText,
  referenceName,
  lastNameName,
}: BookingLookupPanelProps) {
  const { t } = useTranslation("home");
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="flightSearch__form" onSubmit={handleSubmit}>
      <div className="flightSearch__fields flightSearch__fields--booking">
        <label className="flightSearch__field flightSearch__field--withHelper">
          <span className="flightSearch__fieldLabel">{t(HOME_LABEL.SEARCH_BOOKING_REF)}</span>
          <input
            type="text"
            name={referenceName}
            placeholder={t(HOME_LABEL.SEARCH_BOOKING_REF_PLACEHOLDER)}
            value={bookingRef}
            onChange={(event) => setBookingRef(event.target.value)}
            autoComplete="off"
          />
         
        </label>

        <label className="flightSearch__field">
          <span className="flightSearch__fieldLabel">{t(HOME_LABEL.SEARCH_LAST_NAME)}</span>
          <input
            type="text"
            name={lastNameName}
            placeholder={t(HOME_LABEL.SEARCH_LAST_NAME_PLACEHOLDER)}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            autoComplete="family-name"
          />
        </label>

        <button type="submit" className="flightSearch__submit">
          {t(HOME_LABEL.SEARCH_FIND_BOOKING)}
        </button>
      </div>
      <span className="flightSearch__helper">{helperText}</span>
    </form>
  );
}
