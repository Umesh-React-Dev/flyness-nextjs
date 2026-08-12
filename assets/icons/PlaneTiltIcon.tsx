type PlaneTiltIconProps = {
  className?: string;
};

export default function PlaneTiltIcon({ className }: PlaneTiltIconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.2 14.8 3.5 12.2l1.1-1.8 5.2 1.4L15.5 5l1.7 1.2-5.7 7.6 1.4 5.2-1.8 1.1-2.6-6.7-2.9 2.9-.9-.9 2.5-2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
