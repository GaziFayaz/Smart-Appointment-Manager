import { Navbar } from "@/components/layout/navbar";
import SplitText from "@/components/ui/SplitText";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" bg-background text-foreground font-body flex flex-col min-h-screen px-10 items-center justify-center font-sans ">
			<Navbar />
			<main className="flex-1 min-h-screen w-full  flex-col items-center justify-center py-32 px-16 sm:items-start">
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
				<h3 className="w-full font-medium text-3xl mt-6 text-left md:text-center sm:mt-4">
					Your all-in-one solution for managing appointments and queues with
					ease.✨
				</h3>
			</main>

			{/* <Footer /> */}
		</div>
	);
}
