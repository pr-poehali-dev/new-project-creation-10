import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О компании" },
  { id: "how", label: "Как мы работаем" },
  { id: "sales", label: "🔥 Акции", highlight: true },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "Megaphone",
    title: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
    desc: "Печать баннеров, изготовление вывесок, печать на пленке.",
  },
  {
    icon: "Printer",
    title: "Визитки. Листовки. Сертификаты",
    desc: "Визитки, листовки, сертификаты.",
  },
  {
    icon: "PenTool",
    title: "Брендинг",
    desc: "Разработка логотипа и фирменного стиля.",
  },
  {
    icon: "Image",
    title: "Фото на холсте",
    desc: "Превратите любимый снимок в картину для дома или в подарок. Печать на холсте любых форматов и размеров.",
  },
  {
    icon: "Camera",
    title: "Фото. Фотомагниты",
    desc: "Печать фотографий любых форматов. Фото в стиле «Полароид». Виниловые и акриловые фотомагниты с вашим фото — стильный и оригинальный сувенир на память.",
  },
  {
    icon: "RectangleHorizontal",
    title: "Таблички и стенды",
    desc: "Офисные таблички, таблички режима работы, стенды для школ и организаций, магазинов.",
  },
  {
    icon: "MapPin",
    title: "Адресные таблички",
    desc: "Адресные таблички для подъездов, домов и улиц. Изготовление из пластика, металла, акрила.",
  },
  {
    icon: "Stamp",
    title: "Печати и штампы",
    desc: "Изготовление печатей и штампов для компаний и организаций.",
  },
  {
    icon: "Tag",
    title: "Наклейки",
    desc: "Печать наклеек любых форматов — с логотипом, брендированные, для упаковки и маркировки.",
  },
  {
    icon: "Smile",
    title: "Шарж по фото",
    desc: "Сделаем красивый и незабываемый шарж по вашей фотографии. Отличный подарок. Напечатаем на холсте.",
  },
  {
    icon: "Sparkles",
    title: "Фото в образе",
    desc: "Превратим вашу фотографию в художественный образ — принцессы, воина, царицы и любого другого персонажа. Печатаем на холсте.",
  },
];

