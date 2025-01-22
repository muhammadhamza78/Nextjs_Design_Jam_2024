
// import imageUrlBuilder from '@sanity/image-url';
// import { createClient } from 'next-sanity';

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o4pi99er',
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2024-01-22',
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source: any) => {
//   if (!source) {
//     return {
//       url: () => '/placeholder-image.jpg' // Provide a fallback image path
//     };
//   }
//   return builder.image(source);
// };





import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o4pi99er',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-15',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source).width(400).height(300).fit("crop")
}
