import React from "react";
import ProjectCard from "./ProjectCard";

function Resume() {
    return (
        <div id="resume" className="m-7 flex flex-col">
            <h1 id="projects" className="text-5xl mb-5">
                Resume
            </h1>
            <iframe src="/docs/resume.pdf" height={800} className="w-full max-w-7xl min-w-[300px] self-center flex-shrink">
            </iframe>
        </div>
    );
}

export default Resume;