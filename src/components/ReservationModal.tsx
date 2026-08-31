import React, { useState, useEffect } from 'react';
import { buildWhatsAppReservationUrl } from '../utils';
import { X, Calendar, Clock, Users, MapPin, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  presetShowTitle?: string;
  presetDate?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
  presetShowTitle = '',
  presetDate = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('4');
  const [showTitle, setShowTitle] = useState('');
  const [seatingPreference, setSeatingPreference] = useState('Perto do palco');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (presetShowTitle) setShowTitle(presetShowTitle);
    if (presetDate) setDate(presetDate);
  }, [presetShowTitle, presetDate]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullNotes = [
      seatingPreference ? `Preferência: ${seatingPreference}` : '',
      notes ? notes : '',
    ]
      .filter(Boolean)
      .join(' · ');

    const url = buildWhatsAppReservationUrl({
      phone: whatsappNumber,
      name,
      guests,
      date,
      time,
      showTitle,
      notes: fullNotes,
    });

    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#211a14] border border-[#362a20] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#17130f] border border-[#362a20] text-[#cabfa9] hover:text-[#ede4d3] hover:border-[#c88a3d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#8b2a2e]/20 text-[#e08a8d] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mesa Garantida</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#ede4d3]">
            Reservar Mesa no Pé de Manga
          </h3>
          <p className="text-xs sm:text-sm text-[#cabfa9] mt-1">
            Preencha os detalhes e enviaremos seu pedido direto para o WhatsApp da casa para confirmação imediata.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Show Highlight if preset */}
          {showTitle && (
            <div className="p-3 rounded-lg bg-[#17130f] border border-[#c88a3d]/40 flex items-center justify-between gap-2">
              <div className="text-xs">
                <span className="text-[#c88a3d] font-semibold block">Show Selecionado:</span>
                <span className="text-[#ede4d3] font-medium">{showTitle}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowTitle('')}
                className="text-[11px] text-[#cabfa9] hover:text-[#e08a8d] underline"
              >
                Remover
              </button>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Seu Nome *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] placeholder-[#cabfa9]/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Seu WhatsApp (com DDD)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(44) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] placeholder-[#cabfa9]/40 focus:outline-none"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Data Desejada *</label>
              <input
                type="text"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Ex: Próxima Sexta ou 12/09"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] placeholder-[#cabfa9]/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Horário Previsto de Chegada</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] focus:outline-none"
              >
                <option value="18:00">18h00 (Happy Hour)</option>
                <option value="19:00">19h00</option>
                <option value="19:30">19h30</option>
                <option value="20:00">20h00 (Recomendado)</option>
                <option value="20:30">20h30</option>
                <option value="21:00">21h00</option>
                <option value="21:30">21h30</option>
              </select>
            </div>
          </div>

          {/* Guests & Seating Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Quantidade de Pessoas</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] focus:outline-none"
              >
                <option value="1 a 2 pessoas">1 a 2 pessoas (Casal / Individual)</option>
                <option value="3 a 4 pessoas">3 a 4 pessoas</option>
                <option value="5 a 6 pessoas">5 a 6 pessoas</option>
                <option value="7 a 8 pessoas">7 a 8 pessoas</option>
                <option value="9 a 12 pessoas">9 a 12 pessoas (Mesa Grande)</option>
                <option value="Mais de 15 pessoas">Mais de 15 pessoas (Comemoração)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">Preferência de Local</label>
              <select
                value={seatingPreference}
                onChange={(e) => setSeatingPreference(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] focus:outline-none"
              >
                <option value="Perto do palco">Perto do palco (Mais animado)</option>
                <option value="Deck externo ao ar livre">Deck externo ao ar livre</option>
                <option value="Espaço coberto aconchegante">Espaço coberto aconchegante</option>
                <option value="Comemoração de Aniversário">Comemoração de Aniversário 🎂</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-[#cabfa9] mb-1">Observações ou Pedidos Especiais</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Levaremos bolo de aniversário, ou cadeira para criança..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] placeholder-[#cabfa9]/40 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar Reserva pelo WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-[#cabfa9]/80 mt-2">
              Você será direcionado diretamente ao WhatsApp do Pé de Manga com sua mensagem preenchida.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
