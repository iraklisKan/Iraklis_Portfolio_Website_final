"use client";

import { motion } from "framer-motion";
import { FaLocationArrow, FaLink } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi2";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { getImagePath } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pb-20 pt-36" aria-label="Introduction">
      {/* Spotlights */}
      <div aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        aria-hidden="true"
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            Creativity is intelligence having fun.
          </motion.p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Hi! I&apos;m Iraklis, a Fullstack Developer based in Cyprus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <a href="#projects" aria-label="See my projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#contact" aria-label="Open my links section">
              <MagicButton
                title="My Links"
                icon={<FaLink />}
                position="right"
              />
            </a>
            <a
              href={getImagePath("/IRAKLIS_CV_OCT.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my CV (PDF, opens in a new tab)"
            >
              <MagicButton
                title="View My CV"
                icon={<HiDocumentText />}
                position="right"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
