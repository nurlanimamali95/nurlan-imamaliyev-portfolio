"use client";

import { useEffect, useState } from "react";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useTransform,
	useMotionTemplate,
	animate,
} from "framer-motion";
import { shuffle } from "lodash";
import SpaceCat from "@/app/icons/spaceCat";

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

export default function Loader({ onFinish }: { onFinish?: () => void }) {
	const [isVisible, setIsVisible] = useState(true);
	const [floatingCats, setFloatingCats] = useState<FloatingCat[]>([]);

	const percentage = useMotionValue(0);
	const rounded = useTransform(percentage, (latest) => Math.round(latest));
	const percentageText = useMotionTemplate`${rounded}%`;

	useEffect(() => {
		const totalCats = 40;
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

		const shuffled = shuffle(positions).slice(0, totalCats);

		const cats: FloatingCat[] = Array.from({ length: totalCats }, (_, i) => ({
			id: i,
			x: shuffled[i].x,
			y: shuffled[i].y,
			delay: Math.random() * 2,
			direction: (Math.random() > 0.5 ? "left" : "right") as "left" | "right",
			rotationSpeed: 8 + Math.random() * 20,
			scale: Math.random(),
			rotateDirection: (Math.random() > 0.5 ? 1 : -1) as 1 | -1,
		}));

		setFloatingCats(cats);

		const controls = animate(percentage, 100, {
			duration: 4,
			onComplete: () => {
				setIsVisible(false);
				onFinish?.();
			},
		});

		return () => controls.stop();
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed inset-0 z-[200] bg-black overflow-hidden flex flex-col items-center justify-center"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8 }}
				>
					{floatingCats.map((cat) => (
						<motion.div
							key={cat.id}
							initial={{ opacity: 0, scale: 0.3 }}
							animate={{
								opacity: 1,
								scale: 1,
								x: cat.direction === "right" ? 100 : -100,
								rotate: 360 * cat.rotateDirection,
							}}
							transition={{
								opacity: { duration: 0.8, delay: cat.delay },
								scale: { duration: 0.8, delay: cat.delay },
								x: {
									repeat: Infinity,
									repeatType: "mirror",
									duration: cat.rotationSpeed,
									delay: cat.delay,
								},
								rotate: {
									repeat: Infinity,
									repeatType: "loop",
									duration: cat.rotationSpeed * 2,
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
								opacity: 1,
								transformOrigin: "center",
							}}
						>
							<SpaceCat />
						</motion.div>
					))}

					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="z-10"
					>
						<SpaceCat />
					</motion.div>

					<motion.span
						style={{ color: "white" }}
						className="text-2xl mt-6 z-10 font-medium tracking-wide"
					>
						{percentageText}
					</motion.span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
