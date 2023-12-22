import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/utils/env.mjs";

import type { Database } from "./types/database.types";

export const supabase = createBrowserClient<Database>(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
