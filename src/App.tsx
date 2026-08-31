import React, { useState, useEffect } from 'react';
import { SiteData } from './types';
import { loadStoredData, saveStoredData, resetStoredData } from './utils';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgendaSection } from './components/AgendaSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { AdminModal } from './components/AdminModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [siteData, setSiteData] = useState<SiteData>(() => loadStoredData());
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [selectedShowForReservation, setSelectedShowForReservation] = useState<{
    title: string;
    date: string;
  }>({ title: '', date: '' });

  // Keep state synced with localStorage
  const handleSaveData = (newData: SiteData) => {
    setSiteData(newData);
    saveStoredData(newData);
  };

  const handleResetData = () => {
    const defaultData = resetStoredData();
    setSiteData(defaultData);
  };

  const handleOpenReservation = (presetShowTitle?: string, presetDate?: string) => {
    setSelectedShowForReservation({
      title: presetShowTitle || '',
      date: presetDate || '',
    });
    setReservationModalOpen(true);
  };

  const nextShow = siteData.events[0];

  return (
    <div className="min-h-screen bg-[#17130f] text-[#ede4d3] flex flex-col selection:bg-[#8b2a2e] selection:text-white">
      {/* Navigation */}
      <Navbar
        info={siteData.info}
        onOpenAdmin={() => setAdminModalOpen(true)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          info={siteData.info}
          onOpenReservation={() => handleOpenReservation(nextShow?.title, nextShow ? `${nextShow.day} ${nextShow.month}` : undefined)}
          nextShowTitle={nextShow?.title}
          nextShowDate={nextShow ? `${nextShow.day} ${nextShow.month}` : undefined}
        />

        {/* Agenda Section */}
        <AgendaSection
          events={siteData.events}
          onSelectEventForReservation={(title, date) => handleOpenReservation(title, date)}
          whatsappNumber={siteData.info.whatsapp}
        />

        {/* Gallery / Real Photos Section */}
        <GallerySection
          photos={siteData.gallery}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Menu Section */}
        <MenuSection
          menu={siteData.menu}
          whatsappNumber={siteData.info.whatsapp}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Reservation Section */}
        <ReservationSection
          info={siteData.info}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* Location & Schedule Section */}
        <LocationSection info={siteData.info} />
      </main>

      {/* Footer */}
      <Footer
        info={siteData.info}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        whatsappNumber={siteData.info.whatsapp}
        presetShowTitle={selectedShowForReservation.title}
        presetDate={selectedShowForReservation.date}
      />

      {/* Interactive Admin / Owner Panel Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        siteData={siteData}
        onSaveData={handleSaveData}
        onResetData={handleResetData}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp
        phone={siteData.info.whatsapp}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Mobile-First Bottom Navigation Bar */}
      <MobileBottomNav
        onOpenReservation={() => handleOpenReservation()}
        whatsappNumber={siteData.info.whatsapp}
      />
    </div>
  );
}
