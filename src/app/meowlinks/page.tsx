"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
	{
		name: "Luna Mee",
		role: "Art Director at Starlight Studio",
		text: "Working with Cosmo Cats was a cosmic experience! Their eye for detail and design is unmatched.",
		image: "/images/projects/byf.jpg",
	},
	{
		name: "Leo Starson",
		role: "Developer at Galaxy Apps",
		text: "The creativity, communication, and delivery were out of this world. Highly recommended!",
		image: "/images/projects/byf.jpg",
	},
	{
		name: "Mira Sun",
		role: "Founder at Orbit Brands",
		text: "Cosmo Cats brought our brand vision to life in a way no one else could. Pure magic!",
		image: "/images/projects/byf.jpg",
	},
	{
		name: "Zane Comet",
		role: "CTO at Nova Webworks",
		text: "Our collaboration with Cosmo Cats launched us to the next level. Truly visionary work!",
		image: "/images/projects/byf.jpg",
	},
	{
		name: "Kira Orbit",
		role: "Designer at Lunalabs",
		text: "I've never seen such dedication to aesthetics and functionality. Stunning results!",
		image: "/images/projects/byf.jpg",
	},
	{
		name: "Ravi Moon",
		role: "CEO at AstroMarketing",
		text: "Professional, creative, and intuitive — Cosmo Cats are stellar partners in any project.",
		image: "/images/projects/byf.jpg",
	},
];

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function MeowlinkPage() {
	return (
		<section className="min-h-screen bg-black text-white px-4 py-20 mt-20">
			<div className="max-w-6xl mx-auto text-center mb-16">
				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl font-bold mb-2 text-primary"
				>
					Meowlink
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-300"
				>
					We work with great people
				</motion.p>
				<div className="h-1 mt-4 bg-gray-700 w-1/4 mx-auto rounded-full"></div>
			</div>

			{/* Testimonials Grid */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
			>
				{testimonials.map((t, i) => (
					<motion.div
						key={i}
						variants={item}
						className="bg-secondary rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-[1.015] transition-transform duration-300"
					>
						<div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border-2 border-primary">
							<Image src={t.image} alt={t.name} fill className="object-cover" />
						</div>
						<h3 className="text-xl font-bold text-primary mb-1">{t.name}</h3>
						<p className="text-sm text-gray-400 mb-4">{t.role}</p>
						<p className="text-base text-white">{t.text}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
