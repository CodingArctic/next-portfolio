import React from "react";
import Image from "next/image";
import { FaLink, FaGithub, FaReact, FaPython, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaVuejs, FaAngular, FaPhp } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiDjango, SiFlask, SiExpress, SiKubernetes, SiSqlite, SiVite } from 'react-icons/si';
import Link from "next/link";

// Icon mapping object
const iconMap = {
    react: FaReact,
    python: FaPython,
    nodejs: FaNodeJs,
    javascript: FaJs,
    html: FaHtml5,
    css: FaCss3Alt,
    docker: FaDocker,
    aws: FaAws,
    vue: FaVuejs,
    angular: FaAngular,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    redis: SiRedis,
    graphql: SiGraphql,
    django: SiDjango,
    flask: SiFlask,
    express: SiExpress,
    kubernetes: SiKubernetes,
    golang: FaGolang,
    php: FaPhp,
    sqlite: SiSqlite,
    vite: SiVite
};

const ProjectCard = ({ title, link, github, image, description, techStack = [] }) => {
    return (
        <>
            <div className="relative rounded-xl max-w-2xl m-6 p-4 bg-gradient-to-bl from-[#D5C6E0]/60 via-[#192A51] to-[#192A51] transform transition-all duration-300 hover:scale-[1.03] overflow-hidden will-change-transform shadow-[0_0_0_2px_#BA5A31] hover:shadow-[0_0_20px_rgba(186,90,49,0.5),0_0_0_2px_#BA5A31]">
                <Image
                    src={image}
                    width={600}
                    height={400}
                    alt={title}
                    className="rounded-md m-auto w-full h-auto md:h-100 md:object-cover md:object-top transition-transform duration-300"
                />
                <div className="flex mt-2 place-content-between items-center">
                    <h1 className="text-3xl font-bold text-[#D5C6E0]">{title}</h1>
                </div>
                {description && (
                    <p className="mt-2 text-gray-300 leading-relaxed">{description}</p>
                )}
                <div className="flex place-content-between items-end mt-4">
                    {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => {
                                const Icon = iconMap[tech.toLowerCase()];
                                return Icon ? (
                                    <div key={index} className="flex items-center gap-1 text-sm transition-transform hover:scale-110">
                                        <Icon size={24} color="#BA5A31"/>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    )}
                    <div className="flex flex-row gap-1">
                        {link && (
                            <Link target="_blank" className="p-1.5 transition-all hover:scale-110 hover:text-[#BA5A31]" href={link}>
                                <FaLink size={32} color="#D5C6E0"/>
                            </Link>
                        )}
                        {github && (
                            <Link target="_blank" className="p-1.5 transition-all hover:scale-110 hover:text-[#BA5A31]" href={github}>
                                <FaGithub size={32} color="#D5C6E0"/>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;