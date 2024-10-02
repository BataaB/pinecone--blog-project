import { Header, Footer } from "@/components";
import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>MetaBlog</title>
      </Head>
      <div className="flex flex-col gap-[100px]">
        <Header />
        <div className="flex gap-10 items-center w-[642px] h-[208px] mx-auto">
          <span className="text-7xl">404</span>
          <div className="h-[156px] border-r-[1px] border-[#E8E8EA]"></div>
          <div className="flex flex-col gap-5 py-2">
            <h1 className="font-semibold text-2xl text-black">
              Page Not Found
            </h1>
            <p className="text-lg text-[#696A75]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <Link
              href={"/"}
              className="bg-[#4B6BFB] text-white font-medium py-[10px] px-4 rounded-md w-max"
            >
              Back To Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Custom404;
