"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import iconChevron from "@/assets/images/help/icon-chevron.svg";
import "./HelpAccordion.scss";

type HelpAccordionProps = {
  title: string;
  titleId?: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function HelpAccordion({
  title,
  titleId = "help-accordion-title",
  defaultOpen = true,
  children,
}: HelpAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `${titleId}-panel`;
  const buttonId = `${titleId}-button`;

  return (
    <section className={`helpAccordion${isOpen ? " isOpen" : ""}`}>
      <h2 className="helpAccordion__heading">
        <button
          type="button"
          id={buttonId}
          className="helpAccordion__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span id={titleId}>{title}</span>
          <span className="helpAccordion__chevron" aria-hidden="true">
            <Image src={iconChevron} alt="" width={16} height={16} />
          </span>
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="helpAccordion__panel"
      >
        {children}
      </div>
    </section>
  );
}
