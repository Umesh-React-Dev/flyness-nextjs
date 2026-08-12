type LinkedInIconProps = {
  className?: string;
};

export default function LinkedInIcon({ className }: LinkedInIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8.3 9.3H6V18h2.3V9.3zM7.1 6a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zM18 18h-2.3v-4.5c0-1.1-.4-1.8-1.4-1.8-.7 0-1.2.5-1.4 1-.1.2-.1.5-.1.8V18H10.5s0-7.4 0-8.7h2.3v1.2c.3-.5 1.1-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4.1V18z"
      />
    </svg>
  );
}
