import { SiteData } from '../types';

export const LOGO_BASE64 = "/logo.png";

export const DEFAULT_SITE_DATA: SiteData = {
  info: {
    name: "Pé de Manga",
    tagline: "Choperia & Música ao Vivo",
    address: "R. Xavier da Silva, 28 - Centro",
    cityState: "Dr. Camargo - PR, 87155-000, Brasil",
    cep: "87155-000",
    plusCode: "CQVH+CV Dr. Camargo, Paraná, Brasil",
    whatsapp: "554488438747",
    phoneDisplay: "(44) 8843-8747",
    instagram: "https://instagram.com/pedemanga.zaparoli",
    instagramHandle: "@pedemanga.zaparoli",
    hours: "Terça a domingo, a partir das 16h",
    googleRating: "4.8 no Google",
    followers: "+1.700 seguidores",
    adminPassword: "pedemanga2026"
  },
  events: [
    {
      id: "e1",
      day: "05",
      month: "SET · SEX",
      title: "Voz e violão — clássicos do rock nacional e MPB",
      detail: "A partir das 20h30 · Pista ao ar livre + mesas cobertas",
      status: "open",
      time: "20:30",
      genre: "Rock Nacional & MPB"
    },
    {
      id: "e2",
      day: "12",
      month: "SET · SEX",
      title: "Banda completa — Modão & Sertanejo Universitário",
      detail: "A partir das 21h · Noite especial com promoção de chopp",
      status: "limited",
      time: "21:00",
      genre: "Sertanejo Raiz & Atual"
    },
    {
      id: "e3",
      day: "19",
      month: "SET · SEX",
      title: "DJ Set & Acústico — Sunset, Drinks & Pop",
      detail: "A partir das 19h · Happy hour estendido e clima aconchegante",
      status: "open",
      time: "19:00",
      genre: "Pop Rock & Sunset Beats"
    },
    {
      id: "e4",
      day: "26",
      month: "SET · SEX",
      title: "Roda de Samba e Pagode no Deck",
      detail: "A partir das 19h30 · Ambiente aconchegante e área externa",
      status: "limited",
      time: "19:30",
      genre: "Samba & Pagode Retrô"
    }
  ],
  menu: {
    "Pizzas Salgadas": [
      {
        id: "p1",
        number: 1,
        name: "Atum",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Atum, Cebola e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        badge: "Tradicional"
      },
      {
        id: "p2",
        number: 2,
        name: "Alho e Óleo",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Alho e Óleo, Tomate e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p3",
        number: 3,
        name: "Bacon",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Bacon e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
        badge: "Favorito"
      },
      {
        id: "p4",
        number: 4,
        name: "Bacon com Alho",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Alho, Bacon e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p5",
        number: 5,
        name: "Bacon com Calabresa",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Bacon, Calabresa e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "p6",
        number: 6,
        name: "Brócolis",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Brócolis e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p7",
        number: 7,
        name: "Calabresa",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Calabresa e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "p8",
        number: 8,
        name: "Camarão",
        price: "M: R$ 74,90 | G: R$ 84,90",
        priceM: "R$ 74,90",
        priceG: "R$ 84,90",
        description: "Molho de Tomate, Mussarela, Camarão, Tomate em Rodelas, Catupiry e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        badge: "Especial",
        isHighlight: true
      },
      {
        id: "p9",
        number: 9,
        name: "Italiana",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Azeitonas Fatiadas, Frango Desfiado, Salame Italiano, Tomate, Catupiry, Mussarela e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p10",
        number: 10,
        name: "Frango com Catupiry",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Frango Desfiado, Catupiry e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "p11",
        number: 11,
        name: "Frango com Cheddar",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Frango, Cheddar e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p12",
        number: 12,
        name: "Frango com Bacon",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Frango, Bacon, Cheddar, Orégano e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p13",
        number: 13,
        name: "Doutor Camargo",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Frango Desfiado, Brócolis, Catupiry e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
        badge: "Homenagem à Cidade",
        isHighlight: true
      },
      {
        id: "p14",
        number: 14,
        name: "Lombo com Catupiry",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Lombinho, Catupiry e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p15",
        number: 15,
        name: "Moda da Casa",
        price: "M: R$ 74,90 | G: R$ 84,90",
        priceM: "R$ 74,90",
        priceG: "R$ 84,90",
        description: "Molho de Tomate, Mussarela, Catupiry, Calabresa, Frango Desfiado, Bacon, Ovo, Milho, Ervilha, Azeitona, Presunto, Cebola e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
        badge: "A Mais Completa",
        isHighlight: true
      },
      {
        id: "p16",
        number: 16,
        name: "Portuguesa",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Presunto, Ervilha, Ovos, Cebola, Tomate em Rodelas, Azeitonas e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "p17",
        number: 17,
        name: "Quatro Queijos",
        price: "M: R$ 74,90 | G: R$ 84,90",
        priceM: "R$ 74,90",
        priceG: "R$ 84,90",
        description: "Molho de Tomate, Mussarela, Provolone, Catupiry, Gorgonzola e Orégano.",
        imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "p18",
        number: 18,
        name: "Strogonoff de Boi",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Strogonoff de carne, Batata Palha e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80",
        badge: "Sucesso"
      },
      {
        id: "p19",
        number: 19,
        name: "Strogonoff de Frango",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de Tomate, Mussarela, Strogonoff De Frango, Batata Palha e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p20",
        number: 20,
        name: "Tarantela",
        price: "M: R$ 69,90 | G: R$ 74,90",
        priceM: "R$ 69,90",
        priceG: "R$ 74,90",
        description: "Molho de tomate, Mussarela, Bacon, Milho, Lombo, Tomate, Catupiry, Parmesão e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p21",
        number: 21,
        name: "Vegetariana",
        price: "M: R$ 64,90 | G: R$ 73,90",
        priceM: "R$ 64,90",
        priceG: "R$ 73,90",
        description: "Molho de Tomate, Mussarela, Milho, Ervilha, Brócolis, Palmito e Orégano",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
        badge: "Vegetariana"
      }
    ],
    "Pizzas Doces": [
      {
        id: "pd22",
        number: 22,
        name: "Abacaxi com Chocolate Branco",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Ganache Branco, Chocolate Branco e Abacaxi",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        badge: "Refrescante"
      },
      {
        id: "pd23",
        number: 23,
        name: "Brigadeiro",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Brigadeiro de Chocolate e Granulado",
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "pd24",
        number: 24,
        name: "Banana",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Banana, Chocolate Branco, Canela e Açúcar",
        imageUrl: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pd25",
        number: 25,
        name: "Chocolate Branco",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Ganache e Chocolate Branco",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pd26",
        number: 26,
        name: "Chocolate Preto",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Ganache e Chocolate Preto",
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pd27",
        number: 27,
        name: "Confete",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Ganache, Chocolate Preto e Confete",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        badge: "Favorito da Garotada"
      },
      {
        id: "pd28",
        number: 28,
        name: "Prestígio",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Ganache, Chocolate Preto e Coco Ralado",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pd29",
        number: 29,
        name: "Charge",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Chocolate ao leite, Doce de leite e Amendoim",
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "pd30",
        number: 30,
        name: "Sensação",
        price: "M: R$ 65,00 | G: R$ 70,00",
        priceM: "R$ 65,00",
        priceG: "R$ 70,00",
        description: "Chocolate Preto, Morango e Leite Condensado",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        badge: "Mais Pedida",
        isHighlight: true
      }
    ],
    "Fermentação Natural (35cm)": [
      {
        id: "fn1",
        number: 1,
        name: "Atum/Cebola",
        price: "R$ 70,00",
        description: "(muçarela, atum, cebola e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn2",
        number: 2,
        name: "Brócolis/Bacon",
        price: "R$ 70,00",
        description: "(muçarela, brócolis, bacon e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn3",
        number: 3,
        name: "Calabresa /Cebola Roxa",
        price: "R$ 70,00",
        description: "(muçarela, calabresa, cebola roxa e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "fn4",
        number: 4,
        name: "Camarão",
        price: "R$ 70,00",
        description: "(muçarela, camarão catupiry e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "fn5",
        number: 5,
        name: "Frango com Catupiry",
        price: "R$ 70,00",
        description: "(muçarela, frango, catupiry e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn6",
        number: 6,
        name: "Lombo com Abacaxi",
        price: "R$ 70,00",
        description: "(muçarela, lombo, abacaxi e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
        badge: "Agridoce"
      },
      {
        id: "fn7",
        number: 7,
        name: "Lombo com Catupiry",
        price: "R$ 70,00",
        description: "(muçarela, lombo, catupiry e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn8",
        number: 8,
        name: "Margherita",
        price: "R$ 70,00",
        description: "(muçarela, manjericão, tomate seco e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
        badge: "Clássica",
        isHighlight: true
      },
      {
        id: "fn9",
        number: 9,
        name: "Pepperoni",
        price: "R$ 70,00",
        description: "(muçarela, salame e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "fn10",
        number: 10,
        name: "Portuguesa",
        price: "R$ 70,00",
        description: "(muçarela, presunto, ervilha, azeitona, ovos, tomate, cebola e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn11",
        number: 11,
        name: "Quatro Queijos",
        price: "R$ 70,00",
        description: "(muçarela, gorgonzola, parmesão, catupiry e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn12",
        number: 12,
        name: "Strogonoff de Boi",
        price: "R$ 70,00",
        description: "(muçarela, strogonoff de boi, batata palha e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fn13",
        number: 13,
        name: "Vegetariana",
        price: "R$ 70,00",
        description: "(muçarela, milho, ervilha, brócolis e orégano)",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
        badge: "Vegetariana"
      },
      {
        id: "fn14",
        number: 14,
        name: "Banana / Chocolate Branco",
        price: "R$ 70,00",
        description: "(muçarela, banana e chocolate branco)",
        imageUrl: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80",
        badge: "Doce"
      },
      {
        id: "fn15",
        number: 15,
        name: "Chocolate Branco / Morango / Suspiro",
        price: "R$ 70,00",
        description: "(muçarela, chocolate branco, morangos e suspiros)",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        badge: "Doce Especial",
        isHighlight: true
      },
      {
        id: "fn16",
        number: 16,
        name: "Creme de Limão",
        price: "R$ 70,00",
        description: "(muçarela, creme de limão)",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80",
        badge: "Doce"
      },
      {
        id: "fn17",
        number: 17,
        name: "Romeu e Julieta",
        price: "R$ 70,00",
        description: "(muçarela e goiabada)",
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
        badge: "Doce Tradicional"
      }
    ],
    "Lanches & Cachorrão": [
      {
        id: "l1",
        name: "Baguete com Churrasco",
        price: "R$ 25,00",
        description: "Pão baguete, pasta de alho, tomate, cebola caramelizada, picanha e mussarela",
        imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
        badge: "Picanha",
        isHighlight: true
      },
      {
        id: "l2",
        name: "Baguete com Frango e Bacon",
        price: "R$ 25,00",
        description: "Pão de baguete, pasta de alho, frango em tiras, bacon e mussarela",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "l3",
        name: "Hambúrguer Simples",
        price: "R$ 25,00",
        description: "Pão brioche, molho de bacon, burger, queijo cheddar, mussarela e bacon (acompanha batata frita)",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        badge: "Acompanha Fritas",
        isHighlight: true
      },
      {
        id: "l4",
        name: "Hambúrguer Salada",
        price: "R$ 30,00",
        description: "Pão brioche, burger, bacon, queijo cheddar, mussarela, tomate e alface (acompanha batata frita)",
        imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
        badge: "Acompanha Fritas",
        isHighlight: true
      },
      {
        id: "l5",
        name: "Duplo de Frango (Cachorrão)",
        price: "R$ 22,00",
        description: "Pão, duas salsichas, frango desfiado, muçarela, tomate, alface, batata palha, maionese e ketchup",
        imageUrl: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80",
        badge: "2 Salsichas"
      },
      {
        id: "l6",
        name: "Duplo de Bacon (Cachorrão)",
        price: "R$ 22,00",
        description: "Pão, duas salsichas, bacon em cubos, muçarela, tomate, alface, batata palha, maionese e ketchup",
        imageUrl: "https://images.unsplash.com/photo-1627054234036-7c10b42f6e52?auto=format&fit=crop&w=600&q=80",
        badge: "2 Salsichas"
      },
      {
        id: "l7",
        name: "X da Casa",
        price: "R$ 30,00",
        description: "Pão, burguer artesanal, presunto, muçarela, frango, bacon, calabresa, alface, tomate e maionese",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        badge: "Super Completo",
        isHighlight: true
      }
    ],
    "Porções & Tábuas": [
      {
        id: "po1",
        name: "Anéis de Cebola",
        price: "R$ 35,00",
        description: "Anéis de cebola empanados e super crocantes",
        imageUrl: "https://images.unsplash.com/photo-1639024471287-032f66e04d45?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po2",
        name: "Batata Frita",
        price: "R$ 40,00",
        description: "Porção generosa de batata frita tradicional, dourada e sequinha",
        imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po3",
        name: "Batata Canoa",
        price: "R$ 45,00",
        description: "Corte rústico estilo canoa, crocante por fora e macia por dentro",
        imageUrl: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po4",
        name: "Batata com Queijo e Bacon",
        price: "R$ 49,90",
        description: "Batata frita crocante coberta com queijo derretido e cubos de bacon crocantes",
        imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        badge: "Mais Pedida",
        isHighlight: true
      },
      {
        id: "po5",
        name: "Filé de Frango",
        price: "R$ 45,00",
        description: "Iscas de filé de frango grelhadas ou empanadas e bem temperadas",
        imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po6",
        name: "Frango a Passarinho",
        price: "R$ 40,00",
        description: "Pedaços crocantes de frango frito com alho e tempero especial da casa",
        imageUrl: "https://images.unsplash.com/photo-1527477321005-4d45dec3002f?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "po7",
        name: "Frango a Passarinho com Cebola Seca",
        price: "R$ 49,90",
        description: "Frango a passarinho crocante servido com deliciosa cebola frita crocante",
        imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po8",
        name: "Mandioca Frita",
        price: "R$ 35,00",
        description: "Mandioca frita selecionada, crocante e cremosa",
        imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po9",
        name: "Queijo Frito",
        price: "R$ 45,00",
        description: "Cubos de queijo empanados e fritos no ponto perfeito",
        imageUrl: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po10",
        name: "Tilápia",
        price: "R$ 45,00",
        description: "Iscas de filé de tilápia fresca empanadas e douradas com limão",
        imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        isHighlight: true
      },
      {
        id: "po11",
        name: "Filé de Tilápia no Palito com Queijo",
        price: "R$ 49,90",
        description: "Espetinhos de filé de tilápia com queijo derretido",
        imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
        badge: "Especialidade",
        isHighlight: true
      },
      {
        id: "po12",
        name: "Frios",
        price: "R$ 45,00",
        description: "Muçarela em cubos, azeitonas selecionadas, ovos de codorna e salame",
        imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        badge: "Tira Gosto"
      },
      {
        id: "po13",
        name: "Costelinha de Tambaqui",
        price: "R$ 45,00",
        description: "Costelinhas de tambaqui fritas, sequinhas e muito saborosas",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po14",
        name: "Pururuca",
        price: "R$ 35,00",
        description: "Pururuca crocante e estaladiça, ótima pedida com chopp",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po15",
        name: "Mix de Salgadinhos",
        price: "R$ 45,00",
        description: "6 Bolinhos de Mandioca com Queijo e Bacon, 6 Bolinhos de Polenta com Queijo, 6 Kibes e 5 Bolinhos de Bacalhau",
        imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        badge: "23 Salgadinhos",
        isHighlight: true
      },
      {
        id: "po16",
        name: "Torresmo de Rolo",
        price: "R$ 30,00",
        description: "Torresmo de rolo crocante (acompanha: abacaxi apimentado, pasta de alho, mandioca e limão)",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        badge: "Campeão de Vendas",
        isHighlight: true
      },
      {
        id: "po17",
        name: "Tábua Sortida Suína",
        price: "R$ 80,00",
        description: "Mix carne suína, mandioca frita ou cozida, calabresa acebolada, maionese temperada e abacaxi com pimenta",
        imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        badge: "Para Compartilhar",
        isHighlight: true
      },
      {
        id: "po18",
        name: "Tábua Sortida de Frango",
        price: "R$ 80,00",
        description: "Frango a passarinho, batata frita canoa, calabresa acebolada, maionese temperada e abacaxi com pimenta",
        imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        badge: "Para Compartilhar",
        isHighlight: true
      },
      {
        id: "po19",
        name: "Tábua Sortida Bovina",
        price: "R$ 95,00",
        description: "Carne bovina, batata frita canoa, calabresa acebolada, maionese temperada e abacaxi com pimenta",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        badge: "Mais Completa da Casa",
        isHighlight: true
      },
      {
        id: "po20",
        name: "Mandioca Cozida ou Mandioca Frita (Acompanhamento)",
        price: "R$ 10,00",
        description: "Porção individual extra de mandioca cozida ou frita",
        imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "po21",
        name: "Batata Frita (Acompanhamento)",
        price: "R$ 10,00",
        description: "Porção individual extra de batata frita tradicional",
        imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "Batata Assada Recheada (Qua e Qui)": [
      {
        id: "b1",
        name: "Bacon com Brócolis",
        price: "R$ 30,00",
        description: "Molho Branco, Bacon, Brócolis e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta"
      },
      {
        id: "b2",
        name: "Bolonhesa",
        price: "R$ 30,00",
        description: "Molho Branco, Carne Moída e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta"
      },
      {
        id: "b3",
        name: "Camarão",
        price: "R$ 35,00",
        description: "Molho Branco, Camarão e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta",
        isHighlight: true
      },
      {
        id: "b4",
        name: "Quatro Queijos",
        price: "R$ 32,00",
        description: "Molho Branco, Provolone, Parmesão, Catupiry e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta"
      },
      {
        id: "b5",
        name: "Strogonoff de Carne",
        price: "R$ 30,00",
        description: "Molho Branco, Strogonoff de Carne, Batata Palha e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta",
        isHighlight: true
      },
      {
        id: "b6",
        name: "Strogonoff de Frango",
        price: "R$ 30,00",
        description: "Molho Branco, Strogonoff de Frango, Batata Palha e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta"
      },
      {
        id: "b7",
        name: "Vegetariana",
        price: "R$ 30,00",
        description: "Molho Branco, Brócolis, Palmito, Milho e Mussarela",
        imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
        badge: "Quarta e Quinta"
      }
    ]
  },
  gallery: [
    {
      id: "g1",
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
      caption: "Música ao vivo e casa lotada todo fim de semana",
      category: "shows"
    },
    {
      id: "g2",
      url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
      caption: "Pizzas artesanais assadas na hora com queijo no ponto",
      category: "gastronomia"
    },
    {
      id: "g3",
      url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
      caption: "Chopp geladíssimo e ambiente descontraído",
      category: "bar"
    },
    {
      id: "g4",
      url: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80",
      caption: "Porções generosas e tábuas completas para compartilhar",
      category: "gastronomia"
    },
    {
      id: "g5",
      url: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=900&q=80",
      caption: "Chopp trincando de gelado direto da torneira",
      category: "bar"
    },
    {
      id: "g6",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
      caption: "Área externa ao ar livre sob iluminação aconchegante",
      category: "ambiente"
    }
  ]
};
