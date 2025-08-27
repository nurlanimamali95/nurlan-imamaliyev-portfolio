import { MeowCard } from "@/app/components/meowCard";
import Philosophy from "@/app/icons/philosopy";
import Vision from "@/app/icons/vision";
import Link from "next/link";
import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";
import Stack from "@/app/components/stack";
import { FiArrowRight } from "react-icons/fi";

export default function MeowviewPage() {
	return (
		<section className="min-h-screen bg-primary text-secondary px-4 py-28 mt-20">
			<div className="max-w-5xl mx-auto text-center mb-16">
				<h1 className="text-4xl font-bold mb-11">Meowview</h1>
				<AnimatedGroup
					preset="blur-slide"
					variants={{
						container: {
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.05,
								},
							},
						},
						item: {
							hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
							visible: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)",
								transition: {
									duration: 1.2,
									type: "spring",
									bounce: 0.3,
								},
							},
						},
					}}
				>
					<p className="text-secondary max-w-2xl mx-auto text-xl">
						Welcome to the view of everything we see, dream and create at Cosmo
						Cats. Explore our creative world, stories, and snapshots of
						inspiration.
					</p>
				</AnimatedGroup>
			</div>

			<AnimatedGroup
				className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
				preset="blur-slide"
				variants={{
					container: {
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
							},
						},
					},
					item: {
						hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: {
								duration: 1.2,
								type: "spring",
								bounce: 0.3,
							},
						},
					},
				}}
			>
				<MeowCard
					title="Vision & Philosophy"
					description="We believe in dreaming wildly, designing boldly, and building with soul. Our philosophy is rooted in curiosity and cosmic creativity."
					image={<Vision />}
				/>
				<MeowCard
					title="Tools we Use"
					description={
						<>
							<p className="mb-10">
								From Figma to React and Tailwind — here’s a glimpse into the
								stack that fuels our cosmic creations.
							</p>
							<Stack />
						</>
					}
					image={<Philosophy />}
				/>
			</AnimatedGroup>

			<div className="mt-16 text-center">
				<Link
					href="/meowworks"
					className="group inline-flex items-center gap-2 rounded-lg border-[1.5px] border-tertiary bg-secondary px-4 py-2 text-primary transition-all duration-200 hover:bg-primary hover:text-secondary font-medium"
				>
					<span>Continue to Meowworks</span>
					<FiArrowRight
						size={16}
						className="transition-transform duration-200 group-hover:translate-x-1"
						aria-hidden="true"
					/>
				</Link>
			</div>
		</section>
	);
}
