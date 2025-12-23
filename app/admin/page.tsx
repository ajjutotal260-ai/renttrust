"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getListings,
  updateListingStatus,
  toggleFeatured,
  Listing,
} from "../utils/listingsStorage";

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
      setListings(getListings());
    }
  }, [router]);

  const refresh = () => setListings(getListings());

  if (!authorized) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">
          Admin panel
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin_auth");
            router.push("/admin/login");
          }}
          className="text-sm underline"
        >
          Logout
        </button>
      </div>

      {listings.length === 0 && (
        <p className="text-textSecondary">No listings yet.</p>
      )}

      <div className="space-y-6">
        {listings.map((home) => (
          <div
            key={home.id}
            className="border rounded-2xl p-6 flex flex-col md:flex-row md:justify-between gap-6"
          >
            <div>
              <h3 className="font-medium">{home.title}</h3>
              <p className="text-sm text-textSecondary">{home.location}</p>
              <p className="font-medium">{home.rent}</p>

              <p className="text-xs mt-1">
                Status: <strong>{home.status}</strong>
              </p>

              <p className="text-xs">
                Plan: <strong>{home.plan}</strong>
              </p>
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <button
                disabled={home.status === "Approved"}
                onClick={() => {
                  updateListingStatus(home.id, "Approved");
                  refresh();
                }}
                className="px-4 py-2 rounded-lg text-sm bg-green-600 text-white disabled:opacity-40"
              >
                Approve
              </button>

              <button
                disabled={home.status === "Rejected"}
                onClick={() => {
                  updateListingStatus(home.id, "Rejected");
                  refresh();
                }}
                className="px-4 py-2 rounded-lg text-sm bg-red-600 text-white disabled:opacity-40"
              >
                Reject
              </button>

              {home.status === "Approved" && (
                <button
                  onClick={() => {
                    toggleFeatured(home.id);
                    refresh();
                  }}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    home.featured
                      ? "bg-yellow-600 text-white"
                      : "border"
                  }`}
                >
                  {home.featured ? "Unfeature" : "Feature"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
