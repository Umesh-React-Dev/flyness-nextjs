import Link from "next/link";
import type { ComponentType } from "react";
import CarIcon from "@/assets/icons/CarIcon";
import HotelsIcon from "@/assets/icons/HotelsIcon";
import UmrahPackagesIcon from "@/assets/icons/UmrahPackagesIcon";
import "./SideServices.scss";

const SERVICES: {
  id: string;
  label: string;
  href: string;
  icon: ComponentType;
}[] = [
  {
    id: "hotels",
    label: "Hotels",
    href: "#",
    icon: HotelsIcon,
  },
  {
    id: "car",
    label: "Car",
    href: "#",
    icon: CarIcon,
  },
  {
    id: "umrah",
    label: "Umrah Packages",
    href: "#",
    icon: UmrahPackagesIcon,
  },
];

export default function SideServices() {
  return (
    <nav className="sideServices" aria-label="Quick services">
      <ul className="sideServices__list">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <li key={service.id} className="sideServices__item">
              <Link href={service.href} className="sideServices__link">
                <span className="sideServices__tooltip" role="tooltip">
                  {service.label}
                </span>
                <span className="sideServices__icon">
                  <Icon />
                </span>
                <span className="sideServices__srOnly">{service.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
