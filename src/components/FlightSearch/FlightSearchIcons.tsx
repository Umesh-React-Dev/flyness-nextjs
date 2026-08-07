type IconProps = {
  className?: string;
};

export function FlightsIcon({ className }: IconProps) {
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

export function PackagesIcon({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="11" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 11V9.5a2.5 2.5 0 0 1 5 0V11" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 14.5h5.5l2 3.5v5H16v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18.5 8.5 22 12l-2 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ManageIcon({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 5.5v3M14 5.5v3M5 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20.5" cy="18.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20.5 16.5v2.2l1.5 1.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckInIcon({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 17h4M16 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="9.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function StatusIcon({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M5 16.5 12.5 14.5 19 8a1.8 1.8 0 0 1 2.5 2.5l-6.5 6.5-1.8 7.5-2.6-4.8L5 16.5Z"
        fill="currentColor"
      />
      <circle cx="21" cy="20" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 18.2v2l1.4 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SwapIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 6h10M11.5 3.5 14.5 6 11.5 8.5M14 12H4M6.5 9.5 3.5 12 6.5 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
