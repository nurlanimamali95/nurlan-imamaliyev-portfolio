import { motion } from "framer-motion";

export default function RainbowSmoke() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
			style={{
				width: "80px",
				height: "500px",
				background:
					"linear-gradient(180deg, red, orange, yellow, green, blue, indigo, violet)",
				filter: "blur(50px)",
				borderRadius: "50%",
				opacity: 0.6,
			}}
		/>
	);
}
