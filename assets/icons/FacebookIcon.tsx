type FacebookIconProps = {
  className?: string;
};

export default function FacebookIcon({ className }: FacebookIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.5 8.5H16V6h-1.7C12.1 6 11 7.2 11 9.3V11H9v2.5h2V18h2.5v-4.5H16l.5-2.5h-2.5V9.5c0-.6.2-1 1-1z"
      />
    </svg>
  );
}
