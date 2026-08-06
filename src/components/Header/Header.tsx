"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/flynas-logo-green.svg";
import LanguageMenu from "@/components/common/LanguageMenu";
import MegaMenuPopover from "@/components/common/MegaMenuPopover";
import { navItems } from "./megaMenuData";
import "./Header.scss";

const CLOSE_DELAY_MS = 150;

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11a9 9 0 0 1 18 0v4a3 3 0 0 1-3 3h-2" />
      <path d="M3 15v-4a3 3 0 0 1 3-3h0" />
      <path d="M21 15v-4a3 3 0 0 0-3-3h0" />
      <rect x="3" y="11" width="4" height="6" rx="1" />
      <rect x="17" y="11" width="4" height="6" rx="1" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Header() {
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
        <Link href="/" className="logoLink" aria-label="Flynas home">
          <Image src={logo} alt="flynas" priority className="logo" />
        </Link>

        <div className="rightSection">
          <div className="utilityBar">
            <div className="searchControl" ref={searchRef}>
              <button
                type="button"
                className={`searchButton${isSearchOpen ? " isOpen" : ""}`}
                aria-label="Search"
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
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    className="searchSubmit"
                    aria-label="Submit search"
                  >
                    <SearchIcon />
                  </button>
                </form>
              ) : null}
            </div>

            <a href="#" className="loginButton">
              Log In
              <ArrowRightIcon />
            </a>

            <span className="divider" aria-hidden="true" />

            <a href="#" className="utilityLink">
              <HeadsetIcon />
              Help &amp; Support
            </a>

            <span className="divider" aria-hidden="true" />

            <LanguageMenu />
          </div>

          <nav className="navBar" aria-label="Main navigation">
            {navItems.map((item) => {
              const hasMenu = Boolean(item.menu);
              const isActive = activeMenuId === item.id;
              const accent = item.menu?.accent ?? "pink";

              if (!hasMenu) {
                return (
                  <div key={item.id} className="navItem accentPink">
                    <a href={item.href ?? "#"} className="navLink">
                      {item.label}
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
                    {item.label}
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
