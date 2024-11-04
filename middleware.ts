// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getKindeId from "@/actions/getKindeId";
import { admins } from "./components/navbar/Navbar";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const kindeId = await getKindeId();
  const email = kindeId?.email;
  

  if (!email || !admins.includes(email)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

// Only apply the middleware to the `/dashboard` route
export const config = {
  matcher: ["/dashboard/:path*"],
};
