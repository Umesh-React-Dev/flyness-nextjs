export function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfterDay(a: Date, b: Date) {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function addMonths(date: Date, amount: number) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
}

export function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return startOfDay(next);
}

export function formatFlightDate(date: Date | null) {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });
}

export function formatStatusDate(date: Date | null) {
  if (!date) return "";
  const formatted = formatFlightDate(date);
  const today = startOfDay(new Date());

  if (isSameDay(date, today)) {
    return `TODAY, ${formatted}`;
  }
  if (isSameDay(date, addDays(today, 1))) {
    return `TOMORROW, ${formatted}`;
  }
  if (isSameDay(date, addDays(today, -1))) {
    return `YESTERDAY, ${formatted}`;
  }

  return formatted;
}

export function formatMonthTitle(date: Date, hijri: boolean) {
  if (!hijri) {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  return new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export type CalendarCell = {
  date: Date;
  inCurrentMonth: boolean;
  label: string;
};

export function getMonthCells(viewDate: Date, hijri: boolean): CalendarCell[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay(); // Sunday = 0
  const gridStart = new Date(year, month, 1 - startOffset);
  const cells: CalendarCell[] = [];

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + index,
    );
    const inCurrentMonth = date.getMonth() === month;
    const label = hijri
      ? new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
          day: "numeric",
        }).format(date)
      : String(date.getDate());

    cells.push({ date: startOfDay(date), inCurrentMonth, label });
  }

  return cells;
}

export const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;
