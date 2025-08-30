"use client";

import ZoomParallax from "@/app/components/parallax/zoomParallax";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "@/app/components/loader";
import Hero from "@/app/sections/Hero";
import Footer from "@/app/sections/Footer";

export default function Home() {
	const [showLoader, setShowLoader] = useState(false);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const loaderSeen = sessionStorage.getItem("loaderSeen");

		if (!loaderSeen) {
			setShowLoader(true);
		} else {
			setShowContent(true);
		}

		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<main className="bg-primary text-secondary">
			{showLoader && (
				<Loader
					onFinish={() => {
						setShowLoader(false);
						setShowContent(true);
						sessionStorage.setItem("loaderSeen", "true");
					}}
				/>
			)}
			{showContent && <Hero />}
			<div>
				<ZoomParallax />
			</div>
			<Footer />
		</main>
	);
}
