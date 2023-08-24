import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollCount } from "~/redux/features/mouseScrollSlice";
import { type RootState } from "~/redux/types";

const useMouseScroll = () => {
  const dispatch = useDispatch();
  const scrollCount = useSelector(
    (state: RootState) => state.mouseScroll.scrollCount
  );

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        dispatch(setScrollCount(1));
      } else if (event.deltaY < 0) {
        dispatch(setScrollCount(-1));
      }
    };

    let touchStart: number | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches[0]?.clientY) touchStart = event.touches[0]?.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStart !== null) {
        if (event.touches[0]?.clientY) {
          const touchEnd = event.touches[0].clientY;
          const distance = touchStart - touchEnd;

          if (distance > 50) {
            dispatch(setScrollCount(1));
          } else if (distance < -50) {
            dispatch(setScrollCount(-1));
          }
        }
      }
    };
    const handleTouchEnd = () => {
      touchStart = null;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dispatch]);

  return scrollCount;
};

export default useMouseScroll;
