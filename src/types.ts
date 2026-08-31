export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  detail: string;
  status: 'open' | 'limited' | 'soldout';
  time?: string;
  artist?: string;
  genre?: string;
}

export interface MenuItem {
  id: string;
  number?: string | number;
  name: string;
  price: string;
  priceM?: string;
  priceG?: string;
  description?: string;
  imageUrl?: string;
  badge?: string;
  isHighlight?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  note?: string;
  items: MenuItem[];
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category?: 'shows' | 'ambiente' | 'gastronomia' | 'bar';
}

export interface SiteInfo {
  name: string;
  tagline: string;
  address: string;
  cityState: string;
  cep?: string;
  plusCode?: string;
  whatsapp: string;
  phoneDisplay: string;
  instagram: string;
  instagramHandle: string;
  hours: string;
  googleRating: string;
  followers: string;
  adminPassword?: string;
}

export interface SiteData {
  info: SiteInfo;
  events: EventItem[];
  menu: Record<string, MenuItem[]>;
  gallery: GalleryPhoto[];
}
