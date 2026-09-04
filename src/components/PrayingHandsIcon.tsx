// Praying hands with cross icon — matches the provided reference image
export default function PrayingHandsIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Right hand (front) */}
      <path d="M32 8c0 0 2-1 4 0s3 3 3 5l0 10c1-1 3-2 4-1s2 2 1 4l-3 5" />
      {/* Right fingers */}
      <path d="M32 8l-0.5 3" />
      <path d="M36 7.5l0.5 3" />
      <path d="M39.5 9l0 3" />
      <path d="M42 12l-0.5 2.5" />

      {/* Left hand (back) */}
      <path d="M32 8c0 0-2-1-4 0s-3 3-3 5l0 10c-1-1-3-2-4-1s-2 2-1 4l3 5" />
      {/* Left fingers */}
      <path d="M28 7.5l-0.5 3" />
      <path d="M24.5 9l0 3" />
      <path d="M22 12l0.5 2.5" />

      {/* Palms together center line */}
      <path d="M32 8v24" />

      {/* Wrist cuffs */}
      <path d="M23 32l-4 12c-0.5 2 0 3 2 3.5l5 1" />
      <path d="M41 32l4 12c0.5 2 0 3-2 3.5l-5 1" />
      {/* Cuff bands */}
      <path d="M20 38h6" />
      <path d="M38 38h6" />

      {/* Cross at wrist */}
      <path d="M44 42v10" />
      <path d="M40.5 45.5h7" />
    </svg>
  );
}
