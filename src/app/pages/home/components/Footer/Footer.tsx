import Github from "@/assets/social-links/gitHub.svg?react";
import Linkedin from "@/assets/social-links/linkedIn.svg?react";
import Figma from "@/assets/social-links/figma.svg?react";
import { socialLinks } from "@/app/pages/data/links-header";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const renderSocialLinkIcon = (socialName: string) => {
        switch (socialName) {
            case "GitHub":
                return <Github className="w-4 h-4 cursor-pointer hover:text-gray-300 duration-200" />;
            case "LinkedIn":
                return <Linkedin className="w-4 h-4 cursor-pointer hover:text-gray-300 duration-200" />;
            case "Figma":
                return <Figma className="w-4 h-4 cursor-pointer hover:text-gray-300 duration-200" />;
            default:
                return null;
        }
    };

    const socialLinksRender = () => {
        return socialLinks.map((social) => (
            <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {renderSocialLinkIcon(social.name)}
            </a>
        ));
    };

    return (
        <footer className="p-5 border-2 border-gray-200 rounded-[10px] bg-gray-400 text-caption text-white">
            <div className="flex justify-between">
                <p>guimesquita @ {currentYear}</p>
                <div className="flex gap-3">{socialLinksRender()}</div>
            </div>
        </footer>
    );
}