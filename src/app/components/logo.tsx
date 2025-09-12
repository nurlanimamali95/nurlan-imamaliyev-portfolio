"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Logo() {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="relative flex items-center cursor-pointer"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Link href="/">
				<div className="flex items-center justify-center font-bold text-[var(--color-primary)]">
					{/* N */}
					<motion.span
						animate={{ marginRight: hovered ? "0.001rem" : "0rem" }}
						transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-2xl md:text-3xl"
					>
						N
					</motion.span>

					<motion.span
						className="text-2xl md:text-3xl"
						initial={false}
						animate={{
							opacity: hovered ? 1 : 0,
							x: hovered ? 0 : -6,
							width: hovered ? "auto" : 0,
						}}
						transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
						style={{ overflow: "hidden", display: "inline-block" }}
					>
						urlan
					</motion.span>

					<motion.span
						animate={{ marginLeft: hovered ? "0.1rem" : "0rem" }} // smaller gap
						transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
						className="text-2xl md:text-3xl"
					>
						I.
					</motion.span>
				</div>
			</Link>
		</div>
	);
}
