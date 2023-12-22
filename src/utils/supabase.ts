"use server";

import { getSupabaseClient } from "@/libs/supabase/server";

export async function supabaseHelper() {
	const supabase = getSupabaseClient();
	const { data } = await supabase.auth.getSession();

	const session = data.session;
	if (!session) throw new Error("Session not found");

	return {
		supabase,
		session,
		userId: session.user.id,
	};
}
