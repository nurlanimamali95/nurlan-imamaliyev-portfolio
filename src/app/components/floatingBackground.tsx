"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import SpaceCat from "@/app/icons/floating";

interface FloatingCat {
	id: number;
	x: number;
	y: number;
	delay: number;
	direction: "left" | "right";
	rotationSpeed: number;
	scale: number;
	rotateDirection: 1 | -1;
}

export default function FloatingCats({ total = 30 }: { total?: number }) {
	const [cats, setCats] = useState<FloatingCat[]>([]);

	useEffect(() => {
		const gridCols = 10;
		const gridRows = 10;
		const cellSize = 100 / gridCols;

		const positions: { x: number; y: number }[] = [];
		for (let col = 0; col < gridCols; col++) {
			for (let row = 0; row < gridRows; row++) {
				positions.push({
					x: col * cellSize + Math.random() * (cellSize / 2),
					y: row * cellSize + Math.random() * (cellSize / 2),
				});
			}
		}

		const shuffled = shuffle(positions).slice(0, total);

		const newCats: FloatingCat[] = Array.from({ length: total }, (_, i) => ({
			id: i,
			x: shuffled[i].x,
			y: shuffled[i].y,
			delay: Math.random() * 3,
			direction: Math.random() > 0.5 ? "left" : "right",
			rotationSpeed: 3 + Math.random() * 8,
			scale: 0.5 + Math.random(),
			rotateDirection: Math.random() > 0.5 ? 1 : -1,
		}));

		setCats(newCats);
	}, [total]);

	return (
		<>
			{cats.map((cat) => (
				<motion.div
					key={cat.id}
					initial={{ opacity: 0, scale: 0.3 }}
					animate={{
						opacity: 0.15,
						scale: cat.scale,
						x: cat.direction === "right" ? 100 : -100,
						rotate: 360 * cat.rotateDirection,
					}}
					transition={{
						opacity: { duration: 1, delay: cat.delay },
						scale: { duration: 1, delay: cat.delay },
						x: {
							repeat: Infinity,
							repeatType: "mirror",
							duration: cat.rotationSpeed * 0.5,
							delay: cat.delay,
						},
						rotate: {
							repeat: Infinity,
							repeatType: "loop",
							duration: cat.rotationSpeed,
							delay: cat.delay,
						},
					}}
					style={{
						position: "absolute",
						left: `${cat.x}%`,
						top: `${cat.y}%`,
						width: `${40 + cat.scale * 40}px`,
						height: `${40 + cat.scale * 40}px`,
						pointerEvents: "none",
						transformOrigin: "center",
					}}
				>
					<SpaceCat />
				</motion.div>
			))}
		</>
	);
}
