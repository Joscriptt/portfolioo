import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineDribbble, AiOutlinePlusCircle } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    img: "/img/img1.png",
    title: "Rectangle",
    subtitle: ["Product design, Icon design"],
    icon: <BsChevronRight />,
    href: "/rectangle",
  },
  {
    img: "/img/wink.png",
    title: "Morva labs",
    subtitle: ["Visual design, Branding"],
    href: "/morvalabs",
  },
  {
    img: "/img/foot.png",
    title: "Simply",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/simply",
  },
];

function page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-2 max-md:p-5 ">
        <div className="dark:bg-neutral-800 bg-[#F1F4F8] leading-8 rounded-lg p-4 flex gap-x-11">
          <div>
            <p>Client</p>
            <p>Company</p>
            <p>Project Type</p>
            <p>Year</p>
          </div>
          <div>
            <p>Goven</p>
            <p>Rectangle</p>
            <p>Production design, Icon Design</p>
            <p>2023</p>
          </div>
        </div>

        <div className="px-4">
          <div className="drop-shadow-md  mt-8">
            <img
              className="w-12 h-12 object-cover rounded-full "
              src="/img/img1.png"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-4xl font-InterBo my-5">Rectangle</h1>
            <p className="text-lg dark:text-neutral-300  text-neutral-900">
              An innovative platform that empowers businesses to efficiently
              manage their workforce, delivering a seamless user experience
              while distinguishing itself from competitors.
            </p>

            <div className="border-neutral-300 mt-5 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
              <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                View All
              </button>
              <FiArrowRight className="text-neutral-500" />
            </div>

            <div className="mt-8">
              <img
                className="aspect-square rounded-lg"
                src="/img/img3.png"
                alt=""
              />
              <p className="my-5 text-lg dark:text-neutral-300  text-neutral-900">
                A business owner enlisted my expertise as a product designer to
                develop a website that would boost their brand awareness and
                conversions. Crafting a modern, professional website, my
                priority was to set them apart from competitors and attract new
                customers.
              </p>

              <img
                className="aspect-square rounded-lg"
                src="/img/img5.png"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">
                The Problems to Solve
              </h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                To tackle this endeavor, our approach revolved around shaping a
                unique brand identity that adeptly conveyed Rectangle's
                fundamental principles of sustainability, innovation, and
                authenticity. Our team devoted meticulous attention to crafting
                an all-encompassing brand strategy, encompassing both product
                design and website development, geared towards establishing a
                visually captivating and unforgettable brand persona,
                distinguishing Rectangle amidst its competition.
              </p>

              <img
                className="aspect-square rounded-lg my-7"
                src="/img/img6.png"
                alt=""
              />

              <h3 className="text-lg my-6 font-InterBo">Our Solution</h3>
              <p className="text-lg dark:text-neutral-300  text-neutral-900">
                Through thoughtful product design, we ensured that Rectangle's
                offerings seamlessly aligned with their core values,
                incorporating sustainable materials and innovative design
                principles. Concurrently, our website development team crafted a
                user-centric digital platform that not only showcased
                Rectangle's products but also effectively conveyed their
                environmental mission, fostering authentic engagement with
                visitors.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#F6F8FA] mt-11 dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Projects
                </h1>
              </div>

              <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  View All
                </button>
                <FiArrowRight className="text-neutral-500" />
              </div>
            </div>
            <div className="mt-6">
              <div className="cursor-pointer">
                {links.map((link, indx) => (
                  <div
                    key={link.href}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                        <div className="drop-shadow-md">
                          <img
                            className="w-10 h-10 object-cover rounded-full "
                            src={link.img}
                            alt=""
                          />
                        </div>

                        <div className="max-md:mt-5">
                          <h1 className="text-xl font-InterMe ">
                            {link.title}
                          </h1>
                          <p className="text-lg text-neutral-400 max-md:my-1">
                            {link.subtitle.map((subt) => (
                              <span key={subt}>{subt}</span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </Link>

                    <div className="max-md:hidden md:block">
                      <BsChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
                <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                  <AiOutlinePlusCircle className="text-white tex-3" />
                  <span className="text-white  font-semibold">Hire Me</span>
                </div>
                <div className="border-neutral-300 shadow-md border dark:border-neutral-700  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700  dark:text-white font-semibold">
                    Copy Email
                  </span>
                </div>
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
                © 2023 Joscript Folio – Framer Template
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
    </div>
  );
}

export default page;
