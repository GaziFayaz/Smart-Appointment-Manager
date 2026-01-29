"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const CreateAppointmentModal = () => {
	const [open, setOpen] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log("Form submitted");
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size={"lg"} className="text-lg">Create Appointment</Button>
			</DialogTrigger>
			<form onSubmit={handleSubmit}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Name</Label>
							<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="username-1">Username</Label>
							<Input id="username-1" name="username" defaultValue="@peduarte" />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default CreateAppointmentModal;
