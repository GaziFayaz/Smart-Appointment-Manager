"use client";

import { ActionType } from "@/app/generated/prisma/enums";
import { ColumnDef } from "@tanstack/react-table";

export type StaffLoad = {
	id: string;
	name: string;
	totalCapacity: number;
	takenCapacity: number;
};

export const staffLoadColumns: ColumnDef<StaffLoad>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		id: "load",
		header: "Load",
		size: 700,
		cell: ({ row }) => {
			const staffData = row.original;
			return (
				<span className="font-medium">{`${staffData.takenCapacity} / ${staffData.totalCapacity}`}</span>
			);
		},
	},
	{
		id: "availabilityStatus",
		header: "Availability Status",
		cell: ({ row }) => {
			const staffData = row.original;
			const availabilityStatus =
				staffData.takenCapacity >= staffData.totalCapacity
					? "Booked"
					: "Available";
			return (
				<span
					className={`font-medium ${availabilityStatus === "Booked" ? "text-red-600" : "text-green-600"}`}
				>
					{availabilityStatus}
				</span>
			);
		},
	},
];

export type ActivityLog = {
	timestamp: string;
	actionType: ActionType;
	message: string;
};

export const activityLogColumns: ColumnDef<ActivityLog>[] = [
	{
		accessorKey: "timestamp",
		header: "Timestamp",
	},
	{
		id: "actionType",
		header: "Action",
		cell: ({ row }) => {
			const { actionType } = row.original;
			return (
				<span className="font-medium">{`${actionType.toLowerCase().charAt(0).toUpperCase() + actionType.toLowerCase().slice(1)}`}</span>
			);
		},
	},
	{
		id: "message",
		header: "Message",
		cell: ({ row }) => {
			const { message } = row.original;
			return <span className="font-medium">{message}</span>;
		},
	},
];
