"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { getImagePath } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96" aria-hidden="true">
        <img
          src={getImagePath("/footer-grid.svg")}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full opacity-50"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence
          to the next level?
        </h2>
        <a
          href="mailto:irakliskanbusiness@gmail.com"
          aria-label="Email Iraklis"
          className="mt-10"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Iraklis Kanarkotis
        </p>

        <nav aria-label="Social media" className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.link.includes("github") ? "GitHub profile" : "LinkedIn profile"}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 hover:scale-105 transition-all duration-200"
            >
              <img
                src={getImagePath(info.img)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={20}
                height={20}
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
