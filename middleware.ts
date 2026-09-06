import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CLI_AGENTS = /curl|wget|httpie|aria2|fetch|http-client/i;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const ua = request.headers.get("user-agent") ?? "";
  if (CLI_AGENTS.test(ua)) {
    return NextResponse.rewrite(new URL("/man.txt", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
