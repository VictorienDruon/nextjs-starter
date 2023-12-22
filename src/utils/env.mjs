import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		SUPABASE_SERVICE_ROLE_KEY: z.string().trim().min(1),
	},
	client: {
		NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
		NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().trim().min(1),
	},
	// We only need to destructure client variables:
	experimental__runtimeEnv: {
		NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
		NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	},
	isServer: typeof window === "undefined",
	onValidationError: (error) => {
		console.error(
			"❌ Invalid environment variables:",
			error.flatten().fieldErrors
		);
		throw new Error("Invalid environment variables");
	},
	onInvalidAccess: () => {
		throw new Error(
			"❌ Attempted to access a server-side environment variable on the client"
		);
	},
});
