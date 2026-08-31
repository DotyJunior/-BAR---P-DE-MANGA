import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import {
  Utensils,
  Search,
  Flame,
  MessageCircle,
  Info,
  Pizza,
  Sparkles,
  Layers,
  Clock,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface MenuSectionProps {
  menu: Record<string, MenuItem[]>;
  whatsappNumber: string;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  menu,
  whatsappNumber,
  onOpenReservation,
}) => {
  const categories = useMemo(() => Object.keys(menu), [menu]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');

  // Category specific icons & helper notes
  const categoryMeta: Record<string, { icon: string; note?: string; badge?: string }> = {
    "Pizzas Salgadas": {
      icon: "🍕",
      badge: "21 Sabores",
      note: "Bordas recheadas (Catupiry, Cheddar ou Chocolate): +R$ 9,00 | Acréscimo de sabores: +R$ 5,00",
    },
    "Pizzas Doces": {
      icon: "🍫",
      badge: "9 Sabores",
      note: "Massa leve e farta cobertura com chocolates nobres e frutas selecionadas.",
    },
    "Fermentação Natural (35cm)": {
      icon: "🌾",
      badge: "Pizza 35cm · R$ 70,00",
      note: "Massa artesanal de longa fermentação natural. Escolha até 2 sabores para 1 pizza!",
    },
    "Lanches & Cachorrão": {
      icon: "🍔",
      badge: "Artesanal",
      note: "Hambúrgueres acompanham batata frita crocante! Adicionais de lanches: +R$ 5,00",
    },
    "Porções & Tábuas": {
      icon: "🍟",
      badge: "Para Compartilhar",
      note: "Porções generosas e tábuas completas acompanhadas de molhos e guarnições da casa.",
    },
    "Batata Assada Recheada (Qua e Qui)": {
      icon: "🥔",
      badge: "Quartas & Quintas",
      note: "Disponível exclusivamente às Quartas e Quintas-Feiras com molho branco especial.",
    },
  };

  // Filter items
  const filteredMenu = useMemo(() => {
    const result: Record<string, MenuItem[]> = {};

    (Object.entries(menu) as [string, MenuItem[]][]).forEach(([catName, items]) => {
      if (activeCategory !== 'all' && activeCategory !== catName) {
        return;
      }

      const filteredItems = (items || []).filter((item: MenuItem) => {
        // Tag filter
        if (selectedTag === 'destaques' && !item.isHighlight) return false;
        if (selectedTag === 'bacon' && !item.name.toLowerCase().includes('bacon') && !item.description?.toLowerCase().includes('bacon')) return false;
        if (selectedTag === 'frango' && !item.name.toLowerCase().includes('frango') && !item.description?.toLowerCase().includes('frango')) return false;
        if (selectedTag === 'carne' && !item.name.toLowerCase().includes('carne') && !item.name.toLowerCase().includes('picanha') && !item.name.toLowerCase().includes('churrasco') && !item.description?.toLowerCase().includes('carne') && !item.description?.toLowerCase().includes('picanha')) return false;
        if (selectedTag === 'peixe' && !item.name.toLowerCase().includes('tilápia') && !item.name.toLowerCase().includes('tambaqui') && !item.name.toLowerCase().includes('camarão') && !item.name.toLowerCase().includes('atum') && !item.name.toLowerCase().includes('bacalhau')) return false;
        if (selectedTag === 'vegetariana' && !item.name.toLowerCase().includes('vegetariana') && !item.badge?.toLowerCase().includes('vegetariana') && !item.description?.toLowerCase().includes('brócolis')) return false;

        // Search query
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase().trim();
        const numberMatch = item.number ? item.number.toString() === q || `#${item.number}` === q : false;
        const nameMatch = item.name.toLowerCase().includes(q);
        const descMatch = item.description ? item.description.toLowerCase().includes(q) : false;
        const catMatch = catName.toLowerCase().includes(q);

        return numberMatch || nameMatch || descMatch || catMatch;
      });

      if (filteredItems.length > 0) {
        result[catName] = filteredItems;
      }
    });

    return result;
  }, [menu, activeCategory, searchQuery, selectedTag]);

  const totalItemsCount = useMemo(() => {
    return (Object.values(filteredMenu) as MenuItem[][]).reduce(
      (acc, curr) => acc + (curr ? curr.length : 0),
      0
    );
  }, [filteredMenu]);

  const handleOrderWhatsApp = (itemName: string, price: string, catName: string) => {
    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    const message = `Olá, Pé de Manga! Gostaria de pedir: *${itemName}* (${price}) do cardápio de *${catName}*.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cardapio" className="py-20 bg-[#140f0b] border-t border-[#31251b] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c88a3d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b2a2e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#2b1f16] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c88a3d] tracking-wider uppercase mb-2 bg-[#251a13] px-3 py-1 rounded-full border border-[#433123]">
              <Utensils className="w-3.5 h-3.5" />
              <span>Cardápio Oficial Bar & Restaurante</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#ede4d3]">
              Sabores do Pé de Manga
            </h2>
            <p className="text-[#cabfa9] text-sm sm:text-base mt-2 max-w-xl">
              Pizzas artesanais, fermentação natural, lanches na baguete e brioche, porções fartas e batatas recheadas feitas na hora com ingredientes selecionados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de consultar o cardápio e fazer um pedido no Pé de Manga.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir pelo WhatsApp</span>
            </a>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8b2a2e] hover:bg-[#a63237] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <span>Reservar Mesa</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="space-y-4 mb-8">
          {/* Search bar & quick filter tags */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#cabfa9] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nome, número (#15), ingrediente (camarão, bacon, picanha)..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#1e1610] border border-[#3b2b1f] focus:border-[#c88a3d] text-sm text-[#ede4d3] placeholder-[#cabfa9]/50 focus:outline-none transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#cabfa9] hover:text-[#ede4d3] bg-[#2d2016] px-2 py-1 rounded"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Quick Filter Tag Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedTag('todos')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'todos'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedTag('destaques')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${
                  selectedTag === 'destaques'
                    ? 'bg-[#8b2a2e] text-white'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-400" />
                Destaques
              </button>
              <button
                onClick={() => setSelectedTag('bacon')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'bacon'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                🥓 Com Bacon
              </button>
              <button
                onClick={() => setSelectedTag('frango')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'frango'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                🍗 Frango
              </button>
              <button
                onClick={() => setSelectedTag('carne')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'carne'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                🥩 Carne / Picanha
              </button>
              <button
                onClick={() => setSelectedTag('peixe')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'peixe'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                🍤 Tilápia & Camarão
              </button>
              <button
                onClick={() => setSelectedTag('vegetariana')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTag === 'vegetariana'
                    ? 'bg-[#c88a3d] text-[#140f0b]'
                    : 'bg-[#1e1610] text-[#cabfa9] hover:text-[#ede4d3] border border-[#36261b]'
                }`}
              >
                🌱 Vegetarianas
              </button>
            </div>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-br from-[#c88a3d] to-[#9b6826] text-[#140f0b] border-[#c88a3d] shadow-lg shadow-[#c88a3d]/20 font-bold'
                  : 'bg-[#1a120c] text-[#ede4d3] border-[#31251b] hover:border-[#c88a3d]/50 hover:bg-[#231911]'
              }`}
            >
              <div className="flex items-center justify-between text-xs opacity-90 mb-1">
                <span>🍽️ Cardápio</span>
                <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">TUDO</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold truncate">
                Ver Todas as Opções
              </div>
            </button>

            {categories.map((cat) => {
              const meta = categoryMeta[cat] || { icon: "🍴" };
              const count = (menu[cat] || []).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-br from-[#c88a3d] to-[#9b6826] text-[#140f0b] border-[#c88a3d] shadow-lg shadow-[#c88a3d]/20 font-bold'
                      : 'bg-[#1a120c] text-[#ede4d3] border-[#31251b] hover:border-[#c88a3d]/50 hover:bg-[#231911]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs opacity-90 mb-1">
                    <span className="text-base">{meta.icon}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isActive ? 'bg-black/20 text-[#140f0b]' : 'bg-[#2b1f16] text-[#cabfa9]'}`}>
                      {count}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold truncate" title={cat}>
                    {cat}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Specific Notice Banner */}
        {activeCategory !== 'all' && categoryMeta[activeCategory]?.note && (
          <div className="mb-8 p-4 rounded-xl bg-[#231810] border border-[#523a27] flex items-start gap-3 text-xs sm:text-sm text-[#ede4d3]">
            <Info className="w-5 h-5 text-[#c88a3d] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#c88a3d] font-semibold block sm:inline mr-2">
                Informação da categoria:
              </strong>
              <span>{categoryMeta[activeCategory]?.note}</span>
            </div>
          </div>
        )}

        {/* Global Notice Callout for Pizzas & Accompaniments */}
        {activeCategory === 'all' && (
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#1e150e] border border-[#3b2b1f] text-xs text-[#cabfa9] flex items-center gap-3">
              <span className="text-xl">🧀</span>
              <div>
                <strong className="text-[#ede4d3] block">Bordas Recheadas (+R$ 9,00)</strong>
                <span>Catupiry, Cheddar ou Chocolate nas pizzas salgadas.</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1e150e] border border-[#3b2b1f] text-xs text-[#cabfa9] flex items-center gap-3">
              <span className="text-xl">🌾</span>
              <div>
                <strong className="text-[#ede4d3] block">Fermentação Natural (35cm)</strong>
                <span>R$ 70,00 — Escolha até 2 sabores por pizza.</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1e150e] border border-[#3b2b1f] text-xs text-[#cabfa9] flex items-center gap-3">
              <span className="text-xl">🥔</span>
              <div>
                <strong className="text-[#ede4d3] block">Batatas Assadas Recheadas</strong>
                <span>Servidas exclusivamente às Quartas e Quintas-feiras.</span>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items Container */}
        {totalItemsCount === 0 ? (
          <div className="text-center py-16 px-4 bg-[#1b130d] rounded-2xl border border-[#31251b]">
            <Utensils className="w-12 h-12 text-[#cabfa9]/40 mx-auto mb-3" />
            <h3 className="font-serif-title text-xl text-[#ede4d3] font-semibold">Nenhum item encontrado</h3>
            <p className="text-sm text-[#cabfa9] mt-1 max-w-md mx-auto">
              Não encontramos nenhum prato correspondente a "{searchQuery}". Tente usar outro termo ou clique em "Todos".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('todos');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#c88a3d] text-[#140f0b] rounded-lg text-xs font-bold hover:bg-[#dba154]"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {(Object.entries(filteredMenu) as [string, MenuItem[]][]).map(([categoryName, items]) => {
              const meta = categoryMeta[categoryName] || { icon: "🍴" };

              return (
                <div key={categoryName} className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#36271c] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{meta.icon}</span>
                      <div>
                        <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#c88a3d]">
                          {categoryName}
                        </h3>
                        {meta.note && (
                          <p className="text-xs text-[#cabfa9] mt-0.5">{meta.note}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#cabfa9] bg-[#201710] px-3 py-1 rounded-full border border-[#3b2b1f] self-start sm:self-auto">
                      {items.length} {items.length === 1 ? 'item' : 'itens'}
                    </span>
                  </div>

                  {/* Responsive Grid of Cards with Illustrative Food Photos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        className="bg-[#1c140e] rounded-2xl border border-[#31251b] hover:border-[#c88a3d]/60 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col group"
                      >
                        {/* Illustrative Food Image */}
                        <div className="relative h-44 w-full overflow-hidden bg-[#2a1c13]">
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#24170f] text-[#cabfa9]">
                              <Utensils className="w-8 h-8 opacity-40" />
                            </div>
                          )}

                          {/* Gradient overlay for text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1c140e] via-transparent to-black/40" />

                          {/* Number Badge (From PDF 1..30) */}
                          {item.number && (
                            <div className="absolute top-3 left-3 bg-[#140f0b]/90 backdrop-blur-sm text-[#c88a3d] font-bold text-xs px-2.5 py-1 rounded-lg border border-[#c88a3d]/50 font-mono shadow-md">
                              #{item.number}
                            </div>
                          )}

                          {/* Highlight / Special Badge */}
                          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                            {item.isHighlight && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#8b2a2e] text-white shadow-md">
                                <Flame className="w-3 h-3 text-amber-300" /> Destaque
                              </span>
                            )}
                            {item.badge && !item.isHighlight && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#2e1f14]/90 text-[#ede4d3] border border-[#523927] backdrop-blur-sm">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Quick Price on Bottom Right of Photo */}
                          <div className="absolute bottom-2.5 right-3 bg-[#140f0b]/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#3b2b1f] shadow-lg">
                            <span className="font-serif-title text-sm sm:text-base font-bold text-[#c88a3d]">
                              {item.price}
                            </span>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                          <div>
                            <h4 className="font-serif-title text-lg font-bold text-[#ede4d3] group-hover:text-[#c88a3d] transition-colors leading-snug">
                              {item.name}
                            </h4>

                            {item.description && (
                              <p className="text-xs sm:text-sm text-[#cabfa9] mt-2 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Sizes Breakdown if available */}
                          {(item.priceM || item.priceG) && (
                            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2b1f16] text-xs">
                              {item.priceM && (
                                <div className="bg-[#140f0b] p-2 rounded-lg border border-[#2e2015] text-center">
                                  <span className="text-[#cabfa9] text-[10px] block">Média (M)</span>
                                  <strong className="text-[#ede4d3] font-semibold">{item.priceM}</strong>
                                </div>
                              )}
                              {item.priceG && (
                                <div className="bg-[#140f0b] p-2 rounded-lg border border-[#2e2015] text-center">
                                  <span className="text-[#cabfa9] text-[10px] block">Grande (G)</span>
                                  <strong className="text-[#c88a3d] font-semibold">{item.priceG}</strong>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Action Button: WhatsApp Order */}
                          <button
                            onClick={() => handleOrderWhatsApp(item.name, item.price, categoryName)}
                            className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#271b12] hover:bg-[#342418] border border-[#433123] hover:border-[#c88a3d]/50 text-xs sm:text-sm font-semibold text-[#ede4d3] hover:text-[#c88a3d] transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                            <span>Pedir no WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Call to Action */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#231810] via-[#1c130d] to-[#140f0b] border border-[#3b2b1f] text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#c88a3d]/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#ede4d3]">
            Obrigado pela preferência e bom apetite!
          </h3>
          <p className="text-xs sm:text-sm text-[#cabfa9] mt-2 max-w-lg mx-auto">
            Atendimento em Doutor Camargo — PR. Faça seu pedido antecipado ou reserve sua mesa para curtir com a família e amigos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-xl bg-[#8b2a2e] hover:bg-[#a63237] text-white font-semibold text-sm shadow-lg transition-all cursor-pointer"
            >
              Reservar Mesa no Pé de Manga
            </button>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido no Pé de Manga.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#1e150e] hover:bg-[#2e2016] border border-[#c88a3d]/60 text-[#c88a3d] font-semibold text-sm transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +55 (44) 8843-8747</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
