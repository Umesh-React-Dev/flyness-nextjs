"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import HeadsetIcon from "@/assets/icons/HeadsetIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import logo from "@/assets/images/header-logo.svg";
import LanguageMenu from "@/components/common/LanguageMenu";
import MegaMenuPopover from "@/components/common/MegaMenuPopover";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import { navItems } from "./megaMenuData";
import "./Header.scss";

const CLOSE_DELAY_MS = 150;

export default function Header() {
  const { t } = useTranslation("home");
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeMenu =
    navItems.find((item) => item.id === activeMenuId)?.menu ?? null;

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = (menuId: string) => {
    clearCloseTimeout();
    setActiveMenuId(menuId);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, CLOSE_DELAY_MS);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  useEffect(() => {
    if (!isSearchOpen) return;

    searchInputRef.current?.focus();

    const handlePointerDown = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logoLink" aria-label={t(HOME_LABEL.HEADER_HOME_ARIA)}>
          <Image src={logo} alt="flynas" priority className="logo" />
        </Link>

        <div className="rightSection">
          <div className="utilityBar">
            <div className="searchControl" ref={searchRef}>
              <button
                type="button"
                className={`searchButton${isSearchOpen ? " isOpen" : ""}`}
                aria-label={t(HOME_LABEL.HEADER_SEARCH)}
                aria-expanded={isSearchOpen}
                aria-haspopup="true"
                onClick={() => setIsSearchOpen((open) => !open)}
              >
                <SearchIcon />
              </button>

              {isSearchOpen ? (
                <form
                  className="searchPopover"
                  role="search"
                  onSubmit={handleSearchSubmit}
                >
                  <input
                    ref={searchInputRef}
                    type="search"
                    className="searchInput"
                    placeholder={t(HOME_LABEL.HEADER_SEARCH_PLACEHOLDER)}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    aria-label={t(HOME_LABEL.HEADER_SEARCH)}
                  />
                  <button
                    type="submit"
                    className="searchSubmit"
                    aria-label={t(HOME_LABEL.HEADER_SEARCH_SUBMIT)}
                  >
                    <SearchIcon />
                  </button>
                </form>
              ) : null}
            </div>

            <Link href="/login" className="loginButton">
              {t(HOME_LABEL.HEADER_LOGIN)}
              <ArrowRightIcon />
            </Link>

            <span className="divider" aria-hidden="true" />

            <Link href="/help" className="utilityLink">
              <HeadsetIcon />
              {t(HOME_LABEL.HEADER_HELP)}
            </Link>

            <span className="divider" aria-hidden="true" />

            <LanguageMenu />
          </div>

          <nav className="navBar" aria-label={t(HOME_LABEL.HEADER_NAV_ARIA)}>
            {navItems.map((item) => {
              const hasMenu = Boolean(item.menu);
              const isActive = activeMenuId === item.id;
              const accent = item.menu?.accent ?? "pink";

              if (!hasMenu) {
                return (
                  <div key={item.id} className="navItem accentPink">
                    <a href={item.href ?? "#"} className="navLink">
                      {t(`nav.${item.id}`, { defaultValue: item.label })}
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className={`navItem${isActive ? " isActive" : ""}${
                    accent === "teal" ? " accentTeal" : " accentPink"
                  }`}
                  onMouseEnter={() => openMenu(item.id)}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href="#"
                    className="navLink"
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onFocus={() => openMenu(item.id)}
                  >
                    {t(`nav.${item.id}`, { defaultValue: item.label })}
                  </a>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {activeMenu ? (
        <div
          className="megaMenuShell"
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={scheduleClose}
        >
          <div className="megaMenuInner">
            <MegaMenuPopover
              menu={activeMenu}
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={scheduleClose}
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
