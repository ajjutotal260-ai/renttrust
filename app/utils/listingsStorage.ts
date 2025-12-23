export type Listing = {
  id: number;
  title: string;
  location: string;
  rent: string;
  type: string;
  furnishing: string;
  area: string;
  amenities: string[];
  plan: "Free" | "Featured";
  status: "Pending" | "Approved" | "Rejected";
  featured?: boolean;
};

const STORAGE_KEY = "renttrust_listings";

export function getListings(): Listing[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveListing(listing: Listing) {
  const existing = getListings();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...existing, listing])
  );
}

export function updateListingStatus(
  id: number,
  status: "Approved" | "Rejected"
) {
  const listings = getListings();
  const updated = listings.map((l) =>
    l.id === id ? { ...l, status } : l
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function toggleFeatured(id: number) {
  const listings = getListings();
  const updated = listings.map((l) =>
    l.id === id
      ? {
          ...l,
          featured: !l.featured,
          plan: !l.featured ? "Featured" : "Free",
        }
      : l
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
