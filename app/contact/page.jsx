import React from "react";
import { AiOutlineDribbble } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

function page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 ">
      <div className="p-2 lg:mx-4">
        <div className=" lg:p-6 p-3">
          <div className="flex justify-between  w-full">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl text-xl font-InterRe font-bold">
                Hire Me
              </h1>
            </div>
            <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
              <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
              <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                Available for work
              </p>
            </div>
          </div>

          <div className="mt-9">
            <h1 className="text-4xl font-InterBo">Design Inquiry</h1>
            <p className="dark:text-[#C0C0C0] my-5">
              Got an idea and need design help? Reach out now
            </p>

            <div>
              <div className="w-full flex gap-x-4">
                <input
                  className="w-1/2 p-3 outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 
                  bg-[#F1F4F8]
                  placeholder-zinc-600"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-1/2 p-3
                  
                  outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 bg-[#F1F4F8] placeholder-zinc-600"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-2">
                <textarea
                  name=""
                  id=""
                  cols="40"
                  className="w-full p-3 
                  bg-[#F1F4F8]
                  
                  outline-none border-none  dark:bg-[#2C2C2C]/40 placeholder-zinc-600 rounded-lg"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full p-3 rounded-lg text-white dark:bg-neutral-700 bg-black dark:hover:bg-neutral-800 transition-all ease-in-out duration-500 mt-4 font-InterBo">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Follow Me
              </h1>
            </div>

            <div className="flex gap-x-2">
              <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                <CiTwitter className="text-neutral-500 dark:text-white" />
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                <CiInstagram className="text-neutral-500 dark:text-white" />
              </div>{" "}
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
                <AiOutlineDribbble className="text-neutral-500 dark:text-white" />
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                <FaLinkedinIn className="text-neutral-500 dark:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
          <div className="text-center">
            <span className="text-neutral-700 dark:text-neutral-400">
              © 2023 Joscript Folio – Jo free Templates
            </span>
            <p className="text-neutral-500">
              By{" "}
              <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                Joscript
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
