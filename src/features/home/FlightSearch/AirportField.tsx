"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  AIRPORTS,
  filterAirports,
  formatAirportLabel,
  type Airport,
} from "./airportData";
import "./AirportField.scss";

type AirportFieldProps = {
  label: string;
  placeholder?: string;
  value: Airport | null;
  onChange: (airport: Airport | null) => void;
};

export default function AirportField({
  label,
  placeholder = "Origin",
  value,
  onChange,
}: AirportFieldProps) {
  const fieldId = useId();
  const listId = `${fieldId}-list`;
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = filterAirports(query, AIRPORTS);

  useEffect(() => {
    if (!open) return;

    setQuery("");
    setActiveIndex(0);
    const frame = window.requestAnimationFrame(() => {
      searchRef.current?.focus();
    });

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const selectAirport = (airport: Airport) => {
    onChange(airport);
    setOpen(false);
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) =>
        results.length === 0 ? 0 : Math.min(current + 1, results.length - 1),
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selected = results[activeIndex];
      if (selected) selectAirport(selected);
    }
  };

  return (
    <div className="airportField" ref={rootRef}>
      <span className="visuallyHidden" id={fieldId}>
        {label}
      </span>
      <button
        type="button"
        className={`airportField__trigger${value ? " has-value" : ""}`}
        aria-labelledby={fieldId}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
      >
        {value ? formatAirportLabel(value) : placeholder}
      </button>

      {open ? (
        <div className="airportField__dropdown" role="presentation">
          <input
            ref={searchRef}
            type="text"
            className="airportField__search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchKeyDown}
            aria-label={`Search ${label.toLowerCase()}`}
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={
              results[activeIndex] ? `${listId}-${results[activeIndex].code}` : undefined
            }
            autoComplete="off"
          />

          <ul className="airportField__list" role="listbox" id={listId}>
            {results.length === 0 ? (
              <li className="airportField__empty">No airports found</li>
            ) : (
              results.map((airport, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={airport.code} role="option" aria-selected={isActive}>
                    <button
                      type="button"
                      id={`${listId}-${airport.code}`}
                      className={`airportField__option${isActive ? " is-active" : ""}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => selectAirport(airport)}
                    >
                      <span className="airportField__optionText">
                        <span className="airportField__city">
                          {airport.city}, {airport.country}
                        </span>
                        <span className="airportField__name">{airport.airportName}</span>
                      </span>
                      <span className="airportField__code">{airport.code}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
