export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  fragrance_family: string;
  fragrance_notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  image: string;
  gallery: string[];
  slug: string;
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  size: string;
  featured: boolean;
}

export interface FragranceFamily {
  id: string;
  name: string;
  description: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_name: string;
  rating: number;
  comment: string;
  date: string;
}