import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Tandem HR
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/videos"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Videos
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              About
            </Link>
            <a
              href="https://calendar.app.google/VYTjHytHT3GJFBSP7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Schedule a Call
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Tandem HR. All rights reserved.
        </div>
      </footer>
    </>
  );
}
