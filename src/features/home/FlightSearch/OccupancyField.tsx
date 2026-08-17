"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  OCCUPANCY_LIMITS,
  type OccupancyValue,
  type RoomOccupancy,
} from "./flightSearchData";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import "./OccupancyField.scss";

type OccupancyFieldProps = {
  value: OccupancyValue;
  onChange: (value: OccupancyValue) => void;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function updateRoom(
  rooms: RoomOccupancy[],
  index: number,
  patch: Partial<RoomOccupancy>,
) {
  return rooms.map((room, roomIndex) =>
    roomIndex === index ? { ...room, ...patch } : room,
  );
}

export default function OccupancyField({
  value,
  onChange,
}: OccupancyFieldProps) {
  const { t } = useTranslation("home");
  const rootRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();
  const [open, setOpen] = useState(false);

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

  const passengers = value.rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0,
  );
  const summary = t(HOME_LABEL.SEARCH_OCCUPANCY_SUMMARY, {
    passengers,
    rooms: value.rooms.length,
  });
  const canAddRoom = value.rooms.length < OCCUPANCY_LIMITS.maxRooms;
  const canRemoveRoom = value.rooms.length > OCCUPANCY_LIMITS.minRooms;

  const setAdults = (index: number, next: number) => {
    onChange({
      rooms: updateRoom(value.rooms, index, {
        adults: clamp(
          next,
          OCCUPANCY_LIMITS.minAdults,
          OCCUPANCY_LIMITS.maxAdults,
        ),
      }),
    });
  };

  const setChildren = (index: number, next: number) => {
    onChange({
      rooms: updateRoom(value.rooms, index, {
        children: clamp(
          next,
          OCCUPANCY_LIMITS.minChildren,
          OCCUPANCY_LIMITS.maxChildren,
        ),
      }),
    });
  };

  const addRoom = () => {
    if (!canAddRoom) return;
    onChange({
      rooms: [...value.rooms, { adults: 1, children: 0 }],
    });
  };

  const removeRoom = (index: number) => {
    if (!canRemoveRoom) return;
    onChange({
      rooms: value.rooms.filter((_, roomIndex) => roomIndex !== index),
    });
  };

  return (
    <div className="occupancyField" ref={rootRef}>
      <button
        type="button"
        className={`occupancyField__trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={popoverId}
        aria-label={`${t(HOME_LABEL.SEARCH_OCCUPANCY)}, ${summary}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="occupancyField__label">{t(HOME_LABEL.SEARCH_OCCUPANCY)}</span>
        <span className="occupancyField__value has-value">{summary}</span>
      </button>

      {open ? (
        <div
          id={popoverId}
          className="occupancyField__popover"
          role="dialog"
          aria-label={t(HOME_LABEL.SEARCH_SELECT_OCCUPANCY)}
        >
          <div className="occupancyField__caret" aria-hidden="true" />

          {value.rooms.map((room, index) => (
            <div key={index} className="occupancyField__room">
              <div className="occupancyField__roomHeader">
                <span className="occupancyField__roomTitle">
                  {t(HOME_LABEL.SEARCH_ROOM, { number: index + 1 })}
                </span>
                {canRemoveRoom ? (
                  <button
                    type="button"
                    className="occupancyField__removeRoom"
                    onClick={() => removeRoom(index)}
                  >
                    {t(HOME_LABEL.SEARCH_REMOVE_ROOM)}
                  </button>
                ) : null}
              </div>

              <div className="occupancyField__row">
                <div className="occupancyField__rowCopy">
                  <span className="occupancyField__rowLabel">{t(HOME_LABEL.SEARCH_ADULTS)}</span>
                  <span className="occupancyField__rowHint">{t(HOME_LABEL.SEARCH_ADULTS_HINT)}</span>
                </div>
                <div className="occupancyField__stepper">
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={t(HOME_LABEL.SEARCH_DECREASE_ADULTS, { number: index + 1 })}
                    disabled={room.adults <= OCCUPANCY_LIMITS.minAdults}
                    onClick={() => setAdults(index, room.adults - 1)}
                  >
                    −
                  </button>
                  <span className="occupancyField__count" aria-live="polite">
                    {room.adults}
                  </span>
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={t(HOME_LABEL.SEARCH_INCREASE_ADULTS, { number: index + 1 })}
                    disabled={room.adults >= OCCUPANCY_LIMITS.maxAdults}
                    onClick={() => setAdults(index, room.adults + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="occupancyField__row">
                <div className="occupancyField__rowCopy">
                  <span className="occupancyField__rowLabel">{t(HOME_LABEL.SEARCH_CHILDREN)}</span>
                  <span className="occupancyField__rowHint">{t(HOME_LABEL.SEARCH_CHILDREN_HINT)}</span>
                </div>
                <div className="occupancyField__stepper">
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={t(HOME_LABEL.SEARCH_DECREASE_CHILDREN, { number: index + 1 })}
                    disabled={room.children <= OCCUPANCY_LIMITS.minChildren}
                    onClick={() => setChildren(index, room.children - 1)}
                  >
                    −
                  </button>
                  <span className="occupancyField__count" aria-live="polite">
                    {room.children}
                  </span>
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={t(HOME_LABEL.SEARCH_INCREASE_CHILDREN, { number: index + 1 })}
                    disabled={room.children >= OCCUPANCY_LIMITS.maxChildren}
                    onClick={() => setChildren(index, room.children + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {canAddRoom && index === 0 ? (
                <div className="occupancyField__addRow">
                  <button
                    type="button"
                    className="occupancyField__addRoom"
                    onClick={addRoom}
                  >
                    {t(HOME_LABEL.SEARCH_ADD_ROOM)}
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
