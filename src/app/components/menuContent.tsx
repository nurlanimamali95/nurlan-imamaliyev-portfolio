import { motion } from "framer-motion";
import AboutCat from "@/app/icons/aboutCat";
import ProjectCat from "@/app/icons/projectCat";
import ContactCat from "@/app/icons/contactCat";
import { SocialLinks } from "@/app/components/socialLinks";

export default function MenuContent() {
	return (
		<section className="bg-tertiary p-4 md:p-8">
			<div className="mx-auto max-w-5xl mb-10">
				<Link
					heading="Meowview"
					subheading="Learn what we do here"
					href="/meowview"
					icon={<AboutCat />}
				/>
				<Link
					heading="Meowworks"
					subheading="Our work speaks for itself"
					href="/meowworks"
					icon={<ProjectCat />}
				/>
				{/* <Link
					heading="Meowlink"
					subheading="We work with great people"
					href="/meowlinks"
					icon={<ContactCat />}
				/> */}
			</div>
			<SocialLinks />
		</section>
	);
}

interface LinkProps {
	heading: string;
	subheading: string;
	href: string;
	icon: React.ReactNode;
}

export function Link({ heading, subheading, href, icon }: LinkProps) {
	return (
		<motion.a
			href={href}
			initial="initial"
			whileHover="whileHover"
			className="group relative flex items-center justify-between border-b-2 border-transparent py-4 transition-colors duration-500 hover:border-primary md:py-4"
		>
			<div className="flex flex-col">
				<motion.span
					variants={{
						initial: { x: 0 },
						whileHover: { x: -16 },
					}}
					transition={{
						type: "spring",
						staggerChildren: 0.075,
						delayChildren: 0.25,
					}}
					className="relative z-10 block text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary md:text-6xl gap-5"
				>
					{heading.split("").map((l, i) => (
						<motion.span
							variants={{
								initial: { x: 0 },
								whileHover: { x: 16 },
							}}
							transition={{ type: "spring" }}
							className="inline-block"
							key={i}
						>
							{l}
						</motion.span>
					))}
				</motion.span>
				<span className="relative z-10 mt-2 block text-base text-tertiary transition-colors duration-500 group-hover:text-primary">
					{subheading}
				</span>
			</div>
			<motion.div
				variants={{
					initial: {
						opacity: 0,
						x: "25%",
					},
					whileHover: {
						opacity: 1,
						x: "0%",
					},
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 25,
				}}
				className="relative z-10 p-4 ml-6"
			>
				{icon}
			</motion.div>
		</motion.a>
	);
}
