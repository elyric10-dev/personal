import React, { useRef } from "react";
import DetectCurrentPage from "~/components/DetectCurrentPage";
import { motion, useInView } from "framer-motion";
import WhereILocatedSection from "./WhereILocatedSection";
import MessageSection from "./MessageSection";
import Footer from "./Footer";

interface props {
  isDark?: boolean;
}
const ContactSection = ({ isDark }: props) => {
  const titleRef = useRef(null);
  const isInTitle = useInView(titleRef);

  return (
    <div id="contact" className="relative w-full ">
      <motion.h1
        ref={titleRef}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: isInTitle ? 0 : -200, opacity: isInTitle ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          isDark ? "text-gray-100" : "text-black25"
        } py-6 pl-6 text-5xl font-bold`}
      >
        CONTACT
      </motion.h1>
      <DetectCurrentPage topPageId="portfolio" currentPageId="contact" />
      <div className="relative grid h-full w-full gap-4">
        <article className="md:flex md:gap-4">
          <WhereILocatedSection />
          <MessageSection />
        </article>
        <Footer />
      </div>
    </div>
  );
};

export default ContactSection;
