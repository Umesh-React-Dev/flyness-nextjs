type FlightsIconProps = {
  className?: string;
};

export default function FlightsIcon({ className }: FlightsIconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M3.5 15.5 12 13.5l7.5-8.5a2.2 2.2 0 0 1 3.1 3.1L14.5 15.5 12.5 24l-3-5.5L3.5 15.5Z"
        fill="currentColor"
      />
      <path d="M3.5 15.5 9.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
