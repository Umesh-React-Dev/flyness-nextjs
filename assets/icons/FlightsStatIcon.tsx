type FlightsStatIconProps = {
  className?: string;
};

export default function FlightsStatIcon({ className }: FlightsStatIconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 10h16M9 5V3.5M15 5V3.5M8 14h3M13 14h3M8 17h3M13 17h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
