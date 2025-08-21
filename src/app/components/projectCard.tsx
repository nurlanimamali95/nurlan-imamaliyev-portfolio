"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	subtitle?: string;
	image: string;
}

export function ProjectCard({ title, subtitle, image }: ProjectCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			className="rounded-xl overflow-hidden bg-primary transition-all"
		>
			<div className="relative w-full h-[500px]">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold text-secondary">{title}</h3>
				{subtitle && (
					<p className="text-base text-neutral-500 mt-1">{subtitle}</p>
				)}
			</div>
		</motion.div>
	);
}
