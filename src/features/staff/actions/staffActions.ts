"use server";

import prisma from "@/lib/prisma";
import { CreateStaffSchema } from "./schema";
import { ActionResponse } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import z from "zod";

export const createStaff = async (
	staffData: z.infer<typeof CreateStaffSchema>,
): Promise<ActionResponse> => {
	const { userId } = await auth();

	if (!userId) {
		return {
			success: false,
			code: StatusCodes.UNAUTHORIZED,
			message: ReasonPhrases.UNAUTHORIZED,
		};
	}

	// 1. RUNTIME VALIDATION (Crucial Step)
	const parsed = CreateStaffSchema.safeParse(staffData);

	if (!parsed.success) {
		// 2. Extract and format proper error messages from Zod
		const fieldErrors = parsed.error.flatten().fieldErrors;

		return {
			success: false,
			code: StatusCodes.BAD_REQUEST,
			message: "Invalid data", // General error
			fieldErrors: fieldErrors as Record<string, string[]>, // Specific errors
		};
	}

	// 3. Use the safe, parsed data
	const data = parsed.data;

	try {
		const result = await prisma.staff.create({
			data,
		});

		return {
			success: true,
			code: StatusCodes.CREATED,
			message: "Staff created successfully",
			data: result,
		};
	} catch {
		return {
			success: false,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: "Failed to create staff",
		};
	}
};
