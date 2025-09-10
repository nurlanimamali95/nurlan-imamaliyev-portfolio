import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
				"primary-glass": "var(--color-primary-glass)",
				"secondary-glass": "var(--color-secondary-glass)",
			},
			fontFamily: {
				sans: ["GeneralSans", "sans-serif"],
			},
			fontWeight: {
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
			},
		},
	},
	plugins: [],
} satisfies Config;
