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
    <header className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
        flex flex-row items-start gap-5`}
      >
        {/* Accent Line */}
        <div
          className="flex flex-col justify-center items-center mt-5"
          aria-hidden="true"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Heading */}
        <div>
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

      {/* 3D Canvas */}
      <main className="absolute inset-0">
        <ComputersCanvas />
      </main>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-14 bottom-28 w-full flex justify-center items-center flex-col gap-8">
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

        {/* 🔗 Social Links + CV */}
        {/* 🔗 Social Links + CV (Transparent background) */}
<div className="flex items-center gap-6">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/-Avinashkumar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-cyan-400 transition-colors text-4xl"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Avinash-Jr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-cyan-400 transition-colors text-4xl"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/avi09__official/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-cyan-400 transition-colors text-4xl"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  {/* Divider */}
  <span className="w-px h-6 bg-white/30 mx-2" />

  {/* Download CV – Neon */}
 <a
  href="/Avinash_Kumar_Devops_Engineer_Resume.pdf"
  download
  className="
    px-5 py-2.5 rounded-lg
    text-sm font-semibold text-white
    bg-cyan-500
    shadow-[0_0_15px_rgba(34,211,238,0.8)]
    hover:bg-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,1)]
    transition-all duration-300
  "
>
  Download CV
</a>

</div>

      </div>
    </header>
  );
};

export default memo(Hero);
