type ChevronUpIconProps = {
  className?: string;
};

export default function ChevronUpIcon({ className }: ChevronUpIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.5 14.5 12 9l5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
