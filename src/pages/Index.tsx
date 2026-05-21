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
    desc: "Печать фотографий любых форматов и размеров. Фото в стиле «Полароид». Печать на холсте — превратите любимый снимок в картину для дома или в подарок. Акриловые фотомагниты с вашим фото — стильный и оригинальный сувенир на память.",
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
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/92964724-7eba-4f4e-b5fc-8bc32c1ab9e6.jpg",
    title: "Печать фото в стиле «Полароид»",
    category: "Печать фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6ae54f1b-d362-4c75-913f-491a387a2bc3.jpg",
    title: "Фото на холсте — портрет",
    category: "Печать фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/26078d71-7b57-4469-ab34-a0b4f5b8dbc7.jpg",
    title: "Фото на холсте — свадебный портрет",
    category: "Печать фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/19c7fc2a-c229-45ae-95e6-555010a3638a.jpg",
    title: "Оклейка окон и рекламная растяжка-баннер",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/4e560653-fe5f-479b-989b-5a4befce32ad.jpg",
    title: "Псевдообъёмные буквы «Союз застройщиков»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/28fcca04-761f-4bf0-8086-d102eb778d90.jpg",
    title: "Вывеска «Буль-Буль»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/5330e039-b57e-41f3-bd2b-4ac6134bea3d.jpg",
    title: "Баннер «Устранение засоров»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6a73573b-35bc-40a3-be3e-ef372deadcce.jpg",
    title: "Вывеска «Универсальный магазин»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6a61c700-3cd4-46e8-9fef-6d953d7ae4d8.jpg",
    title: "Баннер «Продажа участка»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f3689a02-b8e4-466f-8a2b-cb55d3f25dd4.jpg",
    title: "Баннеры «Продажа домов»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/02e403bc-2681-4914-a468-23b5cfb0260f.jpg",
    title: "Адресная табличка «3-я Парковая»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f4491c18-b9b8-42e4-8297-8aaaa688881f.jpg",
    title: "Адресная табличка «Коммунальная»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/340f849a-5d41-4f42-aad6-1c9810412639.jpg",
    title: "Адресная табличка «Школьная»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/25a70026-c358-4519-b8dc-26c876776e30.jpg",
    title: "Адресная табличка «пл. Элеватора»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6ce187e9-87e6-45ce-a89d-a2d80db26f74.jpg",
    title: "Адресная табличка «А. Ландо»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7fd7f6a8-2a2f-4202-a90a-7e92f2defee3.jpg",
    title: "Адресная табличка «Камская 64»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b28774cd-48e9-4074-83f3-254233194449.jpg",
    title: "Адресная табличка «Крымская 13»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/29d57842-ca3b-41a7-9f5c-ecf6d5f392e5.jpg",
    title: "Адресная табличка «Тихая 353»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/91513d14-e29e-4f2b-8948-d30b3f758a43.jpg",
    title: "Адресная табличка «Вишнёвая 27»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/06ea320e-4862-4ca2-bd7b-2fd1b12a2603.jpg",
    title: "Наклейки с логотипом АДИ",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9894e474-399d-4117-991a-e2b7968580f3.jpg",
    title: "Наклейки «Отопление»",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/cc48c477-d2e9-4596-9e49-e031940d25d9.jpg",
    title: "Наклейки Mira Handmade56",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/cc1298b2-b149-4f26-a3a0-6c08ec897469.jpg",
    title: "Наклейки «Замена стеклопакетов 56»",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e54ca058-cd24-459b-b3dc-3b66ace74dcd.jpg",
    title: "Наклейки Enjoy",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f6422bd7-662c-4b0d-ba91-088c94f910e5.jpg",
    title: "Вывеска «Айсберг — соляная пещера»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/3e55923d-254d-4f02-a598-0c27a06d0e5d.jpg",
    title: "Оклейка витрин магазина кухонь",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/23c39606-5452-4e0e-82a6-faf59fdce36e.jpg",
    title: "Оклейка витрин кафе",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/23b386d2-b975-4748-856e-80d52d326fb4.jpg",
    title: "Баннер «Буль-Буль» сеть центров плавания",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/da2d978a-9816-449a-982d-28d48cdda666.jpg",
    title: "Баннер «Айсберг — островок здоровья»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/bef8e844-6ea5-44ab-abbc-d337b02d81dd.jpg",
    title: "Оклейка двери «Телефонная будка» English People",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d9dd3187-cd7c-4837-a674-9b577fdee041.jpg",
    title: "Наклейка на дверь «English People»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b738725b-fccc-4e1c-af33-bf7897ae72a3.jpg",
    title: "Брендирование стойки ресепшн «English People»",
    category: "Наружная реклама",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f8545c41-bed2-4c6e-bf49-c6cd13f3e8d5.jpg",
    title: "Штамп «Вкусная ТЕМА»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d5b03d3a-4d35-4d47-b90b-1f99f2ab4a48.jpg",
    title: "Автоматический штамп «Ремонт квартир»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/3880aa1e-d4ad-41e9-a6c0-8246a110f316.jpg",
    title: "Штамп «Le Coin Parfume»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/439e33c9-c45b-44fa-abf1-236ede8de2dc.jpg",
    title: "Деревянный штамп «11.11stoore»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/91ab86f8-684f-49ff-8748-3cbeb65592ad.jpg",
    title: "Круглая печать ИП «Опачки»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/dc89ab76-7091-443b-9e3c-c0b97c022df0.jpg",
    title: "Печать фото на холсте",
    category: "Печать фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/34c17b8c-8d68-47a2-9428-b8ae37667c77.jpg",
    title: "Акриловые фотомагниты",
    category: "Фотомагниты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/66a5509c-e211-4d91-83fd-a3cd7749b08f.jpg",
    title: "Адресная табличка «Заречная»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8b73462f-cc32-4b59-8163-4c5eac593ca3.jpg",
    title: "Адресная табличка «Воровского»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/bc96ec47-8687-4f94-8847-346bae47c0f4.jpg",
    title: "Адресная табличка «Апрельская» с птицами",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/86386123-4769-4f8f-b8db-776188506a4d.jpg",
    title: "Адресная табличка «Пражская» с котом",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/200294f9-ba1a-497f-99cb-12f5d90c7ae1.jpg",
    title: "Адресная табличка «Волжская» с овчаркой",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8be5a1d0-c3f1-409a-aa11-66c0db1244da.jpg",
    title: "Купон на скидку для шоурума «Chic Fashion»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f1678ae7-761f-4516-aa72-dbbad81764e7.jpg",
    title: "Листовка и визитки «Уютные подарки»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/50c35311-2701-46e5-9381-c16b27da978d.jpg",
    title: "Визитки и карта клиента для brow-мастера",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/1edd097d-b49b-4453-a06f-45f14eaf51c1.jpg",
    title: "Визитки-ярлыки «Мирельдекор»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f7d20b8f-5c44-4ff6-9905-4ce1527fd5fa.jpg",
    title: "Чёрные визитки с золотом «Оренметры»",
    category: "Полиграфия",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/1edc592a-0b28-4840-9243-021aafe668d9.jpg",
    title: "Табличка «Массажный кабинет» тёмная",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/5f1027a2-b30a-4339-9f6d-754e24149b6c.jpg",
    title: "Табличка «Массажный кабинет» бордовая",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6cec990e-09d7-429d-8cfc-2f884124f83c.jpg",
    title: "Вывеска «Мясо & Рыба»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/5d6ed765-cce1-40f5-9558-2c66a4885039.jpg",
    title: "Таблички «Развивашка» и «PerezagruzkA»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/61bf28ee-145b-4c0b-963c-914f1568212b.jpg",
    title: "Табличка режима работы DG",
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
  const [activeCategory, setActiveCategory] = useState("Все");

  const categories = ["Все", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];
  const filteredPortfolio = activeCategory === "Все" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeCategory);

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
              Оформить заказ
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
              Оформить заказ
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
                <div className="font-black text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3.5rem, 7vw, 5.5rem)", lineHeight: 1, marginTop: "2px", letterSpacing: "0.15em" }}>
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
            <div className="relative group">
              <button
                className="px-8 py-3 rounded-lg font-bold text-base transition-all hover:scale-105 flex items-center gap-2"
                style={{ background: "transparent", color: "#fff", border: `2px solid #fff`, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
              >
                ОФОРМИТЬ ЗАКАЗ
                <Icon name="ChevronDown" size={16} />
              </button>
              <div className="absolute left-0 bottom-full mb-2 w-full rounded-lg overflow-hidden shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50"
                style={{ background: "#1a0a0a", border: `1px solid rgba(255,255,255,0.2)` }}>
                <a
                  href="https://t.me/+79619296728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 font-semibold text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#fff", textDecoration: "none", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                >
                  <span>✈️</span> TELEGRAM
                </a>
                <a
                  href="maxim://chat?phone=79619296728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 font-semibold text-sm hover:opacity-80 transition-opacity border-t"
                  style={{ color: "#fff", textDecoration: "none", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <span>💬</span> МАКС
                </a>
              </div>
            </div>
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
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Наши работы</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              ПОРТФОЛИО
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: RED }} />
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.05em",
                  background: activeCategory === cat ? RED : "transparent",
                  color: activeCategory === cat ? "#fff" : "rgba(255,255,255,0.6)",
                  border: `2px solid ${activeCategory === cat ? RED : "rgba(255,255,255,0.2)"}`,
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPortfolio.map((p, i) => (
              <div key={i} className="portfolio-card rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(204,27,27,0.25)" }}>
                <div className="w-full bg-black flex items-center justify-center" style={{ minHeight: "200px" }}>
                  <img src={p.img} alt={p.title} className="w-full h-auto object-contain rounded-t-2xl" style={{ maxHeight: "280px" }} />
                </div>
                <div className="p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
                  <span className="text-xs font-medium uppercase tracking-wider mb-1 block" style={{ color: YELLOW }}>{p.category}</span>
                  <h3 className="font-bold text-sm leading-snug" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>


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
            <div className="mb-6 w-16 h-1 rounded" style={{ background: RED }} />

            {/* Онлайн-работа */}
            <div className="flex gap-3 mb-8 p-4 rounded-xl" style={{ background: "rgba(245,216,0,0.08)", border: `1px solid rgba(245,216,0,0.25)` }}>
              <Icon name="Wifi" size={20} style={{ color: YELLOW, flexShrink: 0, marginTop: "2px" }} />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.8)" }}>
                <span className="font-bold" style={{ color: YELLOW }}>Работаем онлайн.</span> Все заказы принимаются дистанционно — по телефону или в мессенджерах. Готовые заказы выдаются по адресу в указанные часы. Офис не предназначен для визита клиентов.
              </p>
            </div>

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
              {/* ВКонтакте */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(204,27,27,0.15)", border: "1px solid rgba(204,27,27,0.3)" }}>
                  <Icon name="Users" size={20} style={{ color: RED }} />
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "rgba(245,245,245,0.4)" }}>ВКонтакте</p>
                  <a href="https://vk.ru/adi56ru" target="_blank" rel="noopener noreferrer"
                    className="font-semibold transition-colors hover:underline"
                    style={{ color: "#5b9bd5" }}>
                    vk.ru/adi56ru
                  </a>
                </div>
              </div>
              {[
                { icon: "Mail", label: "Email", value: "adi_056@mail.ru" },
                { icon: "MapPin", label: "Адрес", value: "г. Оренбург, ул. Гаранькина, 27" },
                { icon: "Clock", label: "Приём заявок", value: "Пн–Сб: 10:00–22:00" },
                { icon: "Clock", label: "Выдача заказов", value: "Пн–Пт: 11:00–19:00" },
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

          {/* CTA — мессенджеры */}
          <div className="rounded-2xl p-8 flex flex-col justify-center" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(204,27,27,0.25)` }}>
            <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}>
              ОСТАВИТЬ ЗАЯВКУ
            </h3>
            <p className="text-sm mb-8" style={{ color: "rgba(245,245,245,0.55)" }}>
              Напишите нам в удобный мессенджер — ответим быстро и рассчитаем стоимость
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tg://resolve?phone=79619296728"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02]"
                style={{ background: "#29abe2", color: "#fff", boxShadow: "0 4px 20px rgba(41,171,226,0.3)" }}
              >
                <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fbd819ac-1f3b-4edc-b2ee-e7946e53dacb.png" alt="Telegram" className="w-7 h-7 rounded-full" />
                Написать в Telegram
              </a>
              <a
                href="maxim://chat?phone=79619296728"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #4f6ef7, #9b59f5)", color: "#fff", boxShadow: "0 4px 20px rgba(79,110,247,0.3)" }}
              >
                <img src="https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9bee6ad3-3371-4642-bae3-e540ec9015bd.png" alt="Мax" className="w-7 h-7 rounded-lg" />
                Написать в Мax
              </a>
              <a
                href="tel:+79619296728"
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02]"
                style={{ background: "transparent", color: "#fff", border: `2px solid ${YELLOW}` }}
              >
                <Icon name="Phone" size={20} style={{ color: YELLOW }} />
                Позвонить: +7 961 929-67-28
              </a>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm" style={{ color: "rgba(245,245,245,0.35)" }}>
              © 2024 Рекламная компания АДИ. Все права защищены.
            </p>
            <a href="https://vk.ru/adi56ru" target="_blank" rel="noopener noreferrer"
              className="text-xs transition-colors hover:underline"
              style={{ color: "#5b9bd5" }}>
              ВКонтакте: vk.ru/adi56ru
            </a>
          </div>
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