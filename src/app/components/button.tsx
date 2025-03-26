"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LinkProps = {
	children: string;
	icon?: React.ReactNode;
	isThemeToggle?: boolean;
	onClick?: () => void;
};

const DURATION = 0.25;
const STAGGER = 0.015;

export default function FlipLink({
	children,
	icon,
	isThemeToggle = false,
	onClick,
}: LinkProps) {
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileOrTablet(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = () => {
		if (isThemeToggle && onClick) {
			onClick();
		}
	};

	return (
		<motion.button
			initial="initial"
			whileHover="hovered"
			whileTap={{ scale: 0.95 }}
			className="relative block overflow-hidden text-2xl uppercase font-sans font-bold"
			onClick={handleClick}
		>
			{isMobileOrTablet && icon ? (
				<div className="flex justify-center items-center">{icon}</div>
			) : (
				<>
					<div>
						{children.split("").map((l, i) => (
							<motion.span
								className="inline-block"
								variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
								transition={{
									duration: DURATION,
									ease: "easeInOut",
									delay: STAGGER * i,
								}}
								key={i}
							>
								{l === " " ? "\u00A0" : l}
							</motion.span>
						))}
					</div>
					<div className="absolute inset-0">
						{children.split("").map((l, i) => (
							<motion.span
								className="inline-block"
								variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
								transition={{
									duration: DURATION,
									ease: "easeInOut",
									delay: STAGGER * i,
								}}
								key={i}
							>
								{l === " " ? "\u00A0" : l}
							</motion.span>
						))}
					</div>
				</>
			)}
		</motion.button>
	);
}
