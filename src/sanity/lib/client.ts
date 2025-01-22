// import imageUrlBuilder from "@sanity/image-url";
// import { createClient } from "@sanity/client";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o4pi99er",
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2025-01-15",
//   useCdn: process.env.NODE_ENV === "production",
// });

// const builder = imageUrlBuilder(client);

// export function urlFor(source) {
//   return builder.image(source);
// }










// sanity/lib/client.ts

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o4pi99er",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-15",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Product fetching functions
export async function getProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    stockLevel,
    image,
    category->{
      _id,
      name
    },
    "slug": slug.current
  }`;
  
  try {
    const product = await client.fetch(query, { id });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

// Optional: Add more helper functions
export async function getAllProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    stockLevel,
    image,
    "slug": slug.current
  }`;
  
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getFeaturedProducts() {
  const query = `*[_type == "product" && featured == true]{
    _id,
    name,
    description,
    price,
    stockLevel,
    image,
    "slug": slug.current
  }`;
  
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
}