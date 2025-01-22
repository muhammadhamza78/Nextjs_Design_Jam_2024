import { createClient } from "next-sanity";

const client = createClient({
  projectId: "o4pi99er",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, any>; // Specify a more general type for params
}) {
  return await client.fetch(query, params);
}
