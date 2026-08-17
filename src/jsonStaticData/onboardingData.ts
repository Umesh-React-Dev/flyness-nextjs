export type LoginType = "member" | "corporate" | "agencies";

export type OnboardingFooterLink = {
  labelKey:
    | "footer.changeCookieSettings"
    | "footer.employeeLogin"
    | "footer.agenciesLogin"
    | "footer.corporateLogin"
    | "footer.agenciesRegister"
    | "footer.corporateAgenciesRegister"
    | "footer.bookFlight"
    | "footer.manageBooking"
    | "footer.webCheckIn";
  href: string;
};

export const ONBOARDING_FOOTER_LINKS: OnboardingFooterLink[] = [
  { labelKey: "footer.changeCookieSettings", href: "#" },
  { labelKey: "footer.employeeLogin", href: "#" },
  { labelKey: "footer.agenciesLogin", href: "/login" },
  { labelKey: "footer.corporateLogin", href: "/login" },
  { labelKey: "footer.agenciesRegister", href: "/signup/agencies" },
  { labelKey: "footer.corporateAgenciesRegister", href: "/signup/corporate" },
  { labelKey: "footer.bookFlight", href: "#" },
  { labelKey: "footer.manageBooking", href: "#" },
  { labelKey: "footer.webCheckIn", href: "#" },
];

export const LOGIN_TAB_IDS: LoginType[] = ["member", "corporate", "agencies"];

export const LOGIN_LINKS = {
  memberSignupHref: "/signup/member",
  corporateSignupHref: "/signup/corporate",
  agenciesSignupHref: "/signup/agencies",
  corporateSupportEmail: "corporate@flynas.com",
  agenciesSupportEmail: "gds@flynas.com",
};

export const SIGNUP_LINKS = {
  backHref: "/login",
  termsHref: "#",
  conditionsHref: "#",
};

export const SIGNUP_OPTION_VALUES = {
  titles: ["Mr", "Mrs", "Ms", "Miss", "Dr"],
  nationalities: [
    "Saudi Arabia",
    "United Arab Emirates",
    "Egypt",
    "India",
    "United Kingdom",
  ],
  documentTypes: ["Passport", "National ID", "Iqama"],
  countryCodes: [
    "Saudi Arabia(+966)",
    "United Arab Emirates(+971)",
    "Egypt(+20)",
    "India(+91)",
    "United Kingdom(+44)",
  ],
  currencies: ["Saudi Riyal", "US Dollar", "Euro", "UAE Dirham"],
  languages: ["English", "Russian"],
  destinations: ["Riyadh", "Jeddah", "Dubai", "Cairo"],
};
