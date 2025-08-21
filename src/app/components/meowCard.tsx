"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ToolCategory {
	label: string;
	icons: ReactNode[];
}

interface MeowCardProps {
	title: string;
	description: string;
	image: ReactNode;
	tools?: ToolCategory[];
}

export function MeowCard({
	title,
	description,
	image,
	tools = [],
}: MeowCardProps) {
	// Flatten tools into a single array of icons for carousel
	const flatIcons = tools.flatMap((cat) => cat.icons);

	return (
		<motion.div
			whileHover="hover"
			initial="initial"
			className="relative overflow-hidden rounded-xl shadow-lg group w-full h-[400px] bg-secondary transition-transform duration-500 ease-in-out"
		>
			{/* Background image */}
			<motion.div
				variants={{
					initial: { opacity: 1 },
					hover: { opacity: 0.3 },
				}}
				transition={{ duration: 0.6 }}
				className="absolute inset-0 flex items-center justify-center w-full h-full"
			>
				{image}
			</motion.div>

			{/* Title */}
			<div className="absolute bottom-6 left-6 z-10 text-left">
				<h3 className="text-primary text-2xl font-bold">{title}</h3>
			</div>

			{/* Tool Carousel (on hover only) */}
			{flatIcons.length > 0 && (
				<motion.div
					variants={{
						initial: { opacity: 0 },
						hover: { opacity: 1 },
					}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="absolute bottom-24 left-6 right-6 z-10 overflow-hidden"
				>
					<motion.div
						className="flex gap-4 w-max"
						animate={{
							x: ["0%", "-50%"],
						}}
						transition={{
							repeat: Infinity,
							duration: 10,
							ease: "linear",
						}}
					>
						{[...flatIcons, ...flatIcons].map((icon, i) => (
							<span key={i} className="w-6 h-6 flex-shrink-0">
								{icon}
							</span>
						))}
					</motion.div>
				</motion.div>
			)}

			{/* Hover overlay with description */}
			<motion.div
				variants={{
					initial: { opacity: 0, y: 50 },
					hover: { opacity: 1, y: 0 },
				}}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="absolute inset-0 flex items-center justify-center p-6 text-center bg-secondary bg-opacity-80 group-hover:opacity-100"
			>
				<p className="text-primary text-base max-w-md">{description}</p>
			</motion.div>
		</motion.div>
	);
}
