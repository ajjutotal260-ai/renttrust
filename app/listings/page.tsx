"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getListings } from "../utils/listingsStorage";

export default function ListingsPage() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    const all = getListings()
      .filter((l) => l.status === "Approved")
      .sort((a, b) => Number(b.featured) - Number(a.featured));

    setListings(all);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Available rental homes
      </h1>

      {/* EMPTY STATE */}
      {listings.length === 0 && (
        <p className="text-textSecondary text-center mb-16">
          No homes available right now.<br />
          New verified listings are added daily.
        </p>
      )}

      {/* LISTINGS GRID */}
      {listings.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((home) => (
            <div
              key={home.id}
              className={`relative rounded-2xl p-6 transition ${
                home.featured
                  ? "border-2 border-yellow-500 bg-yellow-50"
                  : "border"
              }`}
            >
              {home.featured && (
                <span className="absolute top-3 right-3 text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                  Featured
                </span>
              )}

              <h3 className="font-medium mb-1">
                {home.title}
              </h3>

              <p className="text-sm text-textSecondary mb-1">
                {home.location}
              </p>

              <p className="font-medium mb-3">
                {home.rent}
              </p>

              <Link
                href={`/listings/${home.id}`}
                className="underline text-sm hover:opacity-80"
              >
                View details
              </Link>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
