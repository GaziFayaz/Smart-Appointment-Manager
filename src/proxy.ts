import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
	const { userId } = await auth();
	// If the user is logged in and trying to access the home page, redirect to dashboard
	if (userId && isPublicRoute(req)) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	if (!isPublicRoute(req))
		await auth.protect({
			unauthenticatedUrl:
				process.env.NODE_ENV === "production"
					? process.env.NEXT_PUBLIC_BASE_URL!
					: "http://localhost:3000/",
		});
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
