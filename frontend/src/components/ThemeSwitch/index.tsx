import React, { useState } from "react";
import MoonIcon from "~/shared/icons/Moon";
import SunIcon from "~/shared/icons/Sun";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import { toogleTheme } from "~/redux/features/switchThemeSlice";

const ThemeSwitch: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toogleTheme())}
      className={`relative flex cursor-pointer justify-center rounded-bl-xl ${
        theme ? "bg-white py-3 text-black25" : "bg-black25 py-3 text-white"
      } `}
    >
      {theme ? (
        // TURN ON LIGHT MODE
        <>
          <div className="flex px-3">
            <span>LightMode</span>
            <div className="pl-2">
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
          <div className="flex px-3">
            <span>DarkMode</span>
            <div className="pl-2">
              <MoonIcon
                width={23}
                height={23}
                classname="bg-white rounded-full"
              />
              <div className="absolute right-[5px] top-[4px] h-6 w-6 rounded-bl-xl bg-black25"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitch;
