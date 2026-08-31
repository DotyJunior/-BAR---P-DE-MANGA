import React from 'react';
import { EventItem } from '../types';
import { Calendar, Clock, Music, AlertCircle, CheckCircle2, Flame, ArrowRight, MessageSquare } from 'lucide-react';

interface AgendaSectionProps {
  events: EventItem[];
  onSelectEventForReservation: (eventTitle: string, eventDate: string) => void;
  whatsappNumber: string;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({
  events,
  onSelectEventForReservation,
  whatsappNumber,
}) => {
  return (
    <section id="agenda" className="py-20 bg-[#17130f] border-t border-[#362a20] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c88a3d] tracking-wider uppercase mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Programação Semanal</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#ede4d3]">
              Próximos Shows & Eventos
            </h2>
          </div>
          <p className="text-[#cabfa9] text-sm sm:text-base max-w-md">
            Confirme sua mesa com antecedência — nas noites de show ao vivo, a casa costuma lotar cedo.
          </p>
        </div>

        {/* Agenda List */}
        {events.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#211a14] rounded-xl border border-[#362a20]">
            <Music className="w-12 h-12 text-[#c88a3d]/50 mx-auto mb-3" />
            <h3 className="font-serif-title text-xl text-[#ede4d3] font-semibold">Nenhum show cadastrado no momento</h3>
            <p className="text-sm text-[#cabfa9] mt-1 max-w-sm mx-auto">
              Estamos fechando a agenda dos próximos fins de semana. Acompanhe nossas redes ou reserve sua mesa livre!
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#362a20] border-y border-[#362a20]">
            {events.map((ev, index) => {
              const isOpen = ev.status === 'open';
              const isLimited = ev.status === 'limited';

              return (
                <div
                  key={ev.id || index}
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group hover:bg-[#211a14]/40 px-3 sm:px-4 rounded-lg transition-colors"
                >
                  {/* Date Column */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#211a14] border border-[#362a20] group-hover:border-[#c88a3d]/50 flex flex-col items-center justify-center text-center shadow-inner transition-colors">
                      <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#c88a3d] leading-none">
                        {ev.day}
                      </span>
                      <small className="text-[10px] sm:text-xs font-semibold text-[#cabfa9] uppercase tracking-wider mt-1">
                        {ev.month}
                      </small>
                    </div>
                    <div className="md:hidden">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          isOpen
                            ? 'bg-[#3d5d42]/30 text-[#8fbf95] border border-[#3d5d42]/60'
                            : 'bg-[#8b2a2e]/30 text-[#e08a8d] border border-[#8b2a2e]/60'
                        }`}
                      >
                        {isOpen ? <CheckCircle2 className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
                        {isOpen ? 'Mesas disponíveis' : 'Poucas mesas'}
                      </span>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="md:col-span-6 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {ev.genre && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#362a20] text-[#cabfa9]">
                          {ev.genre}
                        </span>
                      )}
                      {ev.time && (
                        <span className="text-xs text-[#cabfa9] flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3 text-[#c88a3d]" /> Início: {ev.time}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#ede4d3] group-hover:text-[#c88a3d] transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#cabfa9] leading-relaxed">
                      {ev.detail}
                    </p>
                  </div>

                  {/* Action Column */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between gap-3 pt-2 md:pt-0">
                    <div className="hidden md:block">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold ${
                          isOpen
                            ? 'bg-[#3d5d42]/20 text-[#8fbf95] border border-[#3d5d42]/50'
                            : 'bg-[#8b2a2e]/20 text-[#e08a8d] border border-[#8b2a2e]/50'
                        }`}
                      >
                        {isOpen ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Flame className="w-3.5 h-3.5 text-amber-400" />}
                        {isOpen ? 'Mesas Disponíveis' : 'Poucas Mesas!'}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectEventForReservation(ev.title, `${ev.day} ${ev.month}`)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#8b2a2e]/20 active:scale-95 cursor-pointer"
                    >
                      <span>Garantir Mesa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Musician Banner Call to action */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#211a14] via-[#2a1e16] to-[#211a14] border border-[#362a20] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c88a3d]/20 border border-[#c88a3d]/40 flex items-center justify-center shrink-0 text-[#c88a3d]">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#ede4d3]">
                É músico, banda ou quer comemorar seu aniversário com a gente?
              </h4>
              <p className="text-xs sm:text-sm text-[#cabfa9]">
                Temos condições especiais para aniversariantes e agenda aberta para novos talentos.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de informações sobre apresentações musicais e eventos no Pé de Manga.')}`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#211a14] hover:bg-[#362a20] border border-[#c88a3d]/60 text-[#c88a3d] hover:text-[#ede4d3] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
