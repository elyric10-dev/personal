import FacebookIcon from "~/shared/icons/FacebookIcon";
import GithubIcon from "~/shared/icons/techStacks/GithubIcon";
import LinkedInIcon from "~/shared/icons/LinkedInIcon";
import Link from "next/link";
import useIsDark from "~/hooks/useIsDark";

const SocialSection = () => {
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
  return (
    <div className={`relative h-[10%] w-full shadow-lg backdrop-blur-[1.5px]`}>
      <div className={`relative flex h-full w-full`}>
        <ul className="flex h-full items-center gap-3 pl-8">
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
      </div>
    </div>
  );
};

export default SocialSection;
