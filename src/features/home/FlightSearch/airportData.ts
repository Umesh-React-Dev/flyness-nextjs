export type Airport = {
  code: string;
  city: string;
  country: string;
  airportName: string;
};

export const AIRPORTS: Airport[] = [
  {
    code: "AHB",
    city: "Abha",
    country: "Saudi Arabia",
    airportName: "Abha Airport",
  },
  {
    code: "ABJ",
    city: "Abidjan",
    country: "Cote D'Ivoire",
    airportName: "Felix Houphouet Boigny international Airport",
  },
  {
    code: "AUH",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    airportName: "Abu Dhabi International Airport",
  },
  {
    code: "ADD",
    city: "Addis Ababa",
    country: "Ethiopia",
    airportName: "Bole International Airport",
  },
  {
    code: "ABT",
    city: "Al Baha",
    country: "Saudi Arabia",
    airportName: "King Saud Bin Abdulaziz Al Baha Airport",
  },
  {
    code: "AJF",
    city: "Al Jouf",
    country: "Saudi Arabia",
    airportName: "Al-Jouf Airport",
  },
  {
    code: "DMM",
    city: "Dammam",
    country: "Saudi Arabia",
    airportName: "King Fahd International Airport",
  },
  {
    code: "JED",
    city: "Jeddah",
    country: "Saudi Arabia",
    airportName: "King Abdulaziz International Airport",
  },
  {
    code: "MED",
    city: "Madinah",
    country: "Saudi Arabia",
    airportName: "Prince Mohammad Bin Abdulaziz Airport",
  },
  {
    code: "RUH",
    city: "Riyadh",
    country: "Saudi Arabia",
    airportName: "King Khalid International Airport",
  },
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    airportName: "Dubai International Airport",
  },
  {
    code: "CAI",
    city: "Cairo",
    country: "Egypt",
    airportName: "Cairo International Airport",
  },
  {
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    airportName: "Istanbul Airport",
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    airportName: "Heathrow Airport",
  },
];

export function formatAirportLabel(airport: Airport) {
  return `${airport.city} (${airport.code})`;
}

export function filterAirports(query: string, airports: Airport[] = AIRPORTS) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return airports;

  return airports.filter((airport) => {
    const haystack = [
      airport.city,
      airport.country,
      airport.airportName,
      airport.code,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}
