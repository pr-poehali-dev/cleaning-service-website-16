import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/a04bc849-2995-480a-8b8c-c3e7c6d6fc8a.jpg";
const KITCHEN_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/457ec2b4-edcd-4eee-8527-19d36cca30b8.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/11793cf8-ef61-47e6-b3f9-7690644fb8a0.jpg";

const services = [
  { icon: "Home", title: "Уборка квартир", desc: "Генеральная и поддерживающая уборка жилых помещений любой площади", price: "от 150 ₽/м²" },
  { icon: "Building2", title: "Офисы и бизнес", desc: "Ежедневная и разовая уборка офисов, торговых и бизнес-центров", price: "от 4 000 ₽" },
  { icon: "Sparkles", title: "После ремонта", desc: "Удаление строительной пыли, мусора, следов краски и штукатурки", price: "от 5 500 ₽" },
  { icon: "Droplets", title: "Мойка окон", desc: "Профессиональная мойка окон, витрин, фасадов с подъёмного оборудования", price: "от 800 ₽" },
  { icon: "Sofa", title: "Химчистка мебели", desc: "Глубокая чистка диванов, кресел, ковров и матрасов. Гарантия 5 дней — если появятся пятна или разводы после химчистки, устраним бесплатно.", price: "от 1 200 ₽" },
  { icon: "Layers", title: "Химчистка ковров", desc: "Профессиональная глубокая чистка ковров любых размеров и материалов. Удаляем пятна, запахи и аллергены. Гарантия чистоты 5 дней.", price: "от 150 ₽/м²" },
  { icon: "Star", title: "VIP-уборка", desc: "Элитный сервис с использованием премиум-средств для требовательных клиентов", price: "от 8 000 ₽" },
];

const reviews = [
  { name: "Анна Михайлова", role: "Владелец квартиры", text: "Заказывала уборку после ремонта — результат превзошёл все ожидания! Команда сработала быстро и качественно.", stars: 5 },
  { name: "Дмитрий Соколов", role: "Руководитель офиса", text: "Работаем с ЧистоДом уже полгода. Офис всегда в идеальном состоянии, цены адекватные, персонал вежливый.", stars: 5 },
  { name: "Елена Воронова", role: "Мама двух детей", text: "Нашла их по рекомендации подруги. Теперь заказываю каждые две недели — экономлю время и силы!", stars: 5 },
];