const PORTFOLIO = [
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f209baca-332c-443a-a5d5-30bea87e0d7d.jpg",
    title: "Логотип «Экоматия»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/991c5df2-1c60-4849-bebc-e486b94c5f76.jpg",
    title: "Логотип «Yabloko» — студия красоты",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/3d0122fe-fa48-463b-984c-49674df0f880.jpg",
    title: "Логотип «Звёздный»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/717a96ec-a077-4c2e-af8d-b08b6b20bab6.jpg",
    title: "Логотип «Стася» — пошив детской одежды",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9566820d-108b-4f13-8bda-9a2657632c15.jpg",
    title: "Логотип «ТАЙ» — релакс-студия",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b602d5e6-99d9-46a4-8922-04c3c327fa53.jpg",
    title: "Логотип «Суши Like»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d0ee77ff-e12a-4c33-9b60-6bf640d829b3.jpg",
    title: "Логотип «УмНарния» — центр детского развития",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9b0041f4-481c-42a7-afbc-1256c0dd707b.jpg",
    title: "Логотип «Чистота и Комфорт» — профессиональный клининг",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/53345fca-2f32-4de5-8259-809047e6118a.jpg",
    title: "Логотип «ВС РФ — Военная разведка»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/a1750d1a-08bf-4760-8284-d81f788c3f7c.jpg",
    title: "Логотип «Ameli Collection»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/ee76e242-fc19-429c-b4c3-00bfacba058e.jpg",
    title: "Логотип «101 бампер» — кузовные детали",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/bb46327f-b0b2-4071-ab5d-b0faac435cd9.jpg",
    title: "Логотип «Maximum» — школа музыки и танца",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/85672260-2106-44d3-9fa7-f8c3a1b885f4.jpg",
    title: "Логотип «Территория красоты» Оксаны Пантелеевой",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/9c5df591-19dd-4b9e-aee1-1fd40808e3a5.jpg",
    title: "Логотип «One Love Studio»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/0ed93a98-ca6b-4974-80d9-5167aa638b2a.jpg",
    title: "Логотип «SOFI Nail Studio»",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/0643f889-19cc-4c3e-9648-65f1ee6aae2e.jpg",
    title: "Логотип «Swan Wings» — изделия ручной работы",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/0095fdd3-93c6-473e-b00b-8a21b796e664.jpg",
    title: "Логотип «ASTRA» — студия красоты",
    category: "Брендинг",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/17de7415-b9e3-40af-9559-a5f7239f935f.jpg",
    title: "Логотип «Большая перемена»",
    category: "Брендинг",
  },

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/559eeab5-b2f3-40dc-8547-66085bc58075.jpg",
    title: "Визитки для нумеролога",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/18196012-e83f-411d-9938-e77cd1ee3d02.jpg",
    title: "Визитки «Уютные подарки»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/85b42c10-6e9b-416d-899b-27c028d41713.jpg",
    title: "Визитка «Выкуп авто»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/50c35311-2701-46e5-9381-c16b27da978d.jpg",
    title: "Визитки и карта клиента для brow-мастера",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/1edd097d-b49b-4453-a06f-45f14eaf51c1.jpg",
    title: "Визитки-ярлыки «Мирельдекор»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f7d20b8f-5c44-4ff6-9905-4ce1527fd5fa.jpg",
    title: "Чёрные визитки с золотом «Оренметры»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/c653df1d-e67b-487d-af1e-5cbe8d15f9e0.jpg",
    title: "Визитки «Flowers Sorochinsk»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d4a838cd-efce-4bc7-bf9e-403bab4cab64.jpg",
    title: "Визитки для nail-мастера Светланы Шеиной",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/2d0dfe19-43ba-4736-ac43-b29a701047a7.jpg",
    title: "Визитки для барбера Eldar Israfilov",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e53f3aac-7ef3-4b5d-b2c1-29edca4857fd.jpg",
    title: "Визитки «Мастер на час»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d6555d05-0bf3-4a55-854a-6d170838ce43.jpg",
    title: "Визитки «Клининговая компания»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/510c0747-56f8-4b1a-8b96-f2f787238760.jpg",
    title: "Визитки «Остекление» и «Ремонт квартир»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d1e1675b-579d-437d-957f-b68c8b53bbac.jpg",
    title: "Визитка для ателье",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f1678ae7-761f-4516-aa72-dbbad81764e7.jpg",
    title: "Листовка и визитки «Уютные подарки»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/44d8e45e-8f92-4bc0-9675-e29cd90675e8.jpg",
    title: "Листовки для студии йоги",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/aad64ec5-5641-40a2-b8b7-5e1656440e39.jpg",
    title: "Листовка и визитки «SharEL» шары и фотозоны",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b525a78b-4adf-4065-982a-7e42b275fd0f.jpg",
    title: "Листовка «English People» — реферальная программа",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/ee2eea43-e7d9-458e-8e6b-550236d84fa9.jpg",
    title: "Памятка по уходу после эпиляции «Olga Stolyarova»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/511e5a51-c457-41f6-a154-6584ca60f242.jpg",
    title: "Флаер и визитка «Minbayeva Diana» эпиляция",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/49bd46ca-fd2c-4853-bbc1-c366398e1b46.jpg",
    title: "Абонемент и визитка «Almira Mirmanova»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8be5a1d0-c3f1-409a-aa11-66c0db1244da.jpg",
    title: "Купон на скидку для шоурума «Chic Fashion»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/84c55d45-9c01-4eca-94c0-481433d57f02.jpg",
    title: "Подарочный сертификат",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/443027e9-4559-416f-bd9c-7c030d1f2d99.jpg",
    title: "Подарочный сертификат «Massage from Olga Petrova»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/36b28900-7729-43fc-bfd8-567f3bd458b5.jpg",
    title: "Подарочный сертификат (фиолетовый)",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/97823cfa-c5c7-46a4-ad83-ad92ef4e1b41.jpg",
    title: "Подарочный сертификат «Beauty SPA»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b7a49fe0-e41a-4604-a98d-7d44f35b9392.jpg",
    title: "Сертификат, визитка и купон студии эпиляции Ерисовой",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d4837c2c-6886-4fae-8615-1c09bd8f12f0.jpg",
    title: "Подарочный сертификат на фотосессию «Kristina foto»",
    category: "Визитки. Листовки. Сертификаты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/470e40b1-7cfc-43be-93d8-5f214ce9884e.jpg",
    title: "Фигурные стенды «Bootiful» с котами-привидениями",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/1d35ec26-031f-483c-837a-567021b713da.jpg",
    title: "Фигурный стенд «Кот Матроскин»",
    category: "Таблички и стенды",
  },

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7286779c-d14c-4e71-aa2b-3ebf17f7ea74.jpg",
    title: "Табличка «Осторожно! Возможен сход снега»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/cb7ac707-99dc-41ff-9f6a-507f795a5c92.jpg",
    title: "Вывеска из ПВХ «Ивановский трикотаж»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fab15c4d-9eb5-427f-a1c0-f3bafd4d116c.jpg",
    title: "Номерные таблички «3»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/2d1838c2-4f99-4bf1-b80b-2d6c3de2aa5f.jpg",
    title: "Стенд «Студия детского развития Успех»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fb7f8fdf-9507-452a-91c3-6676c5317515.jpg",
    title: "Фигурные стенды с персонажами мультфильмов",
    category: "Таблички и стенды",
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
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/c0a7a4ee-b834-4455-a09f-068c49b89454.jpg",
    title: "Фото на холсте — свадебный портрет с рамкой",
    category: "Фото на холсте",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/321267e5-584f-4edd-9bcc-ec8317f48fd1.jpg",
    title: "Фото на холсте — портрет пары",
    category: "Фото на холсте",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6ae54f1b-d362-4c75-913f-491a387a2bc3.jpg",
    title: "Фото на холсте — портрет",
    category: "Фото на холсте",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/26078d71-7b57-4469-ab34-a0b4f5b8dbc7.jpg",
    title: "Фото на холсте — свадебный портрет",
    category: "Фото на холсте",
  },

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/92964724-7eba-4f4e-b5fc-8bc32c1ab9e6.jpg",
    title: "Печать фото в стиле «Полароид»",
    category: "Фото. Фотомагниты",
  },


  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/02e403bc-2681-4914-a468-23b5cfb0260f.jpg",
    title: "Адресная табличка «3-я Парковая»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f4491c18-b9b8-42e4-8297-8aaaa688881f.jpg",
    title: "Адресная табличка «Коммунальная»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/340f849a-5d41-4f42-aad6-1c9810412639.jpg",
    title: "Адресная табличка «Школьная»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/25a70026-c358-4519-b8dc-26c876776e30.jpg",
    title: "Адресная табличка «пл. Элеватора»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6ce187e9-87e6-45ce-a89d-a2d80db26f74.jpg",
    title: "Адресная табличка «А. Ландо»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7fd7f6a8-2a2f-4202-a90a-7e92f2defee3.jpg",
    title: "Адресная табличка «Камская 64»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b28774cd-48e9-4074-83f3-254233194449.jpg",
    title: "Адресная табличка «Крымская 13»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/29d57842-ca3b-41a7-9f5c-ecf6d5f392e5.jpg",
    title: "Адресная табличка «Тихая 353»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/91513d14-e29e-4f2b-8948-d30b3f758a43.jpg",
    title: "Адресная табличка «Вишнёвая 27»",
    category: "Адресные таблички",
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
    category: "Фото на холсте",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/34c17b8c-8d68-47a2-9428-b8ae37667c77.jpg",
    title: "Акриловые фотомагниты",
    category: "Фото. Фотомагниты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/66a5509c-e211-4d91-83fd-a3cd7749b08f.jpg",
    title: "Адресная табличка «Заречная»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8b73462f-cc32-4b59-8163-4c5eac593ca3.jpg",
    title: "Адресная табличка «Воровского»",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/bc96ec47-8687-4f94-8847-346bae47c0f4.jpg",
    title: "Адресная табличка «Апрельская» с птицами",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/86386123-4769-4f8f-b8db-776188506a4d.jpg",
    title: "Адресная табличка «Пражская» с котом",
    category: "Адресные таблички",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/200294f9-ba1a-497f-99cb-12f5d90c7ae1.jpg",
    title: "Адресная табличка «Волжская» с овчаркой",
    category: "Адресные таблички",
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
    title: "Вывеска из ПВХ «Мясо & Рыба»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
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

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/312641ef-1097-4e4e-a740-75d90089c2dc.jpg",
    title: "Информационный стенд «УК Этажи»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f1624524-5b03-414e-b2c2-9ee0ac760e18.jpg",
    title: "Информационный стенд красный",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6ee08054-a112-4da5-b06d-03a58b0c96c0.jpg",
    title: "Стенд «Профориентация» с гербом России",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/24826337-1a05-45e5-8085-bd36334bc3f0.jpg",
    title: "Табличка режим работы «Archer Repair»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/d415b609-1520-42f1-bf54-1b367c2eb5d8.jpg",
    title: "Стенд «Колористика» — профессиональное окрашивание",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/cf40f32e-9215-4a75-b0df-6f32251e7ce7.jpg",
    title: "Стенд правила детской площадки",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/be58e899-b6eb-439b-b9c2-fff9a4eef12e.jpg",
    title: "Таблички «Осторожно злая собака» и «Видеонаблюдение»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/ed5fbf0b-0e19-4425-a24e-6185ca08c540.jpg",
    title: "Табличка режим работы «КаисаКласс»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/80cd3121-d740-4578-8ed4-e2afead709d8.jpg",
    title: "Табличка «Екатерина Заонегина — женский коуч»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/abeca37a-9944-4379-9347-5c23b4bb255d.jpg",
    title: "Вывеска из ПВХ «Продам правильный мёд»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/15e928e2-7def-43f2-9cd2-a1ad8a33e80b.jpg",
    title: "Табличка режим работы «Алекс — фабрика мягкой мебели»",
    category: "Таблички и стенды",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f3d4a534-5884-42c0-9b40-eb44d74dcdda.jpg",
    title: "Табличка режим работы «Берёзка»",
    category: "Таблички и стенды",
  },

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/cc4914cd-37f8-4582-9f60-29b44e2f8963.jpg",
    title: "Наклейки «ВкусЛета» — фрукты и ягоды",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/eec420ae-5692-4756-ab6d-a91b4fe9c563.jpg",
    title: "Наклейки «Greenery Micro» для микрозелени",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6f409f36-8fbb-4842-bf6a-5d136d0536e7.jpg",
    title: "Круглые наклейки «Саракташ» вывоз вторсырья",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/c8c15fc7-9a16-48a5-862d-fa40fdc22288.jpg",
    title: "Круглые наклейки «Face Sweets»",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/37d80d37-8d26-4355-bb95-72c311fb935c.jpg",
    title: "Круглые наклейки на крафт-пакеты",
    category: "Наклейки",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/dd4b2cb8-c863-4b2d-b462-7ae67c6e7fd2.jpg",
    title: "Фотоколлаж на холсте",
    category: "Фото на холсте",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/90421671-88c4-4993-8506-88678eb392f9.jpg",
    title: "Печать фотографий",
    category: "Фото. Фотомагниты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fc4a4130-2757-449b-aa77-9c1d4bd5e799.jpg",
    title: "Виниловые фотомагниты",
    category: "Фото. Фотомагниты",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/07fa8e30-17bc-4505-b740-d7689b65b8c4.jpg",
    title: "Штамп с логотипом «Lisavar»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f0bab7d0-9ee5-45eb-9980-28ad93ac3640.jpg",
    title: "Штамп «Goltni Photo»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/0386ddca-5171-4190-b9c5-503337c65dc5.jpg",
    title: "Штамп-факсимиле с подписью",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/487ce113-0fc1-4a7e-9837-00b219371875.jpg",
    title: "Автоматическая печать «ADI»",
    category: "Печати и штампы",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/666a1740-065a-42e5-92b2-a3a5c4d7a67c.jpg",
    title: "Баннер «Аренда»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/6451b263-a56d-49b2-94b7-758622bfe8d4.jpg",
    title: "Брендирование борта «Промышленная Буровая Компания»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fb21518f-9118-40a6-9004-e573cdad7221.jpg",
    title: "Баннер «Продажа. Аренда» на заборе",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/fbd47c50-d219-45b4-82b7-2ea0f53e7aa4.jpg",
    title: "Баннеры «Продажа домов»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/761b1869-9553-4944-9124-6369dcb2df08.jpg",
    title: "Печать баннера на плоттере",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/5d9258de-9831-4ca9-bfcf-50e4d0aec4be.jpg",
    title: "Печать флага с гербом России",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8addbccb-4489-45c4-b019-4dba344cb3e1.jpg",
    title: "Баннер «Устранение засоров»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e02ce35a-f292-4f06-bd04-ba7f16449017.jpg",
    title: "Готовый баннер с люверсом",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/1f66de94-a954-4260-8903-173dfe2e8534.jpg",
    title: "Баннер и табличка «ИП Смирнов»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f8eff7b4-6476-44a9-9b5c-be9dfe6892bf.jpg",
    title: "Баннер «Косметология Aleksa / Ателье»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/35e55cd4-837b-4ce0-84d3-a42494c0d292.jpg",
    title: "Баннер «Разливные напитки»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/4baf048b-cd22-4203-b261-aefee24ec98f.jpg",
    title: "Баннер «Приём и вывоз вторсырья»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/03c16253-de8c-4fca-abbf-fa526c6d1a3d.jpg",
    title: "Печать на пленке",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7955457c-ac85-4a98-93c9-6c81dfe57d9a.jpg",
    title: "Печать на пленке «Срочный ремонт обуви»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },

  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/62b8d451-8808-47ab-a1b5-33e3667cc8ce.jpg",
    title: "Печать на пленке «Товары для бани»",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/24407423-cfe0-4912-b664-fad834e170bf.jpg",
    title: "Печать на пленке SALE",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/b55802e9-fa7f-40c8-bcb0-df7773f10eca.jpg",
    title: "Самоклеящаяся пленка",
    category: "Печать баннеров. Печать на пленке. Вывески из ПВХ",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/0e10c0f3-2647-493e-bf66-1bf20c300a78.jpg",
    title: "Шарж «Девушка в Париже»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8da1fada-6fb2-46cc-a6fe-c5e8d0d814d6.jpg",
    title: "Шарж «Девушка в спортзале»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8f278b7b-1963-4faf-bab8-53ea37b675a4.jpg",
    title: "Шарж «Королева»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/a9dea5a8-75ad-432a-9578-b01adf7a38bd.jpg",
    title: "Шарж «Охотник»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/423cea07-1508-4933-a391-4f63e80ebae2.jpg",
    title: "Шарж «Влюблённая пара»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f7afc9bb-dfed-48af-8015-a22576aa265a.jpg",
    title: "Шарж «Рыбак и охотник»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/2b113543-2c37-4664-bdeb-fc7b26621ea7.jpg",
    title: "Шарж «Девушка-фотограф»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7ebc4baf-3324-4874-9504-913f55f283fd.jpg",
    title: "Шарж «Девушка в баре»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/a66fd039-97bc-465e-9a80-6b0af9aa4b2e.jpg",
    title: "Шарж «Пара у Range Rover»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/abed9111-4210-439e-931d-c64b2f91007f.jpg",
    title: "Шарж «Мужчина с бутылкой»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8114b872-febb-41e3-9cd1-ce02171d19a6.jpg",
    title: "Шарж «Учитель»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/f9517fc2-8921-4300-aa99-2c561da6bd7d.jpg",
    title: "Шарж «С юбилеем»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/a7727763-83c8-4257-9085-209912d83f0d.jpg",
    title: "Шарж «Пара на красной дорожке»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/852bd681-a7b9-43b6-b455-e914f7b453a5.jpg",
    title: "Шарж «Семья»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/df2cfc73-f507-4a4b-b6d9-d3d123dfcc4b.jpg",
    title: "Шарж «Семья Кравченко»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/3e1a7b9d-219b-4b72-ac27-297ebbc8da4a.jpg",
    title: "Шарж «Две подруги»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/eb703cf8-aa99-4744-b6ad-3f46f3570303.jpg",
    title: "Шарж «Молодая семья»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/c042a436-3bdd-41d5-bce2-f2c296780782.jpg",
    title: "Шарж «Пикник с друзьями»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/e4ec7b6a-81a4-4193-949a-d95cdb07ccef.jpg",
    title: "Шарж «Главный бухгалтер»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/95998289-9cb7-47de-8336-74cb09075004.jpg",
    title: "Шарж «Семья на даче»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/4aff7a04-8834-45c9-beb3-332f5f5f06f2.jpg",
    title: "Шарж «Учитель с глобусом»",
    category: "Шарж по фото",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7f480bb9-5c39-4859-91e7-5494539873af.jpg",
    title: "Фото в образе «Дама с цветами»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/25e599cb-8fdf-4078-8fba-c2dfee5ac806.jpg",
    title: "Фото в образе «Императрица»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/de4d9ba5-e260-42fa-83f6-f40a76a12617.jpg",
    title: "Фото в образе «Генерал»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/78f3d5dc-e6b5-46f7-a433-24654f07c28c.jpg",
    title: "Фото в образе «Принц»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/206a78a5-3ae2-49a2-988c-9c4566ca57ef.jpg",
    title: "Фото в образе «Фельдмаршал»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/acd59d72-37b5-4083-874e-7785853aaa23.jpg",
    title: "Фото в образе «Пара в старинных костюмах»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/ae78a093-29af-40b6-a465-d8da8bc0f6a7.jpg",
    title: "Фото в образе «Королевская семья»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/8417cab7-67b0-4c8b-972b-3004a4c8e188.jpg",
    title: "Фото в образе «Дворянская семья»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/ce1b985c-6a28-415f-84fa-00c94006119c.jpg",
    title: "Фото в образе «Парадный портрет пары»",
    category: "Фото в образе",
  },
  {
    img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/7500acaa-9127-450d-99b9-e2db81ff3c48.jpg",
    title: "Фото в образе «Офицер»",
    category: "Фото в образе",
  },
];

