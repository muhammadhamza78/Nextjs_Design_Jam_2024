// export interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage?: number;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }


export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockLevel: number;
  image?: SanityImage;
}
