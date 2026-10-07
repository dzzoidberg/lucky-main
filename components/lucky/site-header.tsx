'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV, SolidClover, TwitchIcon } from './shared'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Lucky_Sam — на главную">
          <SolidClover className="size-8 text-bone" />
          <span className="font-display text-3xl font-bold tracking-wide text-bone">LUCKY_SAM</span>
        </a>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={i === 0 ? 'page' : undefined}
                  className="relative font-display text-xl font-bold uppercase tracking-wider text-bone/80 transition-colors hover:text-bone aria-[current=page]:text-bone"
                >
                  {item.label}
                  {i === 0 && (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full -rotate-1 bg-blood" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.twitch.tv/lucky_sam"
            target="_blank"
            rel="noreferrer"
            className="brush hidden items-center gap-2 px-5 py-2 font-display text-xl font-bold uppercase text-bone transition-transform hover:-rotate-1 sm:inline-flex"
          >
            <span className="size-2 rounded-full bg-bone" aria-hidden="true" />
            Смотреть стрим
            <TwitchIcon className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="sketch-border p-2 text-bone lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Мобильная навигация" className="border-t border-bone/10 lg:hidden">
          <ul className="flex flex-col px-4 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-2xl font-bold uppercase text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="https://www.twitch.tv/lucky_sam"
                target="_blank"
                rel="noreferrer"
                className="brush inline-flex items-center gap-2 px-5 py-2 font-display text-xl font-bold uppercase text-bone"
              >
                Смотреть стрим <TwitchIcon className="size-5" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
