"use client";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Head from "./head";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/public/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/public/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/public/favicon-16x16.png"
				/>
			</head>
			<body className="dark:bg-stone-900">
				<ThemeProvider enableSystem={true} attribute="class">
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
