"use client";

import styles from "@/app/components/parallax/styles.module.scss";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import HangingCat from "@/app/icons/hangingCat";
import Image from "next/image";
import { MagneticLinkButton } from "@/app/components/magneticButton";

export default function ZoomParallax() {
	const container = useRef(null);
	const springConfig = { stiffness: 120, damping: 20 };

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useSpring(
		useTransform(scrollYProgress, [0, 1], [1, 4]),
		springConfig
	);
	const scale5 = useSpring(
		useTransform(scrollYProgress, [0, 1], [1, 5]),
		springConfig
	);
	const scale6 = useSpring(
		useTransform(scrollYProgress, [0, 1], [1, 6]),
		springConfig
	);
	const scale8 = useSpring(
		useTransform(scrollYProgress, [0, 1], [1, 8]),
		springConfig
	);


	const catScale = useTransform(scrollYProgress, [0.6, 1], [1, 1.5]);

	const buttonOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
	const buttonY = useTransform(scrollYProgress, [0.95, 1], [40, 0]);

	const items = [
		{ type: "contact", scale: catScale },
		{
			type: "image",
			src: "/images/illustrations/solar (2).svg",
			scale: scale4,
		},
		{
			type: "image",
			src: "/images/illustrations/catbro (2).svg",
			scale: scale5,
		},
		{
			type: "image",
			src: "/images/illustrations/catspace (2).svg",
			scale: scale6,
		},
		{
			type: "image",
			src: "/images/illustrations/greenspace (2).svg",
			scale: scale5,
		},
		{
			type: "image",
			src: "/images/illustrations/helmet (2).svg",
			scale: scale6,
		},
		{ type: "image", src: "/images/illustrations/sun (2).svg", scale: scale8 },
	];

	return (
		<div ref={container} className={styles.container}>
			<div className={styles.sticky}>
				{items.map(({ type, src, scale }, index) => (
					<motion.div
						key={index}
						style={{ scale }}
						// images: no pointer events, contact: interactive + on top
						className={`${styles.el} ${
							type === "contact"
								? "z-[9999] pointer-events-auto"
								: "pointer-events-none"
						}`}
					>
						<div className={styles.imageContainer}>
							{type === "image" && (
								<Image
									src={src!}
									alt="illustration"
									fill
									className="object-contain"
								/>
							)}

							{type === "contact" && (
								<div className="relative flex flex-col items-center justify-center">
									{/* Cat SVG */}
									<div className="relative flex items-center justify-center">
										<HangingCat className="w-full max-w-md h-[15rem] text-secondary" />

										{/* Button overlay */}
										<motion.div
											style={{
												opacity: buttonOpacity,
												y: buttonY,
												translateY: -30,
												x: 10,
											}}
											className="absolute inset-0 flex items-center justify-center z-50"
										>
											{" "}
											<MagneticLinkButton
												href="/contactus"
												label="Go to Contact"
											/>
										</motion.div>
									</div>
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
