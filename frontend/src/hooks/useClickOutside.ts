import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", outsideClick);

    return () => document.removeEventListener("mousedown", outsideClick);
  }, [handler]);

  return ref;
};

export default useClickOutside;
