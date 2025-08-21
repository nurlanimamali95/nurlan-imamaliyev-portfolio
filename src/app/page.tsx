"use client";

import Loader from "@/app/components/loader";

export default function Home() {
	return (
		<div className="bg-secondary text-primary h-fit">
			<Loader />

			<div className="flex justify-center items-center h-screen text-5xl font-bold">
				This is Cosmo Cats
			</div>
		</div>
	);
}
