import { WeightTilde } from "lucide-react";
import { DataTable } from "./data-table";
import { staffLoadColumns } from "./columns";

const staffLoadData = [
	{
		id: "1",
		name: "John Doe",
		totalCapacity: 10,
		takenCapacity: 7,
	},
	{
		id: "2",
		name: "Jane Smith",
		totalCapacity: 8,
		takenCapacity: 8,
	},
	{
		id: "3",
		name: "Alice Johnson",
		totalCapacity: 12,
		takenCapacity: 5,
	},
];

const StaffLoadTable = () => {
	return (
		<div className="w-1/2 p-6 bg-primary rounded-lg shadow-md text-accent flex flex-col">
			<div>
				<WeightTilde className="text-accent" size={32} />
				<h2 className="text-2xl text-accent font-bold mb-2">Staff Load</h2>
			</div>
			<DataTable columns={staffLoadColumns} data={staffLoadData}></DataTable>
		</div>
	);
};

export default StaffLoadTable;
