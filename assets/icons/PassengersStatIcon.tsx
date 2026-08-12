type PassengersStatIconProps = {
  className?: string;
};

export default function PassengersStatIcon({ className }: PassengersStatIconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 18.5c.6-2.6 2.5-4 4.5-4s3.9 1.4 4.5 4M13.2 14.8c1.1-.5 2.4-.6 3.6.1 1.4.8 2.3 2.3 2.7 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
