export function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="20" fill="#E7E8D9" />
      <path d="M10 36c0-13 9-23 21-23 10 0 17 6 20 16 7-2 12 1 12 6 0 5-5 8-12 6-3 9-11 13-21 13H18c-5 0-8-3-8-8v-4Z" fill="#19483A" />
      <path d="M16 34c1-9 7-15 15-15 8 0 14 5 16 13M27 19v31M37 15l4 10" stroke="#C6AD72" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m29 34 4 4 8-9" stroke="#F5F3E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 49-3 5M49 49l3 5" stroke="#19483A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="56" cy="33" r="1.5" fill="#F5F3E9" />
    </svg>
  );
}
