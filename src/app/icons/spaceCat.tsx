"use client";

import { motion } from "framer-motion";
import SpaceCat from "@/app/icons/spaceCat";

export default function FloatingCats({ total = 20 }: { total?: number }) {
	// Generate random configs for each cat
	const cats = Array.from({ length: total }, (_, i) => ({
		id: i,
		size: Math.floor(Math.random() * 60) + 20, // 20–80px
		x: Math.random() * 100, // viewport %
		y: Math.random() * 100, // viewport %
		duration: Math.random() * 15 + 10, // 10–25s
		rotation: Math.random() * 360, // random initial rotation
		delay: Math.random() * 5, // random delay
	}));
	return (
		<div className="absolute inset-0 overflow-hidden z-0">
			{cats.map((cat) => (
				<motion.div
					key={cat.id}
					initial={{
						x: `${cat.x}vw`,
						y: `${cat.y}vh`,
						rotate: cat.rotation,
						scale: 0,
					}}
					animate={{
						y: [`${cat.y}vh`, `${(cat.y + 20) % 100}vh`], // float up/down
						rotate: [cat.rotation, cat.rotation + 360], // continuous spin
						scale: [0.8, 1.2, 0.8],
					}}
					transition={{
						duration: cat.duration,
						repeat: Infinity,
						repeatType: "mirror",
						delay: cat.delay,
						ease: "linear",
					}}
					className="absolute"
					style={{
						width: cat.size,
						height: cat.size,
					}}
				>
					<SpaceCat />
				</motion.div>
			))}
		</div>
	);
}
