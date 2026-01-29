import { StaffType } from "@/app/generated/prisma/enums";
import z from "zod";

export const CreateServiceSchema = z.object({
	name: z.string().min(1, "Service name is required"),
	duration: z.number().min(1, "Duration must be at least 1 minute"),
	requiredStaffType: z.enum(StaffType),
});
