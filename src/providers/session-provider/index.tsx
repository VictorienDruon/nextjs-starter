"use client";

import { useProtectedRoute } from "./hooks/useProtectedRoute";
import { useSessionLoader } from "./hooks/useSessionLoader";

import { PropsWithChildren } from "react";

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const { isSessionLoaded, session } = useSessionLoader();
	useProtectedRoute(isSessionLoaded, session);

	return <>{children}</>;
};
