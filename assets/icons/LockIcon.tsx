type LockIconProps = {
  className?: string;
};

export default function LockIcon({ className }: LockIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="11"
        width="12"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 11V8a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
