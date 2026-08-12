type MinimizeIconProps = {
  className?: string;
};

export default function MinimizeIcon({ className }: MinimizeIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}
