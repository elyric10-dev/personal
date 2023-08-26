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
import FramerMotionIcon from "~/shared/icons/techStacks/FramerMotionIcon";

type getPortfolioDataProp = {
  icon: string;
  className?: string;
};

const getPortfolioIcon = ({ icon, className }: getPortfolioDataProp) => {
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
  else if (icon === "firestore") return <FirestoreIcon className={className} />;
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

export default getPortfolioIcon;
