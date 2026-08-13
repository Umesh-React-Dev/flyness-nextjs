export type LoginType = "member" | "corporate" | "agencies";

export type LoginTab = {
  id: LoginType;
  label: string;
};

export type OnboardingFooterLink = {
  label: string;
  href: string;
};

export const ONBOARDING_FOOTER_LINKS: OnboardingFooterLink[] = [
  { label: "Change cookie settings", href: "#" },
  { label: "Employee Login", href: "#" },
  { label: "Agencies Login", href: "/login" },
  { label: "Corporate Login", href: "/login" },
  { label: "Agencies Register", href: "/signup/agencies" },
  { label: "Corporate Agencies Register", href: "/signup/corporate" },
  { label: "Book a flight", href: "#" },
  { label: "Manage Booking", href: "#" },
  { label: "Web Check-in", href: "#" },
];

export const LOGIN_TABS: LoginTab[] = [
  { id: "member", label: "Member Login" },
  { id: "corporate", label: "Corporate Login" },
  { id: "agencies", label: "Agencies Login" },
];

export const LOGIN_FIELDS = {
  email: {
    label: "Email address",
    placeholder: "Email address",
  },
  userId: {
    label: "User ID",
    placeholder: "User ID",
  },
  password: {
    label: "Password",
    placeholder: "Password",
  },
};

export const LOGIN_COPY = {
  captchaLabel: "I'm not a robot",
  forgotPassword: "Forgot password",
  submit: "Log in",
  memberSignup: {
    prefix: "Don't have an account yet?",
    linkLabel: "Sign up",
    href: "/signup/member",
  },
  corporate: {
    supportPrefix: "for Corporate queries, mail-to",
    supportEmail: "corporate@flynas.com",
    signupLabel: "New corporate member? Sign up",
    signupHref: "/signup/corporate",
  },
  agencies: {
    supportPrefix: "For GDS support and queries, mail-to",
    supportEmail: "gds@flynas.com",
    signupLabel: "New Agent ? Sign up",
    signupHref: "/signup/agencies",
  },
};

export const SIGNUP_COMMON = {
  requiredNote: "This is required",
  uploadDocument: "Upload your Document",
  back: "Back",
  register: "Register",
  captchaLabel: "I'm not a robot",
  backHref: "/login",
};

export const SIGNUP_OPTIONS = {
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
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  currencies: ["Saudi Riyal", "US Dollar", "Euro", "UAE Dirham"],
  languages: ["English", "Arabic", "Russian"],
  destinations: ["Riyadh", "Jeddah", "Dubai", "Cairo"],
};

export const MEMBER_SIGNUP = {
  title: "New Member Registration",
  sections: {
    loginDetails: "Your login details",
    passengerDocument: "Passenger and Document details",
    contactDetails: "Contact details",
    newsletter: "Sign up to our newsletter",
  },
  fields: {
    userEmail: {
      label: "User Email",
      required: true,
      hint: "Please enter your valid email address as your username (e.g. name@gmail.com)",
    },
    password: {
      label: "Password",
      required: true,
      hint: "must be 8-20 characters",
    },
    confirmPassword: {
      label: "Confirm password",
      required: true,
      hint: "Please enter the same password",
    },
    title: { label: "Title", required: true, placeholder: "Title" },
    firstName: { label: "First name", required: true },
    lastName: { label: "Last name", required: true },
    dateOfBirth: {
      label: "Date of birth (Gregorian)",
      required: true,
      dayPlaceholder: "DD",
      monthPlaceholder: "MONTH",
      yearPlaceholder: "YYYY",
    },
    nationality: { label: "Nationality", required: true },
    documentType: {
      label: "Document type",
      required: true,
      placeholder: "Document type",
    },
    documentNumber: { label: "Document number", required: true },
    countryCode: { label: "Country code", required: true },
    mobile: {
      label: "Mobile",
      required: true,
      hint: "e.g. 920001234",
      placeholder: "555XXXXXX",
    },
    email: { label: "Email", required: true },
    language: { label: "Language", required: false },
    cityOfOrigin: { label: "City of Origin", required: false },
    preferredDestinations: {
      label: "Preferred destinations",
      required: false,
      placeholder: "Locations",
    },
  },
  newsletterOptIn: "Allow News letter notification",
  terms: {
    prefix: "By clicking Register, I confirm that I accept the",
    linkLabel: "Terms & Conditions",
    href: "#",
  },
};

export const CORPORATE_SIGNUP = {
  sections: {
    loginDetails: "Your login details",
    passengerDocument: "Passenger and Document details",
    contactDetails: "Contact details",
  },
  fields: {
    userEmail: {
      label: "User Email",
      required: true,
      hint: "Please enter your valid corporate email address as your username (e.g. lg@corporatedomain.com)",
    },
    password: {
      label: "Password",
      required: true,
      hint: "Your password can comprise letters, numbers or special characters",
    },
    confirmPassword: {
      label: "Confirm password",
      required: true,
      hint: "Your password can comprise letters, numbers or special characters",
    },
    title: { label: "Title", required: true, placeholder: "Title" },
    firstName: { label: "First name", required: true },
    lastName: { label: "Last name", required: true },
    dateOfBirth: {
      label: "Date of birth (Gregorian)",
      required: true,
      dayPlaceholder: "DD",
      monthPlaceholder: "MONTH",
      yearPlaceholder: "YYYY",
    },
    nationality: { label: "Nationality", required: true },
    documentType: {
      label: "Document type",
      required: true,
      placeholder: "Document type",
    },
    documentNumber: { label: "Document number", required: true },
    countryCode: { label: "Country code", required: true },
    mobile: {
      label: "Mobile",
      required: true,
      hint: "e.g. 920001234",
    },
    email: { label: "Email", required: true },
    confirmEmail: { label: "Confirm email", required: true },
  },
};

export const AGENCIES_SIGNUP = {
  title: "Agent Register",
  sections: {
    organizationDetails: "Organization Details",
    contactDetails: "Contact Details",
  },
  fields: {
    organizationCode: { label: "Organization Code", required: true },
    agentId: { label: "Agent ID", required: true },
    password: {
      label: "Password",
      required: true,
      hint: "Your password can comprise letters, numbers or special characters",
    },
    confirmPassword: {
      label: "Confirm password",
      required: true,
      hint: "Your password can comprise letters, numbers or special characters",
    },
    title: { label: "Title", required: true, placeholder: "Title" },
    firstName: { label: "First name", required: true },
    middleName: { label: "Middle name", required: false },
    lastName: { label: "Last name", required: true },
    currency: { label: "Currency", required: true },
    language: { label: "Language", required: true },
    email: { label: "Email", required: true },
    eveningPhone: { label: "Evening Phone", required: true },
    contactPhone: { label: "Contact Phone", required: true },
    mobilePhone: { label: "Mobile Phone", required: true },
    fax: { label: "Fax", required: true },
  },
  conditions: {
    prefix: "I have read and understood and accept the",
    linkLabel: "Conditions of carriage",
    href: "#",
  },
};
