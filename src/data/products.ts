import { Product, Testimonial } from "@/types";

export const products: Product[] = [
  { id: 1, name: "Bleu de Chanel", brand: "CHANEL", category: "homme", price: 89, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop", description: "Fragrance boisée aromatique — l'élégance moderne signée Chanel.", notes: "Pamplemousse, gingembre, santal, cèdre", popularity: 95 },
  { id: 2, name: "Sauvage", brand: "DIOR", category: "homme", price: 82, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop", description: "Fraîcheur radicale, notes minérales et ambrées.", notes: "Bergamote, poivre, ambroxan", popularity: 92 },
  { id: 3, name: "Aventus", brand: "CREED", category: "homme", price: 195, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop", description: "Légendaire fragrance boisée fruitée — le parfum des leaders.", notes: "Ananas, cassis, bouleau, musc", popularity: 98 },
  { id: 4, name: "Noir Extreme", brand: "TOM FORD", category: "homme", price: 145, image: "https://images.unsplash.com/photo-1619994403078-b1e314f6e2e2?w=400&auto=format&fit=crop", description: "Oriental gourmand intense au caractère audacieux.", notes: "Cardamome, noix de muscade, vanille, bois de santal", popularity: 88 },
  { id: 5, name: "Coco Mademoiselle", brand: "CHANEL", category: "femme", price: 95, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&auto=format&fit=crop", description: "Floral oriental frais et sensuel — l'esprit libre de Chanel.", notes: "Orange, jasmin, rose, patchouli, vétiver", popularity: 94 },
  { id: 6, name: "Miss Dior", brand: "DIOR", category: "femme", price: 88, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&auto=format&fit=crop", description: "Bouquet floral ambré — la promesse du bonheur signée Dior.", notes: "Rose, muguet, ambre, patchouli", popularity: 90 },
  { id: 7, name: "Gypsy Water", brand: "BYREDO", category: "femme", price: 130, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop", description: "Fragrance boisée poivrée — l'esprit bohème et libre.", notes: "Bergamote, genévrier, pin, ambre, santal", popularity: 82 },
  { id: 8, name: "Black Opium", brand: "YSL", category: "femme", price: 79, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&auto=format&fit=crop", description: "Café floral blanc — le côté obscur de la séduction.", notes: "Café, vanille, fleur d'oranger, patchouli", popularity: 91 },
  { id: 9, name: "La Nuit Trésor", brand: "LANCÔME", category: "femme", price: 76, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop", description: "Rose orientale — une déclaration d'amour intense.", notes: "Rose, poivre rose, vanille, praline, encens", popularity: 78 },
  { id: 10, name: "Baccarat Rouge 540", brand: "MFK", category: "niche", price: 240, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop", description: "Chef-d'œuvre olfactif ambré minéral — le parfum culte.", notes: "Safran, ambre, cèdre, résine de sapin", popularity: 99 },
  { id: 11, name: "Wood Sage & Sea Salt", brand: "JO MALONE", category: "niche", price: 110, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop", description: "Fragrance minérale boisée — l'évasion au bord de mer.", notes: "Sauge, sel marin, algue, bois de cèdre", popularity: 80 },
  { id: 12, name: "Light Blue", brand: "VERSACE", category: "femme", price: 68, image: "https://images.unsplash.com/photo-1619994403078-b1e314f6e2e2?w=400&auto=format&fit=crop", description: "Fraîcheur méditerranéenne — le soleil en flacon.", notes: "Citron, pomme, cèdre, ambre, musc", popularity: 85 },
  { id: 13, name: "Fahrenheit", brand: "DIOR", category: "homme", price: 74, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop", description: "Cuir floral — l'audace iconique de Dior.", notes: "Violette, muscade, cuir, encens", popularity: 76 },
  { id: 14, name: "Tobacco Vanille", brand: "TOM FORD", category: "niche", price: 165, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop", description: "Oriental gourmand — tabac blond, vanille, cacao.", notes: "Tabac, vanille, cacao, fruits secs", popularity: 93 },
  { id: 15, name: "Acqua di Giò", brand: "GIORGIO ARMANI", category: "homme", price: 72, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop", description: "Frais aquatique — l'éternel classique masculin.", notes: "Bergamote, néroli, jasmin, cèdre, musc", popularity: 89 },
  { id: 16, name: "Flowerbomb", brand: "VIKTOR & ROLF", category: "femme", price: 98, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&auto=format&fit=crop", description: "Explosion florale — la bombe de féminité.", notes: "Rose, orchidée, patchouli, vanille, musc", popularity: 86 },
  { id: 17, name: "Club de Nuit Intense", brand: "ARMAF", category: "homme", price: 39, image: "https://images.unsplash.com/photo-1619994403078-b1e314f6e2e2?w=400&auto=format&fit=crop", description: "Alternative iconique — fraîcheur boisée citronnée.", notes: "Bergamote, ananas, bouleau, musc, ambre", popularity: 72 },
  { id: 18, name: "Molecule 01", brand: "ESCENTRIC MOLECULES", category: "niche", price: 75, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop", description: "Iso E Super — le parfum qui sent différent sur chacun.", notes: "Iso E Super, bois de cèdre", popularity: 77 },
  { id: 19, name: "Délices Gourmands", brand: "L'ESSENTIEL", category: "coffrets", price: 120, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop", description: "Coffret 3 parfums gourmands — vanille, caramel, cacao.", notes: "Vanille, caramel, cacao, fève tonka", popularity: 70 },
  { id: 20, name: "Élégance Florale", brand: "L'ESSENTIEL", category: "coffrets", price: 135, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&auto=format&fit=crop", description: "Coffret 3 parfums floraux — rose, jasmin, muguet.", notes: "Rose, jasmin, muguet, musc blanc", popularity: 68 },
  { id: 21, name: "Voyage Olfactif", brand: "L'ESSENTIEL", category: "coffrets", price: 150, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop", description: "Coffret découverte 4 parfums — un tour du monde des senteurs.", notes: "Mix d'agrumes, bois, épices, fleurs", popularity: 74 },
  { id: 22, name: "Black Orchid", brand: "TOM FORD", category: "femme", price: 155, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&auto=format&fit=crop", description: "Oriental floral — luxe noir et orchidae envoûtante.", notes: "Truffe noire, ylang-ylang, gardénia, patchouli", popularity: 84 },
  { id: 23, name: "Eros", brand: "VERSACE", category: "homme", price: 65, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&auto=format&fit=crop", description: "Boisé oriental — la passion du dieu grec.", notes: "Menthe, pomme, vanille, cèdre, musc", popularity: 81 },
  { id: 24, name: "Lost Cherry", brand: "TOM FORD", category: "femme", price: 175, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop", description: "Gourmand sensuel — cerise noire, liqueur, amande.", notes: "Cerise, liqueur, amande, santal, benjoin", popularity: 87 },
  { id: 25, name: "Terre d'Hermès", brand: "HERMÈS", category: "homme", price: 99, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&auto=format&fit=crop", description: "Boisé minéral — la terre, l'air et le feu.", notes: "Orange, pamplemousse, poivre, cèdre, vétiver", popularity: 91 },
  { id: 26, name: "L'Interdit", brand: "GIVENCHY", category: "femme", price: 85, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop", description: "Fleur blanche audacieuse — l'interdit qui fait craquer.", notes: "Fleur d'oranger, jasmin, vanille, patchouli", popularity: 79 },
];

export const categories = [
  { id: "all" as const, key: "all" as const },
  { id: "homme" as const, key: "homme" as const },
  { id: "femme" as const, key: "femme" as const },
  { id: "niche" as const, key: "niche" as const },
  { id: "coffrets" as const, key: "coffrets" as const },
] as const;

export const testimonials: Testimonial[] = [
  { id: 1, name: "Marie C.", initials: "MC", text: "Accueil chaleureux et conseils avisés. Valerie sait parfaitement guider vers le parfum qui correspond à votre personnalité.", rating: 5, source: "Google Avis" },
  { id: 2, name: "Sophie D.", initials: "SD", text: "La meilleure parfumerie de Rocourt ! Parfums 100% authentiques, large choix, conseils professionnels.", rating: 5, source: "Google Avis" },
  { id: 3, name: "Thomas P.", initials: "TP", text: "Valerie est d'une gentillesse incroyable. Je suis venu pour un parfum et je repars avec un mélange unique créé pour moi.", rating: 5, source: "Google Avis" },
];

export const blendFamilies = [
  { id: "floral", label: "Florale", icon: "🌸", description: "Rose, jasmin, muguet — féminin et élégant" },
  { id: "bois", label: "Boisée", icon: "🌲", description: "Santal, cèdre, vétiver — chic et intemporel" },
  { id: "oriental", label: "Orientale", icon: "🌙", description: "Vanille, ambre, musc — chaud et sensuel" },
  { id: "frais", label: "Fraîche", icon: "🌊", description: "Agrumes, aquatique, hespéridé — léger et dynamique" },
  { id: "epice", label: "Épicée", icon: "✨", description: "Poivre, cannelle, safran — audacieux et captivant" },
  { id: "gourmand", label: "Gourmande", icon: "🍯", description: "Caramel, miel, cacao — irrésistible et doux" },
];

export const blendIntensities = [
  { id: "leger", label: "Léger", icon: "☁️", description: "Discret, idéal pour le quotidien et le bureau" },
  { id: "moyen", label: "Moyen", icon: "🌤️", description: "Équilibré, tient toute la journée" },
  { id: "intense", label: "Intense", icon: "🔥", description: "Puissant, sillage marqué, idéal pour le soir" },
];

export const blendFormats = [
  { id: "10ml", label: "10 ml", icon: "🧪", price: 25, description: "Format découverte" },
  { id: "30ml", label: "30 ml", icon: "🧴", price: 49, description: "Format voyage" },
  { id: "50ml", label: "50 ml", icon: "🍾", price: 75, description: "Format classique" },
  { id: "100ml", label: "100 ml", icon: "🏺", price: 120, description: "Grand format" },
];

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/ParfumerieEssentiel",
  whatsapp: "https://wa.me/3242267137",
  phone: "+32 4 226 71 37",
  address: "Chaussée de Tongres 85, 4000 Rocourt",
  email: "info@lessentiel.be",
};
