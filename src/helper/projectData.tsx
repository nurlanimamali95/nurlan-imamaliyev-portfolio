export interface ProjectData {
	title: string;
	subtitle?: string;
	image: string;
	video?: string;
	description?: string;
	demo?: string;
	github?: string;
	reviews?: string[];
}

export const projectsData: ProjectData[] = [
	{
		title: "Jasmine Tours",
		subtitle: "Experience agency",
		image: "/images/projects/tasting1.jpg",
		video: "/videos/jt.mp4",
		description:
			"Jasmine Tours helps you plan immersive travel experiences with custom itineraries and local guides.",
		demo: "https://jasmine-tours.com",
		github: "https://github.com/yourusername/jasmine-tours",
		reviews: ["Great UI!", "Very easy to use.", "Loved the design!"],
	},
	{
		title: "YouthInclusiveTheatre",
		subtitle: "Community theatre",
		image: "/images/projects/yit.jpg",
		description:
			"A platform to showcase youth theatre productions and community engagement projects.",
		demo: "https://youthinclusive-theatre.org",
		github: "https://github.com/yourusername/youthinclusive-theatre",
		reviews: ["Very inspiring!", "Smooth navigation.", "Engaging content."],
	},
	{
		title: "NLFiscaal",
		subtitle: "Tax advisory site",
		image: "/images/projects/nlf.jpg",
		description:
			"NLFiscaal offers personalized tax advisory services and up-to-date fiscal news in the Netherlands.",
		demo: "https://nlfiscaal.nl",
		github: "https://github.com/yourusername/nlfiscaal",
		reviews: [
			"Helpful and accurate info.",
			"Professional look.",
			"Easy to find articles.",
		],
	},
	{
		title: "SunnySide",
		subtitle: "Brand identity project",
		image: "/images/projects/uk.jpg",
		description:
			"SunnySide is a vibrant brand identity design project focused on bright and optimistic visuals.",
		demo: "https://sunnyside-brand.com",
		github: "https://github.com/yourusername/sunnyside",
		reviews: [
			"Eye-catching colors!",
			"Clean typography.",
			"Loved the logo concept.",
		],
	},
	{
		title: "NI Portfolio",
		subtitle: "Design portfolio",
		image: "/images/projects/ni.png",
		description:
			"A personal design portfolio showcasing creative projects in UI/UX and graphic design.",
		demo: "https://ni-portfolio.com",
		github: "https://github.com/yourusername/ni-portfolio",
		reviews: [
			"Beautiful layout.",
			"Great project variety.",
			"Very professional.",
		],
	},
	{
		title: "BookYourFuture",
		subtitle: "Booking platform",
		image: "/images/projects/byf.jpg",
		description:
			"BookYourFuture is a platform to book workshops, classes, and coaching sessions online.",
		demo: "https://bookyourfuture.com",
		github: "https://github.com/yourusername/bookyourfuture",
		reviews: ["Easy to book!", "Reliable system.", "Smooth user experience."],
	},
	{
		title: "Album Spotter",
		subtitle: "Music discovery app",
		image: "/images/projects/albumspotter.png",
		description:
			"Album Spotter helps users discover new music albums tailored to their tastes and moods.",
		demo: "https://albumspotter.app",
		github: "https://github.com/yourusername/albumspotter",
		reviews: [
			"Love the recommendations!",
			"Nice UI animations.",
			"Perfect for music lovers.",
		],
	},
	{
		title: "Art Museum",
		subtitle: "Gallery showcase",
		image: "/images/projects/mam.png",
		description:
			"Art Museum is a digital gallery showcasing contemporary artworks with artist bios and event updates.",
		demo: "https://artmuseum.gallery",
		github: "https://github.com/yourusername/artmuseum",
		reviews: [
			"Stunning visuals.",
			"Very informative.",
			"Great online experience.",
		],
	},
	{
		title: "Super Mario Quiz",
		subtitle: "Mini game UI",
		image: "/images/projects/smq.png",
		description:
			"A fun mini-game UI quiz themed around Super Mario, testing knowledge with timed challenges.",
		demo: "https://supermarioquiz.com",
		github: "https://github.com/yourusername/supermarioquiz",
		reviews: ["Addictive gameplay!", "Fun for all ages.", "Nice retro design."],
	},
];
