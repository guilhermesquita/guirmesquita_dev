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
    <header className="w-full md:w-[34.375rem] flex flex-col md:flex-row md:items-center md:justify-between mt-8 mb-16 gap-4 md:gap-9">
      <div className="flex items-center gap-3 justify-between order-1 md:order-2">
        <div className="flex md:hidden gap-3 text-white">
        {socialLinksRender()}
  </div>
        <div className="flex items-center gap-3">
          <ChangeThemeToggle />
          <Select />
        </div>
      </div>

      <div className="flex md:justify-between justify-center items-center md:w-[30.4375rem] py-2 px-5 rounded border border-gray-400 bg-gray-400/10 text-caption text-white order-2 md:order-1">
        <nav>
          {routes.map((route) => (
            <NavLink key={route.name} to={route.href} style={activeStyle}>
              <span className="hover:text-main-blue">{route.name}</span>
            </NavLink>
          ))}
        </nav>

        <nav className="flex gap-3 md:order-2 hidden md:flex">
  {socialLinksRender()}
</nav>

      </div>
    </header>
  );
}
