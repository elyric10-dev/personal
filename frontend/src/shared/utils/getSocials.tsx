import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import GithubIcon from "../icons/techStacks/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const getSocials = () => {
  return [
    {
      logo: <FacebookIcon />,
      link: "https://www.facebook.com/elyric10/",
    },
    {
      logo: <GithubIcon />,
      link: "https://github.com/elyric10-dev",
    },
    {
      logo: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/elyric-manatad-422b15218/",
    },
  ];
};

export default getSocials;
