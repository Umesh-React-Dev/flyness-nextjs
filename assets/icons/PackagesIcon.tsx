type PackagesIconProps = {
  className?: string;
};

export default function PackagesIcon({ className }: PackagesIconProps) {
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
      <path
        d="M18.5 8.5 22 12l-2 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
