/* eslint react/no-unescaped-entities */

import Image from "next/image";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 text-center">
          <div>
            <h2 className="mt-3 text-5xl">Hi there, my name is<span className="text-blue-400 ml-3">Clyde</span></h2>
          </div>
          <div className="mt-2">I'm a full-stack developer</div>
          <div>and fourth-year Web & Mobile Computing Major at RIT</div>
          <div className="flex justify-around">
            <SocialLink name="linkedin" url="https://www.linkedin.com/in/clydegeyer/"></SocialLink>
            <SocialLink name="github" url="https://www.github.com/CodingArctic/"></SocialLink>
          </div>
        </div>
        <hr className="m-5 opacity-50" />
        <Projects />
        <hr className="m-5 opacity-50" />
        <Resume />
        <footer>
          made with love by clyde + next.js
        </footer>
      </div>
    </>
  );
}
