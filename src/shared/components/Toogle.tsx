import React from "react";

interface ToggleOption {
  value: string;
  icon?: React.ReactNode;
  label?: string;
}

interface ToggleProps {
  options: readonly [ToggleOption, ToggleOption];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  const [leftOption, rightOption] = options;
  const isLeftActive = value === leftOption.value;

  const handleOptionClick = (optionValue: string) => {
    if (disabled || value === optionValue) return;
    onChange(optionValue);
  };

  return (
    <div className={`inline-flex flex-col gap-2 ${className}`}>
      <label
        className={`inline-flex items-center ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        <input type="checkbox" disabled={disabled} className="sr-only peer" />

        <div className="relative flex h-[20px] w-[43px] rounded-full bg-gray-400 transition-colors duration-300 sm:h-5 sm:w-12">
          <div
            className={`absolute top-1/2 h-[14px] w-[15px] -translate-y-1/2 rounded-full bg-[#1C2038] transition-transform duration-300 ease-in-out sm:h-4 sm:w-4 ${
              isLeftActive
                ? "translate-x-[20%]"
                : "translate-x-[160%] sm:translate-x-[180%]"
            }`}
          />

          <button
            type="button"
            onClick={() => handleOptionClick(leftOption.value)}
            disabled={disabled}
            className="z-10 flex flex-1 items-center justify-center cursor-pointer"
            aria-label={leftOption.label || leftOption.value}
          >
            {leftOption.icon && (
              <div
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-opacity duration-200 ${
                  isLeftActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {leftOption.icon}
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleOptionClick(rightOption.value)}
            disabled={disabled}
            className="z-10 flex flex-1 items-center justify-center cursor-pointer"
            aria-label={rightOption.label || rightOption.value}
          >
            {rightOption.icon && (
              <div
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-opacity duration-200 ${
                  !isLeftActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {rightOption.icon}
              </div>
            )}
          </button>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
