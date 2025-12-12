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
            <div className="border-1 rounded-md max-w-2xl m-2 p-4">
                <Image
                    src={image}
                    width={600}
                    height={400}
                    alt={title}
                    className="rounded-md m-auto w-full h-auto md:h-100 md:object-cover md:object-top"
                />
                <div className="flex mt-2 place-content-between">
                    <h1 className="text-3xl mt-2">{title}</h1>
                    <div className="flex flex-row">
                        {link && (
                            <Link target="_blank" href={link}>
                                <FaLink size={40}/>
                            </Link>
                        )}
                        {github && (
                            <Link target="_blank" href={github}>
                                <FaGithub size={40}/>
                            </Link>
                        )}
                    </div>
                </div>
                {description && (
                    <p>{description}</p>
                )}
                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {techStack.map((tech, index) => {
                            const Icon = iconMap[tech.toLowerCase()];
                            return Icon ? (
                                <div key={index} className="flex items-center gap-1 text-sm">
                                    <Icon size={24} />
                                </div>
                            ) : null;
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default ProjectCard;