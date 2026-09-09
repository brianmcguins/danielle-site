import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Tandem HR Internal",
    template: "%s | Tandem HR Internal",
  },
  description: "Internal application for Tandem HR.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-zinc-900 text-white">
      <header>
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-zinc-900">
              T
            </span>
            Tandem HR
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
