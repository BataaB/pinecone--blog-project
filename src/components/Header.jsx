import Logo, { HamburgerMenu } from "@/icons/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = ({ handleChange }) => {
  const router = useRouter();
  return (
    <header className="w-screen xl:px-10 px-5 py-8">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="">
          <Logo />
        </div>
        <nav className="xl:flex gap-10 text-[#3B3C4A] hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <div className={router.pathname == "/blog" || "invisible"}>
          <input
            type="text"
            placeholder="Search"
            className="w-40 bg-gray-100 py-2 pl-4 pr-8 rounded-md text-sm
                          bg-[url('../icons/search.svg')] bg-no-repeat bg-[center_right_8px]
                          hidden xl:block"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <HamburgerMenu className="xl:hidden" />
      </div>
    </header>
  );
};
