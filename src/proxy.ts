import { NextResponse, type NextRequest } from "next/server";

const INTERNAL_SUBDOMAIN = "internal.";

// Host-based routing: internal.[domain] serves src/app/internal, everything
// else serves the marketing site. No auth for now — Supabase auth comes later.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (host.startsWith(INTERNAL_SUBDOMAIN)) {
    return NextResponse.rewrite(
      new URL(pathname === "/" ? "/internal" : `/internal${pathname}`, request.url)
    );
  }

  // Keep /internal off the marketing domain; send it to the subdomain.
  if (pathname === "/internal" || pathname.startsWith("/internal/")) {
    const url = request.nextUrl.clone();
    url.host = `${INTERNAL_SUBDOMAIN}${host}`;
    url.pathname = pathname.slice("/internal".length) || "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
