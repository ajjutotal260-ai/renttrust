import Link from "next/link";

/* ✅ SEO METADATA (HOME PAGE) */
export const metadata = {
  title: "Verified rental homes. No brokers.",
};

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-3xl px-6 md:px-0 mx-auto text-center">

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-textPrimary mb-4">
            Verified rental homes. No brokers.
          </h1>

          {/* SUB TEXT */}
          <p className="text-textSecondary text-lg max-w-xl mx-auto">
            Browse owner-listed rental properties. All listings are reviewed to
            reduce brokers, duplicates, and misleading posts.
          </p>

          {/* TRUST BADGES */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-textSecondary">
            <span>✔ Owner-listed</span>
            <span>✔ Admin verified</span>
            <span>✔ No brokerage</span>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/listings"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl text-base font-medium hover:opacity-90 transition"
            >
              Explore homes
            </Link>
          </div>

          <p className="mt-6 text-sm text-textSecondary">
            No spam calls. No hidden brokers. No fake listings.
          </p>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-border bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-textSecondary text-center">

            <div>
              <p className="font-medium text-textPrimary mb-1">
                Verified owners
              </p>
              <p>
                Listings are reviewed before going live to reduce spam and broker activity.
              </p>
            </div>

            <div>
              <p className="font-medium text-textPrimary mb-1">
                No broker calls
              </p>
              <p>
                Connect directly with property owners. No middlemen involved.
              </p>
            </div>

            <div>
              <p className="font-medium text-textPrimary mb-1">
                Fresh listings only
              </p>
              <p>
                Duplicate and misleading listings are actively filtered.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4">
            Ready to explore verified rental homes?
          </h2>

          <p className="text-textSecondary mb-8">
            Take your time. Browse calmly. Contact owners only when you’re comfortable.
          </p>

          <Link
            href="/listings"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl text-base font-medium hover:opacity-90 transition"
          >
            Explore homes
          </Link>

        </div>
      </section>

    </div>
  );
}
