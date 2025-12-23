import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "RentTrust – Verified rental homes. No brokers.",
    template: "%s | RentTrust",
  },
  description:
    "Browse verified rental homes listed directly by owners. No brokers. No spam. Find rental homes you can trust.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary min-h-screen flex flex-col">

        {/* HEADER */}
        <header className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              RentTrust
            </Link>

            <Link
              href="/listings"
              className="text-sm bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Explore homes
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-border mt-24">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">

            <p className="text-xs text-textSecondary max-w-4xl mx-auto">
              RentTrust is a discovery platform for rental homes. We do not
              participate in property negotiations, payments, or agreements.
              Users are advised to independently verify all property details
              before proceeding.
            </p>

            <p className="text-xs text-textSecondary mt-4">
              © {new Date().getFullYear()} RentTrust. Verified homes. No brokers.
            </p>

            <div className="mt-3 flex justify-center gap-4 text-xs">
              <Link href="/terms" className="underline">
                Terms
              </Link>
              <Link href="/privacy" className="underline">
                Privacy
              </Link>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
