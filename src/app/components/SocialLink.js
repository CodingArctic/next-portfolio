import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const socialMediaLogos = {
    github: FaGithub,
    linkedin: FaLinkedin,
};

const SocialLink = ({ name, url }) => {
    const Icon = socialMediaLogos[name.toLowerCase()];

    if (!Icon) {
        return <p>Logo for {name} not found</p>;
    }

    return (
        <div className="mx-2">
            <Link href={url} target='_blank'>
                <Icon aria-label={`Visit Clyde's ${name}`} className="fill-[#D8BFD8] transition-all hover:scale-110" size={75}/>
            </Link>
        </div>
    );
};

export default SocialLink;