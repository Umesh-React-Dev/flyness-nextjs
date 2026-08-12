type AgentTitleIconProps = {
  className?: string;
};

export default function AgentTitleIcon({ className }: AgentTitleIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
      <path
        d="m8 12 2.4 2.4L16.5 8.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
