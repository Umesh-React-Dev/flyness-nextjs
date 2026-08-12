type LuggageIconProps = {
  className?: string;
};

export default function LuggageIcon({ className }: LuggageIconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="6" y="7" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <text x="12" y="15.5" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="700">
        KG
      </text>
    </svg>
  );
}
