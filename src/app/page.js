import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Resume from "./components/Resume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 text-center">
          <div>
            <p className="mt-3 text-5xl">Hi there, my name is <span className="text-blue-400">Clyde</span></p>
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
        <footer className="text-center align-middle">
          <p>made with <FontAwesomeIcon width={16} icon={faHeart} className="inline"></FontAwesomeIcon> by clyde + next.js</p>
          <p>© 2025 clyde.biz - All Rights Reserved. </p>
        </footer>
      </div>
    </>
  );
}
