import React from 'react';
import { SiteInfo } from '../types';
import { Calendar, Utensils, MapPin, Clock, Star, Users, Music2, Sparkles, ChevronDown, MessageCircle } from 'lucide-react';
import heroBgImage from '../assets/images/pe_de_manga_hero_1788202603851.jpg';

interface HeroProps {
  info: SiteInfo;
  onOpenReservation: () => void;
  nextShowTitle?: string;
  nextShowDate?: string;
}

export const Hero: React.FC<HeroProps> = ({
  info,
  onOpenReservation,
  nextShowTitle = 'Voz e Violão — Rock Nacional & MPB',
  nextShowDate = 'Próxima Sexta, 20h30',
}) => {
  const cleanPhone = info.whatsapp.replace(/\D/g, '');

  return (
    <header className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#17130f]">
      {/* Background Image with Dark Warm Gradient Overlay matching the iconic wood log wall & ambient lighting */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('${heroBgImage}')`,
        }}
      />

      {/* Radial Warm Lighting Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17130f] via-[#17130f]/80 to-[#17130f]/60" />
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#c88a3d]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-[#8b2a2e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Live Banner Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#211a14]/90 border border-[#c88a3d]/30 text-[#c88a3d] text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#8b2a2e] ring-4 ring-[#8b2a2e]/30 animate-pulse"></span>
          <span>Bar ao ar livre em {info.cityState}</span>
          <span className="text-[#362a20]">|</span>
          <span className="hidden sm:inline text-[#cabfa9] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#c88a3d]" /> Shows ao vivo toda semana
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ede4d3] leading-[1.08] max-w-3xl">
          Música ao vivo, <em className="italic text-[#c88a3d] not-italic">chopp gelado</em> e a mesa certa te esperando.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#cabfa9] max-w-2xl mt-5 font-normal leading-relaxed">
          A noite é boa quando tem gente boa por perto -- garanta seu lugar com antecedência para curtir a noite com conforto.
        </p>

        {/* Highlight Card: Next Show */}
        {nextShowTitle && (
          <div className="mt-8 inline-flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-xl bg-[#211a14]/80 border border-[#362a20] backdrop-blur-md max-w-xl">
            <div className="w-10 h-10 rounded-lg bg-[#8b2a2e]/20 border border-[#8b2a2e]/40 flex items-center justify-center shrink-0">
              <Music2 className="w-5 h-5 text-[#c88a3d]" />
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-[#c88a3d] font-semibold flex items-center gap-1.5">
                <span>Próximo Show</span>
                <span className="w-1 h-1 rounded-full bg-[#c88a3d]"></span>
                <span className="text-[#cabfa9]">{nextShowDate}</span>
              </div>
              <p className="text-sm font-medium text-[#ede4d3] line-clamp-1">{nextShowTitle}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <button
            onClick={onOpenReservation}
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-[#ede4d3] font-semibold text-base shadow-xl shadow-[#8b2a2e]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-emerald-300" />
            <span>Reservar Mesa para o Show</span>
          </button>

          <a
            href="#cardapio"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-transparent hover:bg-[#211a14] text-[#ede4d3] border border-[#362a20] hover:border-[#c88a3d] font-semibold text-base transition-all"
          >
            <Utensils className="w-5 h-5 text-[#c88a3d]" />
            <span>Ver Cardápio Completo</span>
          </a>

          <a
            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Olá! Gostaria de informações e atendimento no Pé de Manga.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white border border-emerald-500/40 font-semibold text-base transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-emerald-300" />
            <span>WhatsApp (+55 44 8843-8747)</span>
          </a>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-14 border-t border-[#362a20]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#211a14] border border-[#362a20] text-[#c88a3d]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#cabfa9]/80 font-medium">Atendimento</span>
              <strong className="font-serif-title text-sm sm:text-base font-semibold text-[#ede4d3]">
                {info.hours}
              </strong>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#211a14] border border-[#362a20] text-[#c88a3d]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#cabfa9]/80 font-medium">Endereço</span>
              <strong className="font-serif-title text-sm sm:text-base font-semibold text-[#ede4d3]">
                {info.address}, {info.cityState.split('—')[0]}
              </strong>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#211a14] border border-[#362a20] text-[#c88a3d]">
              <Star className="w-4 h-4 fill-[#c88a3d]" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[#cabfa9]/80 font-medium">Avaliação & Comunidade</span>
              <strong className="font-serif-title text-sm sm:text-base font-semibold text-[#ede4d3]">
                {info.googleRating} · {info.followers}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex justify-center mt-6">
        <a
          href="#agenda"
          className="flex flex-col items-center gap-1 text-xs text-[#cabfa9] hover:text-[#c88a3d] transition-colors"
        >
          <span>Conheça a programação</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c88a3d]" />
        </a>
      </div>
    </header>
  );
};
