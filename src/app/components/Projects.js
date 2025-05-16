import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="m-7">
            <h1 id="projects" className="text-5xl mb-5">
                Projects
            </h1>
            <div className="flex justify-center flex-auto flex-wrap">
                <ProjectCard title="iSchool at RIT Info Site (React.js)" link="https://340Proj2.pages.dev" image="/images/projects/ischool.png" github="https://github.com/CodingArctic/340Proj2"/>
                <ProjectCard title="CRUD Car Marketplace Demo/API" image="/images/projects/carmart.png" github="https://github.com/CodingArctic/iste444-project2"/>
                <ProjectCard title="Unix Tutorial Page" link="https://clyde.biz/240GroupProj" image="/images/projects/unix.png" github="https://github.com/CodingArctic/240GroupProj"/>
            </div>
        </div>
    );
}

export default Projects;