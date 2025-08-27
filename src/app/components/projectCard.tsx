"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/helper/projectData";

export function ProjectCard({
	title,
	subtitle,
	description,
	image,
	demo,
	github,
}: Project) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			className="relative rounded-xl overflow-hidden shadow-md w-full max-w-sm mx-auto cursor-pointer group bg-secondary"
		>
			<div className="relative h-[350px]">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-all duration-500 group-hover:brightness-100 brightness-50"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</div>

			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-secondary translate-y-full group-hover:translate-y-0 transition-all duration-500 p-4 flex flex-col justify-between">
				{/* Title & text */}
				<div>
					<h3 className="text-lg font-semibold text-primary">{title}</h3>
					{subtitle && <p className="text-sm text-primary mt-1">{subtitle}</p>}
					{description && (
						<p className="text-xs text-primary mt-2 line-clamp-2">
							{description}
						</p>
					)}
				</div>

				{/* Actions */}
				<div className="flex gap-3 mt-4">
					{demo && (
						<Link
							href={demo}
							target="_blank"
							className="text-xs font-semibold text-secondary bg-primary rounded-lg px-3 py-1 hover:underline"
						>
							Demo
						</Link>
					)}
					{github && (
						<Link
							href={github}
							target="_blank"
							className="text-xs font-semibold text-secondary bg-primary rounded-lg px-3 py-1 hover:underline"
						>
							GitHub
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
}
