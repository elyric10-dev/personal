import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile, setIsTablet } from "~/redux/features/isMobileSlice";
import { type RootState } from "~/redux/types";

const useIsMobile = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.isMobile.value);
  const isTablet = useSelector((state: RootState) => state.isMobile.isTablet);

  useEffect(() => {
    const handleResize = () => {
      const mobileSize = window.innerWidth <= 768;
      const tabletSize = window.innerWidth <= 1024;

      if (mobileSize) {
        dispatch(setIsMobile(mobileSize));
        dispatch(setIsTablet(false));
      } else if (tabletSize) {
        dispatch(setIsMobile(false));
        dispatch(setIsTablet(tabletSize));
      } else {
        dispatch(setIsMobile(false));
        dispatch(setIsTablet(false));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return { isMobile, isTablet };
};

export default useIsMobile;
