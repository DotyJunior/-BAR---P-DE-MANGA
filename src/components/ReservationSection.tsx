import React from 'react';
import { SiteInfo } from '../types';
import { Calendar, PhoneCall, MessageCircle, Clock, Users, ShieldCheck } from 'lucide-react';

interface ReservationSectionProps {
  info: SiteInfo;
  onOpenReservation: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  info,
  onOpenReservation,
}) => {
  return (
    <section id="reserva" className="py-24 bg-gradient-to-b from-[#17130f] via-[#211a14] to-[#17130f] border-t border-[#362a20] relative overflow-hidden text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b2a2e]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c88a3d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b2a2e]/20 border border-[#8b2a2e]/40 text-[#e08a8d] text-xs font-semibold uppercase tracking-wider mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserva Antecipada</span>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#ede4d3] leading-tight">
          Sua mesa garantida para o próximo show.
        </h2>

        <p className="text-sm sm:text-lg text-[#cabfa9] max-w-2xl mx-auto mt-4 leading-relaxed">
          Chame no WhatsApp com a data, horário e número de pessoas. Confirmação rápida e direta com a equipe da casa!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8b2a2e] hover:bg-[#a63237] text-white font-bold text-base sm:text-lg shadow-xl shadow-[#8b2a2e]/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-emerald-300" />
            <span>Preencher Reserva de Mesa</span>
          </button>

          <a
            href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de reservar uma mesa no Pé de Manga para o próximo show.')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg shadow-xl shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Reservar pelo WhatsApp Direto</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#362a20]/80 text-xs text-[#cabfa9]">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#c88a3d]" />
            <span>Resposta rápida no WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users className="w-4 h-4 text-[#c88a3d]" />
            <span>Mesas individuais, casais ou grupos</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c88a3d]" />
            <span>Sem taxas adicionais de reserva</span>
          </div>
        </div>
      </div>
    </section>
  );
};
