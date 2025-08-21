"use client";

import { useState } from "react";
import FlipLink from "@/app/components/button";
import { FaSun } from "react-icons/fa";

export default function ThemeToggle() {
	const themes = [
		"theme-1",
		"theme-2",
		"theme-3",
		"theme-4",
		"theme-5",
		"theme-6",
		"theme-7",
		"theme-8",
		"theme-9",
		"theme-10",
		"theme-11",
	];
	const [currentThemeIndex, setCurrentThemeIndex] = useState(-1);

	const toggleTheme = () => {
		const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
		setCurrentThemeIndex(nextThemeIndex);

		document.documentElement.classList.remove(...themes);
		document.documentElement.classList.add(themes[nextThemeIndex]);
	};

	return (
		<FlipLink isThemeToggle={true} icon={<FaSun />} onClick={toggleTheme}>
			Shift the Ambiance
		</FlipLink>
	);
}
