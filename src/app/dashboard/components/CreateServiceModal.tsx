"use client";

import { StaffType } from "@/app/generated/prisma/enums";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createService } from "@/features/service/actions/serviceActions";
import { useState } from "react";
import toast from "react-hot-toast";

const staffTypes = Object.values(StaffType);

const CreateServiceModal = () => {
	const [open, setOpen] = useState(false);
	const [staffType, setStaffType] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log("Form submitted", e.currentTarget.serviceName.value);
		toast.promise(
			createService({
				name: e.currentTarget.serviceName.value,
				requiredStaffType: e.currentTarget.staffType.value as StaffType,
				duration: Number(e.currentTarget.serviceDuration.value),
			}),

			{
				loading: "Submitting...",
				success: (data) => {
					if (data.success) {
						setOpen(false);
						return `✅ Successfully created service: ${data.data?.name}`;
					}
					return `❌ Failed to create service: ${data.message}`;
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
					Create Service
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<form onSubmit={handleSubmit}>
					<DialogHeader className="mb-4">
						<DialogTitle>Create Service</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="service-name">Service Name</Label>
							<Input
								id="service-name"
								name="serviceName"
								placeholder="Enter Service Name"
							/>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="service-duration">Service Duration</Label>
							<Input
								id="service-duration"
								name="serviceDuration"
								placeholder="Service Duration in Minutes"
								type="number"
							/>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="staff-type">Required Staff Type</Label>
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
					</div>
					<DialogFooter className="mt-4">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Create New Service</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateServiceModal;
