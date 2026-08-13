export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
}

export declare const products: Product[];
export declare const categories: Category[];
export declare function formatNaira(value: number): string;
