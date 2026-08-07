import type { MegaMenuItem, NavItem } from "@/components/common/MegaMenuPopover/types";

const planAndBook: MegaMenuItem = {
  id: "plan-and-book",
  label: "Plan and book",
  accent: "pink",
  categories: [
    {
      id: "plan-your-journey",
      title: "Plan your journey",
      description: "Explore travel options, fares, and offers",
      iconPosition: "-49px -39px",
      links: [
        {
          title: "Summer Destinations",
          description: "Top seasonal offers and places to go",
          href: "https://www.flynas.com/en/summer-destinations-2026",
          iconPosition: "-321px -41px",
        },
        {
          title: "Our destinations",
          description: "Cities and countries we fly to",
          href: "https://www.flynas.com/en/route-map",
          iconPosition: "-45px -159px",
        },
        {
          title: "Flights",
          description: "Search and book available routes",
          href: "https://www.flynas.com/en/flights",
          iconPosition: "-113px -159px",
        },
        {
          title: "Fare types",
          description: "Compare bundles to suit your needs",
          href: "https://www.flynas.com/en/booking-flynas/fare-types",
          iconPosition: "-321px -163.5px",
        },
        {
          title: "Lowest fare finder",
          description: "Find the cheapest flights easily",
          href: "https://www.flynas.com/en/lowest-fare-finder",
          iconPosition: "-222px -100.5px",
        },
        {
          title: "Price lock",
          description: "Secure your fare before confirming",
          href: "https://www.flynas.com/en/booking-flynas/price-lock",
          iconPosition: "-83px -100px",
        },
        {
          title: "Payment methods",
          description: "All supported ways to pay",
          href: "https://www.flynas.com/en/payment-methods/",
          iconPosition: "-117px -196px",
        },
        {
          title: "Installment option",
          description: "Book now, pay in parts later",
          href: "https://www.flynas.com/en/installment",
          iconPosition: "-287px -131px",
        },
      ],
    },
    {
      id: "book",
      title: "Book",
      description: "Reserve hotels, cars, and extras",
      iconPosition: "-49px -6px",
      links: [
        {
          title: "nasholidays",
          description: "All-in-one packages and getaways",
          href: "https://nasholidays.com/en",
          iconPosition: "-321px -105px",
        },
        {
          title: "Travel Ideas",
          description: "Inspiration and themed travel tips",
          href: "https://www.flynas.com/en/travel-ideas",
          iconPosition: "-220px -165px",
        },
        {
          title: "Hotels",
          description: "Book stays with flexible options",
          href: "https://www.booking.com/partnerships?aid=922212&label=fn-home-banner-navdrop",
          iconPosition: "-253px -8px",
        },
        {
          title: "Rent a car",
          description: "Convenient rentals for your trip",
          href: "https://cars.cartrawler.com/flynas/en/?clientId=565593",
          iconPosition: "-151px -102px",
        },
        {
          title: "Cargo",
          description: "Send or receive shipments easily",
          href: "https://www.flynas.com/en/cargo",
          iconPosition: "-83px -163px",
        },
        {
          title: "Group booking",
          description: "Travel packages for multiple passengers",
          href: "https://www.flynas.com/en/group-flight-bookings",
          iconPosition: "-185px -133.5px",
        },
      ],
    },
    {
      id: "before-you-fly",
      title: "Before you fly",
      description: "Check travel rules and airport info",
      iconPosition: "-49px -101.5px",
      links: [
        {
          title: "Flight status",
          description: "Track your flight in real- time",
          href: "https://www.flynas.com/en/help/flight-status",
          iconPosition: "-185px -39px",
        },
        {
          title: "Check-in information",
          description: "Know when and how to check in",
          href: "https://www.flynas.com/en/help/online-checkin",
          iconPosition: "-117.5px -99.5px",
        },
        {
          title: "Our lounges",
          description: "Relax at the airport in comfort",
          href: "https://www.flynas.com/en/plan-my-trip/lounge",
          iconPosition: "-185px -103.5px",
        },
        {
          title: "Airports and terminals",
          description: "Gate info and airport services",
          href: "https://www.flynas.com/en/plan-my-trip/airports",
          iconPosition: "-113px -159px",
        },
        {
          title: "flynas app",
          description: "Manage your travel on the go",
          href: "https://www.flynas.com/en/booking-flynas/flynas-mobile-application",
          iconPosition: "-289px -7px",
        },
        {
          title: "Visa Requirements",
          description: "Entry rules for your destination",
          href: "https://www.flynas.com/en/visa-requirements",
          iconPosition: "-287px -162px",
        },
        {
          title: "eVisa",
          description: "Apply online for travel visas",
          href: "https://www.flynas.com/en/evisa",
          iconPosition: "-321px -101px",
        },
        {
          title: "Stopover Visa",
          description: "Transit visa details for connections",
          href: "https://www.flynas.com/en/stopovervisa",
          iconPosition: "-321px -70px",
        },
        {
          title: "Required vaccines",
          description: "Health rules for travel readiness",
          href: "https://www.flynas.com/en/required-vaccines",
          iconPosition: "-151px -43px",
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
      description: "Carry-on, checked, and special items",
      iconPosition: "-49px -101.5px",
      links: [
        {
          title: "Cabin baggage",
          description: "Size and weight limits for carry-ons",
          href: "https://www.flynas.com/en/plan-my-trip/cabin-baggage",
          iconPosition: "-321px -162.5px",
        },
        {
          title: "Checked baggage",
          description: "Rules for your main luggage",
          href: "https://www.flynas.com/en/plan-my-trip/baggage",
          iconPosition: "-49px -101.5px",
        },
        {
          title: "Sports equipment",
          description: "Bringing golf bags, skis, and more",
          href: "https://www.flynas.com/en/plan-my-trip/sport-equipment",
          iconPosition: "-249px -66px",
        },
        {
          title: "Special baggage",
          description: "Traveling with fragile or oversized items",
          href: "https://www.flynas.com/en/plan-my-trip/special-baggage",
          iconPosition: "-83px -163px",
        },
        {
          title: "Compensation Policy",
          description: "If your bag is lost or damaged",
          href: "https://static.flynas.com/media/7897/passenger_rights_protection_regulations_19-july-2023-3.pdf",
          iconPosition: "-222px -100.5px",
        },
        {
          title: "Transportation of Live Animals",
          description: "Flying with pets or service animals",
          href: "https://www.flynas.com/en/transportation-live-animals",
          iconPosition: "-151px -133px",
        },
      ],
    },
    {
      id: "manage-your-booking",
      title: "Manage Your Booking",
      description: "Edit your trip, add extras, or check in",
      iconPosition: "-15px -10px",
      links: [
        {
          title: "Change your booking",
          description: "Modify flight or passenger details",
          href: "https://booking.flynas.com/#/manage/search?lang=en-US",
          iconPosition: "-15px -194px",
        },
        {
          title: "Add services",
          description: "Include extras like meals or seats",
          href: "https://booking.flynas.com/#/manage/search?lang=en-US",
          iconPosition: "-287px -101px",
        },
        {
          title: "Online check-in",
          description: "Check in before arriving at the airport",
          href: "https://booking.flynas.com/#/wci/search?lang=en-US",
          iconPosition: "-289px -7px",
        },
        {
          title: "Fly Ahead",
          description: "Switch to an earlier flight if available",
          href: "https://www.flynas.com/en/fly-ahead-feature",
          iconPosition: "-219px -10px",
        },
      ],
    },
    {
      id: "enhance-your-trip",
      title: "Enhance your trip",
      description: "Upgrade and personalize your journey",
      iconPosition: "-287px -39px",
      links: [
        {
          title: "Choose your seat",
          description: "Select your preferred seat location",
          href: "https://www.flynas.com/en/plan-my-trip/seat-selection",
          iconPosition: "-219px -193.5px",
        },
        {
          title: "Order your meal",
          description: "Pre-select your in-flight food",
          href: "https://www.flynas.com/en/plan-my-trip/pre-order-meals",
          iconPosition: "-181px -66px",
        },
        {
          title: "Add Baggage",
          description: "Buy extra luggage allowance",
          href: "https://www.flynas.com/en/plan-my-trip/baggage",
          iconPosition: "-185px -8px",
        },
        {
          title: "Priority Service",
          description: "Faster check-in and early boarding",
          href: "https://www.flynas.com/en/priority-service",
          iconPosition: "-253px -101px",
        },
        {
          title: "Upgrade to premium",
          description: "Extra comfort, flexibility & perks",
          href: "https://www.flynas.com/en/upgrade",
          iconPosition: "-83px -70px",
        },
        {
          title: "Buy lounge access",
          description: "Relax before your flight in style",
          href: "https://www.flynas.com/en/plan-my-trip/lounge",
          iconPosition: "-49px 138.5px",
        },
        {
          title: "Order your visa",
          description: "Visa support for your destination",
          href: "https://www.flynas.com/en/visa-requirements",
          iconPosition: "-151px -69px",
        },
        {
          title: "Travel insurance",
          description: "Protection for unexpected events",
          href: "https://www.flynas.com/en/insurance",
          iconPosition: "-15px -162.5px",
        },
        {
          title: "Sky menu",
          description: "View our onboard dining options",
          href: "https://static.flynas.com/media/dgvlbass/july_2026_sky_menu.pdf",
          iconPosition: "-117px -134.5px",
        },
        {
          title: "flynas mall",
          description: "Explore our in-flight catalog",
          href: "https://static.flynas.com/media/gdpfxw12/skymall.pdf",
          iconPosition: "-83px -193px",
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
      description: "Company, careers, and contact info",
      iconPosition: "-16px -68.5px",
      links: [
        {
          title: "About us",
          description: "Get to know flynas and our values",
          href: "https://www.flynas.com/en/about-us",
          iconPosition: "-151px -8px",
        },
        {
          title: "Our fleet",
          description: "Explore the aircraft we operate",
          href: "https://www.flynas.com/en/about-us/fleet",
          iconPosition: "-287px -195px",
        },
        {
          title: "Sustainability",
          description: "Our commitment to the environment",
          href: "https://www.flynas.com/en/sustainability",
          iconPosition: "-321px -195px",
        },
        {
          title: "Our offices",
          description: "Find our locations and contact details",
          href: "https://www.flynas.com/en/contact-us/office-locations",
          iconPosition: "-45px -159px",
        },
        {
          title: "Jobs",
          description: "Join the flynas team",
          href: "https://career.flynas.com/",
          iconPosition: "-321px -163.5px",
        },
        {
          title: "Latest news",
          description: "Catch up on announcements and updates",
          href: "https://www.flynas.com/en/media-center/news-updates",
          iconPosition: "-49px -224.5px",
        },
        {
          title: "FAQs",
          description: "Answers to your most common questions",
          href: "https://www.flynas.com/en/contact-us/faqs",
          iconPosition: "-321px -8px",
        },
        {
          title: "Help and support",
          description: "Need assistance? We're here to help",
          href: "https://www.flynas.com/en/help",
          iconPosition: "-86px -223.5px",
        },
        {
          title: "Investor Relations",
          description: "Explore the latest reports and financial updates",
          href: "https://ir.flynas.com/",
          iconPosition: "-287px -69px",
        },
        {
          title: "Al Hilal Partnership",
          description: "Exclusive deals for fans and members",
          href: "https://www.flynas.com/en/alhilal-partnership",
          iconPosition: "-15px -135px",
        },
        {
          title: "Data Rights requests",
          description: "Allow any customer to submit Personal Data Rights requests",
          href: "https://www.flynas.com/en/dpo-request-form",
          iconPosition: "-115px -223px",
        },
      ],
    },
    {
      id: "special-care",
      title: "Special Care",
      description: "Support for families and special needs",
      iconPosition: "-49px -71px",
      links: [
        {
          title: "Special assistance",
          description: "Help for travelers with limited mobility",
          href: "https://www.flynas.com/en/plan-my-trip/special-services",
          iconPosition: "-117px -39px",
        },
        {
          title: "Traveling with children",
          description: "Guidance for parents flying with kids",
          href: "https://www.flynas.com/en/plan-my-trip/special-services/#/traveling_with_children",
          iconPosition: "-113px -66px",
        },
        {
          title: "Expectant mothers",
          description: "Travel advice and policies during pregnancy",
          href: "https://www.flynas.com/en/plan-my-trip/special-services/#/expectant_mothers",
          iconPosition: "-253px -34px",
        },
      ],
    },
    {
      id: "why-flynas",
      title: "Why flynas",
      description: "Premium services and partnerships",
      iconPosition: "-83px -70px",
      links: [
        {
          title: "Premium Class",
          description: "Enjoy more space and exclusive services",
          href: "https://www.flynas.com/en/premium-class",
          iconPosition: "-185px -165px",
        },
        {
          title: "Partnerships",
          description: "Explore our business and travel partners",
          href: "https://www.flynas.com/en/partnerships",
          iconPosition: "-15px -228px",
        },
        {
          title: "Timetable",
          description: "Check flight schedules and frequencies",
          href: "https://www.flynas.com/en/flight-schedule",
          iconPosition: "-219px -39px",
        },
        {
          title: "Flying with children",
          description: "Comfort and support for young travelers",
          href: "https://www.flynas.com/en/Flying-with-children",
          iconPosition: "-153px -161.5px",
        },
        {
          title: "Blog",
          description: "Travel guides, tips, offers, and destination inspiration from flynas.",
          href: "https://www.flynas.com/en/blog",
          iconPosition: "-287px -39px",
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
      description: "Earn nasmiles",
      iconPosition: "-83px -39px",
      links: [
        {
          title: "All about earning",
          description: "Ways to earn nasmiles on flights and more",
          href: "https://www.flynas.com/en/earn-nasmiles",
          iconPosition: "-219px -71px",
        },
        {
          title: "Claim missing nasmiles",
          description: "Submit a request for uncredited miles",
          href: "https://www.flynas.com/en/claim-missing-miles/",
          iconPosition: "-83px -134px",
        },
        {
          title: "Family Miles Account",
          description: "Connect your family to earn and spend miles as one.",
          href: "https://www.flynas.com/en/family-miles-account/",
          iconPosition: "-289px -6px",
        },
      ],
    },
    {
      id: "spend-nasmiles",
      title: "Spend nasmiles",
      description: "Use your miles for rewards and perks",
      iconPosition: "-15px -102.5px",
      links: [
        {
          title: "Redeem",
          description: "Use nasmiles to book flights and extras",
          href: "https://www.flynas.com/en/redeem-smiles",
          iconPosition: "-287px -39px",
        },
        {
          title: "Our lounges",
          description: "Relax in lounges using your miles",
          href: "https://www.flynas.com/en/lounge-access",
          iconPosition: "-49px -134.5px",
        },
        {
          title: "nasmiles on mobile app",
          description: "Track and redeem miles from your phone",
          href: "https://www.flynas.com/en/nasmiles-on-app",
          iconPosition: "-289px -6px",
        },
      ],
    },
    {
      id: "programme",
      title: "Programme",
      description: "Explore membership levels and benefits",
      iconPosition: "-15px -38px",
      links: [
        {
          title: "About nasmiles",
          description: "Learn how the loyalty program works",
          href: "https://www.flynas.com/en/about-nasmiles",
          iconPosition: "-151px -8px",
        },
        {
          title: "Tiers and benefits",
          description: "Discover perks based on your tier",
          href: "https://www.flynas.com/en/tiers-and-benefits",
          iconPosition: "-321px -132px",
        },
        {
          title: "Join nasmiles",
          description: "Create an account to start earning",
          href: "https://booking.flynas.com/#/member/register",
          iconPosition: "-117px -9.5px",
        },
        {
          title: "flynas credit card",
          description: "Earn miles faster with our card",
          href: "https://www.flynas.com/en/arb-nasmiles-credit-card",
          iconPosition: "-117px -196px",
        },
        {
          title: "Partners",
          description: "Earn and spend with our partners",
          href: "https://www.flynas.com/en/nasmiles-partners",
          iconPosition: "-15px -228px",
        },
        {
          title: "FAQs",
          description: "Answers to your common questions",
          href: "https://www.flynas.com/en/nasmiles-faqs",
          iconPosition: "-321px -8px",
        },
        {
          title: "Terms and conditions",
          description: "Rules of the loyalty program",
          href: "https://www.flynas.com/en/nasmiles-terms-and-conditions",
          iconPosition: "-220px -130.5px",
        },
        {
          title: "Contact us",
          description: "Need help? Reach out anytime",
          href: "https://www.flynas.com/en/nasmiles-contact-us",
          iconPosition: "-83px -134px",
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
  { id: "nasholidays", label: "nasHolidays", href: "https://nasholidays.com/en" },
];
