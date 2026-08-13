type CarIconProps = {
  className?: string;
};

export default function CarIcon({ className }: CarIconProps) {
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
        d="M6.2 17a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zm11.6 0a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7zM5.1 14.4l1.15-4.05A1.4 1.4 0 0 1 7.6 9.3h8.8a1.4 1.4 0 0 1 1.35 1.05l1.15 4.05v3.4h-1.5v-1.35H6.6v1.35H5.1v-3.4zm2.1-3.75-.7 2.45h11l-.7-2.45H7.2z"
      />
    </svg>
  );
}
