import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase/client";

import type { Session } from "@supabase/supabase-js";

export const useSessionLoader = () => {
	const [isSessionLoaded, setIsSessionLoaded] = useState<boolean>(false);
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setIsSessionLoaded(true);
		});

		supabase.auth.onAuthStateChange((_event, session) => setSession(session));
	}, []);

	return { isSessionLoaded, session };
};
