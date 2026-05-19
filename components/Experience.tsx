"use client";

import React from "react";
import { motion } from "framer-motion";

import { workExperience, education, certifications } from "@/data";
import { Button } from "./ui/MovingBorders";
import { getImagePath } from "@/lib/utils";

const cardStyle = {
  background: "rgb(4,7,29)",
  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
  borderRadius: `calc(1.75rem* 0.96)`,
} as const;

const borderRadius = "1.75rem";

// Deterministic per-card duration so no Math.random() runs on each render
const durationFor = (id: number) => 10000 + (id * 1733) % 8000;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const isCurrent = (period: string) =>
  /present/i.test(period) || /in progress/i.test(period);

const Experience = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <motion.h2 {...fadeUp} className="heading">
        My <span className="text-purple">work experience</span>
      </motion.h2>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card, idx) => {
          const current = isCurrent(card.desc);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Button
                duration={durationFor(card.id)}
                borderRadius={borderRadius}
                style={cardStyle}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={getImagePath(card.thumbnail)}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-start text-xl md:text-2xl font-bold">
                        {card.title}
                      </h3>
                      {current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple/10 text-purple text-xs px-2.5 py-1 border border-purple/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple/60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
                          </span>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>

      <motion.h2 {...fadeUp} className="heading mt-20">
        My <span className="text-purple">education</span>
      </motion.h2>

      <div className="w-full mt-12 grid grid-cols-1 gap-10">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <Button
              duration={durationFor(edu.id + 50)}
              borderRadius={borderRadius}
              style={cardStyle}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={getImagePath("/exp3.svg")}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h3 className="text-start text-xl md:text-2xl font-bold">
                    {edu.degree}
                  </h3>
                  <p className="text-start text-purple mt-2 font-semibold">
                    {edu.institution} — {edu.location}
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
          </motion.div>
        ))}
      </div>

      <motion.h2 {...fadeUp} className="heading mt-20">
        My <span className="text-purple">certifications</span>
      </motion.h2>

      <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {certifications.map((cert, idx) => {
          const current = isCurrent(cert.status);
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <Button
                duration={durationFor(cert.id + 100)}
                borderRadius={borderRadius}
                style={cardStyle}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={getImagePath("/exp4.svg")}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 mb-4"
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-start text-xl md:text-2xl font-bold">
                        {cert.title}
                      </h3>
                      {current && (
                        <span className="inline-flex items-center rounded-full bg-purple/10 text-purple text-[10px] px-2 py-0.5 border border-purple/30">
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="text-start text-purple mt-2 font-semibold text-sm">
                      {cert.provider} — {cert.status}
                    </p>
                    <p className="text-start text-white-100 mt-3 font-semibold text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
