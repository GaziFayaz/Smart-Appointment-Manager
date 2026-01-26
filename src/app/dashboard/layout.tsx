import { Navbar } from "@/components/layout/navbar";
import React from "react";

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex flex-col min-h-screen px-10 py-32 items-center">
			{/* <Navbar /> */}
			{children}
		</div>
	);
};

export default layout;
