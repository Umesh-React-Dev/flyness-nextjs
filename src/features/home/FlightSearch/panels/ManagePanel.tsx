"use client";

import { MANAGE_HELPER } from "../flightSearchData";
import BookingLookupPanel from "./BookingLookupPanel";

export default function ManagePanel() {
  return (
    <BookingLookupPanel
      helperText={MANAGE_HELPER}
      referenceName="manageBookingRef"
      lastNameName="manageLastName"
    />
  );
}
