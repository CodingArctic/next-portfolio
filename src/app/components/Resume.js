import Link from "next/link";
import React from "react";

function Resume() {
    let PATH = "/docs/2025.12.12.resume.pdf";
    return (
        <div id="resume" className="m-5 flex flex-col">
            <h1 id="projects" className="text-5xl mb-5 font-bold text-[#D5C6E0]">
                Resume
            </h1>
            <iframe src={PATH} loading="lazy" className="hidden sm:block w-5/6 h-[500px] md:h-[700px] lg:h-[900px] min-w-[300px] sm:max-h-[500px] max-w-5xl self-center flex-auto flex-shrink">
            </iframe>
                <Link href={PATH}
                    target="blank"
                    className="block sm:hidden p-2 bg-[#BA5A31] m-auto rounded-md w-9/12"
                >
                    <p className="font-semibold text-center text-wrap">
                        Not enough width!
                    </p>
                    <p className="font-semibold text-center">
                        Click here for full screen.
                    </p>
                </Link>
        </div>
    );
}

export default Resume;