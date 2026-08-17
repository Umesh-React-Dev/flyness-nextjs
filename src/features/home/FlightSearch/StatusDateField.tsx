"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  addDays,
  formatStatusDate,
  isSameDay,
  startOfDay,
} from "./dateUtils";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./StatusDateField.scss";

type StatusDateFieldProps = {
  value: Date | null;
  onChange: (date: Date) => void;
};

type StatusDateOption = {
  id: "tomorrow" | "today" | "yesterday";
  date: Date;
};

function getStatusDateOptions(reference = new Date()): StatusDateOption[] {
  const today = startOfDay(reference);

  return [
    { id: "tomorrow", date: addDays(today, 1) },
    { id: "today", date: today },
    { id: "yesterday", date: addDays(today, -1) },
  ];
}

export default function StatusDateField({
  value,
  onChange,
}: StatusDateFieldProps) {
  const { t } = useTranslation("home");
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const options = getStatusDateOptions();
  const selected = value ?? options[1].date;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectOption = (date: Date) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <div className="statusDateField" ref={rootRef}>
      <button
        type="button"
        className={`statusDateField__trigger${open ? " is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={t(HOME_LABEL.SEARCH_FLIGHT_DATE)}
        onClick={() => setOpen((current) => !current)}
      >
        {formatStatusDate(selected)}
      </button>

      {open ? (
        <ul className="statusDateField__list" role="listbox" id={listId}>
          {options.map((option) => {
            const isSelected = isSameDay(option.date, selected);

            return (
              <li key={option.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`statusDateField__option${isSelected ? " is-selected" : ""}`}
                  onClick={() => selectOption(option.date)}
                >
                  {formatStatusDate(option.date)}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
