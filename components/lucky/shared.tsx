import { cn } from '@/lib/utils'

export const NAV = [
  { label: 'Главная', href: '#top' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Стримы', href: '#schedule' },
  { label: 'Контент', href: '#content' },
  { label: 'Соцсети', href: '#socials' },
]

export function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.3 2 3 5.4v13.8h4.7V22h2.6l2.8-2.8h3.8L22 14.1V2H4.3Zm15.9 11.2-3 3h-4.7l-2.8 2.8v-2.8H5.6V3.8h14.6v9.4ZM16.6 7v5.1h-1.8V7h1.8Zm-4.8 0v5.1H10V7h1.8Z" />
    </svg>
  )
}

export function SectionBadge({ n, className }: { n: string; className?: string }) {
  return (
    <span
      className={cn(
        'brush inline-flex h-9 min-w-11 items-center justify-center px-2 font-display text-2xl font-bold leading-none text-bone',
        className,
      )}
    >
      {n}
    </span>
  )
}

export function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <SectionBadge n={n} />
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-bone md:text-4xl">
        {children}
      </h2>
    </div>
  )
}

const LEAF = 'M12 12C9.2 9.4 5.6 6.2 7.6 3.6 9 1.9 11.3 2.6 12 4.4 12.7 2.6 15 1.9 16.4 3.6 18.4 6.2 14.8 9.4 12 12Z'

export function SolidClover({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {[0, 90, 180, 270].map((deg) => (
        <path key={deg} d={LEAF} transform={`rotate(${deg} 12 12)`} />
      ))}
      <path d="M12.5 12.5c2.5 2.5 3.5 5.5 3.2 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
