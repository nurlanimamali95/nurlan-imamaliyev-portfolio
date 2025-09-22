"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";
// import CatsBackground from "@/app/icons/floating";
import Stack from "@/app/components/stack";
import FloatingCats from "@/app/icons/spaceCat";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: delay * 0.2,
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	}),
};

export default function AboutSection() {
	return (
		<section className="relative min-h-screen max-h-screen flex items-center justify-center bg-primary text-secondary py-20 overflow-hidden">
			<div className="absolute inset-0 z-0 opacity-20">
				<FloatingCats />
			</div>

			<div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.6 }}
					variants={fadeUp}
					custom={0}
					className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-secondary shadow-lg cursor-pointer"
					whileHover={{
						scale: 1.05,
						boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
					}}
					transition={{ type: "spring", stiffness: 200, damping: 15 }}
				>
					<Image
						src="/images/me1.png"
						alt="Nurlan Imamaliyev"
						fill
						className="object-cover"
					/>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.6 }}
					variants={fadeUp}
					custom={1}
				>
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<p className="text-lg opacity-80 leading-relaxed max-w-2xl">
						Hi, I’m <span className="font-semibold">Nurlan Imamaliyev</span>, a
						Frontend Developer & Designer passionate about building modern,
						creative, and user-friendly digital experiences. I enjoy blending
						aesthetics with functionality to bring digital ideas to life — with
						a touch of cosmic cat energy. 🐱🚀
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeUp}
					custom={2}
					className="w-full flex justify-center mt-6"
				>
					<Stack />
				</motion.div>
			</div>
		</section>
	);
}
