"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
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
  const { t } = useTranslation("home");
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
      aria-label={t(HOME_LABEL.MEGA_MENU_REGION, {
        label: t(`nav.${menu.id}`, { defaultValue: menu.label }),
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="megaMenuTabsContent">
        <div className="megaMenuLayout">
          <aside className="megaMenuSidebar" aria-label={t(HOME_LABEL.MEGA_MENU_CATEGORIES)}>
            <div className="megaMenuLeftTabs" role="tablist">
              {menu.categories.map((category) => {
                const isActive = category.id === activeCategory.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    className={`megaMenuCategory${isActive ? " isActive" : ""}`}
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveCategoryId(category.id)}
                    onFocus={() => setActiveCategoryId(category.id)}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    <i
                      className="megaMenuSpriteIcon"
                      style={{ backgroundPosition: category.iconPosition }}
                      aria-hidden="true"
                    />
                    <span className="megaMenuCategoryText">
                      <span className="megaMenuCategoryTitle">
                        {t(`categories.${category.id}.title`, {
                          defaultValue: category.title,
                        })}
                      </span>
                      <span className="megaMenuCategoryDescription">
                        {t(`categories.${category.id}.description`, {
                          defaultValue: category.description,
                        })}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="megaMenuPanel">
            <div className="megaMenuTabContent" role="tabpanel">
              <div className="megaMenuGrid">
                {activeCategory.links.map((link) => (
                  <a
                    key={link.title}
                    href="javascript:void(0)"
                    className="megaMenuLink"
                  >
                    <i
                      className="megaMenuSpriteIcon"
                      style={{ backgroundPosition: link.iconPosition }}
                      aria-hidden="true"
                    />
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
        </div>
      </div>
    </div>
  );
}
