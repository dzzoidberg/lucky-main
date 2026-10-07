import Image from 'next/image'
import type { SVGProps } from 'react'
import { TwitchIcon } from './shared'

type IconProps = SVGProps<SVGSVGElement>

function ArrowRight(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
}

function Clover(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12c-2-2-5-1-5-4a3 3 0 0 1 5-2 3 3 0 0 1 5 2c0 3-3 2-5 4Zm0 0c-2 2-1 5-4 5a3 3 0 0 1-2-5 3 3 0 0 1 2-5m4 5c2 2 5 1 5 4a3 3 0 0 1-5 2 3 3 0 0 1-5-2m5-4c2-2 1-5 4-5m-4 5v8" /></svg>
}

function Crown(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 8 5 4 5-8 5 8 5-4-2 12H4L2 8Z" /><path d="M4 17h16" /></svg>
}

function Sparkle(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></svg>
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-bone/10">
      <Clover className="absolute bottom-16 left-6 hidden size-12 text-bone/40 md:block" strokeWidth={1.2} aria-hidden="true" />
      <Sparkle className="absolute left-1/3 top-10 size-5 text-bone/50" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:py-16">
        <div className="relative z-10">
          <h1 className="sr-only">Lucky_Sam — Конунг Таверны "Белый Клевер"</h1>
          <div className="brush inline-block -rotate-3 px-6 py-2 md:px-10" aria-hidden="true">
            <span className="block font-display text-7xl font-bold leading-none tracking-wide text-bone drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)] sm:text-8xl xl:text-9xl">
              LUCKY_SAM
            </span>
          </div>

          <p className="mt-6 -rotate-2 font-display text-4xl font-bold uppercase tracking-wider text-bone md:text-5xl">
          </p>
          <p className="mt-4 max-w-md -rotate-1 text-lg leading-relaxed text-bone/85 md:text-xl">
            Конунг Таверны "Белый Клевер", Диктор, актёр озвучания в интернете, Официальный дабер и голос проекта "КОМНАТА ДИДИ"
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.twitch.tv/lucky_sam"
              target="_blank"
              rel="noreferrer"
              className="brush inline-flex items-center gap-3 px-6 py-3 font-display text-2xl font-bold uppercase text-bone transition-transform hover:-rotate-1"
            >
              <TwitchIcon className="size-6" />
              Смотреть Twitch
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#about"
              className="sketch-border inline-flex items-center gap-3 px-6 py-3 font-display text-2xl font-bold uppercase text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Узнать больше
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="torn relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/hero-clover.png"
              alt="Клевер Lucky_Sam лениво сидит на сцене среди золотых монет рядом с новогодней ёлкой"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 top-6 w-28 rotate-[-8deg] bg-bone p-1.5 pb-5 shadow-2xl sm:-left-10 sm:w-40">
            <span className="tape absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/rainbow-photo.png" alt="Клевер в горшке с золотом под радугой" fill sizes="160px" className="object-cover" />
            </div>
          </div>

          <Crown className="absolute -top-6 left-1/2 size-10 rotate-12 text-yellow-300" strokeWidth={1.5} aria-hidden="true" />

          <div className="paper absolute -right-2 -top-6 rotate-[8deg] px-4 py-3 shadow-xl sm:-right-6">
            <p className="text-center font-display text-xl font-bold uppercase leading-5 md:text-2xl md:leading-6">
              Клевер
              <br />
              приносит
              <br />
              удачу
              <br />
              <span className="text-lg">(или нет)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
