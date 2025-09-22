"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/helper/projectData";

export function Card({ title, image, demo, github }: ProjectData) {
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			className="relative rounded-lg overflow-hidden w-full h-[380px] bg-black group"
		>
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="relative w-full h-[120%]"
					initial={{ y: 0 }}
					whileHover={{ y: -60 }}
					transition={{ duration: 2, ease: "easeInOut" }}
				>
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 33vw"
					/>
				</motion.div>
			</div>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div className="flex gap-3">
					{demo && (
						<Link
							href={demo}
							target="_blank"
							className="px-4 py-2 rounded-full bg-secondary/80 text-primary font-medium text-sm hover:bg-secondary transition min-w-[100px]"
						>
							Demo ↗
						</Link>
					)}
					{github && (
						<Link
							href={github}
							target="_blank"
							className="px-4 py-2 rounded-full bg-secondary/80 text-primary font-medium text-sm hover:bg-secondary transition min-w-[100px]"
						>
							GitHub ↗
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
}
