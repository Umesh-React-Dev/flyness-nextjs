type CheckInIconProps = {
  className?: string;
};

export default function CheckInIcon({ className }: CheckInIconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 17h4M16 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="9.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
