export interface Product {
  id: number;
  name: string;
  brand: string;
  category: "homme" | "femme" | "niche" | "coffrets";
  price: number;
  image: string;
  description: string;
  notes?: string;
  popularity: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface BlendOrder {
  family: string;
  intensity: string;
  format: string;
  price: number;
}

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  text: string;
  rating: number;
  source: string;
}
