import {
	ClipboardClock,
	ClockFading,
	Logs,
	SquareCheckBig,
} from "lucide-react";
const DashboardStats = () => {
	return (
		<div className="w-full flex gap-5 ">
			<div className="p-6 bg-primary rounded-lg shadow-md flex flex-col items-start w-1/4">
				<ClipboardClock className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-semibold mb-2">
					Appointments Today
				</h2>
				<p className="text-4xl text-background font-bold">1,234</p>
			</div>
			<div className="p-6 bg-primary rounded-lg shadow-md flex flex-col items-start w-1/4">
				<SquareCheckBig className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-semibold mb-2">Completed</h2>
				<p className="text-4xl text-background font-bold">1,234</p>
			</div>
			<div className="p-6 bg-primary rounded-lg shadow-md flex flex-col items-start w-1/4">
				<ClockFading className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-semibold mb-2">Pending</h2>
				<p className="text-4xl text-background font-bold">1,234</p>
			</div>
			<div className="p-6 bg-primary rounded-lg shadow-md flex flex-col items-start w-1/4">
				<Logs className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-semibold mb-2">In Queue</h2>
				<p className="text-4xl text-background font-bold">1,234</p>
			</div>
		</div>
	);
};

export default DashboardStats;
