"use client";

import { useState } from "react";
import { ProjectCard } from "@/app/components/projectCard";
import { projects } from "@/helper/projectData";
import FloatingCats from "@/app/components/floatingBackground";
import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";

export default function ProjectsPage() {
	const [showAll, setShowAll] = useState(false);
	const visibleProjects = showAll ? projects : projects.slice(0, 6);

	return (
		<section className="relative min-h-screen bg-primary text-primary py-28 overflow-hidden mt-20">
			<FloatingCats total={20} />
			<div className="mb-16">
				<h2 className="text-4xl font-bold mb-11 leading-tight text-secondary text-center">
					Selected Work
				</h2>
				<p className="text-secondary max-w-2xl mx-auto text-xl">
					A glimpse into the projects that shape our journey. Each piece
					reflects our passion for design and storytelling at Cosmo Cats.
				</p>
			</div>

			<AnimatedGroup
				preset="blur-slide"
				variants={{
					container: {
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
							},
						},
					},
					item: {
						hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: {
								duration: 1.2,
								type: "spring",
								bounce: 0.3,
							},
						},
					},
				}}
			>
				<div className="relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{visibleProjects.map((project, index) => (
							<div key={index} className="cursor-pointer">
								<ProjectCard {...project} />
							</div>
						))}
					</div>

					{!showAll && (
						<div className="flex justify-center mt-20">
							<button
								onClick={() => setShowAll(true)}
								className="group inline-flex items-center gap-2 rounded-lg border-[1.5px] border-tertiary bg-secondary px-4 py-2 text-primary transition-all duration-200 hover:bg-primary hover:text-secondary font-medium"
							>
								View More Projects
							</button>
						</div>
					)}
				</div>
			</AnimatedGroup>
		</section>
	);
}
