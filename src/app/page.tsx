"use client";

import ZoomParallax from "@/app/components/parallax/zoomParallax";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "@/app/components/loader";
import Hero from "@/app/sections/Hero";

export default function Home() {
	const [showContent, setShowContent] = useState(false);
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main className="bg-primary text-secondary">
			<Loader onFinish={() => setShowContent(true)} />
			{showContent && <Hero />}
			<div>
				<ZoomParallax />
			</div>
		</main>
	);
}
