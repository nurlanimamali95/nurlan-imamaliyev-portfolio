import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
	color?: string;
	size?: string;
}

export function SocialLinks({
	color = "text-primary",
	size = "text-2xl",
}: SocialLinksProps) {
	const baseClass = `${color} ${size} transition-transform transition-colors duration-300 ease-out`;

	return (
		<div className="flex space-x-6">
			<a
				href="https://www.instagram.com"
				target="_blank"
				className={`${baseClass}  hover:scale-125 hover:-rotate-6`}
			>
				<FaInstagram />
			</a>
			<a
				href="https://www.linkedin.com"
				target="_blank"
				className={`${baseClass}  hover:scale-125 hover:rotate-6`}
			>
				<FaLinkedin />
			</a>
		</div>
	);
}
