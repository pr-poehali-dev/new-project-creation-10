import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Megaphone",
    title: "Наружная реклама",
    desc: "Печать баннеров, изготовление вывесок, печать на пленке.",
  },
  {
    icon: "Printer",
    title: "Полиграфия",
    desc: "Визитки, листовки, буклеты, сертификаты, блокноты, тетради для обучения мастеров.",
  },
  {
    icon: "PenTool",
    title: "Брендинг",
    desc: "Разработка логотипа и фирменного стиля.",
  },
  {
    icon: "Image",
    title: "Печать фото",
    desc: "Печать фотографий любых форматов, фото на холсте, фото в стиле «Полароид».",
  },
  {
    icon: "RectangleHorizontal",
    title: "Таблички и стенды",
    desc: "Офисные, адресные таблички, таблички режима работы, стенды для школ и организаций, магазинов.",
  },
  {
    icon: "Stamp",
    title: "Печати и штампы",
    desc: "Изготовление печатей и штампов для компаний и организаций.",
  },
];

const PORTFOLIO = [
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/44d8e45e-8f92-4bc0-9675-e29cd90675e8.jpg",
    title: "Листовки для студии йоги",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/559eeab5-b2f3-40dc-8547-66085bc58075.jpg",
    title: "Визитки для нумеролога",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/18196012-e83f-411d-9938-e77cd1ee3d02.jpg",
    title: "Визитки «Уютные подарки»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/84c55d45-9c01-4eca-94c0-481433d57f02.jpg",
    title: "Подарочный сертификат",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/85b42c10-6e9b-416d-899b-27c028d41713.jpg",
    title: "Визитка «Выкуп авто»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/2fbb8e26-f193-4ec7-a38d-c8fd25751880.jpg",
    title: "Табличка «Солдатское общежитие»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6f5efde4-3038-4ce6-b60d-16aba3a645a6.jpg",
    title: "Стенд для студии танца StarDance",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/4646d6aa-0acc-4838-b093-8d83f8be04ae.jpg",
    title: "Офисные таблички «Директор», «Дизайнер»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f61b06dd-c937-470f-9a5d-4e8c1e297b04.jpg",
    title: "Доска объявлений для УК «Этажи»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/19c9d1c8-7c7f-45d5-94aa-8699f171c27b.jpg",
    title: "Адресные таблички для подъездов",
    category: "Таблички и стенды",
  },
];

const STATS = [
  { value: "12+", label: "лет на рынке" },
  { value: "800+", label: "выполненных проектов" },
  { value: "350+", label: "клиентов" },
  { value: "24ч", label: "срочная печать" },
];

