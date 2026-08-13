type FlagRuProps = {
  className?: string;
};

export default function FlagRu({ className }: FlagRuProps) {
  return (
    <svg className={className} viewBox="0 0 60 30" width="22" height="14" aria-hidden="true">
      <rect width="60" height="10" y="0" fill="#fff" />
      <rect width="60" height="10" y="10" fill="#0039A6" />
      <rect width="60" height="10" y="20" fill="#D52B1E" />
    </svg>
  );
}
