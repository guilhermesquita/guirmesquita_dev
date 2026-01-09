import { NavLink } from "react-router-dom";
import Github from "../../assets/social-links/gitHub.svg?react";
import Linkedin from "../../assets/social-links/linkedIn.svg?react";
import Figma from "../../assets/social-links/figma.svg?react";
import { routes, socialLinks } from "../../app/pages/data/links-header";
import ChangeThemeToggle from "./components/changeThemeToogle";
import Select from "../../shared/components/Select";

const activeStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "700" : "400",
  textDecoration: "none",
  color: isActive ? "var(--color-main-blue)" : "inherit",
  marginRight: "1rem",
});

export default function Header() {
  const renderSocialLinkIcon = (socialName: string) => {
    switch (socialName) {
      case "GitHub":
        return <Github className="w-4 h-4 cursor-pointer icon" />;
      case "LinkedIn":
        return <Linkedin className="w-4 h-4 cursor-pointer icon" />;
      case "Figma":
        return <Figma className="w-4 h-4 cursor-pointer icon" />;
      default:
        return null;
    }
  };

  return (
    <header className="w-[550px] flex justify-between items-center mt-8 mb-16 gap-9">
      <div className="flex justify-between items-center w-[487px] py-2 px-5 rounded border border-gray-400 bg-gray-400/10 text-caption text-white">
        <nav>
          {routes.map((route) => (
            <NavLink key={route.name} to={route.href} style={activeStyle}>
              <span className="hover:text-main-blue">{route.name}</span>
            </NavLink>
          ))}
        </nav>

        <nav className="flex gap-3">
          {socialLinks.map((social) => (
            <NavLink
              key={social.name}
              to={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {renderSocialLinkIcon(social.name)}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <ChangeThemeToggle />
        <Select />
      </div>
    </header>
  );
}
