import React, { useState } from 'react';
import { SiteInfo } from '../types';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Navigation, 
  ExternalLink, 
  MessageCircle, 
  Car, 
  Copy, 
  Check, 
  Compass,
  Sparkles
} from 'lucide-react';

interface LocationSectionProps {
  info: SiteInfo;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ info }) => {
  const [copiedType, setCopiedType] = useState<'address' | 'plusCode' | null>(null);

  const cleanPhone = info.whatsapp.replace(/\D/g, '');
  
  const fullAddress = `${info.address}, ${info.cityState}`;
  const plusCode = info.plusCode || "CQVH+CV Dr. Camargo, Paraná, Brasil";

  // Exact Google Maps business profile & GPS navigation links to "Pé de Manga":
  const googleMapsBusinessQuery = `Pé de Manga, ${info.address}, ${info.cityState}`;
  const googleMapsGpsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(googleMapsBusinessQuery)}`;
  const googleMapsProfileUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleMapsBusinessQuery)}`;
  const wazeGpsUrl = `https://waze.com/ul?q=${encodeURIComponent('Pé de Manga, ' + fullAddress)}&navigate=yes`;
  const appleMapsGpsUrl = `https://maps.apple.com/?q=${encodeURIComponent('Pé de Manga')}&daddr=${encodeURIComponent(fullAddress)}&dirflg=d`;

  const handleCopy = (text: string, type: 'address' | 'plusCode') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <section id="local" className="py-20 bg-[#17130f] border-t border-[#362a20] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c88a3d] tracking-wider uppercase mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Doutor Camargo — Paraná</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#ede4d3]">
              Como Chegar & Localização
            </h2>
          </div>
          <p className="text-[#cabfa9] text-sm sm:text-base max-w-md">
            Localização privilegiada no centro de Dr. Camargo. Use os botões abaixo para iniciar o trajeto direto no seu GPS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-6 bg-[#211a14] rounded-2xl border border-[#362a20] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Address with Copy */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8b2a2e]/20 border border-[#8b2a2e]/40 flex items-center justify-center shrink-0 text-[#e08a8d]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#ede4d3]">Endereço Oficial</h4>
                    <button
                      onClick={() => handleCopy(fullAddress, 'address')}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-[#2e2319] hover:bg-[#3d3023] text-[#c88a3d] border border-[#3d3023] transition-colors"
                      title="Copiar endereço completo"
                    >
                      {copiedType === 'address' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-[#ede4d3] font-medium mt-1">{info.address}</p>
                  <p className="text-xs text-[#c88a3d] mt-0.5">{info.cityState}</p>
                  
                  {/* Plus Code Badge */}
                  <div className="mt-2.5 pt-2 border-t border-[#362a20]/60 flex items-center justify-between text-xs text-[#cabfa9]/80">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#cabfa9]">
                      <Compass className="w-3.5 h-3.5 text-[#c88a3d]" />
                      <strong className="text-[#ede4d3]/90">Plus code:</strong> {plusCode}
                    </span>
                    <button
                      onClick={() => handleCopy(plusCode, 'plusCode')}
                      className="text-[11px] text-[#c88a3d] hover:underline"
                    >
                      {copiedType === 'plusCode' ? '✓ Copiado' : 'Copiar código'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c88a3d]/20 border border-[#c88a3d]/40 flex items-center justify-center shrink-0 text-[#c88a3d]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#ede4d3]">Dias & Horários</h4>
                  <p className="text-sm text-[#cabfa9] mt-0.5">{info.hours}</p>
                  <p className="text-xs text-[#cabfa9]/70 mt-0.5">Segunda-feira: Fechado para descanso da equipe</p>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3d5d42]/20 border border-[#3d5d42]/40 flex items-center justify-center shrink-0 text-[#8fbf95]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#ede4d3]">Contato & WhatsApp</h4>
                  <p className="text-sm text-[#cabfa9] mt-0.5">{info.phoneDisplay}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <a
                      href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas com o Pé de Manga.')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold shadow transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Oficial</span>
                    </a>
                    <a
                      href={info.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#c88a3d] hover:underline flex items-center gap-1"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>{info.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct In-Car & GPS Navigation Section */}
            <div className="pt-6 border-t border-[#362a20] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ede4d3]">
                <Car className="w-4 h-4 text-[#c88a3d]" />
                <span>Navegação Rápida no Carro / GPS:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Google Maps GPS Route */}
                <a
                  href={googleMapsGpsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#2a4530] to-[#1e3323] hover:from-[#35573d] hover:to-[#27422e] border border-emerald-500/40 text-sm text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <Navigation className="w-4 h-4 text-emerald-300 group-hover:animate-pulse" />
                  <span>GPS Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                {/* Waze GPS Route */}
                <a
                  href={wazeGpsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#1b3245] to-[#142330] hover:from-[#24425c] hover:to-[#1b3042] border border-sky-500/40 text-sm text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Car className="w-4 h-4 text-sky-300" />
                  <span>Navegar com Waze</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              <p className="text-[11px] text-center text-[#cabfa9]/70">
                🚗 Ao clicar no celular, seu aplicativo de GPS abrirá com a rota já calculada.
              </p>
            </div>
          </div>

          {/* Map Preview Frame */}
          <div className="lg:col-span-6 bg-[#211a14] rounded-2xl border border-[#362a20] overflow-hidden min-h-[420px] flex flex-col relative">
            {/* Google Verified Place Header */}
            <div className="p-3.5 sm:p-4 bg-[#1a140f] border-b border-[#362a20] flex items-center justify-between gap-3 text-xs text-[#ede4d3]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=120&auto=format&fit=crop&q=80"
                  alt="Pé de Manga Perfil Oficial Drink"
                  className="w-10 h-10 rounded-lg object-cover border border-[#c88a3d]/50 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-title font-bold text-sm sm:text-base text-[#ede4d3]">Pé de Manga</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-500/30">Oficial</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#cabfa9] mt-0.5">
                    <span className="font-bold text-amber-400">4,8</span>
                    <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                    <span>(47 avaliações no Google)</span>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#2e2319] hover:bg-[#3d3023] border border-[#c88a3d]/40 text-[#c88a3d] hover:text-[#ede4d3] text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                title="Abrir perfil verificado no Google Maps"
              >
                <span>Ver no Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Frame Embedded directly targeting Pé de Manga */}
            <iframe
              title="Mapa de localização oficial Pé de Manga Doutor Camargo"
              src={`https://maps.google.com/maps?q=${encodeURIComponent('Pé de Manga, Rua Xavier da Silva, 28, Doutor Camargo - PR')}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full min-h-[320px] border-0 grayscale-[10%] contrast-[105%]"
              loading="lazy"
              allowFullScreen
            />

            <div className="p-4 bg-[#17130f]/95 border-t border-[#362a20] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#cabfa9]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c88a3d] shrink-0" />
                <span className="text-[#ede4d3]">R. Xavier da Silva, 28 - Centro · Dr. Camargo</span>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={googleMapsGpsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg bg-[#c88a3d] hover:bg-[#b07832] text-[#17130f] font-bold transition-colors inline-flex items-center justify-center gap-1.5 shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota Direta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
