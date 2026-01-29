// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionResponse<T = any> = {
	success: boolean;
	code: number; // Mimic HTTP codes (200, 400, 401, 403, 500)
	message: string;
	data?: T; // Generic type for the payload
	fieldErrors?: Record<string, string[]>; // Context-specific validation errors
};
