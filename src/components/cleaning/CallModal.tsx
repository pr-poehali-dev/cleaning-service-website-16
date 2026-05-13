import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface CallModalProps {
  modalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function CallModal({ modalOpen, onOpen, onClose }: CallModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); setForm({ name: "", phone: "", comment: "" }); }, 2500);
  };

  return (
    <>
      {/* ПЛАВАЮЩАЯ КНОПКА */}
      <button
        onClick={onOpen}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-[#00c9a7] to-[#0097e6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="Заказать уборку"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </button>

      {/* МОДАЛЬНОЕ ОКНО */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
            <button
              onClick={onClose}
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
    </>
  );
}