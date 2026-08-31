import React, { useState, useEffect } from 'react';
import { LOGO_BASE64 } from '../data/defaultData';
import { SiteInfo } from '../types';
import { Calendar, Utensils, Image as ImageIcon, MapPin, Lock, PhoneCall, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  info: SiteInfo;
  onOpenAdmin: () => void;
  onOpenReservation: (presetShow?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ info, onOpenAdmin, onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Agenda de Shows', href: '#agenda', icon: Calendar },
    { label: 'Cardápio', href: '#cardapio', icon: Utensils },
    { label: 'Fotos do Local', href: '#galeria', icon: ImageIcon },
    { label: 'Onde Estamos', href: '#local', icon: MapPin },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#17130f]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#362a20]'
          : 'bg-gradient-to-b from-[#17130f]/95 via-[#17130f]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={LOGO_BASE64}
              alt="Pé de Manga"
              className="w-11 h-11 rounded-full object-cover border border-[#c88a3d]/40 group-hover:border-[#c88a3d] transition-all shadow-md"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#17130f]" title="Aberto / Atendimento rápido"></span>
          </div>
          <div>
            <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#ede4d3]">
              Pé de <span className="text-[#c88a3d]">Manga</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-[#cabfa9] font-medium">
              Choperia & Música ao Vivo
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#cabfa9] hover:text-[#c88a3d] transition-colors font-medium flex items-center gap-1.5"
            >
              <link.icon className="w-3.5 h-3.5 opacity-70" />
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-2 text-xs text-[#cabfa9] hover:text-[#ede4d3] bg-[#211a14] hover:bg-[#362a20] border border-[#362a20] hover:border-[#c88a3d]/50 rounded-md transition-all font-medium cursor-pointer"
            title="Painel de controle do proprietário"
          >
            <Lock className="w-3.5 h-3.5 text-[#c88a3d]" />
            <span>Área do Dono</span>
          </button>

          <button
            onClick={() => onOpenReservation()}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-[#8b2a2e] hover:bg-[#a63237] text-[#ede4d3] font-semibold rounded-md shadow-lg shadow-[#8b2a2e]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Reservar Mesa</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenReservation()}
            className="sm:hidden flex items-center gap-1 px-3 py-1.5 text-xs bg-[#8b2a2e] text-[#ede4d3] font-medium rounded-md"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
            <span>Reservar</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#cabfa9] hover:text-[#ede4d3] bg-[#211a14] rounded-md border border-[#362a20]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#211a14] border-b border-[#362a20] px-4 py-4 mt-2 transition-all space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] text-sm text-[#cabfa9] hover:text-[#c88a3d]"
              >
                <link.icon className="w-4 h-4 text-[#c88a3d]" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#362a20] flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs text-[#cabfa9] bg-[#17130f] border border-[#362a20] rounded-md font-medium"
            >
              <Lock className="w-3.5 h-3.5 text-[#c88a3d]" />
              <span>Painel do Dono</span>
            </button>
            <a
              href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs text-white bg-emerald-700 hover:bg-emerald-600 rounded-md font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
