"use client";

import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { getImagePath } from "@/lib/utils";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                >
                  <img
                    src={getImagePath("/bg.png")}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <img
                  src={getImagePath(item.img)}
                  alt={`${item.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="z-10 absolute bottom-0 transition-transform duration-500 group-hover/pin:scale-105"
                />
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base clamp-1">
                {item.title}
              </h3>

              <p className="lg:text-xl lg:font-normal font-light text-sm clamp-2 text-[#BEC1DD] my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 relative z-10">
                <div className="flex items-center" aria-label="Tech stack">
                  {item.iconLists.map((icon, i) => (
                    <div
                      key={`${item.id}-icon-${i}`}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i + 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target={
                        item.liveLink.startsWith("#") ? "_self" : "_blank"
                      }
                      rel="noopener noreferrer"
                      aria-label={`${item.title} — live demo`}
                      className="group/link flex justify-center items-center"
                    >
                      <span className="flex lg:text-base md:text-xs text-sm text-purple relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-purple after:transition-all after:duration-300 group-hover/link:after:w-full">
                        {item.liveLink.startsWith("#")
                          ? "Request Demo"
                          : "Live Demo"}
                      </span>
                      <FaLocationArrow
                        className="ms-2"
                        color="#CBACF9"
                        size={12}
                      />
                    </a>
                  )}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} — view source on GitHub`}
                    className="group/link flex justify-center items-center"
                  >
                    <span className="flex lg:text-base md:text-xs text-sm text-purple relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-purple after:transition-all after:duration-300 group-hover/link:after:w-full">
                      GitHub
                    </span>
                    <FaGithub className="ms-2" color="#CBACF9" size={14} />
                  </a>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
