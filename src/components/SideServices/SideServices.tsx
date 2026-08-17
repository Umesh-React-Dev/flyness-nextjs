"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import CarIcon from "@/assets/icons/CarIcon";
import HotelsIcon from "@/assets/icons/HotelsIcon";
import UmrahPackagesIcon from "@/assets/icons/UmrahPackagesIcon";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import "./SideServices.scss";

const SERVICES: {
  id: "hotels" | "car" | "umrah";
  href: string;
  icon: ComponentType;
}[] = [
  { id: "hotels", href: "#", icon: HotelsIcon },
  { id: "car", href: "#", icon: CarIcon },
  { id: "umrah", href: "#", icon: UmrahPackagesIcon },
];

export default function SideServices() {
  const { t } = useTranslation("home");

  return (
    <nav className="sideServices" aria-label={t(HOME_LABEL.SIDE_SERVICES_ARIA)}>
      <ul className="sideServices__list">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          const label = t(`sideServices.${service.id}`);

          return (
            <li key={service.id} className="sideServices__item">
              <Link href={service.href} className="sideServices__link">
                <span className="sideServices__tooltip" role="tooltip">
                  {label}
                </span>
                <span className="sideServices__icon">
                  <Icon />
                </span>
                <span className="sideServices__srOnly">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
