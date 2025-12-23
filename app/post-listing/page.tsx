"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveListing } from "../utils/listingsStorage";

export default function PostListingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    location: "",
    rent: "",
    type: "family",
    furnishing: "unfurnished",
    area: "",
    amenities: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveListing({
      id: Date.now(),
      title: form.title,
      location: form.location,
      rent: form.rent,
      type: form.type,
      furnishing: form.furnishing,
      area: form.area,
      amenities: form.amenities
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
      plan: "Free",
      status: "Pending", // ✅ ADMIN REVIEW REQUIRED
    });

    // Redirect to dashboard after submit
    router.push("/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-2">
        Post a rental listing
      </h1>

      <p className="text-textSecondary mb-10">
        All listings are reviewed by our team before going live.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          name="title"
          placeholder="Property title (e.g. 2 BHK Builder Floor)"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
          required
        />

        <input
          name="location"
          placeholder="Location (e.g. Uttam Nagar, Delhi)"
          value={form.location}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
          required
        />

        <input
          name="rent"
          placeholder="Monthly rent (₹)"
          value={form.rent}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
          required
        />

        <input
          name="area"
          placeholder="Area (sq.ft)"
          value={form.area}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="family">Family</option>
          <option value="bachelor">Bachelor</option>
          <option value="any">Any</option>
        </select>

        <select
          name="furnishing"
          value={form.furnishing}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option value="unfurnished">Unfurnished</option>
          <option value="semi">Semi-furnished</option>
          <option value="full">Fully furnished</option>
        </select>

        <input
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={form.amenities}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90"
        >
          Submit listing
        </button>

      </form>

      <p className="text-xs text-textSecondary mt-8">
        Broker listings are not allowed. Duplicate or misleading posts may be rejected.
      </p>

    </div>
  );
}
