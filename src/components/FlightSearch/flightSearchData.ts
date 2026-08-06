export type SearchTabId =
  | "flights"
  | "packages"
  | "manage"
  | "checkin"
  | "status";

export type TripType = "one-way" | "round-trip" | "multi-city";

export type PackageType = "flights-hotel" | "umrah";

export type StatusSearchMode = "route" | "flight-number";

export type SearchTab = {
  id: SearchTabId;
  label: string;
};

export const SEARCH_TABS: SearchTab[] = [
  { id: "flights", label: "Flights" },
  { id: "packages", label: "Flights+Hotel/Packages" },
  { id: "manage", label: "Manage" },
  { id: "checkin", label: "Check-in" },
  { id: "status", label: "Flight Status" },
];

export const TRIP_TYPES: { id: TripType; label: string }[] = [
  { id: "one-way", label: "One Way" },
  { id: "round-trip", label: "Round trip" },
  { id: "multi-city", label: "Multi-City" },
];

export const PACKAGE_TYPES: { id: PackageType; label: string }[] = [
  { id: "flights-hotel", label: "Flights + Hotel" },
  { id: "umrah", label: "Umrah Packages" },
];

export const STATUS_SEARCH_MODES: { id: StatusSearchMode; label: string }[] = [
  { id: "route", label: "Search by route" },
  { id: "flight-number", label: "Search by flight number" },
];

export const MANAGE_HELPER = "Manage your flight at your convenience";
export const CHECKIN_HELPER = "Save valuable time, check-in for your flight.";

export type RoomOccupancy = {
  adults: number;
  children: number;
};

export type OccupancyValue = {
  rooms: RoomOccupancy[];
};

export const OCCUPANCY_LIMITS = {
  minRooms: 1,
  maxRooms: 4,
  minAdults: 1,
  maxAdults: 6,
  minChildren: 0,
  maxChildren: 4,
} as const;

export const DEFAULT_OCCUPANCY: OccupancyValue = {
  rooms: [{ adults: 1, children: 0 }],
};

export function formatOccupancySummary(value: OccupancyValue) {
  const passengers = value.rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0,
  );
  return `${passengers} Passengers ${value.rooms.length} Room`;
}

export function formatShortDate(date = new Date()) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });
}

export function formatTodayStatusDate(date = new Date()) {
  return `TODAY, ${formatShortDate(date)}`;
}
