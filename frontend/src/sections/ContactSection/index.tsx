import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ArrowIcon from "~/shared/icons/ArrowIcon";
import { useDispatch } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

interface props {
  isDark?: boolean;
}
const ContactSection = ({ isDark }: props) => {
  const dispatch = useDispatch();
  const handleNav = (currentNavLink: string): void => {
    dispatch(setCurrentNavLink(currentNavLink));
    dispatch(setDirectScrollCount(0));
  };
  return (
    <div id="contact" className="relative h-screen w-full bg-pink-300">
      CONTACT SECTION
      <div className="absolute bottom-0 h-20 w-full animate-bounce cursor-pointer">
        <ScrollLink
          onClick={() => handleNav("home")}
          to="home"
          smooth={true}
          duration={500}
        >
          <ArrowIcon
            className={`absolute right-0 mr-7 shadow-md ${
              isDark ? "bg-dark" : "bg-light"
            } `}
            width={40}
            height={40}
          />
        </ScrollLink>
      </div>
    </div>
  );
};

export default ContactSection;
