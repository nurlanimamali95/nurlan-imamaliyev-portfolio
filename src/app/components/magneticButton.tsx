"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "../../../components/motion-primitives/magnetic";

const springOptions = { bounce: 0.1 };

const baseClasses =
	"group inline-flex items-center rounded-lg border border-tertiary bg-secondary px-3 py-2 text-l text-primary transition-all duration-200 hover:bg-primary hover:text-secondary";

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
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="transition-transform duration-200 group-hover:translate-x-0.5"
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
