import React, { useState } from "react";
import BrFlag from "../../assets/flags/br_flag.svg?react";
import UsaFlag from "../../assets/flags/usa_flag.svg?react";
import { useTranslation } from "react-i18next";

const Select: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(currentLanguage === "pt" ? {
    name: "pt",
    flag: (
      <BrFlag className="w-5 h-4" />
    ),
  } : {
    name: "en",
    flag: (
      <UsaFlag className="w-5 h-4" />
    ),
  });

  const countries = [
    {
      name: "pt",
      flag: (
        <BrFlag className="w-5 h-4" />
      ),
    },
    {
      name: "en",
      flag: (
        <UsaFlag className="w-5 h-4" />
      ),
    },
  ];

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry({
      name: country.name,
      flag: country.flag,
    });
    i18n.changeLanguage(country.name);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-sm ">
      {" "}
      <div className="flex relative">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex items-center pl-3 pr-0.5 py-0.5 gap-1 bg-gray-400 hover:bg-gray-500 rounded-full text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors cursor-pointer"
        >
          <span className="text-[8px]">
            {selectedCountry.name.toLowerCase()}
          </span>
          {selectedCountry.flag}
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full md:left-0 right-0 mt-1 z-20 bg-gray-200 border border-gray-300 rounded-lg shadow-lg w-[5rem]">
            <ul className="p-2 text-sm text-gray-700 font-medium">
              {countries.map((country) => (
                <li key={country.name}>
                  <button
                    onClick={() => handleCountrySelect(country)}
                    className="inline-flex items-center w-full p-2 hover:bg-gray-100 rounded-md text-left"
                  >
                    {country.flag}
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
