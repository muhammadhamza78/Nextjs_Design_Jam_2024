// src/types.ts (or app/types.ts, depending on your folder structure)

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  stockLevel: number;
  isFeaturedProduct: boolean;
  image: {
    asset: {
      url: string;
    };
  };
}
