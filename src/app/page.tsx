import Navigation from "@/app/components/navigation";

export default function Home() {
	return (
		<div className="bg-secondary text-primary h-fit">
			<Navigation />
			<div className="flex justify-center items-center h-screen text-5xl font-bold">
				This is Cosmo Cats
			</div>
		</div>
	);
}
