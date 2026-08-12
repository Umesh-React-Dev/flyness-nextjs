type RefundIconProps = {
  className?: string;
};

export default function RefundIcon({ className }: RefundIconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 7.5v9M14.5 9.5c0-1-1-1.5-2.5-1.5s-2.5.5-2.5 1.5 1 1.3 2.5 1.5 2.5.5 2.5 1.5-1 1.5-2.5 1.5-2.5-.5-2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
