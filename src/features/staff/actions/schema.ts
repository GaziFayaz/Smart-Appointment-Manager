import { StaffType } from "@/app/generated/prisma/enums";
import { z } from "zod";

export const CreateStaffSchema = z.object({
	name: z.string().min(1, "Name is required"),
	type: z.enum(StaffType),
	dailyCapacity: z.number().min(1, "Max capacity must be at least 1"),
});
