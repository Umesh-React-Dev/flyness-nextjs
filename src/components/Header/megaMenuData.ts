import type { MegaMenuItem, NavItem } from "@/components/common/MegaMenuPopover/types";

const planAndBook: MegaMenuItem = {
  id: "plan-and-book",
  label: "Plan and book",
  accent: "pink",
  categories: [
    {
      id: "plan-your-journey",
      title: "Plan your journey",
      description: "Explore destinations, fares, and deals.",
      icon: "journey",
      links: [
        {
          title: "Summer Destinations",
          description: "Discover our top seasonal getaways.",
          href: "#",
          icon: "palm",
        },
        {
          title: "Fare types",
          description: "Compare Light, Plus, and Premium options.",
          href: "#",
          icon: "briefcase",
        },
        {
          title: "Payment methods",
          description: "Cards, wallets, and other ways to pay.",
          href: "#",
          icon: "card",
        },
        {
          title: "Our destinations",
          description: "Browse the full flynas route network.",
          href: "#",
          icon: "mapPin",
        },
        {
          title: "Lowest fare finder",
          description: "Find the best prices for your travel dates.",
          href: "#",
          icon: "dollar",
        },
        {
          title: "Installment option",
          description: "Split your fare into easy payments.",
          href: "#",
          icon: "calendar",
        },
        {
          title: "Flights",
          description: "Search and book your next flight.",
          href: "#",
          icon: "plane",
        },
        {
          title: "Price lock",
          description: "Hold a fare while you decide.",
          href: "#",
          icon: "lock",
        },
      ],
    },
    {
      id: "book",
      title: "Book",
      description: "Reserve flights and manage payments.",
      icon: "book",
      links: [
        {
          title: "Book a flight",
          description: "Search routes and complete your booking.",
          href: "#",
          icon: "plane",
        },
        {
          title: "Group booking",
          description: "Travel together with special group rates.",
          href: "#",
          icon: "partnership",
        },
        {
          title: "Payment methods",
          description: "Cards, wallets, and other ways to pay.",
          href: "#",
          icon: "card",
        },
        {
          title: "Installment option",
          description: "Split your fare into easy payments.",
          href: "#",
          icon: "calendar",
        },
        {
          title: "Price lock",
          description: "Hold a fare while you decide.",
          href: "#",
          icon: "lock",
        },
        {
          title: "Lowest fare finder",
          description: "Find the best prices for your travel dates.",
          href: "#",
          icon: "dollar",
        },
      ],
    },
    {
      id: "before-you-fly",
      title: "Before you fly",
      description: "Visas, health, and travel requirements.",
      icon: "beforeFly",
      links: [
        {
          title: "Travel documents",
          description: "Passport, ID, and entry requirements.",
          href: "#",
          icon: "visa",
        },
        {
          title: "Visa information",
          description: "Check visa rules for your destination.",
          href: "#",
          icon: "visa",
        },
        {
          title: "Health requirements",
          description: "Stay informed before you travel.",
          href: "#",
          icon: "health",
        },
        {
          title: "Airport information",
          description: "Terminals, timing, and what to expect.",
          href: "#",
          icon: "building",
        },
      ],
    },
  ],
};

