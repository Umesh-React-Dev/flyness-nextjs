"use client";

import { useEffect, useState } from "react";
import { MegaMenuIcon } from "./MegaMenuIcons";
import type { MegaMenuItem } from "./types";
import "./MegaMenuPopover.scss";

type MegaMenuPopoverProps = {
  menu: MegaMenuItem;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function MegaMenuPopover({
  menu,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuPopoverProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    menu.categories[0]?.id ?? "",
  );

  useEffect(() => {
    setActiveCategoryId(menu.categories[0]?.id ?? "");
  }, [menu]);

  const activeCategory =
    menu.categories.find((category) => category.id === activeCategoryId) ??
    menu.categories[0];

  if (!activeCategory) {
    return null;
  }

  return (
    <div
      className="megaMenuPopover"
      role="region"
      aria-label={`${menu.label} menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <aside className="megaMenuSidebar" aria-label="Menu categories">
        {menu.categories.map((category) => {
          const isActive = category.id === activeCategory.id;

          return (
            <button
              key={category.id}
              type="button"
              className={`megaMenuCategory${isActive ? " isActive" : ""}`}
              aria-current={isActive ? "true" : undefined}
              onMouseEnter={() => setActiveCategoryId(category.id)}
              onFocus={() => setActiveCategoryId(category.id)}
              onClick={() => setActiveCategoryId(category.id)}
            >
              <span className="megaMenuCategoryIcon">
                <MegaMenuIcon name={category.icon} size={22} />
              </span>
              <span className="megaMenuCategoryText">
                <span className="megaMenuCategoryTitle">{category.title}</span>
                <span className="megaMenuCategoryDescription">
                  {category.description}
                </span>
              </span>
            </button>
          );
        })}
      </aside>

      <div className="megaMenuContent">
        <div className="megaMenuGrid">
          {activeCategory.links.map((link) => (
            <a key={link.title} href={link.href} className="megaMenuLink">
              <span className="megaMenuLinkIcon">
                <MegaMenuIcon name={link.icon} size={22} />
              </span>
              <span className="megaMenuLinkText">
                <span className="megaMenuLinkTitle">{link.title}</span>
                <span className="megaMenuLinkDescription">
                  {link.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
