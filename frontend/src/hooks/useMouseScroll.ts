import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import { setScrollCount } from "~/redux/features/mouseScrollSlice";
import { type RootState } from "~/redux/types";
import getNavLinks from "~/shared/utils/getNavLinks";

const useMouseScroll = () => {
  const dispatch = useDispatch();
  const navLinks = getNavLinks();
  const scrollCount = useSelector(
    (state: RootState) => state.mouseScroll.scrollCount
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      dispatch(setScrollCount(1));
    } else if (event.deltaY < 0) {
      dispatch(setScrollCount(-1));
    }
  };

  useEffect(() => {
    navLinks.forEach((navLink, index) => {
      if (scrollCount === index * 2) {
        const element = document.getElementById(navLink.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          dispatch(setCurrentNavLink(navLink.id));
        }
      }
    });
  }, [dispatch, navLinks, scrollCount]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return scrollCount;
};

export default useMouseScroll;
