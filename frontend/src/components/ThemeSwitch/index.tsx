import MoonIcon from "~/shared/icons/Moon";
import SunIcon from "~/shared/icons/Sun";
import { useDispatch } from "react-redux";
import { toogleTheme } from "~/redux/features/switchThemeSlice";
import useIsDark from "~/hooks/useIsDark";
import useIsMobile from "~/hooks/useIsMobile";

interface SwitchThemeProps {
  className?: string;
}

const ThemeSwitch: React.FC<SwitchThemeProps> = ({
  className,
}: SwitchThemeProps) => {
  const dispatch = useDispatch();
  const isDark = useIsDark();
  const { isMobile } = useIsMobile();

  return (
    <div
      onClick={() => dispatch(toogleTheme())}
      className={` ${className || ""} ${
        isDark ? "bg-white py-3 text-black25" : "bg-black25 py-3 text-white"
      } ${isMobile ? "rounded-bl-xl" : ""}`}
    >
      {isDark ? (
        // TURN ON LIGHT MODE
        <>
          <div className="flex cursor-pointer px-3">
            {isMobile && <span>LightMode</span>}
            <div className={`${isMobile ? "pl-2" : ""}`}>
              <SunIcon width={23} height={23} classname="rounded-full" />
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
