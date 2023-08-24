import { useEffect, useState } from "react";

type useSwipeProp = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

const useSwipe = ({ onSwipeLeft, onSwipeRight }: useSwipeProp) => {
  const swipeThreshold = 100;
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches[0]?.clientX) {
        setStartX(event.touches[0].clientX);
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (startX === null) return;

      if (event.changedTouches[0]?.clientX) {
        const endX = event.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if (deltaX > swipeThreshold) {
          onSwipeLeft();
        } else if (deltaX < -swipeThreshold) {
          onSwipeRight();
        }

        setStartX(null);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, startX]);
};

export default useSwipe;
