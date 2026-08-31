import React, { useState } from 'react';
import { SiteData, EventItem, MenuItem, GalleryPhoto } from '../types';
import {
  X,
  Lock,
  Calendar,
  Utensils,
  Camera,
  Settings,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Image as ImageIcon,
  KeyRound,
  ExternalLink,
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteData: SiteData;
  onSaveData: (newData: SiteData) => void;
  onResetData: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  siteData,
  onSaveData,
  onResetData,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'agenda' | 'menu' | 'gallery' | 'settings'>('agenda');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Editable local copies
  const [events, setEvents] = useState<EventItem[]>(siteData.events);
  const [menu, setMenu] = useState<Record<string, MenuItem[]>>(siteData.menu);
  const [gallery, setGallery] = useState<GalleryPhoto[]>(siteData.gallery);
  const [info, setInfo] = useState(siteData.info);

  // New Event Form State
  const [evDay, setEvDay] = useState('');
  const [evMonth, setEvMonth] = useState('');
  const [evTitle, setEvTitle] = useState('');
  const [evDetail, setEvDetail] = useState('');
  const [evStatus, setEvStatus] = useState<'open' | 'limited'>('open');
  const [evGenre, setEvGenre] = useState('');
  const [evTime, setEvTime] = useState('');

  // New Menu Item Form State
  const [menuCat, setMenuCat] = useState(Object.keys(siteData.menu)[0] || 'Pizzas salgadas');
  const [newCatName, setNewCatName] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [itemHighlight, setItemHighlight] = useState(false);

  // New Gallery Photo Form State
  const [galUrl, setGalUrl] = useState('');
  const [galCaption, setGalCaption] = useState('');

  if (!isOpen) return null;

  const currentPassword = siteData.info.adminPassword || 'pedemanga2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === currentPassword) {
      setIsAuthenticated(true);
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const notifySave = () => {
    setSaveSuccessMsg('Alterações salvas com sucesso!');
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  // --- EVENTS HANDLERS ---
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!evDay.trim() || !evTitle.trim()) {
      alert('Preencha pelo menos o dia e o título do show.');
      return;
    }

    const newEv: EventItem = {
      id: 'e_' + Date.now(),
      day: evDay.trim(),
      month: evMonth.trim() || 'SET · SEX',
      title: evTitle.trim(),
      detail: evDetail.trim() || 'A partir das 20h · Mesas e pista',
      status: evStatus,
      genre: evGenre.trim(),
      time: evTime.trim() || '20h30',
    };

    const updated = [newEv, ...events];
    setEvents(updated);
    const updatedData = { ...siteData, events: updated };
    onSaveData(updatedData);

    setEvDay('');
    setEvMonth('');
    setEvTitle('');
    setEvDetail('');
    setEvGenre('');
    setEvTime('');
    notifySave();
  };

  const handleRemoveEvent = (id: string) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    onSaveData({ ...siteData, events: updated });
    notifySave();
  };

  // --- MENU HANDLERS ---
  const handleAddMenuItem = (e: React.FormEvent) => {
    e.preventDefault();
    let targetCategory = menuCat;
    if (menuCat === '__NEW__') {
      if (!newCatName.trim()) {
        alert('Digite o nome da nova categoria');
        return;
      }
      targetCategory = newCatName.trim();
    }

    if (!itemName.trim() || !itemPrice.trim()) {
      alert('Preencha o nome e o preço do item.');
      return;
    }

    const newItem: MenuItem = {
      id: 'm_' + Date.now(),
      name: itemName.trim(),
      price: itemPrice.trim(),
      description: itemDesc.trim(),
      isHighlight: itemHighlight,
    };

    const updatedMenu = { ...menu };
    if (!updatedMenu[targetCategory]) {
      updatedMenu[targetCategory] = [];
    }
    updatedMenu[targetCategory] = [...updatedMenu[targetCategory], newItem];

    setMenu(updatedMenu);
    onSaveData({ ...siteData, menu: updatedMenu });

    setItemName('');
    setItemPrice('');
    setItemDesc('');
    setItemHighlight(false);
    setNewCatName('');
    if (menuCat === '__NEW__') setMenuCat(targetCategory);
    notifySave();
  };

  const handleRemoveMenuItem = (category: string, itemId: string) => {
    const updatedMenu = { ...menu };
    if (updatedMenu[category]) {
      updatedMenu[category] = updatedMenu[category].filter((it) => it.id !== itemId);
      if (updatedMenu[category].length === 0) {
        delete updatedMenu[category];
      }
      setMenu(updatedMenu);
      onSaveData({ ...siteData, menu: updatedMenu });
      notifySave();
    }
  };

  // --- GALLERY HANDLERS ---
  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galUrl.trim()) {
      alert('Cole o link da imagem ou faça upload.');
      return;
    }

    const newPhoto: GalleryPhoto = {
      id: 'g_' + Date.now(),
      url: galUrl.trim(),
      caption: galCaption.trim() || 'Foto do Pé de Manga',
    };

    const updated = [newPhoto, ...gallery];
    setGallery(updated);
    onSaveData({ ...siteData, gallery: updated });

    setGalUrl('');
    setGalCaption('');
    notifySave();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGalUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveGalleryPhoto = (id: string) => {
    const updated = gallery.filter((g) => g.id !== id);
    setGallery(updated);
    onSaveData({ ...siteData, gallery: updated });
    notifySave();
  };

  // --- SETTINGS HANDLERS ---
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveData({
      ...siteData,
      info,
      events,
      menu,
      gallery,
    });
    notifySave();
  };

  const handleResetAll = () => {
    if (
      confirm(
        'Tem certeza que deseja restaurar as informações originais de fábrica do Pé de Manga?'
      )
    ) {
      onResetData();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {!isAuthenticated ? (
        /* LOGIN BOX */
        <div
          className="bg-[#211a14] border border-[#362a20] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#17130f] border border-[#362a20] text-[#cabfa9] hover:text-[#ede4d3]"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#8b2a2e]/20 border border-[#8b2a2e]/40 flex items-center justify-center mx-auto mb-3 text-[#c88a3d]">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#ede4d3]">
              Área do Proprietário
            </h3>
            <p className="text-xs text-[#cabfa9] mt-1">
              Gerencie a agenda de shows, itens do cardápio e fotos da casa.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#cabfa9] mb-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Digite a senha de administrador"
                className="w-full px-4 py-3 rounded-lg bg-[#17130f] border border-[#362a20] focus:border-[#c88a3d] text-sm text-[#ede4d3] focus:outline-none"
              />
            </div>

            {loginError && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#8b2a2e]/20 border border-[#8b2a2e]/50 text-xs text-[#e08a8d]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Senha incorreta. Tente novamente.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-white font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Entrar no Painel
            </button>

            <div className="p-3 rounded-lg bg-[#17130f]/80 border border-[#362a20] text-center text-xs text-[#cabfa9]">
              Senha padrão de demonstração:{' '}
              <strong className="text-[#c88a3d] font-mono">pedemanga2026</strong>
            </div>
          </form>
        </div>
      ) : (
        /* ADMIN DASHBOARD PANEL */
        <div
          className="bg-[#211a14] border border-[#362a20] rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative my-6 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#362a20] mb-6">
            <div>
              <h3 className="font-serif-title text-2xl font-bold text-[#ede4d3] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#c88a3d]" />
                <span>Painel de Controle — Pé de Manga</span>
              </h3>
              <p className="text-xs text-[#cabfa9]">
                Todas as alterações são salvas e refletem imediatamente para os visitantes.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#17130f] border border-[#362a20] text-[#cabfa9] hover:text-[#ede4d3]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success Banner */}
          {saveSuccessMsg && (
            <div className="mb-4 p-3 rounded-lg bg-[#3d5d42]/30 border border-[#3d5d42]/60 text-[#8fbf95] text-xs font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 border-b border-[#362a20] pb-3 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('agenda')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'agenda'
                  ? 'bg-[#c88a3d] text-[#17130f] font-bold'
                  : 'text-[#cabfa9] hover:text-[#ede4d3] bg-[#17130f]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Agenda de Shows ({events.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'menu'
                  ? 'bg-[#c88a3d] text-[#17130f] font-bold'
                  : 'text-[#cabfa9] hover:text-[#ede4d3] bg-[#17130f]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Cardápio ({Object.keys(menu).length} categorias)</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#c88a3d] text-[#17130f] font-bold'
                  : 'text-[#cabfa9] hover:text-[#ede4d3] bg-[#17130f]'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Galeria ({gallery.length} fotos)</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#c88a3d] text-[#17130f] font-bold'
                  : 'text-[#cabfa9] hover:text-[#ede4d3] bg-[#17130f]'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Configurações</span>
            </button>
          </div>

          {/* TAB 1: AGENDA */}
          {activeTab === 'agenda' && (
            <div className="space-y-6">
              {/* Add Event Form */}
              <form
                onSubmit={handleAddEvent}
                className="p-4 sm:p-5 rounded-xl bg-[#17130f] border border-[#362a20] space-y-4"
              >
                <h4 className="font-serif-title text-base font-bold text-[#c88a3d] flex items-center gap-1.5">
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Novo Show / Evento</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Dia (Ex: 05)</label>
                    <input
                      type="text"
                      required
                      value={evDay}
                      onChange={(e) => setEvDay(e.target.value)}
                      placeholder="05"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Mês / Dia (Ex: SET · SEX)</label>
                    <input
                      type="text"
                      value={evMonth}
                      onChange={(e) => setEvMonth(e.target.value)}
                      placeholder="SET · SEX"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Horário (Ex: 20h30)</label>
                    <input
                      type="text"
                      value={evTime}
                      onChange={(e) => setEvTime(e.target.value)}
                      placeholder="20h30"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Status das Mesas</label>
                    <select
                      value={evStatus}
                      onChange={(e) => setEvStatus(e.target.value as any)}
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    >
                      <option value="open">Mesas Disponíveis</option>
                      <option value="limited">Poucas Mesas</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Título do Evento / Atração *</label>
                    <input
                      type="text"
                      required
                      value={evTitle}
                      onChange={(e) => setEvTitle(e.target.value)}
                      placeholder="Ex: Voz e violão — clássicos do rock nacional"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Gênero / Estilo</label>
                    <input
                      type="text"
                      value={evGenre}
                      onChange={(e) => setEvGenre(e.target.value)}
                      placeholder="Ex: MPB / Rock"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#cabfa9] mb-1">Detalhes do Evento</label>
                  <input
                    type="text"
                    value={evDetail}
                    onChange={(e) => setEvDetail(e.target.value)}
                    placeholder="Ex: A partir das 20h30 · Pista ao ar livre + mesas cobertas"
                    className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar à Agenda</span>
                </button>
              </form>

              {/* Existing Events List */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#cabfa9]">
                  Shows Atuais no Ar ({events.length})
                </h4>
                <div className="divide-y divide-[#362a20] border border-[#362a20] rounded-xl overflow-hidden bg-[#17130f]">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-3 sm:p-4 flex items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-serif-title font-bold text-[#c88a3d] text-base">
                          {ev.day} {ev.month}
                        </span>
                        <div>
                          <p className="font-semibold text-[#ede4d3]">{ev.title}</p>
                          <p className="text-[11px] text-[#cabfa9]">{ev.detail}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveEvent(ev.id)}
                        className="p-1.5 text-[#e08a8d] hover:bg-[#8b2a2e]/30 rounded transition-colors"
                        title="Remover evento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MENU */}
          {activeTab === 'menu' && (
            <div className="space-y-6">
              {/* Add Menu Item Form */}
              <form
                onSubmit={handleAddMenuItem}
                className="p-4 sm:p-5 rounded-xl bg-[#17130f] border border-[#362a20] space-y-4"
              >
                <h4 className="font-serif-title text-base font-bold text-[#c88a3d] flex items-center gap-1.5">
                  <Plus className="w-4 h-4" />
                  <span>Adicionar Prato / Bebida ao Cardápio</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Categoria</label>
                    <select
                      value={menuCat}
                      onChange={(e) => setMenuCat(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    >
                      {Object.keys(menu).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                      <option value="__NEW__">+ Criar Nova Categoria...</option>
                    </select>
                  </div>

                  {menuCat === '__NEW__' && (
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-[#c88a3d] mb-1">
                        Nome da Nova Categoria *
                      </label>
                      <input
                        type="text"
                        required
                        value={newCatName}
                        onChange={(e) => setNewCatName(e.target.value)}
                        placeholder="Ex: Sobremesas Artesanais"
                        className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#c88a3d] text-sm text-[#ede4d3] focus:outline-none"
                      />
                    </div>
                  )}

                  <div className={menuCat === '__NEW__' ? 'sm:col-span-3' : 'sm:col-span-2'}>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Nome do Item *</label>
                    <input
                      type="text"
                      required
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="Ex: Calabresa Especial"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Preço *</label>
                    <input
                      type="text"
                      required
                      value={itemPrice}
                      onChange={(e) => setItemPrice(e.target.value)}
                      placeholder="Ex: R$ 49,90 ou M R$64,90 · G R$73,90"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-[#cabfa9] mb-1">
                      Descrição / Ingredientes
                    </label>
                    <input
                      type="text"
                      value={itemDesc}
                      onChange={(e) => setItemDesc(e.target.value)}
                      placeholder="Ex: Molho caseiro, queijo mussarela, orégano fresco..."
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="highlight"
                    checked={itemHighlight}
                    onChange={(e) => setItemHighlight(e.target.checked)}
                    className="rounded border-[#362a20] text-[#c88a3d]"
                  />
                  <label htmlFor="highlight" className="text-xs text-[#ede4d3] cursor-pointer">
                    Marcar como prato destaque / mais pedido 🔥
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar ao Cardápio</span>
                </button>
              </form>

              {/* Current Menu Items by Category */}
              <div className="space-y-4">
                {(Object.entries(menu) as [string, MenuItem[]][]).map(([category, items]) => (
                  <div
                    key={category}
                    className="border border-[#362a20] rounded-xl overflow-hidden bg-[#17130f]"
                  >
                    <div className="px-4 py-2.5 bg-[#211a14] border-b border-[#362a20] font-serif-title font-bold text-sm text-[#c88a3d]">
                      {category} ({(items || []).length})
                    </div>
                    <div className="divide-y divide-[#362a20]/60">
                      {(items || []).map((it: MenuItem) => (
                        <div
                          key={it.id}
                          className="p-3 flex items-center justify-between gap-3 text-xs sm:text-sm"
                        >
                          <div>
                            <div className="font-semibold text-[#ede4d3]">
                              {it.name} <span className="text-[#c88a3d] ml-2">{it.price}</span>
                            </div>
                            {it.description && (
                              <p className="text-[11px] text-[#cabfa9]">{it.description}</p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveMenuItem(category, it.id)}
                            className="p-1.5 text-[#e08a8d] hover:bg-[#8b2a2e]/30 rounded transition-colors"
                            title="Excluir item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              {/* Add Photo Form */}
              <form
                onSubmit={handleAddGalleryItem}
                className="p-4 sm:p-5 rounded-xl bg-[#17130f] border border-[#362a20] space-y-4"
              >
                <h4 className="font-serif-title text-base font-bold text-[#c88a3d] flex items-center gap-1.5">
                  <Camera className="w-4 h-4" />
                  <span>Adicionar Foto Real do Local ou Eventos</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">
                      Link da Imagem (URL da internet ou rede social)
                    </label>
                    <input
                      type="url"
                      value={galUrl}
                      onChange={(e) => setGalUrl(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">
                      Ou Envie uma Foto do seu Dispositivo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="w-full text-xs text-[#cabfa9] file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#362a20] file:text-[#ede4d3] hover:file:bg-[#c88a3d] hover:file:text-[#17130f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#cabfa9] mb-1">Legenda da Foto</label>
                  <input
                    type="text"
                    value={galCaption}
                    onChange={(e) => setGalCaption(e.target.value)}
                    placeholder="Ex: Show de Sexta — Deck Lotado"
                    className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                  />
                </div>

                {galUrl && (
                  <div className="flex items-center gap-3 p-2 bg-[#211a14] rounded-lg border border-[#362a20]">
                    <img
                      src={galUrl}
                      alt="Prévia"
                      className="w-12 h-12 rounded object-cover border border-[#362a20]"
                    />
                    <span className="text-xs text-[#8fbf95] font-medium">
                      Prévia carregada com sucesso!
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#8b2a2e] hover:bg-[#a63237] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar à Galeria</span>
                </button>
              </form>

              {/* Existing Photos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative group rounded-lg overflow-hidden bg-[#17130f] border border-[#362a20] aspect-video flex flex-col justify-end p-2"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <button
                      onClick={() => handleRemoveGalleryPhoto(photo.id)}
                      className="absolute top-2 right-2 p-1.5 rounded bg-black/70 text-[#e08a8d] hover:bg-red-700 hover:text-white transition-colors"
                      title="Excluir foto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="relative z-10 text-[11px] font-medium text-white truncate">
                      {photo.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="p-4 rounded-xl bg-[#17130f] border border-[#362a20] space-y-4">
                <h4 className="font-serif-title text-base font-bold text-[#c88a3d]">
                  Informações de Contato e Horários
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">
                      WhatsApp para Reservas (apenas números com DDD)
                    </label>
                    <input
                      type="text"
                      value={info.whatsapp}
                      onChange={(e) => setInfo({ ...info, whatsapp: e.target.value })}
                      placeholder="554488438747"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">
                      Telefone / Exibição Visual
                    </label>
                    <input
                      type="text"
                      value={info.phoneDisplay}
                      onChange={(e) => setInfo({ ...info, phoneDisplay: e.target.value })}
                      placeholder="+55 (44) 8843-8747"
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Endereço</label>
                    <input
                      type="text"
                      value={info.address}
                      onChange={(e) => setInfo({ ...info, address: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#cabfa9] mb-1">Cidade / Estado / CEP</label>
                    <input
                      type="text"
                      value={info.cityState}
                      onChange={(e) => setInfo({ ...info, cityState: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#cabfa9] mb-1">Plus Code (Google Maps)</label>
                  <input
                    type="text"
                    value={info.plusCode || ''}
                    onChange={(e) => setInfo({ ...info, plusCode: e.target.value })}
                    placeholder="CQVH+CV Dr. Camargo, Paraná, Brasil"
                    className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#cabfa9] mb-1">Dias e Horários</label>
                  <input
                    type="text"
                    value={info.hours}
                    onChange={(e) => setInfo({ ...info, hours: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#cabfa9] mb-1">
                    Senha do Painel Administrativo
                  </label>
                  <input
                    type="text"
                    value={info.adminPassword}
                    onChange={(e) => setInfo({ ...info, adminPassword: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-[#211a14] border border-[#362a20] text-sm text-[#ede4d3] focus:outline-none font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#c88a3d] hover:bg-[#b0752d] text-[#17130f] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar Configurações</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetAll}
                    className="px-4 py-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-800/40 text-red-300 text-xs font-medium flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restaurar Padrões de Fábrica</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
