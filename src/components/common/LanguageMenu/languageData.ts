export type LanguageOption = {
  code: string;
  label: string;
  href: string;
};

export type CountryOption = {
  code: string;
  languages: LanguageOption[];
};

export type SelectedLocale = {
  countryCode: string;
  languageCode: string;
};

export const countries: CountryOption[] = [
  {
    code: "KSA",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
  {
    code: "EU",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
  {
    code: "RUS",
    languages: [{ code: "ru", label: "Russian", href: "#" }],
  },
  {
    code: "BAH",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
  {
    code: "UAE",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
  {
    code: "KWT",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
  {
    code: "SYR",
    languages: [{ code: "en", label: "English", href: "#" }],
  },
];

export function formatLocaleLabel(selection: SelectedLocale): string {
  const country = countries.find((item) => item.code === selection.countryCode);
  const language = country?.languages.find(
    (item) => item.code === selection.languageCode,
  );

  if (!country || !language) {
    return "KSA (English)";
  }

  return `${country.code} (${language.label})`;
}
