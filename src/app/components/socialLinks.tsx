import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
	color?: string; // Tailwind class for color (default: text-primary)
	size?: string; // Tailwind class for size (default: text-2xl)
}

export function SocialLinks({
	color = "text-primary",
	size = "text-2xl",
}: SocialLinksProps) {
	const iconClass = `${color} ${size}`;

	return (
		<div className="flex space-x-6">
			<a href="https://www.instagram.com" target="_blank" className={iconClass}>
				<FaInstagram />
			</a>
			<a href="https://www.facebook.com" target="_blank" className={iconClass}>
				<FaFacebook />
			</a>
			<a href="https://www.twitter.com" target="_blank" className={iconClass}>
				<FaTwitter />
			</a>
			<a href="https://www.linkedin.com" target="_blank" className={iconClass}>
				<FaLinkedin />
			</a>
		</div>
	);
}
