"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

export default function RevealText({
	children,
	delay = 0,
	className,
}: RevealTextProps) {
	return (
		<div className="overflow-hidden">
			<motion.div
				initial={{ y: "100%", opacity: 0 }}
				animate={{ y: "0%", opacity: 1 }}
				transition={{
					duration: 0.8,
					ease: [0.77, 0, 0.175, 1],
					delay,
				}}
				className={className}
			>
				{children}
			</motion.div>
		</div>
	);
}
