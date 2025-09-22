"use client";

import { motion } from "framer-motion";
import HeroPlanet from "@/app/icons/heroPlanet";
import HeroFood from "@/app/icons/heroFood";
import HeroCat from "@/app/icons/heroCat";
import RevealText from "@/app/components/revealText";
import {
	MagneticLinkButton,
	MagneticActionButton,
} from "@/app/components/magneticButton";

export default function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden">
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<motion.div
					className="absolute"
					style={{ width: "350px", height: "350px" }}
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
				>
					<motion.div
						className="absolute top-0 left-1/2 -translate-x-1/2"
						animate={{ rotate: -360 }}
						transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
					>
						<HeroPlanet className="w-30 h-30" />
					</motion.div>
				</motion.div>

				<motion.div
					className="absolute"
					style={{ width: "550px", height: "550px" }}
					initial={{ rotate: 120 }}
					animate={{ rotate: -240 }}
					transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
				>
					<motion.div
						className="absolute top-0 left-1/2 -translate-x-1/2"
						animate={{ rotate: 240 }}
						transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
					>
						<HeroCat className="w-25 h-25" />
					</motion.div>
				</motion.div>

				<motion.div
					className="absolute"
					style={{ width: "750px", height: "750px" }}
					initial={{ rotate: 240 }}
					animate={{ rotate: -120 }}
					transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
				>
					<motion.div
						className="absolute top-0 left-1/2 -translate-x-1/2"
						animate={{ rotate: 120 }}
						transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
					>
						<HeroFood className="w-13 h-13" />
					</motion.div>
				</motion.div>
			</div>

			<RevealText className="relative z-10 text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
				NI. <br />
				<span className="opacity-80">Frontend Developer & Designer</span>
			</RevealText>

			<motion.p
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className="relative z-10 mt-6 max-w-2xl text-lg md:text-xl opacity-80"
			>
				With nine lives of creativity and a universe of code, I craft digital
				experiences that balance aesthetics with functionality.
			</motion.p>

			<div className="relative z-10 mt-8 flex gap-11">
				<MagneticLinkButton href={"#"} label="Get In Touch" />
				<MagneticActionButton
					onClick={() => {
						const link = document.createElement("a");
						link.href = "/resume.pdf";
						link.download = "logo.svg";
						link.click();
					}}
					label="Resume"
				/>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-6 flex flex-col items-center gap-2 text-sm opacity-70"
			>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 1.5 }}
					className="w-4 h-6 rounded-full border border-[var(--color-primary)] flex items-start justify-center"
				>
					<div className="w-1 h-2 bg-[var(--color-primary)] rounded-full mt-1" />
				</motion.div>
				<span>Scroll down</span>
			</motion.div>
		</section>
	);
}
