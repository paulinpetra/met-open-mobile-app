import type { MetArtwork } from "@/features/home/home.types";

//fix env file later
const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export async function getFeaturedArtworks(
  limit: number = 8,
): Promise<MetArtwork[]> {
  //get highlighted art that has images
  const response = await fetch(
    `${BASE_URL}/search?isHighlight=true&hasImages=true&q=*`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch featured artworks");
  }
  const data = await response.json();
  if (!data.objectIDs?.length) {
    return [];
  }
  //limit IDs but fetch more to compensate for missing imgs
  const objectIDs = data.objectIDs.slice(0, limit * 2);
  //fetch each objects detail in parallel
  const artworks = await Promise.all(
    objectIDs.map(async (id: number) => {
      const res = await fetch(`${BASE_URL}/objects/${id}`);
      if (!res.ok) return null;

      const data = await res.json();

      if (!data.primaryImageSmall) return null;

      return {
        objectID: data.objectID,
        title: data.title,
        primaryImageSmall: data.primaryImageSmall,
        department: data.department,
        artistDisplayName: data.artistDisplayName,
        objectDate: data.objectDate,
      } satisfies MetArtwork;
    }),
  );
  //remove nulls and add limit
  return artworks
    .filter((art): art is MetArtwork => art !== null)
    .slice(0, limit);
}
