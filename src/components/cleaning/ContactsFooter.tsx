import Icon from "@/components/ui/icon";

interface ContactsFooterProps {
  onOrderClick: () => void;
}

export default function ContactsFooter({ onOrderClick }: ContactsFooterProps) {
  return (
    <>
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
                onClick={onOrderClick}
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
    </>
  );
}
