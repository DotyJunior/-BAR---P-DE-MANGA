import React, { useState } from 'react';
import { MessageCircle, X, Calendar, Utensils, HelpCircle, PhoneCall } from 'lucide-react';
import { LOGO_BASE64 } from '../data/defaultData';

interface FloatingWhatsAppProps {
  phone: string;
  onOpenReservation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phone,
  onOpenReservation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = phone.replace(/\D/g, '');

  const openWhatsAppWithMessage = (text: string) => {
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Interactive Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#211a14] border border-[#362a20] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#8b2a2e] text-[#ede4d3] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_BASE64}
                alt="Pé de Manga"
                className="w-9 h-9 rounded-full object-cover border border-white/30"
              />
              <div>
                <h4 className="font-serif-title font-bold text-sm leading-tight">Pé de Manga</h4>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Atendimento Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-black/20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#17130f]">
            <div className="p-3 rounded-xl bg-[#211a14] border border-[#362a20] text-xs text-[#ede4d3] leading-relaxed">
              Olá! 👋 Seja bem-vindo ao Pé de Manga! Como podemos te ajudar hoje?
            </div>

            {/* Quick Option Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenReservation();
                }}
                className="w-full text-left px-3.5 py-2.5 rounded-lg bg-[#211a14] hover:bg-[#362a20] border border-[#362a20] hover:border-[#c88a3d]/50 text-xs text-[#ede4d3] font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#c88a3d]" />
                <span>Reservar mesa para o próximo show</span>
              </button>

              <button
                onClick={() =>
                  openWhatsAppWithMessage(
                    'Olá! Gostaria de consultar o cardápio e valores das porções e pizzas do Pé de Manga.'
                  )
                }
                className="w-full text-left px-3.5 py-2.5 rounded-lg bg-[#211a14] hover:bg-[#362a20] border border-[#362a20] hover:border-[#c88a3d]/50 text-xs text-[#ede4d3] font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#c88a3d]" />
                <span>Cardápio, chopes e pedidos</span>
              </button>

              <button
                onClick={() =>
                  openWhatsAppWithMessage(
                    'Olá! Gostaria de tirar uma dúvida sobre os horários e eventos do Pé de Manga.'
                  )
                }
                className="w-full text-left px-3.5 py-2.5 rounded-lg bg-[#211a14] hover:bg-[#362a20] border border-[#362a20] hover:border-[#c88a3d]/50 text-xs text-[#ede4d3] font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#c88a3d]" />
                <span>Falar com atendente agora</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-500/40"
        aria-label="Atendimento via WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-700 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-700"></span>
        </div>
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          WhatsApp da Casa
        </span>
      </button>
    </div>
  );
};
