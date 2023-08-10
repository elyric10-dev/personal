import { useSelector } from "react-redux";
import useIsClient from "./useIsClient";
import { type RootState } from "~/redux/types";

const useIsDark = (): boolean => {
  const isClient = useIsClient();
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);

  return currentTheme && isClient;
};

export default useIsDark;
