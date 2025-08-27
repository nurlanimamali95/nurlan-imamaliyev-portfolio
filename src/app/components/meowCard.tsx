"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MeowCardProps {
	title: string;
	description: ReactNode;
	image: ReactNode;
}

export function MeowCard({ title, description, image }: MeowCardProps) {
	return (
		<motion.div
			whileHover="hover"
			initial="initial"
			className="relative overflow-hidden rounded-xl shadow-lg group w-full h-[400px] bg-secondary transition-transform duration-500 ease-in-out"
		>
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

			<div className="absolute bottom-6 left-6 z-10 text-left">
				<h3 className="text-primary text-2xl font-bold">{title}</h3>
			</div>

			<motion.div
				variants={{
					initial: { opacity: 0, y: 50 },
					hover: { opacity: 1, y: 0 },
				}}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="absolute inset-0 flex items-center justify-center p-6 text-center bg-secondary bg-opacity-80 group-hover:opacity-100"
			>
				<div className="text-primary text-lg max-w-md space-y-4">
					{description}
				</div>
			</motion.div>
		</motion.div>
	);
}
