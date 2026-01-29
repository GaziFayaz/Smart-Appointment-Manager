import { Button } from "@/components/ui/button";
import ActivityLogsTable from "./components/ActivityLogsTable";
import DashboardStats from "./components/DashboardStats";
import StaffLoadTable from "./components/StaffLoadTable";
import CreateStaffModal from "./components/CreateStaffModal";
import CreateAppointmentModal from "./components/CreateAppointmentModal";
import CreateServiceModal from "./components/CreateServiceModal";

const Dashboard = () => {
	return (
		<div className="bg-background min-h-screen w-full flex flex-col gap-10">
			<div className="w-full flex gap-2 justify-end">
				<CreateStaffModal></CreateStaffModal>
				<CreateServiceModal></CreateServiceModal>
				<CreateAppointmentModal></CreateAppointmentModal>
			</div>
			<DashboardStats />
			<div className="flex w-full gap-5">
				<StaffLoadTable />
				<ActivityLogsTable />
			</div>
		</div>
	);
};

export default Dashboard;
