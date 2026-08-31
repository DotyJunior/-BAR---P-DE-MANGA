import React from 'react';
import { Home, Calendar, Utensils, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenReservation: () => void;
  whatsappNumber: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenReservation,
  whatsappNumber,
}) => {
  const cleanPhone = whatsappNumber.replace(/\D/g, '');

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#17130f]/95 backdrop-blur-md border-t border-[#362a20] px-2 py-2 flex items-center justify-around shadow-2xl">
      <a
        href="#"
        className="flex flex-col items-center gap-0.5 text-[#cabfa9] hover:text-[#c88a3d] p-1.5 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium">Início</span>
      </a>

      <a
        href="#agenda"
        className="flex flex-col items-center gap-0.5 text-[#cabfa9] hover:text-[#c88a3d] p-1.5 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[10px] font-medium">Shows</span>
      </a>

      {/* Main reservation button */}
      <button
        onClick={onOpenReservation}
        className="flex flex-col items-center justify-center -mt-5 w-13 h-13 rounded-full bg-[#8b2a2e] text-white shadow-xl shadow-[#8b2a2e]/50 border-2 border-[#17130f] active:scale-95 transition-transform"
      >
        <Calendar className="w-6 h-6 text-emerald-300" />
        <span className="text-[8px] font-bold uppercase mt-0.5">Reservar</span>
      </button>

      <a
        href="#cardapio"
        className="flex flex-col items-center gap-0.5 text-[#cabfa9] hover:text-[#c88a3d] p-1.5 transition-colors"
      >
        <Utensils className="w-5 h-5" />
        <span className="text-[10px] font-medium">Cardápio</span>
      </a>

      <a
        href={`https://wa.me/${cleanPhone}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-0.5 text-emerald-400 hover:text-emerald-300 p-1.5 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-[10px] font-medium">Whats</span>
      </a>
    </div>
  );
};
