type FlagSaProps = {
  className?: string;
};

export default function FlagSa({ className }: FlagSaProps) {
  return (
    <svg className={className} viewBox="0 0 60 30" width="22" height="14" aria-hidden="true">
      <rect width="60" height="30" fill="#006C35" />
      <text
        x="30"
        y="14"
        textAnchor="middle"
        fill="#fff"
        fontSize="7"
        fontFamily="Arial, sans-serif"
      >
        لا إله إلا الله
      </text>
      <path d="M18 20h24" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M40 18.5c2 0 3.2 1.2 3.2 2.8S42 24 40 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
      />
    </svg>
  );
}
