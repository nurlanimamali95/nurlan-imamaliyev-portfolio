"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "../../../components/motion-primitives/magnetic";
import clsx from "clsx";

const springOptions = { bounce: 0.1 };

const baseClasses = clsx(
	"group inline-flex items-center rounded-lg border border-tertiary bg-secondary text-primary transition-all duration-200 hover:bg-primary hover:text-secondary",
	// mobile (default)
	"px-2 py-1.5 text-sm",
	// tablet+
	"sm:px-3 sm:py-2 sm:text-base",
	// desktop+
	"md:px-4 md:py-2 md:text-lg"
);

function InnerContent({ label }: { label: ReactNode }) {
	return (
		<Magnetic
			intensity={0.1}
			springOptions={springOptions}
			actionArea="global"
			range={200}
		>
			<span className="inline-flex items-center gap-2">
				{label}
				<svg
					aria-hidden="true"
					className={clsx(
						"transition-transform duration-200 group-hover:translate-x-0.5",
						"w-4 h-4", // mobile
						"sm:w-5 sm:h-5", // tablet
						"md:w-6 md:h-6" // desktop
					)}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M9 18l6-6-6-6" />
				</svg>
			</span>
		</Magnetic>
	);
}

export function MagneticLinkButton({
	href,
	label,
}: {
	href: React.ComponentProps<typeof Link>["href"];
	label: ReactNode;
}) {
	return (
		<Magnetic
			intensity={0.2}
			springOptions={springOptions}
			actionArea="global"
			range={200}
		>
			<Link href={href} className={baseClasses}>
				<InnerContent label={label} />
			</Link>
		</Magnetic>
	);
}

export function MagneticActionButton({
	onClick,
	label,
	type = "button",
}: {
	onClick?: () => void;
	label: ReactNode;
	type?: "button" | "submit" | "reset";
}) {
	return (
		<Magnetic
			intensity={0.2}
			springOptions={springOptions}
			actionArea="global"
			range={200}
		>
			<button type={type} onClick={onClick} className={baseClasses}>
				<InnerContent label={label} />
			</button>
		</Magnetic>
	);
}
