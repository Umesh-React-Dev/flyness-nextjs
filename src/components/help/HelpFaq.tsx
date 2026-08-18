"use client";

import { useState } from "react";
import Image from "next/image";
import iconChevron from "@/assets/images/help/icon-chevron.svg";
import "./HelpFaq.scss";

export type HelpFaqItem = {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
};

type HelpFaqProps = {
  title: string;
  titleId?: string;
  items: HelpFaqItem[];
  defaultOpenId?: string | null;
};

export default function HelpFaq({
  title,
  titleId = "help-faq-title",
  items,
  defaultOpenId,
}: HelpFaqProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null,
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <section className="helpFaq" aria-labelledby={titleId}>
      <h2 id={titleId} className="helpFaq__title">
        {title}
      </h2>

      <div className="helpFaq__list">
        {items.map((faq) => {
          const isOpen = openFaqId === faq.id;
          const panelId = `faq-panel-${faq.id}`;
          const buttonId = `faq-button-${faq.id}`;

          return (
            <div
              key={faq.id}
              className={`helpFaq__item${isOpen ? " isOpen" : ""}`}
            >
              <h3 className="helpFaq__question">
                <button
                  type="button"
                  id={buttonId}
                  className="helpFaq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="helpFaq__chevron" aria-hidden="true">
                    <Image src={iconChevron} alt="" width={16} height={16} />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="helpFaq__panel"
              >
                <p className="helpFaq__answer">{faq.answer}</p>
                {faq.bullets?.length ? (
                  <ul className="helpFaq__bullets">
                    {faq.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