const prepareYourTrip: MegaMenuItem = {
  id: "prepare-your-trip",
  label: "Prepare your trip",
  accent: "pink",
  categories: [
    {
      id: "baggage",
      title: "Baggage",
      description: "Carry-on, checked, and special items.",
      icon: "baggage",
      links: [
        {
          title: "Cabin baggage",
          description: "Size and weight limits for carry-ons.",
          href: "#",
          icon: "cabinBag",
        },
        {
          title: "Checked baggage",
          description: "Rules for your main luggage.",
          href: "#",
          icon: "checkedBag",
        },
        {
          title: "Sports equipment",
          description: "Bringing golf bags, skis, and more.",
          href: "#",
          icon: "sports",
        },
        {
          title: "Special baggage",
          description: "Traveling with fragile or oversized items.",
          href: "#",
          icon: "box",
        },
        {
          title: "Compensation Policy",
          description: "If your bag is lost or damaged.",
          href: "#",
          icon: "dollar",
        },
        {
          title: "Transportation of Live Animals",
          description: "Flying with pets or service animals.",
          href: "#",
          icon: "paw",
        },
      ],
    },
    {
      id: "manage-booking",
      title: "Manage Your Booking",
      description: "Edit your trip, add extras, or check in.",
      icon: "manage",
      links: [
        {
          title: "Change booking",
          description: "Update dates, names, or destinations.",
          href: "#",
          icon: "transfer",
        },
        {
          title: "Online check-in",
          description: "Check in and get your boarding pass.",
          href: "#",
          icon: "checkin",
        },
        {
          title: "Add baggage",
          description: "Purchase extra allowance for your trip.",
          href: "#",
          icon: "baggage",
        },
        {
          title: "Seat selection",
          description: "Choose your preferred seat in advance.",
          href: "#",
          icon: "seat",
        },
        {
          title: "Flight status",
          description: "Track delays, gates, and schedules.",
          href: "#",
          icon: "plane",
        },
        {
          title: "Cancel booking",
          description: "Review refund and cancellation options.",
          href: "#",
          icon: "lock",
        },
      ],
    },
    {
      id: "enhance-trip",
      title: "Enhance your trip",
      description: "Upgrade and personalize your journey.",
      icon: "gift",
      links: [
        {
          title: "Seat upgrades",
          description: "Extra legroom and preferred seats.",
          href: "#",
          icon: "seat",
        },
        {
          title: "Meals",
          description: "Pre-order meals for your flight.",
          href: "#",
          icon: "meal",
        },
        {
          title: "Lounge access",
          description: "Relax before departure in the lounge.",
          href: "#",
          icon: "lounge",
        },
        {
          title: "Priority services",
          description: "Faster boarding and check-in options.",
          href: "#",
          icon: "upgrade",
        },
        {
          title: "Travel insurance",
          description: "Protect your trip with coverage options.",
          href: "#",
          icon: "lock",
        },
        {
          title: "Gift vouchers",
          description: "Give the gift of travel to someone special.",
          href: "#",
          icon: "gift",
        },
      ],
    },
  ],
};

const information: MegaMenuItem = {
  id: "information",
  label: "Information",
  accent: "pink",
  categories: [
    {
      id: "about-flynas",
      title: "About flynas",
      description: "Company, careers, and contact info.",
      icon: "building",
      links: [
        {
          title: "About us",
          description: "Our story, mission, and values.",
          href: "#",
          icon: "info",
        },
        {
          title: "Our fleet",
          description: "Aircraft that power the flynas network.",
          href: "#",
          icon: "fleet",
        },
        {
          title: "Sustainability",
          description: "How we reduce our environmental impact.",
          href: "#",
          icon: "leaf",
        },
        {
          title: "Our offices",
          description: "Find flynas locations near you.",
          href: "#",
          icon: "office",
        },
        {
          title: "Jobs",
          description: "Explore careers at flynas.",
          href: "#",
          icon: "jobs",
        },
        {
          title: "Latest news",
          description: "Announcements and press releases.",
          href: "#",
          icon: "news",
        },
        {
          title: "FAQs",
          description: "Answers to common travel questions.",
          href: "#",
          icon: "help",
        },
        {
          title: "Help and support",
          description: "Get assistance when you need it.",
          href: "#",
          icon: "help",
        },
        {
          title: "Investor Relations",
          description: "Reports, governance, and investor news.",
          href: "#",
          icon: "investor",
        },
        {
          title: "Al Hilal Partnership",
          description: "Our partnership with Al Hilal Club.",
          href: "#",
          icon: "partnership",
        },
        {
          title: "Data Rights requests",
          description: "Access or manage your personal data.",
          href: "#",
          icon: "dataRights",
        },
      ],
    },
    {
      id: "special-care",
      title: "Special Care",
      description: "Support for families and special needs.",
      icon: "heart",
      links: [
        {
          title: "Passengers with reduced mobility",
          description: "Assistance through the airport and onboard.",
          href: "#",
          icon: "specialCare",
        },
        {
          title: "Traveling with infants",
          description: "Policies and tips for family travel.",
          href: "#",
          icon: "family",
        },
        {
          title: "Unaccompanied minors",
          description: "Safe travel for children flying alone.",
          href: "#",
          icon: "family",
        },
        {
          title: "Medical assistance",
          description: "Support for health-related travel needs.",
          href: "#",
          icon: "health",
        },
        {
          title: "Expectant mothers",
          description: "Guidelines for flying during pregnancy.",
          href: "#",
          icon: "heart",
        },
        {
          title: "Service animals",
          description: "Traveling with certified assistance animals.",
          href: "#",
          icon: "paw",
        },
      ],
    },
    {
      id: "why-flynas",
      title: "Why flynas",
      description: "Premium services and partnerships.",
      icon: "star",
      links: [
        {
          title: "Why choose flynas",
          description: "Value, comfort, and destination choice.",
          href: "#",
          icon: "star",
        },
        {
          title: "Onboard experience",
          description: "What to expect during your flight.",
          href: "#",
          icon: "plane",
        },
        {
          title: "Partnerships",
          description: "Airline and lifestyle partners.",
          href: "#",
          icon: "partnership",
        },
        {
          title: "Corporate travel",
          description: "Business-friendly booking solutions.",
          href: "#",
          icon: "briefcase",
        },
        {
          title: "Premium services",
          description: "Extras that elevate your journey.",
          href: "#",
          icon: "upgrade",
        },
      ],
    },
  ],
};

