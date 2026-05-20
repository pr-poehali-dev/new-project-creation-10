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
    desc: "Билборды, баннеры, вывески и световые короба. Максимальный охват аудитории.",
  },
  {
    icon: "Printer",
    title: "Полиграфия",
    desc: "Визитки, листовки, буклеты, каталоги. Офсетная и цифровая печать.",
  },
  {
    icon: "PenTool",
    title: "Брендинг",
    desc: "Разработка логотипа, фирменного стиля и корпоративной идентики.",
  },
  {
    icon: "Layout",
    title: "Дизайн рекламы",
    desc: "Креативные макеты для любых носителей: digital и print.",
  },
  {
    icon: "Truck",
    title: "Транспортная реклама",
    desc: "Брендирование транспорта, оклейка автопарков и общественного транспорта.",
  },
  {
    icon: "Gift",
    title: "Сувенирная продукция",
    desc: "Корпоративные подарки с нанесением логотипа и фирменной символики.",
  },
];

const PORTFOLIO = [
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/files/261c326e-7579-4352-b5e5-f6a308d22aac.jpg",
    title: "Рекламная кампания «Горизонт»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/files/e3469d82-dd18-4654-9480-6fd81549d1de.jpg",
    title: "Фирменный стиль Premium Auto",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/files/a2670367-7a77-4e2e-bed1-4d942aaf504f.jpg",
    title: "Полиграфия для выставки",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/files/99a2480f-9178-40c5-88ec-9694eec65665.jpg",
    title: "Производство POS-материалов",
    category: "Печать",
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

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
        {/* Background */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #1a0505 0%, #1a0a0a 40%, #0d0d0d 100%)` }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(204,27,27,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(204,27,27,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />
        {/* Red glow left */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 -translate-x-1/2" style={{ background: `radial-gradient(circle, rgba(204,27,27,0.2) 0%, transparent 70%)` }} />
        {/* Yellow glow right */}
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full translate-x-1/3" style={{ background: `radial-gradient(circle, rgba(245,216,0,0.1) 0%, transparent 70%)` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-medium" style={{ background: "rgba(204,27,27,0.2)", color: YELLOW, border: `1px solid rgba(204,27,27,0.4)` }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: YELLOW }} />
              Принимаем заказы — срочная печать от 24 часов
            </div>

            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "0.01em" }}>
              РЕКЛАМА,<br />
              <span style={{ color: RED }}>КОТОРАЯ</span><br />
              <span style={{ color: YELLOW }}>РАБОТАЕТ</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: "rgba(245,245,245,0.65)", maxWidth: "480px" }}>
              Полный цикл рекламного производства — от концепции до монтажа. Наружная реклама, полиграфия, брендинг и дизайн.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => scrollTo("portfolio")}
                className="px-8 py-4 rounded font-semibold text-base transition-all hover:scale-105"
                style={{ background: RED, color: "#fff", border: `2px solid ${YELLOW}`, boxShadow: "0 4px 24px rgba(204,27,27,0.4)" }}
              >
                Смотреть работы
              </button>
              <button
                onClick={() => scrollTo("contacts")}
                className="px-8 py-4 rounded font-semibold text-base transition-all hover:scale-105"
                style={{ border: `2px solid rgba(245,245,245,0.2)`, color: "#f5f5f5", background: "transparent" }}
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          {/* Logo + Stats */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e9a9afb2-b21b-485b-af37-9c13cb183df9.jpg"
              alt="АДИ рекламная компания"
              className="w-52 h-52 rounded-full object-cover animate-float"
              style={{ border: `4px solid ${YELLOW}`, boxShadow: `0 0 40px rgba(204,27,27,0.5), 0 0 80px rgba(204,27,27,0.2)` }}
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-xl p-5 flex flex-col" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(204,27,27,0.3)` }}>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.2rem", fontWeight: 700, color: YELLOW, lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span className="mt-1 text-sm" style={{ color: "rgba(245,245,245,0.55)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <Icon name="ChevronDown" size={20} />
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@adi-reklama.ru" },
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
