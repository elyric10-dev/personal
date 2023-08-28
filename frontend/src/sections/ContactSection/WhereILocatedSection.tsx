import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const WhereILocatedSection = () => {
  const mapRef = useRef(null);
  const mapIsInView = useInView(mapRef, {once: true});
  return (
    <section className="relative flex flex-1 flex-col gap-6 rounded  bg-gradient-to-bl from-gray-200 to-gray-300 p-4">
      <div>
        <p className="">
          I hope my showcased projects have provided insight into my skills and
          capabilities as a web developer. If you&apos;re interested in
          collaborating with me on web development projects that align with my
          expertise, I&apos;d love to hear from you. Feel free to reach out
          through a social media or email.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-black25">Where I located:</h2>
        <p>
          <span className="font-bold">Location: </span>Mandaue City, Cebu,
          Philippines
        </p>
      </div>
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: mapIsInView ? 1 : 0, y: mapIsInView ? 0 : 200 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 w-full overflow-hidden rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)]"
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src="https://maps.google.com/maps?hl=en&amp;q=Mandaue City&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </motion.div>
    </section>
  );
};

export default WhereILocatedSection;
