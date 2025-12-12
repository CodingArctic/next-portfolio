import React from "react";

function Resume() {
    return (
        <div id="resume" className="m-5 flex flex-col">
            <h1 id="projects" className="text-5xl mb-5">
                Resume
            </h1>
            <iframe src="/docs/2025.12.12.resume.pdf" className="w-full h-[500px] md:h-[700px] lg:h-[900px] min-w-[300px] sm:max-h-[500px] max-w-5xl self-center flex-auto flex-shrink">
            </iframe>
        </div>
    );
}

export default Resume;