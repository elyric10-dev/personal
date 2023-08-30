import React, { useRef } from "react";
import Image from "next/image";

import PersonalCard from "~/components/PersonalCard";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import getSocials from "~/shared/utils/getSocials";

interface ProfileCardProp {
  isDark: boolean;
}
function ProfileCard({ isDark }: ProfileCardProp) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const socials = getSocials();
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateY: 360 }
          : { opacity: 0, y: 300, rotateY: 0 }
      }
      transition={{ duration: 1 }}
      className={`grid w-full min-w-[400px] flex-1 place-items-center py-6`}
    >
      <PersonalCard className="w-[400px] bg-gradient-to-tr from-[rgba(255,255,255,0.55)] to-[rgba(255,255,255,0.3)]">
        <div ref={cardRef} className="relative flex h-full w-full flex-col">
          <div
            className={`${
              isDark
                ? "border-[rgba(254,162,0,0.8)]"
                : "border-[rgba(0,146,255,0.8)]"
            } relative h-52 w-full overflow-hidden rounded-lg border-2`}
          >
            <Image src="/bg.jpg" alt="card" objectFit="cover" fill />
          </div>
          <div className="relative h-20 w-full">
            <div
              className={`absolute bottom-0 left-[50%] h-40 w-40 -translate-x-1/2 overflow-hidden rounded-full border-4 ${
                isDark
                  ? "border-[rgba(254,162,0,0.8)]"
                  : "border-[rgba(0,146,255,0.8)]"
              }`}
            >
              <Image
                src="/elyricmanatad.JPG"
                alt="profile"
                width={600}
                height={600}
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            isDark ? "text-gray-50" : "text-black25"
          } w-full text-center`}
        >
          <p className="text-xl font-bold">ELYRIC</p>
          <p className="text-xl font-bold">MANATAD</p>
        </div>
        <div className="mt-5 h-[2px] w-[100%] bg-gray-600"></div>
        <div className={`${isDark ? "text-gray-100" : "text-black25"} text-lg`}>
          WEB DEVELOPER
        </div>
        <div
          className={`w-full py-4 ${isDark ? "text-gray-300" : "text-black25"}`}
        >
          <h3 className="text-md">Previous Company:</h3>
          <div className="flex justify-between gap-2">
            <Image
              src="/sun_asterisk.png"
              alt="company"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col items-end justify-center">
              <h3 className="text-lg font-semibold">
                Sun Asterisk Philippines
              </h3>
              <p className="">Junior Web Developer (Internship)</p>
            </div>
          </div>
          <div className="flex justify-between gap-2 ">
            <div className="rounded-full bg-gray-200">
              <Image
                src="/question_mark.png"
                alt="company"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-end justify-center">
              <h3 className="text-lg font-semibold">Your company</h3>
              <p className="">will be displayed here</p>
            </div>
          </div>
        </div>
        <ul className="absolute bottom-0 flex w-full items-center justify-evenly border-t border-gray-400 py-2">
          {socials.map((social, index) => (
            <Link key={index} href={social.link} target="__blank">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className="h-10 w-10 overflow-hidden rounded-full border border-gray-600 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.75)]"
              >
                {social.logo}
              </motion.li>
            </Link>
          ))}
        </ul>
      </PersonalCard>
    </motion.div>
  );
}

export default ProfileCard;
