"use client";

import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: {
		title: string;
		subtitle?: string;
		image?: string;
		video?: string;
		description?: string;
		demo?: string;
		github?: string;
		reviews?: string[];
	};
}

const overlayVariants = {
	hidden: { opacity: 0, y: "100%" },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: "100%" },
};

const containerVariants = {
	hidden: { opacity: 0, x: "25%" },
	visible: { opacity: 1, x: "0%" },
	exit: { opacity: 0, x: "25%" },
};

const letterVariants = {
	hidden: { x: 16 },
	visible: { x: 0 },
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={onClose}
					className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-8"
				>
					<motion.div
						className="bg-black/60 rounded-t-3xl w-full max-w-4xl backdrop-blur-sm"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						onClick={onClose}
					/>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{ type: "spring", stiffness: 300, damping: 25 }}
						className="absolute bottom-10 bg-white rounded-2xl w-full max-w-4xl p-6 z-50 shadow-lg"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-gray-500 hover:text-black"
							aria-label="Close modal"
						>
							✕
						</button>

						<h2 className="text-2xl font-bold mb-2 flex overflow-hidden">
							{project.title.split("").map((l, i) => (
								<motion.span
									key={i}
									variants={letterVariants}
									initial="hidden"
									animate="visible"
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 25,
										delay: i * 0.015 + 0.25,
									}}
									className="inline-block"
								>
									{l === " " ? "\u00A0" : l}
								</motion.span>
							))}
						</h2>

						{project.subtitle && (
							<p className="text-gray-600 mb-4">{project.subtitle}</p>
						)}

						<div className="w-[800px] h-[600px] mb-4 rounded-xl overflow-hidden mx-auto">
							<video
								src={project.video}
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-full object-cover"
							/>
						</div>

						{project.description && (
							<p className="text-gray-700 mb-4">{project.description}</p>
						)}

						<div className="flex flex-wrap gap-4 mb-4 justify-center">
							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									className="text-blue-600 underline"
									rel="noreferrer"
								>
									View Demo
								</a>
							)}
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									className="text-blue-600 underline"
									rel="noreferrer"
								>
									GitHub
								</a>
							)}
						</div>

						{project.reviews && project.reviews.length > 0 && (
							<div className="mt-6">
								<h3 className="text-lg font-semibold mb-2">Reviews</h3>
								<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
									{project.reviews.map((review, i) => (
										<li key={i}>{review}</li>
									))}
								</ul>
							</div>
						)}
					</motion.div>
				</Dialog>
			)}
		</AnimatePresence>
	);
}
