"use client";

import Marquee from "react-fast-marquee";
import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiFramer,
	SiPayloadcms,
	SiSass,
	SiMongodb,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiMysql,
} from "react-icons/si";

const skills = [
	{ icon: <SiNextdotjs />, name: "Next.js" },
	{ icon: <SiReact />, name: "React.js" },
	{ icon: <SiTailwindcss />, name: "Tailwind" },
	{ icon: <SiTypescript />, name: "Typescript" },
	{ icon: <SiFramer />, name: "Framer Motion" },
	{ icon: <SiPayloadcms />, name: "Payload CMS" },
	{ icon: <SiSass />, name: "SASS" },
	{ icon: <SiMongodb />, name: "MongoDB" },
	{ icon: <SiJavascript />, name: "JavaScript" },
	{ icon: <SiHtml5 />, name: "HTML" },
	{ icon: <SiCss3 />, name: "CSS" },
	{ icon: <SiNodedotjs />, name: "Node.js" },
	{ icon: <SiMysql />, name: "MySQL" },
];

export default function Stack() {
	return (
		<div className="max-w-[50rem] m-auto mt-12">
			<Marquee direction="left" speed={60} gradient={false}>
				<div className="flex items-center gap-7 px-4 py-6 text-4xl text-secondary">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center min-w-[60px] hover:scale-110 transition-transform duration-300"
						>
							{skill.icon}
							<p className="text-sm mt-1">{skill.name}</p>
						</div>
					))}
				</div>
			</Marquee>
		</div>
	);
}
