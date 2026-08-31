import React, { useState } from 'react';
import { GalleryPhoto } from '../types';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GallerySectionProps {
  photos: GalleryPhoto[];
  onOpenReservation: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  photos,
  onOpenReservation,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-[#211a14] border-t border-[#362a20] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c88a3d] tracking-wider uppercase mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Ambiente & Clima</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#ede4d3]">
              A Casa Lotada & Fotos Reais
            </h2>
          </div>
          <p className="text-[#cabfa9] text-sm sm:text-base max-w-md">
            Espaço rústico e acolhedor ao ar livre, iluminação cênica, chopp trincando e noites memoráveis de música ao vivo.
          </p>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => {
            return (
              <div
                key={photo.id || index}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer bg-[#17130f] border border-[#362a20] shadow-md transition-all duration-300 hover:border-[#c88a3d]"
              >
                {/* Image */}
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // fallback if link is broken
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130f] via-[#17130f]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom Icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#17130f]/80 border border-[#362a20] flex items-center justify-center text-[#ede4d3] opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption & Category at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <p className="font-serif-title text-sm sm:text-base font-semibold text-[#ede4d3] group-hover:text-[#c88a3d] transition-colors leading-snug">
                    {photo.caption}
                  </p>
                  <span className="text-[11px] text-[#cabfa9] opacity-80 uppercase tracking-wider font-medium">
                    Pé de Manga · Doutor Camargo
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Note and Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#cabfa9] border-t border-[#362a20] pt-4">
          <p>
            📸 Fotos reais dos nossos eventos e pratos. Atualizadas frequentemente pelo dono no painel.
          </p>
          <button
            onClick={onOpenReservation}
            className="text-[#c88a3d] hover:text-[#ede4d3] font-semibold underline underline-offset-4 cursor-pointer"
          >
            Quer viver essa experiência? Garanta sua mesa →
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 p-3 rounded-full bg-[#211a14] border border-[#362a20] text-[#ede4d3] hover:text-[#c88a3d] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#211a14]/80 border border-[#362a20] text-[#ede4d3] hover:text-[#c88a3d] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#211a14]/80 border border-[#362a20] text-[#ede4d3] hover:text-[#c88a3d] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].url}
              alt={photos[selectedPhotoIndex].caption}
              className="max-h-[75vh] w-auto rounded-lg object-contain border border-[#362a20] shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="font-serif-title text-lg sm:text-xl font-bold text-[#ede4d3]">
                {photos[selectedPhotoIndex].caption}
              </h4>
              <p className="text-xs text-[#cabfa9] mt-1">
                Foto {selectedPhotoIndex + 1} de {photos.length} · Bar Pé de Manga
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
