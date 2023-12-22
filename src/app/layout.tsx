import { PropsWithChildren } from "react";
import "@/styles/globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.js Starter",
	description:
		"A Next.js starter with Supabase, Panda CSS, Ark UI and Storybook.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
};

export default RootLayout;
