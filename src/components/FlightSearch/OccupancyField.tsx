"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  OCCUPANCY_LIMITS,
  formatOccupancySummary,
  type OccupancyValue,
  type RoomOccupancy,
} from "./flightSearchData";
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

  const summary = formatOccupancySummary(value);
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
        aria-label={`Occupancy, ${summary}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="occupancyField__label">Occupancy</span>
        <span className="occupancyField__value has-value">{summary}</span>
      </button>

      {open ? (
        <div
          id={popoverId}
          className="occupancyField__popover"
          role="dialog"
          aria-label="Select occupancy"
        >
          <div className="occupancyField__caret" aria-hidden="true" />

          {value.rooms.map((room, index) => (
            <div key={index} className="occupancyField__room">
              <div className="occupancyField__roomHeader">
                <span className="occupancyField__roomTitle">
                  Room - {index + 1}
                </span>
                {canRemoveRoom ? (
                  <button
                    type="button"
                    className="occupancyField__removeRoom"
                    onClick={() => removeRoom(index)}
                  >
                    – Remove room
                  </button>
                ) : null}
              </div>

              <div className="occupancyField__row">
                <div className="occupancyField__rowCopy">
                  <span className="occupancyField__rowLabel">Adults</span>
                  <span className="occupancyField__rowHint">12+ years</span>
                </div>
                <div className="occupancyField__stepper">
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={`Decrease adults for room ${index + 1}`}
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
                    aria-label={`Increase adults for room ${index + 1}`}
                    disabled={room.adults >= OCCUPANCY_LIMITS.maxAdults}
                    onClick={() => setAdults(index, room.adults + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="occupancyField__row">
                <div className="occupancyField__rowCopy">
                  <span className="occupancyField__rowLabel">Children</span>
                  <span className="occupancyField__rowHint">0 - 12 years</span>
                </div>
                <div className="occupancyField__stepper">
                  <button
                    type="button"
                    className="occupancyField__step"
                    aria-label={`Decrease children for room ${index + 1}`}
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
                    aria-label={`Increase children for room ${index + 1}`}
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
                    + Add another room
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
