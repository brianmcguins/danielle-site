import Image from "next/image";
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
          <Link href="/">
            <Image
              src="/logo-icon.svg"
              alt="Goodstead HR"
              width={36}
              height={36}
              priority
              className="size-9 rounded-lg sm:hidden"
            />
            <Image
              src="/logo.svg"
              alt="Goodstead HR"
              width={202}
              height={40}
              priority
              className="hidden h-10 w-auto sm:block"
            />
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
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
              href="https://calendar.app.google/tbmQMhAoJiXgHuTf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:px-4"
            >
              Schedule a Call
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
          <Image
            src="/logo.svg"
            alt="Goodstead HR"
            width={101}
            height={20}
            className="h-5 w-auto"
          />
          <span>
            &copy; {new Date().getFullYear()} Goodstead HR. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
