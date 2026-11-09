import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('size-[26px] shrink-0', className)}
      role="img"
      aria-label="CASTANOTE"
      data-testid="castanote-logo"
    >
      <rect width="32" height="32" rx="9" fill="var(--fern-deep)" />
      <path
        d="M20.7 9.3A8.2 8.2 0 1 0 20.7 22.7"
        fill="none"
        stroke="#f5f1e6"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <circle cx="20" cy="16" r="2.3" fill="var(--gold)" />
    </svg>
  )
}
