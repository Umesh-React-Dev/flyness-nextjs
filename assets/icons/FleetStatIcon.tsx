type FleetStatIconProps = {
  className?: string;
};

export default function FleetStatIcon({ className }: FleetStatIconProps) {
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
        d="M3.5 12.5h6.2l2.1-5.4 1.4.6-1.3 3.4h3.6l2.4-2.8 1.3.7-1.7 2.1H21v1.6h-3.5l1.7 2.1-1.3.7-2.4-2.8h-3.6l1.3 3.4-1.4.6-2.1-5.4H3.5v-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
