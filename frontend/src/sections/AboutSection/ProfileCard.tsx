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
      <PersonalCard>
        <div ref={cardRef} className="relative flex h-full w-full flex-col">
          <div className="relative h-28 w-full">
            <Image src="/bg.jpg" alt="card" objectFit="cover" fill />
          </div>
          <div className="relative h-10 w-full">
            <div
              className={`absolute bottom-0 left-[50%] h-20 w-20 -translate-x-10 overflow-hidden rounded-full border-4 ${
                isDark ? "border-dark" : "border-light"
              }`}
            >
              <Image
                src={`${isDark ? "/triDark.png" : "/triLight.png"}`}
                alt="profile"
                width={600}
                height={600}
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>
          <div className="w-full bg-green-400"></div>
        </div>

        <div
          className={`${
            isDark ? "text-gray-100" : "text-black25"
          } w-full text-center`}
        >
          <p className="text-xl font-bold">ELYRIC</p>
          <p className="text-xl font-bold">MANATAD</p>
        </div>
        <div className="mt-5 h-[2px] w-[100%] bg-gray-600"></div>
        <div
          className={`${
            isDark ? "text-gray-100" : "text-black25"
          } pb-16 text-lg font-semibold`}
        >
          WEB DEVELOPER
        </div>
        <ul className="absolute bottom-0 flex w-full items-center justify-evenly border-t border-gray-400 py-1">
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
