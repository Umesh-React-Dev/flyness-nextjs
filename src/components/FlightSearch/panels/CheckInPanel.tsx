"use client";

import { CHECKIN_HELPER } from "../flightSearchData";
import BookingLookupPanel from "./BookingLookupPanel";

export default function CheckInPanel() {
  return (
    <BookingLookupPanel
      helperText={CHECKIN_HELPER}
      referenceName="checkinBookingRef"
      lastNameName="checkinLastName"
    />
  );
}
