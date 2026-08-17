"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  WEEKDAY_LABELS,
  addMonths,
  formatFlightDate,
  formatMonthTitle,
  getMonthCells,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "./dateUtils";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./DateRangePicker.scss";

export type DateRangeValue = {
  depart: Date | null;
  returnDate: Date | null;
};

type DateRangePickerProps = {
  mode?: "range" | "single";
  value: DateRangeValue;
  onChange: (value: DateRangeValue) => void;
  departLabel?: string;
  returnLabel?: string;
  disabledReturn?: boolean;
  showReturn?: boolean;
  formatDepart?: (date: Date | null) => string;
};

export default function DateRangePicker({
  mode = "range",
  value,
  onChange,
  departLabel,
  returnLabel,
  disabledReturn = false,
  showReturn = true,
  formatDepart = formatFlightDate,
}: DateRangePickerProps) {
  const { t } = useTranslation("home");
  const departText = departLabel ?? t(HOME_LABEL.SEARCH_DEPART);
  const returnText = returnLabel ?? t(HOME_LABEL.SEARCH_RETURN);
  const rootRef = useRef<HTMLDivElement>(null);
  const pickerId = useId();
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<"depart" | "return">("depart");
  const [hijri, setHijri] = useState(false);
  const [viewMonth, setViewMonth] = useState(() =>
    startOfDay(value.depart ?? new Date()),
  );

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

  const openPicker = (field: "depart" | "return") => {
    if (field === "return" && (disabledReturn || mode === "single")) return;
    setActiveField(field);
    setViewMonth(startOfDay(value.depart ?? new Date()));
    setOpen(true);
  };

  const handleDayClick = (date: Date) => {
    const day = startOfDay(date);

    if (mode === "single") {
      onChange({ depart: day, returnDate: null });
      setOpen(false);
      return;
    }

    if (activeField === "depart" || !value.depart) {
      const nextReturn =
        value.returnDate && isBeforeDay(value.returnDate, day)
          ? null
          : value.returnDate;
      onChange({ depart: day, returnDate: nextReturn });
      if (!disabledReturn && showReturn) {
        setActiveField("return");
      } else {
        setOpen(false);
      }
      return;
    }

    if (isBeforeDay(day, value.depart)) {
      onChange({ depart: day, returnDate: value.depart });
      setOpen(false);
      return;
    }

    onChange({ depart: value.depart, returnDate: day });
    setOpen(false);
  };

  const leftMonth = viewMonth;
  const rightMonth = addMonths(viewMonth, 1);

  const getDayState = (date: Date) => {
    const isDepart = isSameDay(date, value.depart);
    const isReturn = mode === "range" && isSameDay(date, value.returnDate);
    const inRange =
      mode === "range" &&
      value.depart &&
      value.returnDate &&
      !isBeforeDay(date, value.depart) &&
      !isAfterDay(date, value.returnDate);

    return { isDepart, isReturn, inRange: Boolean(inRange) };
  };

  return (
    <div
      className={`dateRangePicker${showReturn ? "" : " dateRangePicker--single"}`}
      ref={rootRef}
    >
      <button
        type="button"
        className={`dateRangePicker__field${open && activeField === "depart" ? " is-open" : ""}`}
        onClick={() => openPicker("depart")}
        aria-expanded={open && activeField === "depart"}
        aria-controls={pickerId}
      >
        <span className="dateRangePicker__label">{departText}</span>
        <span className={`dateRangePicker__value${value.depart ? " has-value" : ""}`}>
          {formatDepart(value.depart) || "\u00A0"}
        </span>
      </button>

      {showReturn ? (
        <button
          type="button"
          className={`dateRangePicker__field${disabledReturn ? " is-disabled" : ""}${
            open && activeField === "return" ? " is-open" : ""
          }`}
          onClick={() => openPicker("return")}
          disabled={disabledReturn}
          aria-expanded={open && activeField === "return"}
          aria-controls={pickerId}
        >
          <span className="dateRangePicker__label">{returnText}</span>
          <span
            className={`dateRangePicker__value${value.returnDate ? " has-value" : ""}`}
          >
            {formatFlightDate(value.returnDate) || "\u00A0"}
          </span>
        </button>
      ) : null}

      {open ? (
        <div className="dateRangePicker__popover" id={pickerId} role="dialog" aria-label={t(HOME_LABEL.SEARCH_CHOOSE_DATES)}>
          <div className="dateRangePicker__caret" aria-hidden="true" />

          <div className="dateRangePicker__toolbar">
            <button
              type="button"
              className="dateRangePicker__nav"
              aria-label={t(HOME_LABEL.SEARCH_PREV_MONTH)}
              onClick={() => setViewMonth((current) => addMonths(current, -1))}
            >
              ‹
            </button>

            <button
              type="button"
              className="dateRangePicker__nav"
              aria-label={t(HOME_LABEL.SEARCH_NEXT_MONTH)}
              onClick={() => setViewMonth((current) => addMonths(current, 1))}
            >
              ›
            </button>

            <label className="dateRangePicker__hijri">
              <span>{t(HOME_LABEL.SEARCH_HIJRI)}</span>
              <span className="dateRangePicker__switch">
                <input
                  type="checkbox"
                  checked={hijri}
                  onChange={(event) => setHijri(event.target.checked)}
                />
                <span className="dateRangePicker__switchTrack" aria-hidden="true" />
              </span>
            </label>
          </div>

          <div className="dateRangePicker__months">
            <MonthGrid
              viewDate={leftMonth}
              hijri={hijri}
              getDayState={getDayState}
              onSelect={handleDayClick}
              weekdayLabels={t("search.weekdays", { returnObjects: true }) as string[]}
            />
            <MonthGrid
              viewDate={rightMonth}
              hijri={hijri}
              getDayState={getDayState}
              onSelect={handleDayClick}
              weekdayLabels={t("search.weekdays", { returnObjects: true }) as string[]}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

type MonthGridProps = {
  viewDate: Date;
  hijri: boolean;
  weekdayLabels: string[];
  getDayState: (date: Date) => {
    isDepart: boolean;
    isReturn: boolean;
    inRange: boolean;
  };
  onSelect: (date: Date) => void;
};

function MonthGrid({ viewDate, hijri, weekdayLabels, getDayState, onSelect }: MonthGridProps) {
  const cells = getMonthCells(viewDate, hijri);

  return (
    <div className="dateRangePicker__month">
      <h3 className="dateRangePicker__monthTitle">{formatMonthTitle(viewDate, hijri)}</h3>
      <div className="dateRangePicker__weekdays">
        {WEEKDAY_LABELS.map((day, index) => (
          <span
            key={day}
            className={`dateRangePicker__weekday${index >= 5 ? " is-weekend" : ""}`}
          >
            {weekdayLabels[index] ?? day}
          </span>
        ))}
      </div>
      <div className="dateRangePicker__grid">
        {cells.map((cell) => {
          const { isDepart, isReturn, inRange } = getDayState(cell.date);
          const weekend = cell.date.getDay() === 5 || cell.date.getDay() === 6;
          const selected = isDepart || isReturn;

          return (
            <button
              key={cell.date.toISOString()}
              type="button"
              className={[
                "dateRangePicker__day",
                cell.inCurrentMonth ? "" : " is-outside",
                weekend ? " is-weekend" : "",
                inRange ? " is-in-range" : "",
                selected ? " is-selected" : "",
              ]
                .filter(Boolean)
                .join("")}
              onClick={() => onSelect(cell.date)}
            >
              {cell.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
