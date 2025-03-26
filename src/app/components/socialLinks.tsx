import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Or any icon library

export function SocialLinks() {
	return (
		<div className="flex space-x-6 justify-start mt-8">
			{" "}
			<a
				href="https://www.instagram.com"
				target="_blank"
				className="text-2xl text-primary"
			>
				<FaInstagram />
			</a>
			<a
				href="https://www.facebook.com"
				target="_blank"
				className="text-2xl text-primary"
			>
				<FaFacebook />
			</a>
			<a
				href="https://www.twitter.com"
				target="_blank"
				className="text-2xl text-primary"
			>
				<FaTwitter />
			</a>
			<a
				href="https://www.linkedin.com"
				target="_blank"
				className="text-2xl text-primary"
			>
				<FaLinkedin />
			</a>
		</div>
	);
}
