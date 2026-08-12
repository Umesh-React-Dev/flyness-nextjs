type HotelsIconProps = {
  className?: string;
};

export default function HotelsIcon({ className }: HotelsIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M4 19v-8.5A1.5 1.5 0 0 1 5.5 9H8V7.5A1.5 1.5 0 0 1 9.5 6h5A1.5 1.5 0 0 1 16 7.5V9h2.5A1.5 1.5 0 0 1 20 10.5V19h-1.75v-1.5H5.75V19H4zm3.5-4.25h2v-2h-2v2zm3.75 0h2v-2h-2v2zm3.75 0h2v-2h-2v2zM9.5 7.5V9h5V7.5h-5z"
      />
    </svg>
  );
}
