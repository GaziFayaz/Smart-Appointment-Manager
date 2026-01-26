import { Activity } from "lucide-react";
import { activityLogColumns } from "./columns";
import { DataTable } from "./data-table";
import { ActionType } from "@/app/generated/prisma/enums";

const activityLogData = [
	{
		timestamp: "2024-10-01 10:00:00",
		actionType: ActionType.SCHEDULED,
		message: "Appointment scheduled for John Doe",
	},
	{
		timestamp: "2024-10-01 11:00:00",
		actionType: ActionType.COMPLETED,
		message: "Appointment completed for Jane Smith",
	},
	
]

const ActivityLogsTable = () => {
	return (
		<div className="w-1/2 p-6 bg-primary rounded-lg shadow-md text-accent flex flex-col">
			<div>
				<Activity className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-bold mb-2">Activity Logs</h2>
			</div>

			<DataTable columns={activityLogColumns} data={activityLogData}></DataTable>
		</div>
	);
};

export default ActivityLogsTable;
