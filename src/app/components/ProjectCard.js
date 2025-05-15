import React from "react";
import Image from "next/image";
import SocialLink from "./SocialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/fontawesome-free-solid';
import Link from "next/link";

const ProjectCard = ({ title, link, github, image }) => {
    return (
        <>
            <div className="border-1 rounded-md max-w-2xl min-w-lg m-2 p-4">
                <h1 className="text-3xl">{title}</h1>
                <div className="flex p-2">
                <Link href={link}><FontAwesomeIcon icon={faLink} width={50} height={50}/></Link>
                <Link href={github}><FontAwesomeIcon icon={faGithub} width={50} height={50}/></Link>
                </div>
                <Image src={image} width={600} height={600} alt={title}></Image>
            </div>
        </>
    );
}

export default ProjectCard;