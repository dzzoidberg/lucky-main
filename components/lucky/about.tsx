import Image from 'next/image'
import { Clover, Crown, Heart } from 'lucide-react'
import { SectionBadge } from './shared'

const ROLES = ['Стример', 'Озвучкер', 'Просто хороший человек']

export function About() {
  return (
    <section id="about" className="relative border-b border-bone/10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative">
          <SectionBadge n="01" className="absolute -left-1 -top-4 z-10 -rotate-3" />
          <div className="paper torn relative -rotate-1 px-6 py-10 md:px-12 md:py-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="-rotate-3 font-display text-5xl font-bold uppercase leading-[0.9] md:text-6xl">
                  Кто тут
                  <br />
                  <span className="pl-10">такой?</span>
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-snug">
                  <p>
                    Меня зовут Lucky_Sam. Конунг Таверны "Белый Клевер", Диктор, актёр озвучания в интернете, Официальный дабер и голос проекта "КОМНАТА ДИДИ
                  </p>
                  <p>
                    На стримах мы играем, общаемся, угораем и создаём уютную атмосферу. Добро пожаловать в наш хаос!
                  </p>
                </div>
              </div>

              <div>
                <figure className="relative mx-auto w-44 rotate-3 bg-ink p-1.5 shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src="/images/card-artist.png" alt="Клевер у мольберта с портретом" fill sizes="176px" className="object-cover" />
                  </div>
                </figure>
                <ul className="mt-8 space-y-2.5">
                  {ROLES.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-lg uppercase">
                      <Clover className="size-5 shrink-0 fill-ink" aria-hidden="true" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="paper rotate-2 p-3 shadow-2xl">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/about-headphones.png"
                alt="Клевер в наушниках с микрофоном за столом при свече"
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="brush absolute -right-3 top-8 rotate-6 px-4 py-2 sm:-right-10">
            <p className="text-center font-display text-2xl font-bold uppercase leading-6 text-bone">
              Стрим
              <br />— это
              <br />
              просто
              <br />
              классно
            </p>
          </div>
          <Crown className="absolute -top-5 left-8 size-9 -rotate-12 text-yellow-300" strokeWidth={1.5} aria-hidden="true" />
          <Heart className="absolute -bottom-4 -right-2 size-8 rotate-12 text-bone/60" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
