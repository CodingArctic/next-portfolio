import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Resume from "./components/Resume";
import { FaHeart } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 text-center">
          <div>
            <p className="mt-3 text-5xl max-w-[80%] m-auto font-light">Hi, my name is <span className="text-blue-400 font-bold">Clyde Geyer</span></p>
          </div>
          <div className="mt-2 m-auto max-w-80 text-wrap font-medium">
            I'm a full-stack developer, and fourth-year Web & Mobile Computing Major at RIT
          </div>
          <div className="flex mt-8 justify-around">
            <SocialLink name="linkedin" url="https://www.linkedin.com/in/clydegeyer/"></SocialLink>
            <SocialLink name="github" url="https://www.github.com/CodingArctic/"></SocialLink>
          </div>
        </div>
        <hr className="m-5 opacity-50 " />
        <Projects />
        <hr className="m-5 opacity-50" />
        <Resume />
        <footer className="text-center align-middle">
          <p>made with <FaHeart size={16} className="inline" /> by clyde + next.js</p>
          <p>© 2025 clyde.biz - All Rights Reserved. </p>
        </footer>
      </div>
    </>
  );
}
