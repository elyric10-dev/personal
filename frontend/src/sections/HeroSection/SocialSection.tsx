import FacebookIcon from "~/shared/icons/FacebookIcon";
import GithubIcon from "~/shared/icons/techStacks/GithubIcon";
import LinkedInIcon from "~/shared/icons/LinkedInIcon";
import { useDispatch } from "react-redux";
import ChevronDarkIcon from "~/shared/icons/ChevronDarkIcon";
import Link from "next/link";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import useIsDark from "~/hooks/useIsDark";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const SocialSection = () => {
  const dispatch = useDispatch();
  const isDark = useIsDark();

  const topLogoStyle = ` ${
    isDark ? "bg-dark" : "bg-light"
  } -top-100 absolute -translate-y-full rounded-full transition-all duration-500 group-hover:translate-y-0`;
  const bottomLogoStyle = `rounded-full bg-gray-50 transition-all duration-500 group-hover:translate-y-full`;
  const socials = [
    {
      topLogo: <FacebookIcon className={topLogoStyle} />,
      bottomLogo: <FacebookIcon className={bottomLogoStyle} />,
      link: "https://www.facebook.com/elyric10/",
    },
    {
      topLogo: <GithubIcon className={topLogoStyle} />,
      bottomLogo: <GithubIcon className={bottomLogoStyle} />,
      link: "https://github.com/elyric10-dev",
    },
    {
      topLogo: <LinkedInIcon className={topLogoStyle} />,
      bottomLogo: <LinkedInIcon className={bottomLogoStyle} />,
      link: "https://www.linkedin.com/in/elyric-manatad-422b15218/",
    },
  ];

  const handleNav = (currentNavLink: string): void => {
    dispatch(setCurrentNavLink(currentNavLink));
    dispatch(setDirectScrollCount(2));
    const element = document.getElementById(currentNavLink);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="absolute bottom-0 h-20 w-full">
      <div className={`relative flex h-full w-full backdrop-blur-[1.5px]`}>
        <ul className="flex h-full items-center gap-3 pl-8 shadow-lg">
          {socials.map((social, index) => (
            <Link href={social.link} key={index} target="__blank">
              <li
                className={`group relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-4 ${
                  isDark ? "border-dark" : "border-light"
                }`}
              >
                {social.topLogo}
                {social.bottomLogo}
              </li>
            </Link>
          ))}
        </ul>
        <div onClick={() => handleNav("about")}>
          <ChevronDarkIcon className="absolute inset-0 m-auto h-16 w-16 animate-bounce cursor-pointer rounded-full bg-white opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
