import Icon from "@/components/ui/icon";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  onOrderClick: () => void;
  scrollTo: (id: string) => void;
}

const NAV_LINKS = [
  ["about", "О нас"],
  ["services", "Услуги"],
  ["loyalty", "Скидки"],
  ["portfolio", "Портфолио"],
  ["contacts", "Контакты"],
];

export default function Navbar({ scrolled, menuOpen, setMenuOpen, onOrderClick, scrollTo }: NavbarProps) {
  return (
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
          {NAV_LINKS.map(([id, label]) => (
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
          onClick={onOrderClick}
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
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left px-3 py-2 rounded-xl hover:bg-[#00c9a7]/10 hover:text-[#00c9a7] transition-colors">{label}</button>
          ))}
          <button onClick={() => { onOrderClick(); setMenuOpen(false); }} className="mt-2 bg-gradient-to-r from-[#00c9a7] to-[#0097e6] text-white font-bold px-5 py-3 rounded-full">
            Заказать уборку
          </button>
        </div>
      )}
    </header>
  );
}
