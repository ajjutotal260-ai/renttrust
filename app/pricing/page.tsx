import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4 text-center">
        Simple, transparent pricing
      </h1>

      <p className="text-textSecondary text-center mb-12 max-w-xl mx-auto">
        Owners pay only for better visibility. Tenants always browse for free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* FREE */}
        <div className="border rounded-2xl p-8">
          <h3 className="text-lg font-medium mb-2">Free listing</h3>
          <p className="text-2xl font-semibold mb-4">₹0</p>

          <ul className="text-sm text-textSecondary space-y-2 mb-6">
            <li>• Basic listing visibility</li>
            <li>• Appears in search results</li>
            <li>• Tenant can contact owner</li>
          </ul>

          <button className="w-full border rounded-xl py-2 text-sm hover:bg-gray-50">
            Current plan
          </button>
        </div>

        {/* VERIFIED */}
        <div className="border-2 border-primary rounded-2xl p-8">
          <h3 className="text-lg font-medium mb-2">Verified+</h3>
          <p className="text-2xl font-semibold mb-4">₹499</p>

          <ul className="text-sm text-textSecondary space-y-2 mb-6">
            <li>• Verified owner badge</li>
            <li>• Higher search priority</li>
            <li>• Faster tenant responses</li>
          </ul>

          <Link
            href="/login"
            className="block text-center bg-primary text-white rounded-xl py-2 text-sm hover:opacity-90"
          >
            Upgrade
          </Link>
        </div>

        {/* FEATURED */}
        <div className="border rounded-2xl p-8 bg-gray-50">
          <h3 className="text-lg font-medium mb-2">Featured</h3>
          <p className="text-2xl font-semibold mb-4">₹999</p>

          <ul className="text-sm text-textSecondary space-y-2 mb-6">
            <li>• Top placement in listings</li>
            <li>• Highlighted card</li>
            <li>• Maximum visibility</li>
          </ul>

          <Link
            href="/login"
            className="block text-center bg-black text-white rounded-xl py-2 text-sm hover:opacity-90"
          >
            Get featured
          </Link>
        </div>

      </div>

      <p className="text-xs text-textSecondary text-center mt-12">
        No commission. No broker involvement. Cancel anytime.
      </p>

    </div>
  );
}
