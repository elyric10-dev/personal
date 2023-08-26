import React from "react";
import CSSIcon from "../icons/techStacks/CSSIcon";
import DjangoIcon from "../icons/techStacks/DjangoIcon";
import DockerIcon from "../icons/techStacks/DockerIcon";
import FirestoreIcon from "../icons/techStacks/FirestoreIcon";
import FlutterIcon from "../icons/techStacks/FlutterIcon";
import FramerMotionIcon from "../icons/techStacks/FramerMotionIcon";
import GithubIcon from "../icons/techStacks/GithubIcon";
import HTMLIcon from "../icons/techStacks/HTMLIcon";
import JavaScriptIcon from "../icons/techStacks/JavaScriptIcon";
import LaravelIcon from "../icons/techStacks/LaravelIcon";
import MySQLIcon from "../icons/techStacks/MySQLIcon";
import NextJSIcon from "../icons/techStacks/NextJSIcon";
import NodeJSIcon from "../icons/techStacks/NodeJSIcon";
import PhpIcon from "../icons/techStacks/PhpIcon";
import PhpmyadminIcon from "../icons/techStacks/PhpmyadminIcon";
import PostmanIcon from "../icons/techStacks/PostmanIcon";
import ReactIcon from "../icons/techStacks/ReactIcon";
import ReduxIcon from "../icons/techStacks/ReduxIcon";
import TailwindIcon from "../icons/techStacks/TailwindIcon";
import TypeScriptIcon from "../icons/techStacks/TypeScript";
import VSCodeIcon from "../icons/techStacks/VSCodeIcon";
import XamppIcon from "../icons/techStacks/XamppIcon";

type getTechStacksIconProp = {
  isDark: boolean;
};
const getTechStacksIcon = ({ isDark }: getTechStacksIconProp) => {
  const iconClass = `${isDark ? "fill-[#212832]" : "fill-[#e7e1d7]"}`;
  return [
    {
      name: "CSS",
      techStack: <CSSIcon className={iconClass} />,
    },
    {
      name: "Django",
      techStack: <DjangoIcon className={iconClass} />,
    },
    {
      name: "Docker",
      techStack: <DockerIcon className={iconClass} />,
    },
    {
      name: "Firestore",
      techStack: <FirestoreIcon className={iconClass} />,
    },
    {
      name: "Flutter",
      techStack: <FlutterIcon className={iconClass} />,
    },
    {
      name: "Framer Motion",
      techStack: <FramerMotionIcon className={iconClass} />,
    },
    {
      name: "Github",
      techStack: <GithubIcon className={iconClass} />,
    },
    {
      name: "HTML",
      techStack: <HTMLIcon className={iconClass} />,
    },
    {
      name: "JavaScript",
      techStack: <JavaScriptIcon className={iconClass} />,
    },
    {
      name: "Laravel API",
      techStack: <LaravelIcon className={iconClass} />,
    },
    {
      name: "MySQL",
      techStack: <MySQLIcon className={iconClass} />,
    },
    {
      name: "Next JS",
      techStack: <NextJSIcon className={iconClass} />,
    },
    {
      name: "Node JS",
      techStack: <NodeJSIcon className={iconClass} />,
    },
    {
      name: "PHP",
      techStack: <PhpIcon className={iconClass} />,
    },
    {
      name: "PhpMyAdmin",
      techStack: <PhpmyadminIcon className={iconClass} />,
    },
    {
      name: "Postman",
      techStack: <PostmanIcon className={iconClass} />,
    },
    {
      name: "React",
      techStack: <ReactIcon className={iconClass} />,
    },
    {
      name: "Redux",
      techStack: <ReduxIcon className={iconClass} />,
    },
    {
      name: "Tailwind",
      techStack: <TailwindIcon className={iconClass} />,
    },
    {
      name: "TypeScript",
      techStack: <TypeScriptIcon className={iconClass} />,
    },
    {
      name: "VS Code",
      techStack: <VSCodeIcon className={iconClass} />,
    },
    {
      name: "XAMPP",
      techStack: <XamppIcon className={iconClass} />,
    },
  ];
};

export default getTechStacksIcon;
