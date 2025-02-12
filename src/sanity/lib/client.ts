// sanity/lib/client.ts
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import type { SanityImage } from '@/types/sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o4pi99er',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-15',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImage | undefined) => {
  if (!source?.asset) {
    return {
      url: () => '/placeholder.jpg'
    };
  }
  return builder.image(source).width(400).height(300).fit("crop");
};
