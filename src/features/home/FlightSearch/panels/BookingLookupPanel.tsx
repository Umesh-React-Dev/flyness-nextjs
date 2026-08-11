"use client";

import { type FormEvent, useState } from "react";

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
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="flightSearch__form" onSubmit={handleSubmit}>
      <div className="flightSearch__fields flightSearch__fields--booking">
        <label className="flightSearch__field flightSearch__field--withHelper">
          <span className="flightSearch__fieldLabel">Booking Reference</span>
          <input
            type="text"
            name={referenceName}
            placeholder="e.g. RA567L"
            value={bookingRef}
            onChange={(event) => setBookingRef(event.target.value)}
            autoComplete="off"
          />
         
        </label>

        <label className="flightSearch__field">
          <span className="flightSearch__fieldLabel">Last Name</span>
          <input
            type="text"
            name={lastNameName}
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            autoComplete="family-name"
          />
        </label>

        <button type="submit" className="flightSearch__submit">
          Find Booking
        </button>
      </div>
      <span className="flightSearch__helper">{helperText}</span>
    </form>
  );
}
