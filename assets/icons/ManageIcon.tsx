type ManageIconProps = {
  className?: string;
};

export default function ManageIcon({ className }: ManageIconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 5.5v3M14 5.5v3M5 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20.5" cy="18.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M20.5 16.5v2.2l1.5 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
