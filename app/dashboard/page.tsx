"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getListings, toggleFeatured } from "../utils/listingsStorage";
import { mockPayment } from "../utils/tempPayment";

export default function DashboardPage() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    setListings(getListings());
  }, []);

  const statusColor = (status: string) => {
    if (status === "Approved") return "text-green-600";
    if (status === "Rejected") return "text-red-600";
    return "text-yellow-600"; // Pending
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-6">
        Owner dashboard
      </h1>

      <div className="space-y-6">
        {listings.map((home) => {
          const status = home.status || "Pending";

          return (
            <div
              key={home.id}
              className="border rounded-2xl p-6 flex flex-col md:flex-row md:justify-between gap-6"
            >
              <div>
                <h3 className="font-medium text-lg">
                  {home.title}
                </h3>

                <p className="text-sm text-textSecondary">
                  {home.location}
                </p>

                <p className="font-medium">
                  {home.rent}
                </p>

                <p className={`text-sm mt-1 ${statusColor(status)}`}>
                  Status: <strong>{status}</strong>
                </p>

                <p className="text-sm">
                  Plan: <strong>{home.plan}</strong>
                </p>

                {/* Featured badge */}
                {home.featured && (
                  <span className="inline-block mt-2 text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}

                {/* 🔥 TEMP PAYMENT BUTTON */}
                {home.plan === "Free" && status === "Approved" && (
                  <button
                    onClick={() =>
                      mockPayment({
                        amount: 199,
                        onSuccess: () => {
                          toggleFeatured(home.id);
                          alert(
                            "Demo payment successful! Listing is now Featured."
                          );
                          window.location.reload();
                        },
                      })
                    }
                    className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Upgrade to Featured (₹199)
                  </button>
                )}
              </div>

              <Link
                href={`/listings/${home.id}`}
                className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50 self-start"
              >
                View
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
}
