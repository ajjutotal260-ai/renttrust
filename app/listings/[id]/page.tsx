"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getListings } from "../../utils/listingsStorage";

export default function ListingDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [listing, setListing] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allListings = getListings();
    const found = allListings.find(
      (item) => String(item.id) === params.id
    );
    setListing(found || null);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-textSecondary">Loading listing...</p>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-xl font-medium">Listing not found</h1>
        <Link href="/listings" className="underline text-sm mt-4 inline-block">
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-2">
        {listing.title}
      </h1>

      <p className="text-textSecondary mb-6">
        {listing.location}
      </p>

      <p className="text-xl font-medium mb-8">
        {listing.rent}
      </p>

      <div className="mb-10 space-y-1 text-sm">
        <p><strong>Tenant:</strong> {listing.type}</p>
        <p><strong>Furnishing:</strong> {listing.furnishing}</p>
        <p><strong>Area:</strong> {listing.area} sq.ft</p>
      </div>

      <div className="mb-10">
        <h2 className="font-medium mb-2">Amenities</h2>
        <ul className="list-disc pl-5 text-sm text-textSecondary">
          {listing.amenities.map((a: string) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <Link
        href="/login"
        className="bg-primary text-white px-6 py-3 rounded-xl"
      >
        Contact owner
      </Link>

    </div>
  );
}
