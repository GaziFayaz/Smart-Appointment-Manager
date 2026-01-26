import ActivityLogsTable from "./components/ActivityLogsTable";
import DashboardStats from "./components/DashboardStats";
import StaffLoadTable from "./components/StaffLoadTable";

const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen w-full flex flex-col gap-10">
			<DashboardStats />
			<div className="flex w-full gap-5">
				<StaffLoadTable />
				<ActivityLogsTable />
			</div>
		</div>
	);
};

export default Dashboard;