const nasmiles: MegaMenuItem = {
  id: "nasmiles",
  label: "nasmiles",
  accent: "teal",
  categories: [
    {
      id: "earn-nasmiles",
      title: "Earn nasmiles",
      description: "Collect miles on flights and more.",
      icon: "coins",
      links: [
        {
          title: "All about earning",
          description: "Ways to earn nasmiles on flights and more.",
          href: "#",
          icon: "chart",
        },
        {
          title: "Claim missing nasmiles",
          description: "Submit a request for uncredited miles.",
          href: "#",
          icon: "mail",
        },
        {
          title: "Family Miles Account",
          description: "Connect your family to earn and spend miles as one.",
          href: "#",
          icon: "phone",
        },
      ],
    },
    {
      id: "spend-nasmiles",
      title: "Spend nasmiles",
      description: "Use your miles for rewards and perks.",
      icon: "spend",
      links: [
        {
          title: "Redeem for flights",
          description: "Use miles toward your next booking.",
          href: "#",
          icon: "redeem",
        },
        {
          title: "Upgrade with miles",
          description: "Turn miles into a more comfortable seat.",
          href: "#",
          icon: "upgrade",
        },
        {
          title: "Partner rewards",
          description: "Spend miles with selected partners.",
          href: "#",
          icon: "gift",
        },
      ],
    },
    {
      id: "programme",
      title: "Programme",
      description: "Explore membership levels and benefits.",
      icon: "programme",
      links: [
        {
          title: "Membership tiers",
          description: "Compare Blue, Silver, Gold, and beyond.",
          href: "#",
          icon: "tiers",
        },
        {
          title: "Member benefits",
          description: "Perks that grow with your status.",
          href: "#",
          icon: "star",
        },
        {
          title: "Join nasmiles",
          description: "Sign up and start earning today.",
          href: "#",
          icon: "checkin",
        },
      ],
    },
  ],
};

export const navItems: NavItem[] = [
  { id: "plan-and-book", label: "Plan and book", menu: planAndBook },
  { id: "prepare-your-trip", label: "Prepare your trip", menu: prepareYourTrip },
  { id: "information", label: "Information", menu: information },
  { id: "nasmiles", label: "nasmiles", menu: nasmiles },
  { id: "nasholidays", label: "nasHolidays", href: "#" },
];
