type SwapIconProps = {
  className?: string;
};

export default function SwapIcon({ className }: SwapIconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 6h10M11.5 3.5 14.5 6 11.5 8.5M14 12H4M6.5 9.5 3.5 12 6.5 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
