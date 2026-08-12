type StatusIconProps = {
  className?: string;
};

export default function StatusIcon({ className }: StatusIconProps) {
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
