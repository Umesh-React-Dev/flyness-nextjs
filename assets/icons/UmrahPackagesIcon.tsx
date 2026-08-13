type UmrahPackagesIconProps = {
  className?: string;
};

export default function UmrahPackagesIcon({ className }: UmrahPackagesIconProps) {
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
        d="M6.25 5.5h11.5v13H6.25v-13zm1.5 1.5v10h8.5v-10H7.75zm3.35 4.2h1.8v4.6h-1.8V11.2z"
      />
    </svg>
  );
}
