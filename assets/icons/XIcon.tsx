type XIconProps = {
  className?: string;
};

export default function XIcon({ className }: XIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.8 6H18.5l-4.2 4.8L19 18h-3.4l-2.7-3.5L9.4 18H7.7l4.5-5.1L7 6h3.5l2.4 3.2L16.8 6zm-1.2 10.8h.9L9.5 7.1h-1l7.1 9.7z"
      />
    </svg>
  );
}
