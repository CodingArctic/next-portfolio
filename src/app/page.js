import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import Resume from "./components/Resume";
import dynamic from 'next/dynamic';

const FaHeart = dynamic(() => import('react-icons/fa').then(mod => ({ default: mod.FaHeart })), { ssr: true });

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 text-center">
          <div>
            <p className="mt-6 text-5xl max-w-[85%] m-auto font-light">Hi, my name is <span className="text-[#D5C6E0] font-bold">Clyde Geyer</span></p>
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
        <footer className="text-center my-2 align-middle">
          <p>made with <FaHeart size={16} className="inline text-[#D5C6E0]" /> by clyde + next.js</p>
          <p>© 2025 clyde.biz - All Rights Reserved. </p>
        </footer>
      </div>
    </>
  );
}
