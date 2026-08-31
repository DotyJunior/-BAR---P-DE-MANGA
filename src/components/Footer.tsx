import React from 'react';
import { SiteInfo } from '../types';
import { LOGO_BASE64 } from '../data/defaultData';
import { Instagram, Phone, MapPin, Clock, Lock, Heart } from 'lucide-react';

interface FooterProps {
  info: SiteInfo;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ info, onOpenAdmin }) => {
  return (
    <footer className="bg-[#120f0c] border-t border-[#362a20] pt-16 pb-24 sm:pb-12 text-[#cabfa9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#362a20]/70">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_BASE64}
                alt="Pé de Manga"
                className="w-12 h-12 rounded-full object-cover border border-[#c88a3d]/40"
              />
              <div>
                <h3 className="font-serif-title text-2xl font-bold text-[#ede4d3]">
                  Pé de <span className="text-[#c88a3d]">Manga</span>
                </h3>
                <span className="text-xs text-[#cabfa9] font-medium">
                  Choperia & Música ao Vivo · Doutor Camargo - PR
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#cabfa9] leading-relaxed max-w-sm">
              Choperia ao ar livre com clima aconchegante, gastronomia de bar completa, pizzas artesanais e os melhores shows ao vivo da região.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ede4d3]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#agenda" className="hover:text-[#c88a3d] transition-colors">
                  Agenda de Shows
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#c88a3d] transition-colors">
                  Cardápio Completo & Bebidas
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#c88a3d] transition-colors">
                  Galeria de Fotos Reais
                </a>
              </li>
              <li>
                <a href="#reserva" className="hover:text-[#c88a3d] transition-colors">
                  Reserva de Mesas
                </a>
              </li>
              <li>
                <a href="#local" className="hover:text-[#c88a3d] transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ede4d3]">
              Atendimento & Contato
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c88a3d] shrink-0 mt-0.5" />
                <span>{info.address}, {info.cityState}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c88a3d] shrink-0 mt-0.5" />
                <span>{info.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c88a3d] shrink-0" />
                <a
                  href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ede4d3]"
                >
                  {info.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#c88a3d] shrink-0" />
                <a
                  href={info.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#c88a3d] hover:underline"
                >
                  {info.instagramHandle} ({info.followers})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#cabfa9]/70">
          <p>© {new Date().getFullYear()} Pé de Manga — Choperia & Música ao Vivo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#c88a3d] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Painel do Dono</span>
            </button>
            <span>·</span>
            <span>Doutor Camargo — PR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
