import React from "react";
import LightModeIcon from "../../../../assets/icons/sun_light.svg?react";
import DarkModeIcon from "../../../../assets/icons/moon_light.svg?react";
import { useThemeStore } from "../../../stores/themeStore";
import Toggle from "../../Toogle";

interface ChangeThemeToggleProps {
  disabled?: boolean;
  className?: string;
}

const ChangeThemeToggle: React.FC<ChangeThemeToggleProps> = ({
  disabled = false,
  className = "",
}) => {
  const { isDarkMode, setMode } = useThemeStore();

  const handleThemeChange = (value: string) => {
    setMode(value as "dark" | "light");
  };

  const toggleOptions = [
    {
      value: "light",
      icon: (
        <LightModeIcon
          className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-opacity duration-200 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />
      ),
      label: "Light mode",
    },
    {
      value: "dark",
      icon: (
        <DarkModeIcon
          className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-opacity duration-200 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      ),
      label: "Dark mode",
    },
  ] as const;

  return (
    <Toggle
      options={toggleOptions}
      value={isDarkMode ? "dark" : "light"}
      onChange={handleThemeChange}
      disabled={disabled}
      className={className}
    />
  );
};

export default ChangeThemeToggle;
