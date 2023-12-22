import { createClient } from "@supabase/supabase-js";
import { env } from "@/utils/env.mjs";

import type { Database } from "./types/database.types";

export const supabase = createClient<Database>(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.SUPABASE_SERVICE_ROLE_KEY,
	{
		auth: {
			autoRefreshToken: false,
			persistSession: false,
		},
	}
);
