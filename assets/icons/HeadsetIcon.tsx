type HeadsetIconProps = {
  className?: string;
};

export default function HeadsetIcon({ className }: HeadsetIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11a9 9 0 0 1 18 0v4a3 3 0 0 1-3 3h-2" />
      <path d="M3 15v-4a3 3 0 0 1 3-3h0" />
      <path d="M21 15v-4a3 3 0 0 0-3-3h0" />
      <rect x="3" y="11" width="4" height="6" rx="1" />
      <rect x="17" y="11" width="4" height="6" rx="1" />
    </svg>
  );
}
