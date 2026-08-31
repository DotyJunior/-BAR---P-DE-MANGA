import { SiteData } from './types';
import { DEFAULT_SITE_DATA } from './data/defaultData';

const STORAGE_KEY = 'pedemanga_site_data_v5';

export function loadStoredData(): SiteData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SITE_DATA;
    const parsed = JSON.parse(raw);
    return {
      info: { ...DEFAULT_SITE_DATA.info, ...(parsed.info || {}) },
      events: Array.isArray(parsed.events) ? parsed.events : DEFAULT_SITE_DATA.events,
      menu: parsed.menu && typeof parsed.menu === 'object' ? parsed.menu : DEFAULT_SITE_DATA.menu,
      gallery: Array.isArray(parsed.gallery) ? parsed.gallery : DEFAULT_SITE_DATA.gallery,
    };
  } catch (err) {
    console.error('Failed to load stored site data', err);
    return DEFAULT_SITE_DATA;
  }
}

export function saveStoredData(data: SiteData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error('Failed to save site data to localStorage', err);
    return false;
  }
}

export function resetStoredData(): SiteData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_SITE_DATA;
}

export function buildWhatsAppReservationUrl(params: {
  phone: string;
  name?: string;
  guests?: number | string;
  date?: string;
  time?: string;
  showTitle?: string;
  notes?: string;
}): string {
  const cleanPhone = params.phone.replace(/\D/g, '');
  let message = `Olá, Pé de Manga! Gostaria de reservar uma mesa.`;

  if (params.name) {
    message += `\n👤 *Nome:* ${params.name}`;
  }
  if (params.guests) {
    message += `\n👥 *Pessoas:* ${params.guests}`;
  }
  if (params.date) {
    message += `\n📅 *Data:* ${params.date}`;
  }
  if (params.time) {
    message += `\n⏰ *Horário:* ${params.time}`;
  }
  if (params.showTitle) {
    message += `\n🎸 *Show:* ${params.showTitle}`;
  }
  if (params.notes) {
    message += `\n📝 *Observações:* ${params.notes}`;
  }

  message += `\n\nPor favor, confirmam a disponibilidade? Obrigado!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildQuickWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
