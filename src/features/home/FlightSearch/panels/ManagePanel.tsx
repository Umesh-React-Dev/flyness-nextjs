"use client";

import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import BookingLookupPanel from "./BookingLookupPanel";

export default function ManagePanel() {
  const { t } = useTranslation("home");

  return (
    <BookingLookupPanel
      helperText={t(HOME_LABEL.SEARCH_MANAGE_HELPER)}
      referenceName="manageBookingRef"
      lastNameName="manageLastName"
    />
  );
}
