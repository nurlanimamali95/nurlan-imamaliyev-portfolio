import Logo from "@/app/components/logo";
import ThemeToggle from "@/utils/toggleThemes";
import HamburgerMenu from "@/app/components/burgerMenu";

export default function Navigation() {
	return (
		<div className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-[2rem] md:px-[4rem] py-[1rem] bg-secondary text-primary">
			<div className="justify-self-start">
				<Logo />
			</div>
			<div className="justify-self-center">
				<ThemeToggle />
			</div>
			<div className="justify-self-end">
				<HamburgerMenu />
			</div>
		</div>
	);
}
