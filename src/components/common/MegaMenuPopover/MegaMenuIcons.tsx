import type { ReactNode } from "react";

type IconProps = {
  size?: number;
};

function IconBase({
  size = 22,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function MegaMenuIcon({ name, size = 22 }: { name: string; size?: number }) {
  const icons: Record<string, ReactNode> = {
    journey: (
      <IconBase size={size}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </IconBase>
    ),
    book: (
      <IconBase size={size}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </IconBase>
    ),
    beforeFly: (
      <IconBase size={size}>
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
        <path d="M5 19h14" />
      </IconBase>
    ),
    palm: (
      <IconBase size={size}>
        <path d="M12 22v-7" />
        <path d="M12 15c-4-1-6-4-6-8 3 0 5 1 6 3" />
        <path d="M12 15c4-1 6-4 6-8-3 0-5 1-6 3" />
        <path d="M9 8c-1-2-1-4 0-6 2 1 3 3 3 5" />
        <path d="M15 8c1-2 1-4 0-6-2 1-3 3-3 5" />
      </IconBase>
    ),
    briefcase: (
      <IconBase size={size}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M2 13h20" />
      </IconBase>
    ),
    card: (
      <IconBase size={size}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </IconBase>
    ),
    mapPin: (
      <IconBase size={size}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </IconBase>
    ),
    dollar: (
      <IconBase size={size}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </IconBase>
    ),
    calendar: (
      <IconBase size={size}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </IconBase>
    ),
    plane: (
      <IconBase size={size}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20 2.5 18.5 1 16.5 1.5 15 3L11.5 6.5 3.3 4.7c-.4-.1-.8.1-1 .4L2 5.7c-.3.5-.1 1.1.4 1.3L9 10l-2 4-2.5-.5c-.4-.1-.8.1-1 .4l-.5.7c-.3.4-.1 1 .3 1.2L7 17l1.5 3.3c.2.4.8.6 1.2.3l.7-.5c.3-.2.5-.6.4-1L10.3 16l4 2 3.5 6.6c.2.5.8.7 1.3.4l.6-.4c.3-.2.5-.6.4-1z" />
      </IconBase>
    ),
    lock: (
      <IconBase size={size}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </IconBase>
    ),
    baggage: (
      <IconBase size={size}>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M4 12h16" />
      </IconBase>
    ),
    manage: (
      <IconBase size={size}>
        <path d="M22 12h-4l-2 5H8l-2-5H2" />
        <path d="M12 2v6" />
        <path d="M8 6l4-4 4 4" />
      </IconBase>
    ),
    gift: (
      <IconBase size={size}>
        <rect x="3" y="8" width="18" height="13" rx="1" />
        <path d="M12 8v13" />
        <path d="M3 12h18" />
        <path d="M7.5 8a2.5 2.5 0 1 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 1 1 0 5" />
      </IconBase>
    ),
    cabinBag: (
      <IconBase size={size}>
        <rect x="7" y="6" width="10" height="14" rx="1" />
        <path d="M10 6V4a2 2 0 0 1 4 0v2" />
        <path d="M7 11h10" />
      </IconBase>
    ),
    checkedBag: (
      <IconBase size={size}>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
        <circle cx="12" cy="14" r="1.5" />
      </IconBase>
    ),
    sports: (
      <IconBase size={size}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M12 2a14.5 14.5 0 0 1 0 20" />
        <path d="M2 12h20" />
      </IconBase>
    ),
    box: (
      <IconBase size={size}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7L12 12l8.7-5" />
        <path d="M12 22V12" />
      </IconBase>
    ),
    paw: (
      <IconBase size={size}>
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
        <path d="M9 10a5 5 0 0 0-4.5 7.5c1 1.5 3 2.5 5.5 2.5s4.5-1 5.5-2.5A5 5 0 0 0 11 10H9z" />
        <circle cx="4" cy="8" r="2" />
      </IconBase>
    ),
    building: (
      <IconBase size={size}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
      </IconBase>
    ),
    heart: (
      <IconBase size={size}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </IconBase>
    ),
    star: (
      <IconBase size={size}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </IconBase>
    ),
    info: (
      <IconBase size={size}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </IconBase>
    ),
    fleet: (
      <IconBase size={size}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20 2.5 18.5 1 16.5 1.5 15 3L11.5 6.5 3.3 4.7c-.4-.1-.8.1-1 .4L2 5.7c-.3.5-.1 1.1.4 1.3L9 10l-2 4-2.5-.5c-.4-.1-.8.1-1 .4l-.5.7c-.3.4-.1 1 .3 1.2L7 17l1.5 3.3c.2.4.8.6 1.2.3l.7-.5c.3-.2.5-.6.4-1L10.3 16l4 2 3.5 6.6c.2.5.8.7 1.3.4l.6-.4c.3-.2.5-.6.4-1z" />
      </IconBase>
    ),
    leaf: (
      <IconBase size={size}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </IconBase>
    ),
    office: (
      <IconBase size={size}>
        <path d="M3 21h18" />
        <path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16" />
        <path d="M10 9h4" />
        <path d="M10 13h4" />
        <path d="M10 17h4" />
      </IconBase>
    ),
    jobs: (
      <IconBase size={size}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </IconBase>
    ),
    news: (
      <IconBase size={size}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6z" />
      </IconBase>
    ),
    help: (
      <IconBase size={size}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </IconBase>
    ),
    investor: (
      <IconBase size={size}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </IconBase>
    ),
    partnership: (
      <IconBase size={size}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </IconBase>
    ),
    dataRights: (
      <IconBase size={size}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
        <path d="M9 11h6" />
      </IconBase>
    ),
    coins: (
      <IconBase size={size}>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </IconBase>
    ),
    spend: (
      <IconBase size={size}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20 2.5 18.5 1 16.5 1.5 15 3L11.5 6.5 3.3 4.7c-.4-.1-.8.1-1 .4L2 5.7c-.3.5-.1 1.1.4 1.3L9 10l-2 4-2.5-.5c-.4-.1-.8.1-1 .4l-.5.7c-.3.4-.1 1 .3 1.2L7 17l1.5 3.3c.2.4.8.6 1.2.3l.7-.5c.3-.2.5-.6.4-1L10.3 16l4 2 3.5 6.6c.2.5.8.7 1.3.4l.6-.4c.3-.2.5-.6.4-1z" />
      </IconBase>
    ),
    programme: (
      <IconBase size={size}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M15 8h3" />
        <path d="M15 12h3" />
        <path d="M7 16h10" />
      </IconBase>
    ),
    chart: (
      <IconBase size={size}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-5" />
      </IconBase>
    ),
    mail: (
      <IconBase size={size}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </IconBase>
    ),
    phone: (
      <IconBase size={size}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </IconBase>
    ),
    checkin: (
      <IconBase size={size}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </IconBase>
    ),
    seat: (
      <IconBase size={size}>
        <path d="M4 18v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
        <path d="M4 18h14" />
        <path d="M6 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
        <path d="M18 12v6h2a1 1 0 0 0 1-1v-3a2 2 0 0 0-2-2h-1z" />
      </IconBase>
    ),
    meal: (
      <IconBase size={size}>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </IconBase>
    ),
    lounge: (
      <IconBase size={size}>
        <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
        <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z" />
        <path d="M4 18v2" />
        <path d="M20 18v2" />
      </IconBase>
    ),
    transfer: (
      <IconBase size={size}>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </IconBase>
    ),
    visa: (
      <IconBase size={size}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M14 10h4" />
        <path d="M14 14h4" />
      </IconBase>
    ),
    health: (
      <IconBase size={size}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </IconBase>
    ),
    redeem: (
      <IconBase size={size}>
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </IconBase>
    ),
    upgrade: (
      <IconBase size={size}>
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </IconBase>
    ),
    tiers: (
      <IconBase size={size}>
        <path d="M12 2l3 7h7l-5.5 4.5L19 21l-7-4.5L5 21l2.5-7.5L2 9h7z" />
      </IconBase>
    ),
    family: (
      <IconBase size={size}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </IconBase>
    ),
    specialCare: (
      <IconBase size={size}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </IconBase>
    ),
  };

  return <>{icons[name] ?? icons.info}</>;
}
