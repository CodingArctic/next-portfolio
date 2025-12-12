import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="m-5">
            <h1 id="projects" className="text-5xl mb-5 font-bold text-[#D5C6E0]">
                Projects
            </h1>
            <div className="flex justify-center flex-auto flex-wrap">
                <ProjectCard
                    title="Golf Card Game"
                    link="https://golf.clyde.biz"
                    image="/images/projects/golf.png"
                    github="https://github.com/CodingArctic/golf-card-game"
                    description="A full-stack project built to recreate the card game Golf, online."
                    techStack={['golang', 'postgresql', 'nextjs', 'tailwind', 'docker']}
                />
                <ProjectCard
                    title="RIT iSchool Info Site"
                    link="https://340Proj2.pages.dev"
                    image="/images/projects/ischool.png"
                    github="https://github.com/CodingArctic/340Proj2"
                    description="A data-driven frontend project using RIT's iSchool API routes."
                    techStack={['vite', 'react', 'css']}
                />
                <ProjectCard
                    title="CRUD Car Marketplace Demo/API"
                    image="/images/projects/carmart.png"
                    github="https://github.com/CodingArctic/iste444-project2"
                    description="A full-stack demo car marketplace with basic API CRUD actions."
                    techStack={['sqlite', 'express', 'vite', 'react', 'css']}
                />
                <ProjectCard
                    title="Hitchhiker's Guide to Unix"
                    link="https://clyde.biz/240GroupProj"
                    image="/images/projects/unix.png"
                    github="https://github.com/CodingArctic/240GroupProj"
                    description="A tutorial website to teach common Unix skills & commands."
                    techStack={['php', 'html', 'css', 'javascript']}
                />
            </div>
        </div>
    );
}

export default Projects;