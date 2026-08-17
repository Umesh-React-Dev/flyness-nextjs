"use client";

import { useTranslation } from "react-i18next";
import "./Footer.scss";

const FOOTER_COLUMNS = [
  "flynas",
  "manage",
  "popular",
  "destinations",
  "resources",
  "help",
  "loyalty",
  "investors",
] as const;

export default function Footer() {
  const { t } = useTranslation("home");

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {FOOTER_COLUMNS.map((columnId) => {
            const title = t(`footer.columns.${columnId}.title`);
            const links = t(`footer.columns.${columnId}.links`, {
              returnObjects: true,
            }) as string[];

            return (
              <div key={columnId} className="column">
                <h3 className="columnTitle">{title}</h3>
                <ul className="linkList">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
