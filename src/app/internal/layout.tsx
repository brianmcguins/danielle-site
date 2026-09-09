import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { ArrowUpRight } from "lucide-react";

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

export default async function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The marketing site lives at the same domain minus the `internal.` prefix,
  // so derive its URL from the request host to stay domain-agnostic.
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const marketingUrl = `${protocol}://${host.replace(/^internal\./, "")}`;

  return (
    <div className="flex flex-1 flex-col bg-zinc-900 text-white">
      <header>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-zinc-900">
              T
            </span>
            Tandem HR
          </Link>
          <a
            href={marketingUrl}
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
          >
            Marketing site
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
