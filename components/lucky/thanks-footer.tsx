import Image from 'next/image'
import { ArrowRight, Clover, Crown, Gamepad2, Play, Send } from 'lucide-react'
import { NAV, SolidClover, TwitchIcon } from './shared'

export function ThanksCta() {
  return (
    <section aria-label="Спасибо" className="relative overflow-hidden border-b border-bone/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 md:px-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative size-40 shrink-0 overflow-hidden">
            <Image src="/images/footer-clover.png" alt="Клевер вежливо складывает ладони" fill sizes="160px" className="object-cover" />
          </div>
          <p className="-rotate-6 text-center font-display text-6xl font-bold uppercase leading-[0.9] text-blood md:text-7xl sm:text-left">
            Спасибо,
            <br />
            <span className="pl-8">что ты здесь!</span>
          </p>
        </div>

        <p className="-rotate-12 text-center font-display text-3xl font-bold uppercase leading-7 text-bone">
          Лучшие
          <br />
          клеверы
          <br />
          только у нас!
        </p>

        <a
          href="https://www.twitch.tv/lucky_sam"
          target="_blank"
          rel="noreferrer"
          className="brush inline-flex items-center gap-3 px-8 py-4 font-display text-3xl font-bold uppercase text-bone transition-transform hover:-rotate-1"
        >
          <TwitchIcon className="size-7" />
          Смотреть стрим
          <ArrowRight className="size-6" />
        </a>
      </div>
      <Crown className="absolute left-6 top-4 size-8 text-bone/50" strokeWidth={1.3} aria-hidden="true" />
      <Clover className="absolute -bottom-8 -right-6 size-32 text-bone/15" strokeWidth={1} aria-hidden="true" />
    </section>
  )
}

const FOOTER_SOCIALS = [
  { label: 'Twitch', icon: TwitchIcon },
  { label: 'YouTube', icon: Play },
  { label: 'ВКонтакте', icon: Gamepad2 },
  { label: 'Telegram', icon: Send },
]

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 md:px-8 lg:flex-row lg:justify-between">
      <a href="#top" className="flex items-center gap-2">
        <SolidClover className="size-7 text-bone" />
        <span className="font-display text-2xl font-bold text-bone">LUCKY_SAM</span>
      </a>

      <nav aria-label="Навигация в подвале">
        <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm uppercase text-bone/60">
          {NAV.map((item, i) => (
            <li key={item.href} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true">|</span>}
              <a href={item.href} className="hover:text-bone">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="flex items-center gap-5">
        {FOOTER_SOCIALS.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href={label === 'Twitch' ? 'https://www.twitch.tv/lucky_sam' : '#socials'}
              target={label === 'Twitch' ? '_blank' : undefined}
              rel={label === 'Twitch' ? 'noreferrer' : undefined}
              className="text-bone/80 hover:text-blood"
            >
              <Icon className="size-5" />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm uppercase text-bone/50">{'© 2026 Lucky_Sam'}</p>
    </footer>
  )
}
