import Image from 'next/image'
import { SectionTitle } from './shared'

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function Crown({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m2 8 4 3 4-7 4 7 4-3-2 12H4L2 8Z" />
      <path d="M4 17h16" />
    </svg>
  )
}

const CARDS = [
  { title: 'Прямой эфир', text: 'Заходи на стрим на Twitch.', img: '/images/card-live.png', alt: 'Клевер ведёт прямой эфир перед камерой', href: 'https://www.twitch.tv/lucky_sam', external: true },
  { title: 'Донат', text: 'Обновление железа само себя не купит', img: '/images/rainbow-photo.png', alt: 'Клевер в горшке золота под радугой', href: 'https://www.donationalerts.com/r/Lucky_Sam', external: true },
  { title: 'Озвучка', text: 'Говорю всякое словами через рот', img: '/images/card-voice.png', alt: 'Клевер говорит в студийный микрофон', href: 'https://dzen.ru/id/623093d9bde6fb0fd80b43ac?lang=ru&from_parent_id=0&parent_rid=2038857713.94.1659076108339.28806&from_parent_type=subscriptions_heads_item', external: true },
  { title: 'Игровые видео', text: 'Прохождения, нарезки и всякое разное.', img: '/images/card-gaming.png', alt: 'Клевер играет за компьютером', href: 'https://www.youtube.com/channel/UCuh01f5JDZMVo4Ostx7GC-w', external: true },
  { title: 'BOOSTY', text: 'Будь крутаном.', img: '/images/card-memes.png', alt: 'Будь крутаном', href: 'https://boosty.to/luckysam', external: true },
]

export function ContentCards() {
  return (
    <section id="content" className="relative border-b border-bone/10">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex items-center justify-between">
          <SectionTitle n="02">Что у нас тут есть?</SectionTitle>
          <Crown className="hidden size-8 text-bone/60 sm:block" strokeWidth={1.5} aria-hidden="true" />
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((card, i) => (
            <li key={card.title}>
              <a
                href={card.href}
                {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`group sketch-border flex h-full flex-col bg-coal transition-transform hover:-translate-y-1 ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative -mt-7 px-3">
                  <h3 className="brush inline-block -rotate-2 px-4 py-1 font-display text-3xl font-bold uppercase text-bone">
                    {card.title}
                  </h3>
                </div>
                <div className="flex flex-1 items-end justify-between gap-3 px-4 pb-4 pt-3">
                  <p className="text-base leading-snug text-bone/85">{card.text}</p>
                  <ArrowRight className="size-5 shrink-0 text-bone transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
