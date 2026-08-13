type TikTokIconProps = {
  className?: string;
};

export default function TikTokIcon({ className }: TikTokIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.8 6.2c.7.7 1.6 1.2 2.6 1.4V9c-1.1 0-2.1-.3-3-1v5.4c0 2.7-2.2 4.9-4.9 4.9S6.6 16.1 6.6 13.4 8.8 8.5 11.5 8.5c.3 0 .5 0 .8.1v2.1c-.2-.1-.5-.1-.8-.1-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8V6.2h2.5z"
      />
    </svg>
  );
}
