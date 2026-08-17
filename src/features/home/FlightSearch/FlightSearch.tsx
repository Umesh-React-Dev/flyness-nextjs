"use client";

import { type ComponentType, useState } from "react";
import CheckInIcon from "@/assets/icons/CheckInIcon";
import FlightsIcon from "@/assets/icons/FlightsIcon";
import ManageIcon from "@/assets/icons/ManageIcon";
import PackagesIcon from "@/assets/icons/PackagesIcon";
import StatusIcon from "@/assets/icons/StatusIcon";
import { SEARCH_TABS, type SearchTabId } from "./flightSearchData";
import { HOME_LABEL } from "@/i18n/constants/home.constant";
import { useTranslation } from "react-i18next";
import CheckInPanel from "./panels/CheckInPanel";
import FlightsPanel from "./panels/FlightsPanel";
import ManagePanel from "./panels/ManagePanel";
import PackagesPanel from "./panels/PackagesPanel";
import StatusPanel from "./panels/StatusPanel";
import "./FlightSearch.scss";

const TAB_ICONS: Record<SearchTabId, ComponentType<{ className?: string }>> = {
  flights: FlightsIcon,
  packages: PackagesIcon,
  manage: ManageIcon,
  checkin: CheckInIcon,
  status: StatusIcon,
};

const TAB_PANELS: Record<SearchTabId, ComponentType> = {
  flights: FlightsPanel,
  packages: PackagesPanel,
  manage: ManagePanel,
  checkin: CheckInPanel,
  status: StatusPanel,
};

export default function FlightSearch() {
  const { t } = useTranslation("home");
  const [activeTab, setActiveTab] = useState<SearchTabId>("flights");
  const ActivePanel = TAB_PANELS[activeTab];

  return (
    <section className="flightSearch" aria-label={t(HOME_LABEL.SEARCH_ARIA)}>
      <div className="flightSearch__inner">
        <div className="flightSearch__tabs" role="tablist" aria-label={t(HOME_LABEL.SEARCH_TABS_ARIA)}>
          {SEARCH_TABS.map((tab) => {
            const Icon = TAB_ICONS[tab.id];
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`search-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`search-panel-${tab.id}`}
                className={`flightSearch__tab${isActive ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="flightSearch__tabIcon" />
                <span>{t(`search.tabs.${tab.id}`)}</span>
              </button>
            );
          })}
        </div>

        <div
          className="flightSearch__panel"
          role="tabpanel"
          id={`search-panel-${activeTab}`}
          aria-labelledby={`search-tab-${activeTab}`}
        >
          <ActivePanel />
        </div>
      </div>
    </section>
  );
}
