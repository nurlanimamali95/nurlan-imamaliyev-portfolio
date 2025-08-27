"use client";

import { motion } from "framer-motion";
import HeroPlanet from "@/app/icons/heroPlanet";
import HeroFood from "@/app/icons/heroFood";
import HeroCat from "@/app/icons/heroCat";
import RevealText from "@/app/components/revealText";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden">
			<div className="relative">
				<div className="absolute inset-0 flex items-center justify-center">
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
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
							>
								<HeroPlanet className="w-30 h-30" />
							</motion.div>
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
							<motion.div
								animate={{ rotate: -360 }}
								transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
							>
								<HeroCat className="w-25 h-25" />
							</motion.div>
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
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
							>
								<HeroFood className="w-13 h-13" />
							</motion.div>
						</motion.div>
					</motion.div>
				</div>

				<RevealText className="relative z-10 text-6xl md:text-8xl font-bold leading-tight">
					Cosmo<span className="text-tertiary">Cats</span>
				</RevealText>
			</div>

			<RevealText
				delay={0.3}
				className="mt-6 max-w-2xl text-lg md:text-2xl opacity-80"
			>
				Designing digital worlds with nine lives of creativity.
			</RevealText>
		</section>
	);
}
