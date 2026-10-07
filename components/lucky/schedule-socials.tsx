import { Camera, Clover, Crown, Gamepad2, Mail, MessageCircle, Play, Send, UserRound, Users, Zap } from 'lucide-react'
import { SectionTitle } from './shared'

const SCHEDULE = [
  { day: 'ПН', time: '19:00', live: true },
  { day: 'ВТ', time: '—', live: false },
  { day: 'СР', time: '20:00', live: true },
  { day: 'ЧТ', time: '19:00', live: true },
  { day: 'ПТ', time: '—', live: false },
  { day: 'СБ', time: '19:00', live: true },
  { day: 'ВС', time: '—', live: false },
]

const SOCIALS_LEFT = [
  { label: 'Озвучка Видосов', icon: Play, href: 'https://www.youtube.com/channel/UCmUYUhQKNBLw-U9Sg1PK-Mg', external: true },
  { label: 'Игровые Видео', icon: Gamepad2, href: 'https://www.youtube.com/channel/UCuh01f5JDZMVo4Ostx7GC-w', external: true },
  { label: 'Яндекс.Дзен', icon: UserRound, href: 'https://dzen.ru/id/623093d9bde6fb0fd80b43ac?lang=ru&from_parent_id=0&parent_rid=2038857713.94.1659076108339.28806&from_parent_type=subscriptions_heads_item', external: true },
  { label: 'VK группа с озвучкой', icon: MessageCircle, href: 'https://vk.com/club203885771', external: true },
]

const SOCIALS_RIGHT = [
  { label: 'Бусти', icon: Zap, href: 'https://boosty.to/luckysam', external: true },
  { label: 'Я ВKонтакте', icon: UserRound, href: 'https://vk.com/sam_lucky', external: true },
  { label: 'Группа ВКонтакте', icon: Users, href: 'https://vk.com/club203885771', external: true },
  { label: 'Instagram', icon: Camera, href: 'https://www.instagram.com/etozheluckysam/', external: true },
  { label: 'Telegram', icon: Send, href: 'https://t.me/cherdak_lucky_sam', external: true },
]

function SocialLink({ label, icon: Icon, href = '#', external = false }: { label: string; icon: typeof Play; href?: string; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group flex items-center gap-3 border border-blood/70 bg-blood-dark/80 py-1.5 pl-1.5 pr-4 transition-colors hover:bg-blood"
      >
        <span className="flex size-8 shrink-0 items-center justify-center bg-ink/40">
          <Icon className="size-4 text-bone" aria-hidden="true" />
        </span>
        <span className="text-lg text-bone">{label}</span>
      </a>
    </li>
  )
}

export function ScheduleSocials() {
  return (
    <section className="border-b border-bone/10">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div id="schedule" className="relative px-4 py-14 md:px-8 lg:border-r lg:border-bone/10">
          <SectionTitle n="03">Расписание стримов</SectionTitle>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <div className="paper torn w-40 shrink-0 -rotate-6 px-4 py-6 shadow-xl">
              <p className="font-display text-3xl font-bold uppercase leading-7">Когда будем стримить?</p>
              <Clover className="ml-auto mt-2 size-8" strokeWidth={1.3} aria-hidden="true" />
            </div>

            <div className="sketch-border w-full max-w-xs bg-coal px-5 py-3">
              <table className="w-full text-left text-lg">
                <caption className="sr-only">Расписание стримов по дням недели</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">День</th>
                    <th scope="col">Время</th>
                    <th scope="col">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((row) => (
                    <tr key={row.day} className="border-b border-bone/10 last:border-0">
                      <th scope="row" className="py-1.5 font-normal text-bone">
                        {row.day}
                      </th>
                      <td className="py-1.5 text-bone/90">{row.time}</td>
                      <td className={`py-1.5 uppercase ${row.live ? 'font-bold text-lime' : 'text-bone/60'}`}>
                        {row.live ? 'Стрим' : 'Выходной'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="hidden shrink-0 -rotate-[20deg] xl:block" aria-hidden="true">
              <Crown className="mb-2 size-8 text-bone/70" strokeWidth={1.3} />
              <p className="font-display text-3xl font-bold uppercase leading-7 text-bone">
                Заходи,
                <br />
                будет
                <br />
                классно!
              </p>
            </div>
          </div>
        </div>

        <div id="socials" className="relative border-t border-bone/10 px-4 py-14 md:px-8 lg:border-t-0">
          <SectionTitle n="04">Соцсети</SectionTitle>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <ul className="space-y-3">
                {SOCIALS_LEFT.map((s) => (
                  <SocialLink key={s.label} {...s} />
                ))}
              </ul>
              <a href="mailto:lucky.luckysam@yandex.ru" className="mt-6 flex items-start gap-3 text-bone/90 hover:text-bone">
                <Mail className="mt-0.5 size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-base leading-snug">
                  Почта для деловых предложений:
                  <br />
                  <span className="underline decoration-blood underline-offset-4">lucky.luckysam@yandex.ru</span>
                </span>
              </a>
            </div>
            <ul className="space-y-3">
              {SOCIALS_RIGHT.map((s) => (
                <SocialLink key={s.label} {...s} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
