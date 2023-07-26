import React, { useState, useEffect } from "react";
import MoonIcon from "~/shared/icons/Moon";
import SunIcon from "~/shared/icons/Sun";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import { toogleTheme } from "~/redux/features/switchThemeSlice";
import { setIsMobile } from "~/redux/features/isMobileSlice";

interface SwitchThemeProps {
  className?: string;
}

const ThemeSwitch: React.FC<SwitchThemeProps> = ({
  className,
}: SwitchThemeProps) => {
  const theme = useSelector((state: RootState) => state.theme.isDark);
  const isMobile = useSelector((state: RootState) => state.isMobile.value);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const currentTheme = isClient && theme;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 768;
      dispatch(setIsMobile(isSmall));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <div
      onClick={() => dispatch(toogleTheme())}
      className={` ${className || ""} ${
        currentTheme && theme
          ? "bg-white py-3 text-black25"
          : "bg-black25 py-3 text-white"
      } ${isMobile ? "rounded-bl-xl" : ""}`}
    >
      {currentTheme && theme ? (
        // TURN ON LIGHT MODE
        <>
          <div className="flex cursor-pointer px-3">
            {isMobile && <span>LightMode</span>}
            <div className={`${isMobile ? "pl-2" : ""}`}>
              <SunIcon
                width={23}
                height={23}
                classname="bg-white rounded-full"
              />
            </div>
          </div>
        </>
      ) : (
        // TURN ON DARK MODE
        <>
          <div className="flex cursor-pointer px-3">
            {isMobile && <span>DarkMode</span>}
            <div className={`${isMobile ? "pl-2" : ""}`}>
              <MoonIcon width={23} height={23} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
