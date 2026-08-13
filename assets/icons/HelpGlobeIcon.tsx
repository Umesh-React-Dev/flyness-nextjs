type HelpGlobeIconProps = {
  className?: string;
};

export default function HelpGlobeIcon({ className }: HelpGlobeIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.33333 8C1.33333 11.6794 4.32057 14.6667 8 14.6667C11.6794 14.6667 14.6667 11.6794 14.6667 8C14.6667 4.32057 11.6794 1.33333 8 1.33333C4.32057 1.33333 1.33333 4.32057 1.33333 8V8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33333C4.44444 5.06667 4.44444 10.9333 8 14.6667C11.5556 10.9333 11.5556 5.06667 8 1.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33333 8H14.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
