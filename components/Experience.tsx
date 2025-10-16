import React from "react";

import { workExperience, education, certifications } from "@/data";
import { Button } from "./ui/MovingBorders";
import { getImagePath } from "@/lib/utils";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      {/* Work Experience Section */}
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={getImagePath(card.thumbnail)}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Education Section */}
      <h1 className="heading mt-20">
        My <span className="text-purple">education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        {education.map((edu) => (
          <Button
            key={edu.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={getImagePath("/exp3.svg")}
                alt="education"
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {edu.degree}
                </h1>
                <p className="text-start text-purple mt-2 font-semibold">
                  {edu.institution} - {edu.location}
                </p>
                <p className="text-start text-white-200 mt-1 text-sm">
                  {edu.period}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {edu.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Certifications Section */}
      <h1 className="heading mt-20">
        My <span className="text-purple">certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {certifications.map((cert) => (
          <Button
            key={cert.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={getImagePath("/exp4.svg")}
                alt="certification"
                className="w-16 h-16 mb-4"
              />
              <div>
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {cert.title}
                </h1>
                <p className="text-start text-purple mt-2 font-semibold">
                  {cert.provider} - {cert.status}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {cert.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
