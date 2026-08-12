type ChevronRightIconProps = {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
};

export default function ChevronRightIcon({
  className,
  width = 28,
  height = 28,
  strokeWidth = 2.4,
}: ChevronRightIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
