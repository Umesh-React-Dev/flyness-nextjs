import "./Footer.scss";

type FooterColumn = {
  title: string;
  links: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Flynas",
    links: [
      "Our Fleet",
      "Premium Class",
      "News & Updates",
      "Mobile App",
      "Partnerships",
      "Jobs",
    ],
  },
  {
    title: "Manage My Trip",
    links: [
      "Flight Status",
      "Online Check-in",
      "Upgrade to Premium",
      "Travel Insurance",
      "Book a hotel",
      "Our Offices",
    ],
  },
  {
    title: "Popular Flights",
    links: [
      "Flights to Dubai",
      "Flights to Kuwait",
      "Flights to Islamabad",
      "Flights to Tirana",
      "Flights to Cairo",
      "Flights to Amman",
    ],
  },
  {
    title: "Top Destinations",
    links: [
      "Flights to India",
      "Flights to Georgia",
      "Flights to Jordan",
      "Flights to Egypt",
      "Flights to Saudi Arabia",
      "Flights to United Arab Emirates",
    ],
  },
  {
    title: "Helpful Resources",
    links: [
      "FAQ's",
      "Special Services",
      "Visa Requirements To KSA",
      "Airports & Terminals",
      "Help & Support",
      "Integrated Management System Policy",
      "Blog",
    ],
  },
  {
    title: "Help & Support",
    links: [
      "Request refund",
      "Payment problem",
      "Feedback",
      "Track your Bag",
      "Check your voucher",
      "GACA",
      "Help",
      "Data Rights request",
    ],
  },
  {
    title: "Loyalty",
    links: [
      "About nasmiles",
      "Join nasmiles",
      "Tiers and benefits",
      "Claim missing nasmiles",
      "nasmiles partners",
    ],
  },
  {
    title: "Investor Relations",
    links: ["Investor Relations"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {footerColumns.map((column) => (
            <div key={column.title} className="column">
              <h3 className="columnTitle">{column.title}</h3>
              <ul className="linkList">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
