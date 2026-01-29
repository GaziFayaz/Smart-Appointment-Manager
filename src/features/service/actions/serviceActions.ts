"use server";

import z from "zod";
import { CreateServiceSchema } from "./schema";
import { ActionResponse } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import prisma from "@/lib/prisma";

export const createService = async (
	serviceData: z.infer<typeof CreateServiceSchema>,
): Promise<ActionResponse> => {
	const { userId } = await auth();

	if (!userId) {
		return {
			success: false,
			code: StatusCodes.UNAUTHORIZED,
			message: ReasonPhrases.UNAUTHORIZED,
		};
	}

	const parsed = CreateServiceSchema.safeParse(serviceData);

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

	const data = parsed.data;

	try {
		const result = await prisma.service.create({
			data,
		});

		return {
			success: true,
			code: StatusCodes.CREATED,
			message: "Service created successfully",
			data: result,
		};
	} catch {
		return {
			success: false,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: "Failed to create service",
		};
	}
};
