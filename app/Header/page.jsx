"use client";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  PiLaptopThin,
  PiUserLight,
  PiBagSimpleLight,
  PiHouseSimpleThin,
} from "react-icons/pi";
import { useTheme } from "next-themes";

let links = [
  { icons: <PiHouseSimpleThin />, path: "/" },
  { icons: <PiUserLight />, path: "/about" },
  { icons: <PiLaptopThin />, path: "/project" },
  { icons: <PiBagSimpleLight />, path: "/product" },
];

function Headpage() {
  const pathname = usePathname() || "";
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <nav className="  fixed w-full z-30 py-4 rounded-lg">
      <div className="lg:max-w-xl  md:max-w-[740px] mx-auto max-2xl px-4 lg:px-0 ">
        <div className="flex  items-center justify-between shadow-md bg-white  dark:bg-[#212121] dark:border-neutral-700/30 border rounded-xl p-3 ">
          <div className="flex space-x-3 items-center">
            {links.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  data-active={isActive}
                  key={item.path}
                  href={item.path}
                  onMouseOver={() => setHoveredPath(item.path)}
                  className={`px-1 py-1 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${
                    isActive ? "text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  <span
                    className={`  text-gray-400 dark:text-neutral-500 text-3xl relative z-20 ${
                      item.path === hoveredPath &&
                      "text-neutral-800 transition-all ease-in-out duration-500 "
                    } `}
                  >
                    {item.icons}
                  </span>

                  {item.path === hoveredPath && (
                    <motion.div
                      // -z-10
                      className="absolute bottom-0  z-10 left-0 h-full bg-stone-300 dark:bg-neutral-700  rounded-full "
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3">
            <div
              onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
              className="cursor-pointer"
            >
              {theme == "dark" ? (
                <BsSun />
              ) : (
                <BsMoon className="dark:text-neutral-700" />
              )}
            </div>

            <Link href={"/contact"}>
              <div className="bg-black dark:bg-[#373737]  px-2 rounded-md flex items-center gap-x-2 py-1">
                <AiOutlinePlusCircle className="text-white tex-3" />
                <span className="text-white  font-semibold">Hire Me</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headpage;
