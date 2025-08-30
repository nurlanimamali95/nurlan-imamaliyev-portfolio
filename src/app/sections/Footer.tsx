"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/app/components/socialLinks";

export default function Footer() {
	return (
		<footer className="relative bg-primary text-secondary px-6 py-8 border-t border-secondary/20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-md mx-auto flex flex-col items-center gap-6 text-center"
			>
				<div className="flex flex-col md:flex-row items-center justify-center gap-6">
					<div className="flex items-center gap-2 text-sm font-medium">
						<Image
							src="/logo.svg"
							alt="CosmoCats logo"
							width={40}
							height={40}
						/>
					</div>

					<nav className="flex gap-6 text-xs uppercase tracking-wide">
						<Link
							href="/about"
							className="hover:text-tertiary transition-colors"
						>
							About
						</Link>
						<Link
							href="/work"
							className="hover:text-tertiary transition-colors"
						>
							Work
						</Link>
						<Link
							href="/contact"
							className="hover:text-tertiary transition-colors"
						>
							Contact
						</Link>
					</nav>

					<SocialLinks color="text-secondary" />
				</div>

				<div className="flex items-center gap-2 text-xs text-secondary">
					<span>Made with love</span>
					<Image
						src="/images/gif.gif"
						alt="Cute cats"
						width={50}
						height={50}
						className="rounded-md"
					/>
					<span>by CosmoCats</span>
				</div>
			</motion.div>
		</footer>
	);
}
