export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'isotonic' | 'hypertonic' | 'spray';
  volume: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum View {
  HOME = 'HOME',
  SHOP = 'SHOP',
  LEARN = 'LEARN',
}