import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";

type pageIdProp = {
  topPageId: string;
  currentPageId: string;
};
const DetectCurrentPage = ({ topPageId, currentPageId }: pageIdProp) => {
  const dispatch = useDispatch();
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const bottomIsInView = useInView(bottomRef);
  const topIsInView = useInView(topRef);

  useEffect(() => {
    if (topIsInView) {
      dispatch(setCurrentNavLink(topPageId));
    }
    if (bottomIsInView) {
      dispatch(setCurrentNavLink(currentPageId));
    }
    if (topIsInView && bottomIsInView) {
      dispatch(setCurrentNavLink(currentPageId));
    }
  }, [currentPageId, dispatch, bottomIsInView, topIsInView, topPageId]);

  return (
    <React.Fragment>
      <div
        ref={topRef}
        className="pointer-events-none absolute left-1/2 top-1/4 bg-red"
      ></div>
      <div
        ref={bottomRef}
        className="pointer-events-none absolute bottom-1/4 left-1/2 bg-red"
      ></div>
    </React.Fragment>
  );
};

export default DetectCurrentPage;
