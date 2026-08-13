type RefreshIconProps = {
  className?: string;
};

export default function RefreshIcon({ className }: RefreshIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.9002 5L2.8002 3L0.700195 5M2.8002 3V9.66667C2.8002 10.0203 2.94769 10.3594 3.21025 10.6095C3.4728 10.8595 3.82889 11 4.2002 11H8.4002M10.5002 9L12.6002 11L14.7002 9M12.6002 11V4.33333C12.6002 3.97971 12.4527 3.64057 12.1901 3.39052C11.9276 3.14048 11.5715 3 11.2002 3H7.0002"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
