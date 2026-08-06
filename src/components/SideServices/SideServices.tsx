import Link from "next/link";
import "./SideServices.scss";

const SERVICES = [
  {
    id: "hotels",
    label: "Hotels",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M4 19v-8.5A1.5 1.5 0 0 1 5.5 9H8V7.5A1.5 1.5 0 0 1 9.5 6h5A1.5 1.5 0 0 1 16 7.5V9h2.5A1.5 1.5 0 0 1 20 10.5V19h-1.75v-1.5H5.75V19H4zm3.5-4.25h2v-2h-2v2zm3.75 0h2v-2h-2v2zm3.75 0h2v-2h-2v2zM9.5 7.5V9h5V7.5h-5z"
        />
      </svg>
    ),
  },
  {
    id: "car",
    label: "Car",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M6.2 17a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zm11.6 0a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zM5.1 14.4l1.15-4.05A1.4 1.4 0 0 1 7.6 9.3h8.8a1.4 1.4 0 0 1 1.35 1.05l1.15 4.05v3.4h-1.5v-1.35H6.6v1.35H5.1v-3.4zm2.1-3.75-.7 2.45h11l-.7-2.45H7.2z"
        />
      </svg>
    ),
  },
  {
    id: "umrah",
    label: "Umrah Packages",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M6.25 5.5h11.5v13H6.25v-13zm1.5 1.5v10h8.5v-10H7.75zm3.35 4.2h1.8v4.6h-1.8V11.2z"
        />
      </svg>
    ),
  },
] as const;

export default function SideServices() {
  return (
    <nav className="sideServices" aria-label="Quick services">
      <ul className="sideServices__list">
        {SERVICES.map((service) => (
          <li key={service.id} className="sideServices__item">
            <Link href={service.href} className="sideServices__link">
              <span className="sideServices__tooltip" role="tooltip">
                {service.label}
              </span>
              <span className="sideServices__icon">{service.icon}</span>
              <span className="sideServices__srOnly">{service.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
