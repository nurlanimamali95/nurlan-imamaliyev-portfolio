"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (custom: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.15,
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	}),
};

export default function AboutBlock() {
	return (
		<section className="relative h-screen flex items-center px-6 md:px-12 text-secondary overflow-hidden">
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/videos/stars.mp4" type="video/mp4" />
			</video>
			<div className="absolute inset-0 bg-primary/50 z-0" />
			<div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<div className="space-y-8 p-6 rounded-2xl bg-primary-glass backdrop-blur-md">
					<motion.div
						className="overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 1 }}
					>
						<motion.h3
							className="text-lg font-semibold uppercase tracking-wider text-secondary"
							variants={fadeUp}
							custom={0}
						>
							What you can expect from us:
						</motion.h3>
					</motion.div>
					<motion.div
						className="overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.6 }}
					>
						<motion.p
							className="text-l md:text-xl leading-snug"
							variants={fadeUp}
							custom={1}
						>
							At CosmoCats, we craft digital experiences with precision,
							creativity, and a cosmic touch. We believe in clean design,
							playful storytelling, and purposeful user journeys.
						</motion.p>
					</motion.div>
				</div>
				<div className="space-y-8 p-6 rounded-2xl bg-primary-glass backdrop-blur-md">
					<motion.ul
						className="space-y-3 text-xl md:text-xl text-secondary"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.6 }}
					>
						{[
							"Web design & development — landing pages, full sites, digital platforms",
							"Branding & identity — logos, guidelines, creative direction",
							"Digital storytelling — animations, interactions, UI/UX polish",
						].map((service, i) => (
							<motion.li
								key={i}
								variants={fadeUp}
								custom={i}
								className="overflow-hidden"
							>
								{service}
							</motion.li>
						))}
					</motion.ul>
					<motion.div
						className="overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.6 }}
					>
						<motion.p
							className="text-sm md:text-base text-secondary leading-relaxed"
							variants={fadeUp}
							custom={3}
						>
							With backgrounds in design, coding, and creative strategy, our
							team blends minimalism with imagination to deliver projects that
							resonate deeply with people — and stand the test of time.
						</motion.p>
					</motion.div>
					<motion.div
						className="overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.6 }}
					>
						<motion.p
							className="text-sm md:text-base text-secondary leading-relaxed"
							variants={fadeUp}
							custom={4}
						>
							Learn what we do in{" "}
							<span className="font-semibold">Meowview</span> — where we share
							our vision, philosophy, and the tools we use to craft digital
							worlds.
						</motion.p>
					</motion.div>
					<motion.div
						className="overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.6 }}
					>
						<motion.div variants={fadeUp} custom={5}>
							<Link
								href="/meowview"
								className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium hover:bg-secondary hover:text-primary transition-colors"
							>
								Explore Meowview <ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
