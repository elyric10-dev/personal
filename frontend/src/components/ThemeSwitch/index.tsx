import React, { useState } from "react";
import MoonIcon from "~/shared/icons/Moon";
import SunIcon from "~/shared/icons/Sun";

const ThemeSwitch: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitch = (): void => {
    setDarkMode((prevMode) => {
      // Toggle darkMode state
      const newMode = !prevMode;

      // Apply the theme to the entire application by updating CSS custom properties
      if (newMode) {
        document.documentElement.style.setProperty("--text-color", "#f8be6a"); // Dark mode text color
      } else {
        document.documentElement.style.setProperty("--text-color", "#558ec3"); // Light mode text color
      }

      return newMode;
    });
  };
  return (
    <div
      onClick={handleSwitch}
      className={`relative flex cursor-pointer justify-center rounded-bl-xl ${
        darkMode ? "bg-white py-3 text-black25" : "bg-black25 py-3 text-white"
      } `}
    >
      {darkMode ? (
        // TURN ON LIGHT MODE
        <>
          <span>LightMode</span>
          <div className="pl-2">
            <SunIcon width={23} height={23} classname="bg-white rounded-full" />
          </div>
        </>
      ) : (
        // TURN ON DARK MODE
        <>
          <div className="flex">
            <span>DarkMode</span>
            <div className="pl-2">
              <MoonIcon
                width={23}
                height={23}
                classname="bg-white rounded-full"
              />
              <div className="absolute right-[13.5px] top-[4.5px] h-6 w-6 rounded-bl-xl bg-black25"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