// Brand colors from logo
const RED = "#CC1B1B";
const YELLOW = "#F5D800";
const DARK = "#1a0a0a";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#111", color: "#f5f5f5", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(17,5,5,0.95)", backdropFilter: "blur(12px)", borderBottom: `2px solid ${RED}` }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <img
              src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e9a9afb2-b21b-485b-af37-9c13cb183df9.jpg"
              alt="АДИ — рекламная компания"
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: `2px solid ${YELLOW}` }}
            />
            <div className="leading-tight">
              <div className="text-xs font-medium" style={{ color: YELLOW, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}>РЕКЛАМНАЯ</div>
              <div className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", lineHeight: 1 }}>КОМПАНИЯ АДИ</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(245,245,245,0.7)", fontFamily: "'Golos Text', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,245,0.7)")}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105"
              style={{ background: RED, color: "#fff", border: `2px solid ${YELLOW}` }}
            >
              Получить предложение
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: "rgba(17,5,5,0.98)" }}>
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left py-2 text-sm font-medium border-b" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(245,245,245,0.8)" }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="mt-2 py-3 rounded font-semibold" style={{ background: RED, color: "#fff" }}>
              Получить предложение
            </button>
          </div>
        )}
      </header>

      {/* HERO — стиль обложки ВКонтакте */}
      <section id="home" className="relative flex items-center justify-center overflow-hidden" style={{ paddingTop: "64px", minHeight: "100vh", background: RED }}>

        {/* Фоновая текстура — лёгкая сетка */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />
        {/* Затемнение по краям */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">

          {/* Жёлтая рамка — как на обложке */}
          <div className="relative flex flex-col md:flex-row items-stretch gap-0 rounded-2xl overflow-hidden"
            style={{ border: `4px solid ${YELLOW}`, boxShadow: `0 0 0 2px ${RED}, 0 8px 48px rgba(0,0,0,0.5)` }}>

            {/* ЛЕВАЯ КОЛОНКА — услуги */}
            <div className="flex-1 flex flex-col justify-center px-6 py-8 md:py-12"
              style={{ background: "rgba(0,0,0,0.18)", borderRight: `2px solid ${YELLOW}` }}>
              <ul className="space-y-2">
                {[
                  "ВИЗИТКИ",
                  "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ",
                  "ПРИГЛАШЕНИЯ",
                  "ПЕЧАТЬ ФОТО",
                  "ПЕЧАТЬ БОЛЬШИХ ФОРМАТОВ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white"
                    style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(0.9rem, 1.7vw, 1.2rem)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    <span style={{ color: YELLOW, marginTop: "2px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ЦЕНТР — логотип */}
            <div className="flex flex-col items-center justify-center px-8 py-10 md:py-12 shrink-0"
              style={{ minWidth: "220px" }}>
              <img
                src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e9a9afb2-b21b-485b-af37-9c13cb183df9.jpg"
                alt="АДИ рекламная компания"
                className="rounded-full object-cover animate-float"
                style={{
                  width: "clamp(120px, 14vw, 180px)",
                  height: "clamp(120px, 14vw, 180px)",
                  border: `4px solid ${YELLOW}`,
                  boxShadow: `0 0 32px rgba(0,0,0,0.5)`
                }}
              />
              <div className="mt-5 text-center">
                <div style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(0.8rem, 1.4vw, 1rem)", fontWeight: 600, letterSpacing: "0.35em", color: YELLOW, whiteSpace: "nowrap", fontStretch: "expanded" }}>
                  РЕКЛАМНАЯ КОМПАНИЯ
                </div>
                <div className="font-black text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", lineHeight: 1, marginTop: "2px" }}>
                  АДИ
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА — услуги */}
            <div className="flex-1 flex flex-col justify-center px-6 py-8 md:py-12"
              style={{ background: "rgba(0,0,0,0.18)", borderLeft: `2px solid ${YELLOW}` }}>
              <ul className="space-y-2">
                {[
                  "ФОТО НА ХОЛСТЕ",
                  "АДРЕСНЫЕ ТАБЛИЧКИ",
                  "ОФИСНЫЕ ТАБЛИЧКИ",
                  "НАКЛЕЙКИ С ЛОГО",
                  "ПЕЧАТИ И ШТАМПЫ",
                  "СТЕНДЫ. БАННЕРЫ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white"
                    style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "clamp(0.9rem, 1.7vw, 1.2rem)", fontWeight: 600, letterSpacing: "0.04em" }}>
                    <span style={{ color: YELLOW, marginTop: "2px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Телефон + мессенджеры */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Иконки мессенджеров */}
            <div className="flex items-center gap-3">
              {/* Телефон (звонок) */}
              <a href="tel:+79619296728" title="Позвонить" className="transition-transform hover:scale-110">
                <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8e621597-1057-4cef-9ae9-8cf2c81d6ee9.png" alt="Позвонить" className="w-10 h-10 rounded-full" />
              </a>
              {/* Telegram */}
              <a href="tg://resolve?phone=79619296728" target="_blank" rel="noopener noreferrer" title="Telegram" className="transition-transform hover:scale-110">
                <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fbd819ac-1f3b-4edc-b2ee-e7946e53dacb.png" alt="Telegram" className="w-10 h-10 rounded-full" />
              </a>
              {/* Мax */}
              <a href="maxim://chat?phone=79619296728" target="_blank" rel="noopener noreferrer" title="Мax" className="transition-transform hover:scale-110">
                <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9bee6ad3-3371-4642-bae3-e540ec9015bd.png" alt="Мax" className="w-10 h-10 rounded-lg" />
              </a>
            </div>
            {/* Номер телефона */}
            <a href="tel:+79619296728" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.3)", border: `2px solid ${YELLOW}` }}>
                <Icon name="Phone" size={18} style={{ color: YELLOW }} />
              </div>
              <span className="font-black text-white tracking-wider" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)" }}>
                +7 961 929-67-28
              </span>
            </a>
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-3 rounded-lg font-bold text-base transition-all hover:scale-105"
              style={{ background: "#fff", color: RED, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
            >
              СМОТРЕТЬ РАБОТЫ
            </button>
            <button
              onClick={() => scrollTo("contacts")}
              className="px-8 py-3 rounded-lg font-bold text-base transition-all hover:scale-105"
              style={{ background: "transparent", color: "#fff", border: `2px solid #fff`, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
            >
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float" style={{ color: "rgba(255,255,255,0.4)" }}>
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "#161010" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Что мы делаем</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              НАШИ УСЛУГИ
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: RED }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="service-card rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(204,27,27,0.2)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `rgba(204,27,27,0.15)`, border: `1px solid rgba(204,27,27,0.3)` }}>
                  <Icon name={s.icon} size={24} style={{ color: RED }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.02em" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.6)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Наши работы</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              ПОРТФОЛИО
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: RED }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="portfolio-card rounded-2xl" style={{ border: "1px solid rgba(204,27,27,0.25)", aspectRatio: "4/5", position: "relative" }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover rounded-2xl" />
                <div className="overlay absolute inset-0 rounded-2xl flex flex-col justify-end p-5" style={{ background: "linear-gradient(to top, rgba(17,0,0,0.95) 0%, transparent 55%)" }}>
                  <span className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: YELLOW }}>{p.category}</span>
                  <h3 className="font-bold text-sm leading-snug" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollTo("contacts")}
              className="px-8 py-4 rounded font-semibold transition-all hover:scale-105"
              style={{ border: `2px solid ${RED}`, color: "#fff", background: "rgba(204,27,27,0.12)" }}
            >
              Обсудить ваш проект →
            </button>
          </div>
        </div>
      </section>

      {/* WHY US — red band */}
      <section className="py-20 px-6" style={{ background: RED }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: "Clock", title: "Срочная печать", desc: "Выполняем заказы от 24 часов без потери качества" },
            { icon: "Shield", title: "Гарантия качества", desc: "Проверка каждого заказа перед отгрузкой, работаем по договору" },
            { icon: "Headphones", title: "Персональный менеджер", desc: "Ведём ваш проект от замера до установки" },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,0,0,0.2)" }}>
                <Icon name={item.icon} size={24} style={{ color: YELLOW }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: "#161010" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Свяжитесь с нами</p>
            <h2 className="mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              ОБСУДИМ<br />ВАШ ПРОЕКТ
            </h2>
            <div className="mb-10 w-16 h-1 rounded" style={{ background: RED }} />

            <div className="space-y-6">
              {/* Телефон + мессенджеры */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(204,27,27,0.15)", border: "1px solid rgba(204,27,27,0.3)" }}>
                  <Icon name="Phone" size={20} style={{ color: RED }} />
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "rgba(245,245,245,0.4)" }}>Телефон</p>
                  <a href="tel:+79619296728" className="font-bold text-lg hover:underline" style={{ color: "#fff" }}>
                    +7 961 929-67-28
                  </a>
                  <div className="flex items-center gap-2 mt-2">
                    <a href="tel:+79619296728" title="Позвонить" className="transition-transform hover:scale-110">
                      <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8e621597-1057-4cef-9ae9-8cf2c81d6ee9.png" alt="Позвонить" className="w-9 h-9 rounded-full" />
                    </a>
                    <a href="tg://resolve?phone=79619296728" target="_blank" rel="noopener noreferrer" title="Telegram" className="transition-transform hover:scale-110">
                      <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fbd819ac-1f3b-4edc-b2ee-e7946e53dacb.png" alt="Telegram" className="w-9 h-9 rounded-full" />
                    </a>
                    <a href="maxim://chat?phone=79619296728" target="_blank" rel="noopener noreferrer" title="Мax" className="transition-transform hover:scale-110">
                      <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9bee6ad3-3371-4642-bae3-e540ec9015bd.png" alt="Мax" className="w-9 h-9 rounded-lg" />
                    </a>
                  </div>
                </div>
              </div>
              {[
                { icon: "Mail", label: "Email", value: "adi_056@mail.ru" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, д. 1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(204,27,27,0.15)", border: "1px solid rgba(204,27,27,0.3)" }}>
                    <Icon name={c.icon} size={20} style={{ color: RED }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "rgba(245,245,245,0.4)" }}>{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(204,27,27,0.25)` }}>
            <h3 className="font-bold text-xl mb-6" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}>
              Оставить заявку
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: "rgba(245,245,245,0.55)" }}>Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(204,27,27,0.3)", color: "#f5f5f5" }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "rgba(245,245,245,0.55)" }}>Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(204,27,27,0.3)", color: "#f5f5f5" }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: "rgba(245,245,245,0.55)" }}>Опишите задачу</label>
                <textarea
                  rows={4}
                  placeholder="Нужен баннер 3×6 метра..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(204,27,27,0.3)", color: "#f5f5f5" }}
                />
              </div>
              <button
                className="w-full py-4 rounded-lg font-semibold text-base transition-all hover:scale-[1.02]"
                style={{ background: RED, color: "#fff", border: `2px solid ${YELLOW}`, boxShadow: "0 4px 20px rgba(204,27,27,0.4)" }}
              >
                Отправить заявку
              </button>
              <p className="text-center text-xs" style={{ color: "rgba(245,245,245,0.35)" }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6" style={{ background: "#0d0808", borderTop: `2px solid ${RED}` }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e9a9afb2-b21b-485b-af37-9c13cb183df9.jpg"
              alt="АДИ"
              className="w-8 h-8 rounded-full object-cover"
              style={{ border: `1px solid ${YELLOW}` }}
            />
            <span className="font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
              РЕКЛАМНАЯ КОМПАНИЯ <span style={{ color: RED }}>АДИ</span>
            </span>
          </div>
          <p className="text-sm" style={{ color: "rgba(245,245,245,0.35)" }}>
            © 2024 Рекламная компания АДИ. Все права защищены.
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-xs transition-colors"
                style={{ color: "rgba(245,245,245,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.color = YELLOW)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,245,0.4)")}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}