type RoutesStatIconProps = {
  className?: string;
};

export default function RoutesStatIcon({ className }: RoutesStatIconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 12h15M12 4c2.2 2.4 3.3 4.9 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-4.9-3.3-8S9.8 6.4 12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
