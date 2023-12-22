import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";

export const useProtectedRoute = (
	isSessionLoaded: boolean,
	session: Session | null
) => {
	const router = useRouter();
	const path = usePathname();

	useEffect(() => {
		if (!isSessionLoaded) return;

		// Set up public paths and fallback path as shown below:
		// const publicPaths = ["/", "/login", "/signup"];
		// const isPrivatePath = !publicPaths.includes(path);
		// if (isPrivatePath && !session) {
		// 	router.push("/login");
		// }

		return;
	}, [isSessionLoaded, session, router, path]);
};
