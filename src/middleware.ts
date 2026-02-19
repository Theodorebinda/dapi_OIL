import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isClientActive = process.env.CLIENT_ACTIVE === "true";
  const { pathname } = request.nextUrl;

  if (isClientActive) {
    return NextResponse.next();
  }

  // Evite une boucle de redirection
  if (pathname === "/blocked") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/blocked";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!blocked|_not-found|_next|favicon.ico).*)"],
};
