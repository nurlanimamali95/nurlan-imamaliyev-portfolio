"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  MenuContent from "@/app/components/menuContent";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="z-[100] relative flex flex-col gap-1 md:gap-2 w-10 h-10 justify-center items-center text-primary"
			>
				<motion.span
					className="bg-primary w-8 h-[3px] rounded-md absolute"
					animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				/>
				<motion.span
					className="bg-primary w-8 h-[3px] rounded-md absolute"
					animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}
				/>
				<motion.span
					className="bg-primary w-8 h-[3px] rounded-md absolute"
					animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 bg-tertiary flex items-center justify-center z-[50]"
						initial={{ y: "-100%", opacity: 0 }}
						animate={{ y: "0%", opacity: 1 }}
						exit={{ y: "-100%", opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<MenuContent />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
