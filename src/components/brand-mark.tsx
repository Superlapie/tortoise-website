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
      <rect width="64" height="64" rx="18" fill="#192B20" />
      <path d="M26 13c0-4 2.8-6.5 6-6.5s6 2.5 6 6.5v4H26v-4Z" fill="#F2EEE3" />
      <path d="M16 22.5c4.2-3.7 10-5.5 16-5.5s11.8 1.8 16 5.5c6.7 5.9 10 13.8 10 21.1 0 8.1-4.4 14.8-11.5 18.7H17.5C10.4 58.4 6 51.7 6 43.6c0-7.3 3.3-15.2 10-21.1Z" fill="#F2EEE3" />
      <path d="M32 19v39M10 34h44M17 23l15 11 15-11M17 56l15-11 15 11" stroke="#192B20" strokeWidth="2" />
      <path d="M8 33c-3.9 0-6 2.4-6 5.5S4.1 44 8 44h2M56 33c3.9 0 6 2.4 6 5.5S59.9 44 56 44h-2M19 58l-3 5m29-5 3 5" stroke="#F2EEE3" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 8h8" stroke="#D37450" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
