import React, { Fragment, useRef } from "react";
import CSSIcon from "~/shared/icons/techStacks/CSSIcon";
import DjangoIcon from "~/shared/icons/techStacks/DjangoIcon";
import DockerIcon from "~/shared/icons/techStacks/DockerIcon";
import FirestoreIcon from "~/shared/icons/techStacks/FirestoreIcon";
import FlutterIcon from "~/shared/icons/techStacks/FlutterIcon";
import GithubIcon from "~/shared/icons/techStacks/GithubIcon";
import HTMLIcon from "~/shared/icons/techStacks/HTMLIcon";
import JavaScriptIcon from "~/shared/icons/techStacks/JavaScriptIcon";
import LaravelIcon from "~/shared/icons/techStacks/LaravelIcon";
import MySQLIcon from "~/shared/icons/techStacks/MySQLIcon";
import NextJSIcon from "~/shared/icons/techStacks/NextJSIcon";
import NodeJSIcon from "~/shared/icons/techStacks/NodeJSIcon";
import PhpIcon from "~/shared/icons/techStacks/PhpIcon";
import PhpmyadminIcon from "~/shared/icons/techStacks/PhpmyadminIcon";
import PostmanIcon from "~/shared/icons/techStacks/PostmanIcon";
import ReactIcon from "~/shared/icons/techStacks/ReactIcon";
import ReduxIcon from "~/shared/icons/techStacks/ReduxIcon";
import TailwindIcon from "~/shared/icons/techStacks/TailwindIcon";
import TypeScriptIcon from "~/shared/icons/techStacks/TypeScript";
import VSCodeIcon from "~/shared/icons/techStacks/VSCodeIcon";
import XamppIcon from "~/shared/icons/techStacks/XamppIcon";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import { type selectedCardIdProp } from "~/shared/utils/types";
import { motion, useInView } from "framer-motion";
import FramerMotionIcon from "~/shared/icons/techStacks/FramerMotionIcon";
import useIsMobile from "~/hooks/useIsMobile";

const TechStacks = ({ selectedCardId }: selectedCardIdProp) => {
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  const portfolioTechStacks = getPortfolioData();
  const techStackRef = useRef(null);
  const techStackIsInView = useInView(techStackRef, { once: true });
  const othertechStackRef = useRef(null);
  const otherTechStackIsInView = useInView(othertechStackRef, { once: true });

  const getPortfolioIcon = (icon: string) => {
    const className = "h-16 w-16";
    if (icon === "reactjs") return <ReactIcon className={className} />;
    else if (icon === "javascript")
      return <JavaScriptIcon className={className} />;
    else if (icon === "css") return <CSSIcon className={className} />;
    else if (icon === "html") return <HTMLIcon className={className} />;
    else if (icon === "nodejs") return <NodeJSIcon className={className} />;
    else if (icon === "typescript")
      return <TypeScriptIcon className={className} />;
    else if (icon === "tailwind") return <TailwindIcon className={className} />;
    else if (icon === "nextjs") return <NextJSIcon className={className} />;
    else if (icon === "mysql") return <MySQLIcon className={className} />;
    else if (icon === "flutter") return <FlutterIcon className={className} />;
    else if (icon === "firestore")
      return <FirestoreIcon className={className} />;
    else if (icon === "php") return <PhpIcon className={className} />;
    else if (icon === "laravel") return <LaravelIcon className={className} />;
    else if (icon === "django") return <DjangoIcon className={className} />;
    else if (icon === "redux") return <ReduxIcon className={className} />;
    else if (icon === "docker") return <DockerIcon className={className} />;
    else if (icon === "github") return <GithubIcon className={className} />;
    else if (icon === "xampp") return <XamppIcon className={className} />;
    else if (icon === "phpmyadmin")
      return <PhpmyadminIcon className={className} />;
    else if (icon === "vscode") return <VSCodeIcon className={className} />;
    else if (icon === "postman") return <PostmanIcon className={className} />;
    else if (icon === "framer-motion")
      return <FramerMotionIcon className={className} />;
  };
  return (
    <Fragment>
      <div
        className={`${isDesktop ? "max-w-[650px]" : "w-full"} grid gap-5 py-6`}
      >
        <h2 className="text-xl font-semibold">Tech Stack: </h2>
        <ul className="flex flex-wrap items-center justify-between gap-3">
          {portfolioTechStacks[selectedCardId - 1]?.techStacks.map(
            (techStack, index) => (
              <motion.li
                key={techStack.id}
                ref={techStackRef}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{
                  y: techStackIsInView ? 0 : 100,
                  scale: techStackIsInView ? 0.9 : 1,
                  opacity: techStackIsInView ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex flex-grow flex-col items-center justify-center rounded-lg bg-gray-200 px-12 py-6 shadow-md"
              >
                {getPortfolioIcon(techStack.icon)}
                <p>{techStack.name}</p>
              </motion.li>
            )
          )}
        </ul>
        <h2 className="text-xl font-semibold">Others: </h2>
        <ul className="flex flex-wrap items-center justify-between gap-3">
          {portfolioTechStacks[selectedCardId - 1]?.otherTechStacks.map(
            (otherTechStack, index) => (
              <motion.li
                key={otherTechStack.id}
                ref={othertechStackRef}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{
                  y: otherTechStackIsInView ? 0 : 100,
                  scale: otherTechStackIsInView ? 0.9 : 1,
                  opacity: otherTechStackIsInView ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className="flex flex-grow flex-col items-center justify-center rounded-lg bg-gray-200  px-12 py-6 shadow-md "
              >
                {getPortfolioIcon(otherTechStack.icon)}
                <p>{otherTechStack.name}</p>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default TechStacks;
