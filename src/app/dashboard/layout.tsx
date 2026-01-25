import { Navbar } from "@/components/layout/navbar";
import { useAuth } from "@clerk/nextjs";
import React from "react";

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {

	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default layout;
