import { defineQuery } from "next-sanity";

export const products=defineQuery(`
    *[-type == "products"]{
    _id,
    name,
    "imageUrl":image.asset->url
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel
    category,
    isFeaturedProduct,
    }
    `)