import { Header, Footer } from "@/components";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>MetaBlog | Contact</title>
      </Head>
      <div className="flex flex-col gap-[100px]">
        <Header />
        <div className="flex flex-col gap-[50px] w-[895px] h-[895px] mx-auto">
          <div className="py-[14px] flex flex-col gap-5 w-[643px] mx-auto">
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-4xl text-black">Contact Us</h1>
              <p className="text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex gap-[50px] py-[10px] justify-center">
              <div className="border-2 border-[#E8E8EA] w-[294px] rounded-xl p-4 flex flex-col gap-[10px]">
                <h2 className="font-semibold text-black text-2xl">Address</h2>
                <p className="text-lg text-[#696A75]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className="border-2 border-[#E8E8EA] w-[294px] rounded-xl p-4 flex flex-col gap-[10px]">
                <h2 className="font-semibold text-black text-2xl">Contact</h2>
                <p className="text-lg text-[#696A75] flex flex-col">
                  <span className="w-full">313-332-8662</span>{" "}
                  <span>info@email.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F7] rounded-[10px] w-[643px] mx-auto py-[29px] px-[35px]">
            <div className="w-[478px] flex flex-col gap-6">
              <h3 className="font-semibold text-lg text-black">
                Leave a Message
              </h3>
              <div className="flex gap-7">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 py-2 pl-5 rounded-[5px] border-[1px] border-[#DCDDDF]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="flex-1 py-2 pl-5 rounded-[5px] border-[1px] border-[#DCDDDF]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="py-2 pl-5 rounded-[5px] border-[1px] border-[#DCDDDF]"
              />
              <textarea
                rows={5}
                placeholder="Write a message"
                className="py-2 pl-5 rounded-[5px] border-[1px] border-[#DCDDDF] resize-none"
              ></textarea>
              <button className="w-max bg-[#4B6BFB] text-white py-[10px] px-4 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
