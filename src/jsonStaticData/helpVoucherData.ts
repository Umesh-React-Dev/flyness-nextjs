export const HELP_VOUCHER_HERO = {
  title: "flynas Travel Voucher",
  subtitle: "View your voucher details",
};

export const HELP_VOUCHER_BALANCE = {
  title: "Check your voucher balance",
  description:
    "Please enter your booking reference (PNR) and voucher reference to check your voucher.",
  submit: "Check Balance",
};

export const HELP_VOUCHER_FIELDS = {
  pnr: {
    label: "Booking Reference (PNR)",
    placeholder: "e.g. ABC123",
    hint: "6-character booking reference",
    maxLength: 6,
  },
  voucher: {
    label: "Voucher Reference",
    placeholder: "e.g. VCH-12345",
    hint: "The reference number on your voucher",
  },
};

export const HELP_VOUCHER_TERMS = {
  title: "Terms & Conditions",
  heading: "flynas Travel Voucher Terms & Conditions",
  items: [
    {
      id: "redeem-flynas-only",
      text: "flynas Travel Voucher can only be redeemed against the cost of flights operated by flynas, and vouchers cannot be redeemed for bookings that involve travel on flights operated by any other airlines.",
    },
    {
      id: "can-be-used",
      text: "flynas Travel Vouchers can be used:",
      bullets: [
        "For bookings made within 1 year of the date of voucher issuance",
        "To pay for flynas flight tickets, baggage, meals or other additional services on flynas.com and the flynas mobile application",
        "To pay taxes, fees and charges related to flynas flight tickets",
        "More than once until the voucher value is exhausted",
        "To partially pay for a booking. Any amount in excess will be collected using a separate payment method (e.g. credit or debit card)",
      ],
    },
    {
      id: "cannot-be-used",
      text: "flynas Travel Vouchers cannot be used:",
      bullets: [
        "Toward the purchase of air travel not offered and operated by flynas",
        "Through the flynas reservation offices at any airport location, including airport counters, travel agents or kiosks worldwide",
        "On board for flynas skymenu or duty-free purchases",
        "Towards the purchase of Group booking flights",
        "Toward the purchase of hotel bookings, car rentals and/or travel insurance",
        "When using Flex Pay as a payment method",
      ],
    },
    {
      id: "expiry",
      text: "flynas vouchers not used before the expiry date will be forfeited.",
    },
    {
      id: "currency",
      text: "When redeeming a flynas Travel Voucher in a different currency, the applicable rate of exchange applies at the date and time of redemption.",
    },
    {
      id: "lost-stolen",
      text: "flynas is not responsible for flynas Travel Vouchers that are stolen or lost and undeliverable due to inaccurate delivery information, including but not limited to an incorrect or nonexistent email address. To ensure that delivery information has been entered accurately, we recommend that the passenger carefully review all details provided at the time of the request.",
    },
    {
      id: "lost-email",
      text: "If your flynas Travel Voucher or confirmation email has been lost, please contact flynas customer service.",
    },
    {
      id: "modifications",
      text: "The flynas Travel Voucher holder acknowledges and agrees that flynas reserves the right to modify the applicable Terms and Conditions at any time. flynas will notify you (the holder of the flynas Travel Voucher) of any changes by posting an updated version of the Terms and Conditions on this page. It is the customer's responsibility to regularly review these Terms and Conditions.",
    },
    {
      id: "no-resale",
      text: "flynas travel vouchers cannot be sold. Unlawful sale or attempted resale is grounds for seizure and cancellation of the flynas Travel Voucher without compensation.",
    },
    {
      id: "refund-fee",
      text: "If the passenger no longer plans to use your voucher, a refund may be requested by contacting us via our website. Note that a refund fee will be applicable, and any additional (bonus) value that was added at the time of voucher issuance will be recovered.",
    },
    {
      id: "acceptance",
      text: "A passenger who is offered a voucher is at all times at liberty to accept or refuse the voucher. The acceptance of a voucher by the passenger shall be deemed as consent to and acceptance by the passenger of these terms and conditions.",
    },
    {
      id: "case-closed",
      text: "Once a voucher is accepted by a passenger, this case is considered closed and flynas will not respond to the passenger in case of a new complaint or request about the same issue. This is because vouchers are offered in response to a complaint or as compensation in the first place.",
    },
    {
      id: "declaration",
      text: "As a passenger of flynas, I hereby declare, accept and undertake irrevocably to take this Voucher of flynas instead of my cash compensation amount and also to fully comply with this Voucher's applicable Terms & Conditions.",
    },
  ],
};

export const HELP_VOUCHER_FAQS = [
  {
    id: "validity",
    question: "What is a travel voucher, and what is its validity period?",
    answer:
      "A travel voucher is a credit that can be used to purchase a ticket or extra options from the flynas website. Vouchers are valid for one year after their date of Issuance.",
  },
  {
    id: "extend",
    question: "Can I extend the validity of my voucher?",
    answer:
      "No. flynas Travel Vouchers cannot be extended. They must be used for bookings made within 1 year of the date of issuance. Unused vouchers are forfeited after the expiry date.",
  },
  {
    id: "how-to-use",
    question: "How do I use my flynas Travel Voucher?",
    answer:
      "You can use a flynas Travel Voucher to pay for flynas flight tickets, baggage, meals, or other additional services on flynas.com and the flynas mobile application. Enter your voucher reference at checkout. You can also use it to pay taxes, fees, and charges related to flynas flight tickets.",
  },
  {
    id: "other-airline",
    question: "Can I use my travel voucher for booking with another airline?",
    answer:
      "No. flynas Travel Vouchers can only be redeemed against flights operated by flynas and cannot be used for bookings that involve travel on any other airline.",
  },
  {
    id: "where-to-use",
    question: "Where can I use my flynas Travel Voucher?",
    answer:
      "You can use your voucher on flynas.com and the flynas mobile application. Vouchers cannot be used at airport reservation offices, counters, travel agents, kiosks, or on board for skymenu or duty-free purchases.",
  },
  {
    id: "multiple-transactions",
    question: "Can I use the same voucher for multiple transactions?",
    answer:
      "Yes. A flynas Travel Voucher can be used more than once until the voucher value is exhausted.",
  },
  {
    id: "cheaper-flight",
    question:
      "What happens if I book a flight that's cheaper than the value of my Travel Voucher?",
    answer:
      "The remaining voucher value stays available for future eligible bookings until it is exhausted or expires. If the booking costs more than the voucher value, the difference will be collected using a separate payment method.",
  },
  {
    id: "refundable",
    question: "Is my travel voucher refundable?",
    answer:
      "If you no longer plan to use your voucher, a refund may be requested by contacting us via our website. A refund fee will be applicable, and any additional (bonus) value added at issuance will be recovered.",
  },
  {
    id: "check-balance",
    question: "How can I check my travel voucher balance or expiration date?",
    answer:
      "Enter your booking reference (PNR) and voucher reference in the form above, then select Check Balance to view your voucher details.",
  },
  {
    id: "multiple-vouchers",
    question: "Can I use multiple vouchers on the same reservation?",
    answer:
      "You can use a voucher to partially pay for a booking and pay any remaining amount with another payment method. For help applying more than one voucher to the same reservation, please contact flynas customer service.",
  },
  {
    id: "who-can-use",
    question: "Who can use my voucher?",
    answer:
      "The voucher holder can use a flynas Travel Voucher for eligible flynas bookings. Vouchers cannot be sold; unlawful sale or attempted resale can result in seizure and cancellation without compensation.",
  },
];
