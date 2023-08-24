import React from "react";
import ArrowIcon from "~/shared/icons/ArrowIcon";
import { useDispatch } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import DetectCurrentPage from "~/components/DetectCurrentPage";

interface props {
  isDark?: boolean;
}
const ContactSection = ({ isDark }: props) => {
  const dispatch = useDispatch();

  const handleNav = (currentNavLink: string): void => {
    const element = document.getElementById(currentNavLink);
    dispatch(setCurrentNavLink(currentNavLink));

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="contact" className="relative h-full w-full ">
      CONTACT SECTION
      <DetectCurrentPage topPageId="portfolio" currentPageId="contact" />
      <div className="absolute bottom-0 h-20 w-full cursor-pointer">
        <div onClick={() => handleNav("home")}>
          <ArrowIcon
            className={`absolute bottom-3 right-0 mr-7 animate-bounce shadow-md ${
              isDark ? "bg-dark" : "bg-light"
            } `}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