const STATS = [
  { value: "2013", label: "год основания" },
  { value: "800+", label: "выполненных проектов" },
  { value: "3500+", label: "клиентов" },
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
  const [lightbox, setLightbox] = useState<{ img: string; title: string } | null>(null);
  const [openWorks, setOpenWorks] = useState<string[]>([]);

  const toggleWorks = (title: string) => {
    setOpenWorks((prev) => prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]);
  };

  const categories = ["Все", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];
  const filteredPortfolio = activeCategory === "Все" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#111", color: "#f5f5f5", fontFamily: "'Golos Text', sans-serif" }}>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:opacity-70 transition-opacity"
            >✕</button>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full h-auto rounded-xl"
              style={{ maxHeight: "80vh", objectFit: "contain", pointerEvents: "none", userSelect: "none" }}
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
            <p className="text-center mt-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{lightbox.title}</p>
          </div>
        </div>
      )}

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
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              l.highlight
                ? <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="text-sm font-bold transition-all hover:scale-105 px-3 py-1 rounded-md animate-pulse"
                    style={{ background: RED, color: YELLOW, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {l.label}
                  </button>
                : <button
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
            <a
              href="https://www.avito.ru/brands/e87ba7201c197c661b09849dd41c83d3?src=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
              style={{ background: "#00aaff22", border: "1px solid #00aaff55", color: "#00aaff" }}
            >
              ⭐ Отзывы на Авито
            </a>
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
                  "ЛИСТОВКИ / ФЛАЕРЫ",
                  "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ",
                  "ПЕЧАТЬ ФОТО / ФОТОМАГНИТЫ",
                  "ПЕЧАТЬ ФОТО НА ХОЛСТЕ",
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
                  "АДРЕСНЫЕ ТАБЛИЧКИ",
                  "ОФИСНЫЕ ТАБЛИЧКИ / СТЕНДЫ",
                  "НАКЛЕЙКИ",
                  "ПЕЧАТИ И ШТАМПЫ",
                  "ПЕЧАТЬ БАННЕРОВ",
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

          <div className="flex flex-col gap-6">
            {SERVICES.map((s, i) => {
              const works = PORTFOLIO.filter((p) => p.category === s.title);
              const isOpen = openWorks.includes(s.title);
              return (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(204,27,27,0.2)", background: "rgba(255,255,255,0.02)" }}>
                  {/* Заголовок услуги */}
                  <div className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `rgba(204,27,27,0.15)`, border: `1px solid rgba(204,27,27,0.3)` }}>
                      <Icon name={s.icon} size={24} style={{ color: RED }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.02em" }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed mt-1" style={{ color: "rgba(245,245,245,0.6)" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Кнопка «Наши работы» */}
                  {works.length > 0 && (
                    <button
                      onClick={() => toggleWorks(s.title)}
                      className="w-full flex items-center justify-between px-6 py-4 font-bold text-sm transition-all"
                      style={{ background: isOpen ? RED : "#fff", color: isOpen ? "#fff" : RED, fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em", fontSize: "1rem" }}
                    >
                      <span>НАШИ РАБОТЫ</span>
                      <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={20} />
                    </button>
                  )}

                  {/* Галерея работ */}
                  {isOpen && works.length > 0 && (
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" style={{ background: "#0d0808" }}>
                      {works.map((p, j) => (
                        <div
                          key={j}
                          className="rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
                          style={{ border: "1px solid rgba(204,27,27,0.25)" }}
                          onClick={() => setLightbox({ img: p.img, title: p.title })}
                        >
                          <div className="w-full bg-black flex items-center justify-center" style={{ minHeight: "140px" }}>
                            <img src={p.img} alt={p.title} className="w-full h-auto object-contain" style={{ maxHeight: "200px", pointerEvents: "none", userSelect: "none" }} draggable={false} onContextMenu={(e) => e.preventDefault()} />
                          </div>
                          <div className="p-2" style={{ background: "rgba(0,0,0,0.7)" }}>
                            <h4 className="text-xs leading-snug" style={{ fontFamily: "'Oswald', sans-serif", color: "#fff" }}>{p.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6" style={{ background: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>О нас</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              О КОМПАНИИ
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: RED }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "#e0e0e0" }}>
                Рекламная компания <strong style={{ color: "#fff" }}>АДИ</strong> работает с <strong style={{ color: YELLOW }}>2013 года</strong> и за это время стала одной из ведущих рекламных компаний Оренбурга и Оренбургской области.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#e0e0e0" }}>
                За годы работы мы выполнили заказы для более чем <strong style={{ color: YELLOW }}>3 500 клиентов</strong> — от частных лиц до крупных предприятий региона.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#e0e0e0" }}>
                Мы работаем как с <strong style={{ color: "#fff" }}>физическими</strong>, так и с <strong style={{ color: "#fff" }}>юридическими лицами</strong>. Оформляем все необходимые документы, работаем по договору и выставляем счета.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl p-6 text-center" style={{ background: "#222", border: "1px solid #333" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.5rem", fontWeight: 700, color: YELLOW }}>{stat.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-wider" style={{ color: "#aaa" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.avito.ru/brands/e87ba7201c197c661b09849dd41c83d3?src=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ background: "#00aaff", color: "#fff", fontSize: "1rem" }}
            >
              ⭐ Отзывы на Авито
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" className="py-20 px-6" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Процесс</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              КАК МЫ РАБОТАЕМ
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: RED }} />
            <p className="mt-4 text-base" style={{ color: "#aaa" }}>Все цены и сроки обсуждаются с каждым клиентом индивидуально</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Сценарий 1 */}
            <div className="rounded-2xl p-8" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: YELLOW }}>Без готового макета</p>
              <div className="space-y-5">
                {[
                  { n: "01", title: "Заявка", desc: "Оставляете заявку — мы связываемся и уточняем детали заказа" },
                  { n: "02", title: "Обсуждение цены и сроков", desc: "Вместе определяем стоимость, материалы и сроки изготовления" },
                  { n: "03", title: "Оплата", desc: "Физ. лица: предоплата 50% при заказе от 3 500 ₽, остаток при получении. Юр. лица: предоплата 100%." },
                  { n: "04", title: "Утверждение и выдача", desc: "После изготовления согласовываете результат и забираете заказ" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: RED, color: "#fff", fontFamily: "'Oswald', sans-serif" }}>{step.n}</div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: "1.05rem" }}>{step.title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "#aaa" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Сценарий 2 */}
            <div className="rounded-2xl p-8" style={{ background: "#1a1a1a", border: `1px solid ${RED}` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: YELLOW }}>С готовым макетом</p>
              <div className="space-y-5">
                {[
                  { n: "01", title: "Заявка + макет", desc: "Присылаете готовый макет и параметры заказа" },
                  { n: "02", title: "Обсуждение цены и сроков", desc: "Проверяем файл, уточняем стоимость и сроки" },
                  { n: "03", title: "Оплата", desc: "Физ. лица: предоплата 50% при заказе от 3 500 ₽, остаток при получении. Юр. лица: предоплата 100%." },
                  { n: "04", title: "Получение заказа", desc: "Забираете готовый заказ в согласованные сроки" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: YELLOW, color: "#111", fontFamily: "'Oswald', sans-serif" }}>{step.n}</div>
                    <div>
                      <div className="font-semibold mb-1" style={{ color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: "1.05rem" }}>{step.title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "#aaa" }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl text-sm" style={{ background: "#111", color: "#aaa", border: "1px solid #2a2a2a" }}>
                💡 <strong style={{ color: "#fff" }}>Важно:</strong> макет должен быть в высоком разрешении и подходящем формате. Уточните требования перед отправкой.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SALES */}
      <section id="sales" className="py-20 px-6" style={{ background: "#1a0a0a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: YELLOW }}>Выгодные предложения</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, lineHeight: 1.1 }}>
              🔥 АКЦИИ
            </h2>
            <div className="mt-4 w-16 h-1 rounded" style={{ background: YELLOW }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/52773039-924a-4482-8095-7dd2f57163df.jpg",
                title: "Визитки",
                price: "2 500 ₽",
                qty: "1 000 шт",
                note: "Бумага 300 г/м², цветная печать, ровная нарезка. Цена за печать без макета.",
              },
              {
                img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/5a1b17fe-710f-4ebb-802a-a557a444ce50.jpg",
                title: "Флаеры 1/3 А4",
                price: "4 000 ₽",
                qty: "1 000 шт",
                note: "Односторонние. Цена за печать с готового макета.",
              },
              {
                img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/3141ad39-559b-4966-a1fc-64191f877877.jpg",
                title: "Листовки 10×15",
                price: "1 500 ₽",
                qty: "300 шт",
                note: "Односторонние. Цена за печать с готового макета.",
              },
              {
                img: "https://cdn.poehali.dev/projects/4dd09df7-5058-4a64-a766-924dd2306196/bucket/67c79b75-8745-44c6-a95e-975b8224ebb7.jpg",
                title: "Уголок потребителя",
                price: "2 160 ₽",
                qty: "вместо 2 500 ₽",
                note: "Цветной, на 6 карманов. Доступен в разных цветах.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#111", border: `2px solid ${RED}` }}>
                <div className="relative" style={{ background: "#222" }}>
                  <img src={item.img} alt={item.title} className="w-full h-64 object-contain p-2" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ background: RED, color: YELLOW, fontFamily: "'Oswald', sans-serif" }}>
                    АКЦИЯ
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-lg font-bold mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: "#fff" }}>{item.title}</div>
                  <div className="text-2xl font-bold mb-0.5" style={{ color: YELLOW, fontFamily: "'Oswald', sans-serif" }}>{item.price}</div>
                  <div className="text-sm mb-3" style={{ color: RED, fontWeight: 600 }}>{item.qty}</div>
                  <div className="text-xs leading-relaxed mt-auto" style={{ color: "#888" }}>{item.note}</div>
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="mt-4 w-full py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                    style={{ background: RED, color: "#fff", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                  >
                    ЗАКАЗАТЬ
                  </button>
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
                href="https://t.me/Adi_056m"
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
            <a href="https://www.avito.ru/brands/e87ba7201c197c661b09849dd41c83d3?src=sharing" target="_blank" rel="noopener noreferrer"
              className="text-xs transition-colors hover:underline"
              style={{ color: "#00aaff" }}>
              ⭐ Отзывы на Авито
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