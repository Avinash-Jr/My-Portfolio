import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const scrollIndicatorAnimation = {
  y: [0, 24, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="relative mx-auto w-full min-h-screen min-h-[100svh] overflow-hidden">
      <div
        className={`absolute inset-0 top-24 mx-auto flex max-w-7xl flex-row items-start gap-4 ${styles.paddingX} sm:top-[120px]`}
      >
        <div
          className="flex flex-col justify-center items-center mt-5"
          aria-hidden="true"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-2xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF] font-semibold">Avinash</span>
          </h1>

          <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-xl`}>
            I build modern, scalable user interfaces and high-performance web
            applications.
          </p>
        </div>
      </div>

      <main className="absolute inset-0">
        <ComputersCanvas />
      </main>

      <div className="absolute bottom-8 flex w-full flex-col items-center justify-center gap-6 px-6 xs:bottom-12 sm:bottom-14">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915EFF] rounded-3xl"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            {!prefersReducedMotion && (
              <motion.div
                animate={scrollIndicatorAnimation}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            )}
          </div>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/-Avinashkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Avinash-Jr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/avi09__official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <span className="hidden h-6 w-px bg-white/30 sm:block" />

          <a
            href="/Avinash_Kumar_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,1)] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default memo(Hero);
