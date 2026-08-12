type YouTubeIconProps = {
  className?: string;
};

export default function YouTubeIcon({ className }: YouTubeIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.6 8.2c-.2-.8-.8-1.4-1.6-1.6C16.6 6.3 12 6.3 12 6.3s-4.6 0-6 .3c-.8.2-1.4.8-1.6 1.6C4.1 9.6 4.1 12 4.1 12s0 2.4.3 3.8c.2.8.8 1.4 1.6 1.6 1.4.3 6 .3 6 .3s4.6 0 6-.3c.8-.2 1.4-.8 1.6-1.6.3-1.4.3-3.8.3-3.8s0-2.4-.3-3.8zM10.5 14.7V9.3L14.8 12l-4.3 2.7z"
      />
    </svg>
  );
}
