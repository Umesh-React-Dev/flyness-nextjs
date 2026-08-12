type CloseIconProps = {
  className?: string;
};

export default function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}
