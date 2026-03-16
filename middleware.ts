import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session }
  } = await supabase.auth.getSession();

  const protectedRoutes = ["/dashboard", "/applications", "/companies", "/contacts", "/interactions", "/tasks", "/documents", "/templates", "/analytics", "/settings", "/today", "/week"];
  const isProtected = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname === "/" && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/applications/:path*", "/companies/:path*", "/contacts/:path*", "/interactions/:path*", "/tasks/:path*", "/documents/:path*", "/templates/:path*", "/analytics/:path*", "/settings/:path*", "/today/:path*", "/week/:path*"]
};
