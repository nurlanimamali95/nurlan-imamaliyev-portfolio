"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MagneticActionButton } from "@/app/components/magneticButton";

export default function ContactUsPage() {
	const [sent, setSent] = useState(false);

	return (
		<section className="relative flex min-h-screen items-center justify-center bg-primary text-secondary overflow-hidden px-6">
			{/* Contact Form Card with video background */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative z-10 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
			>
				{/* Video inside card */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="/videos/sun.mp4" type="video/mp4" />
				</video>

				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/60" />

				{/* Form Content */}
				<div className="relative p-10">
					<h1 className="text-4xl font-bold text-white mb-6">
						Let’s build something <span className="text-tertiary">cosmic</span>
					</h1>
					<p className="text-white/70 mb-8">
						Fill out the form and we’ll get back to you soon.
					</p>

					{!sent ? (
						<form
							onSubmit={(e) => {
								e.preventDefault();
								setSent(true);
							}}
							className="space-y-6"
						>
							<div>
								<label className="block text-sm font-medium text-white mb-1">
									Your Name
								</label>
								<input
									type="text"
									required
									className="w-full rounded-lg border border-tertiary bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-tertiary"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-white mb-1">
									Email Address
								</label>
								<input
									type="email"
									required
									className="w-full rounded-lg border border-tertiary bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-tertiary"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-white mb-1">
									Your Message
								</label>
								<textarea
									rows={5}
									required
									className="w-full rounded-lg border border-tertiary bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-tertiary"
								/>
							</div>

							<MagneticActionButton
								label="Send to Orbit"
								onClick={() => console.log("Button pressed")}
							/>
						</form>
					) : (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="text-center py-20 text-white"
						>
							<h2 className="text-3xl font-bold mb-4">Message Sent</h2>
							<p className="text-white/70">
								Thanks for reaching out — we’ll get back to you soon.
							</p>
						</motion.div>
					)}
				</div>
			</motion.div>
		</section>
	);
}
