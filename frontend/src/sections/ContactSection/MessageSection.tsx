import React from "react";
import LogoButton1 from "~/components/CustomButton/LogoButton";
import FacebookIcon from "~/shared/icons/FacebookIcon";
import LinkedInIcon from "~/shared/icons/LinkedInIcon";
import useIsDark from "~/hooks/useIsDark";
import EmailForm from "~/components/EmailForm";
import useIsMobile from "~/hooks/useIsMobile";
const MessageSection = () => {
  const isDark = useIsDark();
  const { isMobile } = useIsMobile();
  return (
    <section className="flex w-full flex-1 flex-col gap-4 pt-4 md:pt-0 lg:max-w-[500px]">
      <div className={`${isMobile ? "pl-4" : "pl-0"}`}>
        <h2
          className={`${
            isDark ? "text-gray-100" : "text-black25"
          } text-2xl font-bold`}
        >
          Interested about me?
        </h2>
        <h3
          className={`${
            isDark ? "text-gray-100" : "text-black25"
          } text-md py-2 font-semibold`}
        >
          Message with the following:
        </h3>
      </div>
      <div className="flex gap-1">
        <div className="relative flex-1 overflow-hidden rounded bg-gray-200 pl-1">
          <LogoButton1
            label="Facebook"
            text="Message with Facebook"
            href="https://m.me/elyric10/"
            svgIcon={
              <FacebookIcon className="h-10 w-10 rounded-full bg-gradient-to-b from-[#0355b2] to-[#046ee5] fill-gray-100" />
            }
            className="peer/item my-2 bg-gradient-to-b from-[#0355b2] to-[#046ee5] hover:w-[14rem]"
          />
        </div>
        <div className="relative flex-1 overflow-x-hidden rounded bg-gray-200 pl-1">
          <LogoButton1
            label="LinkedIn"
            text="Message with LinkedIn"
            href="https://www.linkedin.com/in/elyric-manatad-422b15218/"
            svgIcon={
              <LinkedInIcon className="h-10 w-10 rounded-full bg-gradient-to-b from-[#0355b2] to-[#046ee5] fill-gray-100 p-1" />
            }
            className="peer/item my-2 bg-gradient-to-b from-[#0355b2] to-[#046ee5] hover:w-[13.5rem]"
          />
        </div>
      </div>
      <div>
        <h3
          className={`${isDark ? "text-gray-100" : "text-black25"} ${
            isMobile ? "pl-4" : "pl-0"
          } text-md`}
        >
          Contact via email:
        </h3>
      </div>
      <EmailForm />
    </section>
  );
};

export default MessageSection;
