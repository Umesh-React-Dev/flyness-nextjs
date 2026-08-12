type BadgeCheckIconProps = {
  className?: string;
};

export default function BadgeCheckIcon({ className }: BadgeCheckIconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5 4.5 5.5v5.2c0 5.1 3.4 9.8 7.5 11.3 4.1-1.5 7.5-6.2 7.5-11.3V5.5L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
