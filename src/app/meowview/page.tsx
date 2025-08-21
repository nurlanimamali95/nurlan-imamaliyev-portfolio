import { MeowCard } from "@/app/components/meowCard";
import Philosophy from "@/app/icons/philosopy";
import Vision from "@/app/icons/vision";
import FigmaIcon from "@/app/icons/stack/react";
import IllustratorIcon from "@/app/icons/stack/react";
import ReactIcon from "@/app/icons/stack/react";
import NextjsIcon from "@/app/icons/stack/react";
import TailwindIcon from "@/app/icons/stack/react";
import GithubIcon from "@/app/icons/stack/react";
import VsCodeIcon from "@/app/icons/stack/react";
import FramerMotionIcon from "@/app/icons/stack/react";
import GsapIcon from "@/app/icons/stack/react";
import Link from "next/link";

export default function MeowviewPage() {
	return (
		<section className="min-h-screen bg-primary text-secondary px-4 py-12 mt-20">
			<div className="max-w-5xl mx-auto text-center mb-16">
				<h1 className="text-5xl font-bold mt-2 mb-4">Meowview</h1>
				<p className="text-secondary max-w-xl mx-auto">
					Welcome to the view of everything we see, dream and create at Cosmo
					Cats. Explore our creative world, stories, and snapshots of
					inspiration.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
				<MeowCard
					title="Vision & Philosophy"
					description="We believe in dreaming wildly, designing boldly, and building with soul. Our philosophy is rooted in curiosity and cosmic creativity."
					image={<Vision />}
				/>
				<MeowCard
					title="Tools we Use"
					description="From Figma to React and Tailwind — here’s a glimpse into the stack that fuels our cosmic creations."
					image={<Philosophy />}
					tools={[
						{
							label: "Design",
							icons: [<FigmaIcon key="figma" />, <IllustratorIcon key="ai" />],
						},
						{
							label: "Frontend",
							icons: [
								<span key={"react"} className="inline-block">
									<ReactIcon key="react" />
								</span>,
								<NextjsIcon key="next" />,
								<TailwindIcon key="tailwind" />,
							],
						},
						{
							label: "Dev Tools",
							icons: [<GithubIcon key="github" />, <VsCodeIcon key="vscode" />],
						},
						{
							label: "Animations",
							icons: [
								<FramerMotionIcon key="framer" />,
								<GsapIcon key="gsap" />,
							],
						},
					]}
				/>
			</div>

			<div className="mt-16 text-center">
				<Link
					href="/projects"
					className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-white transition"
				>
					Continue to Meowworks →
				</Link>
			</div>
		</section>
	);
}