const portfolio = [
  { label: "Квартира 85 м²", tag: "Генеральная уборка", img: HERO_IMG },
  { label: "Кухня после вечеринки", tag: "Экспресс-уборка", img: KITCHEN_IMG },
  { label: "Офис 200 м²", tag: "После ремонта", img: PORTFOLIO_IMG },
];

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setModalOpen(false); setSubmitted(false); setForm({ name: "", phone: "", comment: "" }); }, 2500);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-montserrat bg-[#f8fafb] text-[#141d26] overflow-x-hidden">

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-[#141d26]/80 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00c9a7] to-[#0097e6] flex items-center justify-center shadow-md">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className={`font-black text-xl tracking-tight ${scrolled ? "text-[#141d26]" : "text-white"}`}>
              Чисто<span className="text-[#00c9a7]">Дом</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {[["about","О нас"],["services","Услуги"],["portfolio","Портфолио"],["reviews","Отзывы"],["contacts","Контакты"]].map(([id,label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:bg-[#00c9a7]/15 hover:text-[#00c9a7] ${scrolled ? "text-[#141d26]" : "text-white/90"}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <Icon name="Phone" size={15} />
            Заказать уборку
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} className={scrolled ? "text-[#141d26]" : "text-white"} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-2 text-sm font-semibold text-[#4a5568]">
            {[["about","О нас"],["services","Услуги"],["portfolio","Портфолио"],["reviews","Отзывы"],["contacts","Контакты"]].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left px-3 py-2 rounded-xl hover:bg-[#00c9a7]/10 hover:text-[#00c9a7] transition-colors">{label}</button>
            ))}
            <button onClick={() => { setModalOpen(true); setMenuOpen(false); }} className="mt-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-5 py-3 rounded-full">
              Заказать уборку
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клининг" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141d26]/90 via-[#141d26]/60 to-transparent" />
        </div>

        <div className="absolute top-32 right-20 w-72 h-72 rounded-full bg-[#00c9a7]/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-[#0097e6]/20 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#00c9a7]/20 border border-[#00c9a7]/40 text-[#00c9a7] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Icon name="Zap" size={14} />
              Профессиональный клининг
            </div>

            <h1 className="font-black text-5xl md:text-7xl leading-[1.05] text-white mb-6">
              Чистота,<br />
              <span className="font-cormorant italic font-light text-[#00c9a7]">которую</span><br />
              вы заслужили
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Команда профессионалов с 8-летним опытом. Экологичные средства, гарантия результата, работаем 7 дней в неделю.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
              >
                <Icon name="Sparkles" size={18} />
                Вызвать уборщиков
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full text-base hover:border-white hover:bg-white/10 transition-all"
              >
                Наши услуги
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              {[["500+","клиентов"],["100%","гарантия"],["Брянск","и область"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-[#00c9a7] text-3xl font-black">{num}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* О НАС */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={KITCHEN_IMG} alt="О нас" className="rounded-3xl w-full object-cover h-[480px]" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-2xl p-6 text-white shadow-2xl">
                <div className="text-4xl font-black">500+</div>
                <div className="text-sm font-medium opacity-90">довольных клиентов</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Гарантия чистоты</div>
                    <div className="text-xs text-gray-400">100% результат</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">О компании</div>
              <h2 className="font-black text-4xl md:text-5xl leading-tight mb-6">
                Мы делаем<br />
                <span className="font-cormorant italic font-light text-[#0097e6]">больше, чем просто</span><br />
                уборку
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                ЧистоДом — команда из 35 сертифицированных специалистов, которые любят своё дело. Работаем в Брянске и знаем своё дело до мелочей.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Используем профессиональное оборудование: промышленные пылесосы, пароочистители и полировальные машины. Работаем только с дорогой, но проверенной химией премиум-класса — она безопасна для детей и домашних животных, но безжалостна к загрязнениям.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", text: "Застрахованная ответственность" },
                  { icon: "Clock", text: "Работаем 7 дней в неделю" },
                  { icon: "Leaf", text: "Эко-средства" },
                  { icon: "Award", text: "Сертифицированный персонал" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-[#f8fafb] rounded-xl p-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#141d26]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">Что мы делаем</div>
            <h2 className="font-black text-4xl md:text-5xl">
              Наши <span className="font-cormorant italic font-light text-[#0097e6]">услуги</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00c9a7]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#00c9a7] font-black text-base">{s.price}</span>
                  <button onClick={() => setModalOpen(true)} className="text-xs font-bold text-gray-400 hover:text-[#0097e6] transition-colors flex items-center gap-1">
                    Заказать <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">Наши работы</div>
            <h2 className="font-black text-4xl md:text-5xl">
              <span className="font-cormorant italic font-light text-[#0097e6]">Портфолио</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141d26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="inline-block bg-[#00c9a7] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{p.tag}</div>
                  <div className="text-white font-bold text-lg">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-24 bg-gradient-to-br from-[#141d26] to-[#1a2a3a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">Говорят клиенты</div>
            <h2 className="font-black text-4xl md:text-5xl text-white">
              Отзывы о <span className="font-cormorant italic font-light text-[#00c9a7]">нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-[#00c9a7] fill-[#00c9a7]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">"{r.text}"</p>
                <div>
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="text-white/40 text-xs">{r.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-10 py-4 rounded-full text-base hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
            >
              <Icon name="Phone" size={18} />
              Записаться на уборку
            </button>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">Свяжитесь с нами</div>
            <h2 className="font-black text-4xl md:text-5xl">
              <span className="font-cormorant italic font-light text-[#0097e6]">Контакты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (800) 555-00-11"] },
              { icon: "Mail", title: "Email", lines: ["info@chistodom.ru", "zakaz@chistodom.ru"] },
              { icon: "MapPin", title: "Адрес", lines: ["г. Брянск,", "ул. Красноармейская, д. 100"] },
            ].map(({ icon, title, lines }) => (
              <div key={title} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={icon} size={26} className="text-white" />
                </div>
                <div className="font-black text-lg mb-2">{title}</div>
                {lines.map(l => <div key={l} className="text-gray-500 text-sm">{l}</div>)}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#00c9a7]/10 to-[#0097e6]/10 rounded-3xl p-8 max-w-4xl mx-auto border border-[#00c9a7]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-black text-2xl mb-1">Режим работы</div>
                <div className="text-gray-500">Ежедневно с 8:00 до 22:00, без выходных</div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                <Icon name="MessageCircle" size={18} />
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141d26] text-white/60 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00c9a7] to-[#0097e6] flex items-center justify-center">
              <Icon name="Sparkles" size={14} className="text-white" />
            </div>
            <span className="font-black text-white">Чисто<span className="text-[#00c9a7]">Дом</span></span>
          </div>
          <div>© 2026 ЧистоДом. Профессиональный клининг в Брянске</div>
          <div>
            <span className="hover:text-white cursor-pointer transition-colors">Политика конфиденциальности</span>
          </div>
        </div>
      </footer>

      {/* ПЛАВАЮЩАЯ КНОПКА */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Заказать уборку"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </button>

      {/* МОДАЛЬНОЕ ОКНО */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Icon name="X" size={16} className="text-gray-600" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={30} className="text-white" />
                </div>
                <h3 className="font-black text-2xl mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Мы перезвоним вам в течение 15 минут</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl leading-tight">Заказать уборку</h3>
                    <p className="text-gray-400 text-xs">Перезвоним в течение 15 минут</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c9a7] focus:ring-2 focus:ring-[#00c9a7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c9a7] focus:ring-2 focus:ring-[#00c9a7]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">Комментарий</label>
                    <textarea
                      rows={3}
                      placeholder="Тип уборки, площадь, пожелания..."
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c9a7] focus:ring-2 focus:ring-[#00c9a7]/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-black py-3.5 rounded-xl text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg mt-1"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}