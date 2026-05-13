import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/a04bc849-2995-480a-8b8c-c3e7c6d6fc8a.jpg";
const KITCHEN_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/457ec2b4-edcd-4eee-8527-19d36cca30b8.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/b6f50fb5-14c0-4e83-aefb-9f6648c3aa03/files/11793cf8-ef61-47e6-b3f9-7690644fb8a0.jpg";

const services = [
  { icon: "Home", title: "Уборка квартир", desc: "Генеральная и поддерживающая уборка жилых помещений любой площади", price: "от 150 ₽/м²" },
  { icon: "Building2", title: "Офисы и бизнес", desc: "Ежедневная и разовая уборка офисов, торговых и бизнес-центров", price: "от 60 ₽/м²" },
  { icon: "Sparkles", title: "После ремонта", desc: "Удаление строительной пыли, мусора, следов краски и штукатурки", price: "от 180 ₽/м²" },
  { icon: "Droplets", title: "Мойка окон", desc: "Профессиональная мойка окон, витрин, фасадов с подъёмного оборудования", price: "от 800 ₽" },
  { icon: "Sofa", title: "Химчистка мебели", desc: "Глубокая чистка диванов, кресел, ковров и матрасов. Гарантия 5 дней — если появятся пятна или разводы после химчистки, устраним бесплатно.", price: "от 1 500 ₽" },
  { icon: "Layers", title: "Химчистка ковров", desc: "Профессиональная глубокая чистка ковров любых размеров и материалов. Удаляем пятна, запахи и аллергены. Гарантия чистоты 5 дней.", price: "от 1 200 ₽" },
  { icon: "Star", title: "VIP-уборка", desc: "Элитный сервис с использованием премиум-средств для требовательных клиентов", price: "от 8 000 ₽" },
];

const portfolio = [
  { label: "Квартира 85 м²", tag: "Генеральная уборка", img: HERO_IMG },
  { label: "Кухня после вечеринки", tag: "Экспресс-уборка", img: KITCHEN_IMG },
  { label: "Офис 200 м²", tag: "После ремонта", img: PORTFOLIO_IMG },
];

interface SectionsProps {
  onOrderClick: () => void;
  scrollTo: (id: string) => void;
}

export default function Sections({ onOrderClick, scrollTo }: SectionsProps) {
  return (
    <>
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
              Профессиональная команда в Брянске. Экологичные средства, гарантия результата, работаем 7 дней в неделю.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onOrderClick}
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
              {[["500+", "клиентов"], ["100%", "гарантия"], ["Брянск", "и область"]].map(([num, label]) => (
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
              <div key={i} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00c9a7]/40 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#00c9a7] font-black text-base">{s.price}</span>
                  <button onClick={onOrderClick} className="text-xs font-bold text-gray-400 hover:text-[#0097e6] transition-colors flex items-center gap-1">
                    Заказать <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОГРАММА ЛОЯЛЬНОСТИ */}
      <section id="loyalty" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#00c9a7] font-bold text-sm uppercase tracking-widest mb-3">Выгодно с нами</div>
            <h2 className="font-black text-4xl md:text-5xl">
              Программа <span className="font-cormorant italic font-light text-[#0097e6]">лояльности</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">Чем больше заказываете — тем больше экономите. Скидки суммируются!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#00c9a7]/10 to-[#0097e6]/10 border border-[#00c9a7]/30 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-black text-xl">Приведи друга</div>
                  <div className="text-[#00c9a7] font-bold text-sm">Скидка за каждого</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Порекомендуйте нас другу — и получите <span className="font-black text-[#00c9a7]">скидку 10%</span> на следующий заказ. Количество друзей не ограничено!
              </p>
              <div className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-[#00c9a7]/20">
                <div className="text-4xl">🎁</div>
                <div>
                  <div className="font-black text-2xl text-[#00c9a7]">−10%</div>
                  <div className="text-sm text-gray-500">за каждого приведённого друга</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#141d26]/5 to-[#141d26]/10 border border-[#141d26]/10 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#141d26] to-[#1a2a3a] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-black text-xl">Накопительная скидка</div>
                  <div className="text-[#0097e6] font-bold text-sm">Растёт вместе с вами</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { orders: "от 5 заказов", discount: "−5%", color: "from-[#00c9a7]/20 to-[#00c9a7]/10", border: "border-[#00c9a7]/30", text: "text-[#00c9a7]", icon: "⭐" },
                  { orders: "от 10 заказов", discount: "−10%", color: "from-[#0097e6]/20 to-[#0097e6]/10", border: "border-[#0097e6]/30", text: "text-[#0097e6]", icon: "⭐⭐" },
                  { orders: "от 15 заказов", discount: "−15%", color: "from-[#141d26]/10 to-[#141d26]/5", border: "border-[#141d26]/20", text: "text-[#141d26]", icon: "👑" },
                ].map(({ orders, discount, color, border, text, icon }) => (
                  <div key={orders} className={`bg-gradient-to-r ${color} border ${border} rounded-xl px-4 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{icon}</span>
                      <span className="font-semibold text-sm text-[#141d26]">{orders}</span>
                    </div>
                    <span className={`font-black text-lg ${text}`}>{discount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-xl"
            >
              <Icon name="Gift" size={18} />
              Стать участником программы
            </button>
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section id="portfolio" className="py-24 bg-[#f8fafb]">
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
    </>
  );
}
