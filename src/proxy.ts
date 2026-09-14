import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const INTERNAL_HOST = "internal.goodsteadhr.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  // Matches internal.goodsteadhr.com in production and internal.localhost:<port> in dev.
  if (host === INTERNAL_HOST || host.startsWith("internal.localhost")) {
    // Serve the /internal routes at the root of the internal subdomain.
    if (!pathname.startsWith("/internal")) {
      const url = request.nextUrl.clone();
      url.pathname = `/internal${pathname === "/" ? "" : pathname}`;
      return NextResponse.rewrite(url);
    }
    // Avoid duplicate URLs: internal.goodsteadhr.com/internal/... → internal.goodsteadhr.com/...
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/internal/, "") || "/";
    return NextResponse.redirect(url);
  }

  // Keep one canonical home for internal pages: redirect the main domain there.
  if (host === "goodsteadhr.com" || host === "www.goodsteadhr.com") {
    if (pathname.startsWith("/internal")) {
      const url = request.nextUrl.clone();
      url.host = INTERNAL_HOST;
      url.pathname = pathname.replace(/^\/internal/, "") || "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico)$).*)",
  ],
};
