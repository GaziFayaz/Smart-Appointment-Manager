"use client";

import SplitText from "@/components/ui/SplitText";
import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const { isSignedIn, isLoaded } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (isLoaded && isSignedIn) {
			router.push("/dashboard");
		}
	}, [isLoaded, isSignedIn, router]);
	return (
		<div className=" bg-background text-foreground font-body flex flex-col min-h-screen px-10 items-center justify-center font-sans gap-10">
			{/* <Navbar /> */}
			<SplitText
				text="Welcome to Service24!"
				className="text-7xl font-bold text-center w-full "
				delay={10}
				duration={0.5}
				ease="power3.out"
				splitType="chars"
				from={{ opacity: 0, y: 40 }}
				to={{ opacity: 1, y: 0 }}
				threshold={0.1}
				rootMargin="-100px"
				textAlign="center"
			/>
			<SignIn />

			{/* <main className="flex flex-1 min-h-screen w-full  flex-col items-center justify-center py-32 px-16 sm:items-start">
				
			</main> */}

			{/* <Footer /> */}
		</div>
	);
}
