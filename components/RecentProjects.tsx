"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { getImagePath } from "@/lib/utils";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src={getImagePath("/bg.png")} alt="bgimg" />
                </div>
                <img
                  src={getImagePath(item.img)}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 
                className="font-bold lg:text-2xl md:text-xl text-base overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical" as const,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  setTimeout(() => {
                    if (target && target.matches(':hover')) {
                      target.style.webkitLineClamp = "unset";
                    }
                  }, 500);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.webkitLineClamp = "1";
                }}
              >
                {item.title}
              </h1>

              <div className="group/desc relative z-20">
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm overflow-hidden relative z-20"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: "0s",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    setTimeout(() => {
                      if (target && target.matches(':hover')) {
                        target.style.webkitLineClamp = "unset";
                        target.style.maxHeight = "12em";
                      }
                    }, 500);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.webkitLineClamp = "2";
                    e.currentTarget.style.maxHeight = "3.5em";
                  }}
                >
                  {item.des}
                </p>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3 relative z-10">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {item.liveLink && (
                    <a 
                      href={item.liveLink} 
                      target={item.liveLink.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex justify-center items-center group/link"
                    >
                      <p className="flex lg:text-base md:text-xs text-sm text-purple relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-purple after:transition-all after:duration-300 group-hover/link:after:w-full">
                        {item.liveLink.startsWith('#') ? 'Request Demo' : 'Live Demo'}
                      </p>
                      <FaLocationArrow className="ms-2" color="#CBACF9" size={12} />
                    </a>
                  )}
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center group/link"
                  >
                    <p className="flex lg:text-base md:text-xs text-sm text-purple relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-purple after:transition-all after:duration-300 group-hover/link:after:w-full">
                      GitHub
                    </p>
                    <FaLocationArrow className="ms-2" color="#CBACF9" size={12} />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
