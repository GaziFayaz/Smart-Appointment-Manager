"use client";

import { StaffType } from "@/app/generated/prisma/enums";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createStaff } from "@/features/staff/actions/staffActions";
import toast from "react-hot-toast";

const staffTypes = Object.values(StaffType);

const CreateStaffModal = () => {
	const [open, setOpen] = useState(false);
	const [staffType, setStaffType] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log("Form submitted", e.currentTarget.staffType.value);
		toast.promise(
			createStaff({
				name: e.currentTarget.staffName.value,
				type: e.currentTarget.staffType.value as StaffType,
				dailyCapacity: Number(e.currentTarget.dailyCapacity.value),
			}),
			{
				loading: "Submitting...",
				success: (data) => {
					if (data.success) {

						setOpen(false);
						return `✅ Successfully created staff: ${data.data?.name}`;
					}
					return `❌ Failed to create staff: ${data.message}`;
				},
				error: (err) => `Failed: ${err.toString()}`,
			},
			{
				style: {
					borderRadius: "10px",
					background: "#333",
					color: "#fff",
					minWidth: "250px",
				},
				success: {
					duration: 5000,
				},
			},
		);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size={"lg"} className="text-lg">
					Create Staff
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<form onSubmit={handleSubmit}>
					<DialogHeader className="mb-4">
						<DialogTitle>Create New Staff</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="staff-name">Staff Name</Label>
							<Input
								id="staff-name"
								name="staffName"
								placeholder="Enter Staff Name"
							/>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="staff-type">Staff Type</Label>
							<Select value={staffType} onValueChange={setStaffType}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select Staff Type" />
								</SelectTrigger>
								<SelectContent>
									{staffTypes.map((type) => (
										<SelectItem key={type} value={type}>
											{type}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<input type="hidden" name="staffType" value={staffType} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="daily-capacity">Daily Capacity</Label>
							<Input
								id="daily-capacity"
								name="dailyCapacity"
								placeholder="Enter Max Capacity for the Day"
								type="number"
							/>
						</div>
					</div>
					<DialogFooter className="mt-4">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Create New Staff</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateStaffModal;
