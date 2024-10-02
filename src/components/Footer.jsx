import {
  FacebookLogo,
  FooterLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from "@/icons/Logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-screen p-10 bg-[#F6F6F7]">
      <div className="max-w-[1215px] mx-auto flex flex-col gap-5">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="max-w-[290px] flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg text-[#181A2A]">About</h1>
              <p className="text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span>
                <span className="font-semibold">Email : </span>{" "}
                info@jstemplate.net
              </span>
              <span>
                <span className="font-semibold">Phone : </span> 123 456 7890
              </span>
            </div>
          </div>
          <div className="w-[521px]">
            <nav className="flex flex-col gap-2 w-min mx-auto">
              <Link href={"/"}>Home</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>
          </div>
          <div className="flex gap-4">
            <FacebookLogo />
            <TwitterLogo />
            <InstagramLogo />
            <LinkedInLogo />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between border-t-2 border-[#DCDDDF] py-8">
          <div>
            <FooterLogo />
          </div>
          <div className="flex gap-4 text-[#3B3C4A]">
            <span>Terms of Use</span>
            <div className="h-6 border-[1px] border-[#E8E8EA]"></div>
            <span>Privacy Policy</span>
            <div className="h-6 border-[1px] border-[#E8E8EA]"></div>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
