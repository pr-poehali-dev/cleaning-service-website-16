import { useState, useEffect } from "react";
import Navbar from "@/components/cleaning/Navbar";
import Sections from "@/components/cleaning/Sections";
import ContactsFooter from "@/components/cleaning/ContactsFooter";
import CallModal from "@/components/cleaning/CallModal";

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-montserrat bg-[#f8fafb] text-[#141d26] overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onOrderClick={() => setModalOpen(true)}
        scrollTo={scrollTo}
      />
      <Sections
        onOrderClick={() => setModalOpen(true)}
        scrollTo={scrollTo}
      />
      <ContactsFooter
        onOrderClick={() => setModalOpen(true)}
      />
      <CallModal
        modalOpen={modalOpen}
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
