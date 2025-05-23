import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath =
    path === "/Login" ||
    path === "/Register" ||
    path === "/" ||
    path === "/about-us" ||
    path === "/events" ||
    path === "/donate" ||
    path === "/contact";
  const token = request.cookies.get("token")?.value || "";

  // If user is authenticated and trying to access login/register, redirect to dashboard
  if (isPublicPath && token && (path === "/Login" || path === "/Register")) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // If user is not authenticated and trying to access protected routes
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/Login", request.nextUrl));
  }

  // Role-based route protection
  if (path.startsWith("/dashboard")) {
    try {
      const userRole = request.cookies.get("userRole")?.value || "user";

      // Only 'user' can access these dashboard routes
      const userOnlyRoutes = [
        "/dashboard/donate-now",
        "/dashboard/my-donations",
        "/dashboard/my-profile",
        "/dashboard/transaction-history",
      ];
      if (
        userOnlyRoutes.some((route) => path.startsWith(route)) &&
        userRole !== "user"
      ) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
      }

      if (path.includes("/admin/") && userRole !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
      }

      if (path.includes("/publisher/") && userRole !== "publisher") {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
      }

      return NextResponse.next();
    } catch {
      // If there's an error accessing cookies or user data, redirect to login
      return NextResponse.redirect(new URL("/Login", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/Login",
    "/Register",
    "/dashboard/:path*",
    "/about-us",
    "/events",
    "/donate",
    "/contact",
  ],
};
