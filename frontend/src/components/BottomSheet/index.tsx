import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "~/hooks/useClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "~/redux/features/portfolioBottomSheetSlice";
import { type RootState } from "~/redux/types";
import useIsDark from "~/hooks/useIsDark";

type bottomSheetProp = {
  children: React.ReactNode;
};
const BottomSheet = ({ children }: bottomSheetProp) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state: RootState) => state.portfolioBottomSheet.isVisible
  );
  const ref = useClickOutside(() => dispatch(setIsVisible(false)));
  const isDark = useIsDark();

  return (
    <React.Fragment>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed top-0 z-10 flex h-full w-full justify-center">
            <motion.div
              ref={ref}
              initial={{ y: 500 }}
              animate={{
                y: 0,
                transition: {
                  when: "beforeChildren",
                },
              }}
              exit={{
                y: 1000,
                transition: {
                  when: "afterChildren",
                },
              }}
              transition={{ duration: 0.2 }}
              className={`${
                isDark
                  ? "bg-gradient-to-tr from-cyan-950 to-cyan-800"
                  : "bg-gradient-to-tr from-gray-100 to-gray-200"
              } fixed bottom-0 z-20 h-3/4 max-h-[720px] w-full max-w-[1920px] overflow-y-scroll rounded-t-3xl px-2 pt-2 scrollbar-hide`}
            >
              <div className="h-full w-full overflow-y-scroll rounded-t-2xl scrollbar-hide">
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default BottomSheet;
