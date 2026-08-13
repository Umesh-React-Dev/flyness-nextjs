type EditIconProps = {
  className?: string;
};

export default function EditIcon({ className }: EditIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19h3.2L18.5 8.7a1.6 1.6 0 0 0 0-2.3L16.6 4.5a1.6 1.6 0 0 0-2.3 0L4 14.8V18a1 1 0 0 0 1 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5 16.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
