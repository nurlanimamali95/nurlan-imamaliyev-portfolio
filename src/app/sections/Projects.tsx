"use client";

import { useState } from "react";
import { Card } from "@/app/components/projectCard";
import { projectsData } from "@/helper/projectData";
import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";

export default function ProjectsSection() {
	const [showAll, setShowAll] = useState(false);

	const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

	return (
		<section className="relative min-h-screen bg-primary text-primary py-28 overflow-hidden">
			<div className="mb-32 text-center">
				<h2 className="text-4xl font-bold mb-4 leading-tight text-secondary">
					Selected Work
				</h2>
				<p className="text-secondary max-w-2xl mx-auto text-lg opacity-80">
					A glimpse into my work — blending creativity, design, and development
					into unique digital experiences.
				</p>
			</div>

			<AnimatedGroup
				preset="blur-slide"
				variants={{
					container: {
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.1 },
						},
					},
					item: {
						hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: { duration: 1, type: "spring", bounce: 0.2 },
						},
					},
				}}
			>
				<div className="relative z-10 max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="flex flex-col gap-6">
							{visibleProjects
								.filter((_, i) => i % 3 === 0)
								.map((project, index) => (
									<Card key={index} {...project} />
								))}
						</div>

						<div className="flex flex-col gap-6 md:mt-[-60px]">
							{visibleProjects
								.filter((_, i) => i % 3 === 1)
								.map((project, index) => (
									<Card key={index} {...project} />
								))}
						</div>

						<div className="flex flex-col gap-6">
							{visibleProjects
								.filter((_, i) => i % 3 === 2)
								.map((project, index) => (
									<Card key={index} {...project} />
								))}
						</div>
					</div>

					<div className="flex justify-center mt-12">
						<button
							onClick={() => setShowAll(!showAll)}
							className="px-5 py-2 rounded-full border border-secondary text-secondary text-sm font-medium hover:bg-secondary hover:text-primary transition"
						>
							{showAll ? "Show Less" : "See More Projects"}
						</button>
					</div>
				</div>
			</AnimatedGroup>
		</section>
	);
}
